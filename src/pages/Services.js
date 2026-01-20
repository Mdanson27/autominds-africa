import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaMagic,
  FaSync,
  FaRobot,
  FaClipboardCheck,
  FaChartLine,
  FaBoxes,
  FaUserCog,
  FaCogs,
  FaShieldAlt,
  FaCloud,
  FaMobileAlt,
  FaCheckCircle,
  FaArrowRight,
  FaBolt,
  FaUsers,
  FaHandshake,
  FaProjectDiagram,
  FaClipboardList,
  FaFileInvoice,
  FaDatabase,
  FaWhatsapp,
  FaSchool,
  FaHome,
  FaHotel,
  FaGlobeAfrica,
  FaShoppingCart,
  FaCalendarCheck,
  FaLightbulb,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import "./Services.css";

/**
 * SERVICES PAGE — Investor-grade long-form
 * Goals:
 * - Match Home: dark + premium + structured sections
 * - Explain services with deliverables + outcomes
 * - Add process, engagement models, industries, proof, FAQs
 * - Keep components simple (no extra libs)
 */

const SERVICES = [
  {
    id: "ai-automation",
    icon: <FaMagic aria-hidden="true" />,
    title: "AI-Driven Business Automation",
    desc:
      "We design AI-enabled systems that reduce manual work, speed up decisions, and create measurable efficiency — built for real operational environments in Africa.",
    badge: "Most Popular",
    outcomes: [
      "Reduce repetitive work and admin overhead",
      "Standardize data and processes to reduce errors",
      "Automate follow-ups, approvals, and summaries",
      "Create visibility through dashboards and alerts",
    ],
    deliverables: [
      "Workflow mapping + automation blueprint",
      "Automated forms + validations + structured data",
      "Dashboards, reports, and scheduled summaries",
      "Access control + audit trail (when required)",
    ],
  },
  {
    id: "workflow-automation",
    icon: <FaSync aria-hidden="true" />,
    title: "Workflow & Process Automation",
    desc:
      "From procurement to HR to finance — we automate processes end-to-end so teams stop chasing paperwork and start executing.",
    outcomes: [
      "Approvals that don’t get stuck",
      "Clear task ownership and escalations",
      "Reliable logs that leadership can trust",
      "Faster turnaround times across departments",
    ],
    deliverables: [
      "Process redesign (before automation)",
      "Approval flows + notifications (Email/WhatsApp where relevant)",
      "Daily/weekly/monthly reporting automation",
      "Protected templates and governance rules",
    ],
  },
  {
    id: "chatbots",
    icon: <FaRobot aria-hidden="true" />,
    title: "Smart Chatbots & Virtual Assistants",
    desc:
      "24/7 WhatsApp and web assistants that answer questions, collect details, qualify leads, and route requests into your workflow automatically.",
    outcomes: [
      "Faster customer response times",
      "Less pressure on human teams",
      "Lead capture + qualification + follow-up",
      "Consistent answers from a knowledge base",
    ],
    deliverables: [
      "Conversation flows + knowledge base structure",
      "Lead capture forms + confirmations",
      "Integrations (Sheets/CRM/Email/Drive)",
      "Escalation rules to a human agent",
    ],
  },
  {
    id: "admissions",
    icon: <FaClipboardCheck aria-hidden="true" />,
    title: "Admissions & Enrollment Automation",
    desc:
      "For schools, training centers, and institutions: digital admissions, document pipelines, and operational workflows that reduce admin errors.",
    outcomes: [
      "Faster admissions processing",
      "Cleaner student records and document storage",
      "Instant confirmations and internal notifications",
      "Easy exports for reporting and compliance",
    ],
    deliverables: [
      "Online forms + uploads",
      "Auto-generated PDFs and folders in Drive",
      "Sheets updates (admissions, class lists, master list)",
      "Role-based workflows for staff teams",
    ],
  },
  {
    id: "data-collection",
    icon: <FaChartLine aria-hidden="true" />,
    title: "Online Forms & Data Collection",
    desc:
      "Structured data capture for programs, surveys, field operations, and applications — integrated with dashboards and reporting.",
    outcomes: [
      "Better data quality and less duplication",
      "Real-time reporting and validation",
      "Stronger decision-making and accountability",
      "Automated donor/program reporting support (where needed)",
    ],
    deliverables: [
      "Form design + validation rules",
      "Dashboards + exports + structured reports",
      "Automated routing (to teams/owners)",
      "Scheduled summaries and alerts",
    ],
  },
  {
    id: "inventory",
    icon: <FaBoxes aria-hidden="true" />,
    title: "Inventory & Stock Automation",
    desc:
      "Track stock movements, automate purchases/usage logs, generate summaries, and trigger alerts before shortages happen.",
    outcomes: [
      "Reduced stock losses and errors",
      "Clear purchasing and usage accountability",
      "Faster stock-taking and reporting",
      "Reorder thresholds and supplier visibility",
    ],
    deliverables: [
      "Stock system structure (items, units, categories, suppliers)",
      "Purchases + usage + audit logs",
      "Reorder alerts + weekly/monthly summaries",
      "Dashboards for cost + consumption",
    ],
  },
  {
    id: "consulting",
    icon: <FaUserCog aria-hidden="true" />,
    title: "Automation Consulting & Integration",
    desc:
      "Not sure where to start? We audit operations, identify bottlenecks, design a roadmap, then build and integrate step by step.",
    outcomes: [
      "Clarity on what to automate first",
      "Phased delivery for early ROI",
      "Reduced implementation risk",
      "Better adoption across teams",
    ],
    deliverables: [
      "Discovery workshop + workflow mapping",
      "Automation roadmap + phased plan",
      "Integration plan (Google Workspace, web apps, APIs)",
      "Training + documentation",
    ],
  },
  {
    id: "other",
    icon: <FaCogs aria-hidden="true" />,
    title: "Other Automation Services",
    bullets: [
      "Automated reporting & dashboards (daily/weekly/monthly)",
      "Email/WhatsApp/SMS notifications and follow-ups",
      "AI appointment scheduling and confirmations",
      "HR onboarding and staff workflows",
      "Invoice/receipt pipelines and finance reporting support",
      "Document generation (PDFs, templates, exports)",
      "Google Workspace automation (Drive/Sheets/Docs)",
      "Web app upgrades (roles, permissions, scalable data)",
    ],
  },
];

