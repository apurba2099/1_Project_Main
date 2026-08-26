import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ALLOWED_EXT = [".exe", ".zip", ".msi", ".dmg", ".pkg", ".tar.gz"];

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
    const changelog = form.get("changelog")?.toString() || null;
    const slug = form.get("slug")?.toString();
    const file = form.get("file") as File | null;
    const imageFile = form.get("image") as File | null;

    if (!name || !slug || !version || !file) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: corsHeaders });
    }

    const hasAllowedExt = ALLOWED_EXT.some((ext) => file.name.toLowerCase().endsWith(ext));
    if (!hasAllowedExt) {
      return new Response(JSON.stringify({ error: "File type not allowed" }), { status: 400, headers: corsHeaders });
    }

    if (file.size > 50 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: "File too large (max 50MB)" }), { status: 400, headers: corsHeaders });
    }

    let { data: product } = await adminClient
      .from("products")
      .select("id")
      .eq("slug", slug)
      .single();

    let imageUrl: string | null = null;
    if (imageFile && imageFile.size > 0) {
      const imgExt = imageFile.name.split(".").pop();
      const imgPath = `${slug}/cover.${imgExt}`;
      const imgBuffer = await imageFile.arrayBuffer();
      const { error: imgErr } = await adminClient.storage
        .from("product-images")
        .upload(imgPath, imgBuffer, { contentType: imageFile.type, upsert: true });
      if (imgErr) {
        console.log("Image upload error:", imgErr.message);
      } else {
        const { data: pub } = adminClient.storage.from("product-images").getPublicUrl(imgPath);
        imageUrl = pub.publicUrl;
      }
    }

    if (!product) {
      const { data: newProduct, error: pErr } = await adminClient
        .from("products")
        .insert({ name, slug, short_description, category_id: category_id || null, image_url: imageUrl })
        .select("id")
        .single();
      if (pErr) throw pErr;
      product = newProduct;
    } else if (imageUrl) {
      await adminClient.from("products").update({ image_url: imageUrl }).eq("id", product.id);
    }

    const fileBuffer = await file.arrayBuffer();
    const storagePath = `${slug}/${version}/${file.name}`;

    const { error: uploadErr } = await adminClient.storage
      .from("product-artifacts")
      .upload(storagePath, fileBuffer, { contentType: file.type || "application/octet-stream", upsert: false });

    if (uploadErr) {
      return new Response(JSON.stringify({ error: "Version already exists or upload failed: " + uploadErr.message }), { status: 400, headers: corsHeaders });
    }

    const { data: versionRow, error: vErr } = await adminClient
      .from("product_versions")
      .insert({
        product_id: product.id,
        version,
        changelog,
        storage_path: storagePath,
        file_name: file.name,
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
          .from("product_tags")
          .upsert({ product_id: product.id, tag_id: tag.id }, { onConflict: "product_id,tag_id" });
      }
    }

    return new Response(JSON.stringify({ success: true, product_id: product.id, version: versionRow }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: corsHeaders });
  }
});