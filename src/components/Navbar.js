import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home", match: "exact" },
  { to: "/about", label: "About", match: "exact" },
  { to: "/services", label: "Services", match: "exact" },
  { to: "/blog", label: "Blog", match: "startsWith" },     // keeps active on /blog/*
  { to: "/contact", label: "Contact", match: "exact" },
];

function isActivePath(pathname, link) {
  if (link.match === "startsWith") {
    // exact /blog OR nested /blog/anything
    return pathname === link.to || pathname.startsWith(link.to + "/");
  }
  // exact match
  return pathname === link.to;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* -----------------------------------------------------------------------
     1) Force consistent “dark shell” so navbar never turns white
     ----------------------------------------------------------------------- */
  useEffect(() => {
    // These classes are safe even if you don't use them elsewhere.
    // They give your CSS a stable anchor to keep the navbar dark.
    document.documentElement.classList.add("theme-dark");
    document.body.classList.add("theme-dark");
    return () => {
      // Do NOT remove on unmount; navbar is global.
      // But if you ever render a different layout without navbar, you can.
    };
  }, []);

  /* -----------------------------------------------------------------------
     2) Close menu on route change
     ----------------------------------------------------------------------- */
  useEffect(() => setMenuOpen(false), [location.pathname]);

  /* -----------------------------------------------------------------------
     3) Lock scroll when menu open (restore previous overflow)
     ----------------------------------------------------------------------- */
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = menuOpen ? "hidden" : prev || "";
    return () => {
      document.documentElement.style.overflow = prev || "";
    };
  }, [menuOpen]);

  /* -----------------------------------------------------------------------
     4) Close on Escape
     ----------------------------------------------------------------------- */
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, onKeyDown]);

  /* -----------------------------------------------------------------------
     5) Add scrolled state (CSS hook) — NEVER changes background to white
     ----------------------------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="navbar" role="banner" data-scrolled={scrolled ? "true" : "false"}>
      <div className="nav-container">
        <Link to="/" className="brand" aria-label="AutoMinds Africa — Home">
          <img src="/logo.png" alt="AutoMinds Africa" className="brand-logo" />
          <span className="brand-text">AutoMinds Africa</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          <button
            type="button"
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <ul
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
            data-open={menuOpen ? "true" : "false"}
          >
            {LINKS.map((link) => {
              const active = isActivePath(location.pathname, link);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`nav-link ${active ? "active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="nav-cta-wrap">
              <Link
                to="/contact"
                className="nav-cta"
                onClick={() => setMenuOpen(false)}
              >
                Book a Free Consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
