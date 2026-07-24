function HelpSupport() {
  const faqs = [
    {
      question: "How do I edit my profile?",
      answer: "Go to Edit Profile from the sidebar, update your details and click Save Changes."
    },
    {
      question: "How can I change my password?",
      answer: "Open Change Password, enter your old password and your new password."
    },
    {
      question: "How do I contact the café?",
      answer: "Use the Contact Us page or call us at +91 98765 43210."
    },
    {
      question: "What are the café opening hours?",
      answer: "We are open every day from 9:00 AM to 10:00 PM."
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-[#4A2F22] mb-6">
        Help & Support
      </h1>

      <p className="text-gray-600 mb-8">
        Find answers to common questions or contact our support team.
      </p>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 bg-[#F8F5F2] shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="font-bold text-xl text-[#4A2F22]">
              {faq.question}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#FFF3E0] p-6 rounded-2xl shadow-md">
        <h2 className="font-bold text-2xl text-[#4A2F22]">
          Need More Help?
        </h2>
        <p className="text-gray-600 mt-2">
        Our support team is available Monday to Saturday from 9:00 AM to 8:00 PM.
        </p>
        <p className="mt-5 text-lg font-medium">
          📧 support@cafedashboard.com
        </p>

        <p className="mt-3 text-lg font-medium">
          📞 +91 98765 43210
        </p>
      </div>
    </div>
  );
}

export default HelpSupport;