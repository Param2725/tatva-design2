import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, TechNova Solutions",
    city: "Bangalore",
    service: "Private Limited Company",
    rating: 5,
    text: "Tatva Consultancy made the company registration process incredibly smooth. From documentation to the incorporation certificate, everything was handled professionally. Got my company registered in just 6 days!",
    initials: "AM",
    color: "#0077b6",
  },
  {
    name: "Ravi Sharma",
    role: "Founder, FreshBites",
    service: "Company Registration + MSME",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "We needed company registration and MSME certification for our food startup. Tatva handled both simultaneously and kept us updated throughout. The team is extremely knowledgeable and responsive. Highly recommended!",
    initials: "PS",
    color: "#0096c7",
  },
  {
    name: "Rajesh Kumar",
    role: "Director, KR Exports Pvt. Ltd.",
    city: "Delhi",
    service: "ISO 9001 Certification",
    rating: 5,
    text: "ISO certification was a must for our export business. Tatva guided us through the entire process, helped us prepare our quality manual, and we received our certificate without any hassle. Very professional team.",
    initials: "RK",
    color: "#023e8a",
  },
  {
    name: "Sneha Patel",
    role: "Founder, Crafted Interiors",
    city: "Ahmedabad",
    service: "Trademark Registration",
    rating: 5,
    text: "After having my brand name copied by a competitor, I decided to trademark everything. Tatva filed the application within 2 days of signing up, and handled all the subsequent correspondence with the registry.",
    initials: "SP",
    color: "#00b4d8",
  },
  {
    name: "Vikram Singh",
    role: "Founder, EduReach Technologies",
    city: "Pune",
    service: "Startup India + MSME",
    rating: 5,
    text: "Affordable pricing, quick turnaround, and most importantly — they explained every step in plain language. Got my MSME and Startup India registration done within a week. The post-registration support is excellent.",
    initials: "VS",
    color: "#0077b6",
  },
  {
    name: "Vikram Desai",
    role: "Director, BuildTech Solutions",
    service: "LLP Registration",
    rating: 5,
    text: "Setting up our LLP seemed complicated until we found Tatva. They broke it down into simple steps, assigned us a dedicated manager, and we never felt lost. Transparent pricing — exactly what was quoted.",
    initials: "AR",
    color: "#0096c7",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      style={{
        background: "#f0f9ff",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#0077b6" }} />
            <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
              CLIENT TESTIMONIALS
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
            What Our Clients Say
          </h2>
          <p
            className="mx-auto"
            style={{
              color: "#4b5563",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Real feedback from real founders who've built their businesses with our support.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
              ))}
            </div>
            <span style={{ color: "#03045e", fontWeight: 800, fontSize: "16px" }}>4.9/5</span>
            <span style={{ color: "#6b7280", fontSize: "14px" }}>from 800+ Google reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl flex flex-col"
              style={{
                background: "white",
                border: "1.5px solid #e2f4fb",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,119,182,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.borderColor = t.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "#e2f4fb";
              }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote size={24} style={{ color: t.color, opacity: 0.4 }} />
              </div>

              {/* Rating */}
              <div className="mb-3">
                <StarRating count={t.rating} />
              </div>

              {/* Text */}
              <p
                className="flex-1 mb-5"
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                "{t.text}"
              </p>

              {/* Service Tag */}
              <div className="mb-4">
                <span
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    background: `${t.color}15`,
                    color: t.color,
                    fontSize: "11.5px",
                    fontWeight: 600,
                    border: `1px solid ${t.color}30`,
                  }}
                >
                  {t.service}
                </span>
              </div>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid #f0f9ff" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, #00b4d8)`,
                  }}
                >
                  <span style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p style={{ color: "#03045e", fontSize: "14px", fontWeight: 700 }}>{t.name}</p>
                  <p style={{ color: "#6b7280", fontSize: "12px" }}>
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Mentions */}
        <div className="mt-14 text-center">
          <p style={{ color: "#9ca3af", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", marginBottom: "20px" }}>
            TRUSTED BY FOUNDERS FEATURED IN
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["YourStory", "Inc42", "Economic Times", "Entrackr", "Mint"].map((pub) => (
              <span
                key={pub}
                style={{
                  color: "#9ca3af",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                }}
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
