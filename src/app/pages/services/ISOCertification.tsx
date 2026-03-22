import { useEffect, useState } from "react";
import {
    Award,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    FileText,
    Settings,
    Users,
    TrendingUp,
    Globe,
    Target,
    ClipboardCheck,
    Briefcase,
    BarChart3,
    Lock
} from "lucide-react";

export default function ISOCertification() {
    useEffect(() => {
        document.title = "ISO Certification & Implementation Services in India | ISO Consultants";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Get expert ISO implementation and certification services. Achieve ISO compliance, improve business processes, and obtain ISO certification with professional consultancy support.");
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
                        ISO Certification &<br className="hidden sm:block" /> Implementation Services
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">ISO Certification & Implementation</span>
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
                                ISO standards help businesses improve <strong style={{ color: "#03045e" }}>quality, efficiency, and credibility</strong> in a competitive market. Implementing ISO standards ensures that business processes meet international benchmarks, while ISO certification provides official recognition of compliance.
                            </p>
                            <p>
                                Our consultancy offers complete <strong style={{ color: "#0077b6" }}>ISO implementation and certification services</strong>, guiding businesses from initial assessment to final certification. We help organizations streamline processes, maintain quality standards, and achieve globally recognized certifications.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is ISO?
                            </h2>
                            <p>
                                The <strong style={{ color: "#03045e" }}>International Organization for Standardization</strong> develops international standards that ensure quality, safety, and efficiency across industries. ISO standards are widely accepted and help businesses build trust with customers, partners, and regulatory authorities.
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

            {/* Common ISO Standards */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Commonly Used ISO Standards
                        </h2>
                        <p className="text-gray-600 text-lg">
                            ISO standards are widely accepted and help businesses build trust with customers, partners, and regulatory authorities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "ISO 9001", subtitle: "Quality Management System", desc: "The most popular ISO standard focused on maintaining consistent quality in products and services.", icon: Award },
                            { title: "ISO 14001", subtitle: "Environmental Management", desc: "Helps organizations minimize their environmental impact and comply with environmental regulations.", icon: Globe },
                            { title: "ISO 27001", subtitle: "Information Security", desc: "Framework for managing sensitive information security, ensuring data protection and cybersecurity.", icon: Lock },
                            { title: "ISO 22000", subtitle: "Food Safety Management", desc: "Ensures food safety across the supply chain, from production to consumption.", icon: ShieldCheck }
                        ].map((iso, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl group"
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
                                    <iso.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-1" style={{ color: "#03045e" }}>{iso.title}</h3>
                                <p className="text-sm font-semibold mb-3" style={{ color: "#f77f00" }}>{iso.subtitle}</p>
                                <p className="text-gray-600 leading-relaxed text-sm text-justify">{iso.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ISO Implementation Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}>
                            <Settings size={14} style={{ color: "#0077b6" }} />
                            <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>IMPLEMENTATION</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            ISO Implementation Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            ISO implementation is the process of aligning your business operations with the requirements of a specific ISO standard. Without proper implementation, certification is not possible.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Gap Analysis", desc: "Evaluate existing business processes to identify gaps between current practices and ISO requirements." },
                            { step: 2, title: "Documentation Development", desc: "Prepare required documents such as policies, manuals, and standard operating procedures." },
                            { step: 3, title: "Process Alignment", desc: "Modify internal processes to meet ISO standards and ensure consistency in operations." },
                            { step: 4, title: "Employee Training", desc: "Train staff to follow standardized procedures and maintain compliance." },
                            { step: 5, title: "Internal Audit", desc: "Conduct internal audits to verify readiness before applying for certification." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100" style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}>
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

                    {/* Implementation Benefits */}
                    <div className="mt-16">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center" style={{ color: "#03045e" }}>
                            Benefits of ISO Implementation
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Improved Efficiency", icon: TrendingUp, desc: "Standardized processes reduce errors and improve productivity." },
                                { title: "Better Quality Management", icon: Award, desc: "Ensures consistent delivery of products and services." },
                                { title: "Risk Management", icon: ShieldCheck, desc: "Helps identify and minimize operational risks." },
                                { title: "Strong Internal Systems", icon: Settings, desc: "Creates structured workflows and accountability." }
                            ].map((b, idx) => (
                                <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
                                    <b.icon size={24} style={{ color: "#f77f00" }} />
                                    <h4 className="font-bold text-gray-900">{b.title}</h4>
                                    <p className="text-sm text-gray-500 text-justify">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ISO Certification Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}>
                            <ClipboardCheck size={14} style={{ color: "#0077b6" }} />
                            <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>CERTIFICATION</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            ISO Certification Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            ISO certification is the official recognition that a business complies with a specific ISO standard. Certification is granted by accredited certification bodies after successful audits.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Application for Certification", desc: "Submit an application to an accredited certification body." },
                            { step: 2, title: "Stage 1 Audit", desc: "Initial review of documentation and readiness assessment." },
                            { step: 3, title: "Stage 2 Audit", desc: "Detailed audit of processes and implementation." },
                            { step: 4, title: "Certification Approval", desc: "Upon successful audit, the ISO certificate is issued." },
                            { step: 5, title: "Surveillance Audits", desc: "Periodic audits are conducted to maintain certification validity." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative p-6 bg-white rounded-2xl border border-gray-100" style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}>
                                <div
                                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                    style={{ background: "#0077b6", boxShadow: "0 4px 10px rgba(0, 119, 182, 0.3)" }}
                                >
                                    {s.step}
                                </div>
                                <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: "#03045e" }}>{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-justify">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Certification Benefits */}
                    <div className="mt-16">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center" style={{ color: "#03045e" }}>
                            Benefits of ISO Certification
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Global Recognition", icon: Globe, desc: "Enhances credibility and trust in domestic and international markets." },
                                { title: "More Opportunities", icon: Briefcase, desc: "Many clients and government tenders require ISO certification." },
                                { title: "Competitive Advantage", icon: BarChart3, desc: "Helps businesses stand out from competitors." },
                                { title: "Customer Confidence", icon: Users, desc: "Demonstrates commitment to quality and standards." }
                            ].map((b, idx) => (
                                <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
                                    <b.icon size={24} style={{ color: "#0077b6" }} />
                                    <h4 className="font-bold text-gray-900">{b.title}</h4>
                                    <p className="text-sm text-gray-500 text-justify">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Implementation vs Certification
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Understanding the difference between ISO implementation and certification is essential for businesses.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left">
                            <thead>
                                <tr style={{ background: "linear-gradient(135deg, #03045e, #023e8a)" }}>
                                    <th className="px-6 py-4 text-white font-bold text-sm">Aspect</th>
                                    <th className="px-6 py-4 text-white font-bold text-sm">ISO Implementation</th>
                                    <th className="px-6 py-4 text-white font-bold text-sm">ISO Certification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { aspect: "Meaning", impl: "Process setup & alignment", cert: "Official approval & recognition" },
                                    { aspect: "Purpose", impl: "Internal improvement", cert: "External validation" },
                                    { aspect: "Done by", impl: "Business with consultant", cert: "Accredited certification body" },
                                    { aspect: "Outcome", impl: "Compliance readiness", cert: "ISO certificate issued" }
                                ].map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="px-6 py-4 font-semibold text-sm" style={{ color: "#03045e" }}>{row.aspect}</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">{row.impl}</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">{row.cert}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Why Choose Professional ISO Services */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(3,4,94,0.05)" }}>
                                <ShieldCheck size={32} style={{ color: "#03045e" }} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Why Choose Professional ISO Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                ISO is not just paperwork. If you treat it like documentation work, you'll fail audits. Professional consultancy ensures correct implementation of standards, proper documentation, audit readiness, and a faster certification process.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                With expert guidance, businesses can achieve certification efficiently while actually improving operations — not just passing audits.
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
                                    "Correct implementation of ISO standards",
                                    "Proper documentation and compliance",
                                    "Complete audit readiness",
                                    "Faster certification process",
                                    "Actual operational improvement"
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
                            Find answers to common questions about ISO implementation and certification.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="What is the difference between ISO implementation and ISO certification?"
                            answer="ISO implementation is the process of aligning your business operations with ISO standards. ISO certification is the official recognition granted by an accredited body after a successful audit."
                        />
                        <FAQItem
                            question="How long does ISO certification take?"
                            answer="The timeline varies depending on the standard and organization size. Typically, the entire process from implementation to certification takes 2–6 months."
                        />
                        <FAQItem
                            question="Is ISO certification mandatory?"
                            answer="ISO certification is not legally mandatory for most businesses, but it is often required by clients, government tenders, and international partners."
                        />
                        <FAQItem
                            question="How long is an ISO certificate valid?"
                            answer="ISO certificates are typically valid for 3 years, with annual surveillance audits to maintain validity."
                        />
                        <FAQItem
                            question="Which ISO standard is right for my business?"
                            answer="The right standard depends on your industry and goals. ISO 9001 is the most common for quality management, while ISO 14001, 27001, and 22000 serve specific needs. Our consultants can help you choose."
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
