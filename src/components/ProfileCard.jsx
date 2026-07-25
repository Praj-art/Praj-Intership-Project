function ProfileCard({ user, setUser, setActive }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h1 className="text-3xl font-bold text-[#4A2F22] mb-8">
        My Profile
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Avatar */}
<div className="flex justify-center">
  <div className="relative w-32 h-32 md:w-44 md:h-44">

    <img
      src={user.image}
      alt="Avatar"
      className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#C97A2B] object-cover"
    />
    
  </div>
</div>

        {/* User Information */}
        <div className="flex-1">

         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-[#F8F5F2] p-4 rounded-xl">
              <h3 className="font-semibold text-gray-600">
                Name
              </h3>

              <p className="text-lg font-bold text-[#4A2F22]">
                {user.name}
              </p>
            </div>

            <div className="bg-[#F8F5F2] p-4 rounded-xl">
              <h3 className="font-semibold text-gray-600">
                Email
              </h3>

              <p className="text-lg">
                {user.email}
              </p>
            </div>

            <div className="bg-[#F8F5F2] p-4 rounded-xl">
              <h3 className="font-semibold text-gray-600">
                Phone
              </h3>

              <p className="text-lg">
                {user.phone}
              </p>
            </div>

            <div className="bg-[#F8F5F2] p-4 rounded-xl">
              <h3 className="font-semibold text-gray-600">
                Address
              </h3>

              <p className="text-lg">
                {user.address}
              </p>
            </div>

          </div>

          <button
            onClick={() => setActive("Edit Profile")}
            className="mt-8 w-full sm:w-auto bg-[#C97A2B] text-white px-8 py-3 rounded-xl hover:bg-[#B56B22] transition"
          >
            Edit Profile
          </button>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;