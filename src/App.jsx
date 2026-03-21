import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceArea from "./components/ServiceArea";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ChatBot from "./components/ChatBot";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #f9f7f4;
    color: #1a1a1a;
  }

  .app-wrap {
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* MODAL STYLES - Shared for both Login and SignUp */
  .auth-modal {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .auth-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(4px);
  }

  .auth-modal-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 420px;
    margin: 20px;
    animation: fadeUp 0.3s ease;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .auth-close {
    position: absolute;
    top: -10px;
    right: -10px;
    background: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    z-index: 3;
    transition: all 0.2s;
  }

  .auth-close:hover {
    transform: scale(1.05);
    background: #f0f0f0;
  }

  /* TRUST STRIP */
  .trust-strip {
    background: #1a2e12;
    color: rgba(255,255,255,0.85);
    text-align: center;
    padding: 12px 1rem;
    font-size: 13px;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .trust-strip-inner {
    display: flex;
    gap: 2rem;
    animation: marquee 18s linear infinite;
    white-space: nowrap;
  }

  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .trust-item {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  .trust-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #97C459;
  }

  .floating-call {
    position: fixed;
    bottom: 28px;
    right: 28px;
    z-index: 999;
    background: #3B6D11;
    color: #fff;
    text-decoration: none;
    padding: 13px 22px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .floating-call:hover {
    background: #27500A;
    transform: translateY(-2px);
  }
`;

export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const services = [
    { title: "Gas Cylinder Delivery", description: "Fast LPG delivery", icon: "🔥" },
    { title: "Gas Stove", description: "High quality stoves", icon: "🍳" },
    { title: "Installation", description: "Safe setup", icon: "🔧" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleLoginSuccess = (userData) => {
    console.log("User logged in:", userData);
    setShowLogin(false);
    alert(`Welcome back ${userData.email}! 🎉`);
  };

  const handleSignupSuccess = (userData) => {
    console.log("User signed up:", userData);
    setShowSignup(false);
    alert(`Welcome to DeepthiGas ${userData.name}! 🎉`);
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const trustItems = [
    "Trusted LPG Services in Vadakara",
    "Fast Same-Day Delivery",
    "100% Safety Certified",
    "HP Gas Dealer Since 1984",
    "7-Day Customer Support",
    "10,000+ Happy Customers",
  ];

  return (
    <>
      <style>{styles}</style>

      <div className="app-wrap">
        {/* Header with both click handlers */}
        <Header 
          onLoginClick={() => setShowLogin(true)}
          onSignupClick={() => setShowSignup(true)}
        />

        {/* LOGIN POPUP */}
        {showLogin && (
          <div className="auth-modal">
            <div className="auth-overlay" onClick={() => setShowLogin(false)} />
            <div className="auth-modal-content">
              <button className="auth-close" onClick={() => setShowLogin(false)}>
                ✕
              </button>
              <Login 
                onSwitchToSignup={handleSwitchToSignup}
                onLoginSuccess={handleLoginSuccess}
                onClose={() => setShowLogin(false)}
              />
            </div>
          </div>
        )}

        {/* SIGNUP POPUP */}
        {showSignup && (
          <div className="auth-modal">
            <div className="auth-overlay" onClick={() => setShowSignup(false)} />
            <div className="auth-modal-content">
              <button className="auth-close" onClick={() => setShowSignup(false)}>
                ✕
              </button>
              <SignUp 
                onSwitchToLogin={handleSwitchToLogin}
                onSignupSuccess={handleSignupSuccess}
                onClose={() => setShowSignup(false)}
              />
            </div>
          </div>
        )}

        <main>
          <Hero />
          <Product />

          <div className="trust-strip">
            <div className="trust-strip-inner">
              {[...trustItems, ...trustItems].map((item, i) => (
                <span className="trust-item" key={i}>
                  <span className="trust-dot" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Services services={services} />
          <ServiceArea />
          <About />

          <Contact
            form={form}
            submitted={submitted}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </main>

        {/* FLOATING CALL */}
        <a href="tel:+918078801349" className="floating-call">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Now
        </a>

        <ChatBot />
        <Footer />
      </div>
    </>
  );
}