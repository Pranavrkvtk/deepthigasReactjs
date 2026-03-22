import React, { useState, useEffect } from 'react'

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600;700&display=swap');

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

  /* Animated Gradient Background */
  .sh-root {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow-x: hidden;
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    padding: 0;
  }

  .sh-root::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
      repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 8px);
    pointer-events: none;
    animation: gradientShift 10s ease infinite;
  }

  .sh-root::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
      radial-gradient(circle at 90% 70%, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    animation: floatParticles 20s linear infinite;
  }

  @keyframes gradientShift {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }

  @keyframes floatParticles {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-100px); }
  }

  .floating-shapes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 20s infinite ease-in-out;
  }

  .shape-1 { width: 300px; height: 300px; top: -150px; right: -100px; animation-duration: 25s; background: radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0.05)); }
  .shape-2 { width: 200px; height: 200px; bottom: -100px; left: -100px; animation-duration: 30s; background: radial-gradient(circle, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); }
  .shape-3 { width: 150px; height: 150px; top: 50%; left: 10%; animation-duration: 18s; background: radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0.08)); }
  .shape-4 { width: 250px; height: 250px; bottom: 20%; right: -50px; animation-duration: 22s; background: radial-gradient(circle, rgba(255,255,255,0.12), rgba(255,255,255,0.05)); }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
  }

  /* Header with integrated cart icon */
  .sh-header {
    position: relative;
    z-index: 2;
    padding: 48px 48px 32px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0 0 20px 20px;
    animation: slideDown 0.6s ease-out;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .sh-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: 800;
    color: white;
    line-height: 0.95;
    margin: 0;
    letter-spacing: -2px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  }

  .sh-title em {
    font-style: normal;
    background: linear-gradient(135deg, #FFE66D, #FFB347);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sh-header-actions {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .sh-count-pill, .cart-toggle-btn {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 8px 18px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .cart-toggle-btn:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: scale(1.02);
  }

  .cart-icon {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .cart-badge {
    position: absolute;
    top: -8px;
    right: -12px;
    background: #FFB347;
    color: #1e2b0f;
    font-size: 10px;
    font-weight: bold;
    min-width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    font-family: 'DM Mono', monospace;
    animation: bounce 0.4s ease;
  }

  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  /* Toolbar & Search */
  .sh-toolbar-floating {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 24px;
  }

  .sh-search-minimal { margin-bottom: 32px; }
  .sh-search-field { position: relative; max-width: 400px; margin: 0 auto; }
  .sh-search-icon-mini {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: #94a3b8;
    pointer-events: none;
  }
  .sh-search-input-mini {
    width: 100%;
    padding: 14px 20px 14px 52px;
    font-size: 15px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    outline: none;
    transition: all 0.3s;
    color: #0f172a;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  .sh-search-input-mini:focus {
    border-color: #5A9E1A;
    background: white;
    box-shadow: 0 8px 25px rgba(90, 158, 26, 0.15);
    transform: translateY(-2px);
  }
  .sh-search-clear-mini {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.05);
    border: none;
    cursor: pointer;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sh-search-clear-mini:hover { background: #ef4444; color: white; }

  /* Category Grid */
  .sh-category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 12px;
    margin-bottom: 32px;
  }
  .sh-category-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .sh-category-card.active {
    background: linear-gradient(135deg, #5A9E1A, #3a6e0a);
    border-color: transparent;
  }
  .sh-category-card.active .sh-category-name,
  .sh-category-card.active .sh-category-count { color: white; }
  .sh-category-icon { font-size: 24px; }
  .sh-category-info { flex: 1; display: flex; justify-content: space-between; align-items: baseline; }
  .sh-category-name { font-size: 14px; font-weight: 600; color: #334155; }
  .sh-category-count { font-size: 11px; background: rgba(0,0,0,0.05); padding: 2px 8px; border-radius: 20px; }

  /* Product Grid */
  .sh-grid-wrap { position: relative; z-index: 2; max-width: 1400px; margin: 0 auto; padding: 0 48px 80px; }
  .sh-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
  .sh-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 18px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .sh-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.2); background: white; }
  
  /* Selected item indicator */
  .selected-indicator {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #5A9E1A;
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    animation: popIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
    z-index: 5;
  }

  @keyframes popIn {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .sh-img-box { width: 100%; aspect-ratio: 1/1; background: #EBF0DF; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
  .sh-img-box img { width: 75%; height: 75%; object-fit: contain; }
  .sh-name { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; margin: 8px 0 4px; }
  .sh-desc { font-size: 11px; color: var(--muted); margin-bottom: 12px; }
  .sh-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border); }
  .sh-price { font-family: 'DM Mono', monospace; font-size: 16px; font-weight: 600; color: var(--green); }
  
  /* REDUCED ADD TO CART BUTTON - Compact Design */
  .sh-add-btn {
    background: linear-gradient(135deg, #5A9E1A, #3a6e0a);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 4px;
    letter-spacing: 0.3px;
  }
  .sh-add-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(90,158,26,0.3);
  }
  .sh-add-btn:active {
    transform: translateY(0);
  }

  /* ========== CART SIDEBAR ========== */
  .cart-sidebar {
    position: fixed;
    top: 0;
    right: -450px;
    width: 420px;
    max-width: 90vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: right 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1);
    display: flex;
    flex-direction: column;
    border-left: 1px solid rgba(255,255,255,0.5);
  }
  .cart-sidebar.open { right: 0; }
  .cart-header {
    padding: 24px;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(90,158,26,0.05);
  }
  .cart-header h2 { font-family: 'Syne', sans-serif; font-size: 24px; color: #1e2b0f; }
  .close-cart {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transition: all 0.2s;
  }
  .cart-items { flex: 1; overflow-y: auto; padding: 16px; }
  .cart-item {
    display: flex;
    gap: 12px;
    background: white;
    border-radius: 16px;
    padding: 12px;
    margin-bottom: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border: 1px solid #eef2e6;
  }
  .cart-item-img { width: 60px; height: 60px; background: #f0f4e8; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
  .cart-item-img img { width: 50px; height: 50px; object-fit: contain; }
  .cart-item-details { flex: 1; }
  .cart-item-name { font-weight: 700; font-size: 13px; }
  .cart-item-price { font-size: 12px; color: var(--green); font-weight: 600; }
  .cart-item-qty { display: flex; align-items: center; gap: 8px; margin-top: 6px; }
  .qty-btn-sm {
    width: 24px; height: 24px;
    border-radius: 6px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    font-weight: bold;
  }
  .cart-item-total { font-size: 12px; font-weight: 600; margin-left: auto; text-align: right; }
  .remove-item {
    background: none;
    border: none;
    color: #ef4444;
    font-size: 18px;
    cursor: pointer;
    margin-left: 8px;
  }
  .cart-footer {
    padding: 20px;
    border-top: 2px solid #e2e8f0;
    background: white;
  }
  .cart-summary { margin-bottom: 16px; }
  .summary-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; }
  .summary-row.total { font-weight: 800; font-size: 18px; border-top: 1px solid #ddd; padding-top: 12px; margin-top: 8px; color: var(--green); }
  .checkout-btn {
    width: 100%;
    background: linear-gradient(135deg, #5A9E1A, #3a6e0a);
    color: white;
    border: none;
    padding: 14px;
    border-radius: 40px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .empty-cart { text-align: center; padding: 40px; color: #7a9160; }

  /* Modal */
  .product-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1100;
  }
  .product-modal {
    background: white;
    border-radius: 28px;
    max-width: 280px;
    width: 80%;
    overflow: hidden;
    animation: modalSlideUp 0.3s ease;
  }
  .modal-close { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.1); border: none; border-radius: 50%; width: 28px; cursor: pointer; }
  .modal-img { padding: 20px; background: #f8faf0; text-align: center; }
  .modal-img img { width: 120px; height: 120px; object-fit: contain; }
  .modal-content { padding: 16px; }
  .modal-add-btn { width: 100%; background: #5A9E1A; color: white; border: none; padding: 10px; border-radius: 40px; font-weight: bold; margin-top: 12px; cursor: pointer; }

  @media (max-width: 768px) {
    .sh-header { padding: 24px 16px; flex-direction: column; align-items: flex-start; }
    .sh-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .sh-grid-wrap { padding: 16px; }
    .cart-sidebar { width: 100%; right: -100%; }
    .sh-add-btn {
      padding: 5px 10px;
      font-size: 10px;
    }
  }
`

const products = [
  { id: 1, img: "p2.jpeg",  name: "Butterfly Galaxy 3B Manual Glasstop Gas Stove", desc: "3 Burner Glass Top Gas Stove",  price: 4500,  category: "stoves",      rating: 4.5, badge: "Bestseller" },
  { id: 2, img: "p11.jpeg", name: "Butterfly Galaxy 2B Manual Glasstop Gas Stove", desc: "2 Burner Glass Top Gas Stove",  price: 3500,  category: "stoves",      rating: 4.3, badge: "Popular" },
  { id: 3, img: "p7.jpeg",  name: "Butterfly 2B New Xtra Stainless Steel Stove",   desc: "2 Burner Steel Gas Stove",     price: 2750,  category: "stoves",      rating: 4.4, badge: "Value" },
  { id: 4, img: "p10.jpeg", name: "HP Suraksha LPG Hose",                          desc: "1.5 Meter Safety Hose",        price: 190,    category: "accessories", rating: 4.8, badge: "Safety" },
  { id: 5, img: "p9.jpeg",  name: "Suraksha Flame Lighter",                        desc: "With 100ML Refill Bottle",     price: 250,    category: "accessories", rating: 4.2, badge: "New" },
  { id: 6, img: "p8.jpeg",  name: "Cylinder Trolley",                              desc: "Easy Movement Stand",          price: 210,    category: "accessories", rating: 4.1, badge: "Must Have" },
  { id: 7, img: "p3.jpeg",  name: "Kitchen Apron",                                 desc: "Protective Cooking Apron",     price: 350,    category: "kitchen",     rating: 4.0, badge: "New" },
  { id: 8, img: "p5.jpeg",  name: "HP 5KG Cylinder",                               desc: "Refill ₹537.50 | New ₹1412",   price: 537,    category: "cylinders", rating: 5.0, badge: "Popular" },
  { id: 9, img: "p6.jpeg",  name: "Cook Top Stove 1 Burner",                       desc: "Compact Single Burner Stove",  price: 1099,   category: "stoves",      rating: 4.2, badge: "Compact" },
  { id: 10, img: "p4.jpeg",  name: "HP Fire Extinguisher 500ML",                    desc: "Safety Fire Protection",       price: 600,    category: "safety",      rating: 4.9, badge: "Essential" },
]

const categories = [
  { id: "all", name: "All" },
  { id: "stoves", name: "Stoves" },
  { id: "cylinders", name: "Cylinders" },
  { id: "accessories", name: "Accessories" },
  { id: "safety", name: "Safety" },
  { id: "kitchen", name: "Kitchen" },
]

function Stars({ rating }) {
  return (
    <div className="sh-stars" style={{ display: 'flex', gap: 2, marginBottom: 4 }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ fontSize: 10, color: s <= Math.round(rating) ? '#5A9E1A' : '#C8D9B0' }}>★</span>
      ))}
    </div>
  )
}

// Cart Icon Component with Badge
function CartIconWithBadge({ count }) {
  return (
    <div className="cart-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      {count > 0 && <span className="cart-badge">{count > 99 ? '99+' : count}</span>}
    </div>
  )
}

export default function ProductCheckout({ externalCartOpen, onCartClose, onCartUpdate }) {
  const [search, setSearch] = useState("")
  const [cat, setCat] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [qty, setQty] = useState(1)
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(null)

  // Sync with external cart open from App
  useEffect(() => {
    if (externalCartOpen) {
      setCartOpen(true)
    }
  }, [externalCartOpen])

  // Handle cart close and notify parent
  const handleCartClose = () => {
    setCartOpen(false)
    if (onCartClose) {
      onCartClose()
    }
  }

  // Listen for custom open cart event
  useEffect(() => {
    const handleOpenCart = () => {
      setCartOpen(true)
    }
    window.addEventListener('openCartSidebar', handleOpenCart)
    
    return () => {
      window.removeEventListener('openCartSidebar', handleOpenCart)
    }
  }, [])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("butterfly_cart")
    if (savedCart) setCart(JSON.parse(savedCart))
  }, [])

  // Save cart to localStorage and notify updates
  useEffect(() => {
    localStorage.setItem("butterfly_cart", JSON.stringify(cart))
    window.dispatchEvent(new Event('storage'))
    window.dispatchEvent(new CustomEvent('cartUpdated'))
    if (onCartUpdate) {
      onCartUpdate()
    }
  }, [cart, onCartUpdate])

  const filtered = products.filter(p => {
    const q = search.toLowerCase()
    return (cat === "all" || p.category === cat) &&
           (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  })

  const getCategoryIcon = (id) => {
    const icons = { all: "🎯", stoves: "🔥", cylinders: "🛢️", accessories: "🔧", safety: "🛡️", kitchen: "🍳" }
    return icons[id] || "📦"
  }

  const getCategoryCount = (id) => id === "all" ? products.length : products.filter(p => p.category === id).length

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...prev, { ...product, quantity }]
    })
    setSelectedItemId(product.id)
    setTimeout(() => {
      setSelectedItemId(null)
    }, 1500)
  }

  const updateCartItemQty = (id, newQty) => {
    if (newQty <= 0) {
      setCart(prev => prev.filter(item => item.id !== id))
    } else {
      setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item))
    }
  }

  const removeCartItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleAddToCartFromCard = (e, product) => {
    e.stopPropagation()
    addToCart(product, 1)
    setTimeout(() => setCartOpen(true), 300)
  }

  const handleModalConfirm = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, qty)
      setSelectedProduct(null)
      setCartOpen(true)
    }
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some products first.")
      return
    }
    const totalAmount = cartTotal
    alert(`✅ ORDER PLACED!\n\nItems: ${cartItemCount}\nTotal: ₹${totalAmount.toLocaleString()}\n\nThank you for shopping at Butterfly Emporium!`)
  }

  const formatPrice = (price) => `₹${price.toLocaleString()}`

  return (
    <div className="sh-root" id="products">
      <style>{css}</style>
      <div className="floating-shapes">
        <div className="shape shape-1"></div><div className="shape shape-2"></div>
        <div className="shape shape-3"></div><div className="shape shape-4"></div>
      </div>

      <div className="sh-header">
        <div>
          <h1 className="sh-title"><em>Products</em></h1>
        </div>
        <div className="sh-header-actions">
          <span className="sh-count-pill">{filtered.length} products</span>
          <button className="cart-toggle-btn" onClick={() => setCartOpen(true)}>
            <CartIconWithBadge count={cartItemCount} />
            <span>My Cart</span>
          </button>
        </div>
      </div>

      <div className="sh-toolbar-floating">
        <div className="sh-search-minimal">
          <div className="sh-search-field">
            <svg className="sh-search-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="sh-search-input-mini" />
            {search && <button className="sh-search-clear-mini" onClick={() => setSearch("")}>✕</button>}
          </div>
        </div>

        <div className="sh-category-grid">
          {categories.map(c => (
            <button key={c.id} className={`sh-category-card ${cat === c.id ? "active" : ""}`} onClick={() => setCat(c.id)}>
              <div className="sh-category-icon">{getCategoryIcon(c.id)}</div>
              <div className="sh-category-info">
                <span className="sh-category-name">{c.name}</span>
                <span className="sh-category-count">{getCategoryCount(c.id)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="sh-grid-wrap">
        <div className="sh-grid">
          {filtered.length > 0 ? filtered.map((item) => (
            <div className="sh-card" key={item.id} onClick={() => setSelectedProduct(item)}>
              {selectedItemId === item.id && (
                <div className="selected-indicator">✓</div>
              )}
              <div className="sh-img-box"><img src={item.img} alt={item.name} onError={e => e.target.src = 'https://via.placeholder.com/200?text=IMG'} /></div>
              <Stars rating={item.rating} />
              <h3 className="sh-name">{item.name}</h3>
              <p className="sh-desc">{item.desc}</p>
              <div className="sh-footer">
                <span className="sh-price">{formatPrice(item.price)}</span>
                <button className="sh-add-btn" onClick={(e) => handleAddToCartFromCard(e, item)}>
                  <span>+</span> Add
                </button>
              </div>
            </div>
          )) : (
            <div className="sh-empty" style={{ gridColumn: '1/-1', textAlign: 'center', padding: 60, background: 'rgba(255,255,255,0.9)', borderRadius: 24 }}>
              <h3>No products found</h3>
              <button onClick={() => { setSearch(""); setCat("all") }} style={{ marginTop: 12, padding: '8px 20px', background: '#5A9E1A', color: 'white', border: 'none', borderRadius: 30 }}>Clear filters</button>
            </div>
          )}
        </div>
      </div>

      {/* CART SIDEBAR */}
      <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>🛒 My Cart</h2>
          <button className="close-cart" onClick={handleCartClose}>✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">✨ Cart is empty. Add some delicious kitchen gear!</div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img"><img src={item.img} alt={item.name} onError={e=>e.target.src='https://via.placeholder.com/50'} /></div>
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{formatPrice(item.price)}</div>
                  <div className="cart-item-qty">
                    <button className="qty-btn-sm" onClick={() => updateCartItemQty(item.id, item.quantity - 1)}>-</button>
                    <span style={{ minWidth: 28, textAlign: 'center' }}>{item.quantity}</span>
                    <button className="qty-btn-sm" onClick={() => updateCartItemQty(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="cart-item-total">
                  {formatPrice(item.price * item.quantity)}
                  <button className="remove-item" onClick={() => removeCartItem(item.id)}>🗑️</button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row"><span>Subtotal</span><span>{formatPrice(cartTotal)}</span></div>
              <div className="summary-row"><span>Delivery</span><span>FREE</span></div>
              <div className="summary-row total"><span>Total</span><span>{formatPrice(cartTotal)}</span></div>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>BUY NOW → Secure Checkout</button>
          </div>
        )}
      </div>

      {/* Product Quick Modal */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>✕</button>
            <div className="modal-img"><img src={selectedProduct.img} alt={selectedProduct.name} /></div>
            <div className="modal-content">
              <h3 style={{ fontSize: 16 }}>{selectedProduct.name}</h3>
              <p style={{ fontSize: 12, color: '#7A9160' }}>{selectedProduct.desc}</p>
              <div style={{ fontWeight: 700, margin: '8px 0' }}>{formatPrice(selectedProduct.price)}</div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                <button onClick={() => setQty(Math.max(1, qty-1))} style={{ padding: '4px 12px', borderRadius: 20, border: '1px solid #ccc' }}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty+1)} style={{ padding: '4px 12px', borderRadius: 20, border: '1px solid #ccc' }}>+</button>
              </div>
              <button className="modal-add-btn" onClick={handleModalConfirm}>Add {qty} to Cart • {formatPrice(selectedProduct.price * qty)}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}