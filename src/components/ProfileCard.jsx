import defaultAvatar from "../assets/default-avatar.png";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPencilAlt, FaStar } from "react-icons/fa";

function ProfileCard({ user, setUser, setActive }) {
  const fields = [
    { label: "Full Name",  value: user.name,    icon: <FaUser />,          placeholder: "Not set" },
    { label: "Email",      value: user.email,   icon: <FaEnvelope />,      placeholder: "Not set" },
    { label: "Phone",      value: user.phone,   icon: <FaPhone />,         placeholder: "Not set" },
    { label: "Address",    value: user.address, icon: <FaMapMarkerAlt />,  placeholder: "Not set" },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 fade-in-up">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
        <div>
          <h1 className="section-title text-3xl sm:text-4xl font-bold text-[#4A2F22] pb-2">
            My Profile
          </h1>
          <p className="text-sm text-[#8B6B52] mt-3">Your personal information</p>
        </div>
        <button
          onClick={() => setActive("Edit Profile")}
          className="cafe-btn text-sm gap-2"
        >
          <FaPencilAlt className="text-xs" />
          Edit Profile
        </button>
      </div>

      {/* Avatar + info row */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

        {/* Avatar */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-[#C97A2B] shadow-xl shadow-[#C97A2B]/20">
              <img
                src={user.image && user.image !== "defaultAvatar" ? user.image : defaultAvatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-gradient-to-br from-[#C97A2B] to-[#A8621F] flex items-center justify-center shadow-lg">
              <FaStar className="text-white text-xs" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold text-[#4A2F22] text-lg">{user.name || "Your Name"}</p>
            <span className="inline-block mt-1 text-xs font-semibold text-[#C97A2B] bg-[#C97A2B]/10 px-3 py-1 rounded-full border border-[#C97A2B]/20">
              ☕ Café Member
            </span>
          </div>
        </div>

        {/* Info grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {fields.map((field) => (
            <div
              key={field.label}
              className="group bg-[#FDFAF7] hover:bg-white border border-[#E8D5C0] hover:border-[#C97A2B]/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#C97A2B] text-sm group-hover:scale-110 transition-transform duration-200">
                  {field.icon}
                </span>
                <span className="label-sm">{field.label}</span>
              </div>
              <p className="text-[#4A2F22] font-semibold text-base truncate">
                {field.value || <span className="text-[#C4A99A] italic font-normal text-sm">{field.placeholder}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;