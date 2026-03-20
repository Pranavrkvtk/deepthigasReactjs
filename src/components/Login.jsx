import React, { useState } from "react";

const styles = `
.login-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,#dbeafe,#ecfeff,#f5f3ff);
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow: hidden;
}

/* FLOATING BACKGROUND BLOBS */
.login-wrap::before,
.login-wrap::after {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  z-index: 0;
}

.login-wrap::before {
  background: #2563eb;
  top: -100px;
  left: -100px;
}

.login-wrap::after {
  background: #7c3aed;
  bottom: -100px;
  right: -100px;
}

/* CARD */
.login-card {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  animation: fadeUp 0.6s ease;
}

/* TITLE */
.login-title {
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(135deg,#2563eb,#7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-sub {
  text-align: center;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 30px;
}

/* INPUT WRAP */
.input-wrap {
  position: relative;
  margin-bottom: 18px;
}

.login-input {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: 0.2s;
}

.login-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
}

/* FLOAT LABEL */
.input-wrap label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  padding: 0 5px;
  font-size: 12px;
  color: #94a3b8;
  transition: 0.2s;
  pointer-events: none;
}

.login-input:focus + label,
.login-input:not(:placeholder-shown) + label {
  top: -8px;
  font-size: 11px;
  color: #2563eb;
}

/* PASSWORD TOGGLE */
.eye {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 14px;
  color: #64748b;
}

/* EXTRA */
.login-extra {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 20px;
  color: #64748b;
}

.login-extra a {
  color: #2563eb;
  text-decoration: none;
}

/* BUTTON */
.login-btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg,#2563eb,#7c3aed);
  color: white;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(37,99,235,0.3);
}

.login-btn:active {
  transform: scale(0.96);
}

/* FOOTER */
.login-footer {
  text-align: center;
  font-size: 13px;
  margin-top: 15px;
}

.login-footer a {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

/* ANIMATION */
@keyframes fadeUp {
  from {opacity:0; transform:translateY(30px);}
  to {opacity:1; transform:translateY(0);}
}
`;

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful 🚀");
  };

  return (
    <div className="login-wrap" id="login">
      <style>{styles}</style>

      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-sub">Login to DeepthiGas</p>

        {/* EMAIL */}
        <div className="input-wrap">
          <input
            type="email"
            name="email"
            placeholder=" "
            className="login-input"
            onChange={handleChange}
            required
          />
          <label>Email Address</label>
        </div>

        {/* PASSWORD */}
        <div className="input-wrap">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder=" "
            className="login-input"
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <span className="eye" onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </span>
        </div>

        <div className="login-extra">
          <label>
            <input type="checkbox" /> Remember
          </label>
          <a href="#">Forgot?</a>
        </div>

        <button className="login-btn">Login</button>

        <div className="login-footer">
          Don’t have an account? <a href="#signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}