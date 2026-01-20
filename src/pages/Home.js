import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaTasks,
  FaUserTie,
  FaChartLine,
  FaUsers,
  FaGlobeAfrica,
  FaBolt,
  FaShieldAlt,
  FaCode,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaHospital,
  FaSchool,
  FaHome,
  FaHotel,
  FaShoppingCart,
  FaFileInvoice,
  FaClipboardList,
  FaChartPie,
  FaCogs,
  FaLightbulb,
  FaStar,
  FaQuoteLeft,
  FaProjectDiagram,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaEnvelopeOpenText,
  FaServer,
  FaLock,
  FaPlug,
  FaTools,
  FaRocket,
} from "react-icons/fa";

import Hero from "../components/Hero";
import "./Home.css";

/**
 * ==========================================================
 * HOME PAGE — long-form landing page
 * Fixes:
 * - Home turning white after navigation: locks dark scheme & body bg on mount
 * - Adds 1% Better external link: https://one-percent-better.netlify.app
 * ==========================================================
 */

/** Lock the Home page to dark visual baseline while mounted */
function useHomeDarkLock() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    const body = document.body;

    // Save previous values so we can restore perfectly
    const prevColorScheme = html.style.colorScheme;
    const prevBodyBg = body.style.backgroundColor;
    const prevBodyColor = body.style.color;
    const hadHomeClass = body.classList.contains("home-page");

    // Force dark scheme while Home is mounted (prevents white flashes / overrides)
    html.style.colorScheme = "dark";

    // Hard fallback in case some other route styles body white
    body.style.backgroundColor = "#0b1220";
    body.style.color = "#e7ecf3";

    if (!hadHomeClass) body.classList.add("home-page");

    return () => {
      // Restore
      html.style.colorScheme = prevColorScheme;
      body.style.backgroundColor = prevBodyBg;
      body.style.color = prevBodyColor;
      if (!hadHomeClass) body.classList.remove("home-page");
    };
  }, []);
}

