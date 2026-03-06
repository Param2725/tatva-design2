import { useEffect, useState } from "react";
import {
    Fingerprint,
    Building2,
    Users,
    CheckCircle2,
    ShieldCheck,
    Award,
    Banknote,
    Globe,
    TrendingUp,
    FileText,
    Search,
    Send,
    BookOpen,
    ArrowRight,
    ChevronDown
} from "lucide-react";

export default function TrademarkRegistration() {
    useEffect(() => {
        document.title = "Trademark Registration Services in India | Brand Name & Logo Protection";
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
                        Trademark Registration Services in India
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">Trademark Registration</span>
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
                                A strong brand identity is essential for any business operating in a competitive market. A <strong style={{ color: "#03045e" }}>trademark</strong> helps distinguish your products or services from others by protecting your brand name, logo, slogan, or symbol.
                            </p>
                            <p>
                                Trademark registration provides <strong style={{ color: "#03045e" }}>legal ownership and exclusive rights</strong> to use the mark in connection with your business activities. It prevents others from copying or misusing your brand identity and gives you the authority to take legal action against infringement.
                            </p>
                            <p>
                                Our trademark registration consultancy assists businesses, startups, and entrepreneurs in securing their <strong style={{ color: "#03045e" }}>brand identity</strong> through a smooth and efficient registration process.
                            </p>

                            <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-6" style={{ color: "#03045e" }}>
                                What is a Trademark?
                            </h2>
                            <p>
                                A trademark is a <strong style={{ color: "#03045e" }}>distinctive sign</strong> that identifies and differentiates the goods or services of one business from those of another. It may include a word, name, logo, symbol, design, phrase, or combination of these elements.
                            </p>
                            <p>
                                Under the <strong style={{ color: "#0077b6" }}>Indian Trade Marks Act, 1999</strong>, a trademark must be capable of graphical representation and should clearly distinguish a business's products or services from competitors.
                            </p>
                            <p>
                                Registering a trademark ensures that your brand identity is <strong style={{ color: "#03045e" }}>legally protected</strong> and cannot be used by others without authorization.
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

            {/* Importance of Trademark Registration */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Importance of Trademark Registration
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Protecting your brand is an important step in building a successful business. Trademark registration provides legal security and strengthens your brand's position in the market.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Brand Protection", icon: ShieldCheck, points: [
                                    <>Grants <strong style={{ color: "#03045e" }}>exclusive rights</strong> to use your brand name or logo</>,
                                    <>Prevents <strong style={{ color: "#03045e" }}>unauthorized use</strong> by competitors</>
                                ]
                            },
                            {
                                title: "Legal Ownership", icon: FileText, points: [
                                    <>Establishes <strong style={{ color: "#03045e" }}>legal ownership</strong> of the brand</>,
                                    <>Allows taking <strong style={{ color: "#03045e" }}>legal action</strong> against infringement or misuse</>
                                ]
                            },
                            {
                                title: "Business Credibility", icon: Award, points: [
                                    <>Enhances <strong style={{ color: "#03045e" }}>trust among customers</strong>, investors, and partners</>,
                                    <>Demonstrates that the brand is <strong style={{ color: "#03045e" }}>officially recognized</strong></>
                                ]
                            },
                            {
                                title: "Market Differentiation", icon: Globe, points: [
                                    <>Helps businesses <strong style={{ color: "#03045e" }}>stand out</strong> in a crowded marketplace</>,
                                    <>Creates a <strong style={{ color: "#03045e" }}>unique identity</strong> for products or services</>
                                ]
                            },
                            {
                                title: "Business Asset Creation", icon: TrendingUp, points: [
                                    <>Becomes a valuable <strong style={{ color: "#03045e" }}>intangible asset</strong> over time</>,
                                    <>Can be <strong style={{ color: "#03045e" }}>licensed, franchised, or sold</strong> for business growth</>
                                ]
                            }
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="relative p-8 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg"
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

            {/* Who Can Apply */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                Who Can Apply for Trademark Registration?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                                Trademark registration is available to various types of individuals and organizations. Any entity that wants to protect its brand name, logo, or identity can apply.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Individual entrepreneurs",
                                    "Startups and small businesses",
                                    "Partnership firms",
                                    "Limited Liability Partnerships (LLPs)",
                                    "Private Limited Companies",
                                    "Trusts and societies"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
                                        <CheckCircle2 className="flex-shrink-0 mt-0.5" style={{ color: "#48cae4" }} size={20} />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Trademark Classification */}
                        <div className="bg-blue-50 p-8 lg:p-10 rounded-2xl border border-blue-100 relative shadow-lg">
                            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-30" style={{ background: "#48cae4", filter: "blur(20px)" }} />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{ background: "#caf0f8", filter: "blur(20px)" }} />
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10" style={{ color: "#03045e" }}>
                                Trademark Classification
                            </h3>
                            <p className="text-gray-700 leading-relaxed relative z-10 text-base mb-6 text-justify">
                                Trademark registration is categorized into <strong style={{ color: "#03045e" }}>45 different classes</strong> that represent different types of goods and services. Selecting the correct class determines the protection scope.
                            </p>
                            <div className="space-y-3 relative z-10">
                                {[
                                    { cls: "Class 9", desc: "Electronics and scientific devices" },
                                    { cls: "Class 41", desc: "Education and entertainment services" },
                                    { cls: "Class 43", desc: "Food and hospitality services" },
                                    { cls: "Class 44", desc: "Medical and healthcare services" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                                        <span className="px-2.5 py-1 rounded-md text-xs font-bold text-white" style={{ background: "#0077b6" }}>
                                            {item.cls}
                                        </span>
                                        <span className="text-gray-700 text-sm font-medium">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm mt-4 relative z-10">
                                Businesses operating in multiple sectors may apply for protection under more than one class.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Process */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Trademark Registration Process
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The trademark registration process involves several stages before the final certificate is issued.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { step: 1, title: "Trademark Search", desc: "A search is conducted to verify that the proposed trademark is unique and not already registered by another entity." },
                            { step: 2, title: "Filing the Application", desc: "An application is submitted to the Trademark Registry using the appropriate form with details of the applicant and trademark." },
                            { step: 3, title: "Examination by Trademark Office", desc: "The application is reviewed by a trademark examiner to verify compliance with the Trade Marks Act." },
                            { step: 4, title: "Publication in Trademark Journal", desc: "If accepted, the trademark is published in the Trademark Journal for public review and possible opposition." },
                            { step: 5, title: "Registration Certificate", desc: "If no objections are raised, the trademark is officially registered and a certificate is issued. The owner can use the ® symbol." }
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

            {/* Validity & Renewal */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(72,202,228,0.1)" }}>
                            <BookOpen size={32} style={{ color: "#03045e" }} />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Validity and Renewal of Trademark
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6 mt-10">
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-4xl font-bold mb-2" style={{ color: "#0077b6" }}>10 Years</p>
                                <p className="text-gray-600 text-sm font-medium">Valid from the date of filing</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-4xl font-bold mb-2" style={{ color: "#f77f00" }}>Renewable</p>
                                <p className="text-gray-600 text-sm font-medium">Indefinitely for additional 10-year periods</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mt-8 text-justify max-w-2xl mx-auto">
                            Regular renewal ensures that the trademark remains legally protected for the long term, providing <strong style={{ color: "#03045e" }}>continuous brand protection</strong>.
                        </p>
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
                                Why Choose Professional Trademark Registration Services?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                Trademark registration involves legal procedures, class selection, and compliance with government regulations. Professional consultancy services <strong style={{ color: "#03045e" }}>simplify the process</strong> and reduce the chances of application rejection.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                Expert assistance helps businesses perform <strong style={{ color: "#03045e" }}>accurate trademark searches</strong>, file applications correctly, and respond effectively to objections or oppositions.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                With professional guidance, businesses can <strong style={{ color: "#03045e" }}>secure their brand identity</strong> quickly while ensuring compliance with trademark laws.
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
                                Our team provides end-to-end trademark registration support, from <span style={{ color: "#0077b6", fontWeight: 600 }}>comprehensive trademark searches to certificate issuance</span>.
                            </p>
                            <p className="text-gray-700 leading-relaxed relative z-10 text-lg text-justify">
                                We handle <span style={{ color: "#03045e", fontWeight: 600 }}>class selection, application filing, objection responses, and renewal</span> — so your brand stays legally protected at every stage.
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
                            Find answers to common questions about trademark registration.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="How long does trademark registration take?"
                            answer="The trademark registration process typically takes 18–24 months from filing to registration, depending on whether objections or oppositions are raised."
                        />
                        <FAQItem
                            question="Can I trademark a logo and a name separately?"
                            answer="Yes, you can file separate trademark applications for your brand name and logo. This provides broader protection for your brand identity."
                        />
                        <FAQItem
                            question="What happens if someone opposes my trademark?"
                            answer="If an opposition is filed, a hearing is conducted to resolve the dispute. Professional assistance is valuable in handling objection responses effectively."
                        />
                        <FAQItem
                            question="Is trademark registration valid across India?"
                            answer="Yes, once registered, a trademark is valid and enforceable across the entire territory of India."
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
