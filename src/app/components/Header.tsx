import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "/about-us" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${href}`);
      } else {
        if (href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      style={{
        background: isScrolled ? "rgba(3,4,94,0.97)" : "#03045e",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex flex-col items-start flex-shrink-0 group relative"
          >
            <div className="relative flex items-start">
              <span
                className="font-serif font-black tracking-[0.05em] leading-none transition-colors duration-300"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  color: isScrolled ? "white" : "#48cae4",
                  textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                TATVA
              </span>
              <span
                className="font-serif ml-0.5"
                style={{
                  fontSize: "clamp(0.6rem, 1.5vw, 0.9rem)",
                  color: isScrolled ? "white" : "#48cae4",
                  lineHeight: 1,
                  marginTop: "0.2rem"
                }}
              >
                ®
              </span>
            </div>
            <span
              className="font-serif font-semibold tracking-[0.08em] mt-1 transition-colors duration-300"
              style={{
                fontSize: "clamp(0.65rem, 2vw, 0.9rem)",
                color: isScrolled ? "rgba(255,255,255,0.9)" : "white",
                textTransform: "uppercase"
              }}
            >
              Consultancy Services
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-md text-sm transition-all duration-200"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#48cae4";
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  (e.target as HTMLElement).style.borderBottom = "2px solid #f77f00";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                  (e.target as HTMLElement).style.background = "transparent";
                  (e.target as HTMLElement).style.borderBottom = "2px solid transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919825310954"
              className="flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200"
              style={{ color: "#48cae4", fontSize: "13px", fontWeight: 600 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(72,202,228,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <Phone size={14} />
              +91-9825310954
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 rounded-lg text-white text-sm transition-all duration-200"
              style={{
                background: "#f77f00",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(247,127,0,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#d65a00";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#f77f00";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-md"
            style={{ color: "white" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)", background: "#03045e" }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-lg text-sm"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </button>
            ))}
            <div
              className="mt-3 pt-3 flex flex-col gap-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              <a
                href="tel:+919825310954"
                className="flex items-center gap-2 px-4 py-3 rounded-lg"
                style={{ color: "#48cae4", fontWeight: 600, background: "rgba(72,202,228,0.1)" }}
              >
                <Phone size={16} />
                +91-9825310954
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-4 py-3 rounded-lg text-white text-center text-sm"
                style={{
                  background: "#f77f00",
                  fontWeight: 600,
                }}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
