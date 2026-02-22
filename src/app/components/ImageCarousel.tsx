import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1758873272540-439a105db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBzdHJhdGVneSUyMHdoaXRlYm9hcmQlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzcxNjQ5NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    eyebrow: "Startup Strategy",
    caption: "Strategizing your startup roadmap",
    sub: "Our expert consultants work alongside you to chart the right legal structure and growth plan from day one.",
    tag: "Company Registration",
    overlayColor: "rgba(3, 4, 94, 0.42)",
    accentColor: "#0077b6",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnRyYWN0JTIwc2lnbmluZyUyMGRvY3VtZW50cyUyMHN0YW1wJTIwY2VydGlmaWNhdGUlMjBjbG9zZXVwfGVufDF8fHx8MTc3MTY0OTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    eyebrow: "Legal & Compliance",
    caption: "Fast, compliant business registration",
    sub: "Every document filed precisely — from MOA drafting to government submission. Zero rejections, full accuracy.",
    tag: "GST & Trademark",
    overlayColor: "rgba(2, 62, 138, 0.44)",
    accentColor: "#0096c7",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1758691737492-48e8fdd336f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VuZGVycyUyMGNlbGVicmF0aW5nJTIwc3VjY2VzcyUyMGJ1c2luZXNzJTIwYWNoaWV2ZW1lbnQlMjBoaWdoJTIwZml2ZXxlbnwxfHx8fDE3NzE2NDk2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    eyebrow: "Milestone Success",
    caption: "Your success. Our expertise.",
    sub: "Thousands of founders have celebrated incorporation day with us. Your business journey starts here.",
    tag: "5,000+ Businesses Registered",
    overlayColor: "rgba(0, 119, 182, 0.38)",
    accentColor: "#00b4d8",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1765729003706-355ca161736d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjaXR5JTIwc2t5bGluZSUyMGJ1c2luZXNzJTIwZGlzdHJpY3QlMjBwcm9mZXNzaW9uYWwlMjJidWlsZGluZ3N8ZW58MXx8fHwxNzcxNjQ5NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    eyebrow: "Pan-India Presence",
    caption: "Trusted across India's business hubs",
    sub: "With offices in Mumbai, Delhi, Bangalore, and Chennai — we understand the regulatory landscape of every state.",
    tag: "4 Cities · 10+ Years",
    overlayColor: "rgba(2, 62, 138, 0.48)",
    accentColor: "#48cae4",
  },
];

const AUTOPLAY_INTERVAL = 3800;
const TRANSITION_MS = 700;

