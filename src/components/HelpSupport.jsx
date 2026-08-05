import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaArrowLeft, FaHeadset } from "react-icons/fa";

function HelpSupport({ setActive }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I edit my profile?",
      answer: "Go to Edit Profile from the sidebar, update your details such as name, email, phone, and address, then click Save Changes to apply the updates.",
    },
    {
      question: "How can I change my password?",
      answer: "Open Change Password from the sidebar or dashboard card, enter your current password followed by your new password, and confirm it.",
    },
    {
      question: "How do I contact the café?",
      answer: "Use the Contact Us page to send us a message directly, or call us at +91 98765 43210 during business hours.",
    },
    {
      question: "What are the café opening hours?",
      answer: "We are open every day from 9:00 AM to 10:00 PM. You're always welcome!",
    },
    {
      question: "How do I find the café location?",
      answer: "Open the Google Maps section in the sidebar to view our exact location on the map and get directions.",
    },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 fade-in-up">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="section-title text-3xl sm:text-4xl font-bold text-[#4A2F22] pb-2">
            Help & Support
          </h1>
          <p className="text-sm text-[#8B6B52] mt-3">Frequently asked questions</p>
        </div>
        <button
          type="button"
          onClick={() => setActive("My Profile")}
          className="flex items-center gap-2 text-sm font-semibold text-[#8B6B52] hover:text-[#4A2F22] transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back
        </button>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3 mb-8">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === i
                ? "border-[#C97A2B]/40 shadow-md"
                : "border-[#E8D5C0] hover:border-[#C97A2B]/30"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-[#FDFAF7] transition-colors"
            >
              <span className="font-semibold text-[#4A2F22] text-sm sm:text-base pr-4">
                {faq.question}
              </span>
              <span className={`text-[#C97A2B] flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                <FaChevronDown className="text-sm" />
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 bg-[#FDFAF7] border-t border-[#E8D5C0]">
                <p className="text-sm text-[#6B4226] leading-relaxed pt-3">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Support card */}
      <div className="bg-gradient-to-br from-[#2B1A12] to-[#4A2F22] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-[#C97A2B]/20 flex items-center justify-center flex-shrink-0">
          <FaHeadset className="text-[#C97A2B] text-2xl" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-1">Need More Help?</h2>
          <p className="text-sm text-[#D4A87C]">
            Our support team is available Monday–Saturday, 9:00 AM – 8:00 PM.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <span className="text-white">📧 support@cafedashboard.com</span>
            <span className="text-white">📞 +91 98765 43210</span>
          </div>
        </div>
        <button
          onClick={() => setActive("Contact Us")}
          className="cafe-btn text-sm whitespace-nowrap flex-shrink-0"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
}

export default HelpSupport;