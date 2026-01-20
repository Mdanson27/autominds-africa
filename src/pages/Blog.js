import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaArrowRight,
  FaRegClock,
  FaTags,
  FaBolt,
  FaStar,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import "./Blog.css";

/**
 * Blog.jsx (Upgraded to match Blog.css "blogPro")
 * - Full hero with search + filters + sort
 * - Featured post card
 * - Grid cards using Blog.css classes
 * - Accessible empty state + keyboard-friendly tags
 * - Uses existing POSTS data (just enriched with tags/reading time/category)
 */

const POSTS = [
  {
    title: "Top 5 Simple Automations for Nonprofits",
    desc: "Discover quick wins for NGOs: donor workflows, reporting, follow-ups, and admin cleanup that immediately saves time.",
    link: "/blog/top-5-automations-nonprofits",
    date: "July 2025",
    category: "NGO Automation",
    tags: ["NGOs", "Reporting", "Donors", "Operations"],
    minutes: 6,
    featured: true,
  },
  {
    title: "How SMEs Can Leverage AI Without an IT Team",
    desc: "Practical strategies for SMEs: start small, automate repeat work, integrate WhatsApp, and scale with measurable ROI.",
    link: "/blog/sme-ai-no-it-team",
    date: "July 2025",
    category: "SME Growth",
    tags: ["SMEs", "AI", "Productivity", "ROI"],
    minutes: 7,
  },
  {
    title: "Success Story: Automating NGO Donor Reporting",
    desc: "A real-world walkthrough of automating donor updates and reducing manual reporting load—without expensive software.",
    link: "/blog/ngo-donor-reporting-success",
    date: "July 2025",
    category: "Case Study",
    tags: ["Case Study", "NGOs", "Dashboards", "Compliance"],
    minutes: 8,
  },
  {
    title: "Why Every Business Needs AI — Don’t Be Left Behind!",
    desc: "AI is no longer optional. Learn what to automate first, how to avoid hype, and how to build a sustainable advantage.",
    link: "/blog/why-businesses-need-ai",
    date: "July 2025",
    category: "Strategy",
    tags: ["Strategy", "AI", "Leadership", "Africa"],
    minutes: 6,
  },
  {
    title: "Advantages of Workflow Automation in Africa",
    desc: "From cost savings to fewer errors—see why automation is essential for modern African teams operating under constraints.",
    link: "/blog/advantages-workflow-automation",
    date: "July 2025",
    category: "Operations",
    tags: ["Workflow", "Efficiency", "Teams", "Africa"],
    minutes: 6,
  },
  {
    title: "Boosting Customer Support with Chatbots",
    desc: "How chatbots can deliver faster support, better lead capture, and consistent service on WhatsApp and websites.",
    link: "/blog/customer-support-chatbots",
    date: "July 2025",
    category: "Customer Experience",
    tags: ["Chatbots", "WhatsApp", "Support", "Sales"],
    minutes: 7,
  },
  {
    title: "AI for Inventory & Stock Management",
    desc: "Reduce losses, avoid stockouts, and stay audit-ready with automated inventory tracking and alerts built for real teams.",
    link: "/blog/ai-stock-management",
    date: "July 2025",
    category: "Inventory",
    tags: ["Inventory", "Stock", "Alerts", "Retail"],
    minutes: 7,
  },
  {
    title: "Online Forms & Paperless Processes",
    desc: "Replace paperwork with online forms that integrate with email, Sheets, CRMs, and approvals—clean, searchable, reliable.",
    link: "/blog/online-forms-paperless",
    date: "July 2025",
    category: "Digital Transformation",
    tags: ["Forms", "Admissions", "Onboarding", "Automation"],
    minutes: 6,
  },
];

// Safe parser for "Month YYYY" -> Date (stable for your format)
const toDate = (s) => new Date(`${s} 1`);
const fmtISO = (s) => toDate(s).toISOString().slice(0, 10);

function uniq(arr) {
  return Array.from(new Set(arr));
}

