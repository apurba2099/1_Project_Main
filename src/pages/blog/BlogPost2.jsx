/* ──────────────────────────────────────────────────────────────────────────
   BlogPost2.jsx  –  /blog/cad-workflow-automation-human-toll
   Blog post #2 of 6. Pagination links to post #1 (prev) and post #3 (next).
────────────────────────────────────────────────────────────────────────── */
import { Link } from "react-router-dom";
import authorImg from "../../assets/images/author.jpg";
import blogImg   from "../../assets/images/blog_2.jpg";
import { BLOG_POSTS } from "./Blog";

const PREV = BLOG_POSTS[0]; // post #1
const NEXT = BLOG_POSTS[2]; // post #3

function BlogPost2() {
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
            <span className="text-[13px] text-white/50">January 27, 2026</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(24px,4vw,38px)] font-extrabold text-accent leading-[1.2] tracking-[-0.5px] mb-4">
          CAD Workflow Automation and the Human Toll on Engineering Teams
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] text-muted italic leading-[1.8] mb-6 border-l-2 border-accent/40 pl-4">
          CAD workflow automation helps reduce burnout caused by manual CAD work. Learn how inefficient
          workflows affect engineers and team productivity.
        </p>

        {/* Opening paragraph with drop-cap */}
        <p className="text-[14px] text-white/75 leading-[1.85] mb-6">
          <span className="float-left text-[52px] font-extrabold text-white leading-[0.85] mr-2 mt-1">P</span>
          erhaps the most underappreciated consequence of persistent manual work and the absence of effective
          CAD workflow automation is the emotional toll it takes on engineers.
        </p>

        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          No engineer spends years in school to fill out forms, convert file formats, or maintain spreadsheets.
          Yet when weeks are consumed by these tasks, morale begins to erode. Frustration and burnout
          increasingly appear as direct outcomes of inefficient workflows.
        </p>

        {/* Blockquote */}
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-6">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            "I didn't go to school to be a PowerPoint engineer," one engineering manager remarked after
            spending countless hours assembling status reports and manually tracking design reviews [1].
          </p>
        </blockquote>

        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          That same sentiment echoes across design teams. Engineers do not want to feel like highly paid
          data clerks, but many report exactly that experience when their days revolve around manual CAD
          workflows, such as spreadsheet updates and file renaming.
        </p>

        {/* Featured image */}
        <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-hero-img mb-8">
          <img
            src={blogImg}
            alt="Engineer impacted by manual CAD workflows and lack of automation"
            className="w-full block object-cover"
          />
        </div>

        {/* Section 1 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Manual Work Erodes Motivation and Engagement
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Over time, this pattern leads to disengagement. Engineers thrive on creative problem solving. That
          is the part of engineering that sustains motivation and pride in the work. When meaningful design
          effort is repeatedly pushed aside in favor of rote tasks, enthusiasm fades.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Surveys confirm this effect. In a recent global study, 38 percent of engineers said that too many
          tedious tasks prevent them from doing meaningful and fulfilling work [2]. When nearly four in ten
          engineers identify busywork as a daily obstacle, the issue extends well beyond productivity. It
          becomes a morale problem.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-6">
          People seek to be motivated and stimulated by their work rather than overwhelmed or exhausted.
          When everyday experience becomes an endless list of trivial to-dos, even highly committed engineers
          can grow disillusioned or begin searching for roles where they can practice real engineering.
        </p>

        {/* Stat callout */}
        <div className="bg-card-bg border border-white/[0.08] rounded-xl px-8 py-6 mb-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="flex-shrink-0">
            <p className="text-[clamp(36px,6vw,52px)] font-extrabold text-accent leading-none">38<span className="text-[clamp(20px,4vw,32px)]">%</span></p>
            <p className="text-[11px] text-white/40 font-medium uppercase tracking-[0.1em] mt-1">Engineers</p>
          </div>
          <div className="w-px h-12 bg-white/[0.08] hidden sm:block" />
          <p className="text-[13px] text-white/60 leading-[1.7]">
            say tedious tasks block meaningful work — making busywork a morale crisis, not just a
            productivity issue.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Burnout and Turnover Are the Long Term Cost
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          The long term cost of this drudgery shows up in burnout and turnover. Industry research indicates
          that teams weighed down by non value work experience higher attrition [3]. This outcome is
          predictable. Talented engineers have options, and they gravitate toward environments where they
          can act as innovators rather than button pushers.
        </p>
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-4">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            "Your best engineers didn't earn advanced degrees to become glorified data entry clerks, and
            they know it." [4]
          </p>
        </blockquote>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          When day to day work fails to match expectations, even strong performers may disengage or leave
          entirely.
        </p>
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-8">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            Higher attrition rates are linked to teams overloaded with non-value work.
          </p>
        </blockquote>

        {/* Section 3 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Disengaged Engineers Deliver Less Value
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          The risk is not limited to losing talent. Engineers who stay but disengage are far less effective.
          A burned out engineer is more likely to focus on pushing paperwork through than on actively
          improving designs.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          In creative fields like engineering, motivation is a core driver of productivity. When repetitive
          busywork erodes motivation, output quality declines as well. Innovation slows, review quality
          drops, and small problems compound over time.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Engineering leaders and CTOs need to account for this human factor alongside traditional metrics.
          Automation is not only about speed or cost reduction. It is also about sustaining engagement and
          preserving the sense of purpose that draws people into engineering in the first place.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          When teams reclaim time by eliminating mind numbing tasks through engineering workflow automation,
          engineers regain focus and energy. They spend more time in design reviews, exploring improvements,
          and learning new methods that create real value.
        </p>

        {/* Section 4 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Evidence From Other Industries Points the Way Forward
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Evidence from adjacent disciplines reinforces this point. In a Chainguard survey of software
          teams, 94 percent of engineers who heavily relied on automation reported spending most of their
          time on work that energized them [5].
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          A similar shift is possible for CAD teams. Instead of dreading another afternoon of manual BOM
          updates, an engineer can focus on simulation, optimization, or prototype refinement. That change
          in how work feels can be transformative. It turns engineering from a grind back into a craft.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85]">
          If nothing changes, more engineers will feel interchangeable, their creativity underused, and
          their passion diminished. No organization can afford that outcome in the long run.
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

export default BlogPost2;
