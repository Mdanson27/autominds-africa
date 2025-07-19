import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import './Contact.css';

function Contact() {
  return (
    <main className="contact-main">
      <div className="contact-header">
        <h1>Contact & Consultation</h1>
        <p>
          Ready to start? Reach us via form, WhatsApp, or phone. <span className="contact-badge">We respond within 1 business day!</span>
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <ul>
            <li><FaEnvelope className="contact-icon"/> <span>Email:</span> <a href="mailto:info@automindsafrica.com">info@automindsafrica.com</a></li>
            <li><FaPhone className="contact-icon"/> <span>Phone:</span> <a href="tel:0783025667">0783025667</a></li>
            <li><FaWhatsapp className="contact-icon"/> <span>WhatsApp:</span> <a href="https://wa.me/256787132332" target="_blank" rel="noopener noreferrer">0787132332</a></li>
            <li><FaMapMarkerAlt className="contact-icon"/> <span>Location:</span> Kampala, Uganda <span className="info-muted">(meetings by appointment)</span></li>
          </ul>
        </div>
   <form
  className="contact-form"
  action="https://formsubmit.co/info@automindsafrica.com"  // <-- your actual email!
  method="POST"
>
  <label>
    Name
    <input type="text" name="name" placeholder="Your Name" required />
  </label>
  <label>
    Email
    <input type="email" name="email" placeholder="Your Email" required />
  </label>
  <label>
    Message
    <textarea name="message" rows={4} placeholder="How can we help you?" required />
  </label>
  {/* Optional: Custom redirect after submit */}
  {/* <input type="hidden" name="_next" value="https://automindsafrica.com/thank-you" /> */}
  <button type="submit">Send Message</button>
</form>
      </div>
      {/* Move ICONS ROW here */}
      <div className="contact-card">
        <a href="mailto:info@automindsafrica.com" className="contactIconBox boxEmail" title="Email">
          <FaEnvelope className="contactSvg" />
        </a>
        <a href="tel:0783025667" className="contactIconBox boxPhone" title="Phone">
          <FaPhone className="contactSvg" />
        </a>
        <a href="https://wa.me/256787132332" className="contactIconBox boxWhatsApp" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <FaWhatsapp className="contactSvg" />
        </a>
        <div className="contactIconBox boxLocation" title="Location" style={{ cursor: "default" }}>
          <FaMapMarkerAlt className="contactSvg" />
        </div>
      </div>
      <div className="contact-footer">
        <p>
          Prefer a real conversation? <a href="https://wa.me/256787132332" className="whatsapp-link" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a> or <a href="mailto:info@automindsafrica.com">email us directly</a>.
        </p>
      </div>
    </main>
  );
}

export default Contact;
