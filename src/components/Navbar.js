import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [menuOpen]);

  // Close on Escape
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, onKeyDown]);

  return (
    <header className="navbar" role="banner">
      <div className="nav-container">
        <Link to="/" className="brand" aria-label="AutoMinds Africa – Home">
          <img src="/logo.png" alt="" className="brand-logo" />
          <span className="brand-text">AutoMinds Africa</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <ul
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
            data-open={menuOpen}
          >
            {LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`nav-link ${active ? "active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="nav-cta-wrap">
              <Link to="/contact" className="nav-cta">Book a Free Consultation</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <button
          className="nav-backdrop"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

