import { ArrowRight, Building2, FileText, Award, Fingerprint, UtensilsCrossed, Factory } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Building2,
    title: "Company Registration",
    shortTitle: "Company",
    badge: "Most Popular",
    badgeColor: "#f77f00",
    description:
      "Register your Private Limited, LLP, OPC, or Public Limited company with MCA. Includes DIN, DSC, name approval, MOA/AOA drafting, and Certificate of Incorporation.",
    features: ["Private Limited Company", "LLP Registration", "One Person Company", "Partnership Firm"],
    timeline: "5–7 Working Days",
    starting: "₹4,999",
  },
  {
    icon: FileText,
    title: "GST Registration",
    shortTitle: "GST",
    badge: "Mandatory",
    badgeColor: "#f77f00",
    description:
      "Get your GSTIN quickly and stay fully compliant. We handle GST registration, filing, returns, and advisory for businesses of all sizes across India.",
    features: ["GST Registration", "Monthly/Quarterly Filing", "GST Returns (GSTR-1/3B)", "GST Advisory"],
    timeline: "2–3 Working Days",
    starting: "₹999",
  },
  {
    icon: Award,
    title: "ISO Certification",
    shortTitle: "ISO",
    badge: "Build Trust",
    badgeColor: "#f77f00",
    description:
      "Achieve globally recognized ISO certifications that enhance your business credibility with clients, government tenders, and international partners.",
    features: ["ISO 9001 (Quality)", "ISO 14001 (Environment)", "ISO 45001 (Safety)", "ISO 27001 (IT Security)"],
    timeline: "15–30 Working Days",
    starting: "₹9,999",
  },
  {
    icon: Fingerprint,
    title: "Trademark Registration",
    shortTitle: "Trademark",
    badge: "Protect Brand",
    badgeColor: "#f77f00",
    description:
      "Safeguard your brand name, logo, and identity with a registered trademark under the Trade Marks Act. Prevent misuse and protect intellectual property.",
    features: ["TM Application Filing", "Trademark Search", "Opposition Handling", "Renewal Services"],
    timeline: "18–24 Months",
    starting: "₹6,999",
  },
  {
    icon: UtensilsCrossed,
    title: "FSSAI License",
    shortTitle: "FSSAI",
    badge: "Food Business",
    badgeColor: "#f77f00",
    description:
      "Mandatory for all food businesses in India. We help you obtain FSSAI Basic Registration, State License, or Central License based on your business scale.",
    features: ["Basic Registration", "State License", "Central License", "License Renewal"],
    timeline: "7–15 Working Days",
    starting: "₹2,499",
  },
  {
    icon: Factory,
    title: "MSME Registration",
    shortTitle: "MSME",
    badge: "Govt Benefits",
    badgeColor: "#f77f00",
    description:
      "Register under Udyam (MSME) to unlock government subsidies, priority sector lending, tax concessions, and protection under the MSMED Act.",
    features: ["Udyam Registration", "Udyog Aadhaar", "MSME Certificate", "Subsidy Advisory"],
    timeline: "1–2 Working Days",
    starting: "₹499",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{
        background: hovered ? "white" : "white",
        border: hovered ? `1.5px solid ${service.badgeColor}` : "1.5px solid #e2f4fb",
        boxShadow: hovered
          ? `0 16px 48px rgba(0,119,182,0.14), 0 2px 8px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Top */}
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: hovered
                ? `linear-gradient(135deg, ${service.badgeColor}, #00b4d8)`
                : "linear-gradient(135deg, #e0f2fe, #caf0f8)",
              transition: "all 0.25s ease",
            }}
          >
            <Icon
              size={22}
              style={{ color: hovered ? "white" : service.badgeColor, transition: "all 0.25s ease" }}
            />
          </div>
          <span
            className="px-2.5 py-1 rounded-full text-white"
            style={{
              background: service.badgeColor,
              fontSize: "10.5px",
              fontWeight: 700,
              letterSpacing: "0.3px",
            }}
          >
            {service.badge}
          </span>
        </div>

        <h3
          className="mb-2"
          style={{
            color: "#03045e",
            fontSize: "17px",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h3>

        <p
          className="mb-4"
          style={{
            color: "#4b5563",
            fontSize: "13.5px",
            lineHeight: 1.65,
          }}
        >
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: service.badgeColor }}
              />
              <span style={{ color: "#374151", fontSize: "12.5px", fontWeight: 500 }}>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{
          borderTop: "1px solid #f0f9ff",
          background: hovered ? "#f0f9ff" : "#fafeff",
          transition: "all 0.25s ease",
        }}
      >
        <div>
          <p style={{ color: "#6b7280", fontSize: "11px", fontWeight: 500 }}>Starting from</p>
          <p style={{ color: "#03045e", fontSize: "16px", fontWeight: 800 }}>{service.starting}</p>
        </div>
        <button
          onClick={scrollToContact}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm"
          style={{
            background: "#f77f00",
            fontWeight: 600,
            boxShadow: hovered ? "0 4px 16px rgba(247,127,0,0.35)" : "none",
            transition: "all 0.25s ease",
          }}
        >
          Get Started
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={{ background: "#f0f9ff", paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ background: "#fff3e0", border: "1px solid #ffe0b2" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f77f00" }} />
            <span style={{ color: "#f77f00", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
              OUR SERVICES
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              color: "#03045e",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.3px",
              lineHeight: 1.2,
            }}
          >
            Complete Business Registration Services
          </h2>
          <div style={{ width: "60px", height: "3px", background: "#f77f00", borderRadius: "2px", margin: "0 auto 16px" }} />
          <p
            className="mx-auto"
            style={{
              color: "#4b5563",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              lineHeight: 1.7,
              maxWidth: "580px",
            }}
          >
            From company incorporation to compliance — we handle all legal formalities so you can focus on building your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "12px" }}>
            Don't see what you need? We offer many more compliance services.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white"
            style={{
              background: "linear-gradient(135deg, #03045e, #0077b6)",
              fontWeight: 700,
              fontSize: "14px",
              boxShadow: "0 4px 20px rgba(3,4,94,0.2)",
            }}
          >
            Explore All Services
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
