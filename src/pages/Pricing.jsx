import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes. You can start with a trial of the Standard or Premium plan.",
  },
  {
    q: "Can I move from Standard to Premium later?",
    a: "Yes. You can upgrade at any time as your needs grow.",
  },
  {
    q: "Do the API and collaboration features require future releases?",
    a: "Yes. These capabilities will roll out over time. Standard includes limited access and Premium unlocks full capability when released.",
  },
  {
    q: "How is workflow execution handled?",
    a: "Both plans use a desktop agent that connects directly to SolidWorks.",
  },
  {
    q: "How do I get started?",
    a: "Contact Sales at sales@cloudcadai.com or use the trial link to begin.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-white/[0.08] py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-4 text-[13px] font-semibold text-white/75 transition-colors hover:text-white">
        <span>{q}</span>
        <span className="text-accent text-[10px] flex-shrink-0">
          {open ? "▲" : "▼"}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[200px] mt-2" : "max-h-0"}`}
      >
        <p className="text-[13px] text-muted leading-[1.7]">{a}</p>
      </div>
    </div>
  );
}

function Pricing() {
  usePageTitle("Pricing");
  return (
    <main className="bg-site-bg">
      {/* ── HERO ── */}
      <section className="relative bg-site-bg pt-[80px] pb-[60px] text-center overflow-hidden">
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-page-glow pointer-events-none" />
        <div className="relative z-[1] max-w-site mx-auto px-6">
          <h1 className="text-[clamp(28px,4vw,46px)] font-extrabold text-white mb-4 tracking-[-0.5px] leading-[1.2]">
            Choose the plan that fits your workflow
          </h1>
          <p className="text-[15px] text-muted max-w-[560px] mx-auto leading-[1.7]">
            Both plans include core workflow automation and SolidWorks
            execution. Start with Standard or unlock advanced capabilities with
            Premium.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="bg-site-bg border-t border-white/[0.08] py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[820px] mx-auto mb-14">
            {/* Standard */}
            <div className="flex flex-col bg-card-bg border border-white/[0.08] rounded-xl p-8 transition-all hover:border-[rgba(0,180,255,0.2)] hover:bg-card-hover">
              <div className="text-base font-bold text-white mb-1">
                Standard
              </div>
              <p className="text-xs text-dim mb-3.5">
                Best for small teams and pilots
              </p>
              <div className="text-[36px] font-black text-white leading-none mb-1 tracking-[-1px]">
                $30
                <span className="text-sm font-medium text-muted">
                  / license / month
                </span>
              </div>
              <p className="text-xs text-dim mb-6">$300 per year</p>
              <ul className="flex flex-col gap-[9px] mb-7 flex-1 border-t border-white/[0.08] pt-[18px]">
                {[
                  "Custom workflows, up to 10",
                  "Prebuilt workflows included",
                  "Workflow execution with desktop agent (SolidWorks)",
                  "Limited collaboration, future releases",
                  "Basic workflow builder (future add-on)",
                  "Standard support",
                ].map((f) => (
                  <li
                    key={f}
                    className="relative pl-3.5 text-[13px] text-white/65 leading-[1.5] before:content-[\'•\'] before:absolute before:left-0 before:text-accent before:text-xs"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full py-3 text-center text-sm font-semibold border border-accent text-accent bg-transparent rounded cursor-pointer transition-all hover:bg-[rgba(0,180,255,0.15)]"
              >
                Start with Standard
              </Link>
            </div>

            {/* Premium */}
            <div className="flex flex-col bg-[rgba(0,180,255,0.04)] border border-[rgba(0,180,255,0.4)] rounded-xl p-8 relative transition-all hover:border-[rgba(0,180,255,0.6)]">
              <div className="text-[13px] font-bold text-accent mb-1">
                Premium
              </div>
              <p className="text-xs text-dim mb-3.5">
                For teams that need full flexibility
              </p>
              <div className="text-[36px] font-black text-white leading-none mb-1 tracking-[-1px]">
                $50
                <span className="text-sm font-medium text-muted">
                  / license / month
                </span>
              </div>
              <p className="text-xs text-dim mb-6">$500 per year</p>
              <ul className="flex flex-col gap-[9px] mb-7 flex-1 border-t border-white/[0.08] pt-[18px]">
                {[
                  "Unlimited custom workflows",
                  "Prebuilt workflows included",
                  "Workflow execution with desktop agent (SolidWorks)",
                  "Full API access (SDK, future releases)",
                  "Advanced collaboration and version control, future releases",
                  "AI workflow builder included when released",
                  "Priority support",
                ].map((f) => (
                  <li
                    key={f}
                    className="relative pl-3.5 text-[13px] text-white/65 leading-[1.5] before:content-[\'•\'] before:absolute before:left-0 before:text-accent before:text-xs"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full py-3 text-center text-sm font-bold bg-accent text-black rounded cursor-pointer transition-all hover:bg-[#33c4ff] hover:shadow-accent-glow hover:-translate-y-px"
              >
                Choose Premium
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-[820px] mx-auto">
            <h3 className="text-base font-bold text-white/50 text-center mb-6 tracking-[0.3px]">
              Frequently asked questions
            </h3>
            <div>
              {FAQS.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
