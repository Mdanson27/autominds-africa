import React from "react";
import "./Hero.css";

function Hero({ title, subtitle, ctaText, ctaLink, bgImage, align = "center", kicker }) {
  return (
    <section
      className="hero"
      data-align={align}
      style={bgImage ? { "--hero-bg": `url(${bgImage})` } : undefined}
      role="region"
      aria-label="Hero"
    >
      <div className="hero-inner">
        {kicker && <p className="hero-kicker">{kicker}</p>}
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          <a className="cta-btn" href={ctaLink}>
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;
