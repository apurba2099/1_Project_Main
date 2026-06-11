const VALUES = [
  { title: 'Time Savings to Create',  desc: 'Automation gives engineers hours back each week. It removes manual effort and keeps teams focused on design.' },
  { title: 'Quality by Default',      desc: 'Standardized workflows reduce rework and errors. Designs move faster when every step is consistent.' },
  { title: 'Seamless Integration',    desc: 'Meet teams where they already work. DakshCWM integrates cleanly with SolidWorks and existing systems.' },
];

function AboutUs() {
  return (
    <main className="bg-site-bg">

      {/* ── HERO / INTRO ── */}
      <section className="relative bg-site-bg pt-[80px] pb-[60px] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-page-glow pointer-events-none" />
        <div className="relative z-[1] max-w-site mx-auto px-6">
          <div className="max-w-[680px] mx-auto">
            <p className="text-[15px] text-white/70 leading-[1.8] mb-6">
              DakshCWM automates the everyday operations that slow engineers down, from file exports and
              workflow approvals to collaboration and version control. Integrated seamlessly with SolidWorks,
              it connects engineering creativity with operational efficiency.
            </p>
            <ul className="flex flex-col gap-2.5 mb-6">
              {[
                'Automate repetitive CAD operations',
                'Standardize and track workflows',
                'Improve collaboration and version control',
                'Reduce human error and rework',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/75 font-medium">
                  <span className="text-accent font-bold text-sm flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-white/55 leading-[1.7] italic">
              The result is shorter design cycles, cleaner hand-offs, and more time to build great products.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-site-bg py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="bg-card-bg border border-white/[0.08] rounded-xl px-9 py-10 max-w-[680px] mx-auto text-center transition-all hover:border-[rgba(0,180,255,0.2)]">
            <h2 className="text-[22px] font-extrabold text-white mb-3.5">Our Mission</h2>
            <p className="text-[15px] text-muted leading-[1.75]">
              Empower design teams with intelligent, reliable workflow automation that removes friction
              from everyday CAD work.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card-bg border border-white/[0.08] rounded-xl px-9 py-10 max-w-[680px] mx-auto text-center mt-5 transition-all hover:border-[rgba(0,180,255,0.2)]">
            <h2 className="text-[22px] font-extrabold text-white mb-3.5">Our Vision</h2>
            <p className="text-[15px] text-muted leading-[1.75]">
              A world where every engineering team can{' '}
              <strong className="text-white font-bold">design without limits</strong>, powered by
              automation that quietly handles the rest.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-site-bg border-t border-white/[0.08] py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-card-bg border border-white/[0.08] rounded-xl p-7 transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover"
              >
                <h3 className="text-lg font-extrabold text-white mb-3 leading-[1.3]">{v.title}</h3>
                <p className="text-[13px] text-muted leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section className="bg-site-bg border-t border-white/[0.08] py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="bg-card-bg border border-white/[0.08] rounded-xl px-9 py-12 max-w-[680px] mx-auto text-center">
            <h2 className="text-[28px] font-extrabold text-white mb-2">Get in Touch</h2>
            <p className="text-sm text-muted mb-5">We would love to hear from you.</p>
            <a
              href="mailto:sales@cloudcadai.com"
              className="inline-flex items-center gap-2 text-accent text-[15px] font-semibold underline underline-offset-[3px] decoration-[rgba(0,180,255,0.3)] transition-opacity hover:opacity-75"
            >
              ✉ sales@cloudcadai.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
