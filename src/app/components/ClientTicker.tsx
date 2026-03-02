const logos = Array.from({ length: 16 }, (_, i) => `/client/logos/logo${i + 1}.png`);

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
            gap: "40px",
            paddingLeft: "40px",
          }}
        >
          {/* Render the list twice for seamless loop */}
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                flexShrink: 0,
              }}
            >
              {logos.map((src, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid rgba(3, 4, 94, 0.1)",
                    borderRadius: "12px",
                    padding: "16px 24px",
                    flexShrink: 0,
                    cursor: "default",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(3, 4, 94, 0.06)",
                  }}
                >
                  <img
                    src={src}
                    alt={`Client logo ${i + 1}`}
                    width={150}
                    height={75}
                    loading="lazy"
                    draggable={false}
                    style={{
                      width: "150px",
                      height: "75px",
                      objectFit: "contain",
                      display: "block",
                      userSelect: "none",
                    }}
                  />
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
