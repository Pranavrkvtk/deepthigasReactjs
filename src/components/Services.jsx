export default function Services({ services }) {
  // Default services if none provided
  const defaultServices = [
    {
      icon: "🔥",
      title: "Gas Cylinder Delivery",
      description: "Fast LPG delivery to your home"
    },
    {
      icon: "🍳",
      title: "Gas Stove",
      description: "High quality gas stoves"
    },
    {
      icon: "🔧",
      title: "Installation",
      description: "Safe and professional setup"
    },
    {
      icon: "📝",
      title: "New Domestic Connection",
      description: "Get a new HP Gas LPG connection with easy documentation. We guide you through the entire process."
    },
    {
      icon: "🔄",
      title: "Cylinder Refill Booking",
      description: "Book your refill by phone or WhatsApp for doorstep delivery. Fast, reliable, and on schedule."
    },
    {
      icon: "🏢",
      title: "Commercial LPG Supply",
      description: "Bulk LPG solutions for hotels, restaurants, and businesses. Reliable supply for your operations."
    },
    {
      icon: "⚡",
      title: "Double Bottle Connection",
      description: "Never run out — get two cylinders for uninterrupted supply at home or work."
    },
    {
      icon: "🚛",
      title: "Transfer of Connection",
      description: "Moving to Vadakara? Transfer your existing LPG connection to us seamlessly."
    },
    {
      icon: "🛡️",
      title: "Safety Inspection",
      description: "Free safety checks for regulators, hoses, and cylinder condition. Your family's safety is our priority."
    }
  ];

  const serviceList = services || defaultServices;

  return (
    <section className="section" id="services">
      <h2>Our Services</h2>
      <p className="section__subtitle">
        Everything you need for hassle-free cooking gas management.
      </p>
      
      {/* Service Cards */}
      <div className="grid">
        {serviceList.map((service, index) => (
          <article key={index} className="card">
            <div className="card__icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      {/* Gallery Cards */}
      <div className="gallery-cards">
        {["/img3.jpeg", "/img4.jpeg", "/img5.jpeg", "/img6.jpeg", "/img7.jpeg"].map(
          (img, index) => (
            <div key={index} className="gallery-card">
              <div className="gallery-image-wrapper">
                <img src={img} alt={`DeepthiGas ${index + 1}`} />
                <div className="gallery-overlay">
                  <span className="gallery-label">
                    {index === 0 && "New Connection"}
                    {index === 1 && "Refill Booking"}
                    {index === 2 && "Commercial"}
                    {index === 3 && "Double Bottle"}
                    {index === 4 && "Safety Check"}
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <style>{`
        .section {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        h2 {
          font-size: 2.2rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
          text-align: center;
          font-weight: 700;
        }

        .section__subtitle {
          text-align: center;
          color: #64748b;
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(37,99,235,0.15);
          border-color: rgba(37,99,235,0.2);
        }

        .card__icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .card h3 {
          color: #1e293b;
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .card p {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }

        .gallery-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .gallery-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(37,99,235,0.2);
        }

        .gallery-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .gallery-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .gallery-card:hover .gallery-image-wrapper img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(37,99,235,0.95), rgba(37,99,235,0.4));
          padding: 1.5rem 1rem 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-label {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .section {
            padding: 3rem 1.5rem;
          }

          h2 {
            font-size: 1.8rem;
          }

          .section__subtitle {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .card {
            padding: 1.5rem;
          }

          .card h3 {
            font-size: 1.2rem;
          }

          .gallery-cards {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 2rem 1rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .card {
            padding: 1.25rem;
          }

          .card__icon {
            font-size: 2.5rem;
          }

          .card p {
            font-size: 0.9rem;
          }

          .gallery-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }

          .gallery-label {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}