// src/components/Login.jsx
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Login = ({ onSwitchToSignup, onLoginSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError('Username and password are required');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await login({
        username: formData.username,
        password: formData.password,
      });
      
      if (onLoginSuccess) {
        onLoginSuccess(response.user || { username: formData.username });
      }
      if (onClose) {
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2>Welcome Back</h2>
      <p className="subtitle">Login to your DeepthiGas account</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          autoFocus
          disabled={loading}
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
          />
          <button 
            type="button" 
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
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

        input:disabled {
          background: #f8fafc;
          cursor: not-allowed;
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

        .toggle-password:disabled {
          cursor: not-allowed;
          opacity: 0.5;
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
          margin-top: 8px;
        }

        .auth-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,99,235,0.3);
        }

        .auth-btn:active:not(:disabled) {
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
          background: #fee2e2;
          padding: 8px 12px;
          border-radius: 8px;
          margin-top: 4px;
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
};

export default Login;