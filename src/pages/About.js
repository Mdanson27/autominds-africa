import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaHandsHelping,
  FaUsers,
  FaRobot,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaChartLine,
  FaCloud,
  FaCogs,
  FaGlobeAfrica,
  FaProjectDiagram,
  FaHandshake,
  FaLightbulb,
  FaFileInvoice,
  FaSchool,
  FaHome,
  FaHotel,
  FaShoppingCart,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaUserTie,
  FaRocket,
} from "react-icons/fa";
import "./About.css";

/**
 * ABOUT — Investor-grade, long-form narrative page
 * Goals:
 * - Dark, premium aesthetic like Home
 * - Deeply informative: story, mission, principles, team, process, governance
 * - Clear positioning for clients, partners, and investors
 * - Strong credibility framing: outcomes, structure, culture, roadmap
 *
 * Notes:
 * - Keeps markup modular + data-driven (easy to expand to 1000+ lines later)
 * - Uses existing global tokens + glassy-card styles
 */

const external = (href) => ({
  href,
  target: "_blank",
  rel: "noopener noreferrer",
});

const BRAND = {
  name: "AutoMinds Africa",
  tagline: "AI & Automation Systems That Make Organizations Run Better",
  founder: "Mushabe Danson",
  founderRole: "CEO & Founder, AutoMindsAfrica.com",
  whatsapp: "https://wa.me/256787132332",
  baseCity: "Kampala, Uganda",
  founded: "July 18, 2025",
};

const PRINCIPLES = [
  {
    icon: <FaBolt aria-hidden="true" />,
    title: "Speed with Quality",
    desc:
      "We ship in phases so teams get value fast — without compromising structure. Early ROI first, then we harden reliability, security, and reporting until the system becomes daily operations.",
  },
  {
    icon: <FaCheckCircle aria-hidden="true" />,
    title: "Operational Clarity",
    desc:
      "We build systems that reduce confusion: clear data structures, validations, audit trails, standardized documents, and dashboards leadership can trust.",
  },
  {
    icon: <FaShieldAlt aria-hidden="true" />,
    title: "Trust & Security",
    desc:
      "Access control, permission logic, protected workflows, and maintainable architecture. We design for safety, accountability, and long-term ownership.",
  },
  {
    icon: <FaHandsHelping aria-hidden="true" />,
    title: "Partnership, Not Just Delivery",
    desc:
      "We stay close during adoption: training, rollout support, iteration, and improvements — because real impact happens when the system is used daily, not just launched.",
  },
  {
    icon: <FaGlobeAfrica aria-hidden="true" />,
    title: "Built for Africa",
    desc:
      "We design for practical constraints: cost, connectivity, device diversity, team realities, and speed. Our solutions must work in real environments, not just ideal ones.",
  },
  {
    icon: <FaLightbulb aria-hidden="true" />,
    title: "Innovation that Solves Real Problems",
    desc:
      "No hype. We use AI only where it improves outcomes: automation, routing, summaries, classification, customer response, and decision support.",
  },
];

const WHAT_WE_BUILD = [
  {
    icon: <FaCogs aria-hidden="true" />,
    title: "Operations & Workflow Automation",
    points: [
      "Approvals, requisitions, purchasing, usage logs, and accountability flows",
      "Automatic reporting: daily/weekly/monthly summaries",
      "Error reduction with validations and structured inputs",
      "Audit trails and protected records for governance",
    ],
  },
  {
    icon: <FaRobot aria-hidden="true" />,
    title: "AI Agents, Chatbots & Assistants",
    points: [
      "WhatsApp agents for customer service, lead qualification, and FAQs",
      "Website assistants that capture details and route requests",
      "Email confirmations + internal notifications",
      "Knowledge base-driven support with escalation logic",
    ],
  },
  {
    icon: <FaChartLine aria-hidden="true" />,
    title: "Dashboards, Analytics & Reporting",
    points: [
      "Executive dashboards and KPIs that drive action",
      "Budget and performance monitoring",
      "Operational insight: what’s working, what’s leaking, what needs attention",
      "Exports for donor reports, audits, and management meetings",
    ],
  },
  {
    icon: <FaCloud aria-hidden="true" />,
    title: "Web Apps + Integrations",
    points: [
      "Modern mobile-first web apps for organizations that need role-based access",
      "Google Workspace automation (Drive, Sheets, Docs) for fast ROI",
      "Integrations: messaging, payments, internal databases, and analytics",
      "Scalable architecture designed for growth",
    ],
  },
];

