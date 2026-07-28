/* ──────────────────────────────────────────────────────────────────────────
   BlogPost1.jsx  –  /blog/cad-workflow-automation-engineering-revolution
   Blog post #1 of 6. Pagination links to post #2.
────────────────────────────────────────────────────────────────────────── */
import { Link } from "react-router-dom";
import authorImg from "../../assets/images/author.jpg";
import blogImg   from "../../assets/images/blog_1.jpg";
import { BLOG_POSTS } from "./Blog";

const POST   = BLOG_POSTS[0];   // index 0 = post #1
const NEXT   = BLOG_POSTS[1];   // index 1 = post #2
// const PREV   = null;            // no previous for post #1

function BlogPost1() {
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
            <span className="text-[13px] font-semibold text-white/80">{POST.author}</span>
            <span className="text-white/30 text-[11px]">·</span>
            <span className="text-[13px] text-white/50">{POST.date}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(24px,4vw,38px)] font-extrabold text-accent leading-[1.2] tracking-[-0.5px] mb-4">
          CAD Workflow Automation and the Engineering Automation Revolution
        </h1>

        {/* Subtitle / intro italic */}
        <p className="text-[14px] text-muted italic leading-[1.8] mb-6 border-l-2 border-accent/40 pl-4">
          CAD workflow automation is becoming essential for engineering teams. Manual CAD workflows drain time,
          morale, and innovation across organizations.
        </p>

        {/* Opening paragraph with drop-cap */}
        <p className="text-[14px] text-white/75 leading-[1.85] mb-6">
          <span className="float-left text-[52px] font-extrabold text-white leading-[0.85] mr-2 mt-1">T</span>
          he picture is increasingly clear. Repetitive manual workflows are quietly draining the lifeblood of
          engineering teams. Time, money, innovation, accuracy, and morale are steadily eroded by a status quo
          built around exporting files, renaming parts, copying data, and pasting it into spreadsheets.
        </p>

        {/* Featured image */}
        <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-hero-img mb-8">
          <img
            src={blogImg}
            alt="CAD workflow automation transforming engineering workflows"
            className="w-full block object-cover"
          />
        </div>

        {/* Section 1 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Manual CAD Workflows Are a Strategic Risk
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          For engineering managers, CTOs, and operations leaders, this should raise serious concerns. Competitive
          pressure in manufacturing and product development continues to intensify, yet many organizations still
          rely on <strong className="text-white font-semibold">manual CAD workflows</strong> that absorb a
          disproportionate share of skilled engineering time.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Highly trained engineers spend hours each week on tasks that add little engineering value. At the same
          time, downstream teams absorb the impact of inconsistencies, errors, and delays created upstream. This
          is not a minor inefficiency. It is a structural weakness and a growing human capital risk.
        </p>

        {/* Section 2 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          The Opportunity Cost Is Bigger Than It Looks
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          When leaders begin asking the right questions, the magnitude of the problem becomes obvious.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          What could your engineers do with five, ten, or even twenty additional hours each week of focused
          engineering time? The answers point directly to competitive advantage. Faster iteration cycles. Shorter
          time to market. Higher design quality. More engaged teams.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          The opportunity cost of manual CAD workflows extends beyond wages. Every hour spent on repetitive
          engineering tasks is an hour not spent improving designs, exploring alternatives, or solving complex
          problems. Over time, this lost capacity shows up as slower innovation and diminished organizational
          momentum.
        </p>
        {/* Blockquote */}
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-8">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            As one automation expert framed it, the question organizations now face is not whether they can afford
            to automate, but whether they can afford not to [1].
          </p>
        </blockquote>

        {/* Section 3 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Engineering Automation Follows a Proven Path
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Solving this problem does not require untested ideas. Other industries have already mapped the path
          forward.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Software teams faced similar challenges years ago. Manual builds, deployments, and testing cycles slowed
          progress and introduced errors. The solution was not to push developers harder. It was to redesign
          workflows around automation.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-3">
          Engineering organizations can follow the same pattern.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-3">
          The path forward is practical and well understood:
        </p>
        <ul className="flex flex-col gap-2.5 mb-4 ml-2">
          {[
            "Identify repetitive engineering tasks that add no design value.",
            "Define standardized processes that eliminate variation.",
            "Apply CAD workflow automation to execute those processes consistently.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/75 leading-[1.75]">
              <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          Whether through simple macros, scripted batch operations, or a dedicated engineering automation
          platform, the goal remains the same. Engineers should focus on engineering, not administrative overhead.
        </p>

        {/* Section 4 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          Automation Reenergizes Engineering Teams
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Automation is often discussed in terms of speed and cost. Its impact on people is just as important.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          When repetitive tasks are removed, engineers regain time for the work that drew them to the profession
          in the first place. Design reviews become more thoughtful. Experimentation becomes feasible again.
          Learning and skill development return to the daily rhythm of work.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          This shift directly affects morale, retention, and output quality. Teams that reclaim engineering time
          tend to produce better results with less friction. The work feels purposeful again.
        </p>
        <blockquote className="border-l-2 border-accent/50 pl-5 py-1 mb-8">
          <p className="text-[13px] text-white/55 leading-[1.8] italic">
            Teams that reduce repetitive work through automation consistently report higher engagement and greater
            focus on value-creating activities.
          </p>
        </blockquote>

        {/* Section 5 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          CAD Workflow Automation Is Becoming Table Stakes
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-8">
          The evolution of engineering offices mirrors the evolution of manufacturing floors. Just as factories
          moved from labor intensive assembly to highly automated systems, engineering organizations must move
          beyond manual data wrangling. Those who adopt CAD workflow automation gain consistency, speed, and
          resilience. Those who delay continue paying hidden costs in wasted hours, avoidable errors, stalled
          innovation, and disengaged engineers.
        </p>

        {/* Section 6 */}
        <h2 className="text-[clamp(18px,3vw,26px)] font-extrabold text-accent mb-3 leading-[1.25]">
          The Time for an Automation Revolution Is Now
        </h2>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          An engineering automation revolution is already underway. The remaining question is who will lead it
          and who will be forced to catch up.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85] mb-4">
          Organizations that act now will see their teams reenergized and their output amplified. Those that hold
          on to manual processes will continue absorbing unnecessary friction across engineering, manufacturing,
          and supply chain operations.
        </p>
        <p className="text-[14px] text-white/75 leading-[1.85]">
          The manual CAD drudgery of the past does not belong in modern engineering teams. CAD workflow
          automation is no longer optional. It is becoming a baseline capability for competitive organizations.
          Engineers, and the businesses that rely on them, will be better for it.
        </p>

        {/* ── PAGINATION ── */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 gap-4">
          {/* Previous — empty for post #1 */}
          <div />

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

export default BlogPost1;
