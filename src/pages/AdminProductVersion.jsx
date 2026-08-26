import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AdminProductVersion() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [version, setVersion] = useState("");
  const [changelog, setChangelog] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    supabase
      .from("products")
      .select("name")
      .eq("slug", slug)
      .single()
      .then(({ data }) => setProductName(data?.name || slug));
  }, [slug]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!version || !file) {
      setError("Please fill all required fields and choose a file.");
      return;
    }

    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();

    const form = new FormData();
    form.append("name", productName);
    form.append("slug", slug);
    form.append("version", version);
    form.append("changelog", changelog);
    form.append("file", file);

    const res = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/upload-product`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${session.access_token}` },
        body: form,
      }
    );
    const result = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(result.error || "Upload failed.");
      return;
    }

    setSuccess("New version added successfully.");
    setTimeout(() => navigate("/admin/products"), 1200);
  }

  return (
    <div className="min-h-screen bg-site-bg text-white px-6 py-10 font-inter">
      <div className="max-w-[600px] mx-auto bg-card-bg rounded-xl p-8 border border-white/10">
        <h1 className="text-xl font-bold mb-6">Add Version — {productName}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-muted mb-1">Version *</label>
            <input value={version} onChange={(e) => setVersion(e.target.value)} placeholder="1.1.0"
              className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent" />
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Changelog (optional)</label>
            <textarea value={changelog} onChange={(e) => setChangelog(e.target.value)}
              className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent" rows={2} />
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Installer File *</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}
              className="w-full text-sm text-muted" />
            <p className="text-[11px] text-muted/70 mt-1">Max 50MB</p>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-md bg-accent text-white font-semibold text-sm disabled:opacity-60">
            {loading ? "Uploading..." : "Add Version"}
          </button>
        </form>
      </div>
    </div>
  );
}