import { useEffect, useState } from "react";
import {
    Award,
    ShieldCheck,
    CheckCircle2,
    ChevronDown,
    TrendingUp,
    ClipboardCheck,
    Briefcase,
    Banknote,
    BadgeCheck,
    Settings,
    ArrowUpRight,
    Wrench,
    DollarSign,
    Coins
} from "lucide-react";

export default function LoansSubsidy() {
    useEffect(() => {
        document.title = "Machinery Loan & Subsidy Services | SME Loan Assistance";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Get expert help for machinery loans and SME loans with subsidy support. Arrange funding for equipment purchase and business expansion with professional consultancy services.");
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
                        Machinery Loan &<br className="hidden sm:block" /> Subsidy Services
                    </h1>
                    <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                        SME Loan Assistance for Business Growth
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium mt-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">Loans & Subsidy</span>
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
                                Machinery loan and SME loan services help businesses arrange funding for <strong style={{ color: "#03045e" }}>purchasing equipment, upgrading operations, and expanding production capacity</strong>. These financial solutions are especially useful for small and medium enterprises looking to grow without blocking large amounts of capital.
                            </p>
                            <p>
                                In addition to loans, businesses may also be eligible for <strong style={{ color: "#0077b6" }}>subsidy benefits</strong>, which can reduce the overall financial burden and make investment more affordable.
                            </p>
                            <p>
                                Our consultancy provides guidance and support for machinery loans and subsidy assistance, helping businesses move forward with the right financial approach.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is a Machinery Loan?
                            </h2>
                            <p>
                                A machinery loan is a type of business financing used for <strong style={{ color: "#03045e" }}>acquiring new machinery or upgrading existing equipment</strong>. It allows businesses to invest in operations without making full upfront payments.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is an SME Loan?
                            </h2>
                            <p>
                                An SME loan refers to financial support provided to small and medium enterprises for various business needs. This may include purchasing machinery, managing operations, or <strong style={{ color: "#f77f00" }}>expanding business activities</strong>.
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

            {/* Machinery Loan with Subsidy */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Machinery Loan with Subsidy Benefits
                        </h2>
                        <p className="text-gray-600 text-lg">
                            In some cases, businesses can receive subsidy benefits along with machinery loans. These subsidies help reduce the financial load by offering partial support on the investment or loan.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { title: "Type of Business", desc: "Industry sector and business classification" },
                            { title: "Nature of Investment", desc: "Equipment type and investment purpose" },
                            { title: "Applicable Schemes", desc: "Central and state government schemes" },
                            { title: "Eligibility Criteria", desc: "Business size, turnover, and compliance" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#f77f0015" }}>
                                    <span className="text-lg font-bold" style={{ color: "#f77f00" }}>{idx + 1}</span>
                                </div>
                                <h4 className="font-bold mb-1" style={{ color: "#03045e" }}>{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center mt-8 text-gray-600 text-base max-w-2xl mx-auto">
                        Combining loans with subsidy benefits allows businesses to invest more efficiently while managing costs.
                    </p>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Benefits of Machinery Loan & Subsidy
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Financial support that helps businesses grow without blocking large capital.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "Financial Support for Growth", icon: TrendingUp, desc: "Helps businesses invest in machinery and expansion without large upfront capital.", color: "#f77f00" },
                            { title: "Reduced Financial Burden", icon: Banknote, desc: "Subsidy benefits can lower the overall cost of investment.", color: "#0077b6" },
                            { title: "Improved Efficiency", icon: Settings, desc: "New and upgraded machinery can improve productivity and performance.", color: "#03045e" },
                            { title: "Expansion Opportunities", icon: ArrowUpRight, desc: "Enables businesses to scale operations and increase production capacity.", color: "#f77f00" },
                            { title: "Better Resource Utilization", icon: BadgeCheck, desc: "Provides structured financial planning for long-term growth.", color: "#0077b6" }
                        ].map((b, idx) => (
                            <div
                                key={idx}
                                className="p-7 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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

            {/* Types of Financial Support */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Types of Financial Support
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Businesses may explore different types of financial assistance based on their requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Machinery Loan", desc: "Funding specifically for purchasing or upgrading equipment.", icon: Wrench, color: "#f77f00" },
                            { title: "Business / SME Loan", desc: "General financial support for business operations and expansion.", icon: Briefcase, color: "#0077b6" },
                            { title: "Subsidy Support", desc: "Financial assistance that reduces the effective cost of investment.", icon: Coins, color: "#03045e" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: item.color }} />
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: `${item.color}15` }}>
                                    <item.icon size={28} style={{ color: item.color }} />
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: "#03045e" }}>{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-justify">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}>
                            <ClipboardCheck size={14} style={{ color: "#0077b6" }} />
                            <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>OUR PROCESS</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Loan & Subsidy Assistance Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Our structured approach ensures the best financial outcome for your business.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Requirement Understanding", desc: "Identify business needs and funding requirements." },
                            { step: 2, title: "Financial Planning", desc: "Determine suitable loan and subsidy options." },
                            { step: 3, title: "Application Support", desc: "Assist in preparing and submitting loan applications." },
                            { step: 4, title: "Approval Process", desc: "Coordinate with financial institutions for loan approval." },
                            { step: 5, title: "Subsidy Assistance", desc: "Support in applying for eligible subsidy benefits." }
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
                                Arranging a machinery loan with subsidy support involves more than just applying for funds. It requires proper planning, understanding of eligibility, and correct application handling.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                With the right guidance, businesses can secure funding and move forward with confidence.
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
                                    "Choose suitable financial options",
                                    "Avoid errors in application",
                                    "Improve chances of approval",
                                    "Access available subsidy benefits effectively",
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
                            Find answers to common questions about machinery loans and subsidy services.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="What is a machinery loan?"
                            answer="A machinery loan is a type of business financing used for acquiring new machinery or upgrading existing equipment. It allows businesses to invest without making full upfront payments."
                        />
                        <FAQItem
                            question="Can I get a subsidy along with a machinery loan?"
                            answer="Yes, in some cases businesses may be eligible for subsidy benefits that can reduce the overall financial burden of the investment."
                        />
                        <FAQItem
                            question="Who is eligible for an SME loan?"
                            answer="Small and medium enterprises engaged in manufacturing, services, or trading activities are generally eligible for SME loans."
                        />
                        <FAQItem
                            question="What factors determine subsidy eligibility?"
                            answer="Subsidy eligibility depends on factors such as type of business, nature of investment, applicable government schemes, and the business's compliance status."
                        />
                        <FAQItem
                            question="How does consultancy help in the loan process?"
                            answer="Professional consultancy helps with financial planning, identifying suitable loan and subsidy options, preparing accurate applications, and coordinating with financial institutions for faster approval."
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
