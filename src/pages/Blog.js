import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const POSTS = [
  {
    title: "Top 5 Simple Automations for Nonprofits",
    desc: "Discover easy wins for your NGO: donor management, reporting, and more…",
    link: "/blog/top-5-automations-nonprofits",
    date: "July 2025",
  },
  {
    title: "How SMEs Can Leverage AI Without an IT Team",
    desc: "Practical advice for small businesses wanting to automate and grow efficiently.",
    link: "/blog/sme-ai-no-it-team",
    date: "July 2025",
  },
  {
    title: "Success Story: Automating NGO Donor Reporting",
    desc: "See how one NGO saved half their admin time with our help.",
    link: "/blog/ngo-donor-reporting-success",
    date: "July 2025",
  },
  {
    title: "Why Every Business Needs AI — Don’t Be Left Behind!",
    desc: "Understand why automation is no longer optional for modern businesses.",
    link: "/blog/why-businesses-need-ai",
    date: "July 2025",
  },
  {
    title: "Advantages of Workflow Automation in Africa",
    desc: "From cost savings to error reduction—learn the benefits for African enterprises.",
    link: "/blog/advantages-workflow-automation",
    date: "July 2025",
  },
  {
    title: "Boosting Customer Support with Chatbots",
    desc: "How AI chatbots deliver better, faster support for businesses and customers alike.",
    link: "/blog/customer-support-chatbots",
    date: "July 2025",
  },
  {
    title: "AI for Inventory & Stock Management",
    desc: "Reduce losses, optimize your supply chain, and never run out of stock.",
    link: "/blog/ai-stock-management",
    date: "July 2025",
  },
  {
    title: "Online Forms & Paperless Processes",
    desc: "Replace paperwork with easy online forms for admissions, onboarding, and more.",
    link: "/blog/online-forms-paperless",
    date: "July 2025",
  },
];

// Safe parser for "Month YYYY" -> Date
const toDate = (s) => new Date(`${s} 1`);

export default function Blog() {
  const [q, setQ] = useState("");

  const posts = useMemo(
    () => [...POSTS].sort((a, b) => toDate(b.date) - toDate(a.date)),
    []
  );

  const visible = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return posts;
    return posts.filter(
      (p) => (p.title + " " + p.desc).toLowerCase().includes(t)
    );
  }, [q, posts]);

  return (
    <main className="blog" role="main">
      {/* Header */}
      <header className="blog-header">
        <h1 className="blog-title">
          <span className="gradient-title">Blog & Insights</span>
        </h1>
        <p className="blog-subtitle">
          Thought leadership, automation tips, and real stories from the world of AI in Africa.
        </p>

        {/* Search */}
        <form
          className="blog-search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="blog-search-input" className="sr-only">
            Search posts
          </label>
          <input
            id="blog-search-input"
            type="search"
            inputMode="search"
            placeholder="Search posts…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-describedby="search-hint"
          />
          <div id="search-hint" className="search-hint">
            Showing {visible.length} post{visible.length !== 1 ? "s" : ""}.
          </div>
        </form>
      </header>

      {/* Grid of posts */}
      <section
        className="blog-grid"
        aria-labelledby="latest-posts-title"
        aria-live="polite"
      >
        <h2 id="latest-posts-title" className="sr-only">
          Latest posts
        </h2>

        {visible.length === 0 ? (
          <div className="no-results">No posts match your search.</div>
        ) : (
          visible.map((post, i) => (
            <article className="post-card" key={i}>
              <header className="post-header">
                <h3 className="post-title">
                  <Link to={post.link}>{post.title}</Link>
                </h3>
                <div className="post-meta">
                  <span className="post-author">By Team AutoMinds</span>
                  <span aria-hidden="true"> • </span>
                  <time
                    className="post-date"
                    dateTime={toDate(post.date).toISOString().slice(0, 10)}
                  >
                    {post.date}
                  </time>
                </div>
              </header>

              <p className="post-excerpt">{post.desc}</p>

              <footer className="post-footer">
                <Link className="read-more" to={post.link} aria-label={`Read more: ${post.title}`}>
                  Read More →
                </Link>
              </footer>
            </article>
          ))
        )}
      </section>

      {/* Footer CTA */}
      <section className="blog-footer-cta">
        <p>
          Want more insights?{" "}
          <Link to="/contact" className="cta-link">Contact us for automation tips</Link>{" "}
          or{" "}
          <a href="mailto:info@automindsafrica.com?subject=Newsletter%20Signup">
            join our newsletter
          </a>
          .
        </p>
      </section>
    </main>
  );
}
