import React, { useState, useRef, useEffect } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .sv-root {
    position: relative;
    padding: 6rem 0 5rem;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #e8edf2 100%);
  }

  /* Animated Background Pattern */
  .sv-root::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(59, 109, 17, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(59, 109, 17, 0.03) 0%, transparent 50%),
      repeating-linear-gradient(45deg, rgba(59, 109, 17, 0.02) 0px, rgba(59, 109, 17, 0.02) 2px, transparent 2px, transparent 8px);
    pointer-events: none;
    animation: patternShift 20s linear infinite;
  }

  @keyframes patternShift {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100px 100px;
    }
  }

  /* Animated Gradient Orbs */
  .sv-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.3;
    z-index: 0;
    animation: floatOrb 15s ease-in-out infinite;
  }

  .sv-orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #3B6D11, #A8D55A);
    top: -150px;
    right: -100px;
    animation-delay: 0s;
  }

  .sv-orb-2 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, #5A9E1A, #8BC34A);
    bottom: -100px;
    left: -50px;
    animation-delay: -5s;
  }

  .sv-orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #7CB518, #A8D55A);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -10s;
    opacity: 0.2;
  }

  @keyframes floatOrb {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  /* Floating Particles */
  .sv-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .sv-particle {
    position: absolute;
    background: rgba(59, 109, 17, 0.1);
    border-radius: 50%;
    animation: particleFloat linear infinite;
  }

  @keyframes particleFloat {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }

  .sv-inner {
    position: relative;
    z-index: 2;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Glass Morphism Header */
  .sv-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 3.5rem;
    gap: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    animation: slideInUp 0.6s ease-out;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .sv-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #3B6D11;
    margin-bottom: 1rem;
  }
  .sv-label::before {
    content: '';
    display: block;
    width: 24px; height: 2px;
    background: #3B6D11;
    border-radius: 2px;
    animation: expandWidth 0.8s ease-out;
  }

  @keyframes expandWidth {
    from {
      width: 0;
    }
    to {
      width: 24px;
    }
  }

  .sv-title {
    font-size: clamp(2.2rem, 4vw, 3.4rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -.035em;
    color: #111;
    margin: 0;
  }
  .sv-title span { 
    background: linear-gradient(135deg, #3B6D11, #7CB518);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sv-subtitle {
    font-size: 15px;
    color: #666;
    max-width: 320px;
    line-height: 1.65;
    text-align: right;
    font-weight: 400;
  }

  /* Enhanced Service Cards */
  .sv-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 4rem;
    animation: fadeInUp 0.8s ease-out 0.2s both;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .sv-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 2rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
    position: relative;
    overflow: hidden;
    animation: fadeIn 0.45s ease both;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  .sv-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3B6D11, #A8D55A, #3B6D11);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  .sv-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(135deg, rgba(59, 109, 17, 0.05), rgba(168, 213, 90, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  .sv-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    background: white;
  }
  .sv-card:hover::before { transform: scaleX(1); }
  .sv-card:hover::after { opacity: 1; }

  .sv-card:nth-child(1){animation-delay:.05s}
  .sv-card:nth-child(2){animation-delay:.1s}
  .sv-card:nth-child(3){animation-delay:.15s}
  .sv-card:nth-child(4){animation-delay:.2s}
  .sv-card:nth-child(5){animation-delay:.25s}
  .sv-card:nth-child(6){animation-delay:.3s}
  .sv-card:nth-child(7){animation-delay:.35s}
  .sv-card:nth-child(8){animation-delay:.4s}
  .sv-card:nth-child(9){animation-delay:.45s}

  .sv-card-num {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .12em;
    color: #ccc;
    margin-bottom: 1.2rem;
    transition: color 0.3s;
  }
  .sv-card:hover .sv-card-num { color: #3B6D11; }

  .sv-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: linear-gradient(135deg, #EAF3DE, #F5FAF0);
    border: 1.5px solid #C8E49A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin-bottom: 1.2rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .sv-card:hover .sv-icon-wrap {
    background: linear-gradient(135deg, #3B6D11, #5A9E1A);
    border-color: #3B6D11;
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 20px rgba(59, 109, 17, 0.3);
  }

  .sv-card-title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    margin: 0 0 8px;
    line-height: 1.3;
    transition: color 0.3s;
  }
  .sv-card:hover .sv-card-title { color: #3B6D11; }

  .sv-card-desc {
    font-size: 13px;
    color: #999;
    line-height: 1.6;
    margin: 0;
  }

  .sv-card-arrow {
    margin-top: 1.5rem;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px solid #E8E8E4;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    font-size: 13px;
    transition: all 0.3s;
  }
  .sv-card:hover .sv-card-arrow {
    border-color: #3B6D11;
    color: #3B6D11;
    transform: translate(4px, -4px);
    box-shadow: -2px 2px 8px rgba(59, 109, 17, 0.2);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Enhanced Gallery Section */
  .sv-gallery-section {
    margin-top: 4rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 32px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    animation: fadeInUp 0.8s ease-out 0.4s both;
  }

  .sv-gallery-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .sv-gallery-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #3B6D11;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sv-gallery-label::before {
    content: '';
    width: 24px;
    height: 2px;
    background: #3B6D11;
    border-radius: 2px;
    animation: expandWidth 0.8s ease-out;
  }

  /* Enhanced Pagination dots */
  .sv-dots {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .sv-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .sv-dot.active {
    background: #3B6D11;
    width: 24px;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(59, 109, 17, 0.5);
  }
  .sv-dot:hover:not(.active) {
    transform: scale(1.2);
    background: #A8D55A;
  }

  /* Enhanced Gallery Cards */
  .sv-gallery-viewport {
    overflow: hidden;
    border-radius: 20px;
  }

  .sv-gallery-track {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .sv-gcard {
    flex: 0 0 calc(33.333% - 8px);
    margin-right: 12px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    height: 240px;
    background: linear-gradient(135deg, #f0f0ea, #e8e8e0);
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .sv-gcard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .sv-gcard-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 109, 17, 0.3), rgba(168, 213, 90, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sv-gcard-overlay::after {
    content: '🔍';
    font-size: 32px;
    color: white;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  .sv-gcard:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  .sv-gcard:hover img { transform: scale(1.1); }
  .sv-gcard:hover .sv-gcard-overlay { opacity: 1; }
  .sv-gcard:hover .sv-gcard-overlay::after { transform: scale(1); }

  /* Enhanced Navigation Buttons */
  .sv-gallery-nav {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    justify-content: flex-end;
  }

  .sv-nav-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #333;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .sv-nav-btn:hover:not(:disabled) {
    background: #3B6D11;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 109, 17, 0.3);
  }
  .sv-nav-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* Enhanced Lightbox */
  .sv-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: lbIn 0.3s ease;
  }
  @keyframes lbIn {
    from { opacity: 0; backdrop-filter: blur(0); }
    to   { opacity: 1; backdrop-filter: blur(20px); }
  }

  .sv-lightbox img {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 16px;
    object-fit: contain;
    animation: lbScale 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  @keyframes lbScale {
    from { transform: scale(0.9); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }

  .sv-lb-close {
    position: absolute;
    top: 24px;
    right: 28px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 22px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }
  .sv-lb-close:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  .sv-lb-prev, .sv-lb-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 20px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }
  .sv-lb-prev:hover, .sv-lb-next:hover {
    background: rgba(59, 109, 17, 0.8);
    transform: translateY(-50%) scale(1.05);
  }
  .sv-lb-prev { left: 24px; }
  .sv-lb-next { right: 24px; }

  /* Responsive Design */
  @media (max-width: 900px) {
    .sv-grid { 
      grid-template-columns: repeat(2, 1fr); 
      gap: 20px;
    }
    .sv-gcard { 
      flex: 0 0 calc(50% - 6px); 
      height: 200px;
    }
    .sv-head {
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem;
    }
    .sv-subtitle {
      text-align: left;
    }
  }
  
  @media (max-width: 600px) {
    .sv-root {
      padding: 4rem 0 3rem;
    }
    .sv-inner {
      padding: 0 1rem;
    }
    .sv-grid { 
      grid-template-columns: repeat(2, 1fr); 
      gap: 16px;
    }
    .sv-card {
      padding: 1.5rem 1.25rem;
    }
    .sv-card-title {
      font-size: 14px;
    }
    .sv-card-desc {
      font-size: 12px;
    }
    .sv-icon-wrap {
      width: 42px;
      height: 42px;
      font-size: 20px;
      margin-bottom: 1rem;
    }
    .sv-gcard { 
      flex: 0 0 calc(50% - 6px); 
      height: 160px;
    }
    .sv-gallery-section {
      padding: 1.5rem;
    }
    .sv-gallery-head {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .sv-lb-prev, .sv-lb-next {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .sv-grid { 
      grid-template-columns: repeat(2, 1fr); 
      gap: 12px;
    }
    .sv-card {
      padding: 1.2rem 1rem;
    }
    .sv-card-title {
      font-size: 13px;
    }
    .sv-card-desc {
      font-size: 11px;
      line-height: 1.5;
    }
    .sv-icon-wrap {
      width: 38px;
      height: 38px;
      font-size: 18px;
    }
    .sv-gcard {
      height: 140px;
    }
    .sv-head {
      padding: 1rem;
    }
    .sv-gallery-section {
      padding: 1rem;
    }
  }
`;

const defaultServices = [
  { icon: "🔥", title: "Gas Cylinder Delivery",   description: "Fast LPG delivery to your home"             },
  { icon: "🍳", title: "Gas Stove Sales",          description: "High quality gas stoves available"          },
  { icon: "🔧", title: "Installation",             description: "Safe and professional setup"                },
  { icon: "📝", title: "New Domestic Connection",  description: "Get a new HP Gas LPG connection easily"     },
  { icon: "🔄", title: "Cylinder Refill Booking",  description: "Book refill via phone or WhatsApp"          },
  { icon: "🏢", title: "Commercial LPG Supply",    description: "Bulk LPG for hotels & businesses"           },
  { icon: "⚡", title: "Double Bottle Connection", description: "Uninterrupted gas supply always"            },
  { icon: "🚛", title: "Transfer of Connection",   description: "Seamless LPG transfer service"              },
  { icon: "🛡️", title: "Safety Inspection",       description: "Free safety checks for your home"           },
];

const images = [
  "/img3.jpeg",
  "/img4.jpeg",
  "/img5.jpeg",
  "/img6.jpeg",
  "/img7.jpeg",
];

const VISIBLE = 3;

export default function Services({ services }) {
  const list = services || defaultServices;

  const [current, setCurrent]   = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const maxIndex = images.length - VISIBLE;

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  // Generate floating particles
  useEffect(() => {
    const particlesContainer = document.querySelector('.sv-particles');
    if (!particlesContainer) return;

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'sv-particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.opacity = Math.random() * 0.3;
      particlesContainer.appendChild(particle);
    }

    return () => {
      while (particlesContainer.firstChild) {
        particlesContainer.removeChild(particlesContainer.firstChild);
      }
    };
  }, []);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") setLightbox(i => Math.min(images.length - 1, i + 1));
      if (e.key === "ArrowLeft")  setLightbox(i => Math.max(0, i - 1));
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const offset = current * (100 / VISIBLE + (12 / (1180 / VISIBLE)));

  return (
    <section className="sv-root" id="services">
      <style>{css}</style>

      {/* Animated Background Elements */}
      <div className="sv-orb sv-orb-1"></div>
      <div className="sv-orb sv-orb-2"></div>
      <div className="sv-orb sv-orb-3"></div>
      <div className="sv-particles"></div>

      <div className="sv-inner">
        {/* HEADER */}
        <div className="sv-head">
          <div>
            <p className="sv-label">What We Offer</p>
            <h2 className="sv-title">Our <span>Services</span></h2>
          </div>
          <p className="sv-subtitle">Everything you need for safe, reliable LPG service in Vatakara.</p>
        </div>

        {/* SERVICE CARDS */}
        <div className="sv-grid">
          {list.map((s, i) => (
            <div className="sv-card" key={i}>
              <div className="sv-card-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="sv-icon-wrap">{s.icon}</div>
              <h3 className="sv-card-title">{s.title}</h3>
              <p className="sv-card-desc">{s.description}</p>
              <div className="sv-card-arrow">↗</div>
            </div>
          ))}
        </div>

        {/* GALLERY */}
        <div className="sv-gallery-section">
          <div className="sv-gallery-head">
            <span className="sv-gallery-label">Gallery</span>
            <div className="sv-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`sv-dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(Math.min(i, maxIndex))}
                />
              ))}
            </div>
          </div>

          {/* SLIDING TRACK */}
          <div className="sv-gallery-viewport">
            <div
              className="sv-gallery-track"
              style={{
                transform: `translateX(calc(-${current * (100 / VISIBLE)}% - ${current * 12}px))`
              }}
            >
              {images.map((src, i) => (
                <div
                  className="sv-gcard"
                  key={i}
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={src}
                    alt={`DeepthiGas ${i + 1}`}
                    onError={e => { e.target.style.opacity = ".25"; }}
                  />
                  <div className="sv-gcard-overlay" />
                </div>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <div className="sv-gallery-nav">
            <button className="sv-nav-btn" onClick={prev} disabled={current === 0}>←</button>
            <button className="sv-nav-btn" onClick={next} disabled={current >= maxIndex}>→</button>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="sv-lightbox" onClick={() => setLightbox(null)}>
          <img
            src={images[lightbox]}
            alt=""
            onClick={e => e.stopPropagation()}
          />
          <button className="sv-lb-close" onClick={() => setLightbox(null)}>✕</button>
          {lightbox > 0 && (
            <button className="sv-lb-prev" onClick={e => { e.stopPropagation(); setLightbox(l => l - 1); }}>←</button>
          )}
          {lightbox < images.length - 1 && (
            <button className="sv-lb-next" onClick={e => { e.stopPropagation(); setLightbox(l => l + 1); }}>→</button>
          )}
        </div>
      )}
    </section>
  );
}