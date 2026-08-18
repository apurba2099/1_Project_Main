import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AdminLibraryEdit() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [workflowId, setWorkflowId] = useState(null);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [tags, setTags] = useState("");
    const [currentImageUrl, setCurrentImageUrl] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        async function load() {
            const { data: wf } = await supabase
                .from("workflows")
                .select("id, name, short_description, category_id, image_url")
                .eq("slug", slug)
                .single();

            if (wf) {
                setWorkflowId(wf.id);
                setName(wf.name);
                setShortDescription(wf.short_description || "");
                setCategoryId(wf.category_id || "");
                setCurrentImageUrl(wf.image_url || null);

                const { data: tagRows } = await supabase
                    .from("workflow_tags")
                    .select("tags(name)")
                    .eq("workflow_id", wf.id);
                setTags((tagRows || []).map((t) => t.tags?.name).filter(Boolean).join(", "));
            }

            const { data: cats } = await supabase.from("categories").select("id, name");
            setCategories(cats || []);
            setLoading(false);
        }
        load();
    }, [slug]);

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSuccess("");
        setSaving(true);

        let imageUrl = currentImageUrl;
        if (newImage) {
            const imgExt = newImage.name.split(".").pop();
            const imgPath = `${slug}/cover.${imgExt}`;
            const { error: imgErr } = await supabase.storage
                .from("workflow-images")
                .upload(imgPath, newImage, { upsert: true, contentType: newImage.type });
            if (!imgErr) {
                const { data: pub } = supabase.storage.from("workflow-images").getPublicUrl(imgPath);
                imageUrl = pub.publicUrl;
            }
        }

        const { error: updateErr } = await supabase
            .from("workflows")
            .update({
                name,
                short_description: shortDescription,
                category_id: categoryId || null,
                image_url: imageUrl,
            })
            .eq("id", workflowId);

        if (updateErr) {
            setSaving(false);
            setError(updateErr.message);
            return;
        }

        const tagNames = tags.split(",").map((t) => t.trim()).filter(Boolean);

        await supabase.from("workflow_tags").delete().eq("workflow_id", workflowId);

        for (const tagName of tagNames) {
            const tagSlug = tagName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            let { data: tag } = await supabase.from("tags").select("id").eq("slug", tagSlug).single();
            if (!tag) {
                const { data: newTag } = await supabase
                    .from("tags")
                    .insert({ name: tagName, slug: tagSlug })
                    .select("id")
                    .single();
                tag = newTag;
            }
            if (tag) {
                await supabase.from("workflow_tags").insert({ workflow_id: workflowId, tag_id: tag.id });
            }
        }

        setSaving(false);
        setSuccess("Metadata updated.");
        setTimeout(() => navigate("/admin/library"), 1200);
    }

    if (loading) {
        return <div className="min-h-screen bg-site-bg text-white px-6 py-10">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-site-bg text-white px-6 py-10 font-inter">
            <div className="max-w-[600px] mx-auto bg-card-bg rounded-xl p-8 border border-white/10">
                <h1 className="text-xl font-bold mb-6">Edit Workflow — {slug}</h1>

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
                        <label className="block text-xs text-muted mb-1">Tags (comma-separated)</label>
                        <input value={tags} onChange={(e) => setTags(e.target.value)}
                            className="w-full px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent" />
                    </div>

                    <div>
                        <label className="block text-xs text-muted mb-1">Cover Image</label>
                        {currentImageUrl && (
                            <img src={currentImageUrl} alt="Current" className="w-32 h-20 object-cover rounded-md mb-2" />
                        )}
                        <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => setNewImage(e.target.files[0])}
                            className="w-full text-sm text-muted" />
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    {success && <p className="text-green-400 text-sm">{success}</p>}

                    <button type="submit" disabled={saving}
                        className="w-full py-3 rounded-md bg-accent text-white font-semibold text-sm disabled:opacity-60">
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
}