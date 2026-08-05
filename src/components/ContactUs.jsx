import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaArrowLeft, FaCheck, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function ContactUs({ setActive }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
      setActive("My Profile");
    }, 1500);
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: "Location",  value: "FC Road, Shivajinagar, Pune" },
    { icon: <FaPhone />,        label: "Phone",     value: "+91 98765 43210" },
    { icon: <FaEnvelope />,     label: "Email",     value: "support@cafedashboard.com" },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 fade-in-up">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="section-title text-3xl sm:text-4xl font-bold text-[#4A2F22] pb-2">
            Contact Us
          </h1>
          <p className="text-sm text-[#8B6B52] mt-3">We'd love to hear from you</p>
        </div>
        <button
          type="button"
          onClick={() => setActive("My Profile")}
          className="flex items-center gap-2 text-sm font-semibold text-[#8B6B52] hover:text-[#4A2F22] transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
          <div>
            <label className="label-sm">Your Name</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C97A2B] text-sm" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="cafe-input pl-11"
              />
            </div>
          </div>

          <div>
            <label className="label-sm">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C97A2B] text-sm" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="cafe-input pl-11"
              />
            </div>
          </div>

          <div>
            <label className="label-sm">Message</label>
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-[#C97A2B] text-sm" />
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="cafe-input pl-11 resize-none"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              ⚠️ {error}
            </p>
          )}

          <button
            type="submit"
            className={`cafe-btn w-full sm:w-auto ${sent ? "!bg-gradient-to-r !from-green-500 !to-emerald-600 !shadow-green-500/30" : ""}`}
          >
            {sent ? <><FaCheck className="text-sm" /> Message Sent!</> : "Send Message"}
          </button>
        </form>

        {/* Contact info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gradient-to-br from-[#2B1A12] to-[#4A2F22] rounded-3xl p-6 text-white">
            <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
            <p className="text-sm text-[#D4A87C] mb-6 leading-relaxed">
              We'd love to welcome you for a cup of coffee and a relaxing experience.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C97A2B]/20 flex items-center justify-center text-[#C97A2B] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#8B6B52] font-semibold uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-white mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <p className="text-xs text-[#8B6B52]">🕘 Open daily · 9:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;