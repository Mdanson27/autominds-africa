import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaMagic,
  FaSync,
  FaRobot,
  FaClipboardCheck,
  FaChartLine,
  FaBoxes,
  FaUserCog,
  FaCogs,
} from "react-icons/fa";
import "./Services.css";

const SERVICES = [
  {
    icon: <FaMagic aria-hidden="true" />,
    title: "AI-Driven Business Automation",
    desc:
      "Custom AI & automation for real results—streamline operations, reduce errors, and free up your team for impact.",
    badge: "Most Popular",
  },
  {
    icon: <FaSync aria-hidden="true" />,
    title: "Workflow & Process Automation",
    desc:
      "Automate repetitive tasks—HR, finance, admin, and customer support. Faster operations, less stress, happier teams.",
  },
  {
    icon: <FaRobot aria-hidden="true" />,
    title: "Smart Chatbots & Virtual Assistants",
    desc:
      "24/7 WhatsApp, website, or Facebook bots. Bookings, onboarding, and instant support—without burnout.",
  },
  {
    icon: <FaClipboardCheck aria-hidden="true" />,
    title: "Admission & Enrollment Automation",
    desc:
      "For schools and training centers: digital admissions, automated reviews, and real-time notifications.",
  },
  {
    icon: <FaChartLine aria-hidden="true" />,
    title: "Online Forms & Data Collection",
    desc:
      "Automated surveys, applications, and reporting—seamlessly integrated with your tools.",
  },
  {
    icon: <FaBoxes aria-hidden="true" />,
    title: "Inventory & Stock Automation",
    desc:
      "Track, alert, and automate your inventory in real time. Perfect for retailers, NGOs, and supply chains.",
  },
  {
    icon: <FaUserCog aria-hidden="true" />,
    title: "Automation Consulting & Integration",
    desc:
      "Not sure where to start? We audit, advise, and custom-build exactly what your team needs—step by step.",
  },
  {
    icon: <FaCogs aria-hidden="true" />,
    title: "Other Automation Services",
    bullets: [
      "Automated reporting & dashboards",
      "Email/SMS marketing automation",
      "AI appointment scheduling",
      "HR onboarding automations",
      "Email notification & form integrations",
    ],
  },
];

export default function Services() {
  const items = useMemo(() => SERVICES, []);

  return (
    <main className="services services-main" role="main">
      {/* Intro */}
      <header className="services-hero" aria-labelledby="services-title">
        <h1 id="services-title" className="services-title">
          <span className="brand-gradient">
            Our <strong>Services</strong>
          </span>
        </h1>
        <p className="services-lead">
          From <strong>AI chatbots</strong> to <strong>workflow automation</strong> and{" "}
          <strong>custom solutions</strong> for Africa’s changemakers—AutoMinds brings
          world-class automation to NGOs, SMEs, and impact-driven teams.
        </p>
      </header>

      {/* Catalog */}
      <section
        className="services-grid service-cards"
        aria-labelledby="catalog-title"
      >
        <h2 id="catalog-title" className="sr-only">
          Service catalog
        </h2>

        {items.map((s, i) => (
          <article className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>

            {s.desc ? (
              <p>
                {s.desc}{" "}
                {s.badge && (
                  <span className="badge badge-popular" aria-label="Most popular service">
                    {s.badge}
                  </span>
                )}
              </p>
            ) : (
              <ul className="service-bullets">
                {s.bullets?.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="services-cta-section" aria-labelledby="services-cta-title">
        <h2 id="services-cta-title" className="sr-only">Get a quote</h2>
        <Link className="cta-btn pulse" to="/contact">
          Get a Free Custom Quote
        </Link>
        <div className="cta-note">
          <span role="img" aria-label="clock">⏱️</span> We reply within 1 business day.
        </div>
      </section>
    </main>
  );
}
