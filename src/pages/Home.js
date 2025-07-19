import React from 'react';
import { FaRobot, FaTasks, FaUserTie, FaChartLine, FaUsers, FaHandshake, FaFlagCheckered } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h1>
          Empowering African Businesses & NGOs with <span className="hero-highlight">AI Automation</span>
        </h1>
        <p className="hero-desc">
          Unlock efficiency, growth, and impact with tailored automation solutions for your organization.<br />
          <span className="hero-sub">
            <span role="img" aria-label="rocket">🚀</span> Trusted by forward-thinking NGOs and fast-growing SMEs across Africa.
          </span>
        </p>
        <a href="/contact" className="cta-btn pulse">Book a Free Consultation</a>
      </section>

      {/* SERVICES */}
<section className="services-preview">
  <h2>Our Services</h2>
  <div className="service-cards">
    <div className="service-card">
      <FaRobot size={36} className="service-icon" />
      <h3>AI-Driven Business Automation</h3>
      <p>
        Streamline processes with custom AI tools, boosting efficiency and reducing manual work.
      </p>
    </div>
    <div className="service-card">
      <FaTasks size={36} className="service-icon" />
      <h3>Workflow Automation</h3>
      <p>
        Automate repetitive tasks, approvals, and reporting so your team can focus on what matters.
      </p>
    </div>
    <div className="service-card">
      <FaUserTie size={36} className="service-icon" />
      <h3>Custom Automation Consulting</h3>
      <p>
        Get tailored advice and implementation—wherever you are in your automation journey.
      </p>
    </div>
    <div className="service-card">
      <FaChartLine size={36} className="service-icon" />
      <h3>Data Analytics & Reporting</h3>
      <p>
        Turn your data into actionable insights. Automated dashboards and smart alerts for better decisions.
      </p>
    </div>
    <div className="service-card">
      <FaUsers size={36} className="service-icon" />
      <h3>Smart Chatbots & Virtual Assistants</h3>
      <p>
        24/7 support for your website, WhatsApp, or Facebook—powered by AI and always available.
      </p>
    </div>
    <div className="service-card">
      <FaRobot size={36} className="service-icon" />
      <h3>Website Design & Automation</h3>
      <p>
        We build modern, mobile-friendly websites for NGOs and businesses—plus integrate chatbots, forms, and simple automations to save you time.
      </p>
    </div>
  </div>
</section>


      {/* MISSION & VISION */}
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          We believe every African business and NGO deserves access to world-class technology—without the complexity or high costs.<br />
          <strong>AutoMinds Africa</strong> bridges the gap: bringing practical, people-first automation to organizations creating real impact.
        </p>
        <h3 className="vision-title">Our Vision</h3>
        <p className="vision-text">
          Empower 1,000+ African teams to do more with less—freeing up time, resources, and talent to solve the continent’s biggest challenges.
        </p>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>Why Choose AutoMinds Africa?</h2>
        <ul className="why-list">
          <li><FaFlagCheckered className="why-icon" /> <b>Mission-Driven:</b> We are passionate about real results, not just tech for tech’s sake.</li>
          <li><FaHandshake className="why-icon" /> <b>True Partners:</b> We work with you—training, supporting, and adapting as you grow.</li>
          <li><FaUserTie className="why-icon" /> <b>Local Expertise:</b> Deep understanding of Africa’s NGO and business realities.</li>
          <li><FaRobot className="why-icon" /> <b>Scalable & Secure:</b> Flexible solutions that grow with your team—security by design.</li>
        </ul>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-snippet">
        <h2>Ready to Transform Your Organization?</h2>
        <p>
          Start with a free consult—see where automation can unlock time, revenue, and peace of mind for your team.
        </p>
        <a href="/contact" className="cta-link">Let's talk &rarr;</a>
      </section>
    </main>
  );
}

export default Home;
