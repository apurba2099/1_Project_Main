import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Workflows() {
  const [workflows, setWorkflows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [workflowTagsMap, setWorkflowTagsMap] = useState({});
  const [versionRangeMap, setVersionRangeMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [cwmVersion, setCwmVersion] = useState("");

  useEffect(() => {
    supabase
      .from("workflows")
      .select("id, name, slug, short_description, image_url, category_id, categories(name)")
      .eq("is_hidden", false)
      .then(({ data }) => {
        setWorkflows(data || []);
        setLoading(false);
      });
    supabase.from("categories").select("id, name").then(({ data }) => {
      if (data) setCategories(data);
    });
    supabase.from("tags").select("id, name").then(({ data }) => {
      if (data) setAllTags(data);
    });
    supabase.from("workflow_tags").select("workflow_id, tag_id, tags(id, name)").then(({ data }) => {
      if (data) {
        const map = {};
        data.forEach((row) => {
          if (!map[row.workflow_id]) map[row.workflow_id] = [];
          map[row.workflow_id].push({ id: row.tag_id, name: row.tags?.name });
        });
        setWorkflowTagsMap(map);
      }
    });
    supabase
      .from("workflow_versions")
      .select("workflow_id, min_cwm_version, max_cwm_version, created_at")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) {
          const map = {};
          data.forEach((row) => {
            if (!map[row.workflow_id]) {
              map[row.workflow_id] = { min: row.min_cwm_version, max: row.max_cwm_version };
            }
          });
          setVersionRangeMap(map);
        }
      });
  }, []);

  function toggleTag(tagId) {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  }

  function matchesCwmVersion(range, v) {
    if (!v || !range) return true;
    if (range.min && v < range.min) return false;
    if (range.max && v > range.max) return false;
    return true;
  }

  const filtered = workflows.filter((w) => {
    const matchesSearch = w.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !categoryId || w.category_id === categoryId;
    const wfTagIds = (workflowTagsMap[w.id] || []).map((t) => t.id);
    const matchesTags = selectedTags.length === 0 || selectedTags.some((t) => wfTagIds.includes(t));
    const matchesCwm = matchesCwmVersion(versionRangeMap[w.id], cwmVersion);
    return matchesSearch && matchesCategory && matchesTags && matchesCwm;
  });

  return (
    <div className="min-h-screen bg-site-bg text-white px-6 py-10 font-inter">
      <div className="max-w-site mx-auto">
        <h1 className="text-2xl font-bold mb-6">Workflow Library</h1>

        <div className="flex flex-wrap gap-3 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="w-full max-w-sm px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent"
          />
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <input
            type="text"
            value={cwmVersion}
            onChange={(e) => setCwmVersion(e.target.value)}
            placeholder="Your CWM version (e.g. 2.1.0)"
            className="px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map((t) => (
            <button
              key={t.id}
              onClick={() => toggleTag(t.id)}
              className={`text-xs px-3 py-1 rounded-full border ${selectedTags.includes(t.id)
                  ? "bg-accent text-white border-accent"
                  : "bg-card-alt text-muted border-white/10"
                }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {loading && <p className="text-muted">Loading...</p>}
        {!loading && filtered.length === 0 && (
          <p className="text-muted">No workflows found.</p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <Link
              key={w.id}
              to={`/workflows/${w.slug}`}
              className="flex flex-col bg-card-bg border border-white/10 rounded-lg p-5 hover:bg-card-hover transition h-full"
            >
              <div className="w-full aspect-video rounded-md mb-3 overflow-hidden bg-card-alt">
                {w.image_url && (
                  <img src={w.image_url} alt={w.name} className="w-full h-full object-cover" />
                )}
              </div>

              <h2 className="font-semibold">{w.name}</h2>
              {w.categories?.name && (
                <span className="text-xs text-accent">{w.categories.name}</span>
              )}

              {(workflowTagsMap[w.id] || []).length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {(workflowTagsMap[w.id] || []).map((t) => (
                    <span key={t.id} className="text-[10px] px-2 py-0.5 bg-card-alt rounded-full border border-white/10 text-muted">
                      {t.name}
                    </span>
                  ))}
                </div>
              )}

              {versionRangeMap[w.id] && (
                <span className="inline-block w-fit text-[10px] px-2 py-0.5 mt-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  CWM {versionRangeMap[w.id].min}
                  {versionRangeMap[w.id].max && ` – ${versionRangeMap[w.id].max}`}
                </span>
              )}

              <p className="text-sm text-muted mt-2 flex-1">{w.short_description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}