import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AdminProductsNew() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [version, setVersion] = useState("");
  const [changelog, setChangelog] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    supabase.from("categories").select("id, name").then(({ data }) => {
      if (data) setCategories(data);
    });
  }, []);

  function slugify(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !version || !file) {
      setError("Please fill all required fields and choose a file.");
      return;
    }

    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();

    const form = new FormData();
    form.append("name", name);
    form.append("slug", slugify(name));
    form.append("short_description", shortDescription);
    form.append("category_id", categoryId);
    form.append("version", version);
    form.append("changelog", changelog);
    form.append("tags", tags);
    if (image) form.append("image", image);
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

    setSuccess("Product created successfully.");
    setTimeout(() => navigate("/admin/products"), 1200);
  }

  return (
    <div className="min-h-screen bg-site-bg text-white px-6 py-10 font-inter">
      <div className="max-w-[600px] mx-auto bg-card-bg rounded-xl p-8 border border-white/10">
        <h1 className="text-xl font-bold mb-6">Create Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-muted mb-1">Name *</label>
            <input value={name} onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent" />
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Short Description</label>
            <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}
              className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent" rows={3} />
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Category</label>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}
              className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent">
              <option value="">-- Select --</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Version *</label>
            <input value={version} onChange={(e) => setVersion(e.target.value)} placeholder="1.0.0"
              className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent" />
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Changelog (optional)</label>
            <textarea value={changelog} onChange={(e) => setChangelog(e.target.value)}
              className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent" rows={2} />
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Tags (comma-separated)</label>
            <input value={tags} onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent" />
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Cover Image (optional)</label>
            <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-muted" />
            <p className="text-[11px] text-muted/70 mt-1">Max 2MB (PNG, JPG, WEBP)</p>
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">Installer File * (.exe, .zip, .msi, .dmg, .pkg)</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}
              className="w-full text-sm text-muted" />
            <p className="text-[11px] text-muted/70 mt-1">Max 50MB</p>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-md bg-accent text-white font-semibold text-sm disabled:opacity-60">
            {loading ? "Uploading..." : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
}