import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShareAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import coffeeCup from "../assets/coffee-cup.png";

function StatsCards({ setActive }) {
  const cards = [
    {
      title: "Contact Us",
      description: "We're here to help with your questions.",
      icon: <FaEnvelope />,
      button: "Contact Now",
    },
    {
      title: "Google Maps",
      description: "Find our café location quickly.",
      icon: <FaMapMarkerAlt />,
      button: "View Map",
    },
    {
      title: "Social Media",
      description: "Follow us for updates and offers.",
      icon: <FaShareAlt />,
      button: "Follow Us",
    },
    {
      title: "Help & Support",
      description: "Need assistance? We're ready to help.",
      icon: <FaQuestionCircle />,
      button: "Get Help",
    },
  ];

  return (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-[#F5EFE7] flex items-center justify-center text-[#C97A2B] text-xl mb-4">
            {card.icon}
          </div>

          <h3 className="text-xl font-semibold text-[#4A2F22] mb-2">
            {card.title}
          </h3>

          <p className="text-gray-500 text-sm mb-5">
            {card.description}
          </p>

          <button
  onClick={() => setActive(card.title)}
  className="bg-[#C97A2B] hover:bg-[#b86d23] text-white px-4 py-2 rounded-lg transition"
>
            {card.button}
          </button>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mt-8 px-6 sm:px-10 py-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full">
        <h2 className="text-4xl font-bold text-[#4A2F22]">
          About Us
        </h2>

        <p className="text-gray-600 mt-5 max-w-xl leading-7 text-center lg:text-left">
          We are passionate about serving the finest coffee and creating memorable experiences for every customer.
        </p>
      </div>

      <img
  src={coffeeCup}
  alt="Coffee Cup"
  className="w-60 h-60 object-contain mx-auto"
/>
  <button
  onClick={() => setActive("About Us")}
  className="bg-[#C97A2B] hover:bg-[#b86d23] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-all"
>
  Know More →
</button>
</div>
</>
);
}

export default StatsCards;