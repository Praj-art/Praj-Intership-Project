import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowLeft, FaDirections } from "react-icons/fa";

function GoogleMaps({ setActive }) {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 fade-in-up">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="section-title text-3xl sm:text-4xl font-bold text-[#4A2F22] pb-2">
            Our Location
          </h1>
          <p className="text-sm text-[#8B6B52] mt-3">Find us on the map — always easy to reach</p>
        </div>
        <button
          type="button"
          onClick={() => setActive("My Profile")}
          className="flex items-center gap-2 text-sm font-semibold text-[#8B6B52] hover:text-[#4A2F22] transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back
        </button>
      </div>

      {/* Map iframe */}
      <div className="rounded-3xl overflow-hidden border-2 border-[#E8D5C0] shadow-xl mb-8 relative">
        <iframe
          title="Cafe Location"
          src="https://www.google.com/maps?q=FC+Road,Shivajinagar,Pune,Maharashtra&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          allowFullScreen
        />
        <a
          href="https://www.google.com/maps?q=FC+Road,Shivajinagar,Pune"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-4 right-4 cafe-btn text-xs py-2 px-4 flex items-center gap-1.5"
        >
          <FaDirections />
          Get Directions
        </a>
      </div>

      {/* Info panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: <FaMapMarkerAlt />,
            label: "Address",
            value: "FC Road, Shivajinagar, Pune, Maharashtra — 411005",
            iconBg: "bg-[#C97A2B]",
          },
          {
            icon: <FaPhone />,
            label: "Phone",
            value: "+91 98765 43210",
            iconBg: "bg-blue-500",
          },
          {
            icon: <FaEnvelope />,
            label: "Email",
            value: "support@cafedashboard.com",
            iconBg: "bg-emerald-500",
          },
          {
            icon: <FaClock />,
            label: "Hours",
            value: "Open Daily · 9:00 AM – 10:00 PM",
            iconBg: "bg-violet-500",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#FDFAF7] border border-[#E8D5C0] hover:border-[#C97A2B]/40 rounded-2xl p-4 hover:shadow-md transition-all duration-300 group"
          >
            <div className={`w-9 h-9 ${item.iconBg} rounded-xl flex items-center justify-center text-white text-sm mb-3 group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <p className="label-sm mb-1">{item.label}</p>
            <p className="text-sm text-[#4A2F22] font-semibold leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoogleMaps;