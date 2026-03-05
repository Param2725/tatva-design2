import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram, ExternalLink } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const services = [
  { name: "Company Registration", href: "/services/company-registration" },
  { name: "LLP Registration", href: "/services/llp-registration" },
  { name: "GST Registration", href: "/services/gst-registration" },
  { name: "ISO Certification", href: "/services/iso-certification" },
  { name: "Trademark Registration", href: "/services/trademark-registration" },
  { name: "FSSAI License", href: "/services/fssai-license" },
  { name: "MSME Registration", href: "/services/msme-registration" },
  { name: "Startup India", href: "/services/startup-india" },
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
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="Tatva Consultancy Services"
                className="h-12 sm:h-14 w-auto"
              />
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
                href="tel:+919876543210"
                className="flex items-center gap-2.5"
                style={{ textDecoration: "none" }}
              >
                <Phone size={14} style={{ color: "#48cae4" }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px" }}>+91 98765 43210</span>
              </a>
              <a
                href="mailto:hello@tatvaconsultancy.in"
                className="flex items-center gap-2.5"
                style={{ textDecoration: "none" }}
              >
                <Mail size={14} style={{ color: "#48cae4" }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px" }}>hello@tatvaconsultancy.in</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} style={{ color: "#48cae4", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px" }}>
                  Mumbai · Delhi · Bangalore · Chennai
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
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
            © 2024 Tatva Consultancy. All rights reserved. CIN: U74999MH2014PTC123456
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "12px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#48cae4")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
