import { useEffect, useState } from "react";
import {
    Factory,
    Building2,
    CheckCircle2,
    ShieldCheck,
    Award,
    Banknote,
    Globe,
    TrendingUp,
    FileText,
    ArrowRight,
    ChevronDown
} from "lucide-react";

export default function MSMERegistration() {
    useEffect(() => {
        document.title = "MSME Registration Services | Udyam Registration Consultants in India";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-16 lg:pt-18 bg-gray-50">
            {/* Hero Banner */}
            <section
                className="relative py-16 lg:py-24 overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #03045e 0%, #023e8a 100%)",
                    color: "white"
                }}
            >
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(#48cae4 1px, transparent 1px)",
                        backgroundSize: "30px 30px"
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 leading-tight">
                        MSME / Udyam Registration Services
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">MSME / Udyam Registration</span>
                    </div>
                </div>
            </section>

            {/* Intro & Contact Form Split */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left: Text Content */}
                        <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                            <p>
                                Micro, Small, and Medium Enterprises (MSMEs) play a crucial role in India's economic growth by generating employment and supporting industrial development. To encourage small businesses and startups, the Government of India provides MSME registration through the <strong style={{ color: "#03045e" }}>Udyam Registration portal</strong>.
                            </p>
                            <p>
                                MSME registration helps businesses access <strong style={{ color: "#03045e" }}>government schemes, financial assistance, subsidies</strong>, and various benefits designed to support business growth. It also improves credibility and provides easier access to funding and government opportunities.
                            </p>
                            <p>
                                Our consultancy offers complete assistance for MSME registration, ensuring a smooth process and helping businesses take advantage of the benefits available under the <strong style={{ color: "#03045e" }}>MSME Development Act</strong>.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is MSME Registration?
                            </h2>
                            <p>
                                MSME registration, also known as <strong style={{ color: "#03045e" }}>Udyam Registration</strong>, is a government recognition given to micro, small, and medium enterprises operating in manufacturing or service sectors.
                            </p>
                            <p>
                                The registration provides businesses with official recognition under the <strong style={{ color: "#0077b6" }}>Micro, Small and Medium Enterprises Development Act, 2006</strong>, enabling them to access various government schemes, subsidies, and financial benefits.
                            </p>
                            <p>
                                Although MSME registration is not mandatory, it is highly beneficial for businesses that want easier access to <strong style={{ color: "#03045e" }}>funding, government incentives, and market opportunities</strong>.
                            </p>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                            <div className="sticky top-28 rounded-xl overflow-hidden shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #023e8a 0%, #0077b6 100%)",
                                    padding: "40px 30px"
                                }}>
                                <div
                                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
                                    style={{ background: "#48cae4", filter: "blur(40px)" }}
                                />
                                <h3 className="text-3xl font-bold mb-8 text-center text-white relative z-10">
                                    Contact Us Now!
                                </h3>
                                <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-transparent border border-white/40 rounded text-white px-4 py-3 placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full bg-transparent border border-white/40 rounded text-white px-4 py-3 placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full bg-transparent border border-white/40 rounded text-white px-4 py-3 placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full mt-4 font-bold py-3.5 px-4 rounded text-white transition-transform hover:-translate-y-1"
                                        style={{
                                            background: "#00b4d8",
                                            boxShadow: "0 4px 14px rgba(0, 180, 216, 0.4)",
                                            border: "none",
                                            cursor: "pointer"
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = "#0096c7";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = "#00b4d8";
                                        }}
                                    >
                                        SEND
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classification of MSME */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Classification of MSME in India
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Businesses are classified into three categories based on investment and turnover.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Micro Enterprise",
                                icon: Building2,
                                investment: "₹2.5 Crore",
                                turnover: "₹10 Crore",
                                color: "#0077b6"
                            },
                            {
                                title: "Small Enterprise",
                                icon: Factory,
                                investment: "₹25 Crore",
                                turnover: "₹100 Crore",
                                color: "#00b4d8"
                            },
                            {
                                title: "Medium Enterprise",
                                icon: TrendingUp,
                                investment: "₹125 Crore",
                                turnover: "₹500 Crore",
                                color: "#023e8a"
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl text-center"
                                style={{ borderTop: `4px solid ${item.color}` }}
                            >
                                <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto"
                                    style={{ background: `${item.color}15`, color: item.color }}
                                >
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-6" style={{ color: "#03045e" }}>{item.title}</h3>
                                <div className="space-y-4">
                                    <div className="p-3 rounded-lg" style={{ background: "#f0f9ff" }}>
                                        <p className="text-xs font-semibold text-gray-500 mb-1">Investment up to</p>
                                        <p className="text-xl font-bold" style={{ color: item.color }}>{item.investment}</p>
                                    </div>
                                    <div className="p-3 rounded-lg" style={{ background: "#f0f9ff" }}>
                                        <p className="text-xs font-semibold text-gray-500 mb-1">Turnover up to</p>
                                        <p className="text-xl font-bold" style={{ color: item.color }}>{item.turnover}</p>
                                    </div>
                                </div>
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
                            Benefits of MSME Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Registering under MSME provides several advantages that help businesses grow and remain competitive.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Easier Access to Bank Loans", icon: Banknote, points: [
                                    <>MSME-registered businesses can obtain loans at <strong style={{ color: "#03045e" }}>lower interest rates</strong></>,
                                    <>Compared to <strong style={{ color: "#03045e" }}>regular business loans</strong>, better terms available</>
                                ]
                            },
                            {
                                title: "Government Subsidies", icon: Award, points: [
                                    <>Access various <strong style={{ color: "#03045e" }}>government subsidies and schemes</strong></>,
                                    <>Support for <strong style={{ color: "#03045e" }}>technology upgrades</strong>, infrastructure, and industrial growth</>
                                ]
                            },
                            {
                                title: "Access to Government Tenders", icon: Globe, points: [
                                    <>Many government tenders are <strong style={{ color: "#03045e" }}>reserved for MSMEs</strong></>,
                                    <>Better opportunities to <strong style={{ color: "#03045e" }}>secure government contracts</strong></>
                                ]
                            },
                            {
                                title: "Intellectual Property Support", icon: ShieldCheck, points: [
                                    <>Subsidies on <strong style={{ color: "#03045e" }}>patent and trademark registration</strong></>,
                                    <>Helps protect innovations and <strong style={{ color: "#03045e" }}>reduce costs</strong></>
                                ]
                            },
                            {
                                title: "Delayed Payment Protection", icon: FileText, points: [
                                    <>Protection against <strong style={{ color: "#03045e" }}>delayed payments</strong> from buyers</>,
                                    <>Improves <strong style={{ color: "#03045e" }}>financial stability</strong> for businesses</>
                                ]
                            },
                            {
                                title: "ISO Certification Reimbursement", icon: CheckCircle2, points: [
                                    <>Government schemes provide <strong style={{ color: "#03045e" }}>reimbursement for ISO certification</strong></>,
                                    <>Helps MSMEs maintain <strong style={{ color: "#03045e" }}>quality standards</strong></>
                                ]
                            }
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg"
                                style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                                    style={{ background: "rgba(72,202,228,0.1)", color: "#03045e" }}
                                >
                                    <benefit.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4" style={{ color: "#03045e" }}>{benefit.title}</h3>
                                <ul className="space-y-2.5">
                                    {benefit.points.map((point, pidx) => (
                                        <li key={pidx} className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#48cae4" }} />
                                            <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Process */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            MSME Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The MSME registration process is simple and fully online.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: 1, title: "Business Information Submission", desc: "Provide details such as business name, type of organization, PAN, and Aadhaar details." },
                            { step: 2, title: "Classification of Enterprise", desc: "The business is classified as micro, small, or medium based on investment and turnover." },
                            { step: 3, title: "Verification of Information", desc: "Government authorities verify the submitted information." },
                            { step: 4, title: "MSME Certificate Generation", desc: "Once approved, the business receives the Udyam Registration Certificate for government benefits." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
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

            {/* Why Choose Professional Services + Why Our Consultancy */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(3,4,94,0.05)" }}>
                                <ShieldCheck size={32} style={{ color: "#03045e" }} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Why Choose Professional MSME Registration Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                Although MSME registration can be completed online, many businesses prefer professional assistance to ensure <strong style={{ color: "#03045e" }}>accurate submission and faster approval</strong>.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                Consultancy services help businesses <strong style={{ color: "#03045e" }}>avoid errors</strong>, complete documentation properly, and understand how to utilize government benefits effectively.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Professional guidance also ensures that businesses remain compliant with regulations while <strong style={{ color: "#03045e" }}>maximizing the benefits</strong> available under MSME schemes.
                            </p>
                        </div>

                        {/* Why Our Consultancy Card */}
                        <div className="bg-blue-50 p-8 lg:p-10 rounded-2xl border border-blue-100 relative shadow-lg">
                            <div
                                className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-30"
                                style={{ background: "#48cae4", filter: "blur(20px)" }}
                            />
                            <div
                                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-30"
                                style={{ background: "#caf0f8", filter: "blur(20px)" }}
                            />
                            <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative z-10" style={{ color: "#03045e" }}>
                                Why Our Consultancy?
                            </h3>
                            <p className="text-gray-700 leading-relaxed relative z-10 text-lg mb-4 text-justify">
                                Our team provides complete MSME registration assistance, from <span style={{ color: "#0077b6", fontWeight: 600 }}>information submission to certificate generation</span>.
                            </p>
                            <p className="text-gray-700 leading-relaxed relative z-10 text-lg text-justify">
                                We ensure your application is prepared correctly and help you <span style={{ color: "#03045e", fontWeight: 600 }}>access government subsidies, loans, and business benefits</span> available for micro, small, and medium enterprises.
                            </p>
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
                            Find answers to common questions about MSME registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="Is MSME registration mandatory?"
                            answer="No, MSME registration is not mandatory. However, it is highly beneficial for businesses to access government schemes, loans, and subsidies."
                        />
                        <FAQItem
                            question="Who can apply for MSME registration?"
                            answer="Any manufacturing or service-based business can apply, including proprietorships, partnerships, LLPs, and private limited companies."
                        />
                        <FAQItem
                            question="How long does MSME registration take?"
                            answer="In most cases, MSME registration can be completed within a few days once the required information is submitted."
                        />
                        <FAQItem
                            question="Can startups apply for MSME registration?"
                            answer="Yes, startups and new businesses can apply for MSME registration to access government support and financial assistance."
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
            className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
            style={{ background: isOpen ? "#f0f9ff" : "white" }}
        >
            <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-lg" style={{ color: "#03045e" }}>
                    {question}
                </span>
                <ChevronDown
                    size={20}
                    className="flex-shrink-0 ml-4 transition-transform duration-300"
                    style={{
                        color: "#48cae4",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                />
            </button>
            <div
                className="overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? "0 20px 20px 20px" : "0 20px"
                }}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}
