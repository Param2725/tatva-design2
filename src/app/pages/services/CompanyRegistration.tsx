import { useEffect, useState } from "react";
import {
    Building2,
    Users,
    FileText,
    ShieldCheck,
    Briefcase,
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    Award,
    Clock,
    Banknote,
    LineChart,
    TrendingUp
} from "lucide-react";

export default function CompanyRegistration() {
    useEffect(() => {
        document.title = "Company Registration Services in India | Tatva Consultancy";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-16 lg:pt-18 bg-gray-50">
            {/* Hero Banner Section */}
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
                        Company Registration Services in India
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">Company Registration Services in India</span>
                    </div>
                </div>
            </section>

            {/* Intro & Overview Split Layout */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left Side: Text Content */}
                        <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                            <p>
                                Starting a business begins with choosing the <strong style={{ color: "#03045e" }}>right legal structure</strong> and completing the company registration process. Registering a company not only provides legal recognition but also <strong style={{ color: "#03045e" }}>builds trust</strong> with customers, investors, and financial institutions.
                            </p>
                            <p>
                                Our company registration consultancy helps entrepreneurs, startups, and growing businesses complete the entire registration process smoothly and efficiently. From documentation and name approval to government filing and certification, we assist you at every stage so you can <strong style={{ color: "#0077b6" }}>focus on building your business</strong>.
                            </p>
                            <p>
                                Whether you are planning to start a private limited company, LLP, partnership, or other business entity, professional guidance ensures that your registration is completed correctly and in compliance with Indian regulations.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is Company Registration?
                            </h2>
                            <p>
                                Company registration is the legal process of establishing a business entity under the laws of India. Once registered, a company becomes a <strong style={{ color: "#03045e" }}>separate legal identity</strong> from its owners, allowing it to operate, enter contracts, open bank accounts, and conduct business legally.
                            </p>
                            <p>
                                A registered company also provides <strong style={{ color: "#03045e" }}>limited liability protection</strong> to its directors or shareholders, meaning personal assets remain protected from business liabilities.
                            </p>
                            <p>
                                Registering a company with the appropriate government authorities is an <strong style={{ color: "#f77f00" }}>important step</strong> for entrepreneurs who want to operate professionally and scale their business.
                            </p>
                        </div>

                        {/* Right Side: Contact Form Card */}
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

            {/* Types of Registration */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Types of Company Registration in India
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Businesses can register under different legal structures depending on their goals, ownership model, and funding plans.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Private Limited Company",
                                desc: "The most popular option for startups and growing businesses. It offers limited liability protection and allows companies to raise investment easily.",
                                icon: Building2
                            },
                            {
                                title: "Limited Liability Partnership (LLP)",
                                desc: "A flexible structure that combines features of both partnerships and companies while providing limited liability protection.",
                                icon: Users
                            },
                            {
                                title: "One Person Company (OPC)",
                                desc: "Ideal for individual entrepreneurs who want the benefits of a company structure while operating as a single owner.",
                                icon: Briefcase
                            },
                            {
                                title: "Partnership Firm",
                                desc: "A traditional structure where two or more partners manage and operate a business together.",
                                icon: Users
                            }
                        ].map((type, idx) => (
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
                                    <type.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: "#03045e" }}>{type.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Process */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Company Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Registering a company involves several legal and procedural steps. Our consultancy simplifies the process and ensures proper compliance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { step: 1, title: "Digital Signature Certificate", desc: "Digital signatures are required for filing electronic documents with government authorities." },
                            { step: 2, title: "Director Identification Number", desc: "Each director must obtain a DIN to legally act as a director of a company." },
                            { step: 3, title: "Company Name Approval", desc: "A unique company name is selected and submitted for approval to the relevant authority." },
                            { step: 4, title: "Preparation of MOA & AOA", desc: "The Memorandum of Association and Articles of Association define the company's structure and operational rules." },
                            { step: 5, title: "Registration with ROC", desc: "All documents are submitted to the Registrar of Companies for verification and approval." },
                            { step: 6, title: "Certificate of Incorporation", desc: "Once approved, the government issues a Certificate of Incorporation, officially establishing the company." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100">
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

            {/* Documents Required & Benefits */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Documents */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Documents Required
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                To complete the registration process, certain documents are required from directors and shareholders. Our team helps ensure that all documentation is properly prepared and submitted.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Identity proof (PAN card, passport, etc.)",
                                    "Address proof",
                                    "Passport-size photographs",
                                    "Registered office address proof",
                                    "Utility bill or rent agreement for office address",
                                    "No Objection Certificate from property owner (if applicable)"
                                ].map((doc, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <CheckCircle2 className="flex-shrink-0 mt-0.5" style={{ color: "#48cae4" }} size={20} />
                                        <span className="text-gray-700 font-medium">{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Benefits of Registration
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Registering your company offers several advantages that support long-term business growth.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Legal Recognition", icon: Award, desc: "A registered company is legally recognized." },
                                    { title: "Limited Liability", icon: ShieldCheck, desc: "Owners are protected from personal liability." },
                                    { title: "Business Credibility", icon: Building2, desc: "Gain greater trust from clients and investors." },
                                    { title: "Funding Access", icon: Banknote, desc: "Attract investors and apply for loans easily." },
                                    { title: "Growth Opportunities", icon: TrendingUp, desc: "Formal structure makes expansion easier." }
                                ].map((benefit, idx) => (
                                    <div key={idx} className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
                                        <benefit.icon size={24} style={{ color: "#f77f00" }} />
                                        <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                                        <p className="text-sm text-gray-500">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(3,4,94,0.05)" }}>
                                <ShieldCheck size={32} style={{ color: "#03045e" }} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Why Choose Professional Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Handling company registration independently can be complex due to legal requirements, documentation, and government procedures. Professional consultancy services simplify the process and reduce the risk of delays or errors.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                With expert guidance, businesses can complete registration quickly while ensuring full compliance with regulations. Professional support also helps entrepreneurs select the most suitable company structure based on their business goals.
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
                            <p className="text-gray-700 leading-relaxed max-w-md relative z-10 text-lg mb-4">
                                Our company registration consultancy helps entrepreneurs, startups, and growing businesses complete the entire registration process <span style={{ color: "#0077b6", fontWeight: 600 }}>smoothly and efficiently</span>.
                            </p>
                            <p className="text-gray-700 leading-relaxed max-w-md relative z-10 text-lg">
                                From documentation and name approval to government filing and certification, we assist you at every stage so you can <span style={{ color: "#03045e", fontWeight: 600 }}>focus on building your business</span>.
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
                            Find answers to common questions about company registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="How long does company registration take in India?"
                            answer="The process typically takes around 15–20 working days depending on document verification and government approvals."
                        />
                        <FAQItem
                            question="How many directors are required to start a company?"
                            answer="A private limited company generally requires a minimum of two directors."
                        />
                        <FAQItem
                            question="Can a single person start a company?"
                            answer="Yes, a One Person Company (OPC) allows a single entrepreneur to register and operate a company."
                        />
                        <FAQItem
                            question="Is company registration mandatory for starting a business?"
                            answer="While some small businesses operate as proprietorships, company registration is recommended for credibility, legal protection, and growth opportunities."
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
