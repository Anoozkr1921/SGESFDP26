import React from 'react';
import ksImg from "../../assets/images/ks.jpeg";

export default function KisanSathiLaunch() {
  return (
    <section id="kisan-sathi" style={{
      position: 'relative',
      padding: '100px 2rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      overflow: 'hidden'
    }}>
      {/* Background animations */}
      <div className="ks-glow ks-glow-1" />
      <div className="ks-glow ks-glow-2" />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.3), transparent)'
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '5rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }} className="ks-grid">

        {/* Left: Image */}
        <div className="ks-img-container">
          <div className="ks-img-wrapper">
            <img src={ksImg} alt="Kisan Sathi App Launch" className="ks-image" />
            <div className="ks-reflection" />
          </div>
          <div className="ks-img-backdrop" />
        </div>

        {/* Right: Text */}
        <div className="ks-text-container">
          <div className="ks-badge">
            <span className="ks-pulse-dot"></span>
            SPECIAL ANNOUNCEMENT
          </div>

          <h2 className="ks-title">
            We are launching <br />
            <span className="ks-highlight">Kisan Sathi App</span>
          </h2>

          <p className="ks-subtitle">
            <strong style={{ color: '#047857' }}>On the Valedictory Function of our FDP (Friday, 22nd May, 2026, Time- 2:00 pm).</strong><br /><br />
            Join us in witnessing the next step towards sustainable digital solutions for agriculture. Empowering farmers with smart technology.
          </p>
        </div>
      </div>

      <style>{`
        .ks-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(52,211,153,0.15) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          filter: blur(50px);
          animation: float-ks 10s infinite alternate ease-in-out;
          z-index: 1;
          pointer-events: none;
        }
        .ks-glow-1 {
          top: -150px;
          left: -150px;
        }
        .ks-glow-2 {
          bottom: -150px;
          right: -150px;
          background: radial-gradient(circle, rgba(4,120,87,0.1) 0%, rgba(255,255,255,0) 70%);
          animation-delay: -5s;
        }
        
        .ks-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(52, 211, 153, 0.15);
          color: #047857;
          padding: 0.6rem 1.4rem;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
          border: 1px solid rgba(52, 211, 153, 0.4);
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(52,211,153,0.1);
        }

        .ks-pulse-dot {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .ks-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 4.5vw, 4rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.15;
          margin-bottom: 1.75rem;
          letter-spacing: -0.02em;
        }
        
        .ks-highlight {
          background: linear-gradient(90deg, #059669, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          position: relative;
        }
        
        .ks-highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(52,211,153,0.3);
          z-index: -1;
          border-radius: 4px;
        }

        .ks-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.2rem;
          color: #475569;
          line-height: 1.7;
          font-weight: 500;
          max-width: 540px;
        }

        .ks-img-container {
          position: relative;
          perspective: 1000px;
        }

        .ks-img-wrapper {
          position: relative;
          z-index: 2;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.2);
          border: 8px solid white;
          transform: rotateY(5deg) rotateX(5deg);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          animation: float-image 6s infinite ease-in-out;
        }

        .ks-img-container:hover .ks-img-wrapper {
          transform: rotateY(0deg) rotateX(0deg) scale(1.02);
          box-shadow: 0 40px 80px -20px rgba(4, 120, 87, 0.3);
        }

        .ks-image {
          width: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .ks-img-container:hover .ks-image {
          transform: scale(1.05);
        }

        .ks-reflection {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg);
          animation: shine 4s infinite;
        }

        .ks-img-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -45%);
          width: 90%;
          height: 90%;
          background: linear-gradient(135deg, #10b981, #047857);
          filter: blur(40px);
          border-radius: 50%;
          z-index: 1;
          opacity: 0.3;
          transition: opacity 0.6s ease;
        }
        
        .ks-img-container:hover .ks-img-backdrop {
          opacity: 0.5;
        }

        @keyframes float-ks {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 60px); }
        }

        @keyframes float-image {
          0% { transform: rotateY(5deg) rotateX(5deg) translateY(0px); }
          50% { transform: rotateY(5deg) rotateX(5deg) translateY(-15px); }
          100% { transform: rotateY(5deg) rotateX(5deg) translateY(0px); }
        }

        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        @media (max-width: 992px) {
          .ks-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .ks-subtitle {
            margin: 0 auto;
          }
          .ks-img-wrapper {
            max-width: 600px;
            margin: 0 auto;
            transform: none !important;
            animation: none !important;
          }
          .ks-img-container:hover .ks-img-wrapper {
            transform: scale(1.02) !important;
          }
          .ks-highlight::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
