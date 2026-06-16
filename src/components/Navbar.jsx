import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoCwm from "./../assets/images/logoCWM.png";
import logo from "./../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
          <button className="text-sm text-white/70 px-4 py-[7px] rounded-full border border-white/[0.08] bg-transparent cursor-pointer font-medium font-inter transition-all hover:text-white hover:border-white/25">
            Login
          </button>
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
