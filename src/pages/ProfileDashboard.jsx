import defaultAvatar from "../assets/default-avatar.png";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import ProfileCard from "../components/ProfileCard";
import EditProfile from "../components/EditProfile";
import ChangePassword from "../components/ChangePassword";
import ContactUs from "../components/ContactUs";
import GoogleMaps from "../components/GoogleMaps";
import SocialMedia from "../components/SocialMedia";
import HelpSupport from "../components/HelpSupport";
import AboutUs from "../components/AboutUs";
import Logout from "../components/Logout";
import StatsCards from "../components/StatsCards";

function ProfileDashboard() {
  const [active, setActive] = useState("My Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const data = JSON.parse(savedUser);
      return {
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        address: data.address || "",
        image: data.image || defaultAvatar,
      };
    }
    return { name: "", email: "", phone: "", address: "", image: defaultAvatar };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const renderContent = () => {
    switch (active) {
      case "My Profile":
        return (
          <>
            <ProfileCard user={user} setUser={setUser} setActive={setActive} />
            <StatsCards setActive={setActive} />
          </>
        );
      case "Edit Profile":
        return <EditProfile user={user} setUser={setUser} setActive={setActive} />;
      case "Change Password":
        return <ChangePassword setActive={setActive} />;
      case "Contact Us":
        return <ContactUs setActive={setActive} />;
      case "Google Maps":
        return <GoogleMaps setActive={setActive} />;
      case "Social Media":
        return <SocialMedia setActive={setActive} />;
      case "Help & Support":
        return <HelpSupport setActive={setActive} />;
      case "About Us":
        return <AboutUs setActive={setActive} />;
      case "Logout":
        return <Logout setActive={setActive} setUser={setUser} />;
      default:
        return <ProfileCard user={user} setUser={setUser} setActive={setActive} />;
    }
  };

  return (
    <div
      className="relative min-h-screen md:flex"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(201,122,43,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(74,47,34,0.06) 0%, transparent 50%), #FDF8F3",
      }}
    >
      <Sidebar
        active={active}
        setActive={setActive}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`flex-1 p-4 sm:p-6 md:p-8 overflow-x-hidden transition-all duration-300 ${
          collapsed ? "md:ml-20" : "md:ml-80"
        }`}
      >
        <TopBar user={user} />
        <div className="mt-2">{renderContent()}</div>
      </div>
    </div>
  );
}

export default ProfileDashboard;