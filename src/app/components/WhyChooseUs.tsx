import { Users, Zap, IndianRupee, HeadphonesIcon, ShieldCheck, FileCheck, Clock, Star } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Consultants",
    description:
      "Our team includes Chartered Accountants, Company Secretaries, and trademark attorneys with 10+ years of combined experience in Indian compliance law.",
    color: "#f77f00",
    bg: "#fff3e0",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "We work with urgency. Most registrations are initiated within 24 hours of document receipt. Track your application status in real-time through our portal.",
    color: "#f77f00",
    bg: "#fff3e0",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Transparent, all-inclusive pricing with zero hidden costs. Our packages are designed for startup budgets without compromising quality or compliance.",
    color: "#f77f00",
    bg: "#fff3e0",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    description:
      "From initial consultation to final certificate — we handle everything. Your dedicated manager keeps you informed at every milestone.",
    color: "#f77f00",
    bg: "#fff3e0",
  },
  {
    icon: ShieldCheck,
    title: "100% Legal Compliance",
    description:
      "Every filing is reviewed by a qualified professional before submission. We guarantee government-compliant documentation with zero rejection risk.",
    color: "#f77f00",
    bg: "#fff3e0",
  },
  {
    icon: FileCheck,
    title: "Digital-First Process",
    description:
      "Completely paperless. Upload documents online, sign digitally, and receive your certificates via secure email — no office visits required.",
    color: "#f77f00",
    bg: "#fff3e0",
  },
];

const trustBadges = [
  { icon: Star, text: "4.9/5 Google Rating", sub: "Based on 800+ reviews" },
  { icon: ShieldCheck, text: "ISO 9001 Certified", sub: "Quality management" },
  { icon: Clock, text: "Same-Day Response", sub: "On all enquiries" },
  { icon: FileCheck, text: "Zero Rejection Rate", sub: "On all filings" },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      style={{
        background: "linear-gradient(180deg, white 0%, #f0f9ff 100%)",
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
              WHY TATVA CONSULTANCY
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
            Why <span style={{ color: "#f77f00" }}>5,000+</span> Founders Trust Us
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
            We combine legal expertise with startup-friendly service to deliver results that matter.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="p-6 rounded-2xl group"
                style={{
                  background: "white",
                  border: "1.5px solid #e2f4fb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,119,182,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.borderColor = reason.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#e2f4fb";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: reason.bg }}
                >
                  <Icon size={22} style={{ color: reason.color }} />
                </div>
                <h3
                  className="mb-2"
                  style={{ color: "#03045e", fontSize: "16px", fontWeight: 700 }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{ color: "#4b5563", fontSize: "13.5px", lineHeight: 1.65 }}
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.text}
                className="flex flex-col items-center text-center p-5 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #03045e, #023e8a)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(72,202,228,0.2)" }}
                >
                  <Icon size={20} style={{ color: "#48cae4" }} />
                </div>
                <p style={{ color: "white", fontSize: "14px", fontWeight: 700, marginBottom: "2px" }}>
                  {badge.text}
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "11.5px" }}>
                  {badge.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
