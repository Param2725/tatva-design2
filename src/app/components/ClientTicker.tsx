const clients = [
  "Adani Wilmar Ltd",
  "Zydus Lifesciences",
  "Torrent Pharma",
  "Arvind Ltd",
  "Amul (GCMMF)",
  "Astral Pipes",
  "Sintex Industries",
  "Cadila Healthcare",
  "GNFC",
  "Welspun Group",
  "Nirma Ltd",
  "Lakhani Group",
  "Intas Pharma",
  "Elecon Engineering",
  "AIA Engineering",
];

export function ClientTicker() {
  return (
    <section
      style={{
        background: "#caf0f8",
        padding: "56px 0 48px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          color: "#03045e",
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "36px",
          lineHeight: 1.3,
        }}
      >
        Trusted By Startups &amp; Businesses
      </h2>

      {/* Fade edges */}
      <div style={{ position: "relative" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "80px",
            background: "linear-gradient(to right, #caf0f8, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "80px",
            background: "linear-gradient(to left, #caf0f8, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Scrolling track */}
        <div
          className="ticker-track"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: "24px",
            paddingLeft: "24px",
          }}
        >
          {/* Render the list twice for seamless loop */}
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexShrink: 0,
              }}
            >
              {clients.map((name, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  className="ticker-card"
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid rgba(3, 4, 94, 0.1)",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    flexShrink: 0,
                    cursor: "default",
                    transition:
                      "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                    boxShadow: "0 2px 8px rgba(3, 4, 94, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(0, 119, 182, 0.4)";
                    el.style.boxShadow = "0 4px 16px rgba(0, 119, 182, 0.12)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(3, 4, 94, 0.1)";
                    el.style.boxShadow = "0 2px 8px rgba(3, 4, 94, 0.06)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <span
                    style={{
                      color: "#03045e",
                      fontWeight: 700,
                      fontSize: "clamp(0.875rem, 1.5vw, 1.05rem)",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation — 20s for a slightly faster but still readable pace */}
      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-track {
          animation: ticker-scroll 20s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
