import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Missing auth" }), { status: 401, headers: corsHeaders });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: userErr } = await userClient.auth.getUser();
    if (userErr || !user) {
      return new Response(JSON.stringify({ error: "Invalid session" }), { status: 401, headers: corsHeaders });
    }

    const adminClient = createClient(supabaseUrl, serviceKey);

    const { data: profile } = await adminClient
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single();

    if (!profile?.is_admin) {
      return new Response(JSON.stringify({ error: "Admin only" }), { status: 403, headers: corsHeaders });
    }

    const form = await req.formData();
    const name = form.get("name")?.toString();
    const short_description = form.get("short_description")?.toString();
    const category_id = form.get("category_id")?.toString();
    const version = form.get("version")?.toString();
    const min_cwm_version = form.get("min_cwm_version")?.toString();
    const max_cwm_version = form.get("max_cwm_version")?.toString() || null;
    const changelog = form.get("changelog")?.toString() || null;
    const slug = form.get("slug")?.toString();
    const file = form.get("file") as File | null;
    const imageFile = form.get("image") as File | null;

    if (!name || !slug || !version || !min_cwm_version || !file) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: corsHeaders });
    }
    if (!file.name.endsWith(".json")) {
      return new Response(JSON.stringify({ error: "File must be .json" }), { status: 400, headers: corsHeaders });
    }

    const text = await file.text();
    try {
      JSON.parse(text);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON content" }), { status: 400, headers: corsHeaders });
    }

    if (file.size > 5 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: "File too large (max 5MB)" }), { status: 400, headers: corsHeaders });
    }

    let { data: workflow } = await adminClient
      .from("workflows")
      .select("id")
      .eq("slug", slug)
      .single();

    let imageUrl: string | null = null;
    if (imageFile && imageFile.size > 0) {
      const imgExt = imageFile.name.split(".").pop();
      const imgPath = `${slug}/cover.${imgExt}`;
      const imgBuffer = await imageFile.arrayBuffer();
      const { error: imgErr } = await adminClient.storage
        .from("workflow-images")
        .upload(imgPath, imgBuffer, { contentType: imageFile.type, upsert: true });
      if (!imgErr) {
        const { data: pub } = adminClient.storage.from("workflow-images").getPublicUrl(imgPath);
        imageUrl = pub.publicUrl;
      }
    }

    if (!workflow) {
      const { data: newWorkflow, error: wErr } = await adminClient
        .from("workflows")
        .insert({ name, slug, short_description, category_id: category_id || null, image_url: imageUrl })
        .select("id")
        .single();
      if (wErr) throw wErr;
      workflow = newWorkflow;
    } else if (imageUrl) {
      await adminClient.from("workflows").update({ image_url: imageUrl }).eq("id", workflow.id);
    }

    const storagePath = `${slug}/${version}/workflow.json`;

    const { error: uploadErr } = await adminClient.storage
      .from("workflow-artifacts")
      .upload(storagePath, text, { contentType: "application/json", upsert: false });

    if (uploadErr) {
      return new Response(JSON.stringify({ error: "Version already exists or upload failed: " + uploadErr.message }), { status: 400, headers: corsHeaders });
    }

    const { data: versionRow, error: vErr } = await adminClient
      .from("workflow_versions")
      .insert({
        workflow_id: workflow.id,
        version,
        min_cwm_version,
        max_cwm_version,
        changelog,
        storage_path: storagePath,
        file_size: file.size,
      })
      .select()
      .single();

    if (vErr) throw vErr;

    const tagsRaw = form.get("tags")?.toString() || "";
    const tagNames = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);

    for (const tagName of tagNames) {
      const tagSlug = tagName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      let { data: tag } = await adminClient
        .from("tags")
        .select("id")
        .eq("slug", tagSlug)
        .single();

      if (!tag) {
        const { data: newTag } = await adminClient
          .from("tags")
          .insert({ name: tagName, slug: tagSlug })
          .select("id")
          .single();
        tag = newTag;
      }

      if (tag) {
        await adminClient
          .from("workflow_tags")
          .upsert({ workflow_id: workflow.id, tag_id: tag.id }, { onConflict: "workflow_id,tag_id" });
      }
    }

    return new Response(JSON.stringify({ success: true, workflow_id: workflow.id, version: versionRow }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: corsHeaders });
  }
});