import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    // 👉 Here you can connect backend / API
    console.log("User Registered:", form);

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="subtitle">Join DeepthiGas today</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p className="switch">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>

      {/* STYLE */}
      <style>{`
        .auth-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
          font-family: 'Inter', sans-serif;
        }

        .auth-card {
          background: #fff;
          padding: 40px;
          border-radius: 16px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
        }

        .auth-card h2 {
          margin-bottom: 8px;
          color: #1e293b;
        }

        .subtitle {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 24px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        input {
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
          outline: none;
          transition: 0.2s;
        }

        input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.1);
        }

        button {
          background: #2563eb;
          color: white;
          padding: 12px;
          border-radius: 10px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }

        button:hover {
          background: #1d4ed8;
        }

        .error {
          color: red;
          font-size: 13px;
        }

        .switch {
          margin-top: 18px;
          font-size: 14px;
        }

        .switch a {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }

        .switch a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}