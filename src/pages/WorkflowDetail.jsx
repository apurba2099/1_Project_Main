import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function WorkflowDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [workflow, setWorkflow] = useState(null);
  const [versions, setVersions] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadError, setDownloadError] = useState("");

  useEffect(() => {
    async function load() {
      const { data: wf } = await supabase
        .from("workflows")
        .select("id, name, short_description, categories(name)")
        .eq("slug", slug)
        .eq("is_hidden", false)
        .single();

      if (!wf) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setWorkflow(wf);

      const { data: versionRows } = await supabase
        .from("workflow_versions")
        .select("id, version, min_cwm_version, max_cwm_version, changelog, created_at")
        .eq("workflow_id", wf.id)
        .order("created_at", { ascending: false });

      setVersions(versionRows || []);

      const { data: tagRows } = await supabase
        .from("workflow_tags")
        .select("tags(name)")
        .eq("workflow_id", wf.id);

      setTags(tagRows?.map((t) => t.tags?.name).filter(Boolean) || []);
      setLoading(false);
    }
    load();
  }, [slug]);

  async function handleDownload(versionId) {
    setDownloadError("");
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      navigate(`/login?returnTo=/workflows/${slug}`);
      return;
    }

    setDownloadingId(versionId);
    const res = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/download-workflow/${versionId}`,
      {
        headers: { Authorization: `Bearer ${session.access_token}` },
      }
    );
    const result = await res.json();
    setDownloadingId(null);

    if (!res.ok) {
      setDownloadError(result.error || "Download failed.");
      return;
    }

    const fileRes = await fetch(result.url);
    const blob = await fileRes.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "workflow.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  if (loading) {
    return <div className="min-h-screen bg-site-bg text-white px-6 py-10">Loading...</div>;
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-site-bg text-white px-6 py-10">
        <p className="text-muted">Workflow not found.</p>
      </div>
    );
  }

  const [latestVersion, ...olderVersions] = versions;

  return (
    <div className="min-h-screen bg-site-bg text-white px-6 py-10 font-inter">
      <div className="max-w-[700px] mx-auto">
        <h1 className="text-2xl font-bold">{workflow.name}</h1>
        {workflow.categories?.name && (
          <span className="text-sm text-accent">{workflow.categories.name}</span>
        )}
        <p className="text-muted mt-3">{workflow.short_description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-card-alt rounded-full border border-white/10">
                {t}
              </span>
            ))}
          </div>
        )}

        {latestVersion && (
          <div className="mt-6 bg-card-bg border border-white/10 rounded-lg p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Version {latestVersion.version}</h2>
              <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">Latest</span>
            </div>
            <p className="text-sm text-muted mt-2">
              Min CWM: {latestVersion.min_cwm_version}
              {latestVersion.max_cwm_version && ` — Max CWM: ${latestVersion.max_cwm_version}`}
            </p>
            {latestVersion.changelog && (
              <p className="text-sm text-muted mt-2">{latestVersion.changelog}</p>
            )}

            <button
              onClick={() => handleDownload(latestVersion.id)}
              disabled={downloadingId === latestVersion.id}
              className="mt-4 w-full py-2.5 rounded-md bg-accent text-white font-semibold text-sm disabled:opacity-60"
            >
              {downloadingId === latestVersion.id ? "Preparing download..." : "Download"}
            </button>
          </div>
        )}

        {downloadError && <p className="text-red-400 text-sm mt-2">{downloadError}</p>}

        {olderVersions.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-muted mb-3">Version History</h3>
            <div className="space-y-3">
              {olderVersions.map((v) => (
                <div key={v.id} className="bg-card-alt border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Version {v.version}</h4>
                    <button
                      onClick={() => handleDownload(v.id)}
                      disabled={downloadingId === v.id}
                      className="text-xs px-3 py-1.5 rounded-md bg-card-bg border border-white/10 hover:border-accent disabled:opacity-60"
                    >
                      {downloadingId === v.id ? "Preparing..." : "Download"}
                    </button>
                  </div>
                  <p className="text-xs text-muted mt-1">
                    Min CWM: {v.min_cwm_version}
                    {v.max_cwm_version && ` — Max CWM: ${v.max_cwm_version}`}
                  </p>
                  {v.changelog && <p className="text-xs text-muted mt-1">{v.changelog}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}