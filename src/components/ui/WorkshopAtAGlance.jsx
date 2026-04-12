import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getIconComponent } from "../icons";

export default function WorkshopAtAGlance() {
  const [showEligibility, setShowEligibility] = useState(false);

  return (
    <>
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: 18,
          padding: "2.25rem 2.35rem",
          boxShadow: "0 10px 30px rgba(11,61,34,0.04)",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.25rem, 1.6vw, 1.45rem)",
            fontWeight: 900,
            color: "#022c22",
            marginBottom: "1.35rem",
            paddingBottom: "1.1rem",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              background: "#047857",
              borderRadius: "50%",
            }}
          />
          Workshop at a Glance
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          {[
            { lbl: "Dates", val: "18 – 22 May 2026" },
            { lbl: "Venue", val: "Dept. of EEE, BIT Mesra\nRanchi, Jharkhand – 835215" },
            { lbl: "Duration", val: "5 Days" },
            { lbl: "Eligible", val: "Faculty · PhD Scholars · PG Research Fellow · UG Final Year · Industry" },
            { lbl: "Registration Fee", val: "Nominal - Rs. 118 (including GST)" },
            { lbl: "Certificate", val: "80% Attendance" },
            { lbl: "Contact", val: "gaurishankergupta@bitmesra.ac.in" },
          ].map((r, rowIdx, arr) => {
            const IconComp = getIconComponent(r.lbl);
            const isLast = rowIdx === arr.length - 1;
            return (
              <div
                key={r.lbl}
                onClick={() => {
                  if (r.lbl === "Eligible") setShowEligibility(true);
                }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  paddingBottom: isLast ? 0 : "0.95rem",
                  borderBottom: isLast ? "none" : "1px solid rgba(11,61,34,0.06)",
                  cursor: r.lbl === "Eligible" ? "pointer" : "default",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "#ecfdf5",
                    border: "1px solid #d1fae5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#047857",
                  }}
                >
                  <IconComp size={20} color="currentColor" sw={2.25} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#047857",
                      marginBottom: "0.28rem",
                    }}
                  >
                    {r.lbl}
                  </div>
                  <div
                    style={{
                      fontSize: "0.92rem",
                      color: "#475569",
                      lineHeight: 1.45,
                      whiteSpace: "pre-line",
                      fontWeight: 600,
                    }}
                  >
                    {r.val}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {showEligibility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEligibility(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              background: "rgba(2, 44, 34, 0.4)",
              backdropFilter: "blur(6px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "linear-gradient(175deg, #ffffff 0%, #f0fdf4 100%)",
                borderRadius: 24,
                padding: "2.5rem",
                width: "100%",
                maxWidth: 640,
                boxShadow: "0 24px 48px rgba(2, 44, 34, 0.15)",
                border: "1px solid rgba(4, 120, 87, 0.2)",
                position: "relative",
              }}
            >
              <button
                onClick={() => setShowEligibility(false)}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#047857",
                  fontWeight: "bold",
                }}
              >
                ✕
              </button>

              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tag" style={{ margin: "0 0 1rem 0" }}>Target Participants</span>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#022c22",
                  lineHeight: 1.1,
                  margin: 0
                }}>
                  Eligibility & <span style={{ color: "#047857" }}>Requirements</span>
                </h3>
              </div>

              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem"
              }}>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#047857", fontSize: "1.2rem", marginTop: "-2px" }}>•</span>
                  <span style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>
                    The FDP is open for faculty members of AICTE approved institutions / Ph.D. Scholars / PG Research Fellow / UG Final Year / Industry professionals.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#047857", fontSize: "1.2rem", marginTop: "-2px" }}>•</span>
                  <span style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>
                    Please note that the registration fee is <strong>118 rupees</strong> and the maximum capacity is <strong>200</strong>. Selection would be made on a first come first serve basis.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#047857", fontSize: "1.2rem", marginTop: "-2px" }}>•</span>
                  <span style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>
                    Certificates will be awarded at the end of the programme to participants having <strong>more than 80% attendance</strong> and who have secured <strong></strong> during the FDP.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#047857", fontSize: "1.2rem", marginTop: "-2px" }}>•</span>
                  <span style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>
                    All the participants will be provided with a <strong>welcome kit</strong>, with <strong>high tea</strong> after the Inauguration and valedictory sessions.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
