import React from 'react';

function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {ctaText && ctaLink && (
        <a href={ctaLink} className="cta-btn">{ctaText}</a>
      )}
    </section>
  );
}

export default Hero;