const TRUST_CHIPS = [
  { icon: <FaBolt aria-hidden="true" />, text: "Faster operations" },
  { icon: <FaShieldAlt aria-hidden="true" />, text: "Structured & secure" },
  { icon: <FaCloud aria-hidden="true" />, text: "Google Workspace automation" },
  { icon: <FaRobot aria-hidden="true" />, text: "AI agents + assistants" },
  { icon: <FaMobileAlt aria-hidden="true" />, text: "Mobile-first delivery" },
];

const INDUSTRIES = [
  {
    icon: <FaGlobeAfrica aria-hidden="true" />,
    title: "NGOs & Impact Organizations",
    points: [
      "Field data collection + validation",
      "Donor reporting support + structured exports",
      "Procurement and approvals workflows",
      "Dashboards for M&E and program visibility",
    ],
  },
  {
    icon: <FaUsers aria-hidden="true" />,
    title: "SMEs & Growing Businesses",
    points: [
      "Sales + customer management workflows",
      "Invoicing + receipts + follow-up automation",
      "Operations reporting and dashboards",
      "Customer support and lead capture automation",
    ],
  },
  {
    icon: <FaSchool aria-hidden="true" />,
    title: "Schools & Education",
    points: [
      "Admissions pipeline (forms → PDFs → Drive → Sheets)",
      "Class lists + term operations + reporting",
      "Fees tracking + defaulters + receipts",
      "Parent communication workflows",
    ],
  },
  {
    icon: <FaHome aria-hidden="true" />,
    title: "Real Estate & Property",
    points: [
      "Rent tracking + tenant management",
      "Owner/manager dashboards and reporting",
      "Maintenance workflows + assignment",
      "Accounting outputs direction (statements, exports, logs)",
    ],
  },
  {
    icon: <FaHotel aria-hidden="true" />,
    title: "Hospitality (Hotels / Villas / Lodges)",
    points: [
      "Bookings + guest workflows",
      "Housekeeping and inventory operations",
      "Procurement and usage logs",
      "Cashflow reporting + summaries",
    ],
  },
  {
    icon: <FaShoppingCart aria-hidden="true" />,
    title: "Retail / Inventory-heavy Teams",
    points: [
      "Stock taking automation and controls",
      "Purchases + usage + supplier structure",
      "Reorder alerts + consumption visibility",
      "Daily/weekly sales summaries (where applicable)",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: <FaCloud aria-hidden="true" />,
    title: "Google Workspace Automation",
    desc:
      "Fast deployment inside Google Drive/Sheets/Docs — great for teams that want speed and structure with minimal overhead.",
    bullets: [
      "Quick ROI with clear workflows",
      "Strong data structure + protected templates",
      "Dashboards and reporting automation",
      "Upgrade-ready for future web app scaling",
    ],
  },
  {
    icon: <FaProjectDiagram aria-hidden="true" />,
    title: "Full Web App (Roles & Permissions)",
    desc:
      "For teams that need user accounts, permissions, scalability, and advanced workflows across departments or branches.",
    bullets: [
      "Role-based access control",
      "Reliable database + audit trails",
      "Scalable architecture for growth",
      "Better UX for multi-team operations",
    ],
  },
  {
    icon: <FaHandshake aria-hidden="true" />,
    title: "Hybrid Approach",
    desc:
      "Start with Workspace automation for speed, then upgrade critical parts into a web app as your organization grows.",
    bullets: [
      "Ship Phase 1 quickly",
      "Reduce risk with phased investment",
      "Keep data structured from day one",
      "Scale without rebuilding everything",
    ],
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Discovery & Workflow Design",
    desc:
      "We map your daily process, identify friction points, and define a clear target workflow. This step prevents building the wrong thing.",
  },
  {
    n: "02",
    title: "Build Phase 1 (Quick ROI)",
    desc:
      "We ship the first working system fast — so your team starts benefiting early while we refine the next phases.",
  },
  {
    n: "03",
    title: "Iteration + Hardening",
    desc:
      "We add validations, improve UX, strengthen security, and ensure the system holds up under real daily usage.",
  },
  {
    n: "04",
    title: "Training & Adoption Support",
    desc:
      "We train your staff, document the workflow, and support rollout so the system becomes real operations — not a forgotten tool.",
  },
  {
    n: "05",
    title: "Ongoing Improvements",
    desc:
      "We continue improving based on usage: new reports, new workflows, and upgrades as your organization grows.",
  },
];

const QUALITY = [
  {
    icon: <FaShieldAlt aria-hidden="true" />,
    title: "Security-minded builds",
    desc:
      "Access control, protected records, and clean separation of responsibilities — designed to reduce risk and improve accountability.",
  },
  {
    icon: <FaDatabase aria-hidden="true" />,
    title: "Data structure first",
    desc:
      "We prioritize clean data design and validation so reporting is accurate and future upgrades are easy.",
  },
  {
    icon: <FaFileInvoice aria-hidden="true" />,
    title: "Documentation & clarity",
    desc:
      "Clear handover notes, workflows, and training support — because systems only matter when teams can use them daily.",
  },
  {
    icon: <FaCheckCircle aria-hidden="true" />,
    title: "Reliability over demos",
    desc:
      "We build for real usage: audit logs, error handling, and practical UX — not flashy prototypes that break in production.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The automation brought structure to our daily work. Reporting became faster, mistakes reduced, and leadership finally had visibility.",
    name: "Client",
    role: "Operations / Admin",
    stars: 5,
  },
  {
    quote:
      "AutoMinds understood our workflow before building anything. That made the final system feel natural for our team to adopt.",
    name: "Client",
    role: "Founder / Manager",
    stars: 5,
  },
  {
    quote:
      "Professional delivery, clear communication, and real support after deployment. We felt guided end-to-end.",
    name: "Client",
    role: "Finance / Programs",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "How do we know what to automate first?",
    a:
      "We start with discovery and workflow mapping. Then we propose a phased roadmap focused on quick wins and long-term scale.",
  },
  {
    q: "Do you build only for NGOs and SMEs?",
    a:
      "Our core focus is NGOs, SMEs, schools, property, and hospitality — but we build for any team that needs operational automation and clarity.",
  },
  {
    q: "Can you integrate WhatsApp into our workflow?",
    a:
      "Yes. We build WhatsApp agents that capture leads, answer questions, collect details, and push data into Sheets, dashboards, email confirmations, or a CRM.",
  },
  {
    q: "What do you deliver at the end of a project?",
    a:
      "A working system, clear documentation, admin controls, training support, and a roadmap for future improvements if needed.",
  },
];

export default function Services() {
  const items = useMemo(() => SERVICES, []);
  const industries = useMemo(() => INDUSTRIES, []);
  const models = useMemo(() => ENGAGEMENT_MODELS, []);
  const process = useMemo(() => PROCESS, []);
  const quality = useMemo(() => QUALITY, []);
  const testimonials = useMemo(() => TESTIMONIALS, []);
  const faqs = useMemo(() => FAQS, []);

  return (
    <main className="servicesPro" role="main">
      {/* ==========================================================
          HERO (dark + premium)
         ========================================================== */}
      <header className="servicesHero" aria-labelledby="services-title">
        <div className="servicesHero-bg" aria-hidden="true" />
        <div className="servicesHero-inner">
          <div className="servicesHero-card">
            <p className="servicesKicker">AutoMinds Africa</p>
            <h1 id="services-title" className="servicesTitle">
              Automation services that make organizations run better
            </h1>
            <p className="servicesLead">
              We build AI systems, workflow automations, dashboards, and customer-facing assistants for NGOs, SMEs, schools,
              property teams, and growing organizations across Africa — with a focus on practical deployment, clean data,
              and real adoption.
            </p>

            <div className="servicesHero-actions">
              <Link className="btnPro btnPrimary" to="/contact">
                Book a Free Consultation <FaArrowRight aria-hidden="true" />
              </Link>
              <a className="btnPro btnSecondary" href="#catalog">
                Explore Services
              </a>
            </div>

            <div className="trustStripPro" aria-label="Highlights">
              {TRUST_CHIPS.map((c, i) => (
                <div className="trustChipPro" key={i}>
                  {c.icon} <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ==========================================================
          CATALOG
         ========================================================== */}
      <section className="sectionPro" id="catalog" aria-labelledby="catalog-title">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Service Catalog</p>
            <h2 className="sectionTitle" id="catalog-title">
              What we build — explained clearly
            </h2>
            <p className="sectionLead">
              Each service below can be delivered as a Google Workspace automation, a full web app, or a hybrid system —
              depending on your team size, workflow complexity, and growth plans.
            </p>
          </div>

          <div className="servicesGrid">
            {items.map((s, i) => (
              <article className="serviceCardPro" key={s.id || i} data-reveal>
                <div className="serviceTop">
                  <div className="serviceIconPro">{s.icon}</div>
                  <div className="serviceMeta">
                    <h3 className="serviceTitlePro">
                      {s.title}
                      {s.badge ? (
                        <span className="badgePro" aria-label="Most popular service">
                          {s.badge}
                        </span>
                      ) : null}
                    </h3>
                    {s.desc ? <p className="serviceDescPro">{s.desc}</p> : null}
                  </div>
                </div>

                {s.outcomes?.length ? (
                  <div className="serviceBody">
                    <p className="miniHead">Typical outcomes</p>
                    <ul className="tickList">
                      {s.outcomes.map((o, idx) => (
                        <li key={idx}>
                          <FaCheckCircle aria-hidden="true" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="miniHead">What we deliver</p>
                    <ul className="tickList">
                      {s.deliverables.map((d, idx) => (
                        <li key={idx}>
                          <FaCheckCircle aria-hidden="true" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="serviceBody">
                    <p className="miniHead">Included services</p>
                    <ul className="tickList">
                      {s.bullets?.map((b, j) => (
                        <li key={j}>
                          <FaCheckCircle aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="serviceActions">
                  <Link className="btnPro btnSecondary" to="/contact">
                    Request a quote
                  </Link>
                  <a className="btnPro btnGhost" href="#models">
                    Engagement models
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          INDUSTRIES
         ========================================================== */}
      <section className="sectionPro sectionAlt" id="industries" aria-labelledby="industries-title">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Industries We Serve</p>
            <h2 className="sectionTitle" id="industries-title">
              Built for Africa — designed for real operational constraints
            </h2>
            <p className="sectionLead">
              We build with realities in mind: budget, connectivity, team capacity, and the need to ship quickly without sacrificing structure.
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
          ENGAGEMENT MODELS
         ========================================================== */}
      <section className="sectionPro" id="models" aria-labelledby="models-title">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Engagement Models</p>
            <h2 className="sectionTitle" id="models-title">
              Choose the build approach that matches your scale
            </h2>
            <p className="sectionLead">
              We help you choose the right delivery model — and we can evolve it over time as your operations grow.
            </p>
          </div>

          <div className="modelsGrid">
            {models.map((m, i) => (
              <article className="modelCard" key={i} data-reveal>
                <div className="modelTop">
                  <div className="modelIcon">{m.icon}</div>
                  <h3 className="modelTitle">{m.title}</h3>
                </div>
                <p className="modelDesc">{m.desc}</p>
                <ul className="tickList">
                  {m.bullets.map((b, idx) => (
                    <li key={idx}>
                      <FaCheckCircle aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROCESS
         ========================================================== */}
      <section className="sectionPro sectionAlt" id="process" aria-labelledby="process-title">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">How We Work</p>
            <h2 className="sectionTitle" id="process-title">A delivery process that builds trust</h2>
            <p className="sectionLead">
              We don’t guess. We map the workflow, ship an early version, and refine with your team until it runs smoothly.
            </p>
          </div>

          <div className="timeline">
            {process.map((step, i) => (
              <div className="step" key={i} data-reveal>
                <div className="stepNum">{step.n}</div>
                <div className="stepBody">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="processCta" data-reveal>
            <div className="processCtaText">
              <h3>Want a system designed around your exact workflow?</h3>
              <p>Tell us what you do daily. We’ll map it and show what can be automated first.</p>
            </div>
            <Link className="btnPro btnPrimary" to="/contact">
              Book a Free Consultation <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          QUALITY / SECURITY
         ========================================================== */}
      <section className="sectionPro" id="quality" aria-labelledby="quality-title">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Quality & Trust</p>
            <h2 className="sectionTitle" id="quality-title">Built for reliability, adoption, and long-term use</h2>
            <p className="sectionLead">
              We care about outcomes: systems that teams trust daily, with data structures that survive growth and change.
            </p>
          </div>

          <div className="qualityGrid">
            {quality.map((q, i) => (
              <article className="qualityCard" key={i} data-reveal>
                <div className="qualityIcon">{q.icon}</div>
                <h3 className="qualityTitle">{q.title}</h3>
                <p className="qualityDesc">{q.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          TESTIMONIALS
         ========================================================== */}
      <section className="sectionPro sectionAlt" id="testimonials" aria-labelledby="testimonials-title">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">Customer Love</p>
            <h2 className="sectionTitle" id="testimonials-title">Supportive delivery, practical systems</h2>
            <p className="sectionLead">
              We build with customers — not just for customers. That’s how systems become real operations.
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
      <section className="sectionPro" id="faq" aria-labelledby="faq-title">
        <div className="containerPro">
          <div className="sectionHead" data-reveal>
            <p className="sectionKicker">FAQ</p>
            <h2 className="sectionTitle" id="faq-title">Common questions</h2>
            <p className="sectionLead">Clear answers — because trust is built through clarity.</p>
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
              Get a Free Custom Quote <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="btnPro btnSecondary" href="#catalog">
              View Services
            </a>
          </div>

          <div className="finalCtaNote">
            <FaWhatsapp aria-hidden="true" /> We typically reply within 1 business day.
          </div>
        </div>
      </section>
    </main>
  );
}
