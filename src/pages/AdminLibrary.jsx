import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AdminLibrary() {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWorkflows();
  }, []);

  function loadWorkflows() {
    supabase
      .from("workflows")
      .select("id, name, slug, is_hidden")
      .then(({ data }) => {
        setWorkflows(data || []);
        setLoading(false);
      });
  }

  async function toggleHidden(id, current) {
    await supabase.from("workflows").update({ is_hidden: !current }).eq("id", id);
    loadWorkflows();
  }

  return (
    <div className="min-h-screen bg-[rgb(4,4,10)] text-white px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Admin Library</h1>
        <div className="flex gap-2">
          <Link
            to="/admin/categories"
            className="text-sm px-4 py-2 rounded-md bg-card-alt border border-white/10 hover:border-accent"
          >
            Manage Categories
          </Link>
          <Link
            to="/admin/library/new"
            className="text-sm px-4 py-2 rounded-md bg-accent text-white font-semibold"
          >
            + New Workflow
          </Link>
        </div>
      </div>

      {loading && <p className="text-white/50">Loading...</p>}
      {!loading && workflows.length === 0 && (
        <p className="text-white/50 mt-2">Workflow library — coming soon.</p>
      )}

      <div className="space-y-2 mt-4">
        {workflows.map((w) => (
          <div
            key={w.id}
            className="flex items-center justify-between bg-card-bg border border-white/10 rounded-md px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <span>{w.name}</span>
              {w.is_hidden && (
                <span className="text-[10px] px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full">Hidden</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleHidden(w.id, w.is_hidden)}
                className="text-sm px-3 py-1.5 rounded-md bg-card-alt border border-white/10 hover:border-accent"
              >
                {w.is_hidden ? "Unhide" : "Hide"}
              </button>
              <Link
                to={`/admin/library/${w.slug}`}
                className="text-sm px-3 py-1.5 rounded-md bg-card-alt border border-white/10 hover:border-accent"
              >
                Add Version
              </Link>
              <Link
                to={`/admin/library/${w.slug}/edit`}
                className="text-sm px-3 py-1.5 rounded-md bg-card-alt border border-white/10 hover:border-accent"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}