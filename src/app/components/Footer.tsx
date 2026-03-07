import { Phone, Mail, MapPin, ArrowRight, Twitter, Facebook, Instagram, ExternalLink } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const services = [
  { name: "Company Registration", href: "/services/company-registration" },
  { name: "LLP Registration", href: "/services/llp-registration" },
  { name: "ISO Certification", href: "/services/iso-certification" },
  { name: "Trademark Registration", href: "/services/trademark-registration" },
  { name: "MSME Registration", href: "/services/msme-registration" },
  { name: "Startup India", href: "/services/startup-india-registration" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const compliance = [
  "Annual Compliance",
  "Income Tax Filing",
  "ROC Filing",
  "Director KYC",
  "MCA Annual Return",
  "Audit & Accounts",
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
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
    <footer style={{ background: "#03045e" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-5 flex flex-col items-start">
              <div className="relative flex items-start">
                <span
                  className="font-serif font-black tracking-[0.05em] leading-none"
                  style={{
                    fontSize: "clamp(1.75rem, 5vw, 2.8rem)",
                    color: "white",
                    textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  TATVA
                </span>
                <span
                  className="font-serif ml-1"
                  style={{
                    fontSize: "clamp(0.7rem, 2vw, 1.1rem)",
                    color: "white",
                    lineHeight: 1,
                    marginTop: "0.2rem"
                  }}
                >
                  ®
                </span>
              </div>
              <span
                className="font-serif font-semibold tracking-[0.08em] mt-1"
                style={{
                  fontSize: "clamp(0.75rem, 2.2vw, 1.1rem)",
                  color: "rgba(255,255,255,0.9)",
                  textTransform: "uppercase"
                }}
              >
                Consultancy Services
              </span>
            </div>

            <p
              className="mb-6"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "13.5px",
                lineHeight: 1.7,
                maxWidth: "300px",
              }}
            >
              India's trusted business registration and compliance partner for startup founders and SMEs.
              Fast, affordable, and 100% online.
            </p>

            {/* Contact Quick Links */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919825310954"
                className="flex items-center gap-2.5"
                style={{ textDecoration: "none" }}
              >
                <Phone size={14} style={{ color: "#48cae4" }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px" }}>+91-9825310954</span>
              </a>
              <a
                href="mailto:info@tatvaconsultancy.in"
                className="flex items-center gap-2.5"
                style={{ textDecoration: "none" }}
              >
                <Mail size={14} style={{ color: "#48cae4" }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px" }}>info@tatvaconsultancy.in</span>
              </a>
              <a
                href="mailto:helpmsme@gmail.com"
                className="flex items-center gap-2.5"
                style={{ textDecoration: "none" }}
              >
                <Mail size={14} style={{ color: "#48cae4" }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px" }}>helpmsme@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/Z2TjydDZhWUBLQxS6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5"
                style={{ textDecoration: "none" }}
              >
                <MapPin size={14} style={{ color: "#48cae4", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px" }}>
                  Ahmedabad, Gujarat
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>, href: "https://www.youtube.com/@tatvaconsultancy1295", label: "YouTube" },
                { icon: Twitter, href: "https://twitter.com/TatvaConsultan", label: "Twitter" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100011339424566", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/tatvaconsultancy1/?hl=en", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#0077b6";
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.borderColor = "#0077b6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "white",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                marginBottom: "16px",
              }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-1.5 transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.6)", fontSize: "13.5px", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#48cae4";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    <ArrowRight size={11} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                color: "white",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                marginBottom: "16px",
              }}
            >
              SERVICES
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleNavClick(service.href)}
                    className="flex items-center gap-1.5 transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.6)", fontSize: "13.5px", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#48cae4";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    <ArrowRight size={11} />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4
              style={{
                color: "white",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                marginBottom: "16px",
              }}
            >
              COMPLIANCE
            </h4>
            <ul className="space-y-2.5 mb-6">
              {compliance.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="flex items-center gap-1.5 transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.6)", fontSize: "13.5px", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#48cae4";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    <ArrowRight size={11} />
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA in Footer */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(0,119,182,0.2)",
                border: "1px solid rgba(0,180,216,0.3)",
              }}
            >
              <p style={{ color: "white", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>
                Need Help?
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", marginBottom: "12px" }}>
                Get a free 30-min consultation with our expert.
              </p>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full py-2 rounded-lg text-white text-xs"
                style={{
                  background: "#f77f00",
                  fontWeight: 700,
                }}
              >
                Book Free Call →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "12.5px" }}>
            © 2024 Tatva Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
