import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Product() {

  const [search, setSearch] = useState("")

  const products = [
    { img: "p2.jpeg", name: "Butterfly Galaxy 3B Manual Glasstop Gas Stove", desc: "3 Burner Glass Top Gas Stove", price: "₹4500" },
    { img: "p11.jpeg", name: "Butterfly Galaxy 2B Manual Glasstop Gas Stove", desc: "2 Burner Glass Top Gas Stove", price: "₹3500" },
    { img: "p7.jpeg", name: "Butterfly 2B New Xtra Stainless Steel Stove", desc: "2 Burner Steel Gas Stove", price: "₹2750" },
    { img: "p10.jpeg", name: "HP Suraksha LPG Hose", desc: "1.5 Meter Safety Hose", price: "₹190" },
    { img: "p9.jpeg", name: "Suraksha Flame Lighter", desc: "With 100ML Refill Bottle", price: "₹250" },
    { img: "p8.jpeg", name: "Cylinder Trolley", desc: "Easy Movement Stand", price: "₹210" },
    { img: "p3.jpeg", name: "Kitchen Apron", desc: "Protective Cooking Apron", price: "₹350" },
    { img: "p5.jpeg", name: "HP 5KG Cylinder", desc: "Refill ₹537.50 | New ₹1412", price: "Updated Feb 2026" },
    { img: "p6.jpeg", name: "Cook Top Stove 1 Burner", desc: "Compact Single Burner Stove", price: "₹1099" },
    { img: "p4.jpeg", name: "HP Fire Extinguisher 500ML", desc: "Safety Fire Protection", price: "₹600" }
  ]

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div id="Product" style={{ textAlign: 'center', padding: '50px 20px' }}>

      {/* 🔥 Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #2563eb, #4f46e5)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
      >
        Our Products
      </motion.h1>

      {/* 🔍 Animated Search */}
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          margin: '25px 0',
          padding: '12px 20px',
          width: '320px',
          maxWidth: '90%',
          borderRadius: '30px',
          border: '1px solid #ddd',
          outline: 'none',
          fontSize: '14px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}
      />

      {/* 🔥 Product Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center'
      }}>

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              style={{
                width: '260px',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '15px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                transition: '0.3s'
              }}
            >

              {/* Image */}
              <motion.img
                src={item.img}
                alt={item.name}
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
              />

              {/* Name */}
              <h3 style={{ marginTop: '10px', fontSize: '16px' }}>
                {item.name}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '13px', color: '#666' }}>
                {item.desc}
              </p>

              {/* Price */}
              <p style={{
                fontWeight: 'bold',
                marginTop: '8px',
                color: '#16a34a',
                fontSize: '15px'
              }}>
                {item.price}
              </p>

            </motion.div>
          ))
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            ❌ No products found
          </motion.p>
        )}

      </div>

    </div>
  )
}

export default Product