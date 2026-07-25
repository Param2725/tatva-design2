import { useEffect } from "react";
import {
    CheckCircle2,
    ShieldCheck,
    Award,
    Users,
    TrendingUp,
    Target,
    Heart,
    Briefcase,
    MapPin,
    Phone,
    Mail,
    Clock
} from "lucide-react";

export default function AboutUs() {
    useEffect(() => {
        document.title = "About Us - Tatva Consultancy Services | Business Registration & Certification";
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
                        About<br />
                        <span style={{ color: "rgba(255,255,255,0.9)" }}>Tatva Consultancy Services</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
                        Simplifying business registrations and certifications across India since 2022.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium mt-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                        <a href="/" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>Home</a>
                        <span>›</span>
                        <span className="text-white">About Us</span>
                    </div>
                </div>
            </section>

            {/* About the Firm */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        {/* Left: Visual Card */}
                        <div>
                            <div
                                className="rounded-2xl p-8"
                                style={{
                                    background: "linear-gradient(135deg, #03045e, #023e8a)",
                                    boxShadow: "0 20px 60px rgba(3,4,94,0.25)",
                                }}
                            >
                                <div className="mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "6px" }}>
                                        ABOUT THE FIRM
                                    </p>
                                    <p style={{ color: "white", fontSize: "20px", fontWeight: 700, lineHeight: 1.4 }}>
                                        Tatva Registration & Certification Services Pvt. Ltd.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { value: "2022", label: "Established" },
                                        { value: "1000+", label: "Clients" },
                                        { value: "50+", label: "Services" },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <p style={{ color: "#48cae4", fontSize: "24px", fontWeight: 800, lineHeight: 1 }}>
                                                {stat.value}
                                            </p>
                                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", marginTop: "4px" }}>
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Badges below */}
                            <div className="flex flex-wrap gap-4 mt-6">
                                {[
                                    { icon: ShieldCheck, title: "MCA Authorized", desc: "Registered with Ministry of Corporate Affairs" },
                                    { icon: TrendingUp, title: "500+ Businesses", desc: "Successfully registered across India" },
                                ].map((h) => (
                                    <div
                                        key={h.title}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl"
                                        style={{ background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", border: "1px solid #e0f2fe", flex: "1 1 auto", minWidth: "200px" }}
                                    >
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e0f2fe" }}>
                                            <h.icon size={18} style={{ color: "#0077b6" }} />
                                        </div>
                                        <div>
                                            <p style={{ color: "#03045e", fontSize: "13px", fontWeight: 700 }}>{h.title}</p>
                                            <p style={{ color: "#6b7280", fontSize: "11px" }}>{h.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div>
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                                style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}
                            >
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#0077b6" }} />
                                <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
                                    OUR STORY
                                </span>
                            </div>

                            <h2 className="mb-5" style={{ color: "#03045e", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.3px" }}>
                                Your Trusted Partner for Business Compliance
                            </h2>

                            <div className="space-y-4 text-gray-600 text-base leading-relaxed text-justify">
                                <p>
                                    Established in <strong style={{ color: "#03045e" }}>2022 in Ahmedabad</strong>, <strong style={{ color: "#03045e" }}>Tatva Registration & Certification Services Pvt. Ltd.</strong> is a leading <strong style={{ color: "#03045e" }}>business compliance consultancy</strong> delivering end-to-end regulatory solutions across India.
                                </p>
                                <p>
                                    We exclusively provide <strong style={{ color: "#0077b6" }}>Company Registration, Startup India, MSME (Udyam), Trademark & Logo, GeM, ISO/CE/GMP, NSIC-CSPO, IEM, R&B Approvals, Project Loans, Factory Act Licence, and GPCB/BIS/IBR Certification</strong>. We navigate complex frameworks so you stay 100% compliant.
                                </p>
                                <p>
                                    Beyond compliance, we conduct <strong style={{ color: "#03045e" }}>industrial seminars</strong> to educate SMEs on corporate governance, intellectual property, and government subsidies.
                                </p>
                                <p>
                                    Led by <strong style={{ color: "#03045e" }}>Founder Bharat Prajapati</strong>, our expert team ensures reliable, affordable support for startups and established enterprises alike.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Committed, Best Service, Satisfaction */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                            Why Choose Tatva Consultancy?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Our ethical business policies, client-centric approach, and transparent dealings have helped us achieve a reputed name in the industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Committed to Quality",
                                desc: "We have established ourselves as leading enterprises actively committed towards offering best quality services. Our team is hired based on experience, qualification, and domain knowledge.",
                                color: "#0077b6"
                            },
                            {
                                icon: Award,
                                title: "Best-in-Class Service",
                                desc: "Our services are highly demanded in the market for their timely execution, reliability, and cost-effectiveness. We plan and deliver services as per your specific requirements.",
                                color: "#00b4d8"
                            },
                            {
                                icon: Heart,
                                title: "Client Satisfaction",
                                desc: "We are able to attain complete satisfaction of our clients through close interaction, understanding their specific requirements, and delivering services accordingly.",
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
                                <h3 className="text-xl font-bold mb-4" style={{ color: "#03045e" }}>{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-justify">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                                style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}
                            >
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#0077b6" }} />
                                <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
                                    OUR VALUES
                                </span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#03045e" }}>
                                What Sets Us Apart
                            </h2>

                            <ul className="space-y-4">
                                {[
                                    "Ethical business policies and transparent dealings",
                                    "Client-centric approach with personalized solutions",
                                    "Easy payment modes and flexible packages",
                                    "Timely execution and on-time delivery",
                                    "Dedicated relationship manager for every client",
                                    "Post-registration compliance support included",
                                    "Secure digital document handling",
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#f77f00" }} />
                                        <span className="text-gray-700 font-medium text-base">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Office Info Card */}
                        <div className="bg-blue-50 p-8 lg:p-10 rounded-2xl border border-blue-100 relative shadow-lg">
                            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-30" style={{ background: "#48cae4", filter: "blur(20px)" }} />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{ background: "#caf0f8", filter: "blur(20px)" }} />
                            <h3 className="text-2xl lg:text-3xl font-bold mb-8 relative z-10" style={{ color: "#03045e" }}>
                                Our Office
                            </h3>
                            <div className="space-y-5 relative z-10">
                                <a
                                    href="https://maps.app.goo.gl/Z2TjydDZhWUBLQxS6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 group"
                                    style={{ textDecoration: "none" }}
                                >
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e0f2fe" }}>
                                        <MapPin size={18} style={{ color: "#0077b6" }} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold mb-1" style={{ color: "#03045e" }}>Address</p>
                                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-600 transition-colors">
                                            10th Floor, I-Square Corporate Park, 1007, Science City Rd, nr. Shukan Mall, Panchamrut Bunglows II, Sola, Ahmedabad, Gujarat 380060
                                        </p>
                                    </div>
                                </a>
                                <a href="tel:+919825310954" className="flex items-start gap-3" style={{ textDecoration: "none" }}>
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e0f2fe" }}>
                                        <Phone size={18} style={{ color: "#0077b6" }} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold mb-1" style={{ color: "#03045e" }}>Phone</p>
                                        <p className="text-gray-600 text-sm">+91-9825310954</p>
                                    </div>
                                </a>
                                <div className="space-y-2">
                                    <a href="mailto:info@tatvaconsultancy.in" className="flex items-start gap-3" style={{ textDecoration: "none" }}>
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e0f2fe" }}>
                                            <Mail size={18} style={{ color: "#0077b6" }} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold mb-1" style={{ color: "#03045e" }}>Email</p>
                                            <p className="text-gray-600 text-sm">info@tatvaconsultancy.in</p>
                                        </div>
                                    </a>
                                    <a href="mailto:helpmsme@gmail.com" className="flex items-start gap-3 ml-[52px]" style={{ textDecoration: "none" }}>
                                        <p className="text-gray-600 text-sm">helpmsme@gmail.com</p>
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e0f2fe" }}>
                                        <Clock size={18} style={{ color: "#0077b6" }} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold mb-1" style={{ color: "#03045e" }}>Working Hours</p>
                                        <p className="text-gray-600 text-sm">Mon – Sat: 9:00 AM – 6:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 lg:py-20"
                style={{ background: "linear-gradient(135deg, #03045e 0%, #023e8a 100%)" }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
                        Let our experienced team help you with business registration, certification, and compliance services. Contact us today for a free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: "#f77f00",
                                boxShadow: "0 4px 16px rgba(247,127,0,0.4)",
                                textDecoration: "none"
                            }}
                        >
                            Get Free Consultation
                        </a>
                        <a
                            href="tel:+919825310954"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                            style={{
                                background: "rgba(255,255,255,0.1)",
                                border: "1.5px solid rgba(255,255,255,0.25)",
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            📞 Call: +91-9825310954
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
