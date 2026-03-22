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
    Factory,
    Building2,
    ArrowUpRight,
    Layers,
    BadgeCheck
} from "lucide-react";

export default function IEMRegistration() {
    useEffect(() => {
        document.title = "IEM Registration Services | Industrial Entrepreneur Memorandum (IEM)";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Get expert IEM registration services for large-scale industries. File Industrial Entrepreneur Memorandum (IEM) and ensure compliance with DPIIT regulations in India.");
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
                        IEM Registration<br className="hidden sm:block" /> Services
                    </h1>
                    <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                        Industrial Entrepreneur Memorandum
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium mt-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">IEM Registration</span>
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
                                Industrial Entrepreneur Memorandum (IEM) registration is required for <strong style={{ color: "#03045e" }}>large-scale industrial enterprises</strong> that are exempt from industrial licensing under Indian regulations. It serves as an official intimation to the government about the establishment or expansion of a manufacturing unit.
                            </p>
                            <p>
                                IEM registration is primarily applicable to businesses that exceed MSME limits and operate at a large industrial scale. It enables companies to legally set up or expand operations while maintaining <strong style={{ color: "#0077b6" }}>compliance with regulatory requirements</strong>.
                            </p>
                            <p>
                                Our consultancy provides complete assistance for IEM registration, helping large enterprises navigate the process efficiently and ensure compliance with government norms.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is IEM Registration?
                            </h2>
                            <p>
                                IEM (Industrial Entrepreneur Memorandum) is a filing made with the <strong style={{ color: "#03045e" }}>Department for Promotion of Industry and Internal Trade (DPIIT)</strong> by industrial units that do not require an industrial license but still need to inform the government about their operations.
                            </p>
                            <p>
                                It acts as an acknowledgment from the government that a company is setting up or expanding a manufacturing business. This registration is mainly applicable to <strong style={{ color: "#f77f00" }}>large-scale industries</strong> that fall outside the MSME category.
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

            {/* Who Needs IEM + Eligibility */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Who Needs IEM Registration?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            IEM registration is required for businesses that cross MSME limits and operate at a large industrial scale.
                        </p>
                    </div>

                    {/* Eligibility Thresholds */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ borderBottom: "4px solid #f77f00" }}>
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(247, 127, 0, 0.1)" }}>
                                <Banknote size={28} style={{ color: "#f77f00" }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: "#03045e" }}>Plant & Machinery Investment</h3>
                            <p className="text-3xl font-extrabold mb-2" style={{ color: "#f77f00" }}>₹125 Crore+</p>
                            <p className="text-gray-500 text-sm">Investment exceeding this threshold</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ borderBottom: "4px solid #0077b6" }}>
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(0, 119, 182, 0.1)" }}>
                                <TrendingUp size={28} style={{ color: "#0077b6" }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: "#03045e" }}>Annual Turnover</h3>
                            <p className="text-3xl font-extrabold mb-2" style={{ color: "#0077b6" }}>₹500 Crore+</p>
                            <p className="text-gray-500 text-sm">Turnover exceeding this threshold</p>
                        </div>
                    </div>

                    {/* Purpose of IEM */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Purpose of IEM Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            IEM registration is required in several situations related to industrial activities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Setting Up New Unit", desc: "Businesses planning to establish a new manufacturing facility must file IEM before starting operations.", icon: Building2 },
                            { title: "Expansion of Business", desc: "Existing companies expanding production capacity or operations need to file IEM.", icon: ArrowUpRight },
                            { title: "Product Diversification", desc: "If a business introduces new product lines or significantly changes operations, IEM filing is required.", icon: Layers },
                            { title: "MSME to Large Enterprise", desc: "When a business crosses MSME limits, it must shift to IEM compliance.", icon: TrendingUp }
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
                </div>
            </section>

            {/* Types of IEM */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Types of IEM (Part A & Part B)
                        </h2>
                        <p className="text-gray-600 text-lg">
                            IEM registration is divided into two parts, both of which are mandatory.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: "linear-gradient(90deg, #f77f00, #fca311)" }} />
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(247, 127, 0, 0.1)" }}>
                                <FileText size={24} style={{ color: "#f77f00" }} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: "#03045e" }}>IEM Part A</h3>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                Filed when planning to set up a new unit or expand an existing one. It includes project details such as <strong style={{ color: "#03045e" }}>investment, location, and production capacity</strong>.
                            </p>
                            <div className="mt-4 px-4 py-2 rounded-lg inline-block" style={{ background: "#f77f0015" }}>
                                <span className="text-sm font-semibold" style={{ color: "#f77f00" }}>Filed Before Operations</span>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: "linear-gradient(90deg, #0077b6, #48cae4)" }} />
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(0, 119, 182, 0.1)" }}>
                                <ClipboardCheck size={24} style={{ color: "#0077b6" }} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: "#03045e" }}>IEM Part B</h3>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                Filed after the commencement of commercial production, confirming that the unit is operational with <strong style={{ color: "#03045e" }}>actual production details</strong>.
                            </p>
                            <div className="mt-4 px-4 py-2 rounded-lg inline-block" style={{ background: "#0077b615" }}>
                                <span className="text-sm font-semibold" style={{ color: "#0077b6" }}>Filed After Production Starts</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-center mt-8 text-gray-500 text-sm italic">
                        Both parts must be completed for full compliance.
                    </p>
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
                            IEM Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The process is now fully online and streamlined through government systems.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Registration on Portal", desc: "Businesses must register on the National Single Window System (NSWS) portal." },
                            { step: 2, title: "Filing IEM Part A", desc: "Submit details of the proposed industrial project, including investment, sector, and production capacity." },
                            { step: 3, title: "Acknowledgment Generation", desc: "An acknowledgment certificate is issued after submission." },
                            { step: 4, title: "Filing IEM Part B", desc: "After starting commercial production, Part B is filed with actual production details." },
                            { step: 5, title: "Compliance Updates", desc: "Any major changes in business operations must be updated through the portal." }
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

            {/* Benefits */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Benefits of IEM Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            IEM registration provides several advantages for large-scale industrial businesses.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Ease of Doing Business", icon: Briefcase, desc: "Simplifies regulatory requirements for industries that do not require licensing.", color: "#f77f00" },
                            { title: "Government Recognition", icon: BadgeCheck, desc: "Acts as official recognition of industrial operations by the government.", color: "#0077b6" },
                            { title: "Incentives & Subsidies", icon: Banknote, desc: "Enables businesses to benefit from central and state government schemes and incentives.", color: "#03045e" },
                            { title: "Business Credibility", icon: Award, desc: "Enhances trust among investors, financial institutions, and stakeholders.", color: "#f77f00" },
                            { title: "Freedom to Expand", icon: TrendingUp, desc: "Allows companies to expand or diversify without complex licensing procedures.", color: "#0077b6" },
                            { title: "Lifetime Validity", icon: ShieldCheck, desc: "IEM registration generally has lifetime validity, with updates required only for major changes.", color: "#03045e" }
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

            {/* Why Choose Professional Services */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(3,4,94,0.05)" }}>
                                <ShieldCheck size={32} style={{ color: "#03045e" }} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Why Choose Professional IEM Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                IEM registration is not a basic compliance task — it involves detailed project reporting, classification, and regulatory understanding. Any errors in documentation can lead to delays or compliance issues.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                With expert guidance, businesses can complete IEM registration efficiently and focus on scaling operations.
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
                                    "Correct eligibility assessment",
                                    "Accurate project detail preparation",
                                    "Avoid compliance errors",
                                    "Handle Part A and Part B filings properly",
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
            <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: "#03045e" }}>
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Find answers to common questions about IEM registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="What is IEM registration?"
                            answer="IEM (Industrial Entrepreneur Memorandum) is a filing made with DPIIT by large-scale industrial units that are exempt from industrial licensing but need to inform the government about their operations."
                        />
                        <FAQItem
                            question="Who is eligible for IEM registration?"
                            answer="Businesses with investment in plant and machinery exceeding ₹125 crore or annual turnover exceeding ₹500 crore are eligible for IEM registration."
                        />
                        <FAQItem
                            question="What is the difference between IEM Part A and Part B?"
                            answer="Part A is filed before starting operations (planning stage), while Part B is filed after commercial production has commenced."
                        />
                        <FAQItem
                            question="How long is IEM registration valid?"
                            answer="IEM registration generally has lifetime validity, but businesses must update information in case of major changes like expansion or diversification."
                        />
                        <FAQItem
                            question="Is IEM registration done online?"
                            answer="Yes, the process is fully online through the National Single Window System (NSWS) portal."
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