const INDUSTRIES = [
  {
    icon: <FaUsers aria-hidden="true" />,
    title: "NGOs & Impact Organizations",
    desc:
      "Donor reporting automation, field data pipelines, procurement workflows, operations dashboards, and structured exports for accountability and transparency.",
  },
  {
    icon: <FaShoppingCart aria-hidden="true" />,
    title: "SMEs & Growing Businesses",
    desc:
      "Sales workflows, invoicing, inventory, purchasing, performance dashboards, and customer service automations that scale without hiring chaos.",
  },
  {
    icon: <FaSchool aria-hidden="true" />,
    title: "Schools & Education",
    desc:
      "Admissions automation, class operations, fee tracking, term workflows, document generation, reporting, and structured records that reduce admin load.",
  },
  {
    icon: <FaHome aria-hidden="true" />,
    title: "Real Estate & Property",
    desc:
      "Tenant and unit management, rent tracking, statements, finance reporting, operations workflows, and future-ready accounting modules.",
  },
  {
    icon: <FaHotel aria-hidden="true" />,
    title: "Hospitality (Hotels / Villas / Lodges)",
    desc:
      "Bookings workflows, housekeeping operations, inventory tracking, procurement, and finance reporting — designed for real daily operations.",
  },
];

const PROOF_POINTS = [
  {
    icon: <FaProjectDiagram aria-hidden="true" />,
    title: "Systems Thinking",
    desc:
      "We don’t patch problems — we design systems. That means workflow mapping, structured data, permissions, reporting, and training for adoption.",
  },
  {
    icon: <FaHandshake aria-hidden="true" />,
    title: "Customer Support Culture",
    desc:
      "We stay responsive and close to reality. We build, watch how teams use it, then refine until it becomes the simplest way to run operations.",
  },
  {
    icon: <FaFileInvoice aria-hidden="true" />,
    title: "Document & Reporting Discipline",
    desc:
      "We build exports, PDFs, logs, and reporting structures that match real management needs — not just a nice UI that lacks operational output.",
  },
  {
    icon: <FaRocket aria-hidden="true" />,
    title: "Phased Delivery",
    desc:
      "Phase 1 ships quickly to unlock value. Then we harden, improve UX, add controls, add dashboards, and expand coverage — with measurable improvement.",
  },
];

const DELIVERY_PROCESS = [
  {
    num: "01",
    title: "Discovery & Workflow Design",
    desc:
      "We study how work is actually done. We identify bottlenecks, define a target workflow, and design a phased roadmap that fits budget and reality.",
  },
  {
    num: "02",
    title: "Build Phase 1 (Quick ROI)",
    desc:
      "We ship the first working system quickly: the core workflow, clean data inputs, early reporting, and a usable interface that teams can adopt immediately.",
  },
  {
    num: "03",
    title: "Iteration + Hardening",
    desc:
      "We refine UX and reliability based on real usage. We add validations, permissions, dashboards, audit logs, and structured document outputs.",
  },
  {
    num: "04",
    title: "Training & Adoption Support",
    desc:
      "We train your team, provide rollout support, and ensure the system becomes the default way to work — not an unused tool.",
  },
  {
    num: "05",
    title: "Ongoing Improvements",
    desc:
      "We continue improving as your organization grows: new modules, integrations, upgrades from Workspace automation to full web apps, and AI assistant expansions.",
  },
];

