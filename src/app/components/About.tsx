import { CheckCircle, ArrowRight, ShieldCheck, TrendingUp, Scale } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "MCA Authorized",
      desc: "Registered with Ministry of Corporate Affairs",
    },
    {
      icon: TrendingUp,
      title: "5,000+ Businesses",
      desc: "Successfully registered across India",
    },
    {
      icon: Scale,
      title: "Legal Experts",
      desc: "CA, CS & Legal Professionals on team",
    },
  ];

  const points = [
    "Dedicated relationship manager for every client",
    "Transparent pricing — no hidden charges",
    "Regular updates at every step of the process",
    "Post-registration compliance support included",
    "Secure digital document handling",
    "Based in 10th Floor, I-Square Corporate Park, 1007, Science City Rd, nr. Shukan Mall, Panchamrut Bunglows II, Sola, Ahmedabad, Gujarat 380060",
  ];

  return (
    <section id="about" style={{ background: "white", paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Visual */}
          <div className="relative">
            {/* Main Card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, #03045e, #023e8a)",
                boxShadow: "0 20px 60px rgba(3,4,94,0.25)",
              }}
            >
              <div
                className="mb-6 pb-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "6px" }}>
                  OUR MISSION
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  Making legal compliance accessible and affordable for every Indian entrepreneur.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "10+", label: "Years" },
                  { value: "50+", label: "Experts" },
                  { value: "1", label: "City" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      style={{
                        color: "#48cae4",
                        fontSize: "24px",
                        fontWeight: 800,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", marginTop: "4px" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges Below Card */}
            <div className="flex flex-wrap gap-4 mt-6">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: "white",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                      border: "1px solid #e0f2fe",
                      flex: "1 1 auto",
                      minWidth: "200px",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#e0f2fe" }}
                    >
                      <Icon size={18} style={{ color: "#0077b6" }} />
                    </div>
                    <div>
                      <p style={{ color: "#03045e", fontSize: "13px", fontWeight: 700 }}>{h.title}</p>
                      <p style={{ color: "#6b7280", fontSize: "11px" }}>{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#0077b6" }} />
              <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
                ABOUT TATVA CONSULTANCY
              </span>
            </div>

            <h2
              className="mb-5"
              style={{
                color: "#03045e",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.3px",
              }}
            >
              Your Trusted Legal Partner for Business Growth
            </h2>

            <p
              className="mb-6"
              style={{
                color: "#4b5563",
                fontSize: "15px",
                lineHeight: 1.75,
              }}
            >
              Tatva Consultancy is a leading business registration and compliance firm based in India,
              serving startup founders and SMEs since 2014. Our team of Chartered Accountants, Company
              Secretaries, and legal professionals brings decades of combined expertise to every engagement.
            </p>

            <p
              className="mb-8"
              style={{
                color: "#4b5563",
                fontSize: "15px",
                lineHeight: 1.75,
              }}
            >
              We believe that every entrepreneur deserves access to professional legal support without
              paying enterprise prices. That's why we've built transparent, affordable packages that
              cover everything from registration to ongoing compliance.
            </p>

            {/* Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#f77f00" }}
                  />
                  <span style={{ color: "#374151", fontSize: "13.5px", fontWeight: 500 }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white"
              style={{
                background: "#f77f00",
                fontWeight: 700,
                fontSize: "14px",
                boxShadow: "0 4px 16px rgba(247,127,0,0.3)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#d65a00";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#f77f00";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Talk to an Expert
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
