const FEATURE_CARDS = [
  { title: 'One-Click Exports',         desc: 'Generate PDFs, DXFs, STLs, and STEP files with consistent naming and folder structure.' },
  { title: 'Smart Notifications',       desc: 'Notify designers, checkers, and managers automatically when work is ready for review.' },
  { title: 'Workflow Automation',        desc: 'Define required steps, routing, and approvals. No scripting required.' },
  { title: 'Version Control',           desc: 'Track revisions, clean up release folders, and eliminate version confusion.' },
  { title: 'SolidWorks Integration',    desc: 'Supports parts, assemblies, and drawings using your existing templates.' },
  { title: 'Analytics and Reporting',   desc: 'Measure cycle time, bottlenecks, and team throughput to support continuous improvement.' },
];

const BULLETS = [
  'Batch export drawings to PDF',
  'Generate DXFs for laser or plasma cutting',
  'Export STEP and IGS files with rules',
  'Build and export BOMs automatically',
  'Auto-name files using part number, revision, and description',
];

function Features() {
  return (
    <main className="bg-site-bg">

      {/* ── HERO ── */}
      <section className="relative bg-site-bg pt-[90px] pb-[70px] text-center overflow-hidden">
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-page-glow pointer-events-none" />
        <div className="relative z-[1] max-w-site mx-auto px-6">
          <h1 className="text-[clamp(28px,4vw,46px)] font-extrabold text-white mb-[18px] tracking-[-0.5px] leading-[1.2]">
            Powerful CAD Workflow Automation
          </h1>
          <p className="text-[15px] text-muted max-w-[620px] mx-auto leading-[1.75]">
            DakshCWM automates repetitive CAD operations and gives engineers more time to focus on
            innovation. It provides powerful CAD workflow automation features designed to eliminate
            repetitive engineering tasks and protect innovation time.
          </p>
        </div>
      </section>

      {/* ── EVERYTHING YOU NEED ── */}
      <section className="bg-site-bg border-t border-white/[0.08] py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold text-white tracking-[-0.5px]">
              Everything You Need to Automate CAD Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-[860px] mx-auto">
            {FEATURE_CARDS.map((f, i) => (
              <div
                key={i}
                className="bg-card-bg border border-white/[0.08] rounded-xl p-6 transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover"
              >
                <h3 className="text-[15px] font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[13px] text-muted leading-[1.65]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTOMATE REPETITIVE ── */}
      <section className="bg-site-bg border-t border-white/[0.08] py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-9">
            <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold text-white tracking-[-0.5px]">
              Automate Repetitive CAD Steps
            </h2>
          </div>
          <div className="bg-card-bg border border-white/[0.08] rounded-xl px-9 py-8 max-w-[700px] mx-auto">
            <ul className="flex flex-col gap-3.5">
              {BULLETS.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/75 font-medium">
                  <span className="text-accent text-lg leading-none flex-shrink-0">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-cta-grad border-t border-white/[0.08] py-[90px] text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-[40px] font-extrabold text-white mb-4 tracking-[-0.5px]">
            Try It Free. Scale When You're Ready.
          </h2>
          <p className="text-[16px] text-muted max-w-[520px] mx-auto mb-9 leading-[1.75]">
            Get started without limits. Explore all features at your own pace — upgrade only when your business grows.
          </p>
          <button className="text-[15px] font-bold px-10 py-[14px] bg-accent text-black rounded cursor-pointer transition-all hover:bg-[#33c4ff] hover:shadow-accent-glow hover:-translate-y-px">
            Try Free Today
          </button>
        </div>
      </section>
    </main>
  );
}

export default Features;
