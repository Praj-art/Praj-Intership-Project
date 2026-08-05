import defaultAvatar from "../assets/default-avatar.png";
import { FaSignOutAlt, FaArrowLeft, FaShieldAlt } from "react-icons/fa";

function Logout({ setActive, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ name: "", email: "", phone: "", address: "", image: defaultAvatar });
    setActive("My Profile");
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 fade-in-up max-w-2xl mx-auto">

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-200 flex items-center justify-center">
          <FaSignOutAlt className="text-red-500 text-3xl" />
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-[#4A2F22] text-center mb-3">
        Sign Out
      </h1>
      <p className="text-[#8B6B52] text-center text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-8">
        You're about to sign out of your Café Coffee account. You can log back in any time.
      </p>

      {/* Warning card */}
      <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 mb-8">
        <FaShieldAlt className="text-red-400 text-lg mt-0.5 flex-shrink-0" />
        <p className="text-sm text-red-700 leading-relaxed">
          Any unsaved changes will be lost when you sign out. Make sure you've saved your profile updates before leaving.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setActive("My Profile")}
          className="flex items-center gap-2 px-8 py-3 rounded-2xl border-2 border-[#E8D5C0] text-[#6B4226] font-semibold hover:border-[#C97A2B] hover:text-[#C97A2B] transition-all duration-300 w-full sm:w-auto justify-center"
        >
          <FaArrowLeft className="text-xs" />
          Stay Logged In
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
        >
          <FaSignOutAlt />
          Yes, Sign Out
        </button>
      </div>
    </div>
  );
}

export default Logout;