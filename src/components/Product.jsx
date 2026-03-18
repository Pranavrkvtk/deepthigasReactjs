import React from 'react'

function Product() {
  return (
    <div style={{ 
      width: 'fit-content',
      margin: '0 auto'
    }}>
      <img 
        src="img1.jpeg" 
        alt="Product"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '20px',
          objectFit: 'cover',
          boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.02)'
          e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)'
        }}
      />
    </div>
  )
}

export default Product