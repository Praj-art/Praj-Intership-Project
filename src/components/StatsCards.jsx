function StatsCards() {
  const stats = [
    { title: "Orders", value: 28, icon: "☕" },
    { title: "Favorites", value: 15, icon: "❤️" },
    { title: "Reviews", value: 12, icon: "⭐" },
    { title: "Reward Points", value: 850, icon: "🎁" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="text-4xl">{item.icon}</div>

          <h2 className="mt-3 text-gray-500">{item.title}</h2>

          <p className="text-3xl font-bold text-[#4A2F22]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;