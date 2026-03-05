const logos = [
  { src: "/client/logos/aegis.png", name: "Aegis" },
  { src: "/client/logos/ahmedabad-university.png", name: "Ahmedabad University" },
  { src: "/client/logos/armee-infotech.png", name: "Armee Infotech" },
  { src: "/client/logos/australian-premium-solar.png", name: "Australian Premium Solar" },
  { src: "/client/logos/bons-light.png", name: "Bons Light" },
  { src: "/client/logos/epic.png", name: "Epic" },
  { src: "/client/logos/euro-premium-solar.png", name: "Euro Premium Solar" },
  { src: "/client/logos/fujitec-express.png", name: "Fujitec Express" },
  { src: "/client/logos/goldi-solar.png", name: "Goldi Solar" },
  { src: "/client/logos/grainspan.png", name: "Grainspan" },
  { src: "/client/logos/hocco.png", name: "Hocco" },
  { src: "/client/logos/ingeco.png", name: "Ingeco" },
  { src: "/client/logos/mediatab.png", name: "Mediatab" },
  { src: "/client/logos/noble-electrodes.png", name: "Noble Electrodes" },
  { src: "/client/logos/om-power-transmission.png", name: "Om Power Transmission" },
  { src: "/client/logos/samsung.png", name: "Samsung" },
  { src: "/client/logos/sandvik-coromant.png", name: "Sandvik Coromant" },
  { src: "/client/logos/sardardham.png", name: "Sardardham" },
  { src: "/client/logos/solex-energy.png", name: "Solex Energy" },
  { src: "/client/logos/supreme.png", name: "Supreme" },
  { src: "/client/logos/taparia-tools.png", name: "Taparia Tools" },
  { src: "/client/logos/vachhani-furniture.png", name: "Vachhani Furniture" },
  { src: "/client/logos/vinfast.png", name: "VinFast" },
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
              {logos.map((logo, i) => (
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
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={100}
                    loading="lazy"
                    draggable={false}
                    style={{
                      width: "200px",
                      height: "100px",
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
