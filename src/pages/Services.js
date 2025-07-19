import React from 'react';
import './Services.css';


function Services() {
  return (
    <main className="services-main">
      <h1>Our Services</h1>

      <section className="service-section">
        <h2>AI-Driven Business Automation Solutions</h2>
        <p>
          Streamline your organization’s operations with our custom-built artificial intelligence and automation solutions. We work with you to design, deploy, and manage intelligent systems that reduce manual work, minimize errors, and free up your staff to focus on high-value tasks. Our automations empower businesses and NGOs to achieve measurable improvements in efficiency, accuracy, and scalability.
        </p>
      </section>

      <section className="service-section">
        <h2>Workflow & Process Automation</h2>
        <p>
          We automate repetitive processes across departments such as HR, finance, administration, and customer support. From automated document approvals to seamless data entry, our solutions integrate with your existing tools and workflows. Reduce bottlenecks, speed up routine operations, and improve employee satisfaction by eliminating tedious manual tasks.
        </p>
      </section>

      <section className="service-section">
        <h2>Smart Chatbots & Virtual Assistants</h2>
        <p>
          Engage your customers, donors, and stakeholders 24/7 with intelligent chatbots powered by GPT and advanced AI. We build custom bots for WhatsApp, websites, and Facebook Messenger that can answer questions, book appointments, onboard users, collect feedback, and provide automated support—reducing the workload on your human team and enhancing user satisfaction.
        </p>
      </section>

      <section className="service-section">
        <h2>Admission & Enrollment Automation Systems</h2>
        <p>
          For schools, colleges, and training centers: our digital admission solutions automate student applications, document uploads, review processes, and admissions notifications. Eliminate paperwork, reduce human error, and give students and staff a smooth, modern enrollment experience.
        </p>
      </section>

      <section className="service-section">
        <h2>Intelligent Online Forms & Data Collection</h2>
        <p>
          Collect and manage information seamlessly with automated online forms and surveys. Our solutions integrate with Google Sheets, email, and your CRM—enabling you to receive, process, and respond to applications, inquiries, and reports instantly, with minimal human intervention.
        </p>
      </section>

      <section className="service-section">
        <h2>Inventory & Stock Management Automation</h2>
        <p>
          Track inventory levels, receive automatic stock alerts, and generate sales or donation reports in real time. We connect your inventory systems to powerful dashboards and automate reordering, helping you prevent shortages and excesses. Perfect for retailers, NGOs with supply chains, and any business managing physical or digital assets.
        </p>
      </section>

      <section className="service-section">
        <h2>Custom Automation Consulting & Integration</h2>
        <p>
          Unsure where to start with automation? We offer tailored consulting to help you identify bottlenecks, select the right tools, and implement solutions that fit your exact needs. Whether you require a single workflow fix or a full-scale automation strategy, our experts will guide you every step of the way.
        </p>
      </section>

      <section className="service-section">
        <h2>Other Automation Services</h2>
        <ul>
          <li>Automated reporting and dashboards for grants, fundraising, and donor management</li>
          <li>Email and SMS marketing automation</li>
          <li>AI-powered appointment scheduling</li>
          <li>HR onboarding automation</li>
          <li>
            <strong>Expertise in automated email solutions, including notifications, form submissions, and appointment confirmations, integrated directly with your preferred email provider.</strong>
          </li>
        </ul>
      </section>

      <div style={{ margin: "2em 0" }}>
        <a className="cta-btn" href="/contact">Contact us for a free custom quote</a>
      </div>
    </main>
  );
}

export default Services;
