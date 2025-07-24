// src/components/Loader.js
import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-hero">
      {/* Animated SVG */}
      <div className="loader-svg-wrap">
        <svg className="loader-svg" viewBox="0 0 64 64" width="64" height="64">
          <defs>
            <linearGradient id="mainGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff6a00" />
              <stop offset="100%" stopColor="#174d7c" />
            </linearGradient>
          </defs>
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="url(#mainGradient)"
            strokeWidth="8"
            fill="none"
            className="spin"
          />
        </svg>
      </div>
      {/* Animated Company Name */}
      <h1 className="animated-logo">
        <span className="orange">Auto</span>
        <span className="blue">Minds</span>
        <span className="white">Africa</span>
      </h1>
    </div>
  );
}

export default Loader;
