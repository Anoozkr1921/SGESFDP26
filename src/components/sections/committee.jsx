import { committee, volunteeringCommittee } from "../../data/content";
import vc from "../../assets/images/vc.jpg";
import imgSKMishra from "../../assets/images/sk_mishra.png";
import DrPremPrakash from "../../assets/images/DrPremPrakash.png";
import DrSurendraKumar from "../../assets/images/DrSurendraKumar.jpg";
import gssir2 from "../../assets/images/gssir2.png";

const COMMITTEE_PHOTOS = {
  "Prof. Indranil Manna": vc,
  "Dr. Sudhansu Kumar Mishra": imgSKMishra,
  "Dr. Gauri Shanker Gupta": gssir2,
  "Dr. Prem Prakash": DrPremPrakash,
  "Dr. Surendra Kumar": DrSurendraKumar,
};

export default function Committee() {
  return (
    <section
      id="committee"
      className="sec-white"
      style={{
        minHeight: "100vh",
        paddingTop: "114px",
        background: "linear-gradient(170deg, #f8fafc 0%, #f0fdf4 40%, #dcfce7 100%)",
        paddingBottom: "56px"
      }}
    >
      <div className="sec" style={{ paddingTop: "1.25rem", paddingBottom: "2.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 1.75rem" }}>
          <div className="tag" style={{ justifyContent: "center" }}>Organisation</div>
          <h2 className="sec-h">Core Team</h2>
          <div className="rule" style={{ margin: "0 auto" }} />
        </div>
        <div className="cm-grid cm-grid-org">
          {committee.map((m, i) => {
            const isCoCoordinator = m.role === "Co-Coordinator";
            return (
              <div
                className="cm-card cm-card-org"
                key={i}
              >
                <div
                  className="cm-av cm-av-org"
                >
                  {COMMITTEE_PHOTOS[m.name] ? (
                    <img
                      src={COMMITTEE_PHOTOS[m.name]}
                      alt={m.name}
                      style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                    />
                  ) : (
                    m.initials
                  )}
                </div>
                <div
                  className="cm-role"
                  style={isCoCoordinator ? { color: "#6b7280" } : {}}
                >
                  {m.role}
                </div>
                <div className="cm-name">
                  {m.name}
                </div>
                <div className="cm-title">
                  {m.title}
                </div>
                {m.contact && (
                  <div className="cm-contact">
                    {m.contact.phone && <div>📞 {m.contact.phone}</div>}
                    {m.contact.email && <div>✉️ <a href={`mailto:${m.contact.email}`}>{m.contact.email}</a></div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", maxWidth: 560, margin: "3.5rem auto 1.75rem" }}>
          <div className="tag" style={{ justifyContent: "center", backgroundColor: "#fcd34d" }}>Support Team</div>
          <h2 className="sec-h">Organizing Committee</h2>
          <div className="rule" style={{ margin: "0 auto" }} />
        </div>

        {/* Row 1: first 4 members */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.25rem",
          maxWidth: 1000,
          margin: "0 auto"
        }} className="oc-row-1">
          {volunteeringCommittee.slice(0, 4).map((member, index) => (
            <div className="cm-card cm-card-vol" key={member.name || index}>
              <div className="cm-av cm-av-vol">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name || `Organizing committee member ${index + 1}`}
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                  />
                ) : null}
              </div>
              {member.name ? <div className="cm-name">{member.name}</div> : null}
            </div>
          ))}
        </div>

        {/* Row 2: remaining 3 members, centered */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
          maxWidth: 740,
          margin: "1.25rem auto 0"
        }} className="oc-row-2">
          {volunteeringCommittee.slice(4).map((member, index) => (
            <div className="cm-card cm-card-vol" key={member.name || index}>
              <div className="cm-av cm-av-vol">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name || `Organizing committee member ${index + 5}`}
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                  />
                ) : null}
              </div>
              {member.name ? <div className="cm-name">{member.name}</div> : null}
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .oc-row-1 { grid-template-columns: repeat(2, 1fr) !important; }
            .oc-row-2 { grid-template-columns: repeat(2, 1fr) !important; max-width: 500px !important; }
          }
          @media (max-width: 520px) {
            .oc-row-1 { grid-template-columns: 1fr !important; max-width: 280px !important; }
            .oc-row-2 { grid-template-columns: 1fr !important; max-width: 280px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}