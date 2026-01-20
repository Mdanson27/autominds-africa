import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// === Lazy-loaded pages (code-splitting) ===
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Top5Automations = lazy(() => import("./pages/blog/Top5Automations"));
const SMEAIWithoutIT = lazy(() => import("./pages/blog/SMEAIWithoutIT"));
const NGODonorReporting = lazy(() => import("./pages/blog/NGODonorReporting"));
const WhyBusinessesNeedAI = lazy(() => import("./pages/blog/WhyBusinessesNeedAI"));
const AdvantagesWorkflowAutomation = lazy(() => import("./pages/blog/AdvantagesWorkflowAutomation"));
const CustomerSupportChatbots = lazy(() => import("./pages/blog/CustomerSupportChatbots"));
const AIStockManagement = lazy(() => import("./pages/blog/AIStockManagement"));
const OnlineFormsPaperless = lazy(() => import("./pages/blog/OnlineFormsPaperless"));

// === Small inline pages ===
function Thanks() {
  return (
    <main className="page page-thanks" role="main">
      <section className="glassy-card" style={{ textAlign: "center" }}>
        <h1>Thanks! 🎉</h1>
        <p>We’ve received your message and will reply within 1 business day.</p>
        <Link className="cta-btn" to="/">Back to Home</Link>
      </section>
    </main>
  );
}
function NotFound() {
  return (
    <main className="page page-404" role="main">
      <section className="glassy-card" style={{ textAlign: "center" }}>
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist or has moved.</p>
        <Link className="cta-btn" to="/">Go Home</Link>
      </section>
    </main>
  );
}

// === UX helpers ===
function usePageTitle() {
  const location = useLocation();
  useEffect(() => {
    const map = {
      "/": "AutoMinds Africa — AI & Automation for NGOs + SMEs",
      "/about": "About — AutoMinds Africa",
      "/services": "Services — AutoMinds Africa",
      "/casestudies": "Case Studies — AutoMinds Africa",
      "/blog": "Blog — AutoMinds Africa",
      "/contact": "Contact — AutoMinds Africa",
      "/blog/top-5-automations-nonprofits": "Top 5 Automations for Nonprofits — AutoMinds Africa",
      "/blog/sme-ai-no-it-team": "SMEs: Leverage AI Without an IT Team — AutoMinds Africa",
      "/blog/ngo-donor-reporting-success": "Automating NGO Donor Reporting — AutoMinds Africa",
      "/blog/why-businesses-need-ai": "Why Every Business Needs AI — AutoMinds Africa",
      "/blog/advantages-workflow-automation": "Benefits of Workflow Automation in Africa — AutoMinds Africa",
      "/blog/customer-support-chatbots": "Boosting Customer Support with Chatbots — AutoMinds Africa",
      "/blog/ai-stock-management": "AI for Inventory & Stock — AutoMinds Africa",
      "/blog/online-forms-paperless": "Online Forms & Paperless Processes — AutoMinds Africa",
      "/thanks": "Thanks — AutoMinds Africa",
    };
    const title = map[location.pathname] || "AutoMinds Africa";
    document.title = title;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", { page_path: location.pathname });
    }
  }, [location.pathname]);
}

function ScrollToTopAndFocus() {
  const location = useLocation();
  const live = useRef(null);

  useEffect(() => {
    // ✅ For Home, do instant scroll to avoid showing light wrapper during smooth scroll
    const isHome = location.pathname === "/";
    window.scrollTo({ top: 0, behavior: isHome ? "auto" : "smooth" });

    // Move focus to main content for a11y
    const el = document.getElementById("main-content");
    if (el) el.focus({ preventScroll: true });

    // Announce route change for screen readers
    if (live.current) {
      live.current.textContent = `Navigated to ${document.title}`;
    }
  }, [location.pathname]);

  return (
    <div
      ref={live}
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );
}

function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to content
    </a>
  );
}

// === Layout wrapper with navbar/footer/outlet ===
function AppLayout() {
  usePageTitle();

  return (
    <>
      <SkipLink />
      <Navbar />
      <ScrollToTopAndFocus />

      {/* ✅ IMPORTANT:
          We do NOT wrap everything in ".content" anymore.
          Home needs full-bleed hero. Other pages can use ".content" inside their own CSS.
      */}
      <main id="main-content" tabIndex={-1} role="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <Loader />;

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AppLayout />}>
            {/* Core */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thanks" element={<Thanks />} />

            {/* Blog articles */}
            <Route path="/blog/top-5-automations-nonprofits" element={<Top5Automations />} />
            <Route path="/blog/sme-ai-no-it-team" element={<SMEAIWithoutIT />} />
            <Route path="/blog/ngo-donor-reporting-success" element={<NGODonorReporting />} />
            <Route path="/blog/why-businesses-need-ai" element={<WhyBusinessesNeedAI />} />
            <Route path="/blog/advantages-workflow-automation" element={<AdvantagesWorkflowAutomation />} />
            <Route path="/blog/customer-support-chatbots" element={<CustomerSupportChatbots />} />
            <Route path="/blog/ai-stock-management" element={<AIStockManagement />} />
            <Route path="/blog/online-forms-paperless" element={<OnlineFormsPaperless />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
