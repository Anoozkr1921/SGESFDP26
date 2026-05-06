import ParticipantsList from "../sections/participantsList";

export default function ParticipantsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(170deg, #f8fafc 0%, #f0fdf4 40%, #dcfce7 100%)",
        position: "relative",
      }}
    >
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

      <div
        style={{
          position: "relative",
          padding: "7rem 2rem 3rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
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

        <div style={{ paddingLeft: "1.5rem" }}>
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
            PARTICIPANTS.
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
            Response Sheet FDP · BIT Mesra, Ranchi
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "-4rem auto 0 auto", padding: "0 2rem 5rem" }}>
        <ParticipantsList />
      </div>
    </div>
  );
}