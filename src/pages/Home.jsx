import { Link } from "react-router-dom";
import dashboard from "../assets/images/hero_dashboard_screenshot.png";

import feat1 from "../assets/images/1_feature.png";
import feat2 from "../assets/images/2_feature.png";
import feat3 from "../assets/images/3_feature.png";
import feat4 from "../assets/images/4_feature.png";
import feat5 from "../assets/images/5_feature.png";
import feat6 from "../assets/images/6_feature.png";

import logo_1 from "./../assets/images/logo_1.png";
import logo_2 from "./../assets/images/logo_2.png";
import logo_3 from "./../assets/images/logo_3.png";
import logo_4 from "./../assets/images/logo_4.png";
import logo_5 from "./../assets/images/logo_5.png";
import logo_6 from "./../assets/images/logo_6.png";

const LOGOS = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];

const FEATURES = [
  {
    icon: feat1,
    title: "Prebuilt Workflows",
    desc: "Ready-to-use automation templates.",
  },
  {
    icon: feat2,
    title: "Drag & Drop Builder",
    desc: "Intuitive, visual workflow designer.",
  },
  {
    icon: feat3,
    title: "Parallel Processing",
    desc: "Run multiple tasks efficiently.",
  },
  {
    icon: feat4,
    title: "Auto File Output",
    desc: "Generate PDFs, DXFs & more.",
  },
  { icon: feat5, title: "Smart Logs", desc: "Real-time progress and reports." },
  {
    icon: feat6,
    title: "Template Marketplace",
    desc: "Download & share workflows (soon).",
  },
];

function Home() {
  return (
    <main className="bg-site-bg">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative bg-site-bg pt-[90px] pb-[60px] text-center overflow-visible">
        {/* Purple radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[650px] bg-hero-glow pointer-events-none z-0" />

        <div className="relative z-[1] max-w-site mx-auto px-6 flex flex-col items-center">
          {/* Headline */}
          <h1 className="text-[clamp(44px,6.5vw,55px)] font-thin text-white leading-[1.1] mb-6 tracking-[-2px]">
            Automate CAD
            <br />
            Workflows. Design
            <br />
            Faster. No Coding
            <br />
            Required
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] text-white/65 max-w-[520px] mx-auto mb-7 leading-[1.75]">
            DakshCWM saves hours by automating exports, approvals, and
            repetitive CAD tasks — so your engineers can focus on innovation.
          </p>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-black border border-[#4a3afd] text-white/75 text-[11px] font-medium px-5 py-1 rounded-full mb-7 backdrop-blur-md">
            <span className="text-[#817ffe] font-thin">★</span> Trusted by
            engineering teams worldwide
          </div>

          {/* CTA button */}
          <div className="mb-[52px]">
            <Link
              to="/what-is-dakshcwm"
              className="text-[15px] font-thin px-9 py-[13px] rounded-full border-none bg-[#4a3afd] text-white cursor-pointer transition-all duration-200 hover:bg-[rgba(0,180,255,0.15)] hover:shadow-[0_0_16px_rgba(0,180,255,0.4)] hover:-translate-y-[5px]"
            >
              Learn More
            </Link>
          </div>

          {/* Dashboard screenshot */}
          <div className="group w-full max-w-[840px] mx-auto rounded-[14px] overflow-hidden border border-white/10 shadow-hero-img cursor-pointer transition-all duration-400 ease-in-out relative z-[2] hover:shadow-hero-img-hover hover:-translate-y-[6px] hover:scale-[1.012]">
            <img
              src={dashboard}
              alt="DakshCWM Dashboard"
              className="w-full block rounded-[12px] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.025]"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: LOGOS ── */}
      <section className="bg-card-alt border-t border-b border-white/[0.08] py-12">
        <div className="max-w-site mx-auto px-6">
          <p className="text-center text-[13px] font-medium text-muted tracking-[0.5px] mb-8">
            Seamless Integration with SolidWorks*
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {LOGOS.map((src, i) => (
              <div
                key={i}
                className="group flex items-center justify-center px-[18px] py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg transition-all duration-200 hover:border-[rgba(0,180,255,0.25)] hover:bg-[rgba(0,180,255,0.04)]"
              >
                <img
                  src={src}
                  alt={`logo ${i + 1}`}
                  className="h-[30px] w-auto object-contain filter-logo transition-all duration-200 group-hover:filter-logo-hover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURES SPLIT ── */}
      <section className="bg-site-bg py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] gap-[72px] items-start">
            {/* Left: sticky text */}
            <div className="lg:sticky lg:top-[84px]">
              {/* Label pill */}
              <span className="inline-block text-[11px] font-semibold text-accent uppercase tracking-[1.5px] px-3 py-1  border border-[rgba(0,180,255,0.35)] rounded-full mb-3">
                Features &amp; Benefits
              </span>
              <h2 className="text-[34px] font-extrabold text-white leading-[1.2] mb-4 mt-3 tracking-[-0.5px]">
                Powerful CAD Workflow Automation
              </h2>
              <p className="text-sm text-muted leading-[1.75] mb-7">
                DakshCWM automates repetitive CAD operations and gives engineers
                more time to focus on innovation.
              </p>
              <Link
                to="/features"
                className="text-[13px] font-thin px-[22px] py-2.5 bg-[#4a3afd] text-white border-none rounded-xl cursor-pointer transition-all duration-200 hover:bg-[#33c4ff] hover:shadow-accent-glow hover:-translate-y-[5px]"
              >
                See All Features
              </Link>
            </div>

            {/* Right: 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="bg-card-bg border border-white/[0.08] rounded-xl p-[22px_20px_24px] transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover cursor-default"
                >
                  <div className="w-9 h-9 mb-3.5 flex items-center justify-center">
                    <img
                      src={f.icon}
                      alt={f.title}
                      className="w-8 h-8 object-contain filter-icon"
                    />
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-[1.6]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
