/* ──────────────────────────────────────────────────────────────────────────
   ContactUs.jsx  –  /contact
   Layout mirrors dakshcwm.com/contact-us/ exactly.
   Colors / design tokens follow the existing project theme.
────────────────────────────────────────────────────────────────────────── */

const SALES_BULLETS = [
  'Plan a live demo',
  'Discuss your workflow requirements',
  'Explore Standard and Premium plans',
];

const SUPPORT_BULLETS = [
  'Installation and setup questions',
  'Workflow configuration',
  'Bug reports and feedback',
];

const HELPFUL_BULLETS = [
  'How many engineers or designers will use DakshCWM',
  'Which versions of SolidWorks and Windows you run',
  'Typical workflows you want to automate',
  'Any timelines or important project deadlines',
];

function ContactUs() {
  return (
    <main className="bg-site-bg min-h-screen">

      {/* ── HERO GLOW BANNER ── */}
      <section className="relative bg-site-bg pt-[90px] pb-[60px] overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[520px] bg-page-glow pointer-events-none" />
      </section>

      {/* ── GET IN TOUCH ── */}
      <section className="bg-site-bg pb-10 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="bg-card-bg border border-white/[0.08] rounded-xl px-9 py-12 text-center transition-all hover:border-[rgba(0,180,255,0.2)]">
            <h1 className="text-[clamp(22px,3vw,34px)] font-extrabold text-white mb-3 tracking-[-0.3px]">
              Get in Touch
            </h1>
            <p className="text-[14px] text-muted leading-[1.75]">
              Have questions about DakshCWM, pricing, or how it fits your environment? Reach out
              <br className="hidden sm:block" />
              and we will follow up with clear, practical answers.
            </p>
          </div>
        </div>
      </section>

      {/* ── SALES + SUPPORT CARDS ── */}
      <section className="bg-site-bg py-6 px-6">
        <div className="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Sales Card */}
          <div className="bg-card-bg border border-white/[0.08] rounded-xl p-7 transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover">
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-2">
              Sales
            </p>
            <h2 className="text-[17px] font-extrabold text-white mb-3 leading-[1.3]">
              Talk to us about DakshCWM
            </h2>
            <p className="text-[13px] text-muted leading-[1.7] mb-4">
              For trials, pricing details, and deployment options, contact our sales team.
            </p>
            <a
              href="mailto:sales@cloudcadai.com"
              className="inline-flex items-center gap-1.5 text-accent text-[13px] font-semibold mb-4 underline underline-offset-[3px] decoration-[rgba(0,180,255,0.3)] transition-opacity hover:opacity-75"
            >
              ✉ sales@cloudcadai.com
            </a>
            <ul className="flex flex-col gap-2.5">
              {SALES_BULLETS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-white/75 font-medium">
                  <span className="text-accent font-bold leading-none flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Card */}
          <div className="bg-card-bg border border-white/[0.08] rounded-xl p-7 transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover">
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-2">
              Support
            </p>
            <h2 className="text-[17px] font-extrabold text-white mb-3 leading-[1.3]">
              Existing users and technical help
            </h2>
            <p className="text-[13px] text-muted leading-[1.7] mb-4">
              If you already use DakshCWM and need assistance, our team is here to help.
            </p>
            <a
              href="mailto:support@cloudcadai.com"
              className="inline-flex items-center gap-1.5 text-accent text-[13px] font-semibold mb-4 underline underline-offset-[3px] decoration-[rgba(0,180,255,0.3)] transition-opacity hover:opacity-75"
            >
              🔧 support@cloudcadai.com
            </a>
            <ul className="flex flex-col gap-2.5">
              {SUPPORT_BULLETS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-white/75 font-medium">
                  <span className="text-accent font-bold leading-none flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── HELPFUL DETAILS ── */}
      <section className="bg-site-bg py-6 px-6 pb-16">
        <div className="max-w-[680px] mx-auto">
          <div className="bg-card-bg border border-white/[0.08] rounded-xl px-9 py-8 transition-all hover:border-[rgba(0,180,255,0.2)]">
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-2">
              Helpful Details
            </p>
            <h2 className="text-[17px] font-extrabold text-white mb-3 leading-[1.3]">
              What to include in your message
            </h2>
            <p className="text-[13px] text-muted leading-[1.7] mb-5">
              To help us respond quickly, you can share a short description of your current CAD setup and what you want to
              improve.
            </p>
            <ul className="flex flex-col gap-3">
              {HELPFUL_BULLETS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-white/75 font-medium">
                  <span className="text-accent font-bold leading-none flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FOOTER NOTE ── */}
      <section className="bg-site-bg pb-16 px-6 text-center">
        <p className="text-[13px] text-muted italic">
          We respect your time and inbox. You will only hear from us in relation to your request.
        </p>
      </section>

    </main>
  );
}

export default ContactUs;
