import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShareAlt,
  FaQuestionCircle,
  FaLock,
  FaSignOutAlt,
  FaArrowRight,
} from "react-icons/fa";
import coffeeCup from "../assets/coffee-cup.png";

function StatsCards({ setActive }) {
  const cards = [
    {
      title: "Change Password",
      description: "Keep your account secure by updating your password regularly.",
      icon: <FaLock />,
      button: "Change Password",
      gradient: "from-[#C97A2B]/15 to-[#C97A2B]/5",
      iconBg: "bg-[#C97A2B]",
    },
    {
      title: "Contact Us",
      description: "Reach out to us — we're always here to help you out.",
      icon: <FaEnvelope />,
      button: "Contact Now",
      gradient: "from-blue-500/10 to-blue-500/5",
      iconBg: "bg-blue-500",
    },
    {
      title: "Google Maps",
      description: "Find our café location on the map — easy access, every time.",
      icon: <FaMapMarkerAlt />,
      button: "View Map",
      gradient: "from-emerald-500/10 to-emerald-500/5",
      iconBg: "bg-emerald-500",
    },
    {
      title: "Social Media",
      description: "Follow us for the latest updates, events, and offers.",
      icon: <FaShareAlt />,
      button: "Follow Us",
      gradient: "from-pink-500/10 to-pink-500/5",
      iconBg: "bg-pink-500",
    },
    {
      title: "Help & Support",
      description: "Browse FAQs or contact our support team for assistance.",
      icon: <FaQuestionCircle />,
      button: "Get Help",
      gradient: "from-violet-500/10 to-violet-500/5",
      iconBg: "bg-violet-500",
    },
    {
      title: "Logout",
      description: "Sign out from your account safely and securely.",
      icon: <FaSignOutAlt />,
      button: "Logout",
      gradient: "from-red-500/10 to-red-500/5",
      iconBg: "bg-red-500",
    },
  ];

  return (
    <>
      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`stat-card fade-in-up glass-card rounded-3xl p-6 flex flex-col justify-between min-h-[200px] bg-gradient-to-br ${card.gradient} transition-all duration-300 group`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Icon */}
            <div className={`w-12 h-12 ${card.iconBg} rounded-2xl flex items-center justify-center text-white text-lg shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {card.icon}
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#4A2F22] mb-1">{card.title}</h3>
              <p className="text-sm text-[#8B6B52] leading-relaxed">{card.description}</p>
            </div>

            <button
              onClick={() => setActive(card.title)}
              className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#C97A2B] hover:text-[#A8621F] group-hover:gap-3 transition-all duration-200"
            >
              {card.button}
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        ))}
      </div>

      {/* About Us Banner */}
      <div className="fade-in-up mt-6 glass-card rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-8 md:p-10 relative">
          {/* Left content */}
          <div className="flex-1 z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C97A2B] bg-[#C97A2B]/10 border border-[#C97A2B]/20 px-3 py-1 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A2F22] mb-4 leading-tight">
              About <span className="text-[#C97A2B]">Café Coffee</span>
            </h2>
            <p className="text-[#8B6B52] leading-relaxed max-w-xl">
              We are passionate about serving the finest coffee and creating unforgettable
              moments for every guest who walks through our doors.
            </p>
            <button
              onClick={() => setActive("About Us")}
              className="cafe-btn mt-6"
            >
              Know More
              <FaArrowRight className="text-xs" />
            </button>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 relative">
            <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#C97A2B]/20 to-[#F5EBE0] flex items-center justify-center">
              <img
                src={coffeeCup}
                alt="Coffee Cup"
                className="w-44 h-44 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsCards;