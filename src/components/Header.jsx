import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            {/* LOGO */}
            <div className="brand">
                <div className="brand__logo">⛽</div>
                <div className="brand__text">
                    <h1>DeepthiGas</h1>
                    <p className="subtitle">Reliable LPG delivery</p>
                </div>
            </div>

            {/* HAMBURGER MENU BUTTON */}
            <button 
                className={`hamburger ${open ? "active" : ""}`} 
                onClick={() => setOpen(!open)}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* NAVIGATION */}
            <nav className={`nav ${open ? "active" : ""}`}>
                <a href="#hero" onClick={() => setOpen(false)}>
                    <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Home
                </a>

                <a href="#services" onClick={() => setOpen(false)}>
                    <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    Services
                </a>

                <a href="#products" onClick={() => setOpen(false)}>
                    <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Products
                </a>

                <a href="#service-area" onClick={() => setOpen(false)}>
                    <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Service Area
                </a>

                <a href="#about" onClick={() => setOpen(false)}>
                    <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    About
                </a>

                <a href="#contact" onClick={() => setOpen(false)}>
                    <svg className="nav-icon" viewBox="0 0 24 24" width="18" height="18">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Contact
                </a>

                {/* Mobile CTA */}
                <a href="#contact" className="mobile-cta" onClick={() => setOpen(false)}>
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Book Now
                </a>
            </nav>

            {/* DESKTOP CTA */}
            <div className="header-cta">
                <a href="#contact" className="cta-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Book Now
                </a>
            </div>
        </header>
    );
}