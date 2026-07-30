/* ──────────────────────────────────────────────────────────────────────────
   WhatIsDakshCWM.jsx  –  /what-is-dakshcwm
   "Learn More" destination page: heading + placeholder video.
   Design follows the project's existing token system.
────────────────────────────────────────────────────────────────────────── */
import What_is_DakshCWM from "../assets/videos/DakshCWM-1.mp4";
import { usePageTitle } from "../hooks/usePageTitle";

function WhatIsDakshCWM() {
  usePageTitle("What is");
  return (
    <main className="bg-site-bg min-h-screen">
      {/* ── HERO GLOW + MARKETING BANNER ── */}
      <section className="relative bg-site-bg pt-[90px] pb-8 overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[520px] bg-page-glow pointer-events-none" />

        {/* Marketing content sitting over the glow */}
        <div className="relative z-[1] max-w-site mx-auto px-6 text-center">
          {/* Top trust badge */}
          <div className="inline-flex items-center gap-2 bg-black/40 border border-[rgba(0,180,255,0.25)] backdrop-blur-sm text-white/70 text-[11px] font-medium px-5 py-1.5 rounded-full mb-5">
            <span className="text-accent font-bold">✦</span>
            Built exclusively for SolidWorks engineering teams
          </div>

          {/* Hero tagline */}
          <h2 className="text-[clamp(24px,3.2vw,36px)] font-extrabold text-white leading-[1.2] tracking-[-0.5px] mb-3 max-w-[680px] mx-auto">
            Stop Doing Manually What a Machine Can Do{" "}
            <span className="text-accent">Automatically</span>
          </h2>

          {/* Supporting line */}
          <p className="text-[14px] text-white/55 max-w-[520px] mx-auto leading-[1.75] mb-6">
            Engineers using DakshCWM reclaim hours every week — letting them
            ship better designs, faster, with fewer errors.
          </p>

          {/* Quick stats row — grid on mobile, inline on desktop */}
          <div className="w-full sm:w-auto sm:inline-grid grid grid-cols-3 divide-x divide-white/[0.08] bg-white/[0.04] border border-white/[0.08] rounded-xl overflow-hidden">
            {[
              { value: "10×", label: "Faster Exports" },
              { value: "100%", label: "SolidWorks Native" },
              { value: "0", label: "Code Required" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 sm:px-6 py-3 text-center">
                <p className="text-[clamp(15px,2vw,22px)] font-extrabold text-accent leading-none mb-0.5">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-[11px] text-white/45 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEADING BLOCK ── */}
      <section className="bg-site-bg pt-10 pb-6 px-6 text-center relative z-[1]">
        <div className="max-w-site mx-auto">
          {/* Label pill */}
          <span className="inline-block text-[11px] font-semibold text-accent uppercase tracking-[1.5px] px-3 py-1 border border-[rgba(0,180,255,0.35)] rounded-full mb-5">
            Overview
          </span>

          {/* Main heading – accent-coloured like the screenshot */}
          <h1 className="text-[clamp(28px,4.5vw,48px)] font-extrabold text-accent mb-5 tracking-[-0.5px] leading-[1.15]">
            What is DakshCWM
          </h1>

          {/* Sub-text */}
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.8]">
            DakshCWM is a CAD workflow automation platform built for SolidWorks
            engineers. It eliminates repetitive manual tasks — from file exports
            and version control to approvals and collaboration — so your team
            can focus entirely on design.
          </p>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="bg-site-bg py-10 px-6 relative z-[1]">
        <div className="max-w-[780px] mx-auto">
          {/* Video card wrapper */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.10] shadow-hero-img transition-all duration-400 hover:shadow-hero-img-hover hover:-translate-y-[4px] bg-black">
            <video src={What_is_DakshCWM} controls className="w-full block" />
          </div>

          {/* Caption below video */}
          <p className="text-center text-[13px] text-muted mt-5 leading-[1.7]">
            Watch how DakshCWM automates your entire SolidWorks workflow — from
            exports and approvals to version control.
          </p>
        </div>
      </section>

      {/* ── KEY POINTS ── */}
      <section className="bg-site-bg py-12 px-6 pb-20 relative z-[1]">
        <div className="max-w-[780px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: "⚙️",
              title: "Workflow Automation",
              desc: "Automate exports, approvals, and repetitive CAD operations without writing code.",
            },
            {
              icon: "🔗",
              title: "SolidWorks Native",
              desc: "Built directly for SolidWorks — no plugins or workarounds needed.",
            },
            {
              icon: "⏱️",
              title: "Hours Saved Weekly",
              desc: "Engineers reclaim hours each week by eliminating manual, error-prone steps.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-white/[0.08] rounded-xl p-6 text-center transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-[15px] font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] text-muted leading-[1.65]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WhatIsDakshCWM;
