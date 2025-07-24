import React from 'react';
import Loader from "./components/Loader";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Import your article page
import Top5Automations from "./pages/blog/Top5Automations";
import SMEAIWithoutIT from "./pages/blog/SMEAIWithoutIT";
import NGODonorReporting from "./pages/blog/NGODonorReporting";
import WhyBusinessesNeedAI from "./pages/blog/WhyBusinessesNeedAI";
import AdvantagesWorkflowAutomation from "./pages/blog/AdvantagesWorkflowAutomation";
import CustomerSupportChatbots from "./pages/blog/CustomerSupportChatbots"
import AIStockManagement from "./pages/blog/AIStockManagement";
import OnlineFormsPaperless from "./pages/blog/OnlineFormsPaperless";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2500); // 1.5 seconds, adjust if you want
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/top-5-automations-nonprofits" element={<Top5Automations />} />
          <Route path="/blog/sme-ai-no-it-team" element={<SMEAIWithoutIT />} />
          <Route path="/blog/ngo-donor-reporting-success" element={<NGODonorReporting />} />
          <Route path="/blog/why-businesses-need-ai" element={<WhyBusinessesNeedAI />} />
          <Route path="/blog/advantages-workflow-automation" element={<AdvantagesWorkflowAutomation />} />
          <Route path="/blog/customer-support-chatbots" element={<CustomerSupportChatbots />} />
          <Route path="/blog/ai-stock-management" element={<AIStockManagement />} />
          <Route path="/blog/online-forms-paperless" element={<OnlineFormsPaperless />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
