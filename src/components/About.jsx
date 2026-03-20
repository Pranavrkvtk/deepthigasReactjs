import React, { useEffect, useState } from "react";

export default function About() {

  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    let y = 0;
    let c = 0;
    const interval = setInterval(() => {
      if (y < 40) y++;
      if (c < 10000) c += 250;
      setYears(y);
      setCustomers(c);
      if (y === 40 && c >= 10000) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

  .ab-wrap {
    min-height: 100vh;
    padding: 5rem 2rem;
    font-family: 'DM Sans', sans-serif;
    background: radial-gradient(circle at top, #0f172a, #020617);
    color: white;
    position: relative;
    overflow: hidden;
  }

  .ab-wrap::before {
    content: "";
    position: absolute;
    width: 500px; height: 500px;
    background: #7c3aed;
    filter: blur(120px);
    top: -150px; left: -150px;
    opacity: 0.25;
  }

  .ab-wrap::after {
    content: "";
    position: absolute;
    width: 500px; height: 500px;
    background: #2563eb;
    filter: blur(120px);
    bottom: -150px; right: -150px;
    opacity: 0.25;
  }

  .ab-header {
    text-align: center;
    margin-bottom: 3rem;
    animation: fadeUp 0.8s ease;
    position: relative;
    z-index: 1;
  }

  .ab-title {
    font-size: 38px;
    font-weight: 800;
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ab-sub { color: #94a3b8; }

  .ab-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1100px;
    margin: auto;
    position: relative;
    z-index: 1;
  }

  /* ── KEY FIX: fully transparent, no grey tint ── */
  .glass {
    background: rgba(15, 23, 42, 0.4);
    border-radius: 20px;
    padding: 30px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: 0.3s;
    animation: fadeUp 1s ease;
  }

  .glass:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.25);
    border-color: rgba(124, 58, 237, 0.3);
  }

  .ab-body p {
    color: #cbd5e1;
    line-height: 1.8;
    margin-bottom: 8px;
  }

  .ab-badge {
    margin-top: 16px;
    display: inline-block;
    padding: 8px 16px;
    border-radius: 20px;
    background: linear-gradient(135deg, #7c3aed, #2563eb);
    font-size: 12px;
    animation: pulse 2s infinite;
  }

  /* STATS */
  .ab-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .ab-stat:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .ab-stat-num {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
  }

  .ab-stat-label {
    color: #64748b;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* CARDS */
  .ab-cards {
    max-width: 1100px;
    margin: 2rem auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    position: relative;
    z-index: 1;
  }

  .ab-card {
    padding: 28px 24px;
    border-radius: 16px;
    background: rgba(15, 23, 42, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: 0.3s;
    animation: fadeUp 1.2s ease;
  }

  .ab-card:hover {
    transform: translateY(-8px);
    background: rgba(124, 58, 237, 0.12);
    border-color: rgba(124, 58, 237, 0.25);
  }

  .ab-card h3 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #e2e8f0;
  }

  .ab-card p { color: #64748b; line-height: 1.6; font-size: 14px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%,100% { transform: scale(1); }
    50%     { transform: scale(1.05); }
  }

  @media (max-width: 768px) {
    .ab-grid  { grid-template-columns: 1fr; }
    .ab-cards { grid-template-columns: 1fr; }
  }
  `;

  return (
    <section className="ab-wrap" id="about">
      <style>{styles}</style>

      <div className="ab-header">
        <h2 className="ab-title">About Deepthi Gas</h2>
        <p className="ab-sub">Trusted LPG service for 40+ years</p>
      </div>

      <div className="ab-grid">
        <div className="glass ab-body">
          <p>Trusted LPG distributor for homes & businesses.</p>
          <p>Focused on safety, transparency & fast delivery.</p>
          <p>Providing stoves & safety accessories.</p>
          <span className="ab-badge">Since 1984 • HP Gas Dealer</span>
        </div>

        <div className="glass">
          <div className="ab-stat">
            <span className="ab-stat-num">{years}+</span>
            <span className="ab-stat-label">Years</span>
          </div>
          <div className="ab-stat">
            <span className="ab-stat-num">{customers.toLocaleString()}+</span>
            <span className="ab-stat-label">Customers</span>
          </div>
          <div className="ab-stat">
            <span className="ab-stat-num">Same Day</span>
            <span className="ab-stat-label">Delivery</span>
          </div>
          <div className="ab-stat">
            <span className="ab-stat-num">100%</span>
            <span className="ab-stat-label">Safety</span>
          </div>
        </div>
      </div>

      <div className="ab-cards">
        <div className="ab-card">
          <h3>🛡️ Safety First</h3>
          <p>Certified cylinders & trained delivery staff.</p>
        </div>
        <div className="ab-card">
          <h3>💸 Transparent Pricing</h3>
          <p>No hidden charges. Clear billing always.</p>
        </div>
        <div className="ab-card">
          <h3>📞 24/7 Support</h3>
          <p>Always available for our customers.</p>
        </div>
      </div>
    </section>
  );
}