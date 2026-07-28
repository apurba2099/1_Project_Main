/* ──────────────────────────────────────────────────────────────────────────
   BlogPost4.jsx  –  /blog/errors-manual-cad-workflows-manufacturing
   Blog post #4 of 6. Pagination: prev = post #3, next = post #5.
────────────────────────────────────────────────────────────────────────── */
import { Link } from "react-router-dom";
import authorImg from "../../assets/images/author.jpg";
import blogImg   from "../../assets/images/blog_4.jpg";
import { BLOG_POSTS } from "./Blog";

const PREV = BLOG_POSTS[2]; // post #3
const NEXT = BLOG_POSTS[4]; // post #5

function BlogPost4() {
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
            <span className="text-[13px] text-white/50">January 4, 2026</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(24px,4vw,38px)] font-extrabold text-accent leading-[1.2] tracking-[-0.5px] mb-4">
          Errors in Manual CAD Workflows Could Disrupt Manufacturing
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] text-muted italic leading-[1.8] mb-6 border-l-2 border-accent/40 pl-4">
          How small CAD data mistakes can trigger delays, rework, and costly downstream errors.
        </p>

        {/* Opening paragraph with drop-cap */}
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          <span className="float-left text-[52px] font-extrabold text-white leading-[0.85] mr-2 mt-1">D</span>
          isruptions caused by manual CAD workflows are not contained within engineering. Downstream teams
          such as manufacturing, supply chain, and procurement often feel the impact long after design work
          is completed.
        </p>

        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          When engineers rely on manual, ad-hoc processes, inconsistency inevitably creeps in, even when
          standards and conventions exist. Over time, these inconsistencies become normalized, spreading
          across systems and teams.
        </p>

        {/* Featured image */}
        <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-hero-img mb-8">
          <img
            src={blogImg}
            alt="Production engineers frustrated with manual CAD workflow"
            className="w-full block object-cover"
          />
        </div>

        {/* Section 1 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Inconsistent Data Creates Chaos Downstream
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          If one designer names a part <code className="text-accent/80 bg-white/[0.05] px-1.5 py-0.5 rounded text-[13px]">widget_1</code> while
          another uses <code className="text-accent/80 bg-white/[0.05] px-1.5 py-0.5 rounded text-[13px]">widget_v1_new</code>, how are
          downstream teams supposed to know they represent the same component?
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          In one real case, a procurement team ordered different fasteners because both were assigned the
          same part number. Engineers then spent days identifying the issue and sourcing the correct parts,
          impacting both budget and schedule [1].
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          What begins as a small inconsistency in engineering quickly turns into operational friction across
          the organization.
        </p>

        {/* Section 2 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Manual Data Handoffs Are a Major Source of Errors
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Data handoff is another critical failure point in manual CAD workflows. Every manual transfer
          from CAD to PLM, PDM, or ERP systems introduces an opportunity for error or delay.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          A missed spreadsheet update or a mistyped material code can cause procurement to quote or order
          the wrong item. Manufacturing may cut metal using an outdated drawing. Even a small error, such
          as an incorrect decimal [2] in a bill of materials, can cascade into wasted materials, rework,
          and schedule overruns.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-6">
          In one example, a medical device manufacturer continued building parts for three days using
          outdated specifications because a manual BOM update was missed.
        </p>

        {/* Stat callout — $45k / 200 parts */}
        <div className="bg-card-bg border border-white/[0.08] rounded-xl px-8 py-6 mb-4 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="flex-shrink-0 text-center">
            <p className="text-[clamp(13px,2vw,15px)] font-bold text-white/40 uppercase tracking-[0.08em] mb-1">
              Small error in manual CAD data handoff
            </p>
            <p className="text-[clamp(28px,5vw,44px)] font-extrabold text-accent leading-none">1</p>
          </div>
          <div className="w-px h-12 bg-white/[0.08] hidden sm:block" />
          <div>
            <p className="text-[22px] font-extrabold text-white mb-0.5">$45,000 in losses</p>
            <p className="text-[13px] text-white/55 leading-[1.7]">
              and <strong className="text-white/80">200 faulty parts</strong> — the result of a single
              missed manual BOM update over three days of production.
            </p>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-8">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            "Manual handoffs create risk at every boundary between engineering and downstream systems." [3]
          </p>
        </blockquote>

        {/* Section 3 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Slow Engineering Workflows Delay the Entire Business
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Even when errors do not occur, manual workflows introduce delays that ripple across the
          organization.
        </p>
        <ul className="flex flex-col gap-2.5 mb-4 ml-2">
          {[
            "Procurement teams wait for engineering to manually compile and export BOMs.",
            "Vendors wait for PDF drawings from already overloaded engineering teams.",
            "Quoting processes stall while files are exported, reviewed, and emailed.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/75 leading-[1.75]">
              <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
              {item}
            </li>
          ))}
        </ul>
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-4">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            In one case, a manufacturer lost a half-million-dollar contract simply because its manual
            quoting process took a few days longer than a competitor's [4].
          </p>
        </blockquote>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Engineering becomes a bottleneck, downstream teams scramble to catch up, and sales opportunities
          are lost.
        </p>

        {/* Section 4 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Automated CAD Workflows Remove Organizational Bottlenecks
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Automated workflows eliminate these issues at their source.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          When part metadata, file structures, and outputs are standardized and automatically synchronized,
          downstream teams receive clean, consistent, and timely information. Procurement, suppliers, and
          manufacturing no longer need to second-guess data accuracy or wait on manual exports.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Automating CAD workflows empowers every downstream function to operate smoothly. When engineering
          outputs are predictable and reliable, the entire organization moves faster [5].
        </p>

        {/* Section 5 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          The Cost of Manual Workflows Extends Beyond Engineering
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Manual CAD workflows do not just slow engineers down. They create downstream disruptions that
          affect budgets, schedules, and customer commitments.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85]">
          Standardized, automated workflows are not just an engineering efficiency improvement. They are a
          business advantage.
        </p>

        {/* ── PAGINATION ── */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 gap-4">

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

export default BlogPost4;
