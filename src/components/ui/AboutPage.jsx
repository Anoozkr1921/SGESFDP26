import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkshopAtAGlance from "./WorkshopAtAGlance";

import labImg1 from "../../assets/images/8 Power System Lab.jpg";
import labImg2 from "../../assets/images/9a Control System Lab.jpg";
import labImg3 from "../../assets/images/7 Smart Grid Lab.jpg";
import labImg4 from "../../assets/images/4 Machine Lab.JPG";
import labImg5 from "../../assets/images/8a Power System Lab.jpg";
import labImg6 from "../../assets/images/8c Power System Lab.jpg";
import labImg7 from "../../assets/images/10 Measurement Lab.jpg";
import labImg8 from "../../assets/images/5a Soft Computing Lab.jpg";
import labImg9 from "../../assets/images/6a Signal Processing Lab.jpg";
import labImg10 from "../../assets/images/4a Machine Lab.jpg";

/* ───────────────────────────────────────────────────────────
   ABOUT PAGE — Standalone page
   Three sections: Workshop · Institute · Department
   ─────────────────────────────────────────────────────────── */

const labs = [
  { name: "Power Systems Lab", image: labImg1 },
  { name: "Control System Lab", image: labImg2 },
  { name: "Smart Grid Lab", image: labImg3 },
  { name: "Electrical Machines Lab", image: labImg4 },
  { name: "NaMPET Power Electronics Lab", image: labImg5 },
  { name: "Power Electronics Lab", image: labImg6 },
  { name: "Electrical Measurement & Instrumentation Lab", image: labImg7 },
  { name: "Soft Computing Lab", image: labImg8 },
  { name: "Virtual Instrumentation & Signal Processing Lab", image: labImg9 },
  { name: "Drives Lab", image: labImg10 },
];

const LAB_SHUFFLE_MS = 3000;
function mod(n, m) {
  return ((n % m) + m) % m;
}

const CARD_W = 280;
const CARD_H = 360;