/** Scroll reveal (lightweight, no extra library) */
function useScrollReveal() {
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

/** Helpers */
const external = (href) => ({
  href,
  target: "_blank",
  rel: "noopener noreferrer",
});

/** SECTION DATA (structured, reusable) */
const SERVICES_CORE = [
  {
    icon: <FaRobot aria-hidden="true" />,
    title: "AI Agents & Intelligent Assistants",
    desc:
      "We build AI agents that answer questions, collect details, qualify leads, route requests, and support staff — across WhatsApp, web, and internal tools.",
  },
  {
    icon: <FaTasks aria-hidden="true" />,
    title: "Workflow & Operations Automation",
    desc:
      "Automate approvals, reporting, follow-ups, procurement, compliance steps, and internal workflows — so teams stop chasing paperwork and start executing.",
  },
  {
    icon: <FaChartLine aria-hidden="true" />,
    title: "Dashboards, Analytics & Reporting",
    desc:
      "Executive dashboards, alerts, weekly/monthly summaries, performance tracking, budget monitoring, and operational reporting designed for decision-making.",
  },
  {
    icon: <FaCode aria-hidden="true" />,
    title: "Web Apps + Integrations",
    desc:
      "Modern, mobile-first web apps connected to Google Workspace, messaging platforms, payment tools, and databases for end-to-end operational systems.",
  },
  {
    icon: <FaShieldAlt aria-hidden="true" />,
    title: "Security, Access Control & Audit Trails",
    desc:
      "Role-based access, protected workflows, change logs, data validation, and best-practice architecture — built for trust and maintainability.",
  },
  {
    icon: <FaUserTie aria-hidden="true" />,
    title: "Automation Consulting & Delivery Roadmaps",
    desc:
      "We map your real workflow, identify bottlenecks, define a phased roadmap, and ship in stages — with training, support, and iteration until it works in real life.",
  },
];

const INDUSTRIES = [
  {
    icon: <FaGlobeAfrica aria-hidden="true" />,
    title: "NGOs & Impact Organizations",
    points: [
      "Donor reporting automation & dashboards",
      "Field data collection + validation",
      "Operations and procurement workflows",
      "M&E reporting support and structured exports",
    ],
  },
  {
    icon: <FaUsers aria-hidden="true" />,
    title: "SMEs & Growing Businesses",
    points: [
      "Sales + customer management",
      "Automated invoicing & receipts",
      "Inventory + purchasing workflows",
      "Performance dashboards and operations reporting",
    ],
  },
  {
    icon: <FaSchool aria-hidden="true" />,
    title: "Schools & Education",
    points: [
      "Admissions automation (forms → PDFs → Drive → Sheets)",
      "Class lists + term operations + reports",
      "Fee tracking + defaulters + receipts",
      "Parent communication and workflow approvals",
    ],
  },
  {
    icon: <FaHome aria-hidden="true" />,
    title: "Real Estate & Property",
    points: [
      "Rent tracking + tenant management",
      "Accounting & statements for landlords",
      "Maintenance requests + assignment workflows",
      "Occupancy and performance dashboards",
    ],
  },
  {
    icon: <FaHotel aria-hidden="true" />,
    title: "Hospitality (Hotels / Villas / Lodges)",
    points: [
      "Bookings + guest workflows",
      "Housekeeping operations and inventory",
      "Cashflow + finance reports",
      "Procurement, usage logs, and approvals",
    ],
  },
  {
    icon: <FaShoppingCart aria-hidden="true" />,
    title: "Retail / Stores / Inventory-heavy Teams",
    points: [
      "Stock taking & inventory automation",
      "Purchases, usage logs, reorder alerts",
      "Supplier management and costing",
      "Daily sales summaries and dashboards",
    ],
  },
];

const PRODUCT_STACK = [
  {
    badge: "Flagship Web App",
    title: "ZimbaRent — Property & Rent Management",
    desc:
      "A modern property management system for landlords and property managers to track tenants, rent, finances, maintenance, and reporting with clarity and control.",
    bullets: [
      "Tenant & unit management",
      "Rent tracking + statements",
      "Owner/manager dashboards",
      "Operational workflow tools (maintenance, reminders, reporting)",
      "Finance direction: trial balance + balance sheet foundations",
    ],
    primaryCta: { label: "Visit ZimbaRent", url: "https://zimbarent.com" },
    secondaryCta: { label: "Talk to us about property automation", to: "/contact" },
    icon: <FaHome aria-hidden="true" />,
  },
  {
    badge: "Admissions & Documents",
    title: "School Admissions Automation System",
    desc:
      "An automation pipeline that captures student data, generates PDFs, stores files in Google Drive, and updates Google Sheets — reducing admin time, errors, and follow-up chaos.",
    bullets: [
      "Online admission forms with uploads",
      "Auto-generate admission PDFs",
      "Class-based folder storage in Drive",
      "Auto-updates admissions + class lists + master list",
      "Repeatable workflow for staff (fast + consistent)",
    ],
    primaryCta: { label: "Request a demo", to: "/contact" },
    secondaryCta: { label: "Explore education automation", anchor: "#education" },
    icon: <FaSchool aria-hidden="true" />,
  },
  {
    badge: "Health & AI",
    title: "Eye Test AI — Simplifying Eye Screening",
    desc:
      "A concept-driven AI experience designed to simplify eye screening and support guided vision test steps with a clean, accessible UX foundation.",
    bullets: [
      "Guided test stages (right, left, both)",
      "Designed for simple self-screening flows",
      "Clear visuals and progression system",
      "Future-ready concept for recommendations + next steps",
    ],
    primaryCta: { label: "Discuss a healthcare build", to: "/contact" },
    secondaryCta: { label: "See our AI approach", anchor: "#ai" },
    icon: <FaHospital aria-hidden="true" />,
  },
  {
    badge: "Personal Growth",
    title: "1% Better — Daily Growth Tracking App",
    desc:
      "A web app for daily improvement tracking — built to support habits, journaling, and progress review with long-term consistency in mind.",
    bullets: [
      "Daily entries and progress visibility",
      "Simple habit-friendly UI",
      "Designed for long-term consistency",
      "Expandable into coaching + community features",
    ],
    // ✅ Correct live link:
    primaryCta: { label: "Open 1% Better", url: "https://one-percent-better.netlify.app" },
    secondaryCta: { label: "Learn how we ship apps", anchor: "#process" },
    icon: <FaBolt aria-hidden="true" />,
  },
];

const AUTOMATION_SECTIONS = [
  {
    id: "education",
    icon: <FaSchool aria-hidden="true" />,
    title: "Education Automations",
    subtitle:
      "Admissions, class operations, student records, fee tracking, reporting, and staff workflows — delivered as an integrated system.",
    items: [
      { icon: <FaClipboardList aria-hidden="true" />, title: "Admissions Pipeline", desc: "Forms, uploads, PDF generation, Drive storage, and Sheets updates." },
      { icon: <FaCalendarCheck aria-hidden="true" />, title: "Term Operations", desc: "Start new term processes, promotion logic, logs, and organized archives." },
      { icon: <FaMoneyBillWave aria-hidden="true" />, title: "Fees & Defaulters", desc: "Fee tracking, automated defaulter lists, and consistent reporting." },
      { icon: <FaChartPie aria-hidden="true" />, title: "School Dashboards", desc: "Enrollment, payments, term performance, and admin insights." },
    ],
  },
  {
    id: "accounting",
    icon: <FaFileInvoice aria-hidden="true" />,
    title: "Accounting & Finance Automations",
    subtitle:
      "From transactions to reporting — finance workflows that reduce errors and make reporting fast, structured, and repeatable.",
    items: [
      { icon: <FaDatabase aria-hidden="true" />, title: "Structured Records", desc: "Clean validated inputs for consistent data over time." },
      { icon: <FaChartLine aria-hidden="true" />, title: "Dashboards & KPIs", desc: "Budget tracking, expense breakdown, and performance summaries." },
      { icon: <FaFileInvoice aria-hidden="true" />, title: "Invoices & Receipts", desc: "Generate documents, keep logs, and connect payments where needed." },
      { icon: <FaCogs aria-hidden="true" />, title: "Controls & Approvals", desc: "Sign-off rules, role permissions, audit trails, protected workflows." },
    ],
  },
  {
    id: "ai",
    icon: <FaRobot aria-hidden="true" />,
    title: "AI Agents & Chatbot Automations",
    subtitle:
      "Turn conversations into conversions — WhatsApp agents, website assistants, and lead qualification systems that integrate into your workflow.",
    items: [
      { icon: <FaWhatsapp aria-hidden="true" />, title: "WhatsApp Business Agents", desc: "Answer questions, collect details, and push leads into your workflow." },
      { icon: <FaEnvelopeOpenText aria-hidden="true" />, title: "Email + Follow-up Automation", desc: "Auto-confirmations, structured lead emails, internal notifications." },
      { icon: <FaUsers aria-hidden="true" />, title: "Customer Support Assistants", desc: "Knowledge-base driven support that escalates when needed." },
      { icon: <FaProjectDiagram aria-hidden="true" />, title: "Workflow Routing", desc: "Route requests into tasks, teams, dashboards, or approvals automatically." },
    ],
  },
  {
    id: "ops",
    icon: <FaTasks aria-hidden="true" />,
    title: "Operations & Workflow Automations",
    subtitle:
      "Procurement, approvals, inventory, usage logs, and operations reporting — designed to remove daily friction.",
    items: [
      { icon: <FaShoppingCart aria-hidden="true" />, title: "Procurement + Requisition", desc: "Requests, approvals, supplier records, purchases, and logs." },
      { icon: <FaClipboardList aria-hidden="true" />, title: "Usage & Audit Logs", desc: "Track consumption, protect records, and maintain accountability." },
      { icon: <FaChartPie aria-hidden="true" />, title: "Weekly / Monthly Reports", desc: "Automated summaries leadership can actually use." },
      { icon: <FaCloud aria-hidden="true" />, title: "Google Workspace Automation", desc: "Drive + Sheets + Docs automation for structured operations." },
    ],
  },
];

const INTEGRATIONS_STACK = [
  {
    icon: <FaCloud aria-hidden="true" />,
    title: "Google Workspace",
    desc: "Drive, Sheets, Docs, Forms — automated pipelines and structured operations.",
  },
  {
    icon: <FaPlug aria-hidden="true" />,
    title: "APIs & Integrations",
    desc: "Connect systems via REST APIs and webhooks for real-time automation.",
  },
  {
    icon: <FaServer aria-hidden="true" />,
    title: "Backend Services",
    desc: "Node/Express services, automation servers, and reliable job pipelines.",
  },
  {
    icon: <FaLock aria-hidden="true" />,
    title: "Auth & Permissions",
    desc: "Role-based access, protected records, and secure workflows.",
  },
  {
    icon: <FaTools aria-hidden="true" />,
    title: "Operational Tooling",
    desc: "Audit trails, validations, logs, and guardrails that prevent errors.",
  },
  {
    icon: <FaRocket aria-hidden="true" />,
    title: "Deployment & Scaling",
    desc: "Modern hosting + clean architecture that scales with growth.",
  },
];

const PROJECT_PROOF = [
  {
    title: "Systems Built for Real Operations",
    desc:
      "We focus on systems that reduce chaos: clear data structures, protected workflows, audit logs, and dashboards leadership can trust.",
    icon: <FaCheckCircle aria-hidden="true" />,
  },
  {
    title: "Custom Builds, Not Generic Templates",
    desc:
      "Your organization is unique. We design the workflow first, then automate it — ensuring a perfect fit for your team and reality.",
    icon: <FaLightbulb aria-hidden="true" />,
  },
  {
    title: "Security + Maintainability",
    desc:
      "We build with best practices: access control, clean architecture, scalable structure, and maintainable code that grows with you.",
    icon: <FaShieldAlt aria-hidden="true" />,
  },
  {
    title: "Customer-Love Culture",
    desc:
      "We don’t disappear after delivery. We support adoption, improvements, training, and iteration until it performs in real life.",
    icon: <FaHandshake aria-hidden="true" />,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "AutoMinds didn’t just build a tool — they understood our workflow and improved it. Everything became more organized and faster.",
    name: "Client",
    role: "Operations Team",
    stars: 5,
  },
  {
    quote:
      "The automation reduced daily stress. We finally had clear records, better reporting, and fewer mistakes.",
    name: "Client",
    role: "Admin / Finance",
    stars: 5,
  },
  {
    quote:
      "Professional communication, clear structure, and a strong finish. We felt supported during and after delivery.",
    name: "Client",
    role: "Founder / Manager",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "Do you only build for NGOs and SMEs?",
    a:
      "Our primary focus is NGOs and SMEs, but we build for any organization that needs automation, systems, dashboards, and AI support — especially those ready to scale operations.",
  },
  {
    q: "Can you integrate WhatsApp into our business workflow?",
    a:
      "Yes. We build WhatsApp agents that answer questions, collect details, qualify leads, and push data into your workflow (Sheets, dashboards, CRMs, email confirmations, etc.).",
  },
  {
    q: "Do you build both Google Workspace automations and full web apps?",
    a:
      "Yes. We often start with fast Google Workspace automation and upgrade into a full web app when you need roles, permissions, scalability, and advanced workflows.",
  },
  {
    q: "How long does a typical automation project take?",
    a:
      "It depends on scope. Smaller automations can be delivered quickly. Larger systems are delivered in phases so you start benefiting early.",
  },
  {
    q: "Do you provide support after delivery?",
    a:
      "Yes. We support adoption, iteration, training, and improvements — because real success happens when the system is actively used and trusted.",
  },
];

export default function Home() {
  useHomeDarkLock();   // ✅ Fix “turns white after navigation”
  useScrollReveal();

  const services = useMemo(() => SERVICES_CORE, []);
  const industries = useMemo(() => INDUSTRIES, []);
  const products = useMemo(() => PRODUCT_STACK, []);
  const automationSections = useMemo(() => AUTOMATION_SECTIONS, []);
  const integrations = useMemo(() => INTEGRATIONS_STACK, []);
  const proof = useMemo(() => PROJECT_PROOF, []);
  const testimonials = useMemo(() => TESTIMONIALS, []);
  const faqs = useMemo(() => FAQS, []);

  return (
    <main className="homePro" role="main">
      {/* ==========================================================
          HERO
         ========================================================== */}
      <Hero
        align="left"
        kicker="AutoMinds Africa"
        title="AI & Automation Systems That Make Organizations Run Better"
        subtitle="We build web apps, AI agents, and operational automations that help NGOs, SMEs, schools, and growing teams streamline work, reduce errors, and unlock measurable efficiency."
        ctaText="Book a Free Consultation"
        ctaLink="/contact"
        secondaryCtaText="Explore What We Build"
        secondaryCtaLink="#products"
        nextSectionId="products"
        stats={[
          { value: "Custom Systems", label: "Built for your workflow" },
          { value: "Mobile-first", label: "Works anywhere" },
          { value: "Secure", label: "Data + access control" },
          { value: "Support", label: "Adoption & iteration" },
        ]}
      />

      {/* ==========================================================
          TRUST STRIP
         ========================================================== */}
      <section className="trustStrip" aria-label="Highlights">
        <div className="containerPro trustStripInner" data-reveal>
          <div className="trustChip"><FaBolt aria-hidden="true" /> Faster operations</div>
          <div className="trustChip"><FaShieldAlt aria-hidden="true" /> Structured & secure</div>
          <div className="trustChip"><FaCloud aria-hidden="true" /> Google Workspace automation</div>
          <div className="trustChip"><FaRobot aria-hidden="true" /> AI agents + assistants</div>
          <div className="trustChip"><FaMobileAlt aria-hidden="true" /> Mobile-ready delivery</div>
        </div>
      </section>

      {/* ==========================================================
          PRODUCTS
         ========================================================== */}
      <section className="sectionPro" id="products" aria-labelledby="productsTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Our Web Apps & Products</p>
            <h2 className="sectionTitle" id="productsTitle">
              Flagship solutions we’re building and scaling
            </h2>
            <p className="sectionLead">
              Examples of how we turn operational problems into systems. We build products and custom solutions —
              and we’re always expanding what we can automate across industries.
            </p>
          </div>

          <div className="productGrid">
            {products.map((p, idx) => (
              <article className="productCard" key={idx} data-reveal>
                <div className="productTop">
                  <div className="productIcon">{p.icon}</div>
                  <div className="productMeta">
                    <span className="badge">{p.badge}</span>
                    <h3 className="productTitle">{p.title}</h3>
                    <p className="productDesc">{p.desc}</p>
                  </div>
                </div>

                <ul className="productBullets">
                  {p.bullets.map((b, i) => (
                    <li key={i}>
                      <FaCheckCircle aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="productActions">
                  {p.primaryCta?.url ? (
                    <a className="btnPro btnPrimary" {...external(p.primaryCta.url)}>
                      {p.primaryCta.label} <FaArrowRight aria-hidden="true" />
                    </a>
                  ) : (
                    <Link className="btnPro btnPrimary" to={p.primaryCta?.to || "/contact"}>
                      {p.primaryCta?.label || "Request a demo"} <FaArrowRight aria-hidden="true" />
                    </Link>
                  )}

                  {p.secondaryCta?.to ? (
                    <Link className="btnPro btnSecondary" to={p.secondaryCta.to}>
                      {p.secondaryCta.label}
                    </Link>
                  ) : (
                    <a className="btnPro btnSecondary" href={p.secondaryCta?.anchor || "#process"}>
                      {p.secondaryCta?.label || "Learn more"}
                    </a>
                  )}
                </div>

                {/* Explicit highlight for ZimbaRent */}
                {String(p.title).toLowerCase().includes("zimbarent") && (
                  <div className="productLinkNote">
                    <span className="noteLabel">Live link:</span>{" "}
                    <a {...external("https://zimbarent.com")}>zimbarent.com</a>
                  </div>
                )}

                {/* Explicit highlight for 1% Better */}
                {String(p.title).toLowerCase().includes("1% better") && (
                  <div className="productLinkNote">
                    <span className="noteLabel">Live link:</span>{" "}
                    <a {...external("https://one-percent-better.netlify.app")}>
                      one-percent-better.netlify.app
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SERVICES
         ========================================================== */}
      <section className="sectionPro sectionAlt" id="services" aria-labelledby="servicesTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">What We Do</p>
            <h2 className="sectionTitle" id="servicesTitle">
              Automation services that scale with your organization
            </h2>
            <p className="sectionLead">
              We don’t just build software. We build systems that improve operations — with clean workflows,
              reliable data, and real-world adoption support.
            </p>
          </div>

          <div className="cardsGrid">
            {services.map((s, i) => (
              <article className="infoCard" key={i} data-reveal>
                <div className="infoIcon" aria-hidden="true">{s.icon}</div>
                <h3 className="infoTitle">{s.title}</h3>
                <p className="infoDesc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          INTEGRATIONS / STACK
         ========================================================== */}
      <section className="sectionPro" id="stack" aria-labelledby="stackTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">How We Build</p>
            <h2 className="sectionTitle" id="stackTitle">
              Integrations, security, and scalable architecture
            </h2>
            <p className="sectionLead">
              We combine strong engineering with practical delivery: integrations, guardrails, permissions,
              and maintainable systems that your team can trust long-term.
            </p>
          </div>

          <div className="cardsGrid">
            {integrations.map((it, i) => (
              <article className="infoCard" key={i} data-reveal>
                <div className="infoIcon" aria-hidden="true">{it.icon}</div>
                <h3 className="infoTitle">{it.title}</h3>
                <p className="infoDesc">{it.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          INDUSTRIES
         ========================================================== */}
      <section className="sectionPro" id="industries" aria-labelledby="industriesTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Industries We Serve</p>
            <h2 className="sectionTitle" id="industriesTitle">
              Built for Africa — designed for real operational constraints
            </h2>
            <p className="sectionLead">
              We build with local realities in mind — budget, connectivity, teams, and speed.
              That’s why we ship systems that are practical, clear, and scalable.
            </p>
          </div>

          <div className="industryGrid">
            {industries.map((ind, i) => (
              <article className="industryCard" key={i} data-reveal>
                <div className="industryTop">
                  <div className="industryIcon">{ind.icon}</div>
                  <h3 className="industryTitle">{ind.title}</h3>
                </div>
                <ul className="industryList">
                  {ind.points.map((p, x) => (
                    <li key={x}>
                      <FaCheckCircle aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          AUTOMATION CATEGORIES
         ========================================================== */}
      <section className="sectionPro sectionAlt" id="automation" aria-labelledby="automationTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Automation Categories</p>
            <h2 className="sectionTitle" id="automationTitle">
              What we can automate — separated by category
            </h2>
            <p className="sectionLead">
              Each category can be delivered as a Google Workspace automation,
              a full web app, or a hybrid system depending on scale and complexity.
            </p>
          </div>

          <div className="automationSections">
            {automationSections.map((sec) => (
              <div key={sec.id} className="autoSection" id={sec.id} data-reveal>
                <div className="autoSectionHead">
                  <div className="autoSectionIcon">{sec.icon}</div>
                  <div>
                    <h3 className="autoSectionTitle">{sec.title}</h3>
                    <p className="autoSectionSub">{sec.subtitle}</p>
                  </div>
                </div>

                <div className="autoGrid">
                  {sec.items.map((it, idx) => (
                    <article key={idx} className="autoCard">
                      <div className="autoCardIcon" aria-hidden="true">{it.icon}</div>
                      <h4 className="autoCardTitle">{it.title}</h4>
                      <p className="autoCardDesc">{it.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROOF / WHY US
         ========================================================== */}
      <section className="sectionPro" id="why" aria-labelledby="whyTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Why AutoMinds Africa</p>
            <h2 className="sectionTitle" id="whyTitle">We build systems people actually use</h2>
            <p className="sectionLead">
              Outcomes matter. Our focus is operational clarity, measurable impact, and long-term maintainability —
              not demos that die after launch.
            </p>
          </div>

          <div className="proofGrid">
            {proof.map((p, i) => (
              <article className="proofCard" key={i} data-reveal>
                <div className="proofIcon">{p.icon}</div>
                <h3 className="proofTitle">{p.title}</h3>
                <p className="proofDesc">{p.desc}</p>
              </article>
            ))}
          </div>

          <div className="metricsRow" data-reveal>
            <div className="metric">
              <div className="metricNum">Custom</div>
              <div className="metricLabel">Built around your workflow</div>
            </div>
            <div className="metric">
              <div className="metricNum">Fast</div>
              <div className="metricLabel">Phased delivery for early ROI</div>
            </div>
            <div className="metric">
              <div className="metricNum">Secure</div>
              <div className="metricLabel">Access control + clean structure</div>
            </div>
            <div className="metric">
              <div className="metricNum">Support</div>
              <div className="metricLabel">Adoption, training, iteration</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROCESS
         ========================================================== */}
      <section className="sectionPro sectionAlt" id="process" aria-labelledby="processTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">How We Work</p>
            <h2 className="sectionTitle" id="processTitle">A clear delivery process that builds trust</h2>
            <p className="sectionLead">
              We map the workflow, ship an early version, and refine with your team until it runs smoothly.
            </p>
          </div>

          <div className="timeline" data-reveal>
            <div className="step">
              <div className="stepNum">01</div>
              <div className="stepBody">
                <h3>Discovery & Workflow Design</h3>
                <p>We study your process, identify friction points, define the target workflow, and outline a phased roadmap.</p>
              </div>
            </div>

            <div className="step">
              <div className="stepNum">02</div>
              <div className="stepBody">
                <h3>Build Phase 1 (Quick ROI)</h3>
                <p>We deliver the first working system fast — so your team starts benefiting early.</p>
              </div>
            </div>

            <div className="step">
              <div className="stepNum">03</div>
              <div className="stepBody">
                <h3>Iteration + Hardening</h3>
                <p>We refine UX, improve reliability, add validations, permissions, dashboards, and reporting.</p>
              </div>
            </div>

            <div className="step">
              <div className="stepNum">04</div>
              <div className="stepBody">
                <h3>Training & Adoption Support</h3>
                <p>We train your team, ensure correct usage, and support rollout so the system becomes real operations.</p>
              </div>
            </div>

            <div className="step">
              <div className="stepNum">05</div>
              <div className="stepBody">
                <h3>Ongoing Improvements</h3>
                <p>We continue optimizing with new features, changes, and upgrades as your organization grows.</p>
              </div>
            </div>
          </div>

          <div className="processCta" data-reveal>
            <div className="processCtaText">
              <h3>Want a system designed around your exact workflow?</h3>
              <p>Tell us what you do daily. We’ll map it and show what can be automated.</p>
            </div>
            <Link className="btnPro btnPrimary" to="/contact">
              Book a Free Consultation <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TESTIMONIALS
         ========================================================== */}
      <section className="sectionPro" id="testimonials" aria-labelledby="testimonialsTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Customer Love</p>
            <h2 className="sectionTitle" id="testimonialsTitle">We build with customers — not just for customers</h2>
            <p className="sectionLead">
              We obsess over clarity, support, and adoption because a system is only valuable if it’s used daily and trusted.
            </p>
          </div>

          <div className="testimonialGrid">
            {testimonials.map((t, i) => (
              <article className="testimonialCard" key={i} data-reveal>
                <div className="testimonialTop">
                  <FaQuoteLeft className="quoteIcon" aria-hidden="true" />
                  <div className="stars" aria-label={`${t.stars} star rating`}>
                    {Array.from({ length: t.stars }).map((_, idx) => (
                      <FaStar key={idx} aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="testimonialQuote">{t.quote}</p>
                <div className="testimonialMeta">
                  <div className="testimonialName">{t.name}</div>
                  <div className="testimonialRole">{t.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          FAQ
         ========================================================== */}
      <section className="sectionPro sectionAlt" id="faq" aria-labelledby="faqTitle">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">FAQ</p>
            <h2 className="sectionTitle" id="faqTitle">Common questions</h2>
            <p className="sectionLead">
              Clear answers — because trust is built through clarity.
            </p>
          </div>

          <div className="faqGrid">
            {faqs.map((f, i) => (
              <article className="faqCard" key={i} data-reveal>
                <h3 className="faqQ">{f.q}</h3>
                <p className="faqA">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          FINAL CTA
         ========================================================== */}
      <section className="finalCta" aria-label="Call to action">
        <div className="containerPro finalCtaInner" data-reveal>
          <div className="finalCtaText">
            <h2>Ready to automate operations and unlock serious efficiency?</h2>
            <p>
              Whether you need a Google Workspace automation, a full web app, or an AI agent —
              we’ll help you design the workflow and build the system that fits.
            </p>
          </div>

          <div className="finalCtaActions">
            <Link className="btnPro btnPrimary" to="/contact">
              Book a Free Consultation <FaArrowRight aria-hidden="true" />
            </Link>

            <a className="btnPro btnSecondary" href="#products">
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
