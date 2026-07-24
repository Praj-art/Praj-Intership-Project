import { useState } from "react";

function Logout() {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      setLoggedOut(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

      <h1 className="text-3xl font-bold text-[#4A2F22] mb-6">
        Logout
      </h1>

      {!loggedOut ? (
        <>
          <p className="text-xl text-gray-600 mb-10 leading-8">
            Click the button below to logout from your account.
          </p>

          <button
            onClick={handleLogout}
           className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg" 
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="text-7xl mb-6 animate-bounce">✅</div>

          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Logged Out Successfully
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Thank you for visiting Café Dashboard.
          </p>
          <p className="mt-5 text-[#C97A2B] font-semibold">
            See you again! Have a wonderful day ☕
           </p>
        </>
      )}

    </div>
  );
}

export default Logout;