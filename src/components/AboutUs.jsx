function AboutUs() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-[#4A2F22] mb-6">
        About Us
      </h1>

      {/* Our Story */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#C97A2B] mb-3">
          ☕ Our Story
        </h2>

        <p className="text-gray-700 leading-7">
          Café Dashboard was created to provide customers with a simple,
          fast, and enjoyable café experience. Our goal is to serve
          delicious coffee, fresh food, and excellent customer service
          in a warm and welcoming environment.
        </p>
      </div>

      {/* Mission */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#C97A2B] mb-3">
          🎯 Our Mission
        </h2>

        <p className="text-gray-700 leading-7">
          Our mission is to deliver quality food and beverages while
          creating memorable moments for every customer through
          outstanding service and a relaxing atmosphere.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#C97A2B] mb-3">
          🌟 Why Choose Us?
        </h2>

        <ul className="list-disc ml-8 space-y-3 text-gray-700 leading-7">
          <li>Freshly brewed coffee every day</li>
          <li>Delicious snacks and desserts</li>
          <li>Comfortable and modern seating</li>
          <li>Friendly and professional staff</li>
          <li>Fast customer service</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="bg-[#F8F5F2] rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-[#4A2F22] mb-4">
          Contact Information
        </h2>
        <p className="text-gray-600 mb-5">
         We'd love to welcome you for a cup of coffee and a relaxing experience.
        </p>
        <p className="mb-2 text-lg">
        📍 FC Road, Shivajinagar, Pune
        </p>

         <p className="mb-2 text-lg">
         📞 +91 98765 43210
         </p>

          <p className="text-lg">
          ✉️ support@cafedashboard.com
         </p>
      </div>
    </div>
  );
}

export default AboutUs;