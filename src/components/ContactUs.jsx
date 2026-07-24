import { useState } from "react";

function ContactUs() {
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

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-[#4A2F22] mb-8">
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
            className="w-full border rounded-lg p-3"
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
            className="w-full border rounded-lg p-3"
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
            className="w-full border rounded-lg p-3"
          />
        </div>
        <div className="mt-8 flex justify-start">
        <button
          type="submit"
          className="bg-[#C97A2B] text-white px-10 py-3 rounded-2xl hover:bg-[#a86422]"
        >
          Send Message
        </button>
         </div>
      </form>
    </div>
  );
}

export default ContactUs;