import { Star, Quote, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Rajesh Panchal",
    role: "Director",
    company: "Innovative Seatings Private Limited",
    service: "GeM & ISO Certification",
    rating: 5,
    text: "Dear Mr. Bharat,\nI am writing this letter as a humble note of appreciation for the outstanding service provided by you. I was facing the problem of GEM registration, product uploading, bid participating related and in many other ISO certifications work.\n\nI was attended by Mr. Bharat, working as director in Tatva Consultancy Service. Mr. Bharat hardly denied to perform any task, he provided almost instant response and support which is appreciable. The ability to provide the resolution quickly exceeded my expectations.\n\nI really commend the prompt service provided by Mr. Bharat. He also advised me what certificate require and which is not require so that unnecessary investment can be saved. I am really pleased with the knowledge and skills of him. Great service makes your customers feel that you care about developing a long-term relationship that means more than just making a sale.\n\nI would love to recommend your company to anyone who needs any registration and paper work related advice in business should contact to Mr. Bharat. Keep up the good work.\n\nOn behalf of entire team of ISPL, may I again say thank you and congratulations!\n\nRespectfully,\nRajesh Panchal (Director)",
    initials: "RP",
    color: "#0077b6",
  },
  {
    name: "Kirti Thacker",
    role: "Managing Director",
    company: "Katira Construction Ltd.",
    service: "MSME & Certificates",
    rating: 5,
    text: "Dear Sir,\n\nWe are glad to inform you that we are associated with Tatva Consultancy Services since 2016 and have opted for various services from you. We are happy & satisfied with your services, prompt and faithful information, regular updates on MSME and other certificates. We definitely refer to Tatva Consultancy if someone wishes to opt services which you are offering. We wish best of luck to you and your team for further services.\n\nThanking You,\n\nFor: Katira Construction ltd.",
    initials: "KT",
    color: "#023e8a",
  },
  {
    name: "Mayank Pandya",
    role: "Proprietor",
    company: "K B Industries",
    service: "Compliance & Registration",
    rating: 5,
    text: "Dear Sir,\n\nWe are writing herewith to thank you for the quality of services provided by your firm. We sincerely appreciate your efficient, gracious customer service support, detailed and accountability you have demonstrated on each assignment and the way you help us to keep all updates regarding all services.\n\nWe have and will continue to recommend your service to our contacts. We look forward to continuing this relationship.\n\nWe wish all the best luck for your future assignments.\n\nThanking you,\nFor K B Industries",
    initials: "MP",
    color: "#00b4d8",
  },
  {
    name: "Dinesh J. Patel",
    role: "Proprietor",
    company: "ORKAY GEARS",
    service: "NSIC, MSME and ISO",
    rating: 5,
    text: "Dear Sir,\n\nWe are glad to inform you that we are associated with Tatva Consultancy Services and have opted for NSIC, MSME AND ISO. We are happy & satisfied with your service, prompt and faithful information, regular updates on MSME and other certificates. We definitely refer to Tatva Consultancy if someone wishes to opt services which you are offering. We wish best of luck to you and your team for further services.\n\nThanking You,\n\nFor : ORKAY GEARS",
    initials: "DP",
    color: "#0096c7",
  },
  {
    name: "Director",
    role: "Director",
    company: "SAIEX Flameproof Equipments Pvt. Ltd.",
    service: "MSME, NSIC, ISO & GEM",
    rating: 5,
    text: "Dear Sir,\n\nWe are glad to inform you that we are associated with Tatva Consultancy Services Since 2017 and have opted various Services from you.\n\nWe are happy & satisfied with your services, Prompt and faithful information, regular updates on MSME and other certificates.\n\nWe Trust you on the name of Bharat Prajapati as we have to submit all the financial, banking credential & data which are the most risky in this era.\n\nWe definitely refer Tatva Consultancy if someone wish to opt services which you are offers.\n\nAll the Best!!!\n\nFor Saiex Flameproof Equipments Pvt Ltd.",
    initials: "SF",
    color: "#0077b6",
  },
  {
    name: "Dinesh K Patel",
    role: "General Manager (Operations)",
    company: "Sahitya Mudranalaya Pvt. Ltd.",
    service: "Multiple Services",
    rating: 5,
    text: "To Whomsoever It May Concern,\n\nThis is to inform all concerned that we have engaged Tatva Consultancy Services, Sola, Ahmedabad for their different type of services as per our requirement and they have provided their services as well as guidance in the matter satisfactorily and within time schedule.\n\nThis certificate is issued on their request.\n\nFor Sahitya Mudranalaya Pvt., Ltd.",
    initials: "DK",
    color: "#023e8a",
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-scroll
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  const truncateText = (text: string, maxLen: number) => {
    if (text.length <= maxLen) return text;
    return text.substring(0, maxLen).trim() + "...";
  };

  // Calculate width percentage per card (accounting for gap)
  const gapPx = 24; // gap-6
  const cardWidthPercent = 100 / itemsPerView;
  const translateX = currentIndex * cardWidthPercent;

  return (
    <section
      id="testimonials"
      style={{ background: "#f0f9ff", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateX}%)`,
              gap: `${gapPx}px`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col p-6 sm:p-8 rounded-2xl bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                style={{
                  width: `calc(${cardWidthPercent}% - ${((itemsPerView - 1) * gapPx) / itemsPerView}px)`,
                  minHeight: "380px",
                  border: "1.5px solid #e2f4fb",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <Quote size={28} style={{ color: t.color, opacity: 0.2 }} />
                  <StarRating count={t.rating} />
                </div>

                <p
                  className="flex-1 text-gray-700 italic cursor-pointer"
                  style={{ fontSize: "14px", lineHeight: 1.7 }}
                  onClick={() => setSelectedTestimonial(t)}
                >
                  "{truncateText(t.text, 180)}"
                  {t.text.length > 180 && (
                    <span
                      className="inline-block ml-1 font-semibold not-italic"
                      style={{ color: t.color }}
                    >
                      Read more
                    </span>
                  )}
                </p>

                <div className="mt-auto pt-5 flex items-center gap-3 border-t border-gray-100">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ background: `linear-gradient(135deg, ${t.color}, #48cae4)` }}
                  >
                    <span style={{ color: "white", fontSize: "14px", fontWeight: 700 }}>
                      {t.initials}
                    </span>
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <p className="text-[#03045e] font-bold text-sm truncate">{t.name}</p>
                    <p className="text-gray-500 text-xs font-medium truncate">
                      {t.role}{t.company ? `, ${t.company}` : ""}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        color: t.color,
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {t.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-white text-[#03045e] shadow-md hover:bg-[#03045e] hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-[#f77f00]" : "w-2.5 bg-blue-200 hover:bg-blue-300"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-white text-[#03045e] shadow-md hover:bg-[#03045e] hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Read More Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(3, 4, 94, 0.4)", backdropFilter: "blur(4px)" }}
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${selectedTestimonial.color}, #48cae4)` }}
                >
                  <span style={{ color: "white", fontSize: "14px", fontWeight: 700 }}>
                    {selectedTestimonial.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-[#03045e] font-bold text-base sm:text-lg truncate">{selectedTestimonial.name}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm truncate">{selectedTestimonial.role}, {selectedTestimonial.company}</p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <StarRating count={selectedTestimonial.rating} />
                    <span style={{ color: selectedTestimonial.color, fontSize: "11px", fontWeight: 700, padding: "2px 8px", background: `${selectedTestimonial.color}15`, borderRadius: "100px" }}>
                      {selectedTestimonial.service}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-700 transition-colors flex-shrink-0 ml-2"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 overflow-y-auto max-h-[60vh]">
              <div className="relative z-10 space-y-4">
                {selectedTestimonial.text.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed text-sm sm:text-[15.5px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
