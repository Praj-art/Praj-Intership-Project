import { useState, useEffect } from "react";
import defaultAvatar from "../assets/default-avatar.png";
import { FaCamera, FaCheck, FaArrowLeft } from "react-icons/fa";

function EditProfile({ user, setUser, setActive }) {
  const [formData, setFormData] = useState({
    ...user,
    image: user.image || defaultAvatar,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setFormData({ ...user, image: user.image || defaultAvatar });
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...formData, image: formData.image || defaultAvatar });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setActive("My Profile");
    }, 1200);
  };

  const fields = [
    { label: "Full Name",    name: "name",    type: "text",  placeholder: "Enter your full name" },
    { label: "Email",        name: "email",   type: "email", placeholder: "Enter your email address" },
    { label: "Phone Number", name: "phone",   type: "text",  placeholder: "Enter your phone number" },
    { label: "Address",      name: "address", type: "text",  placeholder: "Enter your address" },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 fade-in-up">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="section-title text-3xl sm:text-4xl font-bold text-[#4A2F22] pb-2">
            Edit Profile
          </h1>
          <p className="text-sm text-[#8B6B52] mt-3">Update your personal information</p>
        </div>
        <button
          type="button"
          onClick={() => setActive("My Profile")}
          className="flex items-center gap-2 text-sm font-semibold text-[#8B6B52] hover:text-[#4A2F22] transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back to Profile
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Avatar upload row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 pb-8 border-b border-[#E8D5C0]">
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-[#C97A2B] shadow-xl shadow-[#C97A2B]/20">
              <img
                src={formData.image && formData.image !== "defaultAvatar" ? formData.image : defaultAvatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label
              htmlFor="profileImage"
              className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-gradient-to-br from-[#C97A2B] to-[#A8621F] text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <FaCamera className="text-sm" />
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
                reader.onload = () => setFormData((prev) => ({ ...prev, image: reader.result }));
                reader.readAsDataURL(file);
              }}
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#4A2F22]">Profile Photo</h2>
            <p className="text-sm text-[#8B6B52] mt-1 max-w-xs">
              Click the camera icon to upload a new profile picture. JPG, PNG or GIF up to 5MB.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label className="label-sm">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="cafe-input"
              />
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="mt-8 flex justify-start">
          <button
            type="submit"
            className={`cafe-btn min-w-[180px] ${saved ? "!bg-gradient-to-r !from-green-500 !to-emerald-600 !shadow-green-500/30" : ""}`}
          >
            {saved ? (
              <>
                <FaCheck className="text-sm" />
                Saved!
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;