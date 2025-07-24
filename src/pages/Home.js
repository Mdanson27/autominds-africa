import React from 'react';
import { FaRobot, FaTasks, FaUserTie, FaChartLine, FaUsers } from 'react-icons/fa';

import './Home.css';

function Home() {
  return (
    <main>
    {/* HERO - Modern Full-Width Image Style */}
<header className="hero hero-bg">
  <div className="overlay"></div>
  <div className="hero-content">
  <div className="hero-card">
    <h1>Empowering NGOs &amp; SMEs with Smart Automation</h1>
    <p>We help Ugandan organizations streamline operations and unlock growth with affordable AI &amp; automation solutions.</p>
    <a href="/contact" className="cta-button">Book a Free Consultation</a>
  </div>
</div>
</header>


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
      <section className="mission-vision-pro">
  <div className="mv-card mv-mission">
    <div className="mv-icon mission"><span role="img" aria-label="target">🎯</span></div>
    <h3>Our Mission</h3>
    <p>
      We believe every African business and NGO deserves access to world-class technology—
      <br />
      <b>AutoMinds Africa</b> bridges the gap: bringing practical, people-first automation to organizations creating real impact.
    </p>
  </div>
  <div className="mv-card mv-vision">
    <div className="mv-icon vision"><span role="img" aria-label="eye">🌍</span></div>
    <h3>Our Vision</h3>
    <p>
      Empower <b>1,000+ African teams</b> to do more with less—freeing up time, resources, and talent to solve the continent’s biggest challenges.
    </p>
  </div>
</section>


      {/* WHY US */}
  <section className="why-choose-pro">
  <div className="why-bg-decor"></div>
  <div className="why-inner">
    <h2>
      Why Choose <span className="brand-color">AutoMinds Africa?</span>
    </h2>
    <div className="why-cards">
      <div className="why-feature">
        <span className="why-icon mission">🎯</span>
        <div>
          <h4>Results, Not Just Hype</h4>
          <p>98% of our clients see <b>ROI in under 6 months</b>. We automate for <em>impact</em>, not tech for tech’s sake.</p>
        </div>
      </div>
      <div className="why-feature">
        <span className="why-icon partner">🤝</span>
        <div>
          <h4>True Partners</h4>
          <p>You’re never alone—get training, change support, and a local team that grows with you.</p>
        </div>
      </div>
      <div className="why-feature">
        <span className="why-icon local">🌍</span>
        <div>
          <h4>Built for Africa</h4>
          <p>Deep understanding of local realities: connectivity, budgets, and the drive for purpose-led change.</p>
        </div>
      </div>
      <div className="why-feature">
        <span className="why-icon secure">🔒</span>
        <div>
          <h4>Secure & Scalable</h4>
          <p>Enterprise-grade security. Solutions that flex with your growth—no surprise costs or tech headaches.</p>
        </div>
      </div>
    </div>
    <div className="why-numbers">
      <div>
        <span className="num">1000+</span>
        <span className="desc">Teams Empowered</span>
      </div>
      <div>
        <span className="num">98%</span>
        <span className="desc">Client Satisfaction</span>
      </div>
      <div>
        <span className="num">24/7</span>
        <span className="desc">Support</span>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}

export default Home;
