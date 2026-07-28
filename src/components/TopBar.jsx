function TopBar({ user }) {
  return (
    <div className="w-full bg-white rounded-3xl shadow-xl border border-[#F1E5D8] p-4 sm:p-6 md:p-8 mb-6">

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