export default function AboutPage() {
  const [activeLabIndex, setActiveLabIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveLabIndex((i) => mod(i + 1, labs.length));
    }, LAB_SHUFFLE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(170deg, #f8fafc 0%, #f0fdf4 40%, #dcfce7 100%)",
        position: "relative",
      }}
    >
      {/* ── Subtle background dots ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23047857'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* ━━━━━━━━━ HERO HEADER ━━━━━━━━━ */}
      <div
        style={{
          position: "relative",
          padding: "7rem 2rem 3rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Green accent bar */}
        <div
          style={{
            position: "absolute",
            left: "2rem",
            top: "6.5rem",
            width: 4,
            height: 90,
            background: "linear-gradient(to bottom, #047857, #10b981)",
            borderRadius: 2,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ paddingLeft: "1.5rem" }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              color: "#022c22",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "0.6rem",
            }}
          >
            ABOUT.
          </h1>
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#047857",
            }}
          >
            WORKSHOP · INSTITUTE · DEPARTMENT
          </p>
        </motion.div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1 — ABOUT THE WORKSHOP
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem 4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="about-page-grid">
            <div>
              <div className="tag">About the Workshop</div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                  fontWeight: 900,
                  color: "#022c22",
                  lineHeight: 1.1,
                  marginBottom: "0.6rem",
                }}
              >
                Bridging Theory with{" "}
                <span style={{ color: "#047857" }}>Industrial Practice</span>
              </h2>
              <div className="rule" />
              <div className="about-text" style={{ marginTop: "1.2rem" }}>
                <p>
                  This{" "}
                  <strong>
                    Five-Day Online Faculty Development Programme
                  </strong>{" "}
                  brings together 18 distinguished speakers from IITs, NITs,
                  international universities, and industry to deliver a rigorous
                  exploration of emerging control and digital technologies for
                  green energy systems.
                </p>
                <p>
                  The programme covers the full spectrum — from{" "}
                  <strong>
                    EV charging infrastructure and bidirectional grid
                    interactions
                  </strong>{" "}
                  to AI-driven predictive maintenance, port-Hamiltonian control,
                  and cyber-resilience of legacy power networks.
                </p>
                <p>
                  Designed for{" "}
                  <strong>
                    faculty, PhD scholars, and industry professionals
                  </strong>
                  . Certificates awarded on meeting attendance and assessment
                  criteria. All participants receive welcome kits and high tea
                  at inauguration and valedictory.
                </p>
              </div>
            </div>

            {/* Right Column: Workshop At a Glance */}
            <WorkshopAtAGlance />
          </div>
        </motion.div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2 — ABOUT THE INSTITUTE
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        style={{
          background:
            "linear-gradient(175deg, #ffffff 0%, #f0fdf4 50%, #dcfce7 100%)",
          borderTop: "1px solid rgba(4,120,87,0.1)",
          borderBottom: "1px solid rgba(4,120,87,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "5rem 2rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="tag">About the Institute</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 900,
                color: "#022c22",
                lineHeight: 1.1,
                marginBottom: "0.6rem",
              }}
            >
              Birla Institute of Technology,{" "}
              <span style={{ color: "#047857" }}>Mesra</span>
            </h2>
            <div className="rule" />

            <div className="institute-grid" style={{ marginTop: "2rem" }}>
              {/* Left: Key facts */}
              <div
                style={{
                  background: "white",
                  border: "1px solid rgba(4,120,87,0.15)",
                  borderRadius: 16,
                  padding: "2rem 1.75rem",
                  boxShadow: "0 10px 30px rgba(4,120,87,0.04)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    fontWeight: 900,
                    color: "#022c22",
                    marginBottom: "1.25rem",
                    paddingBottom: "0.85rem",
                    borderBottom: "1px solid rgba(4,120,87,0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
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
                  Key Facts
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.1rem",
                  }}
                >
                  {[
                    { label: "Established", value: "1955" },
                    { label: "Location", value: "Mesra, Ranchi, Jharkhand" },
                    { label: "Founded By", value: "B.M. Birla" },
                    { label: "Status", value: "Deemed University (1986)" },
                    { label: "Students", value: "10,000+ Registered" },
                    { label: "Research", value: "250+ Doctoral Scholars" },
                    {
                      label: "Accreditation",
                      value: "NAAC & NBA Accredited",
                    },
                    {
                      label: "Global Reach",
                      value: "Collaborations with USA, UK & Canada",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "#047857",
                            marginBottom: "0.15rem",
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontSize: "0.88rem",
                            color: "#475569",
                            lineHeight: 1.45,
                            fontWeight: 600,
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Text content */}
              <div className="about-text">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.65" }}>
                  The <strong>Birla Institute of Technology</strong> was
                  established in 1955 at Mesra, Ranchi, Jharkhand by the
                  philanthropist and industrialist <strong>B M Birla</strong>.
                  B.I.T was declared a deemed university in 1986. B.I.T is one
                  of the pioneering engineering institutions of the country which
                  has contributed many outstanding engineers in India & abroad.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.65" }}>
                  Completely residential, the campus is self contained with
                  excellent hostel facilities. With more than{" "}
                  <strong>10,000 registered students</strong> B.I.T is today a
                  global name. Along with UG and PG Programs, the Institute has
                  more than <strong>250 registered students for Doctoral
                    Programs</strong> at present.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.65" }}>
                  All of the courses has been accredited by the{" "}
                  <strong>
                    National Assessment & Accreditation Council (NAAC)
                  </strong>{" "}
                  & the{" "}
                  <strong>National Board of Accreditation (NBA)</strong>{" "}
                  established by the UGC & AICTE respectively. It has
                  collaborative arrangements with Universities in the USA, UK &
                  Canada.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.65" }}>
                  B.I.T Mesra is also an active member of the{" "}
                  <strong>'EAGER NETWIC' Project</strong> under the Asia Link
                  programme of European Commission.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3 — ABOUT THE DEPARTMENT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "5rem 2rem 5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="tag">About the Department</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "0.85rem",
              color: "#022c22",
            }}
          >
            Department of Electrical &{" "}
            <span style={{ color: "#047857" }}>
              Electronics Engineering
            </span>
          </h2>
          <div className="rule" style={{ marginBottom: "2rem" }} />

          {/* Carousel — centered, contained, won't overlap navbar */}
          <div
            style={{
              position: "relative",
              height: CARD_H + 80,
              overflow: "hidden",
              zIndex: 1,
              marginBottom: "2.5rem",
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {(() => {
              const total = labs.length;
              const leftIdx = mod(activeLabIndex - 1, total);
              const centerIdx = activeLabIndex;
              const rightIdx = mod(activeLabIndex + 1, total);

              const SPRING = {
                type: "spring",
                stiffness: 340,
                damping: 28,
                mass: 0.85,
              };

              const glassCommon = {
                position: "relative",
                width: CARD_W,
                height: CARD_H,
                borderRadius: 18,
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              };

              const getPos = (pos) => {
                if (pos === "center") {
                  return {
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    rotateY: 0,
                    zIndex: 50,
                    y: 0,
                  };
                }
                if (pos === "left") {
                  return {
                    x: -112,
                    scale: 0.82,
                    opacity: 0.62,
                    rotateY: 16,
                    zIndex: 30,
                    y: 12,
                  };
                }
                return {
                  x: 112,
                  scale: 0.82,
                  opacity: 0.62,
                  rotateY: -16,
                  zIndex: 30,
                  y: 12,
                };
              };

              const renderCard = (idx, pos) => {
                const lab = labs[idx];
                const isActive = pos === "center";

                const border = isActive
                  ? "1.5px solid rgba(4,120,87,0.55)"
                  : "1.5px solid rgba(4,120,87,0.20)";
                const shadow = isActive
                  ? "0 0 0 1px rgba(52,211,153,0.35) inset, 0 22px 60px rgba(11,61,34,0.12), 0 0 70px rgba(45,212,191,0.20)"
                  : "0 14px 36px rgba(11,61,34,0.10)";

                const background = isActive
                  ? "rgba(255,255,255,0.78)"
                  : "rgba(255,255,255,0.60)";

                return (
                  <motion.div
                    key={lab.name}
                    layoutId={`dept-lab-${lab.name}`}
                    initial={false}
                    animate={getPos(pos)}
                    transition={SPRING}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      marginLeft: -CARD_W / 2,
                      transformStyle: "preserve-3d",
                      cursor: !isActive ? "pointer" : "default",
                      pointerEvents: isActive ? "none" : "auto",
                    }}
                    onClick={() => {
                      if (!isActive) setActiveLabIndex(idx);
                    }}
                    whileHover={
                      !isActive ? { scale: 0.86, y: 8 } : {}
                    }
                  >
                    <div
                      style={{
                        ...glassCommon,
                        border,
                        background,
                        boxShadow: shadow,
                        position: "relative",
                      }}
                    >
                      {lab.image && (
                        <>
                          <img
                            src={lab.image}
                            alt={lab.name}
                            style={{
                              position: "absolute",
                              inset: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              zIndex: 0,
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.32))",
                              zIndex: 1,
                            }}
                          />
                        </>
                      )}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "radial-gradient(ellipse at 50% 0%, rgba(52,211,153,0.20) 0%, transparent 60%), linear-gradient(180deg, rgba(236,253,245,0.35) 0%, rgba(255,255,255,0.00) 60%)",
                          pointerEvents: "none",
                          zIndex: 2,
                        }}
                      />

                      {!isActive && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "3rem",
                            fontWeight: 900,
                            color: "rgba(4,120,87,0.16)",
                            pointerEvents: "none",
                          }}
                        >
                          {idx + 1}
                        </div>
                      )}

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            key={lab.name}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                              duration: 0.22,
                              ease: "easeOut",
                            }}
                            style={{
                              position: "absolute",
                              left: 14,
                              right: 14,
                              bottom: 14,
                              padding: "10px 12px",
                              borderRadius: 12,
                              background: "rgba(255,255,255,0.85)",
                              border: "1px solid rgba(4,120,87,0.25)",
                              backdropFilter: "blur(10px)",
                              WebkitBackdropFilter: "blur(10px)",
                              boxShadow:
                                "0 10px 30px rgba(11,61,34,0.10), 0 0 40px rgba(45,212,191,0.10)",
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 900,
                                color: "#022c22",
                                textAlign: "center",
                                lineHeight: 1.15,
                              }}
                            >
                              {lab.name}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              };

              return (
                <>
                  {renderCard(leftIdx, "left")}
                  {renderCard(centerIdx, "center")}
                  {renderCard(rightIdx, "right")}
                </>
              );
            })()}
          </div>

          {/* Department text — flows full width below the carousel */}
          <div className="about-text" style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.65" }}>
              The Department of Electrical & Electronics Engineering is
              dedicated to the current needs of industry with the flexibility
              to tune its programmes according to different requirements.
              Application of new technology in various fields is one of the
              main focuses in the activities of the department.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.65" }}>
              Department of EEE has different ongoing and past projects where{" "}
              <strong>AI and IoT</strong> has been directly used for
              applications like <strong>smart grid concept in power
                system</strong>, battery management system for EV, energy
              efficient electrical motor drives or in health monitoring of
              different electrical equipment.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.65" }}>
              The Department of EEE has MoUs with{" "}
              <strong>University of Padova, Italy</strong>, TATA Motors, ERLDC
              Grid-India Controller, Central Coal filed Limited, Larsen &
              Turbo Technical Services Ltd. and other industries.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.65" }}>
              The Department hosts advanced laboratories in{" "}
              <strong>Power Systems</strong> and{" "}
              <strong>Control Systems</strong>, alongside a{" "}
              <strong>Smart Grid Lab</strong> built for hands-on learning. It
              is also home to a{" "}
              <strong>NaMPET-funded Power Electronics Laboratory</strong> that
              supports modern inverter/control research and practical training.
              With measurement, computing, and instrumentation facilities,
              students gain end-to-end exposure from theory to real-time
              experimentation.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .about-page-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .institute-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .about-page-grid {
            grid-template-columns: 1fr !important;
          }
          .institute-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

