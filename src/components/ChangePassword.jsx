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
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#4A2F22] mb-6">
        Change Password
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-6 w-full"
      >
        <div>
  <label className="block mb-2 font-semibold">
    Old Password
  </label>

  <input
    type={showPassword.old ? "text" : "password"}
    name="oldPassword"
    value={formData.oldPassword}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 text-sm sm:text-base"
    placeholder="Enter old password"
  />
  <button
  type="button"
  className="text-sm text-[#C97A2B] mt-2"
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

<div>
  <label className="block mb-2 font-semibold">
    New Password
  </label>

  <input
    type={showPassword.new ? "text" : "password"}
    name="newPassword"
    value={formData.newPassword}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 text-sm sm:text-base"
    placeholder="Enter new password"
  />
</div>
<button
  type="button"
  className="text-sm text-[#C97A2B] mt-2"
  onClick={() =>
    setShowPassword({
      ...showPassword,
      new: !showPassword.new,
    })
  }
>
  {showPassword.new ? "Hide Password" : "Show Password"}
</button>
<div>
  <label className="block mb-2 font-semibold">
    Confirm Password
  </label>

  <input
    type={showPassword.confirm ? "text" : "password"}
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 text-sm sm:text-base"
    placeholder="Confirm new password"
  />
</div>

<div className="mt-8">
<button
  type="button"
  className="text-sm text-[#C97A2B] mt-2"
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

<div className="mt-6">
  <button
    type="submit"
    className="bg-[#C97A2B] text-white w-full sm:w-auto px-8 py-3 rounded-xl hover:bg-[#A85F1F] transition"
  >
    Update Password
  </button>
</div>
</form>
</div>
);
}

export default ChangePassword;