import { motion } from "framer-motion";

export default function ServiceArea() {
  const areas = [
    'Vadakara Town','Chemmarathur','Keezhil','Kurikkilad',
    'Memunda','Meppayil','Nadakkuthala','Nut Street',
    'Puthur','Siddhasamaj','Vayikkilassery','Chorode',
  ];

  return (
    <section className="service-area-section" id="service-area">
      <div className="service-area-container">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag">📍 SERVICE AREA</span>

          <h2 className="section-title">
            We Deliver Across <span>Vadakara</span>
          </h2>

          <p className="section-description">
            Fast, safe & reliable LPG delivery at your doorstep.
          </p>

          {/* 🔥 Animated Chips */}
          <div className="area-grid">
            {areas.map((area, i) => (
              <motion.span
                key={area}
                className="area-chip"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                📍 {area}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="area-cta"
            whileHover={{ scale: 1.03 }}
          >
            <div>
              <h4>Don’t see your area?</h4>
              <p>Call us — we may still deliver!</p>
            </div>
            <a href="tel:+918078801349" className="cta-btn">
              📞 Call Now
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT MAP */}
        <motion.div
          className="map-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Vadakara,Kerala&output=embed"
            className="map"
          ></iframe>
        </motion.div>

      </div>

      {/* 🔥 STYLES */}
      <style>{`
        .service-area-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #eef2ff, #afd7ff);
        }

        .service-area-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .tag {
          background: #2563eb;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 10px 0;
        }

        .section-title span {
          color: #2563eb;
        }

        .section-description {
          color: #555;
          margin-bottom: 20px;
        }

        .area-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 25px;
        }

        .area-chip {
          padding: 10px;
          border-radius: 20px;
          background: white;
          box-shadow: 0 5px 10px rgba(0,0,0,0.05);
          cursor: pointer;
        }

        .area-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 15px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .cta-btn {
          background: #2563eb;
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
        }

        .map-container {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .map {
          width: 100%;
          height: 350px;
          border: none;
        }

        @media (max-width: 768px) {
          .service-area-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}