// src/components/Loader.jsx
import React from "react";
import "./Loader.css";

/**
 * Props:
 * - visible: show/hide the loader (default true)
 * - fullscreen: overlay the whole page (default true)
 * - message: screen-reader text (default "Loading…")
 */
export default function Loader({
  visible = true,
  fullscreen = true,
  message = "Loading…",
}) {
  if (!visible) return null;

  return (
    <div
      className={`loader ${fullscreen ? "loader--fullscreen" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={message}
    >
      <div className="loader-svg-wrap" aria-hidden="true">
        <svg className="loader-svg" viewBox="0 0 64 64" width="64" height="64">
          <defs>
            <linearGradient id="loaderGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff6a00" />
              <stop offset="100%" stopColor="#174d7c" />
            </linearGradient>
          </defs>
          {/* subtle background ring */}
          <circle cx="32" cy="32" r="28" className="ring-bg" />
          {/* animated foreground arc */}
          <circle cx="32" cy="32" r="28" className="ring-fg" />
        </svg>
      </div>

      <h1 className="loader-logo">
        <span className="logo-orange">Auto</span>
        <span className="logo-blue">Minds</span>
        <span className="logo-white">Africa</span>
      </h1>

      <span className="sr-only">{message}</span>
    </div>
  );
}
