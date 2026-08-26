import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("products")
      .select("id, name, slug")
      .then(({ data }) => {
        setProducts(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(4,4,10)] text-white px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Admin Products</h1>
        <Link
          to="/admin/products/new"
          className="text-sm px-4 py-2 rounded-md bg-accent text-white font-semibold"
        >
          + New Product
        </Link>
      </div>

      {loading && <p className="text-white/50">Loading...</p>}
      {!loading && products.length === 0 && (
        <p className="text-white/50 mt-2">Product library — coming soon.</p>
      )}

      <div className="space-y-2 mt-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between bg-card-bg border border-white/10 rounded-md px-4 py-3"
          >
            <span>{p.name}</span>
            <Link
              to={`/admin/products/${p.slug}`}
              className="text-sm px-3 py-1.5 rounded-md bg-card-alt border border-white/10 hover:border-accent"
            >
              Add Version
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}