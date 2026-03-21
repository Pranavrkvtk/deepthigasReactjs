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
    background: rgba(124, 58, 237, 0.12);
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
    transition: background .25s, box-shadow .25s;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
  .sh-card:active {
    background: #F0F7E6;
    transform: scale(0.99);
  }
  .sh-card:hover { background: #F0F7E6; box-shadow: 0 6px 20px rgba(90,158,26,0.1); }

  .sh-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
    pointer-events: none;
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

  /* CATEGORY PILLS */
  .sh-categories-modern {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

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
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  .sh-pill:active {
    transform: scale(0.96);
  }

  .sh-pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37,99,235,0.15);
  }

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
    pointer-events: none;
  }

  .sh-img-box img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    transition: transform .4s cubic-bezier(.4,0,.2,1);
  }
  .sh-card:hover .sh-img-box img { transform: scale(1.08); }

  .sh-name {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.35;
    margin: 0 0 6px;
    pointer-events: none;
  }

  .sh-desc {
    font-size: 12.5px;
    color: var(--muted);
    margin: 0 0 18px;
    line-height: 1.5;
    pointer-events: none;
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
    pointer-events: none;
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
    position: relative;
    z-index: 10;
    -webkit-tap-highlight-color: transparent;
    pointer-events: auto;
    touch-action: manipulation;
  }

  .sh-add-btn:active {
    transform: scale(0.96);
  }

  .sh-stars {
    display: flex;
    gap: 2px;
    margin-bottom: 14px;
    pointer-events: none;
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

  /* COMPACT POPUP MODAL STYLES */
  .product-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: overlayFade 0.3s ease;
  }

  @keyframes overlayFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .product-modal {
    background: white;
    border-radius: 24px;
    max-width: 380px;
    width: 90%;
    animation: modalSlideUp 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
    position: relative;
    overflow: hidden;
  }

  @keyframes modalSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .modal-close {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 10;
  }

  .modal-close:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }

  .modal-img {
    width: 100%;
    aspect-ratio: 1/1;
    background: var(--surface);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  .modal-img img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  .modal-content {
    padding: 16px 20px 24px;
  }

  .modal-badge {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--green);
    background: var(--green-dim);
    border: 1px solid var(--border);
    padding: 3px 8px;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--ink);
    margin: 0 0 6px;
    line-height: 1.3;
  }

  .modal-desc {
    font-size: 12px;
    color: var(--muted);
    line-height: 1.4;
    margin-bottom: 12px;
  }

  .modal-price {
    font-family: 'DM Mono', monospace;
    font-size: 20px;
    font-weight: 600;
    color: var(--green);
    margin-bottom: 16px;
  }

  .quantity-selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 10px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .quantity-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .qty-btn {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1.5px solid var(--border);
    background: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.2s;
    touch-action: manipulation;
  }

  .qty-btn:hover {
    border-color: var(--green);
    color: var(--green);
  }

  .qty-value {
    font-size: 16px;
    font-weight: 600;
    min-width: 35px;
    text-align: center;
  }

  .modal-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 8px 0;
  }

  .total-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
  }

  .total-amount {
    font-family: 'DM Mono', monospace;
    font-size: 18px;
    font-weight: 700;
    color: var(--green);
  }

  .modal-add-btn {
    width: 100%;
    background: var(--green);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    touch-action: manipulation;
  }

  .modal-add-btn:hover {
    background: #4a7e15;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(90,158,26,0.25);
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .sh-card { animation: cardIn .35s ease both; }

  /* Mobile specific styles for better touch */
  @media (max-width: 768px) {
    .sh-header {
      padding: 24px 16px;
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .sh-title {
      font-size: 32px;
    }

    .sh-count-pill {
      align-self: flex-start;
      font-size: 11px;
      padding: 4px 12px;
    }

    .sh-toolbar-modern {
      padding: 12px 16px;
      margin: 10px auto;
    }

    .sh-categories-modern {
      overflow-x: auto;
      flex-wrap: nowrap;
      padding-bottom: 6px;
    }

    .sh-pill {
      white-space: nowrap;
      font-size: 12px;
      padding: 8px 14px;
    }

    .sh-grid-wrap {
      padding: 16px;
    }

    .sh-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      border: none;
      background: transparent;
    }

    .sh-card {
      padding: 14px;
      border-radius: 16px;
      border: 1px solid var(--border);
      cursor: pointer;
    }

    .sh-name {
      font-size: 13px;
    }

    .sh-desc {
      font-size: 11px;
      margin-bottom: 12px;
    }

    .sh-price {
      font-size: 13px;
    }

    .sh-add-btn {
      padding: 8px 14px;
      font-size: 11px;
      min-height: 36px;
    }

    .product-modal {
      max-width: 340px;
    }

    .modal-title {
      font-size: 16px;
    }

    .modal-price {
      font-size: 18px;
    }

    .modal-content {
      padding: 14px 16px 20px;
    }
  }

  @media (max-width: 480px) {
    .sh-grid {
      gap: 10px;
    }
    
    .sh-card {
      padding: 12px;
    }
    
    .product-modal {
      max-width: 320px;
    }

    .modal-img {
      padding: 20px;
    }

    .modal-title {
      font-size: 15px;
    }

    .sh-add-btn {
      padding: 6px 12px;
      font-size: 10px;
      min-height: 32px;
    }
  }
`

const products = [
  { img: "p2.jpeg",  name: "Butterfly Galaxy 3B Manual Glasstop Gas Stove", desc: "3 Burner Glass Top Gas Stove",  price: 4500,  category: "stoves",      rating: 4.5, badge: "Bestseller" },
  { img: "p11.jpeg", name: "Butterfly Galaxy 2B Manual Glasstop Gas Stove", desc: "2 Burner Glass Top Gas Stove",  price: 3500,  category: "stoves",      rating: 4.3, badge: "Popular" },
  { img: "p7.jpeg",  name: "Butterfly 2B New Xtra Stainless Steel Stove",   desc: "2 Burner Steel Gas Stove",     price: 2750,  category: "stoves",      rating: 4.4, badge: "Value" },
  { img: "p10.jpeg", name: "HP Suraksha LPG Hose",                          desc: "1.5 Meter Safety Hose",        price: 190,    category: "accessories", rating: 4.8, badge: "Safety" },
  { img: "p9.jpeg",  name: "Suraksha Flame Lighter",                        desc: "With 100ML Refill Bottle",     price: 250,    category: "accessories", rating: 4.2, badge: "New" },
  { img: "p8.jpeg",  name: "Cylinder Trolley",                              desc: "Easy Movement Stand",          price: 210,    category: "accessories", rating: 4.1, badge: "Must Have" },
  { img: "p3.jpeg",  name: "Kitchen Apron",                                 desc: "Protective Cooking Apron",     price: 350,    category: "kitchen",     rating: 4.0, badge: "New" },
  { img: "p5.jpeg",  name: "HP 5KG Cylinder",                               desc: "Refill ₹537.50 | New ₹1412",   price: 537,    category: "cylinders", rating: 5.0, badge: "Popular" },
  { img: "p6.jpeg",  name: "Cook Top Stove 1 Burner",                       desc: "Compact Single Burner Stove",  price: 1099,   category: "stoves",      rating: 4.2, badge: "Compact" },
  { img: "p4.jpeg",  name: "HP Fire Extinguisher 500ML",                    desc: "Safety Fire Protection",       price: 600,    category: "safety",      rating: 4.9, badge: "Essential" },
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
  const [cat, setCat] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [qty, setQty] = useState(1)
  const [gridKey, setGridKey] = useState(0)

  const filtered = products.filter(p => {
    const q = search.toLowerCase()
    return (cat === "all" || p.category === cat) &&
           (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  })

  useEffect(() => { setGridKey(k => k + 1) }, [cat, search])

  // Handle clicking on the product card (opens modal)
  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setQty(1)
  }

  // Handle Add button click
  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
    setQty(1)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  const handleConfirmAdd = () => {
    if (selectedProduct) {
      const total = selectedProduct.price * qty
      alert(`Added ${qty} x ${selectedProduct.name} to cart!\nTotal: ₹${total.toLocaleString()}`)
      setSelectedProduct(null)
    }
  }

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`
  }

  return (
    <div className="sh-root" id="products">
      <style>{css}</style>

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
              onClick={(e) => {
                // Check if click target is add button
                if (e.target.closest('.sh-add-btn')) {
                  return
                }
                handleProductClick(item)
              }}
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
                <span className="sh-price">{formatPrice(item.price)}</span>
                <button 
                  className="sh-add-btn"
                  onClick={(e) => handleAddToCart(e, item)}
                >
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

      {/* COMPACT PRODUCT POPUP MODAL */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={handleCloseModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="modal-img">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                onError={e => { e.target.src = 'https://via.placeholder.com/200?text=Product' }}
              />
            </div>
            
            <div className="modal-content">
              <span className="modal-badge">{selectedProduct.badge}</span>
              <h2 className="modal-title">{selectedProduct.name}</h2>
              <p className="modal-desc">{selectedProduct.desc}</p>
              <div className="modal-price">{formatPrice(selectedProduct.price)}</div>
              
              <div className="quantity-selector">
                <span className="quantity-label">Quantity</span>
                <div className="quantity-controls">
                  <button 
                    className="qty-btn"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                  >
                    -
                  </button>
                  <span className="qty-value">{qty}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="modal-total">
                <span className="total-label">Total</span>
                <span className="total-amount">{formatPrice(selectedProduct.price * qty)}</span>
              </div>
              
              <button className="modal-add-btn" onClick={handleConfirmAdd}>
                <span>🛒</span> Add to Cart ({qty})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}