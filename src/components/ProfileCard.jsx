import defaultAvatar from "../assets/default-avatar.png";

function ProfileCard({ user, setUser, setActive }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-[#F1E5D8] p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

      <h1 className="text-4xl font-bold text-[#4A2F22] mb-8 tracking-tight">
        My Profile
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* Avatar */}
<div className="flex justify-center">
  <div className="relative w-48 h-48 md:w-52 md:h-52">

    <img
  src={user.image || defaultAvatar}
  alt="Avatar"
  className="w-full h-full rounded-full border-[6px] border-[#C97A2B] object-cover shadow-xl"
/>
    
  </div>
</div>

        {/* User Information */}
        <div className="flex-1">

         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-[#FCFAF7] border border-[#E9D8C6] p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
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
  className="mt-8 w-full sm:w-auto bg-[#C97A2B] hover:bg-[#B56B22] text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
>
  Edit Profile
</button>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;