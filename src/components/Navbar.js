import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar glassy-navbar">
      <div className="navbar-logo-group">
        <img src="/logo.png" alt="AutoMinds Africa Logo" className="logo-img" />
        <span className="logo-gradient-text">AUTOMINDS AFRICA</span>
      </div>
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={menuOpen ? 'open' : ''}>
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/services', label: 'Services' },
          { to: '/blog', label: 'Blog' },
          { to: '/contact', label: 'Contact' },
        ].map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={location.pathname === link.to ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <a className="cta-btn neon-glow" href="/contact">
        Book a Free Consultation
      </a>
    </nav>
  );
}

export default Navbar;
