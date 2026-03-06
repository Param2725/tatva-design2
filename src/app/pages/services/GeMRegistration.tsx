import { useEffect, useState } from "react";
import {
    ShoppingCart,
    Building2,
    Users,
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

export default function GeMRegistration() {
    useEffect(() => {
        document.title = "GeM Registration Services | Government e-Marketplace Seller Registration";
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
                        GeM Registration Services
                    </h1>
                    <p className="text-lg md:text-xl mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>Government e-Marketplace</p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">GeM Registration</span>
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
                                The <strong style={{ color: "#03045e" }}>Government e-Marketplace (GeM)</strong> is an online procurement platform created by the Government of India to simplify the process of purchasing goods and services by government departments and public sector organizations.
                            </p>
                            <p>
                                Through GeM registration, businesses can directly sell their products or services to <strong style={{ color: "#03045e" }}>government buyers across India</strong>. The platform provides a transparent, digital, and efficient procurement system where vendors can list their offerings, participate in bids, and receive orders from government departments.
                            </p>
                            <p>
                                Our consultancy provides professional assistance for GeM registration, helping businesses complete the registration process smoothly and start supplying goods or services to <strong style={{ color: "#03045e" }}>government organizations</strong>.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is GeM Registration?
                            </h2>
                            <p>
                                GeM (Government e-Marketplace) is a <strong style={{ color: "#03045e" }}>digital platform</strong> designed to facilitate procurement of goods and services by government ministries, departments, and public sector units. Businesses that register as sellers or service providers can list their products on the platform and supply directly to government buyers.
                            </p>
                            <p>
                                The platform aims to improve <strong style={{ color: "#0077b6" }}>transparency, reduce paperwork</strong>, and create a fair marketplace where businesses of all sizes can participate in government procurement.
                            </p>
                            <p>
                                Once registered, businesses can receive orders from government buyers, participate in <strong style={{ color: "#03045e" }}>online bidding</strong>, and manage transactions through a fully digital system.
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

            {/* Who Can Register */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Who Can Register on GeM?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Several types of entities can register as sellers or service providers on the GeM portal.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Users, label: "Proprietorship Businesses" },
                            { icon: Building2, label: "Partnership Firms" },
                            { icon: FileText, label: "LLPs & Pvt Ltd Companies" },
                            { icon: ShoppingCart, label: "Manufacturers & Traders" },
                            { icon: Globe, label: "Service Providers & Consultants" },
                            { icon: TrendingUp, label: "Startups & MSMEs" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                            >
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e0f2fe" }}>
                                    <item.icon size={20} style={{ color: "#0077b6" }} />
                                </div>
                                <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-8">
                        Any legally recognized business that supplies goods or services required by government departments can apply.
                    </p>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Benefits of GeM Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Registering on the GeM portal provides multiple advantages for businesses looking to work with government organizations.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Direct Access to Government Buyers", icon: Building2, points: [
                                    <>Supply products or services directly to <strong style={{ color: "#03045e" }}>government departments</strong></>,
                                    <>Access <strong style={{ color: "#03045e" }}>ministries and public sector enterprises</strong> across India</>
                                ]
                            },
                            {
                                title: "Transparent Procurement Process", icon: ShieldCheck, points: [
                                    <>All transactions are <strong style={{ color: "#03045e" }}>recorded digitally</strong></>,
                                    <>Fair <strong style={{ color: "#03045e" }}>bidding and evaluation</strong> process</>
                                ]
                            },
                            {
                                title: "Increased Business Opportunities", icon: TrendingUp, points: [
                                    <>Access a <strong style={{ color: "#03045e" }}>large market</strong> of government buyers</>,
                                    <>Expand <strong style={{ color: "#03045e" }}>reach and potential revenue</strong></>
                                ]
                            },
                            {
                                title: "Faster and Secure Payments", icon: Banknote, points: [
                                    <>Payments processed through <strong style={{ color: "#03045e" }}>secure digital systems</strong></>,
                                    <>Reliable <strong style={{ color: "#03045e" }}>payment timelines</strong> ensured</>
                                ]
                            },
                            {
                                title: "Special MSME & Startup Opportunities", icon: Award, points: [
                                    <>Additional <strong style={{ color: "#03045e" }}>opportunities and preferences</strong> for MSMEs</>,
                                    <>Government policies <strong style={{ color: "#03045e" }}>support startups</strong> on GeM platform</>
                                ]
                            }
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg"
                                style={{ width: 'calc(33.333% - 22px)', minWidth: '280px' }}
                            >
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(72,202,228,0.1)", color: "#03045e" }}>
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
                            GeM Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The registration process involves several steps to verify the business and allow it to operate on the platform.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Create GeM Account", desc: "The business owner or authorized person creates an account on the GeM portal." },
                            { step: 2, title: "Business Verification", desc: "Business details such as PAN, GST information, and bank details are submitted for verification." },
                            { step: 3, title: "Seller Profile Creation", desc: "The seller profile is completed by providing company information and product or service categories." },
                            { step: 4, title: "Product or Service Listing", desc: "Businesses can list their products or services on the GeM portal with pricing and specifications." },
                            { step: 5, title: "Start Bidding or Receiving Orders", desc: "Once approved, sellers can participate in bids, auctions, or receive direct purchase orders from government buyers." }
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
                                Why Choose Professional GeM Registration Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                Although GeM registration is an online process, many businesses face challenges in understanding the portal requirements, <strong style={{ color: "#03045e" }}>listing products correctly</strong>, and completing verification.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                Professional consultancy services help businesses complete the registration process <strong style={{ color: "#03045e" }}>accurately and efficiently</strong>. Expert assistance ensures proper documentation, smooth verification, and guidance on how to start selling successfully on the GeM portal.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                With the right support, businesses can quickly access <strong style={{ color: "#03045e" }}>government procurement opportunities</strong> and expand their market reach.
                            </p>
                        </div>

                        {/* Why Our Consultancy Card */}
                        <div className="bg-blue-50 p-8 lg:p-10 rounded-2xl border border-blue-100 relative shadow-lg">
                            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-30" style={{ background: "#48cae4", filter: "blur(20px)" }} />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{ background: "#caf0f8", filter: "blur(20px)" }} />
                            <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative z-10" style={{ color: "#03045e" }}>
                                Why Our Consultancy?
                            </h3>
                            <p className="text-gray-700 leading-relaxed relative z-10 text-lg mb-4 text-justify">
                                Our team provides complete GeM registration support, from <span style={{ color: "#0077b6", fontWeight: 600 }}>account creation to product listing and bid participation</span>.
                            </p>
                            <p className="text-gray-700 leading-relaxed relative z-10 text-lg text-justify">
                                We help businesses <span style={{ color: "#03045e", fontWeight: 600 }}>navigate the portal, complete verification, and start selling to government buyers</span> — opening up a massive new revenue channel.
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
                            Find answers to common questions about GeM registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="Is GeM registration mandatory for government sellers?"
                            answer="GeM registration is not mandatory, but it is essential for any business that wants to sell products or services to government departments through the official procurement platform."
                        />
                        <FAQItem
                            question="What documents are needed for GeM registration?"
                            answer="You'll need PAN, GST certificate, bank account details, business address proofs, and product/service details for listing on the portal."
                        />
                        <FAQItem
                            question="How long does GeM registration take?"
                            answer="GeM registration can typically be completed within 2–4 working days once all required documents and information are submitted."
                        />
                        <FAQItem
                            question="Can MSMEs and startups benefit from GeM?"
                            answer="Yes, government procurement policies provide additional preferences and opportunities for MSMEs and startups on the GeM platform, making it especially beneficial for smaller businesses."
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
