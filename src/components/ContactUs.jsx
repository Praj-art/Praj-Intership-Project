import { useState } from "react";

function ContactUs({ setActive }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    alert("Message sent successfully!");

    setActive("My Profile");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#4A2F22] mb-6">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block font-semibold mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3 text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3 text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Message
          </label>

          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border rounded-lg p-3 text-sm sm:text-base"
          />
        </div>
        <div className="mt-8 flex justify-center sm:justify-start">
        <button
          type="submit"
          className="bg-[#C97A2B] text-white w-full sm:w-auto px-10 py-3 rounded-2xl hover:bg-[#a86422] transition"
        >
          Send Message
        </button>
         </div>
         <div className="bg-[#F8F5F2] rounded-2xl p-6 sm:p-8 shadow-md mt-10">
  <h2 className="text-2xl font-bold text-[#4A2F22] mb-4">
    Contact Information
  </h2>

  <p className="text-gray-600 mb-5">
    We'd love to welcome you for a cup of coffee and a relaxing experience.
  </p>

  <div className="space-y-4 text-[#4A2F22]">
  <p className="flex items-center gap-3 text-lg">
    <span className="text-[#C97A2B] text-xl">📍</span>
    FC Road, Shivajinagar, Pune
  </p>

  <p className="flex items-center gap-3 text-lg">
    <span className="text-[#C97A2B] text-xl">📞</span>
    +91 98765 43210
  </p>

  <p className="flex items-center gap-3 text-lg">
    <span className="text-[#C97A2B] text-xl">✉️</span>
    support@cafedashboard.com
  </p>
</div>
</div>
<div className="mt-8 flex justify-center sm:justify-end">
  <button
    type="button"
    onClick={() => setActive("My Profile")}
    className="bg-[#C97A2B] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#B56B22] transition-all duration-300"
  >
    ← Back to My Profile
  </button>
</div>
      </form>
    </div>
  );
  
}

export default ContactUs;