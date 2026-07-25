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
        collapsed ? "w-20" : "w-72"
      } bg-[#4A2F22] min-h-screen text-white shadow-xl transition-all duration-300 relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-4 top-8 w-10 h-10 rounded-full bg-[#C97A2B] text-white shadow-lg hover:bg-[#B56B22] transition-all duration-300 z-50"
      >
        {collapsed ? ">" : "<"}
      </button>

      {/* Logo */}
      <div className="p-8 text-center border-b border-[#6B4226]">
        <div className={`${collapsed ? "text-4xl" : "text-5xl"} mb-3`}>
          ☕
        </div>

        {!collapsed && (
          <>
            <h1 className="text-3xl font-bold">Café Dashboard</h1>

            <p className="text-gray-300 mt-2">Welcome Back</p>
          </>
        )}
      </div>

      {/* Menu */}
      <div className="p-5">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`w-full flex items-center ${
  collapsed ? "justify-center" : "justify-start"
} p-4 rounded-xl mb-3 transition-all duration-300 font-medium ${
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
    </div>
  );
}

export default Sidebar;