import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";
import Home from "./pages/Home";
import CompanyRegistration from "./pages/services/CompanyRegistration";
import StartupIndiaRegistration from "./pages/services/StartupIndiaRegistration";

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
        <Route path="/services/company-registration" element={<CompanyRegistration />} />
        <Route path="/services/startup-india-registration" element={<StartupIndiaRegistration />} />
      </Routes>
      <Footer />
      <FloatingCTA />
    </div>
  );
}