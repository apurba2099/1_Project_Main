/* ──────────────────────────────────────────────────────────────────────────
   BlogPost6.jsx  –  /blog/repetitive-engineering-tasks-disrupt-innovation
   Blog post #6 of 6 (final). Pagination: prev = post #5, no next.
   Ends with a "Learn More" CTA linking to /what-is-dakshcwm.
────────────────────────────────────────────────────────────────────────── */
import { Link } from "react-router-dom";
import authorImg from "../../assets/images/author.jpg";
import blogImg   from "../../assets/images/blog_6.jpg";
import { BLOG_POSTS } from "./Blog";

const PREV = BLOG_POSTS[4]; // post #5
// const NEXT = null;           // no next — this is the final post

function BlogPost6() {
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
            <span className="text-[13px] text-white/50">December 4, 2025</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(24px,4vw,38px)] font-extrabold text-accent leading-[1.2] tracking-[-0.5px] mb-4">
          Repetitive Engineering Tasks Could Disrupt Innovation
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] text-muted italic leading-[1.8] mb-6 border-l-2 border-accent/40 pl-4">
          How repetitive CAD tasks silently drain 40% of engineering productivity, and what it costs
          your organization.
        </p>

        {/* Opening paragraphs with drop-cap */}
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          <span className="float-left text-[52px] font-extrabold text-white leading-[0.85] mr-2 mt-1">I</span>
          f you ask someone to name some creative professions, the answer might include artists, composers,
          or writers; some might even say marketers. One profession that may not make this list is
          engineers. However, engineers know that their main job is to innovate, apply their minds to
          real-world problems, and design solutions to address them. All the while working with physical
          constraints.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Yet if you ask an engineer, they would tell you they could do more if they were not busy working
          on repetitive tasks, like file exports or data entry [1]. Studies show that up to{' '}
          <strong className="text-white font-semibold">40% of their workday</strong> is wasted in these
          tasks. Creating and updating documentation is also up there, taking about{' '}
          <strong className="text-white font-semibold">30%–50% of their time [2]</strong>. Throw in some
          meetings, and the day is gone.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Repetitive engineering tasks such as file exports, data entry, and documentation updates consume
          a significant portion of an engineer's day. Over time, this manual work reduces productivity,
          increases frustration, and limits the ability of engineering teams to focus on innovation.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Many repetitive engineering tasks originate from outdated manual CAD workflows that were never
          designed to scale.
        </p>

        {/* Featured image */}
        <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-hero-img mb-8">
          <img
            src={blogImg}
            alt="Engineer frustrated due to repetitive engineering tasks"
            className="w-full block object-cover"
          />
        </div>

        {/* Section 1 heading */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Engineering Is Creative Work — So Why Aren't Engineers Creating?
        </h2>

        {/* 40% stat callout */}
        <div className="bg-card-bg border border-white/[0.08] rounded-xl px-8 py-6 mb-8">
          <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.1em] mb-4 text-center">
            % of an engineer's day is lost to repetition
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-shrink-0 text-center">
              <p className="text-[clamp(36px,6vw,56px)] font-extrabold text-accent leading-none">40</p>
              <p className="text-[11px] text-white/40 font-medium uppercase tracking-[0.1em] mt-1">%</p>
            </div>
            <div className="w-px h-12 bg-white/[0.08] hidden sm:block" />
            <p className="text-[13px] text-white/60 leading-[1.7]">
              Creating and updating documentation takes about 30%–50% of their time. Throw in some
              meetings, and the day is gone!
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Where the Time Actually Goes
        </h2>
        <ul className="flex flex-col gap-2.5 mb-8 ml-2">
          {[
            "Exporting drawings and DXFs one by one for manufacturing or vendors",
            "Renaming and organizing files to fit strict folder or naming conventions",
            "Manually updating properties (materials, revisions, metadata) across multiple CAD files",
            "Compiling Bills of Materials (BOMs) by copying CAD data into spreadsheets or ERP systems",
            "Uploading files or entering data into PLM/MRP tools for downstream teams",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/75 leading-[1.75]">
              <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Individually, these repetitive engineering tasks may take only a few minutes, but across
          projects, they may end up costing hundreds of hours of productivity loss.
        </p>

        {/* Section 3 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Should Engineers Be Doing This Work?
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          <strong className="text-white font-bold">Absolutely not!</strong>
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-5">
          Non-design chores like managing part numbers in spreadsheets, hand-building BOMs, entering data
          into PDM/ERP, and chasing the latest file versions [3], are tedious, error-prone, and
          demoralizing.
        </p>

        {/* Community blockquote */}
        <blockquote className="border-l-2 border-accent/50 pl-5 py-2 mb-4">
          <p className="text-[13px] text-white/60 leading-[1.8] italic mb-2">
            "In this day and age, I can't believe this is not automated in a CAD system as standard.
            It's frustrating because it takes time away from actual design work."
          </p>
          <cite className="text-[11px] text-white/35 not-italic font-semibold uppercase tracking-[0.08em]">
            — Whitegrr
          </cite>
        </blockquote>

        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Countless engineers share their frustrations in various communities, pointing out the lack of
          automation in CAD systems [4]. They all realize that each minute spent on mindless file wrangling
          is a minute not spent solving problems. This repetition trap undermines the very purpose of
          hiring skilled engineers — not just wastes time.
        </p>

        {/* Section 4 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Breaking the Repetition Trap
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          The first step is to recognize the problem.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Repetition in engineering processes is a clear sign that it did not evolve over time.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Engineering workflow automation allows teams to eliminate repetitive tasks and protect
          innovation time.
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

          {/* Next — empty for final post */}
          <div />

        </div>

      </article>
    </main>
  );
}

export default BlogPost6;
