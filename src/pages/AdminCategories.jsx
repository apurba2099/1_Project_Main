import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  function loadCategories() {
    supabase.from("categories").select("id, name, slug").then(({ data }) => {
      setCategories(data || []);
    });
  }

  function slugify(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  async function handleCreate(e) {
    e.preventDefault();
    setError("");
    if (!name) return;
    const { error: err } = await supabase
      .from("categories")
      .insert({ name, slug: slugify(name) });
    if (err) {
      setError(err.message);
      return;
    }
    setName("");
    loadCategories();
  }

  async function handleUpdateName(id) {
    if (!editName) return;
    await supabase.from("categories").update({ name: editName }).eq("id", id);
    setEditingId(null);
    loadCategories();
  }

  return (
    <div className="min-h-screen bg-site-bg text-white px-6 py-10 font-inter">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-xl font-bold mb-6">Manage Categories</h1>

        <form onSubmit={handleCreate} className="flex gap-2 mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New category name"
            className="flex-1 px-3 py-2 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10 focus:border-accent"
          />
          <button type="submit" className="px-4 py-2 rounded-md bg-accent text-white font-semibold text-sm">
            Add
          </button>
        </form>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <div className="space-y-2">
          {categories.map((c) => (
            <div key={c.id} className="flex items-center justify-between bg-card-bg border border-white/10 rounded-md px-4 py-3">
              {editingId === c.id ? (
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1 mr-2 px-2 py-1 bg-card-alt rounded-md text-white text-sm outline-none border border-white/10"
                />
              ) : (
                <span>{c.name}</span>
              )}
              {editingId === c.id ? (
                <button onClick={() => handleUpdateName(c.id)} className="text-sm px-3 py-1.5 rounded-md bg-accent">
                  Save
                </button>
              ) : (
                <button
                  onClick={() => { setEditingId(c.id); setEditName(c.name); }}
                  className="text-sm px-3 py-1.5 rounded-md bg-card-alt border border-white/10 hover:border-accent"
                >
                  Rename
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}