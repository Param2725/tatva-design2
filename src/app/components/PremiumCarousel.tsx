import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ==========================================
// CONFIGURATION & CUSTOMIZATION
// ==========================================
// Adjust the speed of the auto-scroll here (in milliseconds)
const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per slide for a medium-paced smooth feel
const TRANSITION_DURATION = 800; // 0.8s transition for a very soft, premium fade

// SEO Text & Image Data
// Easily customize the images and SEO text here.
// Keep seoText to 12-15 words max for best results.
const carouselData = [
    {
        id: 1,
        src: "/carousel/business-registration.png",
        alt: "Business Registration Services",
        seoText: "Complete business registration services from Private Limited Company to OPC and LLP."
    },
    {
        id: 2,
        src: "/carousel/trademark.png",
        alt: "Trademark Registration Process",
        seoText: "Streamlined 6-step trademark registration process to protect your brand identity."
    },
    {
        id: 3,
        src: "/carousel/iso.png",
        alt: "ISO & Compliance Certifications",
        seoText: "Comprehensive ISO and compliance certifications for quality and security management."
    },
    {
        id: 4,
        src: "/carousel/gem.png",
        alt: "GeM Registration Online Service Provider",
        seoText: "End-to-end GeM portal registration and online service provider solutions."
    },
    {
        id: 5,
        src: "/carousel/iem.png",
        alt: "One Stop Solution For IEM Registration",
        seoText: "One-stop solution for complete IEM registration and continuous expert support."
    }
];

export function PremiumCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // --- Handlers ---
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // --- Autoplay Logic ---
    // Runs the auto-scroll at the specified interval. Pauses on hover or focus.
    useEffect(() => {
        if (isPaused) return;
        timerRef.current = setTimeout(nextSlide, AUTOPLAY_INTERVAL);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [currentIndex, isPaused, nextSlide]);

    return (
        <section className="w-full py-12 bg-slate-50 flex justify-center">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* 
          Carousel Container: 
          - Aspect ratio maintained (16/7 or standard wide)
          - Rounded corners (16px) 
          - Subtle clean shadow 
        */}
                <div
                    className="relative w-full overflow-hidden rounded-[16px] bg-[#0a192f] shadow-[0_8px_30px_rgb(0,0,0,0.12)] group"
                    style={{ aspectRatio: '16/7', minHeight: '300px' }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Premium Startup Registration Services Gallery"
                >
                    {/* Slides Rendering */}
                    {carouselData.map((slide, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div
                                key={slide.id}
                                className="absolute inset-0 w-full h-full transition-opacity ease-in-out"
                                style={{
                                    opacity: isActive ? 1 : 0,
                                    transitionDuration: `${TRANSITION_DURATION}ms`,
                                    zIndex: isActive ? 10 : 0,
                                    pointerEvents: isActive ? 'auto' : 'none'
                                }}
                                aria-hidden={!isActive}
                            >
                                {/* 
                  Lazy load all images except the first one for performance
                  Ensure images cover the area without distortion 
                */}
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    className="w-full h-full object-cover"
                                />

                                {/* 
                  Accessibility & Visuals:
                  Dark gradient overlay strictly at the bottom to make SEO text "pop" 
                  while preserving image brightness above.
                */}
                                <div
                                    className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-[#020617]/90 via-[#020617]/40 to-transparent"
                                    aria-hidden="true"
                                />

                                {/* SEO Text Overlay (Bottom-Left) */}
                                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-[85%] sm:max-w-[70%] z-20">
                                    <p
                                        className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed tracking-wide drop-shadow-lg"
                                        style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
                                    >
                                        {slide.seoText}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    {/* 
            Controls: Arrows (Visible on Hover/Focus) 
            Premium UX: Hidden by default, fade and slide in slightly on hover
            Uses Orange CTA accent (#f97316 / Tailwind orange-500)
          */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-orange-500 text-white backdrop-blur-md border border-white/20 hover:border-orange-500 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-4 outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-orange-500 text-white backdrop-blur-md border border-white/20 hover:border-orange-500 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4 outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* 
            Controls: Navigation Dots (Bottom-Right Layout)
            Indicates progress and allows manual jumping
          */}
                    <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex items-center gap-2">
                        {carouselData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${currentIndex === index
                                    ? "w-8 h-2 bg-orange-500" // Active state (Orange Accent)
                                    : "w-2 h-2 bg-white/50 hover:bg-white/90" // Inactive state
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={currentIndex === index ? "true" : "false"}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PremiumCarousel;
