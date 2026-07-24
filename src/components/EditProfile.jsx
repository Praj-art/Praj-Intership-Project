import { useState } from "react";

function EditProfile({ user, setUser }) {
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
};

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-[#4A2F22] mb-8">
        Edit Profile
      </h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
         <div className="md:col-span-2 flex items-center gap-10 mb-8">
  <div className="relative w-40 h-40">

    <img
      src={formData.image}
      alt="Profile"
      className="w-full h-full rounded-full border-4 border-[#C97A2B] object-cover"
    />

    <label
      htmlFor="profileImage"
      className="absolute bottom-2 right-2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#C97A2B] transition"
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
        <div>
  <h2 className="text-2xl font-bold text-[#4A2F22]">
    Profile Photo
  </h2>

  <p className="text-gray-500 mt-2">
    Click the pencil icon to update your profile picture.
  </p>
</div>
        <div className="md:col-span-2"></div>
        <div>
          <label className="block mb-2 font-semibold">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Address
          </label>

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-[#C97A2B] text-white px-8 py-3 rounded-xl hover:bg-[#a86422]"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}

export default EditProfile;