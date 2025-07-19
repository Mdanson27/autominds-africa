import React from 'react';
import './About.css';

function About() {
  return (
    <main className="about-main">
      <h1 className="about-page-title">About AutoMinds Africa</h1>

      <div className="about-card">
        <strong>Founded in Kampala, July 18th, 2025.</strong> AutoMinds Africa is on a mission to empower Africa’s organizations and social impact leaders through innovative AI automation. We partner with businesses and NGOs to unlock operational excellence, growth, and long-term impact.
      </div>

      <div className="about-card">
        <h2>Who We Are</h2>
        <p>
          At AutoMinds Africa, we bridge the gap between world-class technology and Africa’s local challenges. Whether you’re a nonprofit or a growing enterprise, our solutions are made for you—tailored, practical, and accessible.
        </p>
      </div>

      <div className="about-card">
        <h2>Our Mission & Core Values</h2>
        <ul>
          <li><strong>Innovation for Impact:</strong> We leverage the latest AI to drive real, measurable outcomes for your organization.</li>
          <li><strong>Access for All:</strong> We believe every African organization—regardless of size—deserves the benefits of smart automation.</li>
          <li><strong>Reliability & Trust:</strong> Your trust is our top priority. We deliver on time, support you every step, and never compromise on quality.</li>
          <li><strong>Dedicated Service:</strong> We are always available—before, during, and after your project. You’re never alone on your automation journey.</li>
          <li><strong>Results-Driven:</strong> We don’t do “buzzwords”—we do what works. Our automations help you scale, cut costs, and deliver bigger impact, faster.</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>Our Story</h2>
        <p>
          AutoMinds Africa began with a simple observation: too many African organizations are held back by manual work, outdated systems, and lack of access to affordable technology. Our founder, <strong>Mushabe Danson</strong>, launched AutoMinds to break this barrier—bringing world-class automation tools, custom AI solutions, and dedicated local support to the people building Africa’s future.
        </p>
      </div>

      <div className="about-card founder-card">
        <div className="founder-avatar">M</div>
        <div>
          <h3>Mushabe Danson</h3>
          <p>
            <strong>Founder & Lead Strategist</strong><br />
            “I believe every organization in Africa deserves tools that multiply their impact. At AutoMinds, I personally partner with every client—mapping your needs, designing solutions, and turning ideas into working systems—quickly and transparently.”
          </p>
        </div>
      </div>

      <div className="about-card">
        <h2>Why Choose AutoMinds Africa?</h2>
        <ul>
          <li><strong>Always Available:</strong> We’re here for you—on WhatsApp, phone, email, or in-person. Our team responds quickly and works around your schedule.</li>
          <li><strong>Transparent Pricing:</strong> No surprises—just fair, flexible packages.</li>
          <li><strong>Continuous Support:</strong> We support your team long after launch, with free training, updates, and advice as you grow.</li>
        </ul>
      </div>

      <div className="about-card cta-card">
        <h2>Let’s Build Together!</h2>
        <p>
          Ready to see what smart automation can do for your organization? Book a free, no-obligation consultation or send us a message—we reply within 24 hours!
        </p>
        <a className="cta-btn" href="/contact">Book Your Appointment</a>
      </div>
    </main>
  );
}
export default About;
