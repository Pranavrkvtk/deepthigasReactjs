export default function Services({ services }) {
    const defaultServices = [
        { icon: "🔥", title: "Gas Cylinder Delivery", description: "Fast LPG delivery to your home" },
        { icon: "🍳", title: "Gas Stove", description: "High quality gas stoves" },
        { icon: "🔧", title: "Installation", description: "Safe and professional setup" },
        { icon: "📝", title: "New Domestic Connection", description: "Get a new HP Gas LPG connection easily." },
        { icon: "🔄", title: "Cylinder Refill Booking", description: "Book refill easily via phone or WhatsApp." },
        { icon: "🏢", title: "Commercial LPG Supply", description: "Bulk LPG for hotels & businesses." },
        { icon: "⚡", title: "Double Bottle Connection", description: "Uninterrupted gas supply." },
        { icon: "🚛", title: "Transfer of Connection", description: "Seamless LPG transfer service." },
        { icon: "🛡️", title: "Safety Inspection", description: "Free safety checks for your home." }
    ];

    const serviceList = services || defaultServices;

    return (
        <section className="section" id="services">
            <h2>Our Services</h2>
            <p className="section__subtitle">
                Everything you need for hassle-free cooking gas management.
            </p>

            {/* SERVICE CARDS */}
            <div className="grid">
                {serviceList.map((service, index) => (
                    <article key={index} className="card">
                        <div className="card__icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                ))}
            </div>

            {/* GALLERY */}
            <div className="gallery-cards">
                {["/img3.jpeg", "/img4.jpeg", "/img5.jpeg", "/img6.jpeg", "/img7.jpeg"].map(
                    (img, index) => (
                        <div key={index} className="gallery-card">
                            <div className="gallery-image-wrapper">
                                <img src={img} alt={`DeepthiGas ${index + 1}`} />

                            </div>
                        </div>
                    )
                )}
            </div>

            {/* CLEAN CSS (NO ZOOM / NO HOVER ANIMATION) */}
            <style>{`
        .section {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: auto;
        }

        h2 {
          text-align: center;
          font-size: 2rem;
        }

        .section__subtitle {
          text-align: center;
          margin-bottom: 2rem;
          color: #64748b;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

   .card {
  background: white;
  padding: 2.5rem;              /* 🔥 increased */
  border-radius: 20px;
  text-align: center;

  box-shadow: 0 15px 35px rgba(0,0,0,0.12);

  min-height: 260px;            /* 🔥 bigger height */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

        .card__icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .card h3 {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }

        .card p {
          font-size: 0.9rem;
          color: #555;
        }

        /* GALLERY */
        .gallery-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .gallery-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .gallery-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
        }

     
.gallery-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;   /* ✅ full image visible */
  background: #fff;      /* optional (nice clean background) */
}
        /* ALWAYS VISIBLE LABEL */
        .gallery-overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 8px;
          text-align: center;
        }

        .gallery-label {
          font-size: 0.8rem;
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .gallery-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
        </section>
    );
}