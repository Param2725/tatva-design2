import { useEffect, useState } from "react";
import {
    ShieldCheck,
    CheckCircle2,
    ChevronDown,
    TrendingUp,
    ClipboardCheck,
    Award,
    Leaf,
    BadgeCheck,
    Flame,
    Briefcase,
    Star,
    AlertTriangle,
    Scale
} from "lucide-react";

export default function IndustrialCompliance() {
    useEffect(() => {
        document.title = "GPCB, BIS, IBR, EIL & Credit Rating Services | Industrial Compliance";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Get expert assistance for GPCB approval, BIS certification, IBR registration, EIL approval, and business credit rating services. Complete industrial compliance solutions.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-16 lg:pt-18 bg-gray-50">
            {/* Hero Banner */}
            <section
                className="relative py-16 lg:py-24 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #03045e 0%, #023e8a 100%)", color: "white" }}
            >
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(#48cae4 1px, transparent 1px)", backgroundSize: "30px 30px" }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        Industrial Compliance<br className="hidden sm:block" /> Services
                    </h1>
                    <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                        GPCB · BIS · IBR · EIL · Credit Rating
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium mt-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: "none" }}>Home</a>
                        <span>›</span>
                        <span className="text-white">Industrial Compliance</span>
                    </div>
                </div>
            </section>

            {/* Intro & Overview */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                            <p>
                                Businesses involved in manufacturing, infrastructure, and industrial activities must comply with various <strong style={{ color: "#03045e" }}>regulatory approvals and certifications</strong>. These compliances ensure that operations meet government standards related to safety, quality, environment, and performance.
                            </p>
                            <p>
                                Our consultancy provides complete assistance for multiple industrial approvals including <strong style={{ color: "#0077b6" }}>GPCB, BIS certification, IBR approval, EIL certification, and credit rating services</strong>.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                            <div className="sticky top-28 rounded-xl overflow-hidden shadow-2xl"
                                style={{ background: "linear-gradient(135deg, #023e8a 0%, #0077b6 100%)", padding: "40px 30px" }}>
                                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20" style={{ background: "#48cae4", filter: "blur(40px)" }} />
                                <h3 className="text-3xl font-bold mb-8 text-center text-white relative z-10">Contact Us Now!</h3>
                                <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <input type="text" placeholder="Your Name" className="w-full bg-transparent border border-white/40 rounded text-white px-4 py-3 placeholder:text-white/70 focus:outline-none focus:border-white transition-colors" required />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Your Email" className="w-full bg-transparent border border-white/40 rounded text-white px-4 py-3 placeholder:text-white/70 focus:outline-none focus:border-white transition-colors" required />
                                    </div>
                                    <div>
                                        <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border border-white/40 rounded text-white px-4 py-3 placeholder:text-white/70 focus:outline-none focus:border-white transition-colors" required />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full mt-4 font-bold py-3.5 px-4 rounded text-white transition-transform hover:-translate-y-1"
                                        style={{ background: "#00b4d8", boxShadow: "0 4px 14px rgba(0,180,216,0.4)", border: "none", cursor: "pointer" }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#0096c7"; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#00b4d8"; }}
                                    >
                                        SEND
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Cards — Each Compliance */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}>
                            <ClipboardCheck size={14} style={{ color: "#0077b6" }} />
                            <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>OUR COMPLIANCE SERVICES</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Compliance & Certification Services
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Each compliance serves a specific regulatory purpose. We help businesses navigate all of them efficiently.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* GPCB */}
                        <ComplianceCard
                            icon={Leaf}
                            color="#0d9488"
                            title="GPCB — Pollution Control Board Approval"
                            description="GPCB (Gujarat Pollution Control Board) approval is required for industries to ensure that their operations comply with environmental regulations. This approval is mandatory before starting industrial operations."
                            points={[
                                "Control pollution (air, water, waste)",
                                "Ensure environmental safety",
                                "Grant consent to establish and operate"
                            ]}
                            label="Key Purpose"
                        />

                        {/* BIS */}
                        <ComplianceCard
                            icon={BadgeCheck}
                            color="#0077b6"
                            title="BIS — Bureau of Indian Standards Certification"
                            description="BIS certification ensures that products meet Indian quality and safety standards. It is especially important for manufacturers selling regulated products in India."
                            points={[
                                "Improves product credibility",
                                "Mandatory for certain products",
                                "Allows use of quality certification marks"
                            ]}
                            label="Key Benefits"
                        />

                        {/* IBR */}
                        <ComplianceCard
                            icon={Flame}
                            color="#f77f00"
                            title="IBR — Indian Boiler Regulations Registration"
                            description="IBR certification is required for industries that use boilers or pressure vessels. This is critical for manufacturing and processing industries."
                            points={[
                                "Ensure safety of boiler operations",
                                "Compliance with industrial safety standards",
                                "Approval for installation and usage"
                            ]}
                            label="Key Purpose"
                        />

                        {/* EIL */}
                        <ComplianceCard
                            icon={Briefcase}
                            color="#03045e"
                            title="EIL — Engineers India Limited Certification"
                            description="EIL certification is often required for vendors and contractors involved in large industrial or government projects."
                            points={[
                                "Vendor approval for projects",
                                "Increased eligibility for contracts",
                                "Higher industry credibility"
                            ]}
                            label="Key Benefits"
                        />

                        {/* Credit Rating */}
                        <ComplianceCard
                            icon={Star}
                            color="#7c3aed"
                            title="Credit Rating for Businesses"
                            description="Credit rating evaluates the financial strength and credibility of a business. A strong rating opens doors to better financial opportunities."
                            points={[
                                "Improves loan approval chances",
                                "Builds trust with financial institutions",
                                "Helps in government tenders and contracts"
                            ]}
                            label="Key Benefits"
                        />
                    </div>
                </div>
            </section>

            {/* Why These Matter */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(247,127,0,0.08)" }}>
                                <AlertTriangle size={32} style={{ color: "#f77f00" }} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Why These Compliance Services Matter
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4 text-justify">
                                Most businesses ignore industrial compliances until they are forced to comply—and that's a mistake. Delayed compliance leads to penalties, project delays, and lost opportunities.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Proper compliance from the start helps businesses operate smoothly and grow without legal hurdles.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Avoid Legal Penalties", icon: Scale, desc: "Stay on the right side of regulations and avoid fines.", color: "#f77f00" },
                                { title: "Operational Efficiency", icon: TrendingUp, desc: "Streamlined compliance improves overall operations.", color: "#0077b6" },
                                { title: "Government Projects", icon: ClipboardCheck, desc: "Gain access to tenders and public sector contracts.", color: "#03045e" },
                                { title: "Business Credibility", icon: Award, desc: "Build long-term trust with clients and partners.", color: "#7c3aed" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}15` }}>
                                        <item.icon size={24} style={{ color: item.color }} />
                                    </div>
                                    <h3 className="font-bold mb-2" style={{ color: "#03045e" }}>{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Professional Consultancy */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(3,4,94,0.05)" }}>
                                <ShieldCheck size={32} style={{ color: "#03045e" }} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Why Choose Professional Consultancy?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                Handling multiple industrial compliances can be complex due to different departments, regulations, and approval processes. Each compliance has its own requirements and timelines.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                A professional consultancy ensures all compliances are handled correctly, efficiently, and in a timely manner.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-8 lg:p-10 rounded-2xl border border-blue-100 relative shadow-lg">
                            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-30" style={{ background: "#48cae4", filter: "blur(20px)" }} />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{ background: "#caf0f8", filter: "blur(20px)" }} />
                            <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative z-10" style={{ color: "#03045e" }}>
                                Our Consultancy Helps You
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Identify required approvals for your industry",
                                    "Manage documentation and applications",
                                    "Reduce delays and rejections",
                                    "Ensure full compliance across departments",
                                    "End-to-end support for all certifications"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#0077b6" }} />
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: "#03045e" }}>
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Common questions about industrial compliance and certification services.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="What is GPCB approval and who needs it?"
                            answer="GPCB (Gujarat Pollution Control Board) approval is required for all industries to ensure compliance with environmental regulations. It includes consent to establish (CTE) and consent to operate (CCA)."
                        />
                        <FAQItem
                            question="Is BIS certification mandatory?"
                            answer="BIS certification is mandatory for certain categories of products as notified by the government. For other products, it is voluntary but highly recommended for credibility."
                        />
                        <FAQItem
                            question="Which industries need IBR registration?"
                            answer="Any industry that uses boilers, pressure vessels, or steam-generating equipment must obtain IBR certification to ensure safety compliance."
                        />
                        <FAQItem
                            question="What is the benefit of a good credit rating?"
                            answer="A good credit rating improves loan approval chances, builds trust with financial institutions, and helps businesses participate in government tenders and contracts."
                        />
                        <FAQItem
                            question="Can you handle multiple compliances together?"
                            answer="Yes, our consultancy provides end-to-end support for all industrial compliances including GPCB, BIS, IBR, EIL, and credit rating services under one roof."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

/* Reusable Compliance Card Component */
function ComplianceCard({
    icon: Icon,
    color,
    title,
    description,
    points,
    label
}: {
    icon: React.ElementType;
    color: string;
    title: string;
    description: string;
    points: string[];
    label: string;
}) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col lg:flex-row">
                {/* Left accent bar */}
                <div className="lg:w-2 w-full h-2 lg:h-auto flex-shrink-0" style={{ background: color }} />

                <div className="p-8 lg:p-10 flex-1">
                    <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                            <Icon size={28} style={{ color }} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: "#03045e" }}>{title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-5 text-justify">{description}</p>

                            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ background: `${color}15`, color }}>
                                {label}
                            </div>
                            <ul className="space-y-2">
                                {points.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={16} className="flex-shrink-0" style={{ color }} />
                                        <span className="text-gray-700 text-sm">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200"
            style={{ boxShadow: isOpen ? "0 4px 12px rgba(0,0,0,0.05)" : "none" }}
        >
            <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-gray-900 pr-4">{question}</span>
                <ChevronDown
                    size={20}
                    className="text-gray-400 flex-shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </button>
            <div
                className="px-6 overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? "200px" : "0",
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? "20px" : "0"
                }}
            >
                <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}
