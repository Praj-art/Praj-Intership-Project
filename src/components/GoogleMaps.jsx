function GoogleMaps() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-[#4A2F22] mb-6">
        Our Location
      </h1>

      <p className="text-gray-600 mb-6">
  Find us easily using the Google Map below. We are always ready to serve you with fresh coffee and delicious food.
</p>

      <div className="rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Cafe Location"
          src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

       <div className="mt-8 bg-[#F8F5F2] p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-[#4A2F22]">
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
    </div>
  );
}

export default GoogleMaps;