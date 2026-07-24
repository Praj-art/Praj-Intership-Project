const menuItems = [
  "My Profile",
  "Edit Profile",
  "Change Password",
  "Contact Us",
  "Google Maps",
  "Social Media",
  "Help & Support",
  "About Us",
  "Logout",
];

function Sidebar({ active, setActive }) {
  return (
    <div className="w-72 bg-[#4A2F22] min-h-screen text-white shadow-xl">

      <div className="p-8 text-center border-b border-[#6B4226]">

        <div className="text-5xl mb-3">☕</div>

        <h1 className="text-3xl font-bold">
          Café Dashboard
        </h1>

        <p className="text-gray-300 mt-2">
          Welcome Back
        </p>

      </div>

      <div className="p-5">

        {menuItems.map((item) => (

          <button
            key={item}
            onClick={() => setActive(item)}
            className={`w-full text-left p-4 rounded-xl mb-3 transition-all duration-300 font-medium

            ${
              active === item
                ? "bg-[#C97A2B] shadow-lg"
                : "hover:bg-[#6B4226]"
            }

            `}
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
}

export default Sidebar;