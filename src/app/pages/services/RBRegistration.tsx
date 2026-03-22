import { useEffect, useState } from "react";
import {
    Award,
    ShieldCheck,
    CheckCircle2,
    ChevronDown,
    Users,
    TrendingUp,
    ClipboardCheck,
    Briefcase,
    Building2,
    HardHat,
    Layers,
    BadgeCheck,
    ArrowUpRight,
    Wrench
} from "lucide-react";

export default function RBRegistration() {
    useEffect(() => {
        document.title = "R&B Class Registration Services | Road & Building Contractor License Gujarat";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Get expert R&B class registration services for contractors in Gujarat. Apply for Road & Building contractor license and become eligible for government tenders.");
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
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 leading-tight">
                        R&B Class Registration<br className="hidden sm:block" /> Services
                    </h1>
                    <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                        Road & Building Contractor License
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium mt-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">R&B Registration</span>
                    </div>
                </div>
            </section>

            {/* Intro & Overview */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left: Content */}
                        <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                            <p>
                                R&B (Road & Building) Class Registration is required for contractors who want to undertake <strong style={{ color: "#03045e" }}>government construction projects</strong> related to roads, buildings, and infrastructure.
                            </p>
                            <p>
                                In Gujarat, contractors must register under the Roads & Buildings Department or relevant government authorities to become eligible for <strong style={{ color: "#0077b6" }}>government tenders</strong>. Without this registration, businesses cannot legally bid for public construction projects.
                            </p>
                            <p>
                                Our consultancy provides complete assistance for R&B class registration, helping contractors obtain the required classification and become eligible for government work.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is R&B Class Registration?
                            </h2>
                            <p>
                                R&B Class Registration is a <strong style={{ color: "#03045e" }}>contractor enlistment system</strong> where contractors are classified into different categories based on their experience, financial capacity, and technical capability.
                            </p>
                            <p>
                                This classification determines the type and value of projects a contractor can undertake. It ensures that only qualified contractors are allowed to execute <strong style={{ color: "#f77f00" }}>government infrastructure projects</strong>.
                            </p>
                            <p>
                                The registration is mandatory for participating in government tenders related to roads, buildings, and public works.
                            </p>
                        </div>

                        {/* Right: Contact Form */}
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
                                        style={{ background: "#00b4d8", boxShadow: "0 4px 14px rgba(0, 180, 216, 0.4)", border: "none", cursor: "pointer" }}
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

            {/* Contractor Classes */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Types of Contractor Classes
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Contractors are divided into different classes depending on their capability and project size. Higher class = higher project value eligibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { cls: "Class I", label: "Large-Scale Projects", desc: "Eligible for large-scale government projects. Requires high experience and financial capacity.", color: "#03045e", borderColor: "#03045e" },
                            { cls: "Class II", label: "Medium Projects", desc: "Suitable for medium-sized construction projects. Requires moderate experience and resources.", color: "#0077b6", borderColor: "#0077b6" },
                            { cls: "Class III", label: "Smaller Projects", desc: "Eligible for smaller projects. Lower experience and financial requirements.", color: "#0096c7", borderColor: "#0096c7" },
                            { cls: "Class IV", label: "Small Works", desc: "Suitable for small works and maintenance contracts. Minimal requirements for entry.", color: "#00b4d8", borderColor: "#00b4d8" }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: item.borderColor }} />
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                                    style={{ background: `${item.color}15` }}
                                >
                                    <span className="text-xl font-extrabold" style={{ color: item.color }}>{item.cls.split(" ")[1]}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1" style={{ color: "#03045e" }}>{item.cls}</h3>
                                <p className="text-sm font-semibold mb-3" style={{ color: item.color }}>{item.label}</p>
                                <p className="text-gray-600 leading-relaxed text-sm text-justify">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Needs R&B */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Who Needs R&B Registration?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Anyone who wants government construction contracts needs this registration.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { title: "Civil Contractors", icon: HardHat },
                            { title: "Construction Companies", icon: Building2 },
                            { title: "Builders & Developers", icon: Layers },
                            { title: "Infrastructure Providers", icon: Wrench },
                            { title: "Engineering Firms", icon: Briefcase }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                style={{ minWidth: "250px", width: "calc(33.333% - 16px)" }}
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(72,202,228,0.1)" }}>
                                    <item.icon size={24} style={{ color: "#03045e" }} />
                                </div>
                                <span className="font-bold text-lg" style={{ color: "#03045e" }}>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Benefits of R&B Class Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            R&B registration opens the door to government construction projects and business growth.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "Government Tender Eligibility", icon: ClipboardCheck, desc: "Registered contractors can legally participate in government tenders for road and building projects.", color: "#f77f00" },
                            { title: "Increased Opportunities", icon: TrendingUp, desc: "Access to public sector projects significantly increases revenue potential.", color: "#0077b6" },
                            { title: "Higher Credibility", icon: Award, desc: "Government registration enhances trust and credibility in the market.", color: "#03045e" },
                            { title: "Project-Based Growth", icon: ArrowUpRight, desc: "Contractors can upgrade their class over time and handle larger projects.", color: "#f77f00" },
                            { title: "Legal Compliance", icon: ShieldCheck, desc: "Ensures compliance with government rules and regulations for construction work.", color: "#0077b6" }
                        ].map((b, idx) => (
                            <div
                                key={idx}
                                className="p-7 bg-white rounded-2xl border border-gray-100 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${b.color}15` }}>
                                    <b.icon size={24} style={{ color: b.color }} />
                                </div>
                                <h3 className="font-bold text-lg" style={{ color: "#03045e" }}>{b.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Process */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}>
                            <ClipboardCheck size={14} style={{ color: "#0077b6" }} />
                            <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>REGISTRATION PROCESS</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            R&B Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The registration process involves verification of qualifications, experience, and financial capacity.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Application Submission", desc: "Submit application with contractor details, experience, and financial information." },
                            { step: 2, title: "Document Verification", desc: "Authorities verify qualifications, past projects, and financial capacity." },
                            { step: 3, title: "Technical Evaluation", desc: "Assessment of technical capability and infrastructure." },
                            { step: 4, title: "Class Allotment", desc: "Contractor is assigned a class (I, II, III, or IV) based on evaluation." },
                            { step: 5, title: "Certificate Issuance", desc: "Registration certificate is issued, allowing participation in tenders." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm" style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}>
                                <div
                                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                    style={{ background: "#f77f00", boxShadow: "0 4px 10px rgba(247, 127, 0, 0.3)" }}
                                >
                                    {s.step}
                                </div>
                                <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: "#03045e" }}>{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-justify">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Eligibility Criteria
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Eligibility depends on the contractor class. Higher classes require stronger financial and technical credentials.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {[
                            { title: "Past Project Experience", desc: "Documented proof of completed projects relevant to the class applied for." },
                            { title: "Financial Strength", desc: "Adequate working capital and financial stability to handle project requirements." },
                            { title: "Technical Qualifications", desc: "Qualified engineers and technical staff on the team." },
                            { title: "Business Registration", desc: "Valid business registration and legal compliance documentation." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <CheckCircle2 size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#0077b6" }} />
                                <div>
                                    <h4 className="font-bold mb-1" style={{ color: "#03045e" }}>{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Professional Services */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(3,4,94,0.05)" }}>
                                <ShieldCheck size={32} style={{ color: "#03045e" }} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Why Choose Professional R&B Registration Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                R&B registration is not simple form filling. It involves technical eligibility evaluation, proper classification selection, documentation and financial proof, and government verification.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Professional consultancy ensures a smooth approval process and helps contractors avoid rejection.
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
                                    "Avoid rejection and delays",
                                    "Select the correct contractor class",
                                    "Prepare a strong application",
                                    "Speed up the approval process",
                                    "Complete end-to-end support"
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
            <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: "#03045e" }}>
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Find answers to common questions about R&B class registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="What is R&B class registration?"
                            answer="R&B Class Registration is a contractor enlistment system under the Roads & Buildings Department where contractors are classified into classes (I to IV) based on experience, financial capacity, and technical capability."
                        />
                        <FAQItem
                            question="How many contractor classes are there?"
                            answer="There are four classes: Class I (large projects), Class II (medium projects), Class III (smaller projects), and Class IV (small works and maintenance)."
                        />
                        <FAQItem
                            question="Can I upgrade my contractor class?"
                            answer="Yes, contractors can apply for class upgrades over time by demonstrating increased experience, financial strength, and technical capacity."
                        />
                        <FAQItem
                            question="Is R&B registration mandatory for government tenders?"
                            answer="Yes, without R&B class registration, contractors cannot legally bid for government construction projects related to roads, buildings, and public works."
                        />
                        <FAQItem
                            question="What documents are required for R&B registration?"
                            answer="Typical documents include past project experience records, financial statements, technical qualifications of staff, business registration certificates, and other compliance documents."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
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
