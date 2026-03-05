import { ArrowRight, CheckCircle, Star, Users, Award, Clock } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "5,000+", label: "Businesses Registered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Years Experience" },
    { value: "48 hrs", label: "Average Processing" },
  ];

  const highlights = [
    "Company & LLP Registration",
    "GST & Tax Compliance",
    "Trademark & ISO Certification",
    "MSME & Startup India Registration",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 lg:pt-32"
      style={{
        background: "linear-gradient(135deg, #03045e 0%, #023e8a 50%, #0077b6 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00b4d8, transparent)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-80 h-80 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #48cae4, transparent)" }}
        />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(72,202,228,0.15)", border: "1px solid rgba(72,202,228,0.3)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#48cae4" }} />
              <span style={{ color: "#48cae4", fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px" }}>
                INDIA'S TRUSTED BUSINESS REGISTRATION PARTNER
              </span>
            </div>

            <h1
              className="text-white mb-5"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
              }}
            >
              Simplifying{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #f77f00, #d65a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Business Registration
              </span>{" "}
              for Startups
            </h1>

            <p
              className="mb-8"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Fast, compliant, and affordable company registration services tailored for Indian startups and small businesses.
              Get your business legally registered in as little as <strong style={{ color: "#48cae4" }}>48 hours</strong> with complete end-to-end support.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-2 gap-2.5 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={15} style={{ color: "#48cae4", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13.5px", fontWeight: 500 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-white transition-all duration-200"
                style={{
                  background: "#f77f00",
                  fontWeight: 700,
                  fontSize: "15px",
                  boxShadow: "0 4px 20px rgba(247,127,0,0.5)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(247,127,0,0.6)";
                  (e.currentTarget as HTMLElement).style.background = "#d65a00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(247,127,0,0.5)";
                  (e.currentTarget as HTMLElement).style.background = "#f77f00";
                }}
              >
                Get Free Consultation
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                }}
              >
                View Services
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:block">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Card Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>Quick Registration Planner</span>
                <div className="w-16" />
              </div>

              <div className="p-6 space-y-4">
                {/* Form Fields Mock */}
                <div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "6px" }}>
                    SELECT SERVICE
                  </p>
                  <div
                    className="px-4 py-3 rounded-lg flex items-center justify-between"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(72,202,228,0.4)" }}
                  >
                    <span style={{ color: "white", fontSize: "14px" }}>Private Limited Company</span>
                    <div className="w-4 h-4 rounded-full" style={{ background: "#48cae4" }} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Clock size={14} />, label: "Processing Time", value: "2–7 Days" },
                    { icon: <Award size={14} />, label: "Govt Approved", value: "100%" },
                    { icon: <Users size={14} />, label: "Expert Support", value: "Dedicated" },
                    { icon: <CheckCircle size={14} />, label: "Compliance", value: "Guaranteed" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="px-4 py-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <div className="flex items-center gap-1.5 mb-1" style={{ color: "#48cae4" }}>
                        {item.icon}
                        <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.3px", color: "rgba(255,255,255,0.5)" }}>
                          {item.label}
                        </span>
                      </div>
                      <p style={{ color: "white", fontSize: "14px", fontWeight: 700 }}>{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Services Checklist */}
                <div
                  className="rounded-xl p-4 space-y-2.5"
                  style={{ background: "rgba(0,119,182,0.2)", border: "1px solid rgba(0,180,216,0.3)" }}
                >
                  {[
                    "DIN & DSC Generation",
                    "Name Approval (MCA)",
                    "MOA & AOA Drafting",
                    "Certificate of Incorporation",
                    "PAN & TAN Registration",
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: i < 3 ? "#00b4d8" : "rgba(255,255,255,0.15)" }}
                      >
                        {i < 3 ? (
                          <CheckCircle size={11} color="white" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.4)" }} />
                        )}
                      </div>
                      <span style={{ color: i < 3 ? "white" : "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 500 }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3 rounded-xl text-white text-sm"
                  style={{
                    background: "#f77f00",
                    fontWeight: 700,
                  }}
                >
                  Start My Registration →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="px-6 py-5 text-center"
              style={{
                background: "rgba(3,4,94,0.4)",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  color: "#48cae4",
                  letterSpacing: "-0.5px",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "12.5px",
                  fontWeight: 500,
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", height: "60px", width: "100%" }}>
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#f0f9ff" />
        </svg>
      </div>
    </section>
  );
}