export function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, TRANSITION_MS);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, next]);

  const slide = slides[current];

  return (
    <section
      style={{
        background: "#f0f9ff",
        paddingTop: "56px",
        paddingBottom: "64px",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div
              className="h-px flex-1"
              style={{ width: "32px", background: "linear-gradient(90deg, #0077b6, transparent)" }}
            />
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#0077b6" }} />
              <span
                style={{
                  color: "#0077b6",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  letterSpacing: "0.6px",
                }}
              >
                OUR WORK IN ACTION
              </span>
            </div>
          </div>

          {/* Arrow Controls — desktop top-right */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "white",
                border: "1.5px solid #e0f2fe",
                color: "#0077b6",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0077b6";
                (e.currentTarget as HTMLElement).style.borderColor = "#0077b6";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "white";
                (e.currentTarget as HTMLElement).style.borderColor = "#e0f2fe";
                (e.currentTarget as HTMLElement).style.color = "#0077b6";
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "#0077b6",
                border: "1.5px solid #0077b6",
                color: "white",
                boxShadow: "0 4px 14px rgba(0,119,182,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0096c7";
                (e.currentTarget as HTMLElement).style.borderColor = "#0096c7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0077b6";
                (e.currentTarget as HTMLElement).style.borderColor = "#0077b6";
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Carousel Stage */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            boxShadow:
              "0 24px 64px rgba(3,4,94,0.16), 0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          {/* Image Area */}
          <div
            className="relative w-full"
            style={{ aspectRatio: "16 / 7", minHeight: "260px" }}
          >
            {/* Image with transition */}
            <div
              className="absolute inset-0"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating
                  ? direction === "next"
                    ? "scale(1.03) translateX(12px)"
                    : "scale(1.03) translateX(-12px)"
                  : "scale(1) translateX(0px)",
                transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1), transform ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`,
              }}
            >
              <ImageWithFallback
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>

            {/* Brand Color Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${slide.overlayColor} 0%,
                  rgba(0,119,182,0.18) 60%,
                  rgba(0,180,216,0.08) 100%
                )`,
                mixBlendMode: "multiply",
              }}
            />

            {/* Bottom gradient for text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(3,4,94,0.72) 0%, rgba(3,4,94,0.2) 45%, transparent 100%)",
              }}
            />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  backdropFilter: "blur(8px)",
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(8px)" : "translateY(0)",
                  transition: `opacity ${TRANSITION_MS * 0.8}ms ease ${TRANSITION_MS * 0.1}ms, transform ${TRANSITION_MS * 0.8}ms ease ${TRANSITION_MS * 0.1}ms`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: slide.accentColor }}
                />
                <span
                  style={{
                    color: "white",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {slide.eyebrow.toUpperCase()}
                </span>
              </div>

              <h3
                style={{
                  color: "white",
                  fontSize: "clamp(1.2rem, 3vw, 1.85rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.3px",
                  marginBottom: "6px",
                  textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(10px)" : "translateY(0)",
                  transition: `opacity ${TRANSITION_MS * 0.8}ms ease ${TRANSITION_MS * 0.15}ms, transform ${TRANSITION_MS * 0.8}ms ease ${TRANSITION_MS * 0.15}ms`,
                }}
              >
                {slide.caption}
              </h3>

              <p
                className="hidden sm:block"
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "clamp(0.82rem, 1.4vw, 0.98rem)",
                  lineHeight: 1.55,
                  maxWidth: "540px",
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(10px)" : "translateY(0)",
                  transition: `opacity ${TRANSITION_MS * 0.8}ms ease ${TRANSITION_MS * 0.2}ms, transform ${TRANSITION_MS * 0.8}ms ease ${TRANSITION_MS * 0.2}ms`,
                }}
              >
                {slide.sub}
              </p>
            </div>

            {/* Slide counter badge — top right */}
            <div
              className="absolute top-5 right-5"
              style={{
                background: "rgba(3,4,94,0.55)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "8px",
                padding: "5px 11px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                {String(current + 1).padStart(2, "0")}{" "}
                <span style={{ color: "rgba(255,255,255,0.4)" }}>
                  / {String(slides.length).padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* Mobile Arrow Controls — inside image */}
            <button
              onClick={prev}
              className="sm:hidden absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(3,4,94,0.55)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="sm:hidden absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(3,4,94,0.55)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Caption Bar below image */}
          <div
            style={{
              background: "white",
              borderTop: "1px solid #e0f2fe",
              padding: "16px 24px",
            }}
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              {/* Service tag */}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                style={{
                  background: "#e0f2fe",
                  color: "#0077b6",
                  fontSize: "12px",
                  fontWeight: 700,
                  border: "1px solid #bae6fd",
                  opacity: animating ? 0 : 1,
                  transition: `opacity ${TRANSITION_MS * 0.6}ms ease`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: slide.accentColor }}
                />
                {slide.tag}
              </span>

              {/* Dot Navigation */}
              <div className="flex items-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i, i > current ? "next" : "prev")}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      background:
                        i === current
                          ? "linear-gradient(90deg, #0077b6, #00b4d8)"
                          : "#bae6fd",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div
                className="hidden sm:block rounded-full overflow-hidden"
                style={{
                  width: "80px",
                  height: "3px",
                  background: "#e0f2fe",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, #0077b6, #00b4d8)",
                    borderRadius: "9999px",
                    width: paused ? `${((current + 1) / slides.length) * 100}%` : "100%",
                    animation: paused ? "none" : `progress-fill ${AUTOPLAY_INTERVAL}ms linear`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
