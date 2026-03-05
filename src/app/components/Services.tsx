import {
  ArrowRight,
  Building2,
  FileText,
  Award,
  Fingerprint,
  Factory,
  Rocket,
  ShoppingCart,
  ShieldCheck,
  Briefcase,
  Landmark,
  Cog,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const services = [
  // SET 1
  {
    icon: Building2,
    title: "COMPANY REGISTRATION",
    shortTitle: "Company",
    badge: "Most Popular",
    badgeColor: "#f77f00",
    description: "Register your Private Limited, LLP, OPC, or Public Limited company with MCA. Includes DIN, DSC, name approval, MOA/AOA, and Incorporation.",
    features: ["Private Limited", "LLP Registration", "One Person Company", "Partnership"],
    timeline: "5–7 Working Days",
    starting: "₹4,999",
    href: "/services/company-registration"
  },
  {
    icon: Rocket,
    title: "START UP INDIA",
    shortTitle: "Startup",
    badge: "Growth",
    badgeColor: "#f77f00",
    description: "Navigate DPIIT recognition to get tax exemptions, easier compliance, fast-tracking of patent applications, and funding support.",
    features: ["DPIIT Recognition", "Tax Exemption (80IAC)", "Angel Tax Exemption", "Patent Rebates"],
    timeline: "3–5 Working Days",
    starting: "₹3,999",
    href: "#contact"
  },
  {
    icon: Factory,
    title: "MSME - UDYAM REGISTRATION",
    shortTitle: "MSME",
    badge: "Govt Benefits",
    badgeColor: "#f77f00",
    description: "Register under Udyam (MSME) to unlock government subsidies, priority sector lending, tax concessions, and prompt payment protection.",
    features: ["Udyam Certificate", "NIC Code Selection", "Subsidy Eligibility", "Priority Lending"],
    timeline: "1–2 Working Days",
    starting: "₹999",
    href: "#contact"
  },
  {
    icon: Fingerprint,
    title: "TRADEMARK - LOGO",
    shortTitle: "Trademark",
    badge: "Protect Brand",
    badgeColor: "#f77f00",
    description: "Safeguard your brand name, logo, and intellectual identity with a registered trademark. Prevent misuse and stand out in the market.",
    features: ["TM Application", "Logo Protection", "Objection Handling", "Brand Advisory"],
    timeline: "18–24 Months",
    starting: "₹6,999",
    href: "#contact"
  },
  {
    icon: ShoppingCart,
    title: "GEM REGISTRATION",
    shortTitle: "GeM",
    badge: "Tenders",
    badgeColor: "#f77f00",
    description: "Register as a seller on the Government e-Marketplace (GeM) to participate in direct government procurement and national tenders.",
    features: ["Seller Registration", "Vendor Assessment", "Catalogue Management", "Tender Bidding"],
    timeline: "2–4 Working Days",
    starting: "₹1,999",
    href: "#contact"
  },
  {
    icon: FileText,
    title: "GST REGISTRATION",
    shortTitle: "GST",
    badge: "Mandatory",
    badgeColor: "#f77f00",
    description: "Get your GSTIN quickly and stay fully compliant. We handle GST registration, profile updates, filing, and advisory for all businesses.",
    features: ["GSTIN Allotment", "State/Central Level", "E-way Bill Setup", "LUT Filing"],
    timeline: "2–3 Working Days",
    starting: "₹1,499",
    href: "#contact"
  },
  // SET 2
  {
    icon: Award,
    title: "ISO - CE - GMP CERTIFICATE",
    shortTitle: "ISO/CE",
    badge: "Global Standard",
    badgeColor: "#f77f00",
    description: "Achieve globally recognized certifications like ISO 9001, CE Mark, and GMP to enhance business credibility, quality control, and tender eligibility.",
    features: ["ISO 9001:2015", "CE Marking", "GMP Certification", "Quality Audits"],
    timeline: "7–15 Working Days",
    starting: "₹8,999",
    href: "#contact"
  },
  {
    icon: ShieldCheck,
    title: "NSIC - CSPO CERTIFICATE",
    shortTitle: "NSIC",
    badge: "Govt Tenders",
    badgeColor: "#f77f00",
    description: "Get NSIC registration under Central Government Stores Purchase Programme (CSPO) for EMD exemption and tender participation benefits.",
    features: ["Single Point Reg", "EMD Exemption", "Tender Fee Waiver", "Credit Support"],
    timeline: "15–20 Working Days",
    starting: "₹12,999",
    href: "#contact"
  },
  {
    icon: Briefcase,
    title: "IEM REGISTRATION",
    shortTitle: "IEM",
    badge: "Industrial",
    badgeColor: "#f77f00",
    description: "Filing Industrial Entrepreneur Memorandum (IEM) for large scale industries exempted from industrial licensing provisions.",
    features: ["Part A (Intent)", "Part B (Commencement)", "SIA Registration", "Amendment of IEM"],
    timeline: "3–5 Working Days",
    starting: "₹4,999",
    href: "#contact"
  },
  {
    icon: Building2,
    title: "R&B APPROVAL",
    shortTitle: "R&B",
    badge: "Infrastructure",
    badgeColor: "#f77f00",
    description: "Specialized assistance for Roads & Building (R&B) department contractor registrations, contractor class upgrades, and tender eligibility.",
    features: ["Class Registration", "Document Prep", "Renewal & Upgrade", "Govt Liaison"],
    timeline: "20–30 Working Days",
    starting: "Custom Price",
    href: "#contact"
  },
  {
    icon: Landmark,
    title: "LOANS & SUBSIDY",
    shortTitle: "Finance",
    badge: "Funding",
    badgeColor: "#f77f00",
    description: "Expert consultancy for project financing, SME loans, working capital, and specialized state/central government subsidy schemes.",
    features: ["Project Reports", "CMA Data Prep", "CGFMSE Loans", "State Subsidies"],
    timeline: "Variable",
    starting: "Custom Price",
    href: "#contact"
  },
  {
    icon: Cog,
    title: "FACTORY ACT- GPCB - BIS, IBR, EIL, CREDIT RATING ETC",
    shortTitle: "Compliance",
    badge: "Operations",
    badgeColor: "#f77f00",
    description: "End-to-end operational compliance including Factory Act licensing, GPCB pollution boards, BIS, IBR, EIL, and Credit Rating assistance.",
    features: ["Factory License", "GPCB CTE/CCA", "BIS Certification", "Credit Rating Prep"],
    timeline: "Variable",
    starting: "Custom Price",
    href: "#contact"
  }
];

import { useNavigate } from "react-router";

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  const navigate = useNavigate();

  const handleActionClick = () => {
    if (service.href.startsWith("#")) {
      const el = document.querySelector(service.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(service.href);
    }
  };

  return (
    <div
      onClick={handleActionClick}
      className="rounded-2xl overflow-hidden flex flex-col cursor-pointer"
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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const displayedServices = services.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

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
          {displayedServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${currentPage === 0
              ? "bg-slate-200 text-slate-400 cursor-not-allowed opacity-50"
              : "bg-white text-[#03045e] shadow-md hover:shadow-lg hover:-translate-y-1 hover:text-[#f77f00]"
              }`}
            style={{ border: "1px solid rgba(0,0,0,0.05)" }}
            aria-label="Previous Services"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentPage === idx ? "bg-[#f77f00] w-8" : "bg-slate-300 w-2.5 hover:bg-slate-400"
                  }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${currentPage === totalPages - 1
              ? "bg-slate-200 text-slate-400 cursor-not-allowed opacity-50"
              : "bg-white text-[#03045e] shadow-md hover:shadow-lg hover:-translate-y-1 hover:text-[#f77f00]"
              }`}
            style={{ border: "1px solid rgba(0,0,0,0.05)" }}
            aria-label="Next Services"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
