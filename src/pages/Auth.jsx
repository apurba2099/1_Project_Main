import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoCwm from "../assets/images/LogoCWM.png";
import logo from "../assets/images/logo.png";
import { supabase } from "../supabaseClient";
import { usePageTitle } from "../hooks/usePageTitle";

/* ── Reusable Input ── */
function AuthInput({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  value,
  onChange,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-[11px] font-medium text-white/60 mb-[7px] tracking-wide uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-[14px] py-[11px] bg-white/5 rounded-[10px] text-white text-sm outline-none transition-all duration-200 placeholder:text-white/25 font-inter
          ${
            focused
              ? "border border-[rgba(74,58,253,0.7)] shadow-[0_0_0_3px_rgba(74,58,253,0.15)]"
              : "border border-white/10"
          }`}
      />
    </div>
  );
}

/* ── Reusable Name Input (no label wrapper) ── */
function NameInput({ id, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`w-full px-[14px] py-[11px] bg-white/5 rounded-[10px] text-white text-sm outline-none transition-all duration-200 placeholder:text-white/25 font-inter
        ${
          focused
            ? "border border-[rgba(74,58,253,0.7)] shadow-[0_0_0_3px_rgba(74,58,253,0.15)]"
            : "border border-white/10"
        }`}
    />
  );
}

/* ── Password Input with show/hide toggle ── */
function EyeIcon({ open }) {
  return open ? (
    /* eye-open */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    /* eye-off */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function PasswordInput({
  id,
  label,
  placeholder,
  autoComplete,
  value,
  onChange,
}) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-[11px] font-medium text-white/60 mb-[7px] tracking-wide uppercase"
      >
        {label}
      </label>
      <div
        className={`flex items-center bg-white/5 rounded-[10px] transition-all duration-200
        ${
          focused
            ? "border border-[rgba(74,58,253,0.7)] shadow-[0_0_0_3px_rgba(74,58,253,0.15)]"
            : "border border-white/10"
        }`}
      >
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 px-[14px] py-[11px] bg-transparent text-white text-sm outline-none placeholder:text-white/25 font-inter rounded-l-[10px]"
        />
        <button
          type="button"
          aria-label={show ? "Hide password" : "Show password"}
          onClick={() => setShow((prev) => !prev)}
          className="px-3 py-[11px] text-white/35 hover:text-white/70 transition-colors duration-150 flex-shrink-0 bg-transparent border-none cursor-pointer rounded-r-[10px] focus:outline-none"
        >
          <EyeIcon open={show} />
        </button>
      </div>
    </div>
  );
}

/* ── LOGIN FORM ── */
function LoginForm({ onSwitch }) {
  const navigate = useNavigate();
  const [btnHover, setBtnHover] = useState(false);

  // ── Supabase state ──
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    navigate("/");
  }

  async function handleForgotPassword() {
    setError("");
    setMessage("");
    if (!email) {
      setError("Enter your email above first, then click Forgot password.");
      return;
    }
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (err) {
      setError(err.message);
      return;
    }
    setMessage("Password reset email sent! Check your inbox.");
  }

  return (
    <>
      <h2 className="text-[22px] font-bold text-white text-center mb-1.5 tracking-[-0.3px]">
        Welcome back
      </h2>
      <p className="text-[13px] text-white/50 text-center mb-6 leading-relaxed">
        Sign in to your DakshCWM account
      </p>

      <AuthInput
        id="login-email"
        label="Email address"
        type="email"
        placeholder="you@company.com"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        id="login-password"
        label="Password"
        placeholder="••••••••"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Forgot password */}
      <div className="text-right -mt-2 mb-5">
        <button
          id="forgot-password-btn"
          type="button"
          onClick={handleForgotPassword}
          className="text-[12px] text-[rgba(74,58,253,0.9)] font-medium bg-transparent border-none cursor-pointer font-inter hover:text-[#4a3afd] transition-colors"
        >
          Forgot password?
        </button>
      </div>

      {/* Error / success messages */}
      {error && (
        <p className="text-[#ff6b6b] text-xs text-center mb-2.5">{error}</p>
      )}
      {message && (
        <p className="text-[#4ade80] text-xs text-center mb-2.5">{message}</p>
      )}

      {/* Submit */}
      <button
        id="login-submit-btn"
        type="button"
        onClick={handleLogin}
        disabled={loading}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        className={`w-full py-[13px] mt-1 rounded-[10px] border-none text-white text-[15px] font-semibold font-inter transition-all duration-200
          bg-gradient-to-br from-[#4a3afd] to-[rgba(0,180,255,0.85)]
          ${btnHover ? "shadow-[0_8px_28px_rgba(74,58,253,0.55)] -translate-y-0.5" : "shadow-[0_4px_20px_rgba(74,58,253,0.4)]"}
          ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
      >
        {loading ? "Signing in…" : "Sign In"}
      </button>

      <p className="text-center mt-5 text-[13px] text-white/40">
        Don't have an account?&nbsp;
        <button
          id="switch-to-signup-btn"
          type="button"
          onClick={onSwitch}
          className="text-[#4a3afd] font-semibold bg-transparent border-none cursor-pointer font-inter text-[13px] hover:text-[#6a5aff] transition-colors"
        >
          Create one
        </button>
      </p>
    </>
  );
}

/* ── SIGNUP FORM ── */
function SignupForm({ onSwitch }) {
  const [btnHover, setBtnHover] = useState(false);

  // ── Supabase state ──
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup() {
    setError("");
    setMessage("");
    if (!firstName || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName },
      },
    });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    setMessage("Account created! Check your email to confirm your address.");
  }

  return (
    <>
      <h2 className="text-[22px] font-bold text-white text-center mb-1.5 tracking-[-0.3px]">
        Create your account
      </h2>
      <p className="text-[13px] text-white/50 text-center mb-6 leading-relaxed">
        Start automating CAD workflows for free
      </p>

      {/* Name row */}
      <div className="flex gap-3 mb-0">
        <div className="flex-1">
          <label
            htmlFor="signup-firstname"
            className="block text-[11px] font-medium text-white/60 mb-[7px] tracking-wide uppercase"
          >
            First name
          </label>
          <NameInput
            id="signup-firstname"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="signup-lastname"
            className="block text-[11px] font-medium text-white/60 mb-[7px] tracking-wide uppercase"
          >
            Last name
          </label>
          <NameInput
            id="signup-lastname"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4">
        <AuthInput
          id="signup-email"
          label="Work email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          id="signup-password"
          label="Password"
          placeholder="Min. 8 characters"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput
          id="signup-confirm-password"
          label="Confirm password"
          placeholder="Re-enter password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* Error / success messages */}
      {error && (
        <p className="text-[#ff6b6b] text-xs text-center mb-2.5">{error}</p>
      )}
      {message && (
        <p className="text-[#4ade80] text-xs text-center mb-2.5">{message}</p>
      )}

      {/* Submit */}
      <button
        id="signup-submit-btn"
        type="button"
        onClick={handleSignup}
        disabled={loading}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        className={`w-full py-[13px] mt-1 rounded-[10px] border-none text-white text-[15px] font-semibold font-inter transition-all duration-200
          bg-gradient-to-br from-[#4a3afd] to-[rgba(0,180,255,0.85)]
          ${btnHover ? "shadow-[0_8px_28px_rgba(74,58,253,0.55)] -translate-y-0.5" : "shadow-[0_4px_20px_rgba(74,58,253,0.4)]"}
          ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
      >
        {loading ? "Creating account…" : "Create Account"}
      </button>

      <p className="text-[11px] text-white/25 text-center mt-4 leading-relaxed">
        By creating an account, you agree to our{" "}
        <span className="text-white/45">Terms of Service</span> and{" "}
        <span className="text-white/45">Privacy Policy</span>.
      </p>

      <p className="text-center mt-4 text-[13px] text-white/40">
        Already have an account?&nbsp;
        <button
          id="switch-to-login-btn"
          type="button"
          onClick={onSwitch}
          className="text-[#4a3afd] font-semibold bg-transparent border-none cursor-pointer font-inter text-[13px] hover:text-[#6a5aff] transition-colors"
        >
          Sign in
        </button>
      </p>
    </>
  );
}

/* ── PAGE ── */
export default function Auth() {
  usePageTitle("My Account");
  const [tab, setTab] = useState("login"); // "login" | "signup"

  return (
    <div className="min-h-screen bg-[rgb(4,4,10)] flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden font-inter">
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74,58,253,0.18) 0%, rgba(0,180,255,0.06) 50%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74,58,253,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Card */}
      <div
        role="main"
        className="relative z-10 w-full max-w-[440px] bg-white/[0.03] border border-white/[0.08] rounded-[20px] px-9 pt-10 pb-11 backdrop-blur-xl shadow-[0_0_0_1px_rgba(74,58,253,0.1),0_24px_64px_rgba(0,0,0,0.5)]"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-7">
          <div className="w-9 h-9 rounded-full border border-[rgba(0,180,255,0.4)] overflow-hidden flex items-center justify-center bg-[rgba(0,180,255,0.08)] flex-shrink-0">
            <img
              src={logoCwm}
              alt="DakshCWM"
              className="w-full h-full object-contain"
            />
          </div>
          <img src={logo} alt="DakshCWM logo" className="w-[140px]" />
        </div>

        {/* Tab switcher */}
        <div
          role="tablist"
          className="flex bg-white/[0.04] border border-white/[0.08] rounded-xl p-1 mb-7 gap-1"
        >
          <button
            role="tab"
            aria-selected={tab === "login"}
            id="tab-login"
            onClick={() => setTab("login")}
            className={`flex-1 py-[9px] text-sm font-semibold rounded-[9px] transition-all duration-200 border-none cursor-pointer font-inter
              ${
                tab === "login"
                  ? "bg-[rgba(74,58,253,0.85)] text-white shadow-[0_2px_12px_rgba(74,58,253,0.4)]"
                  : "bg-transparent text-white/50 hover:text-white/80"
              }`}
          >
            Sign In
          </button>
          <button
            role="tab"
            aria-selected={tab === "signup"}
            id="tab-signup"
            onClick={() => setTab("signup")}
            className={`flex-1 py-[9px] text-sm font-semibold rounded-[9px] transition-all duration-200 border-none cursor-pointer font-inter
              ${
                tab === "signup"
                  ? "bg-[rgba(74,58,253,0.85)] text-white shadow-[0_2px_12px_rgba(74,58,253,0.4)]"
                  : "bg-transparent text-white/50 hover:text-white/80"
              }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        {tab === "login" ? (
          <LoginForm onSwitch={() => setTab("signup")} />
        ) : (
          <SignupForm onSwitch={() => setTab("login")} />
        )}
      </div>

      {/* Back to home */}
      <Link
        to="/"
        id="back-to-home-link"
        className="relative z-10 mt-6 flex items-center gap-1.5 text-white/35 text-[13px] no-underline transition-colors hover:text-white/60"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to home
      </Link>
    </div>
  );
}
