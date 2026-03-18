export default function ServiceArea() {
  const areas = [
    'Vadakara Town',
    'Chemmarathur',
    'Keezhil',
    'Kurikkilad',
    'Memunda',
    'Meppayil',
    'Nadakkuthala',
    'Nut Street',
    'Puthur',
    'Siddhasamaj',
    'Vayikkilassery',
    'Chorode',
  ]

  return (
    <section className="service-area-section" id="service-area">
      <div className="service-area-container">
        
        {/* LEFT SIDE */}
        <div className="service-left">
          <div className="tag-wrapper">
            <span className="tag-dot"></span>
            <span className="tag">📍 SERVICE AREA</span>
          </div>
          
          <h2 className="section-title">
            We Deliver Across <span className="highlight">Vadakara</span> & Beyond
          </h2>
          
          <p className="section-description">
            Serving our community with fast, reliable LPG delivery right to your doorstep.
          </p>

          <div className="area-grid">
            {areas.map((area, index) => (
              <span key={area} className="area-chip" style={{ animationDelay: `${index * 0.05}s` }}>
                <span className="chip-icon">📍</span>
                {area}
              </span>
            ))}
          </div>

          <div className="area-cta">
            <div className="cta-icon-wrapper">
              <span className="cta-icon">📞</span>
            </div>
            <div className="cta-text">
              <p className="cta-title">Don't see your area?</p>
              <p className="cta-description">
                <strong>Call us now</strong> — we may still deliver to you!
              </p>
            </div>
            <a href="tel:+919876543210" className="cta-button">
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="service-right">
          <div className="map-container">
            <div className="map-header">
              <div className="map-header-left">
                <span className="map-icon">🗺️</span>
                <h3 className="map-title">Our Coverage Area</h3>
              </div>
              <a
                href="https://www.google.com/maps?q=Vadakara,Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                <span>View Larger Map</span>
                <svg className="link-icon" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" 
                    stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
            
            <div className="map-wrapper">
              <iframe
                title="Vadakara Location - Deepthi Gas Service Area"
                src="https://www.google.com/maps?q=Vadakara,Kerala&output=embed"
                loading="lazy"
                className="map-iframe"
              ></iframe>
              
              {/* Map overlay with stats */}
              <div className="map-stats">
                <div className="stat-item">
                  <span className="stat-value">12+</span>
                  <span className="stat-label">Areas Covered</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">Delivery</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value">30min</span>
                  <span className="stat-label">Avg. Response</span>
                </div>
              </div>
            </div>
            
            <div className="map-footer">
              <div className="delivery-badge">
                <span className="badge-icon">🚚</span>
                <span>Free delivery within Vadakara</span>
              </div>
              <div className="trust-badge">
                <span className="badge-icon">⭐</span>
                <span>Trusted by 10,000+ families</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .service-area-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
        }

        /* Background decoration */
        .service-area-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .service-area-section::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .service-area-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        /* Left Side Styles */
        .service-left {
          animation: slideInLeft 0.8s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .tag-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37,99,235,0.1);
          padding: 8px 16px;
          border-radius: 40px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(37,99,235,0.2);
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          background: #2563eb;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        .tag {
          color: #2563eb;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
          margin: 0 0 1rem;
        }

        .highlight {
          color: #2563eb;
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(37,99,235,0.2);
          border-radius: 4px;
          z-index: -1;
        }

        .section-description {
          color: #64748b;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .area-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .area-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: white;
          border-radius: 40px;
          font-size: 0.95rem;
          color: #1e293b;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .area-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,99,235,0.15);
          border-color: #2563eb;
          background: #2563eb;
          color: white;
        }

        .chip-icon {
          font-size: 0.9rem;
          opacity: 0.7;
        }

        .area-chip:hover .chip-icon {
          opacity: 1;
        }

        .area-cta {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 20px 40px -12px rgba(37,99,235,0.2);
          border: 1px solid rgba(37,99,235,0.1);
          transition: transform 0.3s ease;
        }

        .area-cta:hover {
          transform: translateY(-4px);
        }

        .cta-icon-wrapper {
          width: 60px;
          height: 60px;
          background: #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .cta-icon {
          font-size: 1.8rem;
        }

        .cta-text {
          flex: 1;
        }

        .cta-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0 0 4px;
        }

        .cta-description {
          color: #64748b;
          margin: 0;
          font-size: 0.95rem;
        }

        .cta-description strong {
          color: #2563eb;
        }

        .cta-button {
          background: #2563eb;
          color: white;
          text-decoration: none;
          padding: 10px 24px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .cta-button:hover {
          background: #1d4ed8;
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(37,99,235,0.3);
        }

        /* Right Side Styles */
        .service-right {
          animation: slideInRight 0.8s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .map-container {
          background: white;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.2);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .map-header {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eef2f6;
        }

        .map-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .map-icon {
          font-size: 1.5rem;
        }

        .map-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
        }

        .map-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #2563eb;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 40px;
          background: rgba(37,99,235,0.1);
          transition: all 0.3s ease;
        }

        .map-link:hover {
          background: #2563eb;
          color: white;
        }

        .link-icon {
          transition: transform 0.3s ease;
        }

        .map-link:hover .link-icon {
          transform: translate(4px, -4px);
        }

        .map-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
        }

        .map-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .map-stats {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: white;
          border-radius: 16px;
          padding: 1rem;
          display: flex;
          justify-content: space-around;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.95);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2563eb;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        .stat-divider {
          width: 1px;
          background: #e2e8f0;
        }

        .map-footer {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          background: #f8fafc;
          border-top: 1px solid #eef2f6;
        }

        .delivery-badge, .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #1e293b;
        }

        .badge-icon {
          font-size: 1.1rem;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .service-area-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .service-left {
            animation: fadeIn 0.8s ease-out;
          }

          .service-right {
            animation: fadeIn 0.8s ease-out 0.2s both;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .section-title {
            font-size: 2rem;
          }

          .area-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .service-area-section {
            padding: 3rem 1.5rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .area-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .map-wrapper {
            height: 250px;
          }

          .map-stats {
            position: static;
            margin: 1rem;
            width: auto;
          }

          .map-footer {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .service-area-section {
            padding: 2rem 1rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .area-grid {
            grid-template-columns: 1fr;
          }

          .area-cta {
            flex-direction: column;
            text-align: center;
          }

          .cta-button {
            width: 100%;
            text-align: center;
          }

          .map-header {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }

          .stat-value {
            font-size: 1rem;
          }

          .stat-label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  )
}