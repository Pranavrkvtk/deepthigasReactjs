import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">

            {/* LOGO */}
            <div className="brand">
                <div className="brand__logo">⛽</div>
                <div>
                    <h1>DeepthiGas</h1>
                    <p className="subtitle">Reliable LPG delivery</p>
                </div>
            </div>



            {/* NAV */}
            <nav className={`nav ${open ? "active" : ""}`}>
                <a href="#hero" onClick={() => setOpen(false)}>Home</a>

                <a href="#services" onClick={() => setOpen(false)}>Services</a>
                <a href="#Product" onClick={() => setOpen(false)}>Products</a>

                <a href="#service-area" onClick={() => setOpen(false)}>Area</a>
                <a href="#about" onClick={() => setOpen(false)}>About</a>
                <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

                {/* CTA inside mobile */}
                <a href="#contact" className="cta-btn mobile-cta">
                    📞 Book Now
                </a>
            </nav>

            {/* DESKTOP CTA */}
            <div className="header-cta">
                <a href="#contact" className="cta-btn">📞 Book Now</a>
            </div>

        </header>
    );
}