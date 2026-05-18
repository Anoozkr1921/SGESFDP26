import React from "react";

import r1 from "../../assets/images/r1.jpeg";
import r2 from "../../assets/images/r2.jpeg";
import r3 from "../../assets/images/r3.jpeg";
import r4 from "../../assets/images/r4.jpeg";

const images = [r1, r2, r3, r4];

export default function InauguralMoments() {
  return (
    <section 
      id="inaugural-moments"
      style={{
        padding: "5rem 0",
        background: "linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%)",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div className="container" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span 
          style={{
            display: "inline-block",
            padding: "0.5rem 1.25rem",
            background: "rgba(4, 120, 87, 0.1)",
            color: "#047857",
            borderRadius: "100px",
            fontWeight: 800,
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }}
        >
          Gallery
        </span>
        <h2 
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 900,
            color: "#022c22",
            margin: 0,
            lineHeight: 1.2
          }}
        >
          Some Moments from <br className="d-md-none" />
          <span style={{ color: "#047857", position: "relative" }}>
            The Inaugural Ceremony
            <svg style={{ position: "absolute", bottom: -8, left: 0, width: "100%", height: 12 }} viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0,10 Q50,-5 100,10" stroke="rgba(52, 211, 153, 0.5)" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h2>
      </div>

      <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "1rem 0" }}>
        {/* Left and Right fade overlays for smoother marquee edge */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, bottom: 0,
          width: "8vw",
          background: "linear-gradient(to right, #f2fbf7, transparent)",
          zIndex: 2,
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute",
          top: 0, right: 0, bottom: 0,
          width: "8vw",
          background: "linear-gradient(to left, #f1faf6, transparent)",
          zIndex: 2,
          pointerEvents: "none"
        }} />

        <div className="inaugural-marquee-container" style={{ display: "flex", width: "max-content", gap: "2rem", paddingLeft: "2rem" }}>
          {[0, 1, 2, 3].map(group => (
            <div key={group} style={{ display: "flex", gap: "2rem" }}>
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  style={{
                    width: "clamp(280px, 25vw, 400px)",
                    aspectRatio: "4/3",
                    borderRadius: "24px",
                    overflow: "hidden",
                    flexShrink: 0,
                    boxShadow: "0 15px 35px rgba(2, 44, 34, 0.1)",
                    border: "6px solid #ffffff",
                    position: "relative"
                  }}
                >
                  <img 
                    src={img} 
                    alt={`Inaugural Moment ${idx + 1}`} 
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .inaugural-marquee-container {
          animation: inaugural-marquee 25s linear infinite;
        }
        .inaugural-marquee-container:hover {
          animation-play-state: paused;
        }
        @keyframes inaugural-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-25% - 0.5rem)); }
        }
      `}</style>
    </section>
  );
}
