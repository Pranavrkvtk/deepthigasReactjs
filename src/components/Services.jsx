const css = `
  @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@500;600;700&family=Satoshi:wght@400;500;700&display=swap');
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
    color: #E35F1A;
    margin-bottom: 1rem;
  }
  .sv-label::before {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background: #E35F1A;
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
  .sv-title span {
    color: #E35F1A;
    position: relative;
  }

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
  }

  .sv-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #E35F1A, #FF9A5C);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s ease;
  }

  .sv-card:hover { background: #FFF8F5; }
  .sv-card:hover::before { transform: scaleX(1); }

  .sv-card-num {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .12em;
    color: #ccc;
    margin-bottom: 1.2rem;
    font-variant-numeric: tabular-nums;
  }

  .sv-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: #FFF1EB;
    border: 1.5px solid #FFD9C5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin-bottom: 1.2rem;
    transition: all .2s;
  }
  .sv-card:hover .sv-icon-wrap {
    background: #E35F1A;
    border-color: #E35F1A;
    transform: scale(1.05);
  }

  .sv-card-title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    margin: 0 0 8px;
    letter-spacing: -.01em;
    line-height: 1.3;
  }

  .sv-card-desc {
    font-size: 13px;
    color: #999;
    line-height: 1.6;
    margin: 0;
    font-weight: 400;
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
    transition: all .2s;
  }
  .sv-card:hover .sv-card-arrow {
    border-color: #E35F1A;
    color: #E35F1A;
    transform: translate(2px, -2px);
  }

  /* Stagger animation */
  .sv-card {
    animation: fadeIn .45s ease both;
  }
  .sv-card:nth-child(1){animation-delay:.05s}
  .sv-card:nth-child(2){animation-delay:.1s}
  .sv-card:nth-child(3){animation-delay:.15s}
  .sv-card:nth-child(4){animation-delay:.2s}
  .sv-card:nth-child(5){animation-delay:.25s}
  .sv-card:nth-child(6){animation-delay:.3s}
  .sv-card:nth-child(7){animation-delay:.35s}
  .sv-card:nth-child(8){animation-delay:.4s}
  .sv-card:nth-child(9){animation-delay:.45s}

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── GALLERY ── */
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
    color: #aaa;
  }

  .sv-gallery {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 220px 220px;
    gap: 10px;
    border-radius: 20px;
    overflow: hidden;
  }

  .sv-gcard {
    position: relative;
    overflow: hidden;
    background: #F0EEE9;
    border-radius: 12px;
  }

  .sv-gcard:first-child {
    grid-row: 1 / 3;
    border-radius: 16px;
  }

  .sv-gcard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .5s ease;
    display: block;
  }

  .sv-gcard:hover img { transform: scale(1.04); }

  .sv-gcard-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%);
    opacity: 0;
    transition: opacity .3s;
  }
  .sv-gcard:hover .sv-gcard-overlay { opacity: 1; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .sv-grid { grid-template-columns: repeat(2, 1fr); }
    .sv-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
    .sv-gcard:first-child { grid-row: auto; }
  }

  @media (max-width: 600px) {
    .sv-head { flex-direction: column; align-items: flex-start; }
    .sv-subtitle { text-align: left; }
    .sv-grid { grid-template-columns: 1fr; }
    .sv-gallery { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
    .sv-gcard:first-child { grid-column: 1 / -1; grid-row: auto; }
  }
`;

export default function Services({ services }) {
  const defaultServices = [
    { icon: "🔥", title: "Gas Cylinder Delivery",      description: "Fast LPG delivery to your home"              },
    { icon: "🍳", title: "Gas Stove Sales",             description: "High quality gas stoves available"           },
    { icon: "🔧", title: "Installation",                description: "Safe and professional setup"                  },
    { icon: "📝", title: "New Domestic Connection",     description: "Get a new HP Gas LPG connection easily"      },
    { icon: "🔄", title: "Cylinder Refill Booking",     description: "Book refill via phone or WhatsApp"           },
    { icon: "🏢", title: "Commercial LPG Supply",       description: "Bulk LPG for hotels & businesses"            },
    { icon: "⚡", title: "Double Bottle Connection",    description: "Uninterrupted gas supply always"             },
    { icon: "🚛", title: "Transfer of Connection",      description: "Seamless LPG transfer service"               },
    { icon: "🛡️", title: "Safety Inspection",          description: "Free safety checks for your home"            },
  ];

  const list = services || defaultServices;

  return (
    <section className="sv-root" id="services">
      <style>{css}</style>

      <div className="sv-inner">

        {/* HEADER */}
        <div className="sv-head">
          <div>
            <div className="sv-label">What we offer</div>
            <h2 className="sv-title">Our <span>Services</span></h2>
          </div>
          <p className="sv-subtitle">
            Everything you need for hassle-free cooking gas management, delivered with care.
          </p>
        </div>

        {/* CARDS */}
        <div className="sv-grid">
          {list.map((s, i) => (
            <div className="sv-card" key={i}>
              <div className="sv-card-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="sv-icon-wrap">{s.icon}</div>
              <h3 className="sv-card-title">{s.title}</h3>
              <p className="sv-card-desc">{s.description}</p>
              <div className="sv-card-arrow">↗</div>
            </div>
          ))}
        </div>

        {/* GALLERY */}
        <div className="sv-gallery-head">
          <span className="sv-gallery-label">Gallery</span>
        </div>
        <div className="sv-gallery">
          {["/img3.jpeg", "/img4.jpeg", "/img5.jpeg", "/img6.jpeg", "/img7.jpeg"].map((src, i) => (
            <div className="sv-gcard" key={i}>
              <img src={src} alt={`DeepthiGas ${i + 1}`} onError={e => { e.target.style.opacity = '.3' }} />
              <div className="sv-gcard-overlay" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
