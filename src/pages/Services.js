import React from 'react';
import './Services.css';
import { FaMagic, FaSync, FaRobot, FaClipboardCheck, FaChartLine, FaBoxes, FaUserCog, FaCogs } from 'react-icons/fa';

function Services() {
  return (
    <main className="services-main">
      {/* Services Intro */}
      <div className="services-hero">
  <h1 className="services-title">
    <span className="brand-gradient">Our <b>Services</b></span>
  </h1>
  <p className="services-lead">
    From <b>AI chatbots</b> to <b>workflow automation</b> and <b>custom solutions</b> for Africa’s changemakers—
    AutoMinds brings world-class automation to NGOs, SMEs, and impact-driven teams.
  </p>
</div>

      {/* Service Cards */}
      <div className="service-cards">

        <section className="service-card">
          <div className="service-icon"><FaMagic /></div>
          <h2>AI-Driven Business Automation</h2>
          <p>
            Custom AI & automation for real results—streamline operations, reduce errors, and free up your team for impact. <span className="badge-popular">Most Popular</span>
          </p>
        </section>

        <section className="service-card">
          <div className="service-icon"><FaSync /></div>
          <h2>Workflow & Process Automation</h2>
          <p>
            Automate repetitive tasks—HR, finance, admin, customer support. Faster operations, less stress, happier teams.
          </p>
        </section>

        <section className="service-card">
          <div className="service-icon"><FaRobot /></div>
          <h2>Smart Chatbots & Virtual Assistants</h2>
          <p>
            24/7 WhatsApp, website, or Facebook bots. Bookings, onboarding, instant support—no human burnout.
          </p>
        </section>

        <section className="service-card">
          <div className="service-icon"><FaClipboardCheck /></div>
          <h2>Admission & Enrollment Automation</h2>
          <p>
            For schools and training centers: digital admissions, automated reviews, and real-time notifications.
          </p>
        </section>

        <section className="service-card">
          <div className="service-icon"><FaChartLine /></div>
          <h2>Online Forms & Data Collection</h2>
          <p>
            Automated surveys, applications, and reporting—seamlessly integrated with your tools.
          </p>
        </section>

        <section className="service-card">
          <div className="service-icon"><FaBoxes /></div>
          <h2>Inventory & Stock Automation</h2>
          <p>
            Track, alert, and automate your inventory in real time. Perfect for retailers, NGOs, and supply chains.
          </p>
        </section>

        <section className="service-card">
          <div className="service-icon"><FaUserCog /></div>
          <h2>Automation Consulting & Integration</h2>
          <p>
            Not sure where to start? We audit, advise, and custom-build exactly what your team needs—step by step.
          </p>
        </section>

        <section className="service-card">
          <div className="service-icon"><FaCogs /></div>
          <h2>Other Automation Services</h2>
          <ul>
            <li>Automated reporting & dashboards</li>
            <li>Email/SMS marketing automation</li>
            <li>AI appointment scheduling</li>
            <li>HR onboarding automations</li>
            <li>Email notification & form integrations</li>
          </ul>
        </section>
      </div>

      {/* Call to Action */}
      <div className="services-cta-section">
        <a className="cta-btn pulse" href="/contact">
          Get a Free Custom Quote
        </a>
        <div className="cta-note">
          <span role="img" aria-label="clock">⏱️</span> We reply within 1 business day.
        </div>
      </div>
    </main>
  );
}

export default Services;
