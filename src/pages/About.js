import React from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaHandsHelping,
  FaUsers,
  FaRobot,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <main className="about" role="main">
      {/* Page header */}
      <header className="about-hero glassy-card" aria-labelledby="about-title">
        <h1 id="about-title" className="about-title">
          About <span className="brand-gradient">AutoMinds Africa</span>
        </h1>
        <p className="about-subtitle">
          Driving Africa’s digital leap — one organization at a time.
        </p>
      </header>

      {/* Why we exist */}
      <section className="section glassy-card" aria-labelledby="why-title">
        <h2 id="why-title" className="section-title">Why We Exist</h2>
        <p className="lead">
          <strong>Founded in Kampala, July 18, 2025:</strong> AutoMinds Africa
          empowers organizations to work smarter. We automate what slows you
          down—so you focus on impact, not admin.
        </p>

        <ul className="values-list">
          <li>
            <FaBolt className="icon" aria-hidden="true" />
            <strong>AI for Impact.</strong> Solutions that deliver results, not hype.
          </li>
          <li>
            <FaHandsHelping className="icon" aria-hidden="true" />
            <strong>Real Partnerships.</strong> We guide you end-to-end.
          </li>
          <li>
            <FaUsers className="icon" aria-hidden="true" />
            <strong>Inclusive Service.</strong> NGOs, SMEs, visionaries—Africa’s doers.
          </li>
          <li>
            <FaRobot className="icon" aria-hidden="true" />
            <strong>Smart Automation.</strong> Less paperwork, more progress.
          </li>
        </ul>
      </section>

      {/* Differentiators */}
      <section className="section glassy-card highlights" aria-labelledby="diff-title">
        <h2 id="diff-title" className="section-title">What Makes Us Different</h2>
        <ul className="why-list">
          <li><strong>Built for Africa:</strong> We solve for cost, connectivity, and complexity.</li>
          <li><strong>Practical & Fast:</strong> No jargon—proven automations, delivered on time.</li>
          <li><strong>Human Support:</strong> Talk to people, not bots. We’re a WhatsApp away.</li>
          <li><strong>Local & Trusted:</strong> Context-aware, long-term partners.</li>
        </ul>
      </section>

      {/* Who we help */}
      <section className="section glassy-card" aria-labelledby="who-title">
        <h2 id="who-title" className="section-title">Who We Help</h2>
        <ul className="why-list">
          <li><strong>NGOs & Social Impact:</strong> Free staff time, improve donor reporting, scale outreach.</li>
          <li><strong>Small Businesses:</strong> Automate sales, follow-ups, and reporting to grow faster.</li>
          <li><strong>Community Builders:</strong> Reach more people—without burnout.</li>
        </ul>
      </section>

      {/* Early impact */}
      <section className="section glassy-card impact" aria-labelledby="impact-title">
        <h2 id="impact-title" className="section-title">Early Impact</h2>
        <dl className="impact-grid">
          <div className="impact-item">
            <dt className="impact-number">5+</dt>
            <dd className="impact-desc">Organizations Helped</dd>
          </div>
          <div className="impact-item">
            <dt className="impact-number">100%</dt>
            <dd className="impact-desc">Client Retention</dd>
          </div>
          <div className="impact-item">
            <dt className="impact-number">3+</dt>
            <dd className="impact-desc">Pilot Projects</dd>
          </div>
          <div className="impact-item">
            <dt className="impact-number">24/7</dt>
            <dd className="impact-desc">Founder Support</dd>
          </div>
        </dl>
      </section>

      {/* Mission & values */}
      <section className="section glassy-card" aria-labelledby="values-title">
        <h2 id="values-title" className="section-title">Our Mission & Core Values</h2>
        <ul className="values-list">
          <li>
            <FaBolt className="icon" aria-hidden="true" />
            <strong>Innovation for Impact:</strong> AI that solves real problems.
          </li>
          <li>
            <FaUsers className="icon" aria-hidden="true" />
            <strong>Access for All:</strong> Automation that fits any budget.
          </li>
          <li>
            <FaCheckCircle className="icon" aria-hidden="true" />
            <strong>Reliability & Trust:</strong> Transparent, on-time, secure.
          </li>
          <li>
            <FaHandsHelping className="icon" aria-hidden="true" />
            <strong>Service that Stays:</strong> From first call to post-launch.
          </li>
        </ul>
      </section>

      {/* Founder */}
      <section className="founder glassy-card" aria-labelledby="founder-title">
        <div className="founder-avatar" aria-hidden="true">M</div>
        <div className="founder-content">
          <h2 id="founder-title" className="section-title">Mushabe Danson</h2>
          <div className="founder-role">Founder & Lead Strategist</div>
          <blockquote className="founder-quote">
            “Every organization in Africa deserves tools that multiply their impact. I personally partner with each client—mapping needs, designing solutions, and turning ideas into working systems—quickly and transparently.”
          </blockquote>
          <a
            className="founder-contact"
            href="https://wa.me/256787132332"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp Mushabe
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section glassy-card about-cta" aria-labelledby="cta-title">
        <h2 id="cta-title" className="section-title">Let’s Build Africa’s Future Together</h2>
        <p className="lead">
          Discover how smart automation can transform your organization. Book a free,
          no-obligation call and let’s turn your mission into reality.
        </p>
        <Link to="/contact" className="cta-btn">Book Your Appointment</Link>
      </section>
    </main>
  );
}
