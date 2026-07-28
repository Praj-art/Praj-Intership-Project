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
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10 text-center">

      <h1 className="text-2xl sm:text-3xl font-bold text-[#4A2F22] mb-6">
        Logout
      </h1>

      {!loggedOut ? (
        <>
          <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-7 sm:leading-8">
            Click the button below to logout from your account.
          </p>

          <button
            onClick={handleLogout}
           className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold"
          >
            Logout
          </button>
        </>
      ) : (
        <>

          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
            Logged Out Successfully
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
            Thank you for visiting Café Dashboard.
          </p>
          <p className="mt-5 text-sm sm:text-base text-[#C97A2B] font-semibold">
            See you again! Have a wonderful day ☕
           </p>
        </>
      )}

    </div>
  );
}

export default Logout;