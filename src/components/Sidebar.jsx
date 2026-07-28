import {
  FaUser,
  FaUserEdit,
  FaLock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShareAlt,
  FaQuestionCircle,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { useState } from "react";

import sidebarPoster from "../assets/sidebar-poster.png";
import cafeLogo from "../assets/cafe-logo.png";
const menuItems = [
  { name: "My Profile", icon: <FaUser /> },
  { name: "Edit Profile", icon: <FaUserEdit /> },
  { name: "Change Password", icon: <FaLock /> },
  { name: "Contact Us", icon: <FaEnvelope /> },
  { name: "Google Maps", icon: <FaMapMarkerAlt /> },
  { name: "Social Media", icon: <FaShareAlt /> },
  { name: "Help & Support", icon: <FaQuestionCircle /> },
  { name: "About Us", icon: <FaInfoCircle /> },
  { name: "Logout", icon: <FaSignOutAlt /> },
];

function Sidebar({ active, setActive }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-80"
      } bg-gradient-to-b from-[#2B1A12] via-[#4A2F22] to-[#2B1A12] min-h-screen text-white shadow-xl transition-all duration-300 relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-5 right-5 text-2xl text-white hover:text-[#C97A2B] transition-all"
             >
            ☰
         </button>
      {/* Logo */}
      <div className="p-8 text-center border-b border-[#6B4226]">
      <div className="flex justify-center mb-3">
  <img
    src={cafeLogo}
    alt="Cafe Coffee Logo"
    className={`${collapsed ? "w-10 h-10" : "w-16 h-16"} object-contain`}
  />
</div>
        {!collapsed && (
          <>
            <h1 className="text-4xl font-semibold tracking-wide font-serif">
              Café Coffee
              </h1>

            <p className="text-gray-300 mt-2">Premium Coffee Experience</p>
          </>
        )}
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`w-full flex items-center ${
  collapsed ? "justify-center" : "justify-start"
} p-4 rounded-2xl mb-3 transition-all duration-300 font-semibold ${
              active === item.name
                ? "bg-[#C97A2B] shadow-lg"
                : "hover:bg-[#6B4226]"
            }`}
          >
            <>
  <span className="text-lg">{item.icon}</span>

  {!collapsed && (
    <span className="ml-3">{item.name}</span>
  )}
</>
          </button>
        ))}
      </div>

      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <img
  src={sidebarPoster}
  alt="Coffee Poster"
  className="w-full h-28 object-cover rounded-xl shadow-lg border border-[#6B4226]"
/>
        </div>
      )}

    </div>
  
    
  );
}

export default Sidebar;