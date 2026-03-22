import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CompanyRegistration from "./pages/services/CompanyRegistration";
import StartupIndiaRegistration from "./pages/services/StartupIndiaRegistration";
import MSMERegistration from "./pages/services/MSMERegistration";
import TrademarkRegistration from "./pages/services/TrademarkRegistration";
import GeMRegistration from "./pages/services/GeMRegistration";
import ISOCertification from "./pages/services/ISOCertification";
import NSICRegistration from "./pages/services/NSICRegistration";
import IEMRegistration from "./pages/services/IEMRegistration";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        background: "#f0f9ff",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services/company-registration" element={<CompanyRegistration />} />
        <Route path="/services/startup-india-registration" element={<StartupIndiaRegistration />} />
        <Route path="/services/msme-registration" element={<MSMERegistration />} />
        <Route path="/services/trademark-registration" element={<TrademarkRegistration />} />
        <Route path="/services/gem-registration" element={<GeMRegistration />} />
        <Route path="/services/iso-certification" element={<ISOCertification />} />
        <Route path="/services/nsic-registration" element={<NSICRegistration />} />
        <Route path="/services/iem-registration" element={<IEMRegistration />} />
      </Routes>
      <Footer />
      <FloatingCTA />
    </div>
  );
}