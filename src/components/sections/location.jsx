export default function Location() {
  const infoCards = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Address",
      lines: [
        "Birla Institute of Technology, Mesra",
        "Ranchi – 835215, Jharkhand, India"
      ]
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: "Contact",
      lines: [
        "+91 651 227 5444 (Institute)",
        "+91-9471301045 (Dr. Gauri Shanker Gupta)"
      ]
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: "Office Hours",
      lines: [
        "Mon–Fri: 9:00 AM – 5:30 PM",
        "FDP Dates: 8–12 June 2026"
      ]
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7edfa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      ),
      label: "Coordinates",
      lines: ["23.4123° N, 85.4399° E"],
      link: {
        href: "https://maps.app.goo.gl/2S5AcZmtUoDyAvMF9",
        text: "Open in Google Maps →"
      }
    }
  ];

  return (
    <section id="location" className="loc-section">
      {/* Decorative background elements */}
      <div className="loc-bg-glow loc-bg-glow-1" />
      <div className="loc-bg-glow loc-bg-glow-2" />
      <div className="loc-bg-pattern" />

      <div className="loc-inner">
        {/* Header */}
        <div className="loc-header">
          <div className="tag light">How to Reach Us</div>
          <h2 className="loc-title">
            BIT Mesra — <em>Location & Directions</em>
          </h2>
          <div className="rule" style={{ background: "linear-gradient(to right, #7edfa8, #fcd34d)" }} />
          <p className="loc-subtitle">
            BIT Mesra is located in Mesra, Ranchi, Jharkhand on a sprawling 780-acre green campus — approximately 16 km from Ranchi city centre and 10 km from Birsa Munda Airport.
          </p>
        </div>

        {/* Content Grid */}
        <div className="loc-grid">
          {/* Info Cards */}
          <div className="loc-cards">
            {infoCards.map((card, idx) => (
              <div className="loc-card" key={idx}>
                <div className="loc-card-icon">{card.icon}</div>
                <div className="loc-card-body">
                  <div className="loc-card-label">{card.label}</div>
                  {card.lines.map((line, i) => (
                    <div className="loc-card-value" key={i}>{line}</div>
                  ))}
                  {card.link && (
                    <a
                      href={card.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="loc-card-link"
                    >
                      {card.link.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="loc-map-wrap">
            <div className="loc-map-frame">
              <iframe
                title="BIT Mesra Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.40,23.39,85.47,23.43&layer=mapnik&marker=23.4123,85.4399"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/2S5AcZmtUoDyAvMF9"
              target="_blank"
              rel="noopener noreferrer"
              className="loc-map-btn"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 40px rgba(52,211,153,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(52,211,153,0.25)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Travel Tips */}
        <div className="loc-tips">
          <div className="loc-tip">
            <div className="loc-tip-icon">✈️</div>
            <div>
              <div className="loc-tip-title">By Air</div>
              <div className="loc-tip-desc">Birsa Munda Airport (IXR) — 10 km away</div>
            </div>
          </div>
          <div className="loc-tip">
            <div className="loc-tip-icon">🚆</div>
            <div>
              <div className="loc-tip-title">By Rail</div>
              <div className="loc-tip-desc">Ranchi Junction — 16 km via NH-23</div>
            </div>
          </div>
          <div className="loc-tip">
            <div className="loc-tip-icon">🚗</div>
            <div>
              <div className="loc-tip-title">By Road</div>
              <div className="loc-tip-desc">Well-connected via NH-23 & State Highways</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .loc-section {
          position: relative;
          padding: 96px 2rem;
          overflow: hidden;
          background-image:
            linear-gradient(170deg, rgba(11,61,34,.96) 0%, rgba(8,42,22,.98) 60%, rgba(6,30,16,.99) 100%),
            url("https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80");
          background-size: auto, cover;
          background-position: 0 0, center;
          background-repeat: no-repeat, no-repeat;
          color: #fff;
        }

        .loc-bg-pattern {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='44' viewBox='0 0 80 44' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='2' y='3' width='35' height='17' rx='1' fill='none' stroke='rgba(126%2C223%2C168%2C0.04)' stroke-width='0.8'/%3E%3Crect x='43' y='3' width='35' height='17' rx='1' fill='none' stroke='rgba(126%2C223%2C168%2C0.04)' stroke-width='0.8'/%3E%3Crect x='2' y='24' width='35' height='17' rx='1' fill='none' stroke='rgba(126%2C223%2C168%2C0.04)' stroke-width='0.8'/%3E%3Crect x='43' y='24' width='35' height='17' rx='1' fill='none' stroke='rgba(126%2C223%2C168%2C0.04)' stroke-width='0.8'/%3E%3C/svg%3E");
          background-size: 80px 44px;
        }

        .loc-bg-glow {
          position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
        }
        .loc-bg-glow-1 {
          top: -120px; right: -80px; width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(24,163,82,.15) 0%, transparent 65%);
        }
        .loc-bg-glow-2 {
          bottom: -100px; left: -60px; width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(232,152,10,.08) 0%, transparent 60%);
        }

        .loc-inner {
          max-width: 1280px; margin: 0 auto; position: relative; z-index: 1;
        }

        .loc-header {
          margin-bottom: 3.5rem;
        }

        .loc-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .loc-title em {
          font-style: italic;
          color: #7edfa8;
        }

        .loc-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,.65);
          line-height: 1.75;
          max-width: 520px;
          margin-top: 1rem;
          font-weight: 500;
        }

        /* Grid Layout */
        .loc-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .loc-grid { grid-template-columns: 1fr; }
        }

        /* Info Cards */
        .loc-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .loc-card {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          padding: 1.35rem 1.5rem;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(126,223,168,.12);
          border-radius: 14px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(6px);
        }
        .loc-card:hover {
          background: rgba(255,255,255,.07);
          border-color: rgba(126,223,168,.28);
          transform: translateX(6px);
          box-shadow: 0 8px 32px rgba(24,163,82,.12);
        }

        .loc-card-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(126,223,168,.08);
          border: 1.5px solid rgba(126,223,168,.18);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .loc-card-label {
          font-size: 0.68rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #34d399;
          margin-bottom: 0.4rem;
        }

        .loc-card-value {
          font-size: 0.92rem;
          color: rgba(255,255,255,.8);
          line-height: 1.55;
          font-weight: 500;
        }

        .loc-card-link {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: #34d399;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.2s;
        }
        .loc-card-link:hover {
          color: #7edfa8;
          text-decoration: underline;
        }

        /* Map */
        .loc-map-wrap {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .loc-map-frame {
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(126,223,168,.18);
          height: 380px;
          box-shadow: 0 20px 48px rgba(0,0,0,.25);
          position: relative;
        }
        .loc-map-frame iframe {
          width: 100%;
          height: 100%;
          display: block;
        }

        .loc-map-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #047857, #059669);
          color: #fff;
          text-decoration: none;
          padding: 0.85rem 1.75rem;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.25s;
          box-shadow: 0 8px 28px rgba(52,211,153,0.25);
          align-self: flex-start;
        }
        .loc-map-btn:hover {
          color: #fff;
        }

        /* Travel Tips */
        .loc-tips {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 3rem;
        }
        @media (max-width: 700px) {
          .loc-tips { grid-template-columns: 1fr; }
        }

        .loc-tip {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(126,223,168,.1);
          border-radius: 14px;
          transition: all 0.28s;
        }
        .loc-tip:hover {
          background: rgba(255,255,255,.06);
          border-color: rgba(126,223,168,.22);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(24,163,82,.1);
        }

        .loc-tip-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(11,61,34,.7), rgba(20,92,51,.5));
          border: 1.5px solid rgba(126,223,168,.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.35rem;
          flex-shrink: 0;
        }

        .loc-tip-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 0.2rem;
        }

        .loc-tip-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,.55);
          line-height: 1.5;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
