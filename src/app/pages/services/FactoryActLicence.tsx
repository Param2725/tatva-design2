import { useEffect, useState } from "react";
import {
    ShieldCheck,
    CheckCircle2,
    ChevronDown,
    TrendingUp,
    ClipboardCheck,
    Award,
    AlertCircle,
    Building2,
    Users,
    RefreshCcw,
    Scale
} from "lucide-react";

export default function FactoryActLicence() {
    useEffect(() => {
        document.title = "Factory Act License Registration Services | Factory License India";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Get expert Factory Act license registration services. Ensure legal compliance for your manufacturing unit under the Factories Act, 1948 with professional support.");
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
                        Factory Act License<br className="hidden sm:block" /> Registration Services
                    </h1>
                    <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                        Legal Compliance Under the Factories Act, 1948
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium mt-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: "none" }}>Home</a>
                        <span>›</span>
                        <span className="text-white">Factory Act License</span>
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
                                A Factory Act License is a <strong style={{ color: "#03045e" }}>mandatory legal approval</strong> required for businesses engaged in manufacturing activities. It is governed under the <strong style={{ color: "#0077b6" }}>Factories Act, 1948</strong>, and ensures that factories operate in compliance with safety, health, and labour regulations.
                            </p>
                            <p>
                                Any business planning to set up or operate a manufacturing unit must obtain a factory license from the <strong style={{ color: "#f77f00" }}>respective State Labour Department</strong> before commencing operations.
                            </p>
                            <p>
                                Our consultancy provides complete assistance for Factory Act license registration, helping businesses meet legal requirements and start operations without compliance issues.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is a Factory Act License?
                            </h2>
                            <p>
                                A Factory License is an official permission granted by the government that allows a business to run a manufacturing unit legally. It ensures that the factory complies with:
                            </p>
                            <ul className="space-y-3 mt-4">
                                {[
                                    "Worker safety standards",
                                    "Health and welfare regulations",
                                    "Labour laws",
                                    "Environmental guidelines"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="flex-shrink-0" style={{ color: "#0077b6" }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4">
                                This license acts as a <strong style={{ color: "#03045e" }}>legal foundation</strong> for operating any factory in India.
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

            {/* Applicability */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Applicability of Factory License
                        </h2>
                        <p className="text-gray-600 text-lg">
                            A factory must obtain a license if it meets any of the following conditions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        {[
                            { threshold: "10+", label: "Workers With Power", desc: "10 or more workers employed where power is used in manufacturing." },
                            { threshold: "20+", label: "Workers Without Power", desc: "20 or more workers employed where manufacturing is done without power." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex items-center gap-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #03045e, #0077b6)" }}>
                                    <span className="text-2xl font-extrabold text-white">{item.threshold}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1" style={{ color: "#03045e" }}>{item.label}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: "#03045e" }}>
                            <AlertCircle size={22} style={{ color: "#f77f00" }} />
                            Also Required When
                        </h3>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { title: "Setting Up New Factory", desc: "Any new manufacturing unit must obtain the license before operations." },
                                { title: "Expanding Existing Unit", desc: "Expansion of premises, capacity, or workforce requires updated license." },
                                { title: "Changing Operations", desc: "Change in manufacturing process or activities requires fresh approval." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "#f0f9ff" }}>
                                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#0077b6" }} />
                                    <div>
                                        <p className="font-semibold text-sm mb-1" style={{ color: "#03045e" }}>{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                            Factory License Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            A structured process from plan approval to license issuance.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Factory Plan Approval", desc: "The factory layout and building plan must be submitted and approved by the State Labour Department before starting construction." },
                            { step: 2, title: "Application Submission", desc: "Submit the application with required business and factory details." },
                            { step: 3, title: "Document Verification", desc: "Authorities review submitted details and compliance requirements." },
                            { step: 4, title: "Inspection", desc: "The factory may be inspected to ensure safety and regulatory compliance." },
                            { step: 5, title: "License Approval", desc: "After verification and approval, the factory license is issued." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm" style={{ width: "calc(33.333% - 22px)", minWidth: "280px" }}>
                                <div
                                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                    style={{ background: "#f77f00", boxShadow: "0 4px 10px rgba(247,127,0,0.3)" }}
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
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Benefits of Factory License
                        </h2>
                        <p className="text-gray-600 text-lg">
                            A factory license is the legal backbone for running any manufacturing operation in India.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "Legal Authorization", icon: Scale, desc: "Allows businesses to operate manufacturing activities legally under the Factories Act.", color: "#f77f00" },
                            { title: "Worker Safety Compliance", icon: Users, desc: "Ensures proper safety, health, and welfare standards for all employees.", color: "#0077b6" },
                            { title: "Business Credibility", icon: Award, desc: "Enhances trust with government authorities, partners, and investors.", color: "#03045e" },
                            { title: "Avoidance of Penalties", icon: ShieldCheck, desc: "Prevents legal issues and penalties for non-compliance with labour laws.", color: "#f77f00" },
                            { title: "Validity and Renewal", icon: RefreshCcw, desc: "Factory licenses are issued for a fixed period and must be renewed periodically.", color: "#0077b6" }
                        ].map((b, idx) => (
                            <div
                                key={idx}
                                className="p-7 bg-white rounded-2xl border border-gray-100 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                style={{ width: "calc(33.333% - 22px)", minWidth: "280px" }}
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
            <section className="py-16 lg:py-24 bg-white">
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
                                Factory licensing involves multiple approvals, inspections, and compliance requirements. A single mistake in documentation or process can lead to delays or rejection.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Professional consultancy ensures your factory license is obtained efficiently and correctly the first time.
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
                                    "Avoid delays and rejection",
                                    "Ensure proper documentation",
                                    "Handle approvals efficiently",
                                    "Maintain compliance with labour laws",
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
                            Find answers to common questions about Factory Act license registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="What is a Factory Act License?"
                            answer="A Factory Act License is a mandatory legal approval under the Factories Act, 1948, required to operate a manufacturing unit in India."
                        />
                        <FAQItem
                            question="Who needs a Factory Act License?"
                            answer="Any factory employing 10 or more workers using power, or 20 or more workers without power, must obtain a Factory Act License from the State Labour Department."
                        />
                        <FAQItem
                            question="What is the validity of a factory license?"
                            answer="Factory licenses are typically issued for a fixed period (usually one year) and must be renewed periodically to continue operations legally."
                        />
                        <FAQItem
                            question="Is a factory plan approval required?"
                            answer="Yes, before starting construction, the factory layout and building plan must be submitted to and approved by the State Labour Department."
                        />
                        <FAQItem
                            question="What happens if a factory operates without a license?"
                            answer="Operating a factory without a valid license under the Factories Act is a legal offence and can result in penalties, fines, and closure of the unit."
                        />
                    </div>
                </div>
            </section>
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
