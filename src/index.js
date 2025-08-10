import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"; // ← use the global stylesheet we created
import App from "./App";
import Loader from "./components/Loader";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// Optional: send Web Vitals to Google Analytics if gtag exists
function sendToAnalytics(metric) {
  try {
    if (window.gtag) {
      window.gtag("event", metric.name, {
        value: Math.round(metric.value),
        event_label: metric.id,
        event_category: "Web Vitals",
        non_interaction: true,
      });
    } else {
      // Dev fallback
      // console.info(metric);
    }
  } catch (_) {}
}
reportWebVitals(sendToAnalytics);
