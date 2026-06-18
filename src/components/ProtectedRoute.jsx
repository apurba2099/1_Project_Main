import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

/* ─────────────────────────────────────────────────────────────
   Shared hook: resolves the current Supabase session once.
   Returns { loading, user }.
───────────────────────────────────────────────────────────── */
function useSession() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1️⃣ Read existing session immediately (no network call)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 2️⃣ Keep in sync with login / logout events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { loading, user };
}

/* ─────────────────────────────────────────────────────────────
   GuestRoute — wraps pages that logged-in users should NOT see
   (e.g. /login, /signup).

   ✅ Not logged in  → show the page normally
   🔀 Logged in      → redirect to "/"
───────────────────────────────────────────────────────────── */
export function GuestRoute({ children }) {
  const { loading, user } = useSession();

  if (loading) return null; // wait silently — avoids a flash

  if (user) return <Navigate to="/" replace />;

  return children;
}

/* ─────────────────────────────────────────────────────────────
   ProtectedRoute — wraps pages that only logged-in users can see
   (e.g. /dashboard, /settings).

   ✅ Logged in      → show the page normally
   🔀 Not logged in  → redirect to "/login"
───────────────────────────────────────────────────────────── */
export function ProtectedRoute({ children }) {
  const { loading, user } = useSession();

  if (loading) return null; // wait silently — avoids a flash

  if (!user) return <Navigate to="/login" replace />;

  return children;
}
