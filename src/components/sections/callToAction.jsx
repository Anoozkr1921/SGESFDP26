import { useState } from "react";
import {
  IcoMail,
  IcoPhone,
  IcoBuilding,
  IcoCalendar
} from "../icons";

import gssirImage from "../../assets/images/gssir2.png";

export default function CallToAction() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <section id="register" className="sec-white" style={{ padding: "96px 0" }}>
      <div className="sec" style={{ paddingTop: 0, paddingBottom: 0 }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="tag" style={{ justifyContent: "center" }}>Join Us</div>
          <h2 className="sec-h" style={{ marginBottom: "0.5rem" }}>Register for the Workshop</h2>
          <div className="rule" style={{ margin: "1rem auto 0" }} />
          <p style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 620, margin: "1.5rem auto 0", fontWeight: 500 }}>
            Seats are limited. Registration deadline is <strong>15 May 2026</strong>. <br />
            Open to AICTE-approved Faculty, PhD/PG Scholars, and Industry Professionals.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 420px",
          alignItems: "stretch",
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 24,
          boxShadow: "0 12px 48px rgba(0,0,0,0.04)",
          overflow: "hidden",
          maxWidth: 1160,
          margin: "0 auto"
        }} className="reg-wrap">

          {/* Left Column: Info Grid */}
          <div style={{ padding: "3.5rem" }} className="reg-left">
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "#022c22", marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-block", width: 8, height: 8, background: "#047857", borderRadius: "50%" }} />
              Contact & Venue Information
            </h3>

            <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="reg-info-container">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                <img
                  src={gssirImage}
                  alt="Dr. Gauri Shanker Gupta"
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #fff",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                  }}
                />
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#022c22", textAlign: "center", letterSpacing: "0.02em" }}>
                  Dr. Gauri Shanker Gupta
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }} className="reg-info-grid">
                {[
                  { IcoC: IcoMail, lbl: "Coordinators", val: "gaurishankergupta@bitmesra.ac.in" },
                  { IcoC: IcoPhone, lbl: "Phone", val: "+91-9471301045" },
                  { IcoC: IcoBuilding, lbl: "Department", val: "Electrical & Electronics Engineering\nBIT Mesra, Ranchi" },
                  { IcoC: IcoCalendar, lbl: "Important Dates", val: "Reg. closes: 15 May 2026\nConfirmation: 17 May" },
                ].map(r => (
                  <div key={r.lbl} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "#ecfdf5", border: "1px solid #d1fae5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#047857" }}>
                      <r.IcoC size={20} color="currentColor" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.68rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.14em", color: "#047857", marginBottom: "0.4rem" }}>{r.lbl}</div>
                      <div style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.6, whiteSpace: "pre-line", fontWeight: 500 }}>{r.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: CTA Box */}
          <div style={{
            background: "linear-gradient(150deg, #022c22 0%, #064e3b 100%)",
            padding: "3.5rem 3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Background Pattern */}
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, background: "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />

            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>
              Ready to <br /><span style={{ color: "#34d399" }}>Participate?</span>
            </h3>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "2.5rem", position: "relative", zIndex: 1, fontWeight: 500 }}>
              Complete the registration process and payment via the official Google Form below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative", zIndex: 1 }}>
              <a
                href="https://forms.gle/FY8yWq8d8FsJ9jG99"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  background: "#34d399",
                  color: "#022c22",
                  textDecoration: "none",
                  padding: "1rem 2rem",
                  borderRadius: 12,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  transition: "all 0.25s",
                  boxShadow: "0 8px 32px rgba(52,211,153,0.25)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(52,211,153,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(52,211,153,0.25)"; }}
              >
                Register <span style={{ fontSize: "1.4rem", lineHeight: 0.5 }}>↗</span>
              </a>

              <button
                onClick={() => setShowPaymentModal(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  background: "transparent",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "1rem 2rem",
                  borderRadius: 12,
                  border: "2px solid rgba(255,255,255,0.3)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  transition: "all 0.25s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.transform = "translateY(-2px)"; 
                  e.currentTarget.style.border = "2px solid rgba(255,255,255,0.8)"; 
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.transform = "none"; 
                  e.currentTarget.style.border = "2px solid rgba(255,255,255,0.3)"; 
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Payment Procedure <span style={{ fontSize: "1.1rem", lineHeight: 0.5 }}>ℹ</span>
              </button>
            </div>

            <div style={{ marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem", position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#34d399", fontSize: "0.5rem" }}>●</span> REGISTRATION FEE: ₹118 (Incl. GST)
              </div>
            </div>
          </div>

        </div>

        <style>{`
          @media (max-width: 960px) {
            .reg-wrap {
              grid-template-columns: 1fr !important;
              max-width: 600px !important;
            }
            .reg-info-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .reg-left {
              padding: 2.5rem !important;
            }
          }
        `}</style>
      </div>

      {/* Payment Procedure Modal */}
      {showPaymentModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, 
          zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0,0,0,0.6)", padding: "1rem"
        }}>
          <div style={{
            background: "#fff", borderRadius: 20, padding: "2.5rem", maxWidth: 600, width: "100%",
            position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
          }}>
            <button 
              onClick={() => setShowPaymentModal(false)}
              style={{
                position: "absolute", top: 20, right: 20, background: "none", border: "none",
                fontSize: "1.5rem", cursor: "pointer", color: "#64748b"
              }}
            >
              ×
            </button>
            
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 900, color: "#022c22", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 12, height: 12, background: "#047857", borderRadius: "50%" }} />
              Payment Procedure
            </h3>
            
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.5rem" }}>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#475569", fontSize: "0.95rem", lineHeight: 1.8, fontWeight: 500, listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li style={{ listStyleType: "disc" }}>Visit the SBI payment site.</li>
                <li style={{ listStyleType: "disc" }}>Search for <strong>"Birla Institute of Technology Jharkhand"</strong>.</li>
                <li style={{ listStyleType: "disc" }}>Select <strong>"SGES for FDP-2026"</strong> as category.</li>
                <li style={{ listStyleType: "disc" }}>Enter your details.</li>
                <li style={{ listStyleType: "disc" }}>Select <strong>"GST required"</strong> as <strong>"NO"</strong>.</li>
                <li style={{ listStyleType: "disc" }}>Check the Terms & Condition box and enter the Captcha to proceed.</li>
                <li style={{ listStyleType: "disc" }}>Verify and Complete the payment process through any of the mentioned medium.</li>
                <li style={{ listStyleType: "disc" }}>Print the receipt.</li>
              </ul>
            </div>
            
            <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-end" }}>
              <button 
                onClick={() => setShowPaymentModal(false)}
                style={{
                  background: "#047857", color: "#fff", border: "none", padding: "0.75rem 1.5rem", 
                  borderRadius: 8, fontWeight: 700, cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.05em"
                }}
              >
                GOT IT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}