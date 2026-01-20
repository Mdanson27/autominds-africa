import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

/**
 * Hero (Fixed + Upgraded)
 * - Always full-bleed (works even if parent has a centered container)
 * - Safe default background if bgImage prop is not provided
 * - Uses CSS variable --hero-bg
 */

function isInternalLink(href) {
  return typeof href === "string" && href.startsWith("/");
}

function Cta({ className, href, children, ariaLabel }) {
  if (!href) return null;

  if (isInternalLink(href)) {
    return (
      <Link className={className} to={href} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function Hero({
  title,
  subtitle,
  kicker,
  align = "center",
  bgImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  nextSectionId,
  stats = [],
}) {
  // IMPORTANT:
  // If you placed display.png in /public, use "/display.png"
  // If you placed it in src/assets, pass it as an imported value from Home.js.
  const fallbackBg = "/display.png";

  const heroStyle = useMemo(() => {
    const finalBg = bgImage || fallbackBg;
    return { "--hero-bg": `url(${finalBg})` };
  }, [bgImage]);

  const onScrollNext = () => {
    if (!nextSectionId) return;
    const el = document.getElementById(nextSectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hasStats = Array.isArray(stats) && stats.length > 0;

  return (
    <header
      className="heroPro"
      data-align={align}
      style={heroStyle}
      role="region"
      aria-label="Hero"
    >
      <div className="heroPro-bg" aria-hidden="true" />
      <div className="heroPro-glow" aria-hidden="true" />

      <div className="heroPro-inner">
        <div className="heroPro-card" data-reveal="hero">
          {kicker ? <p className="heroPro-kicker">{kicker}</p> : null}

          <h1 className="heroPro-title">{title}</h1>

          {subtitle ? <p className="heroPro-subtitle">{subtitle}</p> : null}

          {(ctaText && ctaLink) || (secondaryCtaText && secondaryCtaLink) ? (
            <div className="heroPro-actions">
              <Cta className="heroPro-btn heroPro-btnPrimary" href={ctaLink} ariaLabel={ctaText}>
                {ctaText}
              </Cta>

              <Cta
                className="heroPro-btn heroPro-btnSecondary"
                href={secondaryCtaLink}
                ariaLabel={secondaryCtaText}
              >
                {secondaryCtaText}
              </Cta>
            </div>
          ) : null}

          {hasStats ? (
            <dl className="heroPro-stats" aria-label="Hero highlights">
              {stats.map((s, i) => (
                <div className="heroPro-stat" key={i}>
                  <dt className="heroPro-statValue">{s.value}</dt>
                  <dd className="heroPro-statLabel">{s.label}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {nextSectionId ? (
          <button
            type="button"
            className="heroPro-scrollCue"
            onClick={onScrollNext}
            aria-label="Scroll to next section"
          >
            <span className="heroPro-scrollDot" aria-hidden="true" />
            <span className="heroPro-scrollText">Scroll</span>
          </button>
        ) : null}
      </div>
    </header>
  );
}

export default Hero;
