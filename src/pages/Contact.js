import React, { useMemo, useId, useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import "./Contact.css";

const EMAIL = "info@automindsafrica.com";
const PHONE_TEL = "+256783025667";
const PHONE_LABEL = "0783025667";
const WA_NUMBER = "256787132332";
const WA_LABEL = "0787132332";

export default function Contact() {
  const formId = useId();
  const statusId = useId();

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Keep this stable; it prevents tiny re-renders on each keystroke
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AutoMinds Africa",
      url: "https://automindsafrica.com",
      logo: "/logo.png",
      email: EMAIL,
      telephone: PHONE_TEL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressCountry: "UG",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: EMAIL,
          telephone: PHONE_TEL,
          areaServed: "UG",
          availableLanguage: ["en"],
        },
      ],
    }),
    []
  );

  return (
    <main className="contact contact-main" role="main">
      {/* Header */}
      <header className="contact-header animate-fade-in" aria-labelledby="contact-title">
        <h1 id="contact-title" className="contact-title">
          Contact & Consultation
        </h1>
        <p className="contact-subtitle">
          Tell us what you want to automate. We’ll reply with a clear plan and next steps.{" "}
          <span className="contact-badge" aria-label="Response time">
            We respond within 1 business day
          </span>
        </p>
      </header>

      {/* Content: info + form */}
      <div className="contact-content">
        {/* Contact info */}
        <section className="contact-info animate-slide-in delay-1" aria-labelledby="info-title">
          <h2 id="info-title" className="sr-only">
            Contact details
          </h2>

          <div className="contact-info-card" role="region" aria-label="Contact details">
            <ul className="contact-list">
              <li>
                <FaEnvelope className="contact-icon" aria-hidden="true" />
                <span className="contact-k">Email</span>
                <a className="contact-v" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>

              <li>
                <FaPhone className="contact-icon" aria-hidden="true" />
                <span className="contact-k">Phone</span>
                <a className="contact-v" href={`tel:${PHONE_TEL}`} rel="nofollow">
                  {PHONE_LABEL}
                </a>
              </li>

              <li>
                <FaWhatsapp className="contact-icon" aria-hidden="true" />
                <span className="contact-k">WhatsApp</span>
                <a
                  className="contact-v"
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {WA_LABEL}
                </a>
              </li>

              <li>
                <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
                <span className="contact-k">Location</span>
                <span className="contact-v">
                  Kampala, Uganda <span className="info-muted">(meetings by appointment)</span>
                </span>
              </li>
            </ul>

            <div className="contact-quick">
              <a
                className="contact-quick-btn primary"
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  "Hi AutoMinds Africa — I’d like help automating a workflow. Here’s what we do and what we want to improve:"
                )}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Start on WhatsApp <FaArrowRight aria-hidden="true" />
              </a>

              <a className="contact-quick-btn secondary" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Automation Consultation")}`}>
                Email instead
              </a>
            </div>
          </div>
        </section>

        {/* Contact form (FormSubmit) */}
        <section className="contact-form-wrap animate-slide-in delay-2" aria-labelledby="form-title">
          <h2 id="form-title" className="sr-only">
            Send us a message
          </h2>

          {/* NOTE: FormSubmit is fine, but without JS you can’t show a true “sending” state.
              We still prevent double-submit and show a lightweight UX state. */}
          <form
            id={formId}
            className="contact-form"
            action={`https://formsubmit.co/${EMAIL}`}
            method="POST"
            onSubmit={() => {
              setSubmitting(true);
              setSubmitted(true);
            }}
            aria-describedby={statusId}
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
                pattern="^\\+?\\d[\\d\\s\\-]{6,}$"
                title="Enter a valid phone number"
              />
            </label>

            <label className="field">
              <span className="label">Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Briefly describe what you do today, what’s slow or painful, and what outcome you want."
                required
                minLength={10}
              />
            </label>

            <button type="submit" className="contact-submit" disabled={submitting} aria-disabled={submitting}>
              {submitting ? "Sending…" : "Send Message"}
            </button>

            <div id={statusId} className="contact-status" aria-live="polite">
              {submitted ? "If you’re not redirected automatically, please allow popups/redirects for this site." : ""}
            </div>

            <p className="contact-privacy">
              By submitting, you agree to be contacted about your request. We don’t sell your data.
            </p>
          </form>
        </section>
      </div>

      {/* Icons row */}
      <nav className="contact-card animate-slide-in delay-3" aria-label="Quick contact links">
        <a
          href={`mailto:${EMAIL}`}
          className="contactIconBox boxEmail"
          title="Email"
          aria-label="Email AutoMinds Africa"
        >
          <FaEnvelope className="contactSvg" aria-hidden="true" />
        </a>

        <a
          href={`tel:${PHONE_TEL}`}
          className="contactIconBox boxPhone"
          title="Phone"
          aria-label="Call AutoMinds Africa"
          rel="nofollow"
        >
          <FaPhone className="contactSvg" aria-hidden="true" />
        </a>

        <a
          href={`https://wa.me/${WA_NUMBER}`}
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
            href={`https://wa.me/${WA_NUMBER}`}
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Chat on WhatsApp
          </a>{" "}
          or <a href={`mailto:${EMAIL}`}>email us directly</a>.
        </p>
      </footer>

      {/* Organization structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
