import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaHandsHelping,
  FaChartLine,
  FaBolt,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import "./CaseStudies.css";

const CASES = [
  {
    title: "NGO Workflow Automation",
    icon: <FaHandsHelping aria-hidden="true" />,
    problem: "Manual donor reporting took hours and risked errors.",
    solution: "Automated reporting workflow integrated with existing tools.",
    outcome: ["50% time saved", "Improved accuracy", "Faster reporting turnaround"],
    sector: "NGO / Social Impact",
    link: "/contact",
    tags: ["Reporting", "Dashboards", "Automation"],
    metric: "50% time saved",
  },
  {
    title: "Business Growth with AI",
    icon: <FaChartLine aria-hidden="true" />,
    problem: "Manual sales tracking missed leads and slowed follow-ups.",
    solution: "AI-powered lead tracking with automated reminders and summaries.",
    outcome: ["+30% conversions", "Less admin work", "Consistent follow-ups"],
    sector: "SME / Sales Ops",
    link: "/contact",
    tags: ["CRM", "Leads", "Follow-ups"],
    metric: "+30% conversions",
  },
];

const TESTIMONIALS = [
  {
    quote: "They understood our needs and delivered results fast!",
    author: "Program Manager, Regional NGO",
  },
  {
    quote: "Seamless automation and friendly support. Highly recommended.",
    author: "Owner, Growing SME",
  },
];

export default function CaseStudies() {
  const items = useMemo(() => CASES, []);
  const quotes = useMemo(() => TESTIMONIALS, []);

  return (
    <main className="case-studies" role="main">
      {/* Hero */}
      <header className="cs-hero" aria-labelledby="cs-title">
        <h1 id="cs-title" className="cs-title">
          Case Studies & Testimonials
        </h1>
        <p className="cs-subtitle">
          Real problems solved with practical automation — built for Africa’s realities.
        </p>
      </header>

      {/* Case Studies */}
      <section className="cs-section" aria-labelledby="cs-list-title">
        <div className="cs-section-head">
          <h2 id="cs-list-title" className="section-title">
            Recent Projects
          </h2>
          <p className="cs-section-lead">
            Proof, not promises. Here are real workflows we streamline—fast, reliable, and measurable.
          </p>
        </div>

        <div className="cs-grid">
          {items.map((c, i) => (
            <article className="cs-card" key={i} aria-label={c.title}>
              <header className="cs-card-head">
                <div className="cs-icon" aria-hidden="true">
                  {c.icon}
                </div>

                <div className="cs-headings">
                  <h3 className="cs-card-title">{c.title}</h3>
                  <div className="cs-sector">{c.sector}</div>
                </div>

                {/* Highlight metric (small, high-signal) */}
                {c.metric ? <div className="cs-metric">{c.metric}</div> : null}
              </header>

              {/* Optional tags row */}
              {Array.isArray(c.tags) && c.tags.length > 0 ? (
                <div className="cs-tags" aria-label="Tags">
                  {c.tags.map((t, idx) => (
                    <span className="cs-tag" key={idx}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Problem / Solution / Outcome as a semantic definition list */}
              <dl className="cs-dl">
                <div className="cs-dl-row">
                  <dt className="cs-term">
                    <FaBolt aria-hidden="true" /> Problem
                  </dt>
                  <dd className="cs-def">{c.problem}</dd>
                </div>

                <div className="cs-dl-row">
                  <dt className="cs-term">
                    <FaHandsHelping aria-hidden="true" /> Solution
                  </dt>
                  <dd className="cs-def">{c.solution}</dd>
                </div>

                <div className="cs-dl-row">
                  <dt className="cs-term">
                    <FaCheckCircle aria-hidden="true" /> Outcome
                  </dt>
                  <dd className="cs-def">
                    <ul className="cs-outcomes">
                      {c.outcome.map((o, j) => (
                        <li key={j}>{o}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              {/* Card actions */}
              <div className="cs-actions">
                <Link to={c.link || "/contact"} className="cs-btn cs-btn-primary">
                  Discuss this setup
                </Link>
                <Link to="/services" className="cs-btn cs-btn-secondary">
                  View services
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="cs-section testimonials" aria-labelledby="testimonials-title">
        <div className="cs-section-head">
          <h2 id="testimonials-title" className="section-title">
            What Our Clients Say
          </h2>
          <p className="cs-section-lead">
            We optimize for outcomes and clarity—clients feel it in week one.
          </p>
        </div>

        <div className="testimonials-grid" role="list">
          {quotes.map((t, i) => (
            <figure className="testimonial-card" role="listitem" key={i}>
              <FaQuoteLeft className="quote-mark" aria-hidden="true" />
              <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
              <figcaption className="testimonial-author">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cs-cta" aria-labelledby="cs-cta-title">
        <h2 id="cs-cta-title" className="cs-cta-title">
          Let’s create your success story
        </h2>
        <p className="cs-cta-sub">
          Book a quick call and we’ll map a practical automation you can launch in days, not months.
        </p>
        <div className="cs-cta-actions">
          <Link to="/contact" className="cta-btn">
            Book a Free Consultation
          </Link>
          <Link to="/services" className="cs-btn cs-btn-secondary cs-cta-secondary">
            Explore services
          </Link>
        </div>
      </section>
    </main>
  );
}
