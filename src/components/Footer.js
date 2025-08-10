import React from "react";
import Socials from "./Socials";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 className="brand">AutoMinds Africa</h2>
          <p className="tagline">
            Empowering African businesses & NGOs with AI automation.
          </p>
        </div>

        <div className="footer-socials" aria-label="Social links">
          {/* Your Socials component should render <a> links with aria-labels */}
          <Socials />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AutoMinds Africa · All rights reserved.</p>
      </div>
    </footer>
  );
}
