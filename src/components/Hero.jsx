import { useCounter } from "./useCounter";
import { useEffect, useRef, useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .hero-wrap {
    background: linear-gradient(135deg, #f0f9ff 0%, #e6f0fa 50%, #d9e9f5 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 6rem 2rem 4rem;
    border-bottom: 1px solid rgba(37, 99, 235, 0.1);
  }

  /* Animated gradient orbs */
  .hero-wrap .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
    z-index: 1;
    animation: float 20s ease-in-out infinite;
  }

  .hero-wrap .orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #3b82f6 0%, #60a5fa 70%);
    top: -100px;
    right: -100px;
  }

  .hero-wrap .orb-2 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, #8b5cf6 0%, #a78bfa 70%);
    bottom: -100px;
    left: -100px;
    animation-delay: -5s;
  }

  .hero-wrap .orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #06b6d4 0%, #22d3ee 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(50px, 50px) scale(1.1); }
    50% { transform: translate(0, 100px) scale(0.9); }
    75% { transform: translate(-50px, 50px) scale(1.05); }
  }

  /* Subtle pattern overlay */
  .hero-wrap .pattern {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: 
      radial-gradient(circle at 25px 25px, #2563eb 2px, transparent 2px),
      linear-gradient(45deg, transparent 48%, #2563eb 49%, #2563eb 51%, transparent 52%);
    background-size: 50px 50px, 30px 30px;
    pointer-events: none;
    z-index: 1;
  }

  .hero-inner {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  @media (max-width: 968px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }
    .hero-wrap { min-height: auto; padding: 5rem 1.5rem 3rem; }
    .hero-badges { justify-content: center; }
    .hero-actions { justify-content: center; }
    .hero-right { display: none; }
    .hero-title { font-size: clamp(2rem, 6vw, 3.2rem); }
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(37, 99, 235, 0.2);
    color: #2563eb;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 8px 20px;
    border-radius: 50px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.15);
    animation: slideInLeft 0.6s ease forwards;
  }

  .hero-tag-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2563eb;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.7; }
  }

  .hero-title {
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
    margin: 0 0 1.5rem;
    animation: slideInLeft 0.6s ease 0.1s forwards;
    opacity: 0;
    transform: translateX(-30px);
  }

  .hero-title .gradient-text {
    background: linear-gradient(135deg, #2563eb, #7c3aed, #db2777);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
  }

  .hero-title .gradient-text::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(135deg, rgba(37,99,235,0.2), rgba(124,58,237,0.2));
    border-radius: 4px;
    z-index: -1;
  }

  .hero-desc {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    color: #334155;
    line-height: 1.7;
    margin: 0 0 2.5rem;
    max-width: 550px;
    font-weight: 400;
    animation: slideInLeft 0.6s ease 0.2s forwards;
    opacity: 0;
    transform: translateX(-30px);
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    animation: slideInLeft 0.6s ease 0.3s forwards;
    opacity: 0;
    transform: translateX(-30px);
  }

  .hero-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: #fff;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    padding: 16px 32px;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    letter-spacing: 0.02em;
    box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);
    position: relative;
    overflow: hidden;
  }

  .hero-btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  .hero-btn-primary:hover::before {
    left: 100%;
  }

  .hero-btn-primary:hover {
    background: linear-gradient(135deg, #1d4ed8, #2563eb);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 30px -5px rgba(37, 99, 235, 0.5);
  }

  .hero-btn-primary:active {
    transform: translateY(-2px) scale(1.01);
  }

  .hero-btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    color: #0f172a;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    padding: 16px 32px;
    border-radius: 16px;
    border: 2px solid rgba(37, 99, 235, 0.2);
    transition: all 0.3s ease;
    letter-spacing: 0.02em;
    position: relative;
    overflow: hidden;
  }

  .hero-btn-outline::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(37, 99, 235, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.5s, height 0.5s;
  }

  .hero-btn-outline:hover::before {
    width: 300px;
    height: 300px;
  }

  .hero-btn-outline:hover {
    border-color: #2563eb;
    background: white;
    transform: translateY(-4px);
    box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .hero-btn-primary svg,
  .hero-btn-outline svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    transition: transform 0.3s ease;
  }

  .hero-btn-primary:hover svg,
  .hero-btn-outline:hover svg {
    transform: translateX(4px);
  }

  .hero-badges {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    animation: slideInLeft 0.6s ease 0.4s forwards;
    opacity: 0;
    transform: translateX(-30px);
  }

  .hero-badge-card {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .hero-badge-card::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #7c3aed);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  .hero-badge-card:hover::after {
    width: 100%;
  }

  .hero-badge-num {
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    font-size: 2.2rem;
    font-weight: 800;
    background: linear-gradient(135deg, #0f172a, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }

  .hero-badge-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    color: #475569;
    margin-top: 6px;
    letter-spacing: 0.02em;
    font-weight: 500;
    text-transform: uppercase;
  }

  .hero-badge-divider {
    width: 1px;
    background: linear-gradient(to bottom, transparent, #cbd5e1, transparent);
    align-self: stretch;
  }

  /* RIGHT SIDE CARDS - Enhanced */
  .hero-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: slideInRight 0.8s ease forwards;
  }

  .hero-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 24px;
    padding: 1.5rem 1.8rem;
    display: flex;
    align-items: center;
    gap: 18px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }

  .hero-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #2563eb, #7c3aed, #db2777);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .hero-card:hover {
    transform: translateX(-8px) scale(1.02);
    box-shadow: 0 20px 40px -15px rgba(37, 99, 235, 0.3);
    background: white;
  }

  .hero-card:hover::before {
    opacity: 1;
  }

  .hero-card-icon {
    width: 56px;
    height: 56px;
    border-radius: 18px;
    background: linear-gradient(135deg, #eef2ff, #ffffff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.15);
    transition: all 0.3s ease;
  }

  .hero-card:hover .hero-card-icon {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, #2563eb, #3b82f6);
  }

  .hero-card-icon svg {
    width: 26px;
    height: 26px;
    stroke: #2563eb;
    fill: none;
    stroke-width: 1.8;
    transition: all 0.3s ease;
  }

  .hero-card:hover .hero-card-icon svg {
    stroke: white;
    transform: rotate(-5deg);
  }

  .hero-card-content {
    flex: 1;
  }

  .hero-card-title {
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 4px;
  }

  .hero-card-sub {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    color: #64748b;
    margin: 0;
    font-weight: 400;
  }

  .hero-card-badge {
    background: linear-gradient(135deg, #eef2ff, #ffffff);
    color: #2563eb;
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 6px 16px;
    border-radius: 40px;
    flex-shrink: 0;
    border: 1px solid rgba(37, 99, 235, 0.2);
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
    transition: all 0.3s ease;
  }

  .hero-card:hover .hero-card-badge {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: white;
    border-color: transparent;
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(37, 99, 235, 0.3);
  }

  /* Enhanced staggered animation */
  .hero-card {
    animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
    transform: translateX(30px);
  }

  .hero-card:nth-child(1) { animation-delay: 0.1s; }
  .hero-card:nth-child(2) { animation-delay: 0.2s; }
  .hero-card:nth-child(3) { animation-delay: 0.3s; }
  .hero-card:nth-child(4) { animation-delay: 0.4s; }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Floating animation for cards */
  @keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .hero-card {
    animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards, floatCard 4s ease-in-out infinite;
    animation-iteration-count: 1, infinite;
  }

  .hero-card:nth-child(1) { animation-delay: 0.1s, 0.6s; }
  .hero-card:nth-child(2) { animation-delay: 0.2s, 0.7s; }
  .hero-card:nth-child(3) { animation-delay: 0.3s, 0.8s; }
  .hero-card:nth-child(4) { animation-delay: 0.4s, 0.9s; }

  /* Trust indicators */
  .hero-trust {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 2rem;
    animation: slideInLeft 0.6s ease 0.5s forwards;
    opacity: 0;
    transform: translateX(-30px);
  }

  .hero-trust-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: #475569;
  }

  .hero-trust-item svg {
    width: 18px;
    height: 18px;
    stroke: #22c55e;
    fill: none;
    stroke-width: 2.5;
  }

  .hero-trust-badge {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
    padding: 4px 12px;
    border-radius: 40px;
    font-size: 0.8rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`;

function HeroBadges() {
  const years = useCounter(40);
  const customers = useCounter(10000);

  return (
    <div className="hero-badges">
      <div className="hero-badge-card">
        <span className="hero-badge-num">{years}+</span>
        <span className="hero-badge-label">Years Serving</span>
      </div>

      <div className="hero-badge-divider" />

      <div className="hero-badge-card">
        <span className="hero-badge-num">
          {customers >= 1000 ? Math.floor(customers / 1000) + "k+" : customers}
        </span>
        <span className="hero-badge-label">Happy Customers</span>
      </div>

      <div className="hero-badge-divider" />

      <div className="hero-badge-card">
        <span className="hero-badge-num">Same Day</span>
        <span className="hero-badge-label">Delivery</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <style>{styles}</style>

      <section className="hero-wrap" id="hero">
        {/* Animated background orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="pattern"></div>
        
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span>✨ Trusted LPG Service · Vatakara</span>
            </div>

            <h1 className="hero-title">
              Fast & Safe <span className="gradient-text">Gas Delivery</span><br />at Your Doorstep
            </h1>

            <p className="hero-desc">
              Book your cylinder in seconds. Safe, affordable, and reliable
              LPG services trusted by thousands of families in Kozhikode.
            </p>

            <div className="hero-actions">
              <a className="hero-btn-primary" href="#contact">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6.09-6.09 19.79 19.79 0 01-3.07-8.63A2 2 0 012.03 1h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Request Callback
              </a>
              <a className="hero-btn-outline" href="#services">
                <svg viewBox="0 0 24 24">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                </svg>
                View Services
              </a>
            </div>

            <HeroBadges />

            {/* Trust indicators */}
            <div className="hero-trust">
              <div className="hero-trust-item">
                <svg viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>ISO Certified</span>
              </div>
              <div className="hero-trust-item">
                <svg viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>24/7 Support</span>
              </div>
              <div className="hero-trust-badge">
                ⭐ 4.9 (2k+ reviews)
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <div className="hero-card-content">
                <p className="hero-card-title">Easy Booking</p>
                <p className="hero-card-sub">Call or WhatsApp anytime</p>
              </div>
              <span className="hero-card-badge">24/7</span>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="hero-card-content">
                <p className="hero-card-title">Fast Delivery</p>
                <p className="hero-card-sub">Same-day to your door</p>
              </div>
              <span className="hero-card-badge">Quick</span>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </div>
              <div className="hero-card-content">
                <p className="hero-card-title">Safety Certified</p>
                <p className="hero-card-sub">All cylinders inspected</p>
              </div>
              <span className="hero-card-badge">100%</span>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="hero-card-content">
                <p className="hero-card-title">Serving Vadakara</p>
                <p className="hero-card-sub">Kozhikode District</p>
              </div>
              <span className="hero-card-badge">Local</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}