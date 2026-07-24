function SocialMedia() {
  const socialLinks = [
  {
    name: "Instagram",
    icon: "📸",
    link: "https://instagram.com",
    color: "bg-pink-100",
  },
  {
    name: "Facebook",
    icon: "📘",
    link: "https://facebook.com",
    color: "bg-blue-100",
  },
  {
    name: "WhatsApp",
    icon: "💬",
    link: "https://wa.me/919876543210",
    color: "bg-green-100",
  },
  {
    name: "X (Twitter)",
    icon: "❌",
    link: "https://x.com",
    color: "bg-gray-100",
  },
];
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-[#4A2F22] mb-8">
        Social Media
      </h1>

      <p className="text-gray-600 mb-8">
  Stay connected with Café Dashboard on your favorite social media platforms. Follow us for the latest offers, updates, and exciting events.
</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`${item.color} p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300`}
          >
            <span className="text-6xl mb-2">{item.icon}</span>

            <div>
              <h2 className="text-2xl font-bold text-[#4A2F22]">
                {item.name}
              </h2>

              <p className="text-gray-700 mt-2">
                 {item.name === "WhatsApp"
                   ? "Chat with us instantly on WhatsApp."
                   : `Follow us on ${item.name} for updates and offers.`}
             </p>

                 <p className="mt-4 text-sm font-semibold text-[#C97A2B]">
                  Click here to visit →
                </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;