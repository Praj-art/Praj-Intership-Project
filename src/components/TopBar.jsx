function TopBar({ user }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-[#F1E5D8] p-8 mb-6 hover:shadow-2xl transition-all duration-300">

      <div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4A2F22] tracking-tight">
          Profile Dashboard
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
           Welcome back, {user.name} 👋
      </p>
      </div>

    </div>
  );
}

export default TopBar;