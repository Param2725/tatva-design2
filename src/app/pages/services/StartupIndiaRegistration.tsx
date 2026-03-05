import { useEffect, useState } from "react";
import {
    Rocket,
    Building2,
    Users,
    CheckCircle2,
    ShieldCheck,
    Award,
    Banknote,
    FileText,
    Globe,
    TrendingUp,
    Briefcase,
    ArrowRight,
    ChevronDown
} from "lucide-react";

export default function StartupIndiaRegistration() {
    useEffect(() => {
        document.title = "Startup India Registration Services | DPIIT Startup Recognition | Tatva Consultancy";
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
                        Startup India Registration Services
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">Startup India Registration Services</span>
                    </div>
                </div>
            </section>

            {/* Intro & Contact Form Split */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left: Text Content */}
                        <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                            <p>
                                India has become one of the <strong style={{ color: "#03045e" }}>fastest-growing startup ecosystems</strong> in the world. To encourage innovation and entrepreneurship, the Government of India launched the <strong style={{ color: "#0077b6" }}>Startup India initiative</strong>. This program provides recognition, financial benefits, tax advantages, and regulatory support to eligible startups.
                            </p>
                            <p>
                                Startup India registration helps new businesses gain <strong style={{ color: "#03045e" }}>official recognition</strong> and access a wide range of government incentives designed to support innovation, funding, and business growth.
                            </p>
                            <p>
                                Our consultancy provides complete assistance for Startup India registration, ensuring that your business receives recognition from the <strong style={{ color: "#f77f00" }}>Department for Promotion of Industry and Internal Trade (DPIIT)</strong> and can benefit from government schemes available to startups.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is Startup India Registration?
                            </h2>
                            <p>
                                Startup India registration is a <strong style={{ color: "#03045e" }}>government recognition program</strong> that allows eligible startups to receive support through tax exemptions, funding opportunities, intellectual property benefits, and simplified compliance requirements.
                            </p>
                            <p>
                                The initiative was launched to reduce regulatory burdens and encourage entrepreneurs to develop <strong style={{ color: "#0077b6" }}>innovative products and services</strong>. Recognized startups can also access government networks, mentorship programs, and incubation support to accelerate their growth.
                            </p>
                            <p>
                                Once a business receives <strong style={{ color: "#f77f00" }}>DPIIT recognition</strong> under Startup India, it becomes eligible for various incentives aimed at strengthening the startup ecosystem.
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

            {/* Eligibility Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Eligibility for Startup India Recognition
                        </h2>
                        <p className="text-gray-600 text-lg">
                            To qualify for Startup India recognition, a business must meet certain conditions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Age of the Company",
                                desc: "The entity should be less than 10 years old from the date of incorporation.",
                                icon: Building2
                            },
                            {
                                title: "Business Structure",
                                desc: "The startup must be registered as a Private Limited Company, LLP, or Registered Partnership Firm.",
                                icon: Briefcase
                            },
                            {
                                title: "Annual Turnover",
                                desc: "The annual turnover of the startup should not exceed ₹100 crore in any financial year since incorporation.",
                                icon: Banknote
                            },
                            {
                                title: "Innovation or Scalability",
                                desc: "The business should be working toward developing innovative products, services, or technology with potential for growth.",
                                icon: Rocket
                            }
                        ].map((item, idx) => (
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
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
                                    style={{ background: "rgba(72,202,228,0.1)", color: "#03045e" }}
                                >
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: "#03045e" }}>{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
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
                            Benefits of Startup India Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Registering under the Startup India program provides several advantages for entrepreneurs and early-stage businesses.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Tax Benefits", icon: Banknote, points: [
                                    <><strong style={{ color: "#03045e" }}>Income tax waiver</strong> for up to <strong style={{ color: "#03045e" }}>3 years</strong> under Section 80-IAC</>,
                                    <>Capital gains tax can be <strong style={{ color: "#03045e" }}>waived</strong> if invested in a venture capital fund</>
                                ]
                            },
                            {
                                title: "Subsidy", icon: Award, points: [
                                    <>Receive up to <strong style={{ color: "#03045e" }}>1% benefit</strong> in government subsidies</>,
                                    <>Access various <strong style={{ color: "#03045e" }}>government-backed schemes</strong> for startups</>
                                ]
                            },
                            {
                                title: "Intellectual Property Support", icon: ShieldCheck, points: [
                                    <>Trademark filing fee reduced by <strong style={{ color: "#03045e" }}>50%</strong> for registered startups</>,
                                    <>Patent filing with <strong style={{ color: "#03045e" }}>fast-track process</strong> and additional benefits</>
                                ]
                            },
                            {
                                title: "Access to Government Tenders", icon: Globe, points: [
                                    <><strong style={{ color: "#03045e" }}>Experience criteria</strong> and turnover requirements may be waived</>,
                                    <><strong style={{ color: "#03045e" }}>EMD (Earnest Money Deposit)</strong> is not required in many tenders</>
                                ]
                            },
                            {
                                title: "Funding Opportunities", icon: TrendingUp, points: [
                                    <>Receive funding under <strong style={{ color: "#03045e" }}>Startup India sector segment</strong> including seed funding</>,
                                    <>Access <strong style={{ color: "#03045e" }}>bank loans</strong> and government benefit schemes after registration</>
                                ]
                            }
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg"
                                style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                                    style={{ background: "rgba(247,127,0,0.1)" }}
                                >
                                    <benefit.icon size={24} style={{ color: "#f77f00" }} />
                                </div>
                                <h3 className="text-xl font-bold mb-4" style={{ color: "#03045e" }}>{benefit.title}</h3>
                                <ul className="space-y-3">
                                    {benefit.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-2.5 text-gray-600 leading-relaxed text-sm">
                                            <CheckCircle2 className="flex-shrink-0 mt-0.5" size={16} style={{ color: "#48cae4" }} />
                                            <span>{point}</span>
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
                            Startup India Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The registration process involves several steps to obtain recognition under the government initiative.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Company Incorporation", desc: "First, the business must be incorporated as a Private Limited Company, LLP, or Partnership firm." },
                            { step: 2, title: "Create Profile on Startup India Portal", desc: "The startup must create an account on the official Startup India portal." },
                            { step: 3, title: "Apply for DPIIT Recognition", desc: "Submit the application form along with business details and supporting documents." },
                            { step: 4, title: "Upload Supporting Documents", desc: "Documents such as incorporation certificates, business details, and innovation descriptions are uploaded." },
                            { step: 5, title: "Verification and Approval", desc: "Once the application is reviewed and approved, DPIIT recognition is granted to the startup." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm" style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}>
                                <div
                                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                    style={{ background: "#f77f00", boxShadow: "0 4px 10px rgba(247, 127, 0, 0.3)" }}
                                >
                                    {s.step}
                                </div>
                                <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: "#03045e" }}>{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documents Required */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Documents Required for Startup India Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            To complete the registration process, certain documents may be required.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <ul className="space-y-4">
                            {[
                                "Certificate of incorporation",
                                "PAN of the company",
                                "Details of directors or partners",
                                "Business description explaining innovation or scalability",
                                "Website or product details (if available)",
                                "Funding or investor details (if applicable)"
                            ].map((doc, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
                                    <CheckCircle2 className="flex-shrink-0 mt-0.5" style={{ color: "#48cae4" }} size={20} />
                                    <span className="text-gray-700 font-medium">{doc}</span>
                                </li>
                            ))}
                        </ul>
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
                                Why Choose Professional Startup Registration Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Startup registration involves preparing documentation, verifying eligibility, and completing online filings. Professional consultancy services can help ensure that the application is submitted correctly and that all <strong style={{ color: "#03045e" }}>compliance requirements</strong> are met.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Expert assistance can <strong style={{ color: "#f77f00" }}>reduce errors</strong>, avoid delays, and help startups access available government benefits more efficiently.
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
                            <p className="text-gray-700 leading-relaxed relative z-10 text-lg mb-4">
                                Our team provides complete Startup India registration assistance, from <span style={{ color: "#0077b6", fontWeight: 600 }}>eligibility verification to DPIIT recognition</span>.
                            </p>
                            <p className="text-gray-700 leading-relaxed relative z-10 text-lg">
                                We ensure your application is prepared correctly and help you <span style={{ color: "#03045e", fontWeight: 600 }}>unlock government benefits, tax exemptions, and funding opportunities</span>.
                            </p>
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
                            Find answers to common questions about Startup India registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="How long does Startup India registration take?"
                            answer="The registration process usually takes around 10–20 working days after submitting the application and required documents."
                        />
                        <FAQItem
                            question="Is Startup India registration mandatory?"
                            answer="No, it is not mandatory. However, obtaining recognition helps startups access tax benefits, funding opportunities, and government support programs."
                        />
                        <FAQItem
                            question="Can a small startup apply for Startup India?"
                            answer="Yes. Any eligible startup that meets the criteria related to age, structure, and turnover can apply for recognition."
                        />
                        <FAQItem
                            question="Do I need a registered company before applying?"
                            answer="Yes, the business must be incorporated as a company, LLP, or partnership firm before applying for Startup India recognition."
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
