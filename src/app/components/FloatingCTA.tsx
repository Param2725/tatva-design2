import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, ArrowRight } from "lucide-react";

export function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup Card */}
      {open && (
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "white",
            boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
            width: "280px",
            border: "1.5px solid #e0f2fe",
          }}
        >
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #0077b6, #00b4d8)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "#4ade80" }} />
              <span style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>Online Now</span>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: "rgba(255,255,255,0.7)" }}>
              <X size={16} />
            </button>
          </div>
          <div className="p-5">
            <p style={{ color: "#03045e", fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>
              Get Free Consultation
            </p>
            <p style={{ color: "#6b7280", fontSize: "12.5px", lineHeight: 1.5, marginBottom: "14px" }}>
              Talk to our expert about company registration, GST, trademark & more.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-white w-full text-sm"
                style={{
                  background: "#f77f00",
                  fontWeight: 700,
                }}
              >
                <ArrowRight size={14} />
                Request Callback
              </button>
              <a
                href="tel:+919825310954"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl w-full text-sm"
                style={{
                  background: "#f0f9ff",
                  color: "#0077b6",
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "1.5px solid #bae6fd",
                }}
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "#f77f00",
          boxShadow: "0 6px 24px rgba(247,127,0,0.45)",
          transform: open ? "rotate(0deg)" : "rotate(0deg)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        {open ? (
          <X size={22} color="white" />
        ) : (
          <MessageCircle size={22} color="white" />
        )}
      </button>

      {/* Pulse Ring */}
      {!open && (
        <div
          className="absolute bottom-0 right-0 w-14 h-14 rounded-full pointer-events-none"
          style={{
            background: "rgba(247,127,0,0.2)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      )}

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
