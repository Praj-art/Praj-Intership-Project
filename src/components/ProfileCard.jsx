import defaultAvatar from "../assets/default-avatar.png";

function ProfileCard({ user, setUser, setActive }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-[#F1E5D8] p-4 sm:p-6 lg:p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden">

      <h1 className="text-3xl sm:text-4xl font-bold text-[#4A2F22] mb-6 lg:mb-8 tracking-tight text-center lg:text-left">
        My Profile
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full">

        {/* Avatar */}
<div className="flex justify-center w-full lg:w-auto">
  <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52">

    <img
  src={user.image || defaultAvatar}
  alt="Avatar"
  className="w-full h-full rounded-full border-[6px] border-[#C97A2B] object-cover shadow-xl"
/>
    
  </div>
</div>

        {/* User Information */}
        <div className="flex-1 w-full min-w-0">

         <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-[#FCFAF7] border border-[#E9D8C6] p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 min-w-0">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
                Name
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#4A2F22]">
                {user.name}
              </p>
            </div>

            <div className="bg-[#FCFAF7] border border-[#E9D8C6] p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
                Email
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#4A2F22]">
                {user.email}
              </p>
            </div>

            <div className="bg-[#FCFAF7] border border-[#E9D8C6] p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
                Phone
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#4A2F22]">
                {user.phone}
              </p>
            </div>

            <div className="bg-[#FCFAF7] border border-[#E9D8C6] p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
                Address
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#4A2F22]">
                {user.address}
              </p>
            </div>

          </div>

          <button
  onClick={() => setActive("Edit Profile")}
  className="mt-6 w-full sm:w-auto bg-[#C97A2B] hover:bg-[#B56B22] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
>
  Edit Profile
</button>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;