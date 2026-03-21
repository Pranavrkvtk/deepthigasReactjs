import React, { useState, useRef, useEffect } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .sv-root {
    background: #FAFAF8;
    padding: 6rem 0 5rem;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .sv-inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* ── HEADER ── */
  .sv-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 3.5rem;
    gap: 2rem;
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
  }

  .sv-title {
    font-size: clamp(2.2rem, 4vw, 3.4rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -.035em;
    color: #111;
    margin: 0;
  }
  .sv-title span { color: #3B6D11; }

  .sv-subtitle {
    font-size: 15px;
    color: #888;
    max-width: 320px;
    line-height: 1.65;
    text-align: right;
    font-weight: 400;
  }

  /* ── SERVICE GRID ── */
  .sv-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #E8E8E4;
    border: 1px solid #E8E8E4;
    border-radius: 24px;
    overflow: hidden;
    margin-bottom: 4rem;
  }

  .sv-card {
    background: #fff;
    padding: 2rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0;
    transition: background .2s;
    cursor: default;
    position: relative;
    overflow: hidden;
    animation: fadeIn .45s ease both;
  }

  .sv-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3B6D11, #A8D55A);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s ease;
  }

  .sv-card:hover { background: #F5FAF0; }
  .sv-card:hover::before { transform: scaleX(1); }

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
  }

  .sv-icon-wrap {
    width: 48px; height: 48px;
    border-radius: 14px;
    background: #EAF3DE;
    border: 1.5px solid #C8E49A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin-bottom: 1.2rem;
    transition: all .2s;
  }
  .sv-card:hover .sv-icon-wrap {
    background: #3B6D11;
    border-color: #3B6D11;
    transform: scale(1.05);
  }

  .sv-card-title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    margin: 0 0 8px;
    line-height: 1.3;
  }

  .sv-card-desc {
    font-size: 13px;
    color: #999;
    line-height: 1.6;
    margin: 0;
  }

  .sv-card-arrow {
    margin-top: 1.5rem;
    width: 28px; height: 28px;
    border-radius: 50%;
    border: 1.5px solid #E8E8E4;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    font-size: 13px;
    transition: all .2s;
  }
  .sv-card:hover .sv-card-arrow {
    border-color: #3B6D11;
    color: #3B6D11;
    transform: translate(2px, -2px);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── GALLERY SECTION ── */
  .sv-gallery-section {
    margin-top: 4rem;
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
    width: 24px; height: 2px;
    background: #3B6D11;
    border-radius: 2px;
  }

  /* Pagination dots */
  .sv-dots {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .sv-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #DDD;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all .2s;
  }
  .sv-dot.active {
    background: #3B6D11;
    width: 22px;
    border-radius: 4px;
  }

  /* ── GALLERY CARD STRIP ── */
  .sv-gallery-viewport {
    overflow: hidden;
    border-radius: 20px;
  }

  .sv-gallery-track {
    display: flex;
    transition: transform .5s cubic-bezier(.4,0,.2,1);
  }

  .sv-gcard {
    flex: 0 0 calc(33.333% - 8px);
    margin-right: 12px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    height: 240px;
    background: #F0EEE9;
    flex-shrink: 0;
    cursor: pointer;
  }

  .sv-gcard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }


  .sv-gcard-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.15);
    opacity: 0;
    border-radius: 16px;
  }
  .sv-gcard:hover .sv-gcard-overlay { opacity: 1; }

  /* ── NAV ARROWS ── */
  .sv-gallery-nav {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    justify-content: flex-end;
  }

  .sv-nav-btn {
    width: 40px; height: 40px;
    border-radius: 50%;
    border: 1.5px solid #E0E0DA;
    background: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #333;
    transition: all .2s;
  }
  .sv-nav-btn:hover {
    background: #3B6D11;
    border-color: #3B6D11;
    color: #fff;
  }
  .sv-nav-btn:disabled {
    opacity: 0.35;
    cursor: default;
  }
  .sv-nav-btn:disabled:hover {
    background: #fff;
    border-color: #E0E0DA;
    color: #333;
  }

  /* ── LIGHTBOX ── */
  .sv-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: lbIn .2s ease;
  }
  @keyframes lbIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .sv-lightbox img {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 12px;
    object-fit: contain;
    animation: lbScale .25s ease;
  }
  @keyframes lbScale {
    from { transform: scale(0.92); }
    to   { transform: scale(1); }
  }

  .sv-lb-close {
    position: absolute;
    top: 24px; right: 28px;
    background: rgba(255,255,255,0.1);
    border: none;
    color: #fff;
    font-size: 22px;
    width: 40px; height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .2s;
  }
  .sv-lb-close:hover { background: rgba(255,255,255,0.2); }

  .sv-lb-prev, .sv-lb-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.1);
    border: none;
    color: #fff;
    font-size: 20px;
    width: 48px; height: 48px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .2s;
  }
  .sv-lb-prev:hover, .sv-lb-next:hover { background: rgba(255,255,255,0.2); }
  .sv-lb-prev { left: 24px; }
  .sv-lb-next { right: 24px; }

  /* ── RESPONSIVE UPDATED: 2 CARDS IN MOBILE GRID ── */
  @media (max-width: 900px) {
    .sv-grid { 
      grid-template-columns: repeat(2, 1fr); 
    }
    .sv-gcard { 
      flex: 0 0 calc(50% - 6px); 
    }
  }
  
  @media (max-width: 600px) {
    .sv-head { 
      flex-direction: column; 
      align-items: flex-start; 
    }
    .sv-subtitle { 
      text-align: left; 
    }
    /* UPDATED: 2 columns on mobile (was 1 before) */
    .sv-grid { 
      grid-template-columns: repeat(2, 1fr); 
      gap: 1px;
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
    .sv-card-num {
      font-size: 10px;
      margin-bottom: 0.9rem;
    }
    .sv-gcard { 
      flex: 0 0 calc(50% - 6px); 
      height: 180px;
    }
    .sv-gallery-head {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  /* Extra small devices - maintain 2 columns */
  @media (max-width: 480px) {
    .sv-grid { 
      grid-template-columns: repeat(2, 1fr); 
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
      height: 150px;
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

const VISIBLE = 3; // cards shown at once

export default function Services({ services }) {
  const list = services || defaultServices;

  const [current, setCurrent]   = useState(0);
  const [lightbox, setLightbox] = useState(null); // index or null

  const maxIndex = images.length - VISIBLE;

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

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

      <div className="sv-inner">

        {/* HEADER */}
        <div className="sv-head">
          <div>
            <p className="sv-label">What We Offer</p>
            <h2 className="sv-title">Our <span>Services</span></h2>
          </div>
          <p className="sv-subtitle">Everything you need for safe, reliable LPG service in Vatakara.</p>
        </div>

        {/* SERVICE CARDS - Now 2 columns on mobile */}
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