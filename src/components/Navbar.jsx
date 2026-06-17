import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoCwm from "./../assets/images/logoCWM.png";
import logo from "./../assets/images/logo.png";
import { supabase } from "../supabaseClient";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ── Auth session state ──
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the current session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for login / logout / token refresh events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Cleanup listener on unmount
    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  // Derive a display name: prefer user_metadata.full_name, then first_name, then email prefix
  const displayName = user
    ? user.user_metadata?.full_name ||
      (user.user_metadata?.first_name
        ? `${user.user_metadata.first_name} ${user.user_metadata.last_name ?? ""}`.trim()
        : user.email.split("@")[0])
    : null;

  // Avatar initials (up to 2 chars)
  const initials = displayName
    ? displayName
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "??";

  const linkClass = ({ isActive }) =>
    `text-sm font-medium px-4 py-[7px] rounded-full border transition-all duration-200 ${
      isActive
        ? "text-white bg-white/[0.08] border-white/[0.08] font-semibold"
        : "text-white/75 border-transparent hover:text-white hover:bg-white/[0.06] hover:border-white/[0.08]"
    }`;

  return (
    <nav className="sticky top-0 z-[1000] bg-[rgba(4,4,10,0.85)] backdrop-blur-xl border-b border-white/[0.08] h-16 flex items-center">
      <div className="max-w-site mx-auto px-6 w-full flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-9 h-9 rounded-full border border-[rgba(0,180,255,0.5)] overflow-hidden flex items-center justify-center bg-[rgba(0,180,255,0.08)]">
            <img
              src={logoCwm}
              alt="DakshCWM Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <img src={logo} alt="dakshCWM-logo" className="w-[150px]" />
        </Link>

        {/* Nav Links — desktop */}
        <ul
          className={`
          fixed md:static top-16 left-0 right-0 md:flex items-center gap-1 flex-1 justify-center
          transition-all duration-300
          ${
            menuOpen
              ? "flex flex-col items-stretch gap-0 bg-[rgba(4,4,10,0.97)] backdrop-blur-xl border-b border-white/[0.08] pb-4 pt-2 z-50"
              : "hidden md:flex"
          }
        `}
        >
          {[
            "Products:/products",
            "Pricing:/pricing",
            "Features:/features",
            "About Us:/about",
          ].map((item) => {
            const [label, path] = item.split(":");
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}

          {/* ── Mobile-only bottom actions ── */}
          {menuOpen && (
            <li className="md:hidden mt-2 pt-3 border-t border-white/[0.08] px-4">
              <div className="flex items-center justify-between gap-3">
                {/* ℹ Info link */}
                <a
                  href="/cwm-help/00-Overview/GetStarted.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/[0.08] text-white/60 text-sm flex items-center justify-center transition-all hover:bg-white/[0.12] hover:text-white flex-shrink-0"
                >
                  ℹ
                </a>

                {/* Auth area */}
                {user ? (
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    {/* Avatar */}
                    <div
                      title={user.email}
                      className="w-8 h-8 rounded-full bg-[rgba(74,58,253,0.25)] border border-[rgba(74,58,253,0.5)] flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-[11px] font-bold text-white/90 leading-none">
                        {initials}
                      </span>
                    </div>

                    {/* Display name */}
                    <span className="text-sm text-white/80 font-medium truncate flex-1 min-w-0">
                      {displayName}
                    </span>

                    {/* Logout */}
                    <button
                      id="mobile-logout-btn"
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                      className="text-sm text-white/60 px-4 py-[7px] rounded-full border border-white/[0.08] bg-transparent cursor-pointer font-medium font-inter transition-all flex-shrink-0 hover:text-[#ff6b6b] hover:border-[rgba(255,107,107,0.4)] hover:bg-[rgba(255,107,107,0.06)]"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    id="mobile-login-btn"
                    onClick={() => {
                      navigate("/login");
                      setMenuOpen(false);
                    }}
                    className="flex-1 text-sm text-white/70 px-4 py-[7px] rounded-full border border-white/[0.08] bg-transparent cursor-pointer font-medium font-inter transition-all hover:text-white hover:border-white/25"
                  >
                    Login
                  </button>
                )}
              </div>
            </li>
          )}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
          {user ? (
            /* ── Logged-in state: avatar + name + logout ── */
            <div className="flex items-center gap-2.5">
              {/* Avatar circle with initials */}
              <div
                title={user.email}
                className="w-8 h-8 rounded-full bg-[rgba(74,58,253,0.25)] border border-[rgba(74,58,253,0.5)] flex items-center justify-center flex-shrink-0"
              >
                <span className="text-[11px] font-bold text-white/90 leading-none">
                  {initials}
                </span>
              </div>

              {/* Display name */}
              <span className="text-sm text-white/80 font-medium max-w-[120px] truncate">
                {displayName}
              </span>

              {/* Logout button */}
              <button
                id="navbar-logout-btn"
                onClick={handleLogout}
                className="text-sm text-white/60 px-4 py-[7px] rounded-full border border-white/[0.08] bg-transparent cursor-pointer font-medium font-inter transition-all hover:text-[#ff6b6b] hover:border-[rgba(255,107,107,0.4)] hover:bg-[rgba(255,107,107,0.06)]"
              >
                Logout
              </button>
            </div>
          ) : (
            /* ── Logged-out state: Login button ── */
            <button
              id="navbar-login-btn"
              onClick={() => navigate("/login")}
              className="text-sm text-white/70 px-4 py-[7px] rounded-full border border-white/[0.08] bg-transparent cursor-pointer font-medium font-inter transition-all hover:text-white hover:border-white/25"
            >
              Login
            </button>
          )}
          <a
            href="/cwm-help/00-Overview/GetStarted.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/[0.07] border border-white/[0.08] text-white/60 text-sm flex items-center justify-center transition-all hover:bg-white/[0.12] hover:text-white"
          >
            ℹ
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-1.5 rounded-md hover:bg-white/[0.07] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45 !bg-accent" : ""}`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45 !bg-accent" : ""}`}
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
