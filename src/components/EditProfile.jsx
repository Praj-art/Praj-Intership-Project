import { useState } from "react";
import defaultAvatar from "../assets/default-avatar.png";

function EditProfile({ user, setUser, setActive }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  setUser(formData);

  alert("Profile Updated Successfully!");

  setActive("My Profile");
};

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-[#F1E5D8] p-6 sm:p-8 md:p-10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      <h1 className="text-4xl font-bold text-[#4A2F22] mb-10 tracking-tight">
        Edit Profile
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
>
         <div className="md:col-span-2 flex items-center justify-between gap-8 mb-14">
    <div className="relative w-44 h-44">

    <img
      src={formData.image || defaultAvatar}
      alt="Profile"
      className="w-full h-full rounded-full border-[8px] border-[#C97A2B] object-cover shadow-2xl"
    />

    <label
    htmlFor="profileImage"
    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#C97A2B] text-white flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#B56B22] transition-all"
>
    ✏️
</label>

    <input
      id="profileImage"
      type="file"
      accept="image/*"
      hidden
      onChange={(e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
          setFormData({
            ...formData,
            image: reader.result,
          });
        };

        reader.readAsDataURL(file);
      }}
    />

  </div>
</div>
        <div className="flex flex-col justify-center h-full">
    <h2 className="text-3xl font-bold text-[#4A2F22]">
        Profile Photo
    </h2>

    <p className="text-gray-500 mt-3 max-w-sm">
        Click the pencil icon to update your profile picture.
    </p>
</div>
        <div className="space-y-6">
          <label className="block mb-2 text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E7D8CC] bg-[#FCFAF8] px-4 py-3 text-[#4A2F22] focus:border-[#C97A2B] focus:ring-2 focus:ring-[#F5D6B3] outline-none transition-all"
          />
        </div>

        <div className="space-y-6">
          <label className="block mb-2 text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E7D8CC] bg-[#FCFAF8] px-4 py-3 text-[#4A2F22] focus:border-[#C97A2B] focus:ring-2 focus:ring-[#F5D6B3] outline-none transition-all"
          />
        </div>

        <div className="space-y-6">
          <label className="block mb-2 text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E7D8CC] bg-[#FCFAF8] px-4 py-3 text-[#4A2F22] focus:border-[#C97A2B] focus:ring-2 focus:ring-[#F5D6B3] outline-none transition-all"
          />
        </div>

        <div className="space-y-6">
          <label className="block mb-2 text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
            Address
          </label>

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E7D8CC] bg-[#FCFAF8] px-4 py-3 text-[#4A2F22] focus:border-[#C97A2B] focus:ring-2 focus:ring-[#F5D6B3] outline-none transition-all"
          />
        </div>

        <div className="md:col-span-2 flex justify-start mt-6">
          <button
  type="submit"
  className="bg-[#C97A2B] text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#B56B22] hover:scale-105 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}

export default EditProfile;