const TEAM = [
  {
    name: "Mushabe Danson",
    role: "CEO & Founder (AutoMindsAfrica.com)",
    icon: <FaUserTie aria-hidden="true" />,
  },
  { name: "Hussein Naeem", role: "Operations Manager", icon: <FaHandsHelping aria-hidden="true" /> },
  { name: "Asiimwe Patrick Jeyden", role: "Chief Technical Officer", icon: <FaCogs aria-hidden="true" /> },
  { name: "Mugwanya Osbert Kunobwa", role: "Chief Technical Officer", icon: <FaCogs aria-hidden="true" /> },
  { name: "Tendo Gladys N Kiwanda", role: "Social Media Manager", icon: <FaGlobeAfrica aria-hidden="true" /> },
  { name: "Tibyasa Timothy William", role: "Creative Director", icon: <FaLightbulb aria-hidden="true" /> },
  { name: "Kangume Mitchel", role: "Business Development Manager", icon: <FaChartLine aria-hidden="true" /> },
];

const INVESTOR_LENS = [
  {
    icon: <FaCheckCircle aria-hidden="true" />,
    title: "A clear problem in a large market",
    desc:
      "Across Africa, organizations lose money and time to manual operations, fragmented tools, and unreliable data. We build the operational layer that makes organizations run better.",
  },
  {
    icon: <FaShieldAlt aria-hidden="true" />,
    title: "Execution discipline",
    desc:
      "We deliver in phases with strong structure: validation, permissions, audit logs, and reporting. This is how real systems become trusted operations.",
  },
  {
    icon: <FaCloud aria-hidden="true" />,
    title: "Practical distribution",
    desc:
      "We deploy where customers already live: WhatsApp, Google Workspace, and mobile-first web apps. We minimize adoption friction and maximize everyday usage.",
  },
  {
    icon: <FaRobot aria-hidden="true" />,
    title: "AI used where it matters",
    desc:
      "We apply AI to routing, support, summarization, classification, and customer interactions — not as hype, but as a productivity multiplier.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "They didn’t just build software — they improved our workflow. The system made everything more organized, faster, and easier to manage.",
    name: "Client",
    role: "Operations Team",
    stars: 5,
  },
  {
    quote:
      "Our reporting became consistent and reliable. We reduced mistakes, and leadership finally had visibility into what was happening daily.",
    name: "Client",
    role: "Admin / Finance",
    stars: 5,
  },
  {
    quote:
      "Professional delivery, strong communication, and support after launch. We felt guided from start to finish.",
    name: "Client",
    role: "Founder / Manager",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "What exactly is AutoMinds Africa?",
    a:
      "AutoMinds Africa is an AI and automation company building operational systems for NGOs, SMEs, schools, property teams, and growing organizations. We deliver automations, dashboards, AI assistants, and web apps that reduce manual work and create measurable efficiency.",
  },
  {
    q: "Do you build Google Workspace automations or full web apps?",
    a:
      "Both. Many projects start with fast Google Workspace automation for quick ROI, then upgrade into a full web app when teams need roles, permissions, scalability, and advanced workflows.",
  },
  {
    q: "Can you integrate WhatsApp into our workflow?",
    a:
      "Yes. We build WhatsApp agents that answer questions, collect details, qualify leads, and push data into workflows (Sheets, dashboards, email confirmations, internal notifications).",
  },
  {
    q: "How do you ensure adoption after delivery?",
    a:
      "We include training, rollout support, and iteration. We don’t disappear after shipping — we stay close until the system becomes daily operations and is trusted by the team.",
  },
];

