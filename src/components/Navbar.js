import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Add the logo image with animation class */}
        <img 
          src="/logo.png" 
          alt="AutoMinds Africa Logo" 
          className="logo-animate"
        />
        AutoMinds Africa
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <a className="cta-btn" href="/contact">Book a Free Consultation</a>
    </nav>
  );
}
export default Navbar;
