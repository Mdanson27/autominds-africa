import React from 'react';
import './About.css';
import { FaBolt, FaHandsHelping, FaUsers, FaRobot, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

function About() {
  return (
    <main className="about-main">
      {/* Page Title */}
      <div className="about-page-header glassy-card">
        <h1 className="about-page-title">
          About <span className="brand-gradient">AutoMinds Africa</span>
        </h1>
        <p className="about-sub-title">
          Driving Africa’s Digital Leap — One Organization at a Time.
        </p>
      </div>

      {/* About & Purpose */}
      <div className="about-section glassy-card">
        <div className="about-intro-flex">
          <div>
            <h2 className="wow-title">Why We Exist</h2>
            <p>
              <b>Founded in Kampala, July 18th, 2025:</b> AutoMinds Africa empowers African organizations to work smarter, not harder. We unlock your potential by automating what holds you back—so you can focus on impact, not admin.
            </p>
            <ul className="values-list">
              <li><FaBolt className="icon-accent" /> <b>AI for Impact.</b> Our solutions drive results, not hype.</li>
              <li><FaHandsHelping className="icon-accent" /> <b>Real Partnerships.</b> We guide your journey, every step of the way.</li>
              <li><FaUsers className="icon-accent" /> <b>Inclusive Service.</b> NGOs, SMEs, visionaries—Africa’s doers.</li>
              <li><FaRobot className="icon-accent" /> <b>Smart Automation.</b> Less paperwork, more progress.</li>
            </ul>
          </div>
         
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="about-section glassy-card highlights-card">
        <h2 className="wow-title">What Makes Us Different</h2>
        <ul className="why-list">
          <li><b>Built for Africa:</b> We solve the challenges real teams face: cost, connectivity, and complexity.</li>
          <li><b>Practical, Fast Results:</b> No jargon—just proven automations, delivered on time.</li>
          <li><b>Human Support:</b> Talk to people, not bots. We’re always a WhatsApp or call away.</li>
          <li><b>Local, Trusted:</b> We know your context, speak your language, and are here for the long run.</li>
        </ul>
      </div>

      {/* Who We Help */}
      <div className="about-section glassy-card">
        <h2 className="wow-title">Who We Help</h2>
        <ul className="why-list">
          <li><b>NGOs & Social Impact:</b> Free up staff time, boost donor reporting, and scale outreach with less admin.</li>
          <li><b>Small Businesses:</b> Automate everyday tasks—sales, follow-ups, reporting—so you grow faster.</li>
          <li><b>Community Builders:</b> Reach more people and do more good—without burning out.</li>
        </ul>
      </div>

      {/* Impact Numbers */}
      <div className="impact-section glassy-card">
        <h2 className="wow-title">Early Impact</h2>
        <div className="impact-stats">
          <div className="impact-stat">
            <span className="impact-number">5+</span>
            <span className="impact-desc">Organizations Helped</span>
          </div>
          <div className="impact-stat">
            <span className="impact-number">100%</span>
            <span className="impact-desc">Client Retention</span>
          </div>
          <div className="impact-stat">
            <span className="impact-number">3+</span>
            <span className="impact-desc">Pilot Projects</span>
          </div>
          <div className="impact-stat">
            <span className="impact-number">24/7</span>
            <span className="impact-desc">Founder Support</span>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="about-section glassy-card">
        <h2 className="wow-title">Our Mission & Core Values</h2>
        <ul className="values-list">
          <li><FaBolt className="icon-accent" /><b>Innovation for Impact:</b> AI that solves real problems, not just shiny demos.</li>
          <li><FaUsers className="icon-accent" /><b>Access for All:</b> Automation should lift every African team, regardless of size or budget.</li>
          <li><FaCheckCircle className="icon-accent" /><b>Reliability & Trust:</b> Transparent, on-time, and secure—your trust comes first.</li>
          <li><FaHandsHelping className="icon-accent" /><b>Service That Stays:</b> From first call to launch and beyond, you’re always supported.</li>
        </ul>
      </div>

      {/* Founder Highlight */}
      <div className="about-card founder-card">
        <div className="founder-avatar">M</div>
        <div>
          <h3>Mushabe Danson</h3>
          <div className="founder-title">Founder & Lead Strategist</div>
          <blockquote>
            “I believe every organization in Africa deserves tools that multiply their impact. At AutoMinds, I personally partner with every client—mapping your needs, designing solutions, and turning ideas into working systems—quickly and transparently.”
          </blockquote>
          <a href="https://wa.me/256XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="founder-contact">
            <FaWhatsapp /> WhatsApp Mushabe
          </a>
        </div>
      </div>

      {/* Final CTA */}
      <div className="about-section glassy-card cta-card">
        <h2>Let’s Build Africa’s Future Together!</h2>
        <p>
          Discover how smart automation can transform your organization. Book a free, no-obligation call and let’s turn your mission into reality.
        </p>
        <a className="cta-btn pulse" href="/contact">Book Your Appointment</a>
      </div>
    </main>
  );
}

export default About;
