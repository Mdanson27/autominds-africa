import React from "react";
import Socials from "./Socials";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <h2 className="brand">AutoMinds Africa</h2>
          <p className="tagline">
            Empowering African businesses & NGOs with AI automation.
          </p>

          <p className="footer-mini">
            Kampala, Uganda ·{" "}
            <a href="mailto:info@automindsafrica.com">info@automindsafrica.com</a>
          </p>
        </div>

        {/* Socials */}
        <nav className="footer-socials" aria-label="Social links">
          <Socials />
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {year} AutoMinds Africa · All rights reserved.</p>
        <p className="footer-legal">
          <a href="/privacy" className="footer-link">
            Privacy
          </a>
          <span aria-hidden="true"> · </span>
          <a href="/terms" className="footer-link">
            Terms
          </a>
        </p>
      </div>
    </footer>
  );
}
