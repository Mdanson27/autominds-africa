import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact contact-main" role="main">
      {/* Header */}
      <header className="contact-header animate-fade-in" aria-labelledby="contact-title">
        <h1 id="contact-title">Contact & Consultation</h1>
        <p className="contact-subtitle">
          Ready to start? Reach us via form, WhatsApp, or phone.{" "}
          <span className="contact-badge">We respond within 1 business day!</span>
        </p>
      </header>

      {/* Content: info + form */}
      <div className="contact-content">
        {/* Contact info */}
        <section className="contact-info animate-slide-in delay-1" aria-labelledby="info-title">
          <h2 id="info-title" className="sr-only">Contact details</h2>
          <ul className="contact-list">
            <li>
              <FaEnvelope className="contact-icon" aria-hidden="true" />
              <span>Email:</span>{" "}
              <a href="mailto:info@automindsafrica.com">info@automindsafrica.com</a>
            </li>
            <li>
              <FaPhone className="contact-icon" aria-hidden="true" />
              <span>Phone:</span>{" "}
              <a href="tel:+256783025667" rel="nofollow">0783025667</a>
            </li>
            <li>
              <FaWhatsapp className="contact-icon" aria-hidden="true" />
              <span>WhatsApp:</span>{" "}
              <a
                href="https://wa.me/256787132332"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                0787132332
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
              <span>Location:</span>{" "}
              Kampala, Uganda <span className="info-muted">(meetings by appointment)</span>
            </li>
          </ul>
        </section>

        {/* Contact form (FormSubmit) */}
        <section className="contact-form-wrap animate-slide-in delay-2" aria-labelledby="form-title">
          <h2 id="form-title" className="sr-only">Send us a message</h2>

          <form
            className="contact-form"
            action="https://formsubmit.co/info@automindsafrica.com"
            method="POST"
          >
            {/* --- FormSubmit options --- */}
            <input type="hidden" name="_subject" value="New contact from AutoMinds Africa site" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="_next" value="https://automindsafrica.com/thanks" />

            <label className="field">
              <span className="label">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                minLength={2}
                autoComplete="name"
              />
            </label>

            <label className="field">
              <span className="label">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                inputMode="email"
              />
            </label>

            <label className="field">
              <span className="label">Phone (optional)</span>
              <input
                type="tel"
                name="phone"
                placeholder="+256 7XX XXX XXX"
                autoComplete="tel"
                inputMode="tel"
                pattern="^\+?\d[\d\s\-]{6,}$"
                title="Enter a valid phone number"
              />
            </label>

            <label className="field">
              <span className="label">Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="How can we help you?"
                required
                minLength={10}
              />
            </label>

            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </section>
      </div>

      {/* Icons row */}
      <nav className="contact-card animate-slide-in delay-3" aria-label="Quick contact links">
        <a
          href="mailto:info@automindsafrica.com"
          className="contactIconBox boxEmail"
          title="Email"
          aria-label="Email AutoMinds Africa"
        >
          <FaEnvelope className="contactSvg" aria-hidden="true" />
        </a>
        <a
          href="tel:+256783025667"
          className="contactIconBox boxPhone"
          title="Phone"
          aria-label="Call AutoMinds Africa"
          rel="nofollow"
        >
          <FaPhone className="contactSvg" aria-hidden="true" />
        </a>
        <a
          href="https://wa.me/256787132332"
          className="contactIconBox boxWhatsApp"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="contactSvg" aria-hidden="true" />
        </a>
        <div
          className="contactIconBox boxLocation"
          title="Location"
          aria-label="Location: Kampala, Uganda"
          style={{ cursor: "default" }}
        >
          <FaMapMarkerAlt className="contactSvg" aria-hidden="true" />
        </div>
      </nav>

      {/* Footer note */}
      <footer className="contact-footer animate-fade-in delay-4">
        <p>
          Prefer a real conversation?{" "}
          <a
            href="https://wa.me/256787132332"
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Chat on WhatsApp
          </a>{" "}
          or{" "}
          <a href="mailto:info@automindsafrica.com">email us directly</a>.
        </p>
      </footer>

      {/* Organization structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AutoMinds Africa",
            url: "https://automindsafrica.com",
            logo: "/logo.png",
            email: "info@automindsafrica.com",
            telephone: "+256783025667",
            address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@automindsafrica.com",
                telephone: "+256783025667",
                areaServed: "UG",
                availableLanguage: ["en"]
              }
            ]
          }),
        }}
      />
    </main>
  );
}
