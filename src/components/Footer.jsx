import { Link } from "react-router-dom";
import logoCwm from "./../assets/images/LogoCWM.png";
import logo from "./../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-site-bg border-t border-white/[0.08]">
      {/* Main content */}
      <div className="max-w-site mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-14 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-[18px]">
              <div className="w-[30px] h-[30px] rounded-full border border-[rgba(0,180,255,0.4)] overflow-hidden bg-[rgba(0,180,255,0.08)] flex items-center justify-center">
                <img
                  src={logoCwm}
                  alt="DakshCWM"
                  className="w-full h-full object-contain"
                />
              </div>
              <img src={logo} alt="dakshCWM-logo" className="w-[150px]" />
            </div>
            <p className="text-[22px] font-bold text-white leading-[1.4] mb-[18px] max-w-[280px]">
              Need Help Getting Started?
              <br />
              We're Here to Help.
            </p>

            <a
              href="mailto:sales@cloudcadai.com"
              className="text-accent text-sm font-medium underline underline-offset-[3px] decoration-[rgba(0,180,255,0.4)] transition-opacity hover:opacity-75"
            >
              sales@cloudcadai.com
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-muted uppercase tracking-[1.2px] mb-[18px]">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-muted uppercase tracking-[1.2px] mb-[18px]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/what-is-dakshcwm"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  Learn More
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08] py-[18px]">
        <div className="max-w-site mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-transparent border-none text-muted text-xs cursor-pointer font-inter transition-colors hover:text-white"
          >
            ↑ Scroll to Top
          </button>
          <p className="text-xs text-dim">DakshCWM by CloudCADAi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
