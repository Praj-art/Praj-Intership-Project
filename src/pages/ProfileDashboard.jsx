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

function ProfileDashboard() {

  const [active, setActive] = useState("My Profile");

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : {
         name: "",
         email: "",
         phone: "",
         address: "",
         image: defaultAvatar,
        }
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

      const renderContent = () => {
       switch (active) {
        case "My Profile":
        return (
       <ProfileCard
         user={user}
         setUser={setUser}
         setActive={setActive}
      />
     );
      case "Edit Profile":
        return <EditProfile user={user} setUser={setUser} />;
      case "Change Password":
        return <ChangePassword />;

      case "Contact Us":
        return <ContactUs />;

      case "Google Maps":
        return <GoogleMaps />;

      case "Social Media":
        return <SocialMedia />;

      case "Help & Support":
        return <HelpSupport />;

      case "About Us":
        return <AboutUs />

      case "Logout":
        return <Logout />;

      default:
        return (
         <ProfileCard
           user={user}
           setUser={setUser}
           setActive={setActive}
       />
     );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8F5F2]">
  <Sidebar active={active} setActive={setActive} />

  <div className="flex-1 p-3 sm:p-5 md:p-8 overflow-x-hidden">
    <TopBar user={user} />

    <div className="mt-4 md:mt-6">
      {renderContent()}
    </div>
  </div>
</div>
  );
}

export default ProfileDashboard;