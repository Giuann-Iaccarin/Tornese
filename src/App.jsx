import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './App.css'
import Home from "./pages/homepage/Home";
import PrivacyPolicy from "./pages/footerpages/PrivacyPolicy";
import CookiePolicy from "./pages/footerpages/CookiePolicy";
import TermsOfService from "./pages/footerpages/TermsOfService";
import Disclaimer from "./pages/footerpages/Disclaimer";
import APIDocumentation from "./pages/footerpages/APIDocumentation";
import Documentation from "./pages/footerpages/Documentation";
import Blog from "./pages/footerpages/Blog";
import FAQ from "./pages/footerpages/FAQ";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/footerpages/HowItWorks";
import TokenTornese from "./pages/footerpages/TokenTornese";
import RoadmapPage from "./pages/footerpages/RoadmapPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename="/Tornese">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/api-developer" element={<APIDocumentation />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/come-funziona" element={<HowItWorks />} />
        <Route path="/token" element={<TokenTornese />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
