function TopBar({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center mb-6">

      <div>
        <h1 className="text-5xl font-bold">
          Profile Dashboard
        </h1>

        <p className="text-gray-600">
           Welcome back, {user.name} 👋
      </p>
      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-[#C97A2B]"
        />

        <button className="text-2xl">🔔</button>

        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className="w-12 h-12 rounded-full border-2 border-[#C97A2B]"
        />

      </div>

    </div>
  );
}

export default TopBar;