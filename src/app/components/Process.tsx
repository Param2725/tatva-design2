import { MessageSquare, FileStack, Send, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "Share your business idea and requirements with our expert. We'll suggest the ideal structure, registration type, and pricing plan.",
    details: ["Business type advisory", "Structure recommendation", "Cost estimate", "Timeline planning"],
    color: "#0077b6",
    lightColor: "#e0f2fe",
  },
  {
    step: "02",
    icon: FileStack,
    title: "Documentation",
    description:
      "We provide a simple checklist. You upload documents securely online — no physical paperwork needed. Our team verifies everything.",
    details: ["Simple document checklist", "Secure online upload", "Expert verification", "Digital signature support"],
    color: "#0096c7",
    lightColor: "#e0f9ff",
  },
  {
    step: "03",
    icon: Send,
    title: "Filing & Submission",
    description:
      "Our professionals prepare and file all applications with the relevant authorities — MCA, GSTIN, Trade Marks Registry, or FSSAI.",
    details: ["Government portal filing", "Application tracking", "Query resolution", "Real-time status updates"],
    color: "#00b4d8",
    lightColor: "#e0faf9",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Approval & Delivery",
    description:
      "Once approved, we deliver your certificates, registration numbers, and all documents digitally. Post-registration support included.",
    details: ["Digital certificate delivery", "Physical copy dispatch", "Compliance calendar", "Ongoing support"],
    color: "#023e8a",
    lightColor: "#eff6ff",
  },
];

export function Process() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="process"
      style={{
        background: "white",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ background: "#fff3e0", border: "1px solid #ffe0b2" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f77f00" }} />
            <span style={{ color: "#f77f00", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
              HOW IT WORKS
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
            Simple 4-Step Registration Process
          </h2>
          <div style={{ width: "60px", height: "3px", background: "#f77f00", borderRadius: "2px", margin: "0 auto 16px" }} />
          <p
            className="mx-auto"
            style={{
              color: "#4b5563",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            We've designed our process to be fast, simple, and completely online.
            No office visits, no confusing paperwork.
          </p>
        </div>

        {/* Steps — Desktop Horizontal */}
        <div className="hidden lg:grid grid-cols-4 gap-0 mb-12 relative">
          {/* Connecting Line */}
          <div
            className="absolute top-10 left-1/8 right-1/8"
            style={{
              height: "2px",
              background: "linear-gradient(90deg, #f77f00, #d65a00)",
              top: "40px",
              left: "15%",
              right: "15%",
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center px-4">
                {/* Step Number & Icon */}
                <div className="relative mb-5 z-10">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, #00b4d8)`,
                      boxShadow: `0 8px 24px rgba(0,119,182,0.3)`,
                    }}
                  >
                    <Icon size={28} color="white" />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: "#f77f00",
                      border: "2px solid white",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "10px", fontWeight: 800 }}>{step.step}</span>
                  </div>
                </div>

                <h3
                  className="mb-2"
                  style={{
                    color: "#03045e",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    color: "#4b5563",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>

                <ul className="space-y-1.5 text-left w-full">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: step.color }}
                      />
                      <span style={{ color: "#374151", fontSize: "12px", fontWeight: 500 }}>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute right-0 top-8 transform translate-x-1/2"
                    style={{ zIndex: 20 }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "white", border: "1.5px solid #e0f2fe", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                    >
                      <ArrowRight size={14} style={{ color: "#0077b6" }} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Steps — Mobile Vertical */}
        <div className="lg:hidden space-y-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-7 top-16 w-0.5 h-8"
                    style={{ background: "linear-gradient(#0077b6, #00b4d8)", zIndex: 0 }}
                  />
                )}

                <div
                  className="flex gap-4 p-5 rounded-2xl"
                  style={{
                    background: "white",
                    border: `1.5px solid ${step.lightColor}`,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center relative"
                      style={{ background: `linear-gradient(135deg, ${step.color}, #00b4d8)` }}
                    >
                      <Icon size={22} color="white" />
                      <div
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "#f77f00", border: "1.5px solid white" }}
                      >
                        <span style={{ color: "white", fontSize: "9px", fontWeight: 800 }}>{step.step}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="mb-1"
                      style={{ color: "#03045e", fontSize: "15px", fontWeight: 700 }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "#4b5563", fontSize: "13px", lineHeight: 1.6 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-2xl p-8 lg:p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #03045e, #0077b6)",
            boxShadow: "0 16px 48px rgba(3,4,94,0.25)",
          }}
        >
          <h3
            className="mb-3"
            style={{
              color: "white",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 800,
            }}
          >
            Ready to Register Your Business?
          </h3>
          <p
            className="mb-6 mx-auto"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", maxWidth: "500px" }}
          >
            Join thousands of founders who've trusted us to set up their businesses correctly from day one.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-white"
              style={{
                background: "#f77f00",
                fontWeight: 700,
                fontSize: "15px",
                boxShadow: "0 4px 20px rgba(247,127,0,0.4)",
              }}
            >
              Start Free Consultation
              <ArrowRight size={16} />
            </button>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "white",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              📞 Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
