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

import { useState, useEffect } from "react";

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

function Sidebar({
  active,
  setActive,
  sidebarOpen,
  setSidebarOpen,
  collapsed,
  setCollapsed,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  if (isMobile) {
    setCollapsed(false);
  }
}, [isMobile]);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div
  className={`${
    isMobile
      ? `fixed top-0 left-0 z-50 w-72 h-screen transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`
      : `fixed top-0 left-0 h-screen transition-all duration-300 ${
          collapsed ? "w-20" : "w-80"
        }`
} bg-gradient-to-b from-[#2B1A12] via-[#4A2F22] to-[#2B1A12] text-white shadow-xl`}
>
      {/* Toggle Button */}
      <button
        onClick={() => {
  if (isMobile) {
    setSidebarOpen(!sidebarOpen);
  } else {
    setCollapsed(!collapsed);
  }
}}
        className={`absolute top-5 text-2xl text-white hover:text-[#C97A2B] transition-all ${
  isMobile
    ? "right-5"
    : collapsed
      ? "left-1/2 -translate-x-1/2"
      : "right-5"
}`}
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
      <div
  className={`flex-1 px-4 py-6 space-y-2 overflow-y-auto ${
    isMobile && !collapsed ? "mt-6" : ""
  }`}
>
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
  setActive(item.name);

  if (isMobile) {
    setSidebarOpen(false);
}
}}
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