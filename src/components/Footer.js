import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    // Works reliably across browsers
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-bg" aria-hidden="true" />
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-brandLink" onClick={scrollTop} aria-label="Go to homepage">
            <div className="footer-mark" aria-hidden="true">
              <span className="footer-markDot" />
            </div>
            <div className="footer-brandText">
              <h2 className="brand">AutoMinds Africa</h2>
              <p className="tagline">Investor-grade automation systems built for Africa.</p>
            </div>
          </Link>

          <p className="footer-mini">
            Kampala, Uganda ·{" "}
            <a href="mailto:automindsafrica@gmail.com" className="footer-link">
              info@automindsafrica.com
            </a>
          </p>

          <div className="footer-actions">
            <Link to="/contact" className="footer-cta" onClick={scrollTop}>
              Book a Free Consultation
              <span aria-hidden="true" className="footer-ctaArrow">
                →
              </span>
            </Link>

            <button type="button" className="footer-top" onClick={scrollTop}>
              Back to top <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        {/* Explore */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <h3 className="footer-head">Explore</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link" onClick={scrollTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link" onClick={scrollTop}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link" onClick={scrollTop}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="footer-link" onClick={scrollTop}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link" onClick={scrollTop}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* What we build */}
        <div className="footer-nav">
          <h3 className="footer-head">What we build</h3>
          <ul className="footer-links">
            <li className="footer-item">AI agents & customer assistants</li>
            <li className="footer-item">Google Workspace automation</li>
            <li className="footer-item">Dashboards & reporting systems</li>
            <li className="footer-item">Workflow & process automation</li>
            <li className="footer-item">Secure data pipelines & integrations</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h3 className="footer-head">Connect</h3>
          <p className="footer-note">
            Follow our work, request a demo, or message us directly.
          </p>
          <nav aria-label="Social links">
            <Socials />
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} AutoMinds Africa · All rights reserved.</p>
        <p className="footer-bottomRight">
          Built with <span aria-hidden="true">⚡</span> by AutoMinds Africa
        </p>
      </div>
    </footer>
  );
}
