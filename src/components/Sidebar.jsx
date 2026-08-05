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
  FaChevronLeft,
  FaBars,
} from "react-icons/fa";

import { useState, useEffect } from "react";

import sidebarPoster from "../assets/sidebar-poster.png";
import cafeLogo from "../assets/cafe-logo.png";

const menuItems = [
  { name: "My Profile",       icon: <FaUser />,          section: "main" },
  { name: "Edit Profile",     icon: <FaUserEdit />,      section: "main" },
  { name: "Change Password",  icon: <FaLock />,          section: "main" },
  { name: "Contact Us",       icon: <FaEnvelope />,      section: "info" },
  { name: "Google Maps",      icon: <FaMapMarkerAlt />,  section: "info" },
  { name: "Social Media",     icon: <FaShareAlt />,      section: "info" },
  { name: "Help & Support",   icon: <FaQuestionCircle />,section: "info" },
  { name: "About Us",         icon: <FaInfoCircle />,    section: "info" },
  { name: "Logout",           icon: <FaSignOutAlt />,    section: "danger" },
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
    if (isMobile) setCollapsed(false);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainItems   = menuItems.filter((m) => m.section === "main");
  const infoItems   = menuItems.filter((m) => m.section === "info");
  const dangerItems = menuItems.filter((m) => m.section === "danger");

  const renderMenuItem = (item) => {
    const isActive = active === item.name;
    const isDanger = item.section === "danger";

    return (
      <button
        key={item.name}
        title={collapsed ? item.name : ""}
        onClick={() => {
          setActive(item.name);
          if (isMobile) setSidebarOpen(false);
        }}
        className={`
          w-full flex items-center ${collapsed ? "justify-center" : "justify-start"}
          p-3.5 rounded-2xl mb-1 transition-all duration-200 font-semibold text-sm
          ${isActive
            ? isDanger
              ? "bg-red-500/20 text-red-400"
              : "bg-gradient-to-r from-[#C97A2B] to-[#A8621F] text-white shadow-lg shadow-[#C97A2B]/30"
            : isDanger
              ? "text-red-400/80 hover:bg-red-500/10 hover:text-red-400"
              : "text-[#D4A87C] hover:bg-white/10 hover:text-white"
          }
        `}
      >
        <span className={`text-base ${isActive && !isDanger ? "text-white" : ""} ${!collapsed ? "mr-3" : ""}`}>
          {item.icon}
        </span>
        {!collapsed && <span className="truncate">{item.name}</span>}
        {!collapsed && isActive && !isDanger && (
          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0" />
        )}
      </button>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          ${isMobile
            ? `fixed top-0 left-0 z-50 w-72 h-screen transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`
            : `fixed top-0 left-0 h-screen transition-all duration-300 ${collapsed ? "w-20" : "w-80"}`
          }
          flex flex-col
          bg-gradient-to-b from-[#1C1009] via-[#2B1A12] to-[#1C1009]
          border-r border-white/5 shadow-2xl overflow-hidden
        `}
      >
        {/* Decorative top glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C97A2B] to-transparent opacity-60" />

        {/* Toggle Button */}
        <button
          onClick={() => {
            if (isMobile) setSidebarOpen(!sidebarOpen);
            else setCollapsed(!collapsed);
          }}
          className={`
            absolute top-5 z-10 w-9 h-9 rounded-xl
            bg-white/10 text-white hover:bg-[#C97A2B] hover:text-white
            flex items-center justify-center transition-all duration-200
            ${isMobile ? "right-4" : collapsed ? "left-1/2 -translate-x-1/2" : "right-4"}
          `}
        >
          {!isMobile && !collapsed ? <FaChevronLeft className="text-xs" /> : <FaBars className="text-xs" />}
        </button>

        {/* Logo / Header */}
        <div className={`px-5 pt-6 pb-5 border-b border-white/10 ${collapsed ? "flex justify-center items-center" : ""}`}>
          <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C97A2B] to-[#A8621F] flex items-center justify-center shadow-lg shadow-[#C97A2B]/30 flex-shrink-0">
              <img
                src={cafeLogo}
                alt="Cafe Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold text-white tracking-wide font-['Playfair_Display']">
                  Café Coffee
                </h1>
                <p className="text-xs text-[#8B6B52] mt-0.5">Premium Experience</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#C97A2B]/30 scrollbar-track-transparent">
          {/* Main section */}
          {!collapsed && (
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B4226] px-2 mb-2">
              Account
            </p>
          )}
          {mainItems.map(renderMenuItem)}

          {!collapsed && (
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B4226] px-2 mt-5 mb-2">
              Explore
            </p>
          )}
          {!collapsed && <div className="border-t border-white/5 mb-3" />}
          {infoItems.map(renderMenuItem)}

          {!collapsed && <div className="border-t border-white/5 mt-3 mb-3" />}
          {dangerItems.map(renderMenuItem)}
        </div>

        {/* Bottom poster */}
        {!collapsed && (
          <div className="px-3 pb-4">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={sidebarPoster}
                alt="Coffee Poster"
                className="w-full h-28 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1009]/80 to-transparent" />
              <p className="absolute bottom-3 left-3 text-xs text-white/80 font-semibold">
                ☕ Freshly brewed daily
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile hamburger trigger (outside sidebar) */}
      {isMobile && !sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-30 w-10 h-10 rounded-xl bg-[#2B1A12] text-white flex items-center justify-center shadow-lg"
        >
          <FaBars />
        </button>
      )}
    </>
  );
}

export default Sidebar;