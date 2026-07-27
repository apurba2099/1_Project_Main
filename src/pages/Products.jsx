import { Link } from "react-router-dom";
import logo_1 from "./../assets/images/logo_1.png";
import logo_2 from "./../assets/images/logo_2.png";
import logo_3 from "./../assets/images/logo_3.png";
import logo_4 from "./../assets/images/logo_4.png";
import logo_5 from "./../assets/images/logo_5.png";
import logo_6 from "./../assets/images/logo_6.png";

const LOGOS = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];

const CHECK = (
  <span className="text-accent font-bold text-sm flex-shrink-0">✓</span>
);

function Products() {
  return (
    <main className="bg-site-bg">
      {/* ── HERO ── */}
      <section className="relative bg-site-bg pt-[100px] pb-[80px] text-center overflow-hidden">
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-page-glow pointer-events-none" />
        <div className="relative z-[1] max-w-site mx-auto px-6">
          <h1 className="text-[clamp(36px,5vw,56px)] font-black text-white mb-[18px] tracking-[-1px]">
            Our Products
          </h1>
          <p className="text-[17px] text-muted max-w-[520px] mx-auto leading-[1.7]">
            Purpose-built automation tools for engineering teams using
            SolidWorks.
          </p>
        </div>
      </section>

      {/* ── PRODUCT CARDS ── */}
      <section className="bg-site-bg border-t border-white/[0.08] py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {/* Studio — Most Popular */}
            <div className="relative flex flex-col bg-[rgba(0,180,255,0.04)] border-2 border-[rgba(0,180,255,0.35)] rounded-xl p-8 pt-10 transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.55)]">
              <div className="absolute top-[-13px] right-5 bg-accent text-black text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-[0.5px]">
                Most Popular
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2.5">
                DakshCWM Studio
              </h2>
              <p className="text-sm text-muted leading-[1.7] mb-6">
                Full-featured CAD workflow automation suite. Build, run, and
                manage unlimited workflows with drag-and-drop simplicity.
              </p>
              <ul className="flex flex-col gap-[11px] mb-7 flex-1 border-t border-white/[0.08] pt-5">
                {[
                  "Drag & Drop Workflow Builder",
                  "Prebuilt Templates Library",
                  "Auto File Export (PDF, DXF, STEP)",
                  "Smart Logs & Audit Trail",
                  "SolidWorks Integration",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-white/75 font-medium"
                  >
                    {CHECK}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full text-center py-3 text-sm font-bold bg-accent text-black rounded cursor-pointer transition-all hover:bg-[#33c4ff] hover:shadow-accent-glow hover:-translate-y-px"
              >
                Get Started
              </Link>
            </div>

            {/* Lite */}
            <div className="flex flex-col bg-card-bg border border-white/[0.08] rounded-xl p-8 transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover">
              <h2 className="text-xl font-extrabold text-white mb-2.5">
                DakshCWM Lite
              </h2>
              <p className="text-sm text-muted leading-[1.7] mb-6">
                Perfect for small teams or individual engineers. Core automation
                features to get started quickly.
              </p>
              <ul className="flex flex-col gap-[11px] mb-7 flex-1 border-t border-white/[0.08] pt-5">
                {[
                  "Up to 5 Active Workflows",
                  "Prebuilt Templates",
                  "Basic File Export",
                  "Email Support",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-white/75 font-medium"
                  >
                    {CHECK}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full text-center py-3 text-sm font-semibold border border-accent text-accent bg-transparent rounded cursor-pointer transition-all hover:bg-[rgba(0,180,255,0.15)]"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col bg-card-bg border border-white/[0.08] rounded-xl p-8 transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover">
              <h2 className="text-xl font-extrabold text-white mb-2.5">
                DakshCWM Enterprise
              </h2>
              <p className="text-sm text-muted leading-[1.7] mb-6">
                Custom automation solutions for large engineering organizations
                with advanced needs.
              </p>
              <ul className="flex flex-col gap-[11px] mb-7 flex-1 border-t border-white/[0.08] pt-5">
                {[
                  "Unlimited Workflows",
                  "Parallel Processing",
                  "Custom Integrations",
                  "Dedicated Support Manager",
                  "SLA Guarantee",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-white/75 font-medium"
                  >
                    {CHECK}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full text-center py-3 text-sm font-semibold bg-white/[0.06] border border-white/[0.08] text-white rounded cursor-pointer transition-all hover:bg-white/10 hover:border-white/20"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATION BANNER ── */}
      <section className="bg-card-alt border-t border-white/[0.08] py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white mb-4 tracking-[-0.5px]">
              Seamless SolidWorks Integration
            </h2>
            <p className="text-[16px] text-muted max-w-[560px] leading-[1.7]">
              DakshCWM connects directly to SolidWorks so you can trigger
              automation from within your existing CAD environment.
            </p>
          </div>
          <div className="flex items-center justify-center gap-[18px] flex-wrap">
            {LOGOS.map((src, i) => (
              <div
                key={i}
                className="group flex items-center justify-center px-[18px] py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg transition-all hover:border-[rgba(0,180,255,0.25)] hover:bg-[rgba(0,180,255,0.04)]"
              >
                <img
                  src={src}
                  alt={`logo ${i + 1}`}
                  className="h-[30px] w-auto object-contain filter-logo transition-all group-hover:filter-logo-hover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