export default function Blog() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");

  const posts = useMemo(() => {
    const base = [...POSTS];

    // Ensure exactly one featured if present (fallback to newest)
    const hasFeatured = base.some((p) => p.featured);
    if (!hasFeatured && base.length) {
      base[0] = { ...base[0], featured: true };
    }

    return base;
  }, []);

  const categories = useMemo(() => {
    const c = posts.map((p) => p.category).filter(Boolean);
    return ["All", ...uniq(c).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const featured = useMemo(() => {
    const f = posts.find((p) => p.featured);
    if (f) return f;
    return [...posts].sort((a, b) => toDate(b.date) - toDate(a.date))[0];
  }, [posts]);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();

    return posts.filter((p) => {
      const inCategory = category === "All" ? true : p.category === category;
      const hay = `${p.title} ${p.desc} ${(p.tags || []).join(" ")}`.toLowerCase();
      const inSearch = !t ? true : hay.includes(t);
      return inCategory && inSearch;
    });
  }, [posts, q, category]);

  const visible = useMemo(() => {
    const arr = [...filtered];

    if (sort === "newest") arr.sort((a, b) => toDate(b.date) - toDate(a.date));
    if (sort === "oldest") arr.sort((a, b) => toDate(a.date) - toDate(b.date));
    if (sort === "readtime") arr.sort((a, b) => (a.minutes || 999) - (b.minutes || 999));

    // Keep featured out of grid to avoid duplication
    return arr.filter((p) => p.link !== featured?.link);
  }, [filtered, sort, featured]);

  const onPickTag = (tag) => {
    setQ(tag);
    setCategory("All");
  };

  return (
    <main className="blogPro" role="main">
      {/* HERO */}
      <header className="blogHero" aria-labelledby="blog-title">
        <div className="blogHero-bg" aria-hidden="true" />

        <div className="blogHero-inner">
          <div className="blogHero-card">
            <p className="blogKicker">
              <FaBolt aria-hidden="true" />
              INSIGHTS • PLAYBOOKS • CASE STUDIES
            </p>

            <h1 id="blog-title" className="blogTitle">
              <span className="brandGradient">Blog & Insights</span>
            </h1>

            <p className="blogLead">
              Investor-grade thinking for practical execution: automation strategy, AI
              adoption, and real implementation lessons for NGOs and SMEs across Africa.
            </p>

            {/* Controls */}
            <div className="blogControls" role="search" aria-label="Search and filters">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="searchWrap">
                  <FaSearch className="searchIcon" aria-hidden="true" />
                  <label htmlFor="blog-search" className="sr-only">
                    Search posts
                  </label>
                  <input
                    id="blog-search"
                    className="searchInput"
                    type="search"
                    inputMode="search"
                    placeholder="Search topics, keywords, or tags…"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    aria-describedby="results-hint"
                  />
                </div>
              </form>

              <div className="filtersWrap">
                <div className="selectWrap" aria-label="Category filter">
                  <FaTags aria-hidden="true" />
                  <span className="sr-only">Category</span>
                  <select
                    className="selectPro"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-label="Filter by category"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="selectWrap" aria-label="Sort order">
                  <FaRegClock aria-hidden="true" />
                  <span className="sr-only">Sort</span>
                  <select
                    className="selectPro"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    aria-label="Sort posts"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="readtime">Shortest read</option>
                  </select>
                </div>

                <div id="results-hint" className="resultsHint" aria-live="polite">
                  Showing <strong>{visible.length + (featured ? 1 : 0)}</strong> post
                  {visible.length + (featured ? 1 : 0) !== 1 ? "s" : ""}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED */}
      {featured ? (
        <section className="sectionPro sectionAlt" aria-labelledby="featured-title">
          <div className="containerPro">
            <div className="sectionHead">
              <p className="sectionKicker">Featured</p>
              <h2 id="featured-title" className="sectionTitle">
                Start with our most practical playbook
              </h2>
              <p className="sectionLead">
                If you’re new to automation, begin here—simple steps, clear outcomes, and
                the fastest path to measurable impact.
              </p>
            </div>

            <article className="featuredCard">
              <div className="featuredMeta">
                <span className="pill">
                  <FaStar aria-hidden="true" style={{ marginRight: 8 }} />
                  FEATURED
                </span>
                <span className="dot" aria-hidden="true">
                  •
                </span>
                <span>{featured.category || "Insights"}</span>
                <span className="dot" aria-hidden="true">
                  •
                </span>
                <time dateTime={fmtISO(featured.date)}>{featured.date}</time>
                <span className="dot" aria-hidden="true">
                  •
                </span>
                <span className="readTime">
                  <FaRegClock aria-hidden="true" />
                  {featured.minutes || 6} min read
                </span>
              </div>

              <h3 className="featuredTitle">
                <Link to={featured.link}>{featured.title}</Link>
              </h3>

              <p className="featuredDesc">{featured.desc}</p>

              <div className="tagRow" aria-label="Featured tags">
                {(featured.tags || []).slice(0, 6).map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="tag"
                    onClick={() => onPickTag(t)}
                    aria-label={`Filter by tag: ${t}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="featuredActions">
                <Link className="btnPro btnPrimary" to={featured.link} aria-label={`Read featured: ${featured.title}`}>
                  Read the featured post <FaArrowRight aria-hidden="true" />
                </Link>
                <Link className="btnPro btnSecondary" to="/contact" aria-label="Talk to AutoMinds Africa">
                  Talk to the team
                </Link>
                <a
                  className="btnPro btnGhost"
                  href="mailto:info@automindsafrica.com?subject=Newsletter%20Signup"
                  aria-label="Join the newsletter"
                >
                  <FaEnvelopeOpenText aria-hidden="true" />
                  Join newsletter
                </a>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {/* POSTS GRID */}
      <section className="sectionPro" aria-labelledby="latest-posts-title">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">Library</p>
            <h2 id="latest-posts-title" className="sectionTitle">
              All posts
            </h2>
            <p className="sectionLead">
              Browse playbooks, case studies, and strategy notes. Use search + filters to
              quickly find what matches your organization.
            </p>
          </div>

          {visible.length === 0 ? (
            <div className="emptyState" role="status" aria-live="polite">
              <h3>No posts match your search</h3>
              <p>
                Try a different keyword, clear your category filter, or search by broad topics
                like <strong>NGOs</strong>, <strong>SMEs</strong>, <strong>WhatsApp</strong>, or{" "}
                <strong>Reporting</strong>.
              </p>
              <div className="featuredActions">
                <button
                  type="button"
                  className="btnPro btnSecondary"
                  onClick={() => {
                    setQ("");
                    setCategory("All");
                    setSort("newest");
                  }}
                >
                  Reset filters
                </button>
                <Link className="btnPro btnPrimary" to="/contact">
                  Ask for recommendations <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="postsGrid" aria-live="polite">
              {visible.map((post) => (
                <article className="postCard" key={post.link}>
                  <div className="postMeta">
                    <span>{post.category || "Insights"}</span>
                    <span className="dot" aria-hidden="true">
                      •
                    </span>
                    <time dateTime={fmtISO(post.date)}>{post.date}</time>
                    <span className="dot" aria-hidden="true">
                      •
                    </span>
                    <span className="readTime">
                      <FaRegClock aria-hidden="true" />
                      {post.minutes || 6} min
                    </span>
                  </div>

                  <h3 className="postTitle">
                    <Link to={post.link}>{post.title}</Link>
                  </h3>

                  <p className="postExcerpt">{post.desc}</p>

                  <div className="tagRow" aria-label="Post tags">
                    {(post.tags || []).slice(0, 4).map((t) => (
                      <button
                        key={`${post.link}-${t}`}
                        type="button"
                        className="tag"
                        onClick={() => onPickTag(t)}
                        aria-label={`Filter by tag: ${t}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="postFoot">
                    <Link className="readMore" to={post.link} aria-label={`Read more: ${post.title}`}>
                      Read more <FaArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="blogCta" aria-labelledby="blog-cta-title">
        <div className="containerPro">
          <div className="blogCtaInner">
            <div className="blogCtaText">
              <h2 id="blog-cta-title">Want a plan tailored to your organization?</h2>
              <p>
                Tell us what you do, what’s slowing you down, and what tools you already use.
                We’ll recommend the fastest automation wins—and a realistic roadmap to scale.
              </p>
            </div>

            <div className="blogCtaActions">
              <Link className="btnPro btnPrimary" to="/contact">
                Book a free consultation <FaArrowRight aria-hidden="true" />
              </Link>
              <a
                className="btnPro btnSecondary"
                href="mailto:info@automindsafrica.com?subject=Newsletter%20Signup"
              >
                <FaEnvelopeOpenText aria-hidden="true" />
                Join newsletter
              </a>
            </div>

            <div className="blogCtaNote">⏱️ We reply within 1 business day.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
