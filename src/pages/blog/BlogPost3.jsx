/* ──────────────────────────────────────────────────────────────────────────
   BlogPost3.jsx  –  /blog/cad-workflow-automation-behind-devops
   Blog post #3 of 6. Pagination: prev = post #2, next = post #4.
────────────────────────────────────────────────────────────────────────── */
import { Link } from "react-router-dom";
import authorImg from "../../assets/images/author.jpg";
import blogImg   from "../../assets/images/blog_3.jpg";
import { BLOG_POSTS } from "./Blog";

const PREV = BLOG_POSTS[1]; // post #2
const NEXT = BLOG_POSTS[3]; // post #4

function BlogPost3() {
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
            <span className="text-[13px] text-white/50">January 11, 2026</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(24px,4vw,38px)] font-extrabold text-accent leading-[1.2] tracking-[-0.5px] mb-4">
          CAD Workflow Automation is Still Miles Behind DevOps
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] text-muted italic leading-[1.8] mb-6 border-l-2 border-accent/40 pl-4">
          Why CAD workflow automation lags behind DevOps and what it costs engineering teams.
        </p>

        {/* Opening paragraph with drop-cap */}
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          <span className="float-left text-[52px] font-extrabold text-white leading-[0.85] mr-2 mt-1">I</span>
          t is 2026, and automation is no longer a novel concept. Yet many CAD-based engineering teams
          continue to rely on manual workflows that would feel outdated in other industries despite growing
          awareness of CAD workflow automation.
        </p>

        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          In software development, tasks that were once repetitive and error prone — such as building code,
          running tests, and deploying releases — are now handled by automated pipelines. DevOps practices
          and CI/CD systems removed the need for engineers to manage each step manually. Developers learned
          that manual builds slowed progress and increased failure rates.
        </p>

        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Today, a software engineer would not consider compiling and deploying code by hand for every
          change. Automated systems handle that work so engineers can focus on solving problems and writing
          better code. In contrast, many mechanical design and manufacturing teams still operate in a manual
          mode. Each time an engineer exports a DXF, emails a PDF, or copies BOM data into a spreadsheet,
          it resembles a workflow from before automation became standard.
        </p>

        {/* Featured image */}
        <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-hero-img mb-8">
          <img
            src={blogImg}
            alt="Manual CAD workflows versus CAD workflow automation"
            className="w-full block object-cover"
          />
        </div>

        {/* Section 1 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Automation Reshaped Software, But CAD Still Relies on Manual Work
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          As digital transformation spreads across organizations, the contrast becomes harder to ignore.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Manufacturing operations have adopted lean principles and automation on the shop floor. Robotics,
          sensors, and process control systems reduce wasted motion and defects. On the engineering design
          side, however, manual effort remains common.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-6">
          One engineering productivity study found that while manufacturers aggressively eliminate non value
          added work in production, engineering teams often do not apply the same discipline to their own
          workflows [1][2]. As a result, engineers spend large portions of their time on internal
          administration rather than design. One estimate suggests that nearly{' '}
          <strong className="text-white font-semibold">23 percent of engineering time</strong> is spent on
          purely non value added work [3].
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-6">
          If this level of inefficiency existed on a production line, it would be unacceptable. In design
          workflows, it often persists because it is assumed to be unavoidable.
        </p>

        {/* 23% Stat callout */}
        <div className="bg-card-bg border border-white/[0.08] rounded-xl px-8 py-6 mb-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="flex-shrink-0">
            <p className="text-[clamp(36px,6vw,52px)] font-extrabold text-accent leading-none">
              23<span className="text-[clamp(20px,4vw,32px)]">%</span>
            </p>
            <p className="text-[11px] text-white/40 font-medium uppercase tracking-[0.1em] mt-1">
              Engineering Time
            </p>
          </div>
          <div className="w-px h-12 bg-white/[0.08] hidden sm:block" />
          <p className="text-[13px] text-white/60 leading-[1.7]">
            is spent on purely non value added manual work — a level of inefficiency that would be
            unacceptable anywhere else in the organization.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Manual CAD Workflows Conceal Productivity Loss
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Other industries show what is possible when automation is treated as foundational rather than
          optional.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          In software, DevOps automation improved deployment speed, quality, and developer productivity. In
          finance, transaction processing is largely automated. In IT operations, infrastructure as code
          replaced manual server configuration.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          These fields treat repetitive process as something to be optimized or automated. Human expertise
          is reserved for creative and strategic work. This raises a natural question. Why should CAD
          engineering be any different?
        </p>
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-4">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            Developers use CI/CD pipelines, workflow automation, and DevOps to improve productivity.
            Engineering teams deserve the same automation revolution for CAD.
          </p>
        </blockquote>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          There is nothing inherently resistant to automation about CAD tasks. Organizations have simply
          been slower to adopt modern engineering workflow automation.
        </p>

        {/* Section 3 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Why CAD Workflow Automation Has Progressed Slowly
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Many organizations still depend on manual CAD workflows because those workflows evolved
          incrementally.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Scripts, file exports, naming conventions, and spreadsheets were added over time to solve local
          problems. These solutions worked in isolation, but they were never designed to scale. Over time,
          they became institutionalized.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          The result is a fragile system where repetitive CAD tasks consume engineering time, introduce
          inconsistency, and slow downstream teams. Unlike software development, where automation became
          part of the foundation, CAD automation has often been treated as optional or situational.
        </p>
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-8">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            1 small manual process can create multiple downstream delays across teams.
          </p>
        </blockquote>

        {/* Section 4 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Automation Is Emerging as a Competitive Advantage in Engineering
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Forward thinking teams are beginning to experiment with scripts, CAD macros, and integrated
          workflow tools to reduce repetitive work. They recognize the same patterns that software teams
          identified years ago.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          McKinsey research suggests that in 60 percent of occupations, at least one third of tasks could
          be automated using current technology [4]. Engineering design is clearly included. Companies that
          invest in CAD workflow automation quote faster, iterate designs more quickly, and experience fewer
          errors [5].
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Meanwhile, teams that remain dependent on manual processes struggle to keep up. The gap widens in
          much the same way it once did between software teams that embraced DevOps and those that did not.
        </p>

        {/* Section 5 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          DevOps Offers a Blueprint for CAD Engineering
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          The lesson from DevOps is not about replacing engineers. It is about enabling them to work at a
          higher level.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          By removing repetitive manual steps, DevOps allowed developers to focus on building better
          systems. An automation mindset in CAD can do the same for mechanical engineers. Instead of
          spending time on exports, file renaming, and data transfers, engineers can focus on solving design
          problems.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85]">
          It is time to bring the operational side of engineering in line with efficiencies already achieved
          elsewhere. Engineering workflow automation is no longer a nice to have. It is becoming a baseline
          capability for competitive engineering teams.
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

export default BlogPost3;
