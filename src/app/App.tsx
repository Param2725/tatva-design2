import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ImageCarousel } from "./components/ImageCarousel";
import { ClientTicker } from "./components/ClientTicker";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

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
      <main>
        <Hero />
        <ImageCarousel />
        <ClientTicker />
        <Services />
        <About />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}