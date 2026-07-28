import { useState } from "react";

  function ChangePassword() {
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    // 👇 Add these lines here
    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false,
    });

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.oldPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New Password and Confirm Password do not match.");
      return;
    }

    alert("Password Updated Successfully!");

    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-[#F1E5D8] p-6 sm:p-8 md:p-10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      <h1 className="text-4xl font-bold text-[#4A2F22] mb-10 tracking-tight">
        Change Password
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full space-y-8"
      >
       <div className="space-y-2">
  <label className="block mb-2 text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
    Old Password
  </label>

  <input
    type={showPassword.old ? "text" : "password"}
    name="oldPassword"
    value={formData.oldPassword}
    onChange={handleChange}
    className="w-full rounded-xl border border-[#E7D8CC] bg-[#FCFAF8] px-4 py-3 text-[#4A2F22] focus:border-[#C97A2B] focus:ring-2 focus:ring-[#F4D2A8] outline-none transition"
    placeholder="Enter your current password"
  />
  <button
  type="button"
  className="mt-2 text-sm font-medium text-[#C97A2B] hover:text-[#A85F1F] transition-colors cursor-pointer"
  onClick={() =>
    setShowPassword({
      ...showPassword,
      old: !showPassword.old,
    })
  }
>
  {showPassword.old ? "Hide Password" : "Show Password"}
</button>
</div>

<div className="space-y-2">
  <label className="block mb-2 text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
    New Password
  </label>

  <input
    type={showPassword.new ? "text" : "password"}
    name="newPassword"
    value={formData.newPassword}
    onChange={handleChange}
    className="w-full rounded-xl border border-[#E7D8CC] bg-[#FCFAF8] px-4 py-3 text-[#4A2F22] focus:border-[#C97A2B] focus:ring-2 focus:ring-[#F4D2A8] outline-none transition"
    placeholder="Create a new password"
  />
</div>
<button
  type="button"
  className="mt-2 text-sm font-medium text-[#C97A2B] hover:text-[#A85F1F] transition-colors cursor-pointer"
  onClick={() =>
    setShowPassword({
      ...showPassword,
      new: !showPassword.new,
    })
  }
>
  {showPassword.new ? "Hide Password" : "Show Password"}
</button>

<p className="mt-2 text-xs text-[#8B6B52]">
  Use at least 8 characters with letters, numbers, and a special symbol.
</p>
<div className="space-y-2">
  <label className="block mb-2 text-sm font-semibold uppercase tracking-wide text-[#8B6B52]">
    Confirm Password
  </label>

  <input
    type={showPassword.confirm ? "text" : "password"}
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    className="w-full rounded-xl border border-[#E7D8CC] bg-[#FCFAF8] px-4 py-3 text-[#4A2F22] focus:border-[#C97A2B] focus:ring-2 focus:ring-[#F4D2A8] outline-none transition"
    placeholder="Confirm new password"
  />
</div>

<div className="mt-8">
<button
  type="button"
  className="mt-2 text-sm font-medium text-[#C97A2B] hover:text-[#A85F1F] transition-colors cursor-pointer"
  onClick={() =>
    setShowPassword({
      ...showPassword,
      confirm: !showPassword.confirm,
    })
  }
>
  {showPassword.confirm ? "Hide Password" : "Show Password"}
</button>
</div>
 
{/* Confirm Password */}

<div className="mt-8 flex justify-start">
  <button
    type="submit"
    className="bg-[#C97A2B] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#B56B22] hover:shadow-xl hover:scale-105 transition-all duration-300"
  >
    Update Password
  </button>
</div>
</form>
</div>
);
}

export default ChangePassword;