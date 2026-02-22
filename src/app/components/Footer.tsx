import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram, ExternalLink } from "lucide-react";

const services = [
  "Company Registration",
  "LLP Registration",
  "GST Registration",
  "ISO Certification",
  "Trademark Registration",
  "FSSAI License",
  "MSME Registration",
  "Startup India",
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
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#03045e" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0077b6, #00b4d8)" }}
              >
                <span className="text-white" style={{ fontWeight: 800, fontSize: "14px" }}>TC</span>
              </div>
              <div>
                <p style={{ color: "white", fontWeight: 800, fontSize: "16px", lineHeight: 1.2 }}>
                  Tatva Consultancy
                </p>
                <p style={{ color: "#48cae4", fontSize: "10px", fontWeight: 600, letterSpacing: "0.5px" }}>
                  BUSINESS SOLUTIONS
                </p>
              </div>
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
                    onClick={() => scrollTo(link.href)}
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
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
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
                    {service}
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
                    onClick={() => scrollTo("#contact")}
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
                onClick={() => scrollTo("#contact")}
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