export default function About() {
  const principles = useMemo(() => PRINCIPLES, []);
  const builds = useMemo(() => WHAT_WE_BUILD, []);
  const industries = useMemo(() => INDUSTRIES, []);
  const proof = useMemo(() => PROOF_POINTS, []);
  const process = useMemo(() => DELIVERY_PROCESS, []);
  const team = useMemo(() => TEAM, []);
  const investorLens = useMemo(() => INVESTOR_LENS, []);
  const testimonials = useMemo(() => TESTIMONIALS, []);
  const faqs = useMemo(() => FAQS, []);

  return (
    <main className="aboutPro" role="main">
      {/* ==========================================================
          HERO (dark, full-bleed like Home)
         ========================================================== */}
      <header className="aboutHero" aria-labelledby="aboutTitle">
        <div className="aboutHero-bg" aria-hidden="true" />
        <div className="aboutHero-glow" aria-hidden="true" />

        <div className="aboutHero-inner">
          <div className="aboutHero-card">
            <p className="aboutHero-kicker">{BRAND.name}</p>

            <h1 id="aboutTitle" className="aboutHero-title">
              Built to Make Organizations Run Better —{" "}
              <span className="brand-gradient">Across Africa</span>
            </h1>

            <p className="aboutHero-subtitle">
              AutoMinds Africa designs and builds AI-driven automation systems,
              dashboards, and mobile-first web apps that reduce manual work,
              improve reliability, and unlock measurable efficiency for
              organizations.
            </p>

            <div className="aboutHero-actions">
              <Link className="btnPro btnPrimary" to="/contact">
                Book a Free Consultation <FaArrowRight aria-hidden="true" />
              </Link>

              <a className="btnPro btnSecondary" href="#story">
                Explore Our Story
              </a>
            </div>

            <dl className="aboutHero-stats" aria-label="Company highlights">
              <div className="aboutHero-stat">
                <dt className="aboutHero-statValue">{BRAND.founded}</dt>
                <dd className="aboutHero-statLabel">Founded</dd>
              </div>
              <div className="aboutHero-stat">
                <dt className="aboutHero-statValue">{BRAND.baseCity}</dt>
                <dd className="aboutHero-statLabel">Based</dd>
              </div>
              <div className="aboutHero-stat">
                <dt className="aboutHero-statValue">Systems</dt>
                <dd className="aboutHero-statLabel">Built for real operations</dd>
              </div>
              <div className="aboutHero-stat">
                <dt className="aboutHero-statValue">Support</dt>
                <dd className="aboutHero-statLabel">Adoption & iteration</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      {/* ==========================================================
          STORY / POSITIONING
         ========================================================== */}
      <section className="aboutSection" id="story" aria-labelledby="storyTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">Our Story</p>
            <h2 className="sectionTitle" id="storyTitle">
              We’re building Africa’s operational advantage — one system at a time
            </h2>
            <p className="sectionLead">
              Organizations don’t fail because they lack passion — they fail because
              operations break: data is scattered, reporting is slow, approvals are
              unclear, and teams spend time chasing paperwork instead of executing.
              AutoMinds Africa exists to fix that — with systems that are simple,
              structured, and built for the realities of Africa.
            </p>
          </div>

          <div className="aboutGrid2">
            <article className="glassy-card aboutCard">
              <h3 className="aboutCardTitle">
                <FaBolt aria-hidden="true" /> Why we exist
              </h3>
              <p className="aboutCardText">
                We founded {BRAND.name} in {BRAND.founded} to make organizations run better.
                That means eliminating unnecessary manual work, reducing errors,
                standardizing reporting, and giving leadership visibility into what’s
                happening daily — without needing a giant IT department.
              </p>
              <ul className="aboutBullets">
                <li><FaCheckCircle aria-hidden="true" /> Reduce time wasted on repetitive work</li>
                <li><FaCheckCircle aria-hidden="true" /> Improve accountability with structured records</li>
                <li><FaCheckCircle aria-hidden="true" /> Make reporting fast and consistent</li>
                <li><FaCheckCircle aria-hidden="true" /> Enable scale without operational chaos</li>
              </ul>
            </article>

            <article className="glassy-card aboutCard">
              <h3 className="aboutCardTitle">
                <FaGlobeAfrica aria-hidden="true" /> Built for Africa
              </h3>
              <p className="aboutCardText">
                We build for practical constraints: budget sensitivity, connectivity gaps, device diversity,
                multi-role teams, and the need to move fast. Our systems are designed to work in real environments —
                not just in ideal office setups.
              </p>
              <ul className="aboutBullets">
                <li><FaCheckCircle aria-hidden="true" /> Mobile-first for teams on the move</li>
                <li><FaCheckCircle aria-hidden="true" /> Fast deployments with Workspace automation</li>
                <li><FaCheckCircle aria-hidden="true" /> Upgradable to full web apps as you scale</li>
                <li><FaCheckCircle aria-hidden="true" /> Clear adoption support and training</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================================
          PRINCIPLES
         ========================================================== */}
      <section className="aboutSection aboutAlt" aria-labelledby="principlesTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">Our Principles</p>
            <h2 className="sectionTitle" id="principlesTitle">
              How we build systems that people actually use
            </h2>
            <p className="sectionLead">
              Our work is guided by practical principles. This is why clients trust our systems — and why adoption becomes real operations.
            </p>
          </div>

          <div className="aboutCardsGrid">
            {principles.map((p, i) => (
              <article className="infoCard aboutInfoCard" key={i}>
                <div className="infoIcon" aria-hidden="true">{p.icon}</div>
                <h3 className="infoTitle">{p.title}</h3>
                <p className="infoDesc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          WHAT WE BUILD
         ========================================================== */}
      <section className="aboutSection" aria-labelledby="buildTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">What We Build</p>
            <h2 className="sectionTitle" id="buildTitle">
              Automation systems, AI agents, dashboards, and web apps
            </h2>
            <p className="sectionLead">
              AutoMinds Africa builds end-to-end operational systems. We combine structured workflow design, automation engineering,
              and AI where it creates real productivity gains.
            </p>
          </div>

          <div className="aboutBuildGrid">
            {builds.map((b, i) => (
              <article className="glassy-card aboutBuildCard" key={i}>
                <div className="aboutBuildTop">
                  <div className="aboutBuildIcon" aria-hidden="true">{b.icon}</div>
                  <h3 className="aboutBuildTitle">{b.title}</h3>
                </div>
                <ul className="aboutBullets">
                  {b.points.map((x, idx) => (
                    <li key={idx}>
                      <FaCheckCircle aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          INDUSTRIES
         ========================================================== */}
      <section className="aboutSection aboutAlt" aria-labelledby="industriesTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">Who We Serve</p>
            <h2 className="sectionTitle" id="industriesTitle">
              Built for teams that need reliable operations
            </h2>
            <p className="sectionLead">
              We serve organizations that want structure, clarity, and measurable efficiency — not just a pretty interface.
            </p>
          </div>

          <div className="aboutIndustryGrid">
            {industries.map((ind, i) => (
              <article className="industryCard aboutIndustryCard" key={i}>
                <div className="industryTop">
                  <div className="industryIcon" aria-hidden="true">{ind.icon}</div>
                  <h3 className="industryTitle">{ind.title}</h3>
                </div>
                <p className="industryDesc">{ind.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROOF
         ========================================================== */}
      <section className="aboutSection" aria-labelledby="proofTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">Why AutoMinds Africa</p>
            <h2 className="sectionTitle" id="proofTitle">
              We design systems that reduce chaos — and scale
            </h2>
            <p className="sectionLead">
              We combine strong engineering discipline with real-world operations thinking, so systems don’t die after launch.
            </p>
          </div>

          <div className="proofGrid">
            {proof.map((p, i) => (
              <article className="proofCard" key={i}>
                <div className="proofIcon" aria-hidden="true">{p.icon}</div>
                <h3 className="proofTitle">{p.title}</h3>
                <p className="proofDesc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROCESS
         ========================================================== */}
      <section className="aboutSection aboutAlt" aria-labelledby="processTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">How We Work</p>
            <h2 className="sectionTitle" id="processTitle">
              A delivery process that builds trust
            </h2>
            <p className="sectionLead">
              We map the workflow, ship quickly, and iterate until it becomes daily operations — with training and support built in.
            </p>
          </div>

          <div className="aboutTimeline">
            {process.map((s) => (
              <div className="aboutStep" key={s.num}>
                <div className="aboutStepNum">{s.num}</div>
                <div className="aboutStepBody">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="aboutProcessCta">
            <div className="aboutProcessText">
              <h3>Want a system designed around your exact workflow?</h3>
              <p>Tell us what your team does daily. We’ll map it and show what can be automated.</p>
            </div>
            <Link className="btnPro btnPrimary" to="/contact">
              Book a Free Consultation <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TEAM
         ========================================================== */}
      <section className="aboutSection" aria-labelledby="teamTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">Leadership & Team</p>
            <h2 className="sectionTitle" id="teamTitle">A team built to execute</h2>
            <p className="sectionLead">
              We’re building an execution-driven company: operations discipline, engineering excellence, creative direction, and growth strategy —
              all aligned to ship systems that run in real life.
            </p>
          </div>

          <div className="aboutTeamGrid">
            {team.map((m, i) => (
              <article className="glassy-card aboutTeamCard" key={i}>
                <div className="aboutTeamTop">
                  <div className="aboutTeamIcon" aria-hidden="true">{m.icon}</div>
                  <div>
                    <h3 className="aboutTeamName">{m.name}</h3>
                    <p className="aboutTeamRole">{m.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="founderPro glassy-card" aria-labelledby="founderTitle">
            <div className="founderAvatar" aria-hidden="true">M</div>
            <div className="founderBody">
              <h3 id="founderTitle" className="founderName">{BRAND.founder}</h3>
              <p className="founderRole">{BRAND.founderRole}</p>

              <blockquote className="founderQuote">
                <FaQuoteLeft aria-hidden="true" />
                <span>
                  We’re building the operational layer Africa needs — systems that reduce chaos, improve accountability,
                  and multiply impact. We don’t build tools that look good and fail in reality; we build systems that teams rely on every day.
                </span>
              </blockquote>

              <div className="founderActions">
                <a className="btnPro btnPrimary" {...external(BRAND.whatsapp)}>
                  <FaWhatsapp aria-hidden="true" /> WhatsApp the Founder <FaArrowRight aria-hidden="true" />
                </a>
                <Link className="btnPro btnSecondary" to="/contact">
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          INVESTOR LENS
         ========================================================== */}
      <section className="aboutSection aboutAlt" aria-labelledby="investorTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">For Investors & Partners</p>
            <h2 className="sectionTitle" id="investorTitle">
              A company built around execution and real outcomes
            </h2>
            <p className="sectionLead">
              AutoMinds Africa is building repeatable operational systems across industries — delivered through practical channels
              (WhatsApp, Google Workspace, and mobile-first web apps) that customers already trust and use daily.
            </p>
          </div>

          <div className="aboutCardsGrid">
            {investorLens.map((p, i) => (
              <article className="infoCard aboutInfoCard" key={i}>
                <div className="infoIcon" aria-hidden="true">{p.icon}</div>
                <h3 className="infoTitle">{p.title}</h3>
                <p className="infoDesc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          TESTIMONIALS
         ========================================================== */}
      <section className="aboutSection" aria-labelledby="testimonialsTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">Customer Love</p>
            <h2 className="sectionTitle" id="testimonialsTitle">
              Trusted delivery. Real support. Systems that stick.
            </h2>
            <p className="sectionLead">
              We build with customers — not just for customers. Support, adoption, and iteration are part of the product.
            </p>
          </div>

          <div className="testimonialGrid">
            {testimonials.map((t, i) => (
              <article className="testimonialCard" key={i}>
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
      <section className="aboutSection aboutAlt" aria-labelledby="faqTitle">
        <div className="containerPro">
          <div className="sectionHead">
            <p className="sectionKicker">FAQ</p>
            <h2 className="sectionTitle" id="faqTitle">Common questions</h2>
            <p className="sectionLead">Clear answers — because trust is built through clarity.</p>
          </div>

          <div className="faqGrid">
            {faqs.map((f, i) => (
              <article className="faqCard" key={i}>
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
        <div className="containerPro finalCtaInner">
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

            <a className="btnPro btnSecondary" href="/">
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
