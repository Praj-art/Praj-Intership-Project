function GoogleMaps({ setActive }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#4A2F22] mb-6">
        Our Location
      </h1>

      <p className="text-gray-600 text-sm sm:text-base mb-6">
  Find us easily using the Google Map below. We are always ready to serve you with fresh coffee and delicious food.
</p>

      <div className="rounded-xl overflow-hidden shadow-md w-full">
        <iframe
          title="Cafe Location"
          src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

       <div className="mt-8 bg-[#F8F5F2] p-4 sm:p-6 rounded-2xl shadow-md">
        <h2 className="text-lg sm:text-xl font-bold text-[#4A2F22]">
          Café Address
        </h2>

        <p className="mt-2">
          Café Dashboard
          <br />
          FC Road, 
          Shivajinagar,
          <br />
          Pune, Maharashtra - 411005
          <br />
          India
        </p>

        <p className="mt-4">
          📞 +91 98765 43210
          (Open Everyday : 9:00 AM - 10:00 PM)
        </p>

        <p>
          ✉ support@cafedashboard.com
        </p>
            </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => setActive("My Profile")}
          className="bg-[#C97A2B] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#B56B22] transition-all duration-300"
        >
          ← Back to My Profile
        </button>
      </div>

    </div>
  );
}

export default GoogleMaps;