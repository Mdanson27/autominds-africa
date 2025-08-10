import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaTasks,
  FaUserTie,
  FaChartLine,
  FaUsers
} from "react-icons/fa";
import "./Home.css";

/** Services data (clean + reusable) */
const SERVICES = [
  {
    icon: <FaRobot aria-hidden="true" />,
    title: "AI-Driven Business Automation",
    desc: "Streamline processes with custom AI tools, boosting efficiency and reducing manual work.",
  },
  {
    icon: <FaTasks aria-hidden="true" />,
    title: "Workflow Automation",
    desc: "Automate repetitive tasks, approvals, and reporting so your team can focus on what matters.",
  },
  {
    icon: <FaUserTie aria-hidden="true" />,
    title: "Custom Automation Consulting",
    desc: "Get tailored advice and implementation—wherever you are in your automation journey.",
  },
  {
    icon: <FaChartLine aria-hidden="true" />,
    title: "Data Analytics & Reporting",
    desc: "Turn your data into actionable insights with dashboards and smart alerts.",
  },
  {
    icon: <FaUsers aria-hidden="true" />,
    title: "Smart Chatbots & Virtual Assistants",
    desc: "24/7 support for your website, WhatsApp, or Facebook—powered by AI.",
  },
  {
    icon: <FaRobot aria-hidden="true" />,
    title: "Website Design & Automation",
    desc: "Modern, mobile-first sites for NGOs & SMEs—plus chatbots, forms, and time-saving automations.",
  },
];

export default function Home() {
  const services = useMemo(() => SERVICES, []);

  // Pull the hero image from /public so Webpack doesn't try to bundle/resolve it
  const heroBg = `${process.env.PUBLIC_URL}/display.png`;
  // If you add a .webp later, just switch the filename:
  // const heroBg = `${process.env.PUBLIC_URL}/display.webp`;

  return (
    <main className="home" role="main">
      {/* ===== HERO ====================================================== */}
      <header
        className="home-hero hero hero-bg"
        aria-labelledby="home-hero-title"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="overlay" aria-hidden="true" />
        <div className="hero-inner hero-content">
          <div className="hero-card">
            <p className="hero-kicker">AutoMinds Africa</p>
            <h1 id="home-hero-title" className="hero-title">
              Empowering NGOs &amp; SMEs with Smart Automation
            </h1>
            <p className="hero-subtitle">
              We help Ugandan organizations streamline operations and unlock growth with affordable AI &amp; automation solutions.
            </p>
            <Link to="/contact" className="cta-btn cta-button" aria-label="Book a free consultation">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </header>

      {/* ===== SERVICES ================================================== */}
      <section className="services section services-preview" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title" className="section-title">Our Services</h2>
          <div className="services-grid service-cards">
            {services.map((s, i) => (
              <article className="service-card" key={i}>
                <div className="service-icon" aria-hidden="true">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ========================================= */}
      <section className="mission-vision section mission-vision-pro" aria-labelledby="mv-title">
        <div className="container mv-grid">
          <h2 id="mv-title" className="sr-only">Mission & Vision</h2>

          <article className="mv-card mv-mission" aria-labelledby="mission-title">
            <div className="mv-icon mission" aria-hidden="true">
              <span role="img" aria-label="target">🎯</span>
            </div>
            <h3 id="mission-title">Our Mission</h3>
            <p>
              We believe every African business and NGO deserves access to world-class technology—{" "}
              <strong>AutoMinds Africa</strong> bridges the gap: bringing practical, people-first automation to organizations creating real impact.
            </p>
          </article>

          <article className="mv-card mv-vision" aria-labelledby="vision-title">
            <div className="mv-icon vision" aria-hidden="true">
              <span role="img" aria-label="earth">🌍</span>
            </div>
            <h3 id="vision-title">Our Vision</h3>
            <p>
              Empower <strong>1,000+ African teams</strong> to do more with less—freeing up time, resources, and talent to solve the continent’s biggest challenges.
            </p>
          </article>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ============================================ */}
      <section className="why section why-choose-pro" aria-labelledby="why-title">
        <div className="why-bg-decor" aria-hidden="true"></div>
        <div className="container why-inner">
          <h2 id="why-title" className="section-title">
            Why Choose <span className="brand-color">AutoMinds Africa?</span>
          </h2>

          <div className="why-cards">
            <article className="why-feature">
              <span className="why-icon mission" aria-hidden="true">🎯</span>
              <div>
                <h3>Results, Not Just Hype</h3>
                <p>98% of our clients see <strong>ROI in under 6 months</strong>. We automate for <em>impact</em>, not tech for tech’s sake.</p>
              </div>
            </article>

            <article className="why-feature">
              <span className="why-icon partner" aria-hidden="true">🤝</span>
              <div>
                <h3>True Partners</h3>
                <p>You’re never alone—get training, change support, and a local team that grows with you.</p>
              </div>
            </article>

            <article className="why-feature">
              <span className="why-icon local" aria-hidden="true">🌍</span>
              <div>
                <h3>Built for Africa</h3>
                <p>Deep understanding of local realities: connectivity, budgets, and purpose-led change.</p>
              </div>
            </article>

            <article className="why-feature">
              <span className="why-icon secure" aria-hidden="true">🔒</span>
              <div>
                <h3>Secure &amp; Scalable</h3>
                <p>Enterprise-grade security. Solutions that flex with your growth—no surprise costs or tech headaches.</p>
              </div>
            </article>
          </div>

          {/* Numbers as a definition list for semantics */}
          <dl className="why-numbers" aria-label="Key metrics">
            <div className="why-num">
              <dt className="num">1000+</dt>
              <dd className="desc">Teams Empowered</dd>
            </div>
            <div className="why-num">
              <dt className="num">98%</dt>
              <dd className="desc">Client Satisfaction</dd>
            </div>
            <div className="why-num">
              <dt className="num">24/7</dt>
              <dd className="desc">Support</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
