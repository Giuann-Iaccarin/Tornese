import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/homepage/Home";
import PrivacyPolicy from "./pages/footerpages/PrivacyPolicy";
import CookiePolicy from "./pages/footerpages/CookiePolicy";
import TermsOfService from "./pages/footerpages/TermsOfService";
import Disclaimer from "./pages/footerpages/Disclaimer";
import APIDocumentation from "./pages/footerpages/APIDocumentation";
import Documentation from "./pages/footerpages/Documentation";

function App() {
  return (
    <Router basename="/Tornese">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/api-developer" element={<APIDocumentation />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;
