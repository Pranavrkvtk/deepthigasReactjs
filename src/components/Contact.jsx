import React from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

.cs-wrap {
  min-height: 100vh;
  padding: 5rem 2rem;
  font-family: 'DM Sans', sans-serif;
  background: #F7F7F5;
  position: relative;
}

/* HEADER */
.cs-header {
  text-align: center;
  margin-bottom: 3rem;
}

.cs-title {
  font-size: 36px;
  font-weight: 800;
  color: #1A1A1A;
  margin-bottom: 6px;
}

.cs-title span { color: #3B6D11; }

.cs-sub {
  font-size: 14px;
  color: #999;
}

/* GRID */
.cs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 1000px;
  margin: auto;
}

/* CARD */
.cs-card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #E5E5E0;
  padding: 36px 32px;
}

/* INPUT */
.cs-field { margin-bottom: 14px; }

.cs-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.cs-input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #E0E0DA;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  color: #1A1A1A;
  background: #FAFAF8;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
  box-sizing: border-box;
}

.cs-input:focus {
  border-color: #3B6D11;
  box-shadow: 0 0 0 3px rgba(59,109,17,0.08);
  background: #fff;
}

/* BUTTON */
.cs-btn {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #3B6D11;
  color: white;
  font-size: 14px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  margin-top: 6px;
  transition: background .2s, transform .15s;
}
.cs-btn:hover { background: #2D5510; }
.cs-btn:active { transform: scale(0.98); }

/* TOAST */
.cs-toast {
  background: #EAF3DE;
  color: #3B6D11;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(59,109,17,0.15);
}

/* INFO ROWS */
.cs-info-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid #F0F0EC;
}
.cs-info-row:first-of-type { padding-top: 0; }
.cs-info-row:last-of-type  { border-bottom: none; }

.cs-info-icon {
  width: 38px; height: 38px;
  border-radius: 10px;
  background: #EAF3DE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  flex-shrink: 0;
}

.cs-info-label {
  font-size: 11px;
  font-weight: 600;
  color: #BBB;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 3px;
}

.cs-info-text {
  font-size: 14px;
  color: #1A1A1A;
  font-weight: 500;
}

/* WHATSAPP */
.cs-wa-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px;
  border-radius: 10px;
  background: #25D366;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  margin-top: 20px;
  transition: opacity .2s;
}
.cs-wa-btn:hover { opacity: 0.88; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .cs-grid { grid-template-columns: 1fr; }
  .cs-card { padding: 28px 20px; }
}
`;

export default function Contact({ form, submitted, onChange, onSubmit }) {
  return (
    <section className="cs-wrap" id="contact">
      <style>{styles}</style>

      <div className="cs-header">
        <h2 className="cs-title">Contact <span>Us</span></h2>
        <p className="cs-sub">We're here to help you anytime</p>
      </div>

      <div className="cs-grid">

        {/* FORM */}
        <div className="cs-card">
          {submitted && (
            <div className="cs-toast">✓ Message sent successfully!</div>
          )}

          <form onSubmit={onSubmit}>
            <div className="cs-field">
              <label className="cs-label">Your Name</label>
              <input
                className="cs-input"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>

            <div className="cs-field">
              <label className="cs-label">Phone Number</label>
              <input
                className="cs-input"
                name="phone"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={onChange}
                required
              />
            </div>

            <div className="cs-field">
              <label className="cs-label">Message</label>
              <textarea
                className="cs-input"
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={onChange}
                rows={4}
              />
            </div>

            <button className="cs-btn" type="submit">Send Message</button>
          </form>
        </div>

        {/* INFO */}
        <div className="cs-card">

          <div className="cs-info-row">
            <div className="cs-info-icon">📍</div>
            <div>
              <p className="cs-info-label">Address</p>
              <p className="cs-info-text">Vatakara, Kozhikode, Kerala</p>
            </div>
          </div>

          <div className="cs-info-row">
            <div className="cs-info-icon">📞</div>
            <div>
              <p className="cs-info-label">Phone</p>
              <p className="cs-info-text">+91 80788 01349</p>
            </div>
          </div>

          <div className="cs-info-row">
            <div className="cs-info-icon">✉️</div>
            <div>
              <p className="cs-info-label">Email</p>
              <p className="cs-info-text">deepthiecostore@gmail.com</p>
            </div>
          </div>

          <div className="cs-info-row">
            <div className="cs-info-icon">🕐</div>
            <div>
              <p className="cs-info-label">Hours</p>
              <p className="cs-info-text">Mon – Sat: 9 AM – 5:30 PM</p>
            </div>
          </div>

          <a
            href="https://wa.me/918078801349"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-wa-btn"
          >
            💬 Chat on WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
}