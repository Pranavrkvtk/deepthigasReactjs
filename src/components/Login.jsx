import { useState } from "react";

export default function Login({ onSwitchToSignup, onLoginSuccess, onClose }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (onLoginSuccess) onLoginSuccess(form);
      if (onClose) onClose();
    }, 800);
  };

  return (
    <div className="auth-card">
      <h2>Welcome Back</h2>
      <p className="subtitle">Login to DeepthiGas</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          autoFocus
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button 
            type="button" 
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <div className="auth-extra">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="switch">
        Don't have an account?{" "}
        <span onClick={onSwitchToSignup}>
          Sign Up
        </span>
      </p>

      <style>{`
        .auth-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          text-align: center;
        }

        .auth-card h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 28px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
          font-family: inherit;
        }

        input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }

        .password-field {
          position: relative;
        }

        .toggle-password {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          padding: 0;
        }

        .auth-extra {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #64748b;
        }

        .auth-extra label {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .auth-extra input {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .auth-extra a {
          color: #2563eb;
          text-decoration: none;
        }

        .auth-extra a:hover {
          text-decoration: underline;
        }

        .auth-btn {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: white;
          padding: 14px;
          border-radius: 12px;
          border: none;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .auth-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,99,235,0.3);
        }

        .auth-btn:active {
          transform: scale(0.98);
        }

        .auth-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .error {
          color: #dc2626;
          font-size: 13px;
          text-align: left;
        }

        .switch {
          margin-top: 24px;
          font-size: 14px;
          color: #475569;
        }

        .switch span {
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s;
        }

        .switch span:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}