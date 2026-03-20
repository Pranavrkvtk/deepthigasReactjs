import React, { useState, useEffect } from 'react'

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --bg: #F4F7EE;
    --surface: #EBF0DF;
    --card: #FFFFFF;
    --border: rgba(100,130,50,0.13);
    --border-hover: rgba(100,160,40,0.35);
    --green: #5A9E1A;
    --green-dim: rgba(90,158,26,0.08);
    --green-mid: rgba(90,158,26,0.15);
    --ink: #1E2B0F;
    --muted: #7A9160;
    --tag-bg: rgba(90,158,26,0.1);
  }

  .sh-root {
    min-height: 100vh;
    background: var(--bg);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    padding: 0;
  }

  /* ── HEADER STRIP ── */
  .sh-header {
    padding: 64px 48px 48px;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 32px;
    border-bottom: 1px solid var(--border);
  }

  .sh-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--green);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .sh-eyebrow::before {
    content: '';
    width: 28px; height: 1px;
    background: var(--green);
  }

  .sh-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: 800;
    color: var(--ink);
    line-height: 0.95;
    margin: 0;
    letter-spacing: -2px;
  }
  .sh-title em {
    font-style: normal;
    color: var(--green);
    display: block;
  }

  .sh-count-pill {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: var(--green);
    background: var(--green-dim);
    border: 1px solid var(--border);
    padding: 6px 16px;
    border-radius: 100px;
    white-space: nowrap;
    align-self: flex-end;
    margin-bottom: 6px;
  }

  /* ── TOOLBAR ── */
  .sh-toolbar {
    max-width: 1400px;
    margin: 0 auto;
    padding: 28px 48px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--border);
  }

  .sh-search-wrap {
    flex: 1;
    min-width: 200px;
    position: relative;
  }

  .sh-search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--muted);
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    pointer-events: none;
  }

  .sh-search {
    width: 100%;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 40px 12px 44px;
    color: var(--ink);
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    transition: border-color .2s;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  }
  .sh-search::placeholder { color: var(--muted); }
  .sh-search:focus { border-color: var(--border-hover); }

  .sh-clear-btn {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--muted);
    cursor: pointer;
    font-size: 14px;
    padding: 4px;
    line-height: 1;
  }
  .sh-clear-btn:hover { color: var(--green); }

  /* ── CATEGORY TABS ── */
  .sh-cats {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .sh-cat {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 9px 18px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all .2s;
  }
  .sh-cat:hover {
    border-color: var(--border-hover);
    color: var(--green);
    background: var(--green-dim);
  }
  .sh-cat.active {
    background: var(--green);
    border-color: var(--green);
    color: #fff;
    font-weight: 500;
  }

  /* ── GRID ── */
  .sh-grid-wrap {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 48px 80px;
  }

  .sh-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
  }

  /* ── PRODUCT CARD ── */
  .sh-card {
    background: var(--card);
    padding: 28px;
    position: relative;
    cursor: pointer;
    transition: background .25s, box-shadow .25s;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }
  .sh-card:hover { background: #F0F7E6; box-shadow: 0 6px 20px rgba(90,158,26,0.1); }

  .sh-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .sh-badge {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--green);
    background: var(--green-dim);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 4px;
  }
    /* TOOLBAR WRAPPER */
.sh-toolbar-modern {
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* SEARCH BOX */
.sh-search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 12px 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
  border: 1px solid rgba(255,255,255,0.4);
  transition: 0.3s;
}

.sh-search-box:hover {
  box-shadow: 0 12px 30px rgba(37,99,235,0.2);
}

.sh-search-box input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  background: transparent;
}

.sh-search-icon {
  width: 18px;
  height: 18px;
  stroke: #64748b;
  fill: none;
  stroke-width: 2;
}

/* CLEAR BUTTON */
.sh-search-box button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #64748b;
}

/* CATEGORY PILLS */
.sh-categories-modern {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* PILLS */
.sh-pill {
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(6px);
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #334155;
}

/* HOVER */
.sh-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37,99,235,0.15);
}

/* ACTIVE */
.sh-pill.active {
  background: linear-gradient(135deg,#2563eb,#7c3aed);
  color: white;
  box-shadow: 0 10px 25px rgba(37,99,235,0.3);
}

  .sh-rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--muted);
  }
  .sh-rating .dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--green);
    opacity: 0.6;
  }

  .sh-img-box {
    width: 100%;
    aspect-ratio: 1/1;
    background: var(--surface);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 22px;
    position: relative;
  }

  .sh-img-box img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    transition: transform .4s cubic-bezier(.4,0,.2,1);
  }
  .sh-card:hover .sh-img-box img { transform: scale(1.08); }

  .sh-img-overlay {
    position: absolute;
    inset: 0;
    background: rgba(168,213,90,0.06);
    opacity: 0;
    transition: opacity .25s;
    border-radius: 12px;
  }
  .sh-card:hover .sh-img-overlay { opacity: 1; }

  .sh-name {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.35;
    margin: 0 0 6px;
  }

  .sh-desc {
    font-size: 12.5px;
    color: var(--muted);
    margin: 0 0 18px;
    line-height: 1.5;
  }

  .sh-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    margin-top: auto;
  }

  .sh-price {
    font-family: 'DM Mono', monospace;
    font-size: 16px;
    font-weight: 500;
    color: var(--green);
  }

  .sh-add-btn {
    background: var(--green);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 9px 18px;
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .5px;
    cursor: pointer;
    transition: opacity .2s, transform .15s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .sh-add-btn:hover { opacity: .85; }
  .sh-add-btn:active { transform: scale(0.96); }

  .sh-stars {
    display: flex;
    gap: 2px;
    margin-bottom: 14px;
  }
  .sh-star { font-size: 11px; }
  .sh-star.on  { color: #5A9E1A; }
  .sh-star.off { color: #C8D9B0; }

  .sh-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 80px 20px;
    background: var(--card);
  }
  .sh-empty-icon {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
    display: block;
  }
  .sh-empty h3 {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: var(--ink);
    margin: 0 0 10px;
  }
  .sh-empty p { color: var(--muted); font-size: 14px; margin: 0 0 24px; }
  .sh-empty-btn {
    background: transparent;
    border: 1px solid var(--border-hover);
    color: var(--green);
    padding: 10px 28px;
    border-radius: 8px;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background .2s;
  }
  .sh-empty-btn:hover { background: var(--green-dim); }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .sh-card { animation: cardIn .35s ease both; }

  @media (max-width: 720px) {
    .sh-header { padding: 40px 20px 32px; grid-template-columns: 1fr; }
    .sh-toolbar { padding: 20px; }
    .sh-grid-wrap { padding: 24px 20px 60px; }
    .sh-title { font-size: 40px; }
  }
`

const products = [
  { img: "p2.jpeg",  name: "Butterfly Galaxy 3B Manual Glasstop Gas Stove", desc: "3 Burner Glass Top Gas Stove",  price: "₹4,500",  category: "stoves",      rating: 4.5, badge: "Bestseller" },
  { img: "p11.jpeg", name: "Butterfly Galaxy 2B Manual Glasstop Gas Stove", desc: "2 Burner Glass Top Gas Stove",  price: "₹3,500",  category: "stoves",      rating: 4.3, badge: "Popular" },
  { img: "p7.jpeg",  name: "Butterfly 2B New Xtra Stainless Steel Stove",   desc: "2 Burner Steel Gas Stove",     price: "₹2,750",  category: "stoves",      rating: 4.4, badge: "Value" },
  { img: "p10.jpeg", name: "HP Suraksha LPG Hose",                          desc: "1.5 Meter Safety Hose",        price: "₹190",    category: "accessories", rating: 4.8, badge: "Safety" },
  { img: "p9.jpeg",  name: "Suraksha Flame Lighter",                        desc: "With 100ML Refill Bottle",     price: "₹250",    category: "accessories", rating: 4.2, badge: "New" },
  { img: "p8.jpeg",  name: "Cylinder Trolley",                              desc: "Easy Movement Stand",          price: "₹210",    category: "accessories", rating: 4.1, badge: "Must Have" },
  { img: "p3.jpeg",  name: "Kitchen Apron",                                 desc: "Protective Cooking Apron",     price: "₹350",    category: "kitchen",     rating: 4.0, badge: "New" },
  { img: "p5.jpeg",  name: "HP 5KG Cylinder",                               desc: "Refill ₹537.50 | New ₹1412",   price: "₹537", category: "cylinders", rating: 5.0, badge: "Popular" },
  { img: "p6.jpeg",  name: "Cook Top Stove 1 Burner",                       desc: "Compact Single Burner Stove",  price: "₹1,099",  category: "stoves",      rating: 4.2, badge: "Compact" },
  { img: "p4.jpeg",  name: "HP Fire Extinguisher 500ML",                    desc: "Safety Fire Protection",       price: "₹600",    category: "safety",      rating: 4.9, badge: "Essential" },
]

const categories = [
  { id: "all",         name: "All" },
  { id: "stoves",      name: "Stoves" },
  { id: "cylinders",   name: "Cylinders" },
  { id: "accessories", name: "Accessories" },
  { id: "safety",      name: "Safety" },
  { id: "kitchen",     name: "Kitchen" },
]

function Stars({ rating }) {
  return (
    <div className="sh-stars">
      {[1,2,3,4,5].map(s => (
        <span key={s} className={`sh-star ${s <= Math.round(rating) ? 'on' : 'off'}`}>★</span>
      ))}
    </div>
  )
}

export default function Product() {
  const [search, setSearch] = useState("")
  const [cat, setCat]       = useState("all")
  const [gridKey, setGridKey] = useState(0)

  const filtered = products.filter(p => {
    const q = search.toLowerCase()
    return (cat === "all" || p.category === cat) &&
           (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  })

  useEffect(() => { setGridKey(k => k + 1) }, [cat, search])

  return (
<div className="sh-root" id="products">      <style>{css}</style>

      <div className="sh-header">
        <div className="sh-title-area">
          <h1 className="sh-title">
            
            <em>Products</em>
          </h1>
        </div>
        <span className="sh-count-pill">
          {filtered.length.toString().padStart(2,'0')} items
        </span>
      </div>

   <div className="sh-toolbar-modern">


  {/* CATEGORY */}
  <div className="sh-categories-modern">
    {categories.map(c => (
      <button
        key={c.id}
        className={`sh-pill ${cat === c.id ? "active" : ""}`}
        onClick={() => setCat(c.id)}
      >
        {c.name}
      </button>
    ))}
  </div>

</div>
      <div className="sh-grid-wrap">
        <div className="sh-grid" key={gridKey}>
          {filtered.length > 0 ? filtered.map((item, i) => (
            <div
              className="sh-card"
              key={item.name}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="sh-card-top">
                <span className="sh-badge">{item.badge}</span>
                <div className="sh-rating">
                  <span className="dot" />
                  {item.rating}
                </div>
              </div>

              <div className="sh-img-box">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={e => { e.target.src = 'https://via.placeholder.com/200?text=IMG' }}
                />
                <div className="sh-img-overlay" />
              </div>

              <Stars rating={item.rating} />

              <h3 className="sh-name">{item.name}</h3>
              <p className="sh-desc">{item.desc}</p>

              <div className="sh-footer">
                <span className="sh-price">{item.price}</span>
                <button className="sh-add-btn">
                  <span>+</span> Add
                </button>
              </div>
            </div>
          )) : (
            <div className="sh-empty">
              <span className="sh-empty-icon">— 0 results —</span>
              <h3>Nothing found</h3>
              <p>Try a different search term or category.</p>
              <button className="sh-empty-btn" onClick={() => { setSearch(""); setCat("all") }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
