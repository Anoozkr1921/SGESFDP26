import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar, Clock, MapPin, Star, ExternalLink, X, Briefcase, Lightbulb, Trophy, Handshake } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import chiefGuestImg from "../../assets/images/SandipSir.jpeg";

/* ── Chief Guest Data ── */
const chiefGuest = {
  name: "Shri Sandip Kr. Kar",
  designation: "Executive Director (ED), RDCIS",
  organization: "Steel Authority of India Ltd. (SAIL), Ranchi",
  quote: "\"Pioneering sustainability through green steel initiatives, biochar trials, and innovative R&D — driving industrial excellence with specialized rail grades and transformative technology partnerships.\"",
  eventDate: "18 May 2026",
  eventTime: "10:30 AM – 11:30 AM",
  venue: "BIT Mesra, Ranchi",
  bio: "Shri Sandip Kr. Kar, ED(RDCIS) was conferred the SAIL Corporate Award for Excellence in the category of R&D Specialist for his numerous innovative new process & product development initiatives.",
  highlights: [
    { icon: "trophy", label: "Award", text: "SAIL Corporate Award for Excellence — R&D Specialist category" },
    { icon: "briefcase", label: "Designation", text: "Executive Director (ED), RDCIS — SAIL, Ranchi" },
    { icon: "lightbulb", label: "Key Contributions", text: "R260, 60E1(A1), 1175HT grades of Rails — pioneering new process & product development" },
    { icon: "lightbulb", label: "Focus Areas", text: "Sustainability, green steel initiatives (biochar trials), and industrial research for process improvements" },
    { icon: "handshake", label: "Recent Activity", text: "Active in signing MoAs for technology development (e.g., with IOCL) and leading sustainability initiatives" },
  ],
};

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ChiefGuestSpotlight() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="chief-guest"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "36px 2rem 40px",
        background: "linear-gradient(165deg, #031a0d 0%, #062817 30%, #0a3420 60%, #0b3d22 100%)",
      }}
    >
      {/* ── Decorative Background Elements ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          radial-gradient(ellipse 800px 600px at 15% 20%, rgba(24, 163, 82, 0.08) 0%, transparent 70%),
          radial-gradient(ellipse 600px 500px at 85% 80%, rgba(36, 161, 88, 0.06) 0%, transparent 70%),
          radial-gradient(ellipse 400px 400px at 50% 50%, rgba(232, 152, 10, 0.04) 0%, transparent 60%)
        `,
      }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.12,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='0.8' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px",
      }} />

      {/* Floating orbs */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(24, 163, 82, 0.1) 0%, transparent 60%)",
        borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", left: "-10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(232, 152, 10, 0.06) 0%, transparent 60%)",
        borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
        {/* ── Section Header ── */}
        <motion.div
          style={{ textAlign: "center", marginBottom: 24 }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(234, 179, 8, 0.05))",
            border: "1px solid rgba(234, 179, 8, 0.25)",
            borderRadius: 50, padding: "5px 14px", marginBottom: 12,
          }}>
            <Star size={13} style={{ color: "#fbbf24" }} fill="#fbbf24" />
            <span style={{
              fontSize: ".72rem", fontWeight: 900, textTransform: "uppercase",
              letterSpacing: ".16em", color: "#fbbf24",
            }}>
              Chief Guest
            </span>
            <Star size={13} style={{ color: "#fbbf24" }} fill="#fbbf24" />
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 8,
          }}>
            Guest of <span style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Honour</span>
          </h2>
          <div style={{
            width: 64, height: 3, margin: "0 auto",
            background: "linear-gradient(to right, #18a352, #e8980a)",
            borderRadius: 2,
          }} />
        </motion.div>

        {/* ── Main Card ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleIn}
          style={{
            position: "relative",
            background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 28,
            backdropFilter: "blur(24px)",
            boxShadow: `
              0 32px 80px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.05) inset,
              0 -1px 0 0 rgba(255, 255, 255, 0.05) inset
            `,
            overflow: "hidden",
          }}
        >
          {/* Top accent gradient bar */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg, #14834a 0%, #18a352 35%, #e8980a 65%, #fcd34d 100%)",
          }} />

          {/* Animated shine sweep */}
          <ShineEffect />

          <div style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            minHeight: 0,
          }}
            className="cg-card-grid"
          >
            {/* ── Left: Photo Column ── */}
            <div style={{
              position: "relative",
              background: "linear-gradient(160deg, #062817 0%, #0a3420 50%, #062817 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "1.5rem 1.25rem",
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}>
              {/* Decorative rings */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 320, height: 320, borderRadius: "50%",
                border: "1px solid rgba(234, 179, 8, 0.08)",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 370, height: 370, borderRadius: "50%",
                border: "1px solid rgba(24, 163, 82, 0.08)",
                pointerEvents: "none",
              }} />

              {/* Photo Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ position: "relative", marginBottom: 16 }}
                className="cg-photo-breathe"
              >
                {/* Outer pulsing glow */}
                <div className="cg-photo-pulse-glow" style={{
                  position: "absolute", inset: -20,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(232, 152, 10, 0.25) 0%, rgba(24, 163, 82, 0.15) 40%, transparent 70%)",
                  pointerEvents: "none",
                }} />
                {/* Gold glow ring */}
                <div style={{
                  position: "absolute", inset: -10,
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #e8980a, #fcd34d, #e8980a, transparent, transparent, #18a352, #7edfa8, #e8980a)",
                  opacity: 0.6,
                  filter: "blur(10px)",
                  animation: "cgSpin 6s linear infinite",
                }} />
                {/* Border ring */}
                <div style={{
                  position: "absolute", inset: -5,
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #e8980a, #fcd34d, #18a352, #7edfa8, #e8980a)",
                  padding: 3,
                  animation: "cgSpin 6s linear infinite",
                }}>
                  <div style={{
                    width: "100%", height: "100%", borderRadius: "50%",
                    background: "#062817",
                  }} />
                </div>
                {/* Image */}
                <div style={{
                  width: 156, height: 156, borderRadius: "50%",
                  overflow: "hidden", position: "relative", zIndex: 2,
                  border: "3px solid rgba(126, 223, 168, 0.3)",
                  boxShadow: "0 0 30px rgba(24, 163, 82, 0.3), 0 0 60px rgba(232, 152, 10, 0.15), 0 20px 50px rgba(0,0,0,0.5)",
                }} className="cg-photo-image-wrap">
                  <img
                    src={chiefGuestImg}
                    alt={chiefGuest.name}
                    className="cg-photo-image"
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "top center",
                      display: "block",
                    }}
                  />
                </div>
              </motion.div>

              {/* Chief Guest Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(234, 179, 8, 0.08))",
                  border: "1px solid rgba(234, 179, 8, 0.3)",
                  borderRadius: 50, padding: "6px 16px",
                  boxShadow: "0 4px 20px rgba(234, 179, 8, 0.1)",
                }}
              >
                <Award size={15} style={{ color: "#fbbf24" }} />
                <span style={{
                  fontSize: ".72rem", fontWeight: 900, textTransform: "uppercase",
                  letterSpacing: ".14em", color: "#fbbf24",
                }}>
                  Chief Guest
                </span>
              </motion.div>

              {/* Subtle corner decorations */}
              <svg style={{ position: "absolute", top: 20, left: 20, opacity: 0.15 }} width="40" height="40" viewBox="0 0 40 40">
                <path d="M0 40 L0 0 L40 0" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              </svg>
              <svg style={{ position: "absolute", bottom: 20, right: 20, opacity: 0.15 }} width="40" height="40" viewBox="0 0 40 40">
                <path d="M40 0 L40 40 L0 40" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              </svg>
            </div>

            {/* ── Right: Content Column ── */}
            <div style={{ padding: "1.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {/* Name */}
              <motion.h3
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={2}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 900, color: "#fff", lineHeight: 1.15,
                  marginBottom: 8,
                }}
              >
                {chiefGuest.name}
              </motion.h3>

              {/* Designation */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={3}
                style={{ marginBottom: 14 }}
              >
                <p style={{
                  fontSize: "1.1rem", fontWeight: 700,
                  color: "#7edfa8",
                  marginBottom: 4, lineHeight: 1.4,
                }}>
                  {chiefGuest.designation}
                </p>
                <p style={{
                  fontSize: ".95rem", color: "rgba(255,255,255,0.55)", fontWeight: 500, lineHeight: 1.4,
                }}>
                  {chiefGuest.organization}
                </p>
              </motion.div>

              {/* Decorative divider */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={3.5}
                style={{
                  width: 48, height: 2,
                  background: "linear-gradient(to right, #fbbf24, rgba(251,191,36,0.2))",
                  borderRadius: 2, marginBottom: 14,
                }}
              />

              {/* Quote */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={4}
                style={{
                  position: "relative",
                  padding: "14px 18px",
                  background: "linear-gradient(135deg, rgba(24, 163, 82, 0.1), rgba(232, 152, 10, 0.06))",
                  border: "1px solid rgba(24, 163, 82, 0.15)",
                  borderRadius: 16,
                  marginBottom: 18,
                }}
              >
                <div style={{
                  position: "absolute", top: -6, left: 20,
                  fontSize: "2.5rem", lineHeight: 1, fontFamily: "'Playfair Display', serif",
                  color: "rgba(251, 191, 36, 0.3)", fontWeight: 900,
                }}>
                  ❝
                </div>
                <p style={{
                  fontSize: ".92rem", color: "rgba(255,255,255,0.75)",
                  fontStyle: "italic", lineHeight: 1.7, margin: 0,
                  paddingTop: 8,
                }}>
                  {chiefGuest.quote}
                </p>
              </motion.div>

              {/* Event Info Grid */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={5}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 14,
                  marginBottom: 18,
                }}
                className="cg-info-grid"
              >
                <InfoChip icon={<Calendar size={16} />} label="Date" value={chiefGuest.eventDate} />
                <InfoChip icon={<Clock size={16} />} label="Time" value={chiefGuest.eventTime} />
                <InfoChip icon={<MapPin size={16} />} label="Venue" value={chiefGuest.venue} />
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={6}
              >
                <KnowMoreButton onClick={() => setShowModal(true)} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Keyframe Styles ── */}
      <style>{`
        @keyframes cgSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cgShine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
        @keyframes cgBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes cgPulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.2); }
        }
        .cg-photo-breathe {
          animation: cgBreathe 2.2s ease-in-out infinite;
        }
        .cg-photo-pulse-glow {
          animation: cgPulseGlow 2.2s ease-in-out infinite;
        }
        .cg-photo-image-wrap {
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s ease;
          transform-origin: center;
        }
        .cg-photo-image {
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.8s ease;
          will-change: transform, filter;
        }
        .cg-photo-breathe:hover .cg-photo-image-wrap {
          transform: scale(1.16);
          box-shadow: 0 0 45px rgba(24, 163, 82, 0.45), 0 0 85px rgba(232, 152, 10, 0.3), 0 26px 56px rgba(0,0,0,0.55);
        }
        .cg-photo-breathe:hover .cg-photo-image {
          transform: scale(1.18);
          filter: saturate(1.25) contrast(1.1) brightness(1.05);
        }
        .cg-photo-breathe:hover .cg-photo-pulse-glow {
          animation-duration: 1.35s;
        }

        @media (max-width: 860px) {
          .cg-card-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .cg-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ── Know More Modal ── */}
      <AnimatePresence>
        {showModal && (
          <ChiefGuestModal onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Sub-Components ── */

function InfoChip({ icon, label, value }) {
  return (
    <div style={{
      padding: "14px 16px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 14,
      transition: "all 0.25s",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.07)";
        e.currentTarget.style.borderColor = "rgba(251,191,36,0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <div style={{ color: "#fbbf24", display: "flex" }}>{icon}</div>
        <span style={{
          fontSize: ".65rem", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: ".12em", color: "rgba(255,255,255,0.4)",
        }}>
          {label}
        </span>
      </div>
      <p style={{
        fontSize: ".9rem", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.4,
      }}>
        {value}
      </p>
    </div>
  );
}

function KnowMoreButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        background: hovered
          ? "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
          : "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.05))",
        color: hovered ? "#0f172a" : "#fbbf24",
        border: hovered ? "1.5px solid #fbbf24" : "1.5px solid rgba(251,191,36,0.3)",
        padding: "12px 28px",
        borderRadius: 14,
        fontFamily: "'Helvetica', 'Arial', sans-serif",
        fontSize: ".85rem", fontWeight: 900,
        textTransform: "uppercase", letterSpacing: ".1em",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        boxShadow: hovered
          ? "0 8px 30px rgba(251, 191, 36, 0.3)"
          : "0 4px 15px rgba(251, 191, 36, 0.08)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        outline: "none",
      }}
    >
      Know More
      <ExternalLink size={15} style={{
        transition: "transform 0.3s",
        transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
      }} />
    </button>
  );
}

const highlightIcons = {
  trophy: Trophy,
  briefcase: Briefcase,
  lightbulb: Lightbulb,
  handshake: Handshake,
};

function ChiefGuestModal({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 3000,
        background: "rgba(3, 26, 13, 0.8)",
        backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: 680, width: "100%", maxHeight: "85vh",
          overflowY: "auto",
          background: "linear-gradient(160deg, #062817 0%, #0a3420 50%, #0b3d22 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset",
          padding: 0,
        }}
      >
        {/* Top gradient bar */}
        <div style={{
          position: "sticky", top: 0, left: 0, right: 0, height: 3, zIndex: 5,
          background: "linear-gradient(90deg, #14834a 0%, #18a352 35%, #e8980a 65%, #fcd34d 100%)",
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 18, right: 18, zIndex: 10,
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "rgba(255,255,255,0.6)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ padding: "2.5rem 2.5rem 1.5rem", display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%", flexShrink: 0,
            overflow: "hidden",
            border: "3px solid rgba(251,191,36,0.3)",
            boxShadow: "0 0 20px rgba(251,191,36,0.15)",
          }}>
            <img src={chiefGuestImg} alt={chiefGuest.name} style={{
              width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center",
            }} />
          </div>
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 4,
            }}>
              {chiefGuest.name}
            </h3>
            <p style={{
              fontSize: ".9rem", fontWeight: 600,
              color: "#7edfa8",
              marginBottom: 2, lineHeight: 1.3,
            }}>
              {chiefGuest.designation}
            </p>
            <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.3 }}>
              {chiefGuest.organization}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ margin: "0 2.5rem", height: 1, background: "rgba(255,255,255,0.08)" }} />

        {/* Bio */}
        <div style={{ padding: "1.5rem 2.5rem" }}>
          <p style={{
            fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, margin: 0,
          }}>
            {chiefGuest.bio}
          </p>
        </div>

        {/* Highlights */}
        <div style={{ padding: "0 2.5rem 2.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
          {chiefGuest.highlights.map((h, i) => {
            const IconComp = highlightIcons[h.icon] || Lightbulb;
            return (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(251,191,36,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.05))",
                  border: "1px solid rgba(251,191,36,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <IconComp size={16} style={{ color: "#fbbf24" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontSize: ".65rem", fontWeight: 900, textTransform: "uppercase",
                    letterSpacing: ".12em", color: "rgba(255,255,255,0.4)",
                    display: "block", marginBottom: 4,
                  }}>
                    {h.label}
                  </span>
                  <p style={{
                    fontSize: ".92rem", color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.55, margin: 0,
                  }}>
                    {h.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ShineEffect() {
  return (
    <div style={{
      position: "absolute", inset: 0, overflow: "hidden",
      pointerEvents: "none", zIndex: 10, borderRadius: 28,
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "40%", height: "100%",
        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
        animation: "cgShine 6s ease-in-out infinite",
        animationDelay: "2s",
      }} />
    </div>
  );
}
