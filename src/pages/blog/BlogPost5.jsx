/* ──────────────────────────────────────────────────────────────────────────
   BlogPost5.jsx  –  /blog/hidden-cost-manual-engineering-tasks
   Blog post #5 of 6. Pagination: prev = post #4, next = post #6.
   Ends with a "Learn More" CTA linking to /what-is-dakshcwm.
────────────────────────────────────────────────────────────────────────── */
import { Link } from "react-router-dom";
import authorImg from "../../assets/images/author.jpg";
import blogImg   from "../../assets/images/blog_5.jpg";
import { BLOG_POSTS } from "./Blog";

const PREV = BLOG_POSTS[3]; // post #4
const NEXT = BLOG_POSTS[5]; // post #6

function BlogPost5() {
  return (
    <main className="bg-site-bg min-h-screen">

      {/* ── GLOW + HERO ONE-LINER ── */}
      <section className="relative bg-site-bg pt-[90px] pb-8 overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[520px] bg-page-glow pointer-events-none" />
        <div className="relative z-[1] text-center px-6">
          <span className="inline-block text-[11px] font-semibold text-accent uppercase tracking-[1.5px] px-3 py-1 border border-[rgba(0,180,255,0.35)] rounded-full mb-4">
            Articles
          </span>
          <p className="text-[14px] text-white/50 max-w-[560px] mx-auto leading-[1.75]">
            Engineering insights on CAD workflow automation, productivity, and
            protecting innovation time.
          </p>
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <article className="relative z-[1] max-w-[720px] mx-auto px-6 pt-8 pb-20">

        {/* Author row */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={authorImg}
            alt="Kaushik Dutta Bhowmik"
            className="w-10 h-10 rounded-full object-cover border border-white/[0.12]"
          />
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[13px] font-semibold text-white/80">Kaushik Dutta Bhowmik</span>
            <span className="text-white/30 text-[11px]">·</span>
            <span className="text-[13px] text-white/50">December 12, 2025</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(24px,4vw,38px)] font-extrabold text-accent leading-[1.2] tracking-[-0.5px] mb-4">
          Hidden Cost of Manual Engineering Tasks
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] text-muted italic leading-[1.8] mb-6 border-l-2 border-accent/40 pl-4">
          How repetitive workflows drain engineering capacity and slow innovation.
        </p>

        {/* Opening paragraphs with drop-cap */}
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          <span className="float-left text-[52px] font-extrabold text-white leading-[0.85] mr-2 mt-1">T</span>
          here are tasks engineers should be doing, and then there are tasks they actually spend their time
          on. Many of these tasks could be automated through add-ins, scripts, or workflow tools, yet
          companies continue assigning them to highly skilled engineers.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Manual engineering tasks such as file exports, data entry, and documentation updates may seem
          unavoidable, but they carry a hidden cost. Over time, repetitive engineering work reduces
          productivity, increases errors, and limits an organization's ability to innovate.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          The cost is more significant than most leaders realize. By one estimate, 6 hours per week of
          manual CAD grunt work per engineer equates to over{' '}
          <strong className="text-white font-semibold">$17,000 a year in salary cost [1]</strong>.
          Multiply that by a team of engineers, and the cost of doing nothing quickly climbs into the six
          figures in pure labor alone — and that's before considering the strategic costs.
        </p>

        {/* Featured image */}
        <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-hero-img mb-8">
          <img
            src={blogImg}
            alt="Engineer losing time to manual engineering tasks"
            className="w-full block object-cover"
          />
        </div>

        {/* Stat callout — 6h / $17k */}
        <div className="bg-card-bg border border-white/[0.08] rounded-xl px-8 py-6 mb-8">
          <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.1em] mb-4 text-center">
            % of the week spent on manual tasks
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-shrink-0 text-center">
              <p className="text-[clamp(36px,6vw,52px)] font-extrabold text-accent leading-none">6</p>
              <p className="text-[11px] text-white/40 font-medium uppercase tracking-[0.1em] mt-1">% of week</p>
            </div>
            <div className="w-px h-12 bg-white/[0.08] hidden sm:block" />
            <div>
              <p className="text-[17px] font-extrabold text-white mb-1">~$17,000 per engineer per year</p>
              <p className="text-[13px] text-white/55 leading-[1.7]">
                Six-figure costs for most teams — before accounting for lost innovation and delayed projects.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Manual Tasks Directly Reduce Innovation Capacity
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          When engineers spend time exporting files, updating properties, entering data, or managing naming
          conventions, they lose time that should be invested in real engineering work.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-3">
          These tasks divert engineers from:
        </p>
        <ul className="flex flex-col gap-2.5 mb-5 ml-2">
          {[
            "Solving new engineering challenges",
            "Exploring design alternatives",
            "Improving existing products",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/75 leading-[1.75]">
              <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          This shift from creative to administrative work leads to what teams experience as innovation
          paralysis [2].
        </p>

        {/* Common manual tasks list */}
        <ul className="flex flex-col gap-2.5 mb-4 ml-2">
          {[
            "Exporting files manually for manufacturing or vendors",
            "Renaming and organizing files to fit strict structures",
            "Manually updating CAD properties across parts and assemblies",
            "Compiling Bills of Materials (BOMs) in spreadsheets or ERP systems",
            "Entering repetitive details into PLM / MRP tools",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/75 leading-[1.75]">
              <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Individually, these tasks seem small, but together they cost hundreds of hours of engineering
          productivity. Many of these manual engineering tasks stem from outdated manual CAD workflows that
          were never designed to scale.
        </p>

        {/* Section 2 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Rework and Errors: The Hidden Productivity Killer
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Repetitive work becomes muscle memory, and when concentration drops, errors rise. Even a small
          mistake can trigger hours of rework.
        </p>
        <ul className="flex flex-col gap-2 mb-5 ml-2">
          {[
            "A mislabeled part.",
            "A version mix-up.",
            "A missing property.",
            "A typo in a BOM.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/65 leading-[1.7] italic">
              <span className="text-accent/60 font-bold flex-shrink-0 mt-[2px]">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Even a 1–5 percent manual error rate can create hours of corrective work downstream.
        </p>
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-8">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            "Every manual CAD process increases the risk of errors — wrong file versions, missed steps,
            inconsistent outputs."
          </p>
        </blockquote>

        {/* Section 3 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Meanwhile, Competitors Are Moving Faster
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          While your engineers are tied up updating properties or exporting files one-at-a-time, competitors
          are automating their workflows. Manual inefficiency becomes a strategic disadvantage. Companies
          lose the innovation war through small, preventable delays.
        </p>

        {/* Section 4 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          The Opportunity Cost of Manual Engineering Workflows
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-3">
          Manual tasks impose a dual cost:
        </p>
        <ul className="flex flex-col gap-2.5 mb-4 ml-2">
          {[
            "Hard cost – salary dollars spent on low-value work",
            "Soft cost – innovations delayed or never created",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/75 leading-[1.75]">
              <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Manual workflows drain momentum. Innovation requires space, and manual work takes that space away.
        </p>

        {/* Section 5 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          It Is Time to Rethink Engineering Workflows
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Teams do not fall behind because they lack talent.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          They fall behind because their best minds are tied up in repetitive work. Even small workflow
          improvements can unlock meaningful engineering capacity.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Engineering workflow automation helps teams eliminate repetitive tasks and protect innovation time.
        </p>

        {/* ── LEARN MORE CTA ── */}
        <div className="bg-card-bg border border-white/[0.08] rounded-xl px-8 py-8 text-center transition-all hover:border-[rgba(0,180,255,0.2)]">
          <p className="text-[13px] text-white/50 mb-3 uppercase tracking-[0.1em] font-semibold">
            Want to see how it works?
          </p>
          <h3 className="text-[20px] font-extrabold text-white mb-2 leading-[1.3]">
            Discover What DakshCWM Can Do
          </h3>
          <p className="text-[13px] text-muted leading-[1.7] mb-5 max-w-[420px] mx-auto">
            See how DakshCWM eliminates repetitive CAD tasks and gives engineers their time back.
          </p>
          <Link
            to="/what-is-dakshcwm"
            className="inline-flex items-center gap-2 text-[14px] font-bold px-8 py-[12px] bg-[#4a3afd] text-white rounded transition-all hover:bg-[#33c4ff] hover:shadow-accent-glow hover:-translate-y-[3px]"
          >
            Learn More
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M8 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* ── PAGINATION ── */}
        <div className="mt-10 pt-8 border-t border-white/[0.08] grid grid-cols-2 gap-4">

          {/* Previous */}
          <Link
            to={`/blog/${PREV.slug}`}
            className="group flex flex-col items-start gap-1 bg-card-bg border border-white/[0.08] rounded-xl px-5 py-4 transition-all hover:border-[rgba(0,180,255,0.25)] hover:bg-card-hover"
          >
            <span className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.1em] flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M16 5l-7 7 7 7"/>
              </svg>
              Previous
            </span>
            <span className="text-[13px] font-semibold text-white/80 group-hover:text-accent transition-colors leading-[1.4]">
              {PREV.title}
            </span>
          </Link>

          {/* Next */}
          <Link
            to={`/blog/${NEXT.slug}`}
            className="group flex flex-col items-end gap-1 bg-card-bg border border-white/[0.08] rounded-xl px-5 py-4 transition-all hover:border-[rgba(0,180,255,0.25)] hover:bg-card-hover"
          >
            <span className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.1em] flex items-center gap-1">
              Next
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M8 5l7 7-7 7"/>
              </svg>
            </span>
            <span className="text-[13px] font-semibold text-white/80 group-hover:text-accent transition-colors text-right leading-[1.4]">
              {NEXT.title}
            </span>
          </Link>

        </div>

      </article>
    </main>
  );
}

export default BlogPost5;
