/* ──────────────────────────────────────────────────────────────────────────
   Blog.jsx  –  /blog
   Main blog listing page — 6 article cards in a 2-column grid.
   Each card links to its individual post page under /blog/:slug.
────────────────────────────────────────────────────────────────────────── */
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "cad-workflow-automation-engineering-revolution",
    label: "ARTICLES",
    title: "CAD Workflow Automation and the Engineering Automation Revolution",
    author: "Kaushik Dutta Bhowmik",
    date: "January 27, 2026",
    excerpt:
      "CAD Workflow Automation and the Engineering Automation Revolution CAD workflow automation is becoming essential for...",
  },
  {
    id: 2,
    slug: "cad-workflow-automation-human-toll",
    label: "ARTICLES",
    title: "CAD Workflow Automation and the Human Toll on Engineering Teams",
    author: "Kaushik Dutta Bhowmik",
    date: "January 27, 2026",
    excerpt:
      "CAD Workflow Automation and the Human Toll on Engineering Teams CAD workflow automation helps reduce...",
  },
  {
    id: 3,
    slug: "cad-workflow-automation-behind-devops",
    label: "ARTICLES",
    title: "CAD Workflow Automation is Still Miles Behind DevOps",
    author: "Kaushik Dutta Bhowmik",
    date: "January 11, 2026",
    excerpt:
      "CAD Workflow Automation is Still Miles Behind DevOps Why CAD workflow automation lags behind DevOps...",
  },
  {
    id: 4,
    slug: "errors-manual-cad-workflows-manufacturing",
    label: "ARTICLES",
    title: "Errors in Manual CAD Workflows Could Disrupt Manufacturing",
    author: "Kaushik Dutta Bhowmik",
    date: "January 4, 2026",
    excerpt:
      "Errors in Manual CAD Workflows Could Disrupt Manufacturing How small CAD data mistakes can trigger...",
  },
  {
    id: 5,
    slug: "hidden-cost-manual-engineering-tasks",
    label: "ARTICLES",
    title: "Hidden Cost of Manual Engineering Tasks",
    author: "Kaushik Dutta Bhowmik",
    date: "December 12, 2025",
    excerpt:
      "The Hidden Cost of Manual Engineering Tasks How repetitive workflows drain engineering capacity and slow...",
  },
  {
    id: 6,
    slug: "repetitive-engineering-tasks-disrupt-innovation",
    label: "ARTICLES",
    title: "Repetitive Engineering Tasks Could Disrupt Innovation",
    author: "Kaushik Dutta Bhowmik",
    date: "December 4, 2025",
    excerpt:
      "Repetitive Engineering Tasks Could Disrupt Innovation How repetitive CAD tasks silently drain 40% of engineering...",
  },
];

function Blog() {
  usePageTitle("Blog");
  return (
    <main className="bg-site-bg min-h-screen">
      {/* ── HERO GLOW ── */}
      <section className="relative bg-site-bg pt-[90px] pb-4 overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[520px] bg-page-glow pointer-events-none" />

        {/* Heading content */}
        <div className="relative z-[1] max-w-site mx-auto px-6 text-center">
          <span className="inline-block text-[11px] font-semibold text-accent uppercase tracking-[1.5px] px-3 py-1 border border-[rgba(0,180,255,0.35)] rounded-full mb-5">
            Blog
          </span>
          <h1 className="text-[clamp(26px,4vw,44px)] font-extrabold text-white tracking-[-0.5px] leading-[1.2] mb-4">
            Engineering Insights & CAD Automation
          </h1>
          <p className="text-[14px] text-muted max-w-[620px] mx-auto leading-[1.8]">
            Engineering teams lose valuable time to manual workflows and
            repetitive CAD tasks. These articles explore CAD workflow
            automation, productivity challenges, and ways teams protect
            innovation time.
          </p>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="bg-site-bg py-10 px-6 pb-20">
        <div className="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-card-bg border border-white/[0.08] rounded-xl p-6 flex flex-col gap-3 transition-all duration-[250ms] hover:border-[rgba(0,180,255,0.25)] hover:bg-card-hover hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(0,180,255,0.08)]"
            >
              {/* Label */}
              <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-accent">
                {post.label}
              </span>

              {/* Title */}
              <h2 className="text-[17px] font-extrabold text-white leading-[1.3] group-hover:text-accent transition-colors duration-200">
                {post.title}
              </h2>

              {/* Meta row */}
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 text-[12px] text-white/50">
                  {/* Person icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 flex-shrink-0"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-white/50">
                  {/* Calendar icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 flex-shrink-0"
                  >
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM5 7V6h14v1H5z" />
                  </svg>
                  {post.date}
                </span>
              </div>

              {/* Excerpt */}
              <p className="text-[13px] text-muted leading-[1.65] line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;
