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
import { Route, Routes } from "react-router-dom";
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

  /* ── TRUST STRIP ── */
  .trust-strip {
    background: #1a2e12;
    color: rgba(255,255,255,0.85);
    text-align: center;
    padding: 12px 1rem;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
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
    flex-shrink: 0;
  }

  .trust-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #97C459;
    flex-shrink: 0;
  }

  /* ── SECTION WRAPPERS ── */
  .section-services {
    background: #ffffff;
    padding: 0;
  }

  .section-about {
    background: #f9f7f4;
    padding: 0;
  }

  /* ── FLOATING CALL BUTTON ── */
  .floating-call {
    position: fixed;
    bottom: 28px;
    right: 28px;
    z-index: 999;
    background: #3B6D11;
    color: #fff;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 13px 22px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 20px rgba(59,109,17,0.35);
    transition: background 0.2s, transform 0.2s;
    letter-spacing: 0.03em;
  }

  .floating-call:hover {
    background: #27500A;
    transform: translateY(-2px);
  }

  .floating-call-icon {
    width: 18px;
    height: 18px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .floating-call-icon svg {
    width: 10px;
    height: 10px;
    stroke: #fff;
    fill: none;
    stroke-width: 2.5;
  }

  /* ── SECTION DIVIDERS ── */
  .section-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, #e0dbd4, transparent);
  }
`;

export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      title: "Gas Cylinder Delivery",
      description: "Fast LPG delivery to your home",
      icon: "🔥",
    },
    {
      title: "Gas Stove",
      description: "High quality gas stoves",
      icon: "🍳",
    },
    {
      title: "Installation",
      description: "Safe and professional setup",
      icon: "🔧",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", message: "" });
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
        <Header />
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}

          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>

        <main>

          {/* HERO */}
          <Hero />
          <Product />
          {/* <Login /> */}
          {/* TRUST STRIP */}
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

          {/* SERVICES */}
          <div className="section-services">
            <Services services={services} />
          </div>

          <div className="section-divider" />

          {/* SERVICE AREA */}
          <ServiceArea />

          <div className="section-divider" />

          {/* ABOUT */}
          <div className="section-about">
            <About />
          </div>

          <div className="section-divider" />

          {/* CONTACT */}
          <Contact
            form={form}
            submitted={submitted}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

        </main>

        <a href="tel:+918078801349" className="floating-call">
          <span className="floating-call-icon">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.07 2.94 2 2 0 012.03 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </span>
          Call Now
        </a>


        `        <ChatBot />`
        <Footer />
      </div>
    </>
  );
}