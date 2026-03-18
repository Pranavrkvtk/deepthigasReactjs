import React from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  .ab-wrap {
    font-family: 'DM Sans', sans-serif;
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  /* Background decorations */
  .ab-wrap::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -50px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(59,109,17,0.03) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .ab-wrap::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -50px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(59,109,17,0.03) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .ab-tag {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #3B6D11;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 12px;
    animation: slideDown 0.6s ease-out;
  }

  .ab-tag::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #3B6D11, #97C459);
    border-radius: 2px;
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

  .ab-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .ab-title-wrapper {
    flex: 1;
  }

  .ab-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 0.75rem;
    line-height: 1.2;
    animation: slideUp 0.6s ease-out 0.2s both;
  }

  .ab-title em {
    color: #3B6D11;
    font-style: italic;
    position: relative;
    display: inline-block;
  }

  .ab-title em::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(59,109,17,0.15);
    border-radius: 4px;
    z-index: -1;
  }

  .ab-subtitle {
    font-size: 16px;
    color: #3B6D11;
    font-weight: 500;
    margin: 0;
    letter-spacing: 0.02em;
    background: rgba(59,109,17,0.08);
    padding: 8px 20px;
    border-radius: 40px;
    display: inline-block;
    border: 1px solid rgba(59,109,17,0.15);
    animation: slideUp 0.6s ease-out 0.3s both;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ab-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: stretch;
    margin-bottom: 4rem;
    animation: fadeIn 0.8s ease-out 0.4s both;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 700px) {
    .ab-grid { grid-template-columns: 1fr; gap: 2rem; }
  }

  /* LEFT: TEXT */
  .ab-body {
    background: white;
    padding: 2.5rem;
    border-radius: 30px;
    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .ab-body:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 50px -20px rgba(59,109,17,0.15);
  }

  .ab-body p {
    font-size: 16px;
    color: #444;
    line-height: 1.9;
    margin: 0 0 1.25rem;
    position: relative;
    padding-left: 20px;
  }

  .ab-body p::before {
    content: '•';
    color: #3B6D11;
    font-weight: bold;
    position: absolute;
    left: 0;
    font-size: 20px;
  }

  .ab-body p:last-of-type {
    margin-bottom: 1.5rem;
  }

  .ab-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #3B6D11, #97C459);
    color: white;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 40px;
    letter-spacing: 0.04em;
    box-shadow: 0 10px 20px -8px rgba(59,109,17,0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .ab-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 25px -8px rgba(59,109,17,0.4);
  }

  .ab-badge::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    flex-shrink: 0;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
  }

  /* RIGHT: STATS */
  .ab-visual {
    background: linear-gradient(135deg, #1a2e12 0%, #2a4518 100%);
    border-radius: 30px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 30px 50px -20px rgba(0,0,0,0.3);
  }

  .ab-visual::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(151,196,89,0.1);
    animation: float 8s ease-in-out infinite;
  }

  .ab-visual::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(151,196,89,0.08);
    animation: float 6s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-10px, 10px) scale(1.05); }
  }

  .ab-stat {
    display: flex;
    align-items: center;
    gap: 20px;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .ab-stat:hover {
    transform: translateX(5px);
  }

  .ab-stat-icon {
    width: 54px;
    height: 54px;
    border-radius: 16px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s ease;
  }

  .ab-stat:hover .ab-stat-icon {
    background: rgba(151,196,89,0.2);
    transform: scale(1.1) rotate(5deg);
    border-color: rgba(151,196,89,0.3);
  }

  .ab-stat-icon svg {
    width: 24px;
    height: 24px;
    stroke: #97C459;
    fill: none;
    stroke-width: 1.8;
    transition: transform 0.3s ease;
  }

  .ab-stat:hover .ab-stat-icon svg {
    transform: scale(1.1);
  }

  .ab-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    line-height: 1;
    margin: 0 0 4px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }

  .ab-stat-label {
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    margin: 0;
    letter-spacing: 0.02em;
    font-weight: 500;
  }

  .ab-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    margin: 0.5rem 0;
  }

  /* BOTTOM CARDS */
  .ab-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    animation: slideUp 0.8s ease-out 0.6s both;
  }

  @media (max-width: 700px) {
    .ab-cards { grid-template-columns: 1fr; }
  }

  .ab-card {
    background: white;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 24px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 0 15px 30px -15px rgba(0,0,0,0.1);
  }

  .ab-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 40px -15px rgba(59,109,17,0.2);
    border-color: rgba(59,109,17,0.2);
  }

  .ab-card-accent {
    width: 50px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #3B6D11, #97C459);
    margin-bottom: 1.25rem;
    transition: width 0.3s ease;
  }

  .ab-card:hover .ab-card-accent {
    width: 80px;
  }

  .ab-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 0.75rem;
    position: relative;
  }

  .ab-card h3::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3B6D11;
    transition: width 0.3s ease;
  }

  .ab-card:hover h3::after {
    width: 40px;
  }

  .ab-card p {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
    margin: 0;
  }

  .ab-card-icon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: #EAF3DE;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .ab-card:hover .ab-card-icon {
    background: #3B6D11;
    transform: scale(1.1) rotate(5deg);
  }

  .ab-card-icon svg {
    width: 22px;
    height: 22px;
    stroke: #3B6D11;
    fill: none;
    stroke-width: 2;
    transition: all 0.3s ease;
  }

  .ab-card:hover .ab-card-icon svg {
    stroke: white;
  }

  /* Floating animation for cards */
  .ab-card:nth-child(1) { animation: cardFloat 4s ease-in-out infinite; }
  .ab-card:nth-child(2) { animation: cardFloat 4s ease-in-out infinite 0.5s; }
  .ab-card:nth-child(3) { animation: cardFloat 4s ease-in-out infinite 1s; }

  @keyframes cardFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .ab-wrap {
      padding: 4rem 1.5rem;
    }

    .ab-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .ab-body {
      padding: 2rem;
    }

    .ab-body p {
      font-size: 15px;
      padding-left: 15px;
    }

    .ab-visual {
      padding: 2rem;
    }

    .ab-stat-num {
      font-size: 1.8rem;
    }

    .ab-card {
      padding: 1.75rem;
    }
  }

  @media (max-width: 480px) {
    .ab-wrap {
      padding: 3rem 1rem;
    }

    .ab-title {
      font-size: 2rem;
    }

    .ab-subtitle {
      font-size: 14px;
      padding: 6px 16px;
    }

    .ab-body {
      padding: 1.5rem;
    }

    .ab-body p {
      font-size: 14px;
      line-height: 1.7;
    }

    .ab-stat {
      gap: 12px;
    }

    .ab-stat-icon {
      width: 44px;
      height: 44px;
    }

    .ab-stat-icon svg {
      width: 20px;
      height: 20px;
    }

    .ab-stat-num {
      font-size: 1.5rem;
    }

    .ab-stat-label {
      font-size: 12px;
    }

    .ab-card {
      padding: 1.5rem;
    }

    .ab-card h3 {
      font-size: 1.1rem;
    }

    .ab-card p {
      font-size: 13px;
    }

    .ab-card-icon {
      width: 40px;
      height: 40px;
      top: 1.25rem;
      right: 1.25rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <style>{styles}</style>

      <section className="ab-wrap" id="about">
        <div className="ab-header">
          <div className="ab-title-wrapper">
            <p className="ab-tag">Who We Are</p>
            <h2 className="ab-title">
              About <em>Deepthi</em> Gas Agencies
            </h2>
          </div>
          <p className="ab-subtitle">
            40 വർഷത്തിലധികമായി വടകരയിലെ കുടുംബങ്ങളുടെ വിശ്വാസം നേടിയ സേവനം
          </p>
        </div>

        <div className="ab-grid">

          {/* LEFT: TEXT */}
          <div className="ab-body">
            <p>
              ദീപ്തി ഗ്യാസ് ഏജൻസീസ് ഒരു വിശ്വസനീയമായ LPG ഡീലർഷിപ്പാണ്. വീടുകൾക്കും
              വ്യാപാര സ്ഥാപനങ്ങൾക്കും ബിസിനസുകൾക്കും സുരക്ഷിതവും സമയബന്ധിതവുമായ
              പാചകവാതക സേവനം നൽകുന്നതിൽ ഞങ്ങൾ പ്രതിബദ്ധരാണ്.
            </p>
            <p>
              സുരക്ഷ, വ്യക്തത, വേഗതയുള്ള സേവനം എന്നിവയ്ക്ക് ഞങ്ങൾ മുൻഗണന നൽകുന്നു.
              LPG കൈകാര്യം ചെയ്യൽ, ഇൻസ്റ്റലേഷൻ മാർഗനിർദ്ദേശം, സിലിണ്ടർ ഡെലിവറി
              എന്നിവയിൽ ഞങ്ങളുടെ പരിചയസമ്പന്നമായ ടീം എല്ലാ സുരക്ഷാ മാനദണ്ഡങ്ങളും
              പാലിക്കുന്നു.
            </p>
            <p>
              HP Gas LPG സ്റ്റൗവുകൾ, സുരക്ഷാ ഉപകരണങ്ങൾ, പരിസ്ഥിതി സൗഹൃദ
              നവീകരണങ്ങൾ, നാചുറൽ ഡിഗ്രീസറുകൾ എന്നിവയും ഞങ്ങൾ നൽകുന്നു.
            </p>
            <span className="ab-badge">HP Gas Dealer since 1984 · Vatakara</span>
          </div>

          {/* RIGHT: STATS */}
          <div className="ab-visual">
            <div className="ab-stat">
              <div className="ab-stat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <p className="ab-stat-num">40+</p>
                <p className="ab-stat-label">Years of trusted service</p>
              </div>
            </div>

            <div className="ab-divider" />

            <div className="ab-stat">
              <div className="ab-stat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div>
                <p className="ab-stat-num">10,000+</p>
                <p className="ab-stat-label">Happy customers served</p>
              </div>
            </div>

            <div className="ab-divider" />

            <div className="ab-stat">
              <div className="ab-stat-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <p className="ab-stat-num">Same Day</p>
                <p className="ab-stat-label">Delivery on most orders</p>
              </div>
            </div>

            <div className="ab-divider" />

            <div className="ab-stat">
              <div className="ab-stat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <p className="ab-stat-num">100%</p>
                <p className="ab-stat-label">Safety certified cylinders</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="ab-cards">
          <div className="ab-card">
            <div className="ab-card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="ab-card-accent" />
            <h3>സുരക്ഷയാണ് പ്രധാനം</h3>
            <p>
              എല്ലാ സിലിണ്ടറുകളും സർട്ടിഫൈഡ് ടെക്നീഷ്യന്മാർ പരിശോധിക്കുകയും
              പരിശീലനം നേടിയ ഡ്രൈവർമാർ സുരക്ഷിതമായി വിതരണം ചെയ്യുകയും ചെയ്യുന്നു.
            </p>
          </div>

          <div className="ab-card">
            <div className="ab-card-icon">
              <svg viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
              </svg>
            </div>
            <div className="ab-card-accent" />
            <h3>വിലയിൽ വ്യക്തത</h3>
            <p>
              മറഞ്ഞ ചിലവുകളൊന്നുമില്ല. മുൻകൂട്ടി വില അറിയാം, ഓൺലൈൻ വഴിയോ
              ഡെലിവറിയിൽ തന്നെ പണമടയ്ക്കാം.
            </p>
          </div>

          <div className="ab-card">
            <div className="ab-card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.07 2.94 2 2 0 012.03 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="ab-card-accent" />
            <h3>വിശ്വസനീയമായ പിന്തുണ</h3>
            <p>
              ഓർഡറുകൾക്കും അടിയന്തര സഹായങ്ങൾക്കുമായി ഞങ്ങളുടെ കസ്റ്റമർ കെയർ
              ടീം ആഴ്ചയിൽ 7 ദിവസവും ലഭ്യമാണ്.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}