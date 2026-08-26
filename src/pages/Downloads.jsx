import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Downloads() {
  usePageTitle("Downloads");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("products")
      .select("id, name, slug, short_description, image_url, categories(name)")
      .eq("is_hidden", false)
      .then(({ data }) => {
        setProducts(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-site-bg text-white px-6 py-10 font-inter">
      <div className="max-w-site mx-auto">
        <h1 className="text-2xl font-bold mb-6">Downloads</h1>

        {loading && <p className="text-muted">Loading...</p>}
        {!loading && products.length === 0 && (
          <p className="text-muted">No products published yet.</p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/downloads/${p.slug}`}
              className="block bg-card-bg border border-white/10 rounded-lg p-5 hover:bg-card-hover transition"
            >
              {p.image_url && (
                <img src={p.image_url} alt={p.name} className="w-full h-32 object-cover rounded-md mb-3" />
              )}
              <h2 className="font-semibold">{p.name}</h2>
              {p.categories?.name && (
                <span className="text-xs text-accent">{p.categories.name}</span>
              )}
              <p className="text-sm text-muted mt-2">{p.short_description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}