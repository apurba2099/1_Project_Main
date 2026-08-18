import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
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

    const url = new URL(req.url);
    const versionId = url.pathname.split("/").pop();

    if (!versionId) {
      return new Response(JSON.stringify({ error: "Missing versionId" }), { status: 400, headers: corsHeaders });
    }

    const adminClient = createClient(supabaseUrl, serviceKey);

    const { data: version, error: vErr } = await adminClient
      .from("workflow_versions")
      .select("id, workflow_id, storage_path")
      .eq("id", versionId)
      .single();

    if (vErr || !version) {
      return new Response(JSON.stringify({ error: "Version not found" }), { status: 404, headers: corsHeaders });
    }

    const { data: signedUrlData, error: signErr } = await adminClient.storage
      .from("workflow-artifacts")
      .createSignedUrl(version.storage_path, 60);

    if (signErr || !signedUrlData) {
      return new Response(JSON.stringify({ error: "Could not generate download link" }), { status: 500, headers: corsHeaders });
    }

    await adminClient.from("workflow_downloads").insert({
      workflow_id: version.workflow_id,
      workflow_version_id: version.id,
      user_id: user.id,
    });

    return new Response(JSON.stringify({ url: signedUrlData.signedUrl }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: corsHeaders });
  }
});