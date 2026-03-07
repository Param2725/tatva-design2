import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const services = [
  "Company Registration (Pvt. Ltd.)",
  "LLP Registration",
  "One Person Company (OPC)",
  "Partnership Firm",
  "ISO Certification",
  "Trademark Registration",
  "MSME / Udyam Registration",
  "Startup India Registration",
  "Annual Compliance",
  "Other / Not Sure",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Call / WhatsApp",
      value: "+91-9825310954",
      href: "tel:+919825310954",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@tatvaconsultancy.in",
      href: "mailto:info@tatvaconsultancy.in",
    },
    {
      icon: Mail,
      label: "Support Email",
      value: "helpmsme@gmail.com",
      href: "mailto:helpmsme@gmail.com",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Ahmedabad, Gujarat",
      href: "https://maps.app.goo.gl/Z2TjydDZhWUBLQxS6",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon – Sat: 9 AM – 7 PM",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "white",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#0077b6" }} />
            <span style={{ color: "#0077b6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
              GET IN TOUCH
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              color: "#03045e",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.3px",
              lineHeight: 1.2,
            }}
          >
            Start Your Free Consultation
          </h2>
          <p
            className="mx-auto"
            style={{
              color: "#4b5563",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Fill out the form and our expert will reach you within 2 hours during business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Card */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: "linear-gradient(135deg, #03045e, #023e8a)",
              }}
            >
              <h3
                className="mb-2"
                style={{ color: "white", fontSize: "18px", fontWeight: 700 }}
              >
                Contact Information
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13.5px", marginBottom: "24px" }}>
                Reach out via call, email, or fill the form.
              </p>

              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-3 group"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(72,202,228,0.2)" }}
                      >
                        <Icon size={16} style={{ color: "#48cae4" }} />
                      </div>
                      <div>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3px" }}>
                          {info.label}
                        </p>
                        <p style={{ color: "white", fontSize: "14px", fontWeight: 600, marginTop: "2px" }}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Points */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "#f0f9ff", border: "1.5px solid #e0f2fe" }}
            >
              <h4 style={{ color: "#03045e", fontSize: "14px", fontWeight: 700, marginBottom: "14px" }}>
                What Happens After You Submit?
              </h4>
              <ul className="space-y-3">
                {[
                  "An expert reviews your requirements",
                  "We call you within 2 business hours",
                  "Receive a custom quote instantly",
                  "Begin registration the same day",
                ].map((point, i) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#0077b6" }}
                    >
                      <span style={{ color: "white", fontSize: "10px", fontWeight: 800 }}>{i + 1}</span>
                    </div>
                    <span style={{ color: "#374151", fontSize: "13px", fontWeight: 500 }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-7 lg:p-9"
              style={{
                background: "white",
                border: "1.5px solid #e2f4fb",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "#dcfce7" }}
                  >
                    <CheckCircle size={32} style={{ color: "#16a34a" }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{ color: "#03045e", fontSize: "20px", fontWeight: 800 }}
                  >
                    Thank You!
                  </h3>
                  <p style={{ color: "#4b5563", fontSize: "15px", lineHeight: 1.6, maxWidth: "360px" }}>
                    Your enquiry has been received. Our expert will contact you within 2 business hours.
                  </p>
                  <button
                    className="mt-6 px-6 py-2.5 rounded-xl text-sm"
                    style={{
                      background: "#e0f2fe",
                      color: "#0077b6",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", service: "", message: "" });
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        style={{ color: "#374151", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}
                      >
                        Full Name <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                        style={{
                          background: "#f8fafc",
                          border: "1.5px solid #e2e8f0",
                          color: "#111827",
                          fontSize: "14px",
                        }}
                        onFocus={(e) => {
                          (e.target as HTMLElement).style.borderColor = "#0077b6";
                          (e.target as HTMLElement).style.background = "white";
                          (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,119,182,0.1)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                          (e.target as HTMLElement).style.background = "#f8fafc";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        style={{ color: "#374151", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}
                      >
                        Phone Number <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                        style={{
                          background: "#f8fafc",
                          border: "1.5px solid #e2e8f0",
                          color: "#111827",
                          fontSize: "14px",
                        }}
                        onFocus={(e) => {
                          (e.target as HTMLElement).style.borderColor = "#0077b6";
                          (e.target as HTMLElement).style.background = "white";
                          (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,119,182,0.1)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                          (e.target as HTMLElement).style.background = "#f8fafc";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      style={{ color: "#374151", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}
                    >
                      Email Address <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                      style={{
                        background: "#f8fafc",
                        border: "1.5px solid #e2e8f0",
                        color: "#111827",
                        fontSize: "14px",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "#0077b6";
                        (e.target as HTMLElement).style.background = "white";
                        (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,119,182,0.1)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                        (e.target as HTMLElement).style.background = "#f8fafc";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label
                      htmlFor="service"
                      style={{ color: "#374151", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}
                    >
                      Service Required <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 appearance-none"
                      style={{
                        background: "#f8fafc",
                        border: "1.5px solid #e2e8f0",
                        color: form.service ? "#111827" : "#9ca3af",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "#0077b6";
                        (e.target as HTMLElement).style.background = "white";
                        (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,119,182,0.1)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                        (e.target as HTMLElement).style.background = "#f8fafc";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      style={{ color: "#374151", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}
                    >
                      Brief Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about your business..."
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "#f8fafc",
                        border: "1.5px solid #e2e8f0",
                        color: "#111827",
                        fontSize: "14px",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "#0077b6";
                        (e.target as HTMLElement).style.background = "white";
                        (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,119,182,0.1)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                        (e.target as HTMLElement).style.background = "#f8fafc";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white"
                    style={{
                      background: loading
                        ? "#9ca3af"
                        : "#f77f00",
                      fontWeight: 700,
                      fontSize: "15px",
                      boxShadow: loading ? "none" : "0 4px 20px rgba(247,127,0,0.35)",
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {loading ? (
                      <>
                        <div
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Request Free Consultation
                      </>
                    )}
                  </button>

                  <p style={{ color: "#9ca3af", fontSize: "12px", textAlign: "center" }}>
                    By submitting, you agree to our privacy policy. We respect your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
