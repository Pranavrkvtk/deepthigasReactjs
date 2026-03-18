const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .hero-wrap {
    background: #f8f9fa;
    min-height: 88vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 5rem 2rem;
    border-bottom: 1px solid #eaeef2;
  }

  /* Subtle pattern overlay */
  .hero-wrap .pattern {
    position: absolute;
    inset: 0;
    opacity: 0.02;
    background-image: 
      radial-gradient(circle at 25px 25px, #2c3e50 2px, transparent 2px);
    background-size: 50px 50px;
    pointer-events: none;
  }

  .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      text-align: center;
    }
    .hero-wrap { min-height: auto; padding: 4rem 1.5rem; }
    .hero-badges { justify-content: center; }
    .hero-actions { justify-content: center; }
    .hero-right { display: none; }
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #e8f0fe;
    border: 1px solid #d0e0ff;
    color: #2563eb;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 8px 18px;
    border-radius: 40px;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 8px rgba(37,99,235,0.08);
  }

  .hero-tag-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2563eb;
  }

  .hero-title {
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.2rem, 4.5vw, 3.8rem);
    font-weight: 700;
    color: #1e293b;
    line-height: 1.2;
    margin: 0 0 1.25rem;
  }

  .hero-title em {
    color: #2563eb;
    font-style: normal;
    font-weight: 700;
    position: relative;
    display: inline-block;
  }

  .hero-title em::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(37,99,235,0.12);
    border-radius: 4px;
    z-index: -1;
  }

  .hero-desc {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #475569;
    line-height: 1.7;
    margin: 0 0 2rem;
    max-width: 500px;
    font-weight: 400;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .hero-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #2563eb;
    color: #fff;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 12px;
    transition: all 0.2s ease;
    letter-spacing: 0.02em;
    box-shadow: 0 4px 12px rgba(37,99,235,0.2);
  }

  .hero-btn-primary:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37,99,235,0.25);
  }

  .hero-btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #1e293b;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    padding: 14px 28px;
    border-radius: 12px;
    border: 1.5px solid #e2e8f0;
    transition: all 0.2s ease;
    letter-spacing: 0.02em;
  }

  .hero-btn-outline:hover {
    border-color: #94a3b8;
    background: #f8fafc;
    transform: translateY(-2px);
  }

  .hero-btn-primary svg,
  .hero-btn-outline svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
  }

  .hero-badges {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .hero-badge {
    display: flex;
    flex-direction: column;
  }

  .hero-badge-num {
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #1e293b;
    line-height: 1;
  }

  .hero-badge-label {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #64748b;
    margin-top: 5px;
    letter-spacing: 0.02em;
    font-weight: 500;
  }

  .hero-badge-divider {
    width: 1px;
    background: #e2e8f0;
    align-self: stretch;
  }

  /* RIGHT SIDE CARDS */
  .hero-right {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .hero-card {
    background: #ffffff;
    border: 1px solid #eef2f6;
    border-radius: 20px;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  }

  .hero-card:hover {
    border-color: #d0e0ff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.04);
    transform: translateY(-2px);
  }

  .hero-card-icon {
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: #f0f7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .hero-card-icon svg {
    width: 22px;
    height: 22px;
    stroke: #2563eb;
    fill: none;
    stroke-width: 1.8;
  }

  .hero-card-title {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 4px;
  }

  .hero-card-sub {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #64748b;
    margin: 0;
    font-weight: 400;
  }

  .hero-card-badge {
    margin-left: auto;
    background: #f0f7ff;
    color: #2563eb;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 30px;
    flex-shrink: 0;
    border: 1px solid #d0e0ff;
  }

  .hero-card:hover .hero-card-badge {
    background: #2563eb;
    color: #ffffff;
    border-color: #2563eb;
  }

  /* Simple staggered animation */
  .hero-card {
    animation: fadeInUp 0.5s ease forwards;
    opacity: 0;
  }

  .hero-card:nth-child(1) { animation-delay: 0.1s; }
  .hero-card:nth-child(2) { animation-delay: 0.2s; }
  .hero-card:nth-child(3) { animation-delay: 0.3s; }
  .hero-card:nth-child(4) { animation-delay: 0.4s; }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function Hero() {
  return (
    <>
      <style>{styles}</style>

      <section className="hero-wrap" id="hero">
        <div className="pattern"></div>
        
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span>Trusted LPG Service · Vatakara</span>
            </div>

            <h1 className="hero-title">
              Fast & Safe <em>Gas Delivery</em><br />at Your Doorstep
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

            <div className="hero-badges">
              <div className="hero-badge">
                <span className="hero-badge-num">40+</span>
                <span className="hero-badge-label">Years serving</span>
              </div>
              <div className="hero-badge-divider" />
              <div className="hero-badge">
                <span className="hero-badge-num">10k+</span>
                <span className="hero-badge-label">Happy customers</span>
              </div>
              <div className="hero-badge-divider" />
              <div className="hero-badge">
                <span className="hero-badge-num">Same Day</span>
                <span className="hero-badge-label">Delivery</span>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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