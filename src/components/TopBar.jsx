import { FaBell, FaCoffee } from "react-icons/fa";

function TopBar({ user }) {
  const now = new Date();
  const hour = now.getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="w-full glass-card rounded-3xl p-5 sm:p-6 md:p-8 mb-6 fade-in-up">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Left: Greeting */}
        <div>
          <p className="text-sm font-medium text-[#8B6B52] tracking-wide mb-1 flex items-center gap-2">
            <FaCoffee className="text-[#C97A2B]" />
            {greeting}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A2F22] tracking-tight leading-tight">
            {user.name ? `Welcome, ${user.name} 👋` : "Profile Dashboard"}
          </h1>
          <p className="mt-1 text-sm text-[#8B6B52]">
            Manage your profile and café preferences
          </p>
        </div>

        {/* Right: Notification Bell + Avatar */}
        <div className="flex items-center gap-4">
          <button className="relative w-11 h-11 rounded-2xl bg-[#F5EBE0] border border-[#E8D5C0] flex items-center justify-center text-[#C97A2B] hover:bg-[#C97A2B] hover:text-white transition-all duration-300 shadow-sm">
            <FaBell className="text-lg" />
            <span className="pulse-badge absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#C97A2B] to-[#A8621F] flex items-center justify-center text-white font-bold text-lg shadow-md">
            {user.name ? user.name.charAt(0).toUpperCase() : "☕"}
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#E8D5C0] to-transparent" />
    </div>
  );
}

export default TopBar;