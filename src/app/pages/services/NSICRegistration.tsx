import { useEffect, useState } from "react";
import {
    Award,
    ShieldCheck,
    CheckCircle2,
    ChevronDown,
    FileText,
    Users,
    TrendingUp,
    Globe,
    ClipboardCheck,
    Briefcase,
    Banknote,
    BadgeCheck,
    Package,
    CreditCard,
    Megaphone,
    ShoppingBag
} from "lucide-react";

export default function NSICRegistration() {
    useEffect(() => {
        document.title = "NSIC Registration Services | Government Tender Registration for MSMEs";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Get expert NSIC registration services under the Single Point Registration Scheme. Access government tenders, EMD exemption, and MSME benefits with professional consultancy support.");
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
                        NSIC Registration<br className="hidden sm:block" /> Services
                    </h1>
                    <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                        Single Point Registration Scheme (SPRS)
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium mt-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">NSIC Registration</span>
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
                                The <strong style={{ color: "#03045e" }}>National Small Industries Corporation (NSIC)</strong> provides registration for Micro and Small Enterprises (MSEs) under the Single Point Registration Scheme (SPRS), enabling them to participate in government procurement.
                            </p>
                            <p>
                                NSIC registration helps businesses gain access to <strong style={{ color: "#0077b6" }}>government tenders</strong>, receive exemptions on deposits, and improve their chances of securing contracts from public sector units and government departments.
                            </p>
                            <p>
                                Our consultancy offers complete assistance for NSIC registration, helping businesses become eligible suppliers for government procurement and maximize tender opportunities.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is NSIC Registration?
                            </h2>
                            <p>
                                NSIC registration is a <strong style={{ color: "#03045e" }}>government recognition</strong> provided to Micro and Small Enterprises that allows them to participate in government purchasing programs.
                            </p>
                            <p>
                                Under the Single Point Registration Scheme, registered businesses can apply for tenders issued by government departments, ministries, and public sector undertakings with <strong style={{ color: "#f77f00" }}>additional benefits and exemptions</strong>.
                            </p>
                            <p>
                                The scheme is designed to promote small businesses by reducing barriers to entry in government procurement and providing support in marketing, finance, and technology.
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

            {/* Eligibility */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Eligibility for NSIC Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            To apply for NSIC registration, businesses must meet the following conditions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "MSME Registered", desc: "Must be registered as a Micro or Small Enterprise (MSME) under Udyam.", icon: BadgeCheck },
                            { title: "Manufacturing / Service", desc: "Should be engaged in manufacturing or service activities.", icon: Briefcase },
                            { title: "1 Year Operation", desc: "Must have at least one year of business operation for full registration.", icon: ClipboardCheck },
                            { title: "Business Infrastructure", desc: "Should have proper business infrastructure and production capability.", icon: Package }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl"
                                style={{ borderBottom: "4px solid transparent" }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderBottomColor = "#f77f00";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                }}
                            >
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(72,202,228,0.1)", color: "#03045e" }}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: "#03045e" }}>{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-justify">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center mt-8 text-gray-500 text-sm italic">
                        New businesses may apply for provisional registration with limited benefits.
                    </p>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Benefits of NSIC Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            NSIC registration provides strong advantages, especially for businesses targeting government contracts.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "EMD Exemption", icon: Banknote, desc: "Registered businesses are not required to pay Earnest Money Deposit while applying for government tenders, reducing financial burden.", color: "#f77f00" },
                            { title: "Free Tender Participation", icon: FileText, desc: "MSMEs can access tender documents without paying fees and participate more easily in government procurement.", color: "#0077b6" },
                            { title: "Tender Preference", icon: Award, desc: "Registered enterprises receive preference in tender allocation and evaluation, increasing chances of winning contracts.", color: "#03045e" },
                            { title: "Reserved Procurement", icon: ShoppingBag, desc: "A portion of government procurement is reserved for MSMEs, creating more opportunities for registered businesses.", color: "#f77f00" },
                            { title: "Security Deposit Concession", icon: CreditCard, desc: "Businesses can receive relaxation or exemption from security deposits required in government contracts.", color: "#0077b6" },
                            { title: "Marketing & Credit Support", icon: Megaphone, desc: "NSIC provides marketing assistance, financial aid, technology support, and raw material procurement schemes.", color: "#03045e" }
                        ].map((b, idx) => (
                            <div
                                key={idx}
                                className="p-7 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}>
                            <ClipboardCheck size={14} style={{ color: "#0077b6" }} />
                            <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>REGISTRATION PROCESS</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            NSIC Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The registration process involves multiple steps to verify business capability and eligibility.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Application Submission", desc: "Fill out the NSIC registration form with business details, product information, and financial data." },
                            { step: 2, title: "Document Verification", desc: "Submit required details related to business operations, turnover, and infrastructure." },
                            { step: 3, title: "Technical Inspection", desc: "A third-party inspection agency verifies the business premises, machinery, and production capacity." },
                            { step: 4, title: "Approval & Certification", desc: "After successful verification, NSIC issues the registration certificate under SPRS." },
                            { step: 5, title: "Renewal", desc: "The NSIC certificate is valid for 2 years and must be renewed to continue benefits." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm" style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}>
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

            {/* Why Choose Professional Services */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(3,4,94,0.05)" }}>
                                <ShieldCheck size={32} style={{ color: "#03045e" }} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Why Choose Professional NSIC Registration Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                NSIC registration is not just form filling — it involves inspection, technical verification, and compliance with government requirements. Any errors in the application or documentation can lead to rejection or delays.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                With expert guidance, businesses can successfully register and start participating in government tenders with confidence.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-8 lg:p-10 rounded-2xl border border-blue-100 relative shadow-lg">
                            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-30" style={{ background: "#48cae4", filter: "blur(20px)" }} />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{ background: "#caf0f8", filter: "blur(20px)" }} />
                            <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative z-10" style={{ color: "#03045e" }}>
                                Our Consultancy Ensures
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Correct application and documentation",
                                    "Preparation for inspection and verification",
                                    "Avoid rejection or delays",
                                    "Guidance on using NSIC benefits effectively",
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
                            Find answers to common questions about NSIC registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="What is the Single Point Registration Scheme (SPRS)?"
                            answer="SPRS is a scheme by NSIC that allows registered MSMEs to participate in government tenders with benefits like EMD exemption, free tender access, and procurement preference."
                        />
                        <FAQItem
                            question="Who is eligible for NSIC registration?"
                            answer="Micro and Small Enterprises registered under MSME/Udyam, engaged in manufacturing or service activities, and with at least one year of operations are eligible."
                        />
                        <FAQItem
                            question="How long is the NSIC certificate valid?"
                            answer="The NSIC registration certificate is valid for 2 years from the date of issue and must be renewed to continue availing the benefits."
                        />
                        <FAQItem
                            question="Is technical inspection mandatory for NSIC registration?"
                            answer="Yes, a third-party inspection agency verifies business premises, machinery, and production capacity as part of the registration process."
                        />
                        <FAQItem
                            question="Can new businesses apply for NSIC registration?"
                            answer="New businesses with less than one year of operation can apply for provisional registration with limited benefits."
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
