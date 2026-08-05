import { FaArrowLeft, FaCoffee, FaHeart, FaStar, FaLeaf } from "react-icons/fa";

function AboutUs({ setActive }) {
  const highlights = [
    { icon: <FaCoffee />,  title: "Freshly Brewed",   desc: "Every cup brewed to perfection, every single day." },
    { icon: <FaHeart />,   title: "Made with Love",   desc: "Crafted with care and passion for every guest." },
    { icon: <FaStar />,    title: "Premium Quality",  desc: "Only the finest ingredients sourced sustainably." },
    { icon: <FaLeaf />,    title: "Eco Friendly",     desc: "Committed to green practices and sustainability." },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 fade-in-up">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="section-title text-3xl sm:text-4xl font-bold text-[#4A2F22] pb-2">
            About Us
          </h1>
          <p className="text-sm text-[#8B6B52] mt-3">Our story and values</p>
        </div>
        <button
          type="button"
          onClick={() => setActive("My Profile")}
          className="flex items-center gap-2 text-sm font-semibold text-[#8B6B52] hover:text-[#4A2F22] transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back
        </button>
      </div>

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-[#2B1A12] to-[#4A2F22] rounded-3xl p-6 sm:p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C97A2B]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C97A2B]/8 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C97A2B] bg-[#C97A2B]/20 px-3 py-1 rounded-full mb-4">
            Est. 2018
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            ☕ Our Story
          </h2>
          <p className="text-[#D4A87C] leading-relaxed max-w-2xl text-sm sm:text-base">
            Café Coffee was founded with a simple dream — to create a warm, welcoming space where every cup tells a story.
            From our first humble location to becoming a beloved community hub, we've always put quality, 
            warmth, and customer delight at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="mb-8 p-6 bg-[#FDFAF7] border border-[#E8D5C0] rounded-3xl">
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2F22] mb-3 flex items-center gap-2">
          🎯 Our Mission
        </h2>
        <p className="text-sm sm:text-base text-[#6B4226] leading-relaxed">
          Our mission is to deliver exceptional coffee experiences while building meaningful connections with every customer 
          through outstanding service, fresh ingredients, and a relaxing atmosphere that feels like home.
        </p>
      </div>

      {/* Why Choose Us — 4 cards */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2F22] mb-5">🌟 Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-5 bg-white border border-[#E8D5C0] hover:border-[#C97A2B]/40 rounded-2xl hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#C97A2B] to-[#A8621F] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#4A2F22] text-base">{item.title}</h3>
                <p className="text-sm text-[#8B6B52] mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;