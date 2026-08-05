import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaCheck, FaArrowLeft, FaShieldAlt } from "react-icons/fa";

function ChangePassword({ setActive }) {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({ old: false, new: false, confirm: false });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.oldPassword || !formData.newPassword || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
    if (formData.newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
      setActive("My Profile");
    }, 1200);
  };

  const toggle = (field) => setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));

  const strength = (() => {
    const p = formData.newPassword;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["", "bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"][strength];

  const PasswordField = ({ label, name, fieldKey, placeholder }) => (
    <div className="flex flex-col gap-2">
      <label className="label-sm">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C97A2B]">
          <FaLock className="text-sm" />
        </div>
        <input
          type={showPassword[fieldKey] ? "text" : "password"}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="cafe-input pl-11 pr-12"
        />
        <button
          type="button"
          onClick={() => toggle(fieldKey)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B6B52] hover:text-[#C97A2B] transition-colors"
        >
          {showPassword[fieldKey] ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 fade-in-up">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="section-title text-3xl sm:text-4xl font-bold text-[#4A2F22] pb-2">
            Change Password
          </h1>
          <p className="text-sm text-[#8B6B52] mt-3">Keep your account safe and secure</p>
        </div>
        <button
          type="button"
          onClick={() => setActive("My Profile")}
          className="flex items-center gap-2 text-sm font-semibold text-[#8B6B52] hover:text-[#4A2F22] transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back
        </button>
      </div>

      {/* Security tip */}
      <div className="flex items-start gap-3 bg-[#C97A2B]/8 border border-[#C97A2B]/20 rounded-2xl p-4 mb-8">
        <FaShieldAlt className="text-[#C97A2B] text-xl mt-0.5 flex-shrink-0" />
        <p className="text-sm text-[#6B4226] leading-relaxed">
          Use at least <strong>8 characters</strong> with a mix of uppercase letters, numbers, and special symbols for a strong password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <PasswordField label="Current Password" name="oldPassword"    fieldKey="old"     placeholder="Enter your current password" />
        <PasswordField label="New Password"     name="newPassword"    fieldKey="new"     placeholder="Create a new password" />

        {/* Strength meter */}
        {formData.newPassword && (
          <div className="space-y-2">
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= strength ? strengthColor : "bg-[#E8D5C0]"}`}
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-[#8B6B52]">
              Password strength: <span className={`${strength >= 3 ? "text-green-600" : strength === 2 ? "text-yellow-600" : "text-red-600"}`}>{strengthLabel}</span>
            </p>
          </div>
        )}

        <PasswordField label="Confirm Password" name="confirmPassword" fieldKey="confirm" placeholder="Repeat your new password" />

        {/* Error */}
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            ⚠️ {error}
          </p>
        )}

        <button
          type="submit"
          className={`cafe-btn ${saved ? "!bg-gradient-to-r !from-green-500 !to-emerald-600 !shadow-green-500/30" : ""}`}
        >
          {saved ? <><FaCheck className="text-sm" /> Updated!</> : "Update Password"}
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;