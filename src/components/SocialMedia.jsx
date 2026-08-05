import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

function SocialMedia({ setActive }) {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@cafecoffee",
      description: "Follow our daily coffee moments, stories, and behind the scenes.",
      icon: <FaInstagram className="text-2xl" />,
      link: "https://instagram.com",
      gradient: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50 border-rose-200",
    },
    {
      name: "Facebook",
      handle: "Café Coffee",
      description: "Like our page for events, promotions, and community updates.",
      icon: <FaFacebook className="text-2xl" />,
      link: "https://facebook.com",
      gradient: "from-blue-600 to-blue-700",
      bgLight: "bg-blue-50 border-blue-200",
    },
    {
      name: "WhatsApp",
      handle: "+91 98765 43210",
      description: "Chat with us instantly for orders, reservations, or quick queries.",
      icon: <FaWhatsapp className="text-2xl" />,
      link: "https://wa.me/919876543210",
      gradient: "from-green-500 to-emerald-600",
      bgLight: "bg-green-50 border-green-200",
    },
    {
      name: "X (Twitter)",
      handle: "@cafecoffee",
      description: "Stay updated with our latest news and café announcements.",
      icon: <FaTwitter className="text-2xl" />,
      link: "https://x.com",
      gradient: "from-slate-700 to-slate-900",
      bgLight: "bg-slate-50 border-slate-200",
    },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 fade-in-up">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="section-title text-3xl sm:text-4xl font-bold text-[#4A2F22] pb-2">
            Social Media
          </h1>
          <p className="text-sm text-[#8B6B52] mt-3">Stay connected with us everywhere</p>
        </div>
        <button
          type="button"
          onClick={() => setActive("My Profile")}
          className="flex items-center gap-2 text-sm font-semibold text-[#8B6B52] hover:text-[#4A2F22] transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back
        </button>
      </div>

      {/* Social cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`group ${item.bgLight} border rounded-3xl p-5 sm:p-6 flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
          >
            {/* Icon badge */}
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-[#4A2F22]">{item.name}</h2>
                <FaExternalLinkAlt className="text-[#8B6B52] text-xs flex-shrink-0 group-hover:text-[#C97A2B] transition-colors" />
              </div>
              <p className="text-xs font-semibold text-[#C97A2B] mt-0.5">{item.handle}</p>
              <p className="text-sm text-[#6B4226] mt-2 leading-relaxed">{item.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom tagline */}
      <div className="mt-8 text-center">
        <p className="text-sm text-[#8B6B52]">
          ☕ Follow us and be part of the <span className="font-semibold text-[#C97A2B]">Café Coffee</span> community!
        </p>
      </div>
    </div>
  );
}

export default SocialMedia;