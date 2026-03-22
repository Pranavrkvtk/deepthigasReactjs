// Header.js - Updated version with cart badge integration
import { useState } from "react";
import "./Header.css";

export default function Header({ onLoginClick, onSignupClick, cartItemCount = 0, onCartClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      {/* LOGO */}
      <div className="brand">
        <div className="brand__logo">⛽</div>
        <div className="brand__text">
          <h1>Deepthi Gas</h1>
          <p className="subtitle">Reliable LPG delivery</p>
        </div>
      </div>

      {/* MENU BUTTON */}
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAV */}
      <nav className={`nav ${open ? "active" : ""}`}>

        {/* Home with icon */}
        <a href="#hero" onClick={() => setOpen(false)}>
          <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Home
        </a>

        {/* Services with icon */}
        <a href="#services" onClick={() => setOpen(false)}>
          <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          Services
        </a>

        {/* Products with icon */}
        <a href="#products" onClick={() => setOpen(false)}>
          <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Products
        </a>

        {/* Service Area with icon */}
        <a href="#service-area" onClick={() => setOpen(false)}>
          <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Service Area
        </a>

        {/* About with icon */}
        <a href="#about" onClick={() => setOpen(false)}>
          <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          About
        </a>

        {/* Contact with icon */}
        <a href="#contact" onClick={() => setOpen(false)}>
          <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Contact
        </a>

        {/* CART LINK WITH BADGE */}
        <button 
          className="cart-nav-link"
          onClick={() => {
            setOpen(false);
            if (onCartClick) onCartClick();
          }}
          style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
        >
          <div className="cart-icon-wrapper">
            <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>My Cart</span>
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount > 99 ? '99+' : cartItemCount}</span>
            )}
          </div>
        </button>

        {/* AUTH BUTTONS */}
        <div className="auth-buttons">
          <button 
            className="login-btn" 
            onClick={() => {
              setOpen(false);
              onLoginClick();
            }}
          >
            Login
          </button>
          <button 
            className="signup-btn" 
            onClick={() => {
              setOpen(false);
              onSignupClick();
            }}
          >
            Sign Up
          </button>
        </div>

        {/* MOBILE CTA */}
        <a href="#contact" className="mobile-cta" onClick={() => setOpen(false)}>
          <svg className="nav-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Book Now
        </a>

      </nav>

      {/* DESKTOP CTA with Cart Icon */}
      <div className="header-right">
        <button 
          className="cart-desktop-btn"
          onClick={() => onCartClick && onCartClick()}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Cart
          {cartItemCount > 0 && (
            <span className="desktop-cart-badge">{cartItemCount}</span>
          )}
        </button>
        
        <a href="#contact" className="cta-btn">
          <svg className="nav-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Book Now
        </a>
      </div>

      <style>{`
        .cart-nav-link {
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: inherit;
          font-family: inherit;
          font-size: 16px;
        }
        
        .cart-icon-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }
        
        .cart-badge {
          position: absolute;
          top: -12px;
          right: -20px;
          background: linear-gradient(135deg, #FFB347, #FF8C00);
          color: #1e2b0f;
          font-size: 10px;
          font-weight: bold;
          min-width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          animation: badgePop 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .cart-desktop-btn {
          background: rgba(90, 158, 26, 0.15);
          border: 1px solid rgba(90, 158, 26, 0.3);
          border-radius: 40px;
          padding: 8px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #2c5e1a;
          transition: all 0.3s;
          position: relative;
        }
        
        .cart-desktop-btn:hover {
          background: #5A9E1A;
          color: white;
          transform: translateY(-2px);
        }
        
        .desktop-cart-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #FFB347;
          color: #1e2b0f;
          font-size: 10px;
          font-weight: bold;
          min-width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @keyframes badgePop {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .header-right {
            display: none;
          }
        }
        
        @media (min-width: 769px) {
          .cart-nav-link {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}