import { useState } from "react";
import "./Header.css";

export default function Header({ onLoginClick, onSignupClick }) {
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

        {/* AUTH BUTTONS - NO ICONS */}
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

      {/* DESKTOP CTA */}
      <div className="header-cta">
        <a href="#contact" className="cta-btn">
          <svg className="nav-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Book Now
        </a>
      </div>

    </header>
  );
}