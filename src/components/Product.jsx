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

  /* Animated particles background */
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

  /* Floating particles animation */
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
    0%, 100% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes floatParticles {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-100px);
    }
  }

  /* Animated floating shapes */
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

  .shape-1 {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -100px;
    animation-duration: 25s;
    background: radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
  }

  .shape-2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: -100px;
    animation-duration: 30s;
    background: radial-gradient(circle, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
  }

  .shape-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    left: 10%;
    animation-duration: 18s;
    background: radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0.08));
  }

  .shape-4 {
    width: 250px;
    height: 250px;
    bottom: 20%;
    right: -50px;
    animation-duration: 22s;
    background: radial-gradient(circle, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-30px) rotate(5deg);
    }
  }

  /* Glass morphism effect for header */
  .sh-header {
    position: relative;
    z-index: 2;
    padding: 64px 48px 48px;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0 0 20px 20px;
    animation: slideDown 0.6s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
    animation: fadeInUp 0.8s ease-out;
  }

  .sh-title em {
    font-style: normal;
    color: #FFE66D;
    display: block;
    background: linear-gradient(135deg, #FFE66D, #FFB347);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sh-count-pill {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 6px 16px;
    border-radius: 100px;
    white-space: nowrap;
    align-self: flex-end;
    margin-bottom: 6px;
    animation: fadeInRight 0.8s ease-out;
  }

  /* Floating Toolbar Design - New Style */
  .sh-toolbar-floating {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0;
    animation: fadeInUp 0.8s ease-out 0.2s both;
  }

  /* Minimal Search Bar */
  .sh-search-minimal {
    margin-bottom: 32px;
  }

  .sh-search-field {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
  }

  .sh-search-icon-mini {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: #94a3b8;
    pointer-events: none;
    transition: color 0.3s;
  }

  .sh-search-input-mini {
    width: 100%;
    padding: 14px 20px 14px 52px;
    font-size: 15px;
    font-family: 'Inter', sans-serif;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

  .sh-search-input-mini:focus + .sh-search-icon-mini {
    color: #5A9E1A;
  }

  .sh-search-clear-mini {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.05);
    border: none;
    cursor: pointer;
    color: #94a3b8;
    font-size: 12px;
    padding: 0;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s;
  }

  .sh-search-clear-mini:hover {
    background: #ef4444;
    color: white;
    transform: translateY(-50%) scale(1.05);
  }

  /* Category Grid Cards */
  .sh-category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    margin-bottom: 32px;
  }

  .sh-category-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .sh-category-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #5A9E1A, #3a6e0a);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 0;
  }

  .sh-category-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .sh-category-card:hover::before {
    opacity: 0.05;
  }

  .sh-category-card.active {
    background: linear-gradient(135deg, #5A9E1A, #3a6e0a);
    border-color: transparent;
    box-shadow: 0 8px 20px rgba(90, 158, 26, 0.3);
  }

  .sh-category-card.active .sh-category-icon,
  .sh-category-card.active .sh-category-name,
  .sh-category-card.active .sh-category-count {
    color: white;
  }

  .sh-category-icon {
    font-size: 24px;
    position: relative;
    z-index: 1;
    transition: transform 0.3s;
  }

  .sh-category-card:hover .sh-category-icon {
    transform: scale(1.1);
  }

  .sh-category-info {
    flex: 1;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  .sh-category-name {
    font-size: 14px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #334155;
    transition: color 0.3s;
  }

  .sh-category-count {
    font-size: 12px;
    font-weight: 500;
    font-family: 'DM Mono', monospace;
    color: #94a3b8;
    background: rgba(0, 0, 0, 0.05);
    padding: 2px 8px;
    border-radius: 20px;
    transition: all 0.3s;
  }

  .sh-category-card.active .sh-category-count {
    background: rgba(255, 255, 255, 0.25);
  }

  /* Filter Chips */
  .sh-filter-chips {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 12px 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .sh-chips-label {
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-right: 12px;
  }

  .sh-chips-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  .sh-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: white;
    border: 1px solid #e2e8f0;
    padding: 6px 12px 6px 16px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 500;
    color: #0f172a;
    transition: all 0.2s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .sh-chip-icon {
    font-size: 12px;
  }

  .sh-chip-remove {
    background: none;
    border: none;
    cursor: pointer;
    color: #94a3b8;
    font-size: 16px;
    font-weight: 600;
    padding: 0;
    margin-left: 4px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }

  .sh-chip-remove:hover {
    color: #ef4444;
    transform: scale(1.1);
  }

  .sh-chip-clear {
    background: none;
    border: none;
    color: #5A9E1A;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 30px;
    transition: all 0.2s;
    font-family: 'Inter', sans-serif;
    margin-left: 4px;
  }

  .sh-chip-clear:hover {
    background: #f1f5f9;
    color: #3a6e0a;
  }

  /* Enhanced product cards - REDUCED HEIGHT */
  .sh-grid-wrap {
    position: relative;
    z-index: 2;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 48px 80px;
  }

  .sh-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    border-radius: 16px;
  }
  
  .sh-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 18px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    animation: cardIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  .sh-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    background: white;
  }

  @keyframes cardIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Reduced image box size */
  .sh-img-box {
    width: 100%;
    aspect-ratio: 1/1;
    background: var(--surface);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 12px;
    position: relative;
  }

  .sh-img-box img {
    width: 75%;
    height: 75%;
    object-fit: contain;
    transition: transform .4s cubic-bezier(.4,0,.2,1);
  }
  .sh-card:hover .sh-img-box img { transform: scale(1.08); }

  /* Compact card content */
  .sh-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .sh-badge {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--green);
    background: var(--green-dim);
    border: 1px solid var(--border);
    padding: 3px 8px;
    border-radius: 4px;
  }

  .sh-rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: var(--muted);
  }
  .sh-rating .dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--green);
    opacity: 0.6;
  }

  .sh-stars {
    display: flex;
    gap: 2px;
    margin-bottom: 8px;
  }
  .sh-star { font-size: 10px; }
  .sh-star.on  { color: #5A9E1A; }
  .sh-star.off { color: #C8D9B0; }

  .sh-name {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.3;
    margin: 0 0 4px;
  }

  .sh-desc {
    font-size: 11px;
    color: var(--muted);
    margin: 0 0 12px;
    line-height: 1.4;
  }

  .sh-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid var(--border);
    margin-top: auto;
  }

  .sh-price {
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    color: var(--green);
  }

  /* Compact add button */
  .sh-add-btn {
    background: linear-gradient(135deg, #5A9E1A, #3a6e0a);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 6px 14px;
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .5px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    z-index: 10;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    overflow: hidden;
  }

  .sh-add-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  .sh-add-btn:active::before {
    width: 300px;
    height: 300px;
  }

  .sh-add-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(90,158,26,0.4);
  }

  /* Enhanced modal with glass morphism */
  .product-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: overlayFade 0.3s ease;
  }

  .product-modal {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    max-width: 260px;
    width: 80%;
    animation: modalSlideUp 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  @keyframes modalSlideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .modal-add-btn {
    width: 100%;
    background: linear-gradient(135deg, #5A9E1A, #3a6e0a);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 10px;
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    touch-action: manipulation;
    position: relative;
    overflow: hidden;
  }

  .modal-add-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  .modal-add-btn:active::before {
    width: 300px;
    height: 300px;
  }

  .modal-add-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(90,158,26,0.4);
  }

  .sh-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 80px 20px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    backdrop-filter: blur(10px);
  }

  .sh-empty-btn {
    margin-top: 20px;
    padding: 10px 24px;
    background: linear-gradient(135deg, #5A9E1A, #3a6e0a);
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
  }

  .sh-empty-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(90,158,26,0.4);
  }

  .modal-close {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 10;
  }

  .modal-close:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1) rotate(90deg);
  }

  .modal-img {
    width: 100%;
    aspect-ratio: 1/1;
    background: var(--surface);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .modal-img img {
    width: 65%;
    height: 65%;
    object-fit: contain;
  }

  .modal-content {
    padding: 12px 16px 18px;
  }

  .modal-badge {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--green);
    background: var(--green-dim);
    border: 1px solid var(--border);
    padding: 2px 6px;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--ink);
    margin: 0 0 4px;
    line-height: 1.3;
  }

  .modal-desc {
    font-size: 11px;
    color: var(--muted);
    line-height: 1.3;
    margin-bottom: 8px;
  }

  .modal-price {
    font-family: 'DM Mono', monospace;
    font-size: 16px;
    font-weight: 600;
    color: var(--green);
    margin-bottom: 12px;
  }

  .quantity-selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 8px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .quantity-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--ink);
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .qty-btn {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 1.5px solid var(--border);
    background: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s;
    touch-action: manipulation;
  }

  .qty-btn:hover {
    border-color: var(--green);
    color: var(--green);
    transform: scale(1.05);
  }

  .qty-value {
    font-size: 14px;
    font-weight: 600;
    min-width: 30px;
    text-align: center;
  }

  .modal-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    padding: 6px 0;
  }

  .total-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--ink);
  }

  .total-amount {
    font-family: 'DM Mono', monospace;
    font-size: 16px;
    font-weight: 700;
    color: var(--green);
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

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Mobile responsive styles - updated for compact cards */
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

    .sh-toolbar-floating {
      margin: 20px auto;
      padding: 0 12px;
    }

    .sh-search-field {
      max-width: 100%;
    }

    .sh-search-input-mini {
      padding: 12px 16px 12px 48px;
      font-size: 14px;
    }

    .sh-category-grid {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      gap: 10px;
    }

    .sh-category-card {
      padding: 8px 12px;
    }

    .sh-category-icon {
      font-size: 18px;
    }

    .sh-category-name {
      font-size: 11px;
    }

    .sh-category-count {
      font-size: 9px;
      padding: 1px 5px;
    }

    .sh-filter-chips {
      padding: 10px 16px;
    }

    .sh-chips-label {
      display: block;
      margin-bottom: 8px;
    }

    .sh-chips-list {
      flex-wrap: wrap;
    }

    .sh-chip {
      font-size: 12px;
      padding: 4px 10px 4px 12px;
    }

    .sh-grid-wrap {
      padding: 16px;
    }

    .sh-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .sh-card {
      padding: 12px;
      border-radius: 16px;
    }

    .sh-img-box {
      margin-bottom: 8px;
    }

    .sh-name {
      font-size: 12px;
    }

    .sh-desc {
      font-size: 10px;
      margin-bottom: 8px;
    }

    .sh-price {
      font-size: 13px;
    }

    .sh-add-btn {
      padding: 5px 12px;
      font-size: 10px;
    }

    .product-modal {
      max-width: 240px;
    }
  }

  @media (max-width: 480px) {
    .sh-category-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }

    .sh-category-card {
      padding: 6px 10px;
    }

    .sh-category-icon {
      font-size: 16px;
    }

    .sh-category-name {
      font-size: 10px;
    }

    .sh-search-input-mini {
      padding: 10px 12px 10px 44px;
      font-size: 13px;
    }

    .sh-grid {
      gap: 10px;
    }
    
    .sh-card {
      padding: 10px;
    }

    .sh-img-box {
      margin-bottom: 6px;
    }

    .sh-name {
      font-size: 11px;
    }

    .sh-desc {
      font-size: 9px;
      margin-bottom: 6px;
    }

    .sh-price {
      font-size: 12px;
    }

    .sh-add-btn {
      padding: 4px 10px;
      font-size: 9px;
    }
    
    .product-modal {
      max-width: 220px;
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

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setQty(1)
  }

  const handleAddToCart = (e, product) => {
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

  // Helper function to get category icon
  const getCategoryIcon = (categoryId) => {
    const icons = {
      all: "🎯",
      stoves: "🔥",
      cylinders: "🛢️",
      accessories: "🔧",
      safety: "🛡️",
      kitchen: "🍳"
    }
    return icons[categoryId] || "📦"
  }

  // Helper function to get product count for category
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return products.length
    return products.filter(p => p.category === categoryId).length
  }

  return (
    <div className="sh-root" id="products">
      <style>{css}</style>
      
      {/* Floating shapes for decoration */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

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

      {/* New Floating Toolbar Design */}
      <div className="sh-toolbar-floating">
        {/* Search Bar - Minimal Style */}
        <div className="sh-search-minimal">
          <div className="sh-search-field">
            <svg className="sh-search-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="sh-search-input-mini"
            />
            {search && (
              <button className="sh-search-clear-mini" onClick={() => setSearch("")}>
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Grid Cards */}
        <div className="sh-category-grid">
          {categories.map(c => (
            <button
              key={c.id}
              className={`sh-category-card ${cat === c.id ? "active" : ""}`}
              onClick={() => setCat(c.id)}
            >
              <div className="sh-category-icon">{getCategoryIcon(c.id)}</div>
              <div className="sh-category-info">
                <span className="sh-category-name">{c.name}</span>
                <span className="sh-category-count">{getCategoryCount(c.id)}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Filters - Chips Style */}
        {(cat !== "all" || search) && (
          <div className="sh-filter-chips">
            <div className="sh-chips-list">
              <span className="sh-chips-label">Active filters:</span>
              {cat !== "all" && (
                <div className="sh-chip">
                  <span className="sh-chip-icon">{getCategoryIcon(cat)}</span>
                  <span>{categories.find(c => c.id === cat)?.name}</span>
                  <button className="sh-chip-remove" onClick={() => setCat("all")}>×</button>
                </div>
              )}
              {search && (
                <div className="sh-chip">
                  <span className="sh-chip-icon">🔍</span>
                  <span>{search}</span>
                  <button className="sh-chip-remove" onClick={() => setSearch("")}>×</button>
                </div>
              )}
              <button 
                className="sh-chip-clear"
                onClick={() => {
                  setCat("all");
                  setSearch("");
                }}
              >
                Clear all
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="sh-grid-wrap">
        <div className="sh-grid" key={gridKey}>
          {filtered.length > 0 ? filtered.map((item, i) => (
            <div
              className="sh-card"
              key={item.name}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div 
                className="sh-card-clickable"
                onClick={() => handleProductClick(item)}
                style={{ cursor: 'pointer', flex: 1, display: 'flex', flexDirection: 'column' }}
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
                </div>

                <Stars rating={item.rating} />

                <h3 className="sh-name">{item.name}</h3>
                <p className="sh-desc">{item.desc}</p>
              </div>

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

      {/* EXTRA SMALL POPUP MODAL */}
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
                <span className="quantity-label">Qty</span>
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
                <span>🛒</span> Add ({qty})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}