import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";
import { usePageTracking } from "./hooks/usePageTracking";

/**
 * Layout wrapper for all public-facing pages.
 * Renders Header, page content (via Outlet), Footer, and FloatingCTA.
 * Also tracks every page view via usePageTracking.
 */
export default function PublicLayout() {
  // Track every page navigation to the analytics backend
  usePageTracking();

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
      <Outlet />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

