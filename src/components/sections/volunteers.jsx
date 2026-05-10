import { volunteers } from "../../data/volunteers";
import anoozPic from "../../assets/images/Anoozpic1.jpeg";
import DhnyPic from "../../assets/images/Dhnny.jpg";
import Architpic from "../../assets/images/Archit.jpeg";
import Aayushpic from "../../assets/images/Aayush.jpeg";
import Anandpic from "../../assets/images/Anand.jpeg";
import Satyampic from "../../assets/images/Satyam.jpeg";
import PalakPic from "../../assets/images/Palak.jpeg";


const VOLUNTEER_PHOTOS = {
  "Anooz Kumar Burnwal": anoozPic,
  "Dhannay Patil": DhnyPic,
  "Palak Agarwala": PalakPic,
  "Archit Anand": Architpic,
  "Aayush Raj": Aayushpic,
  "Anand Shivam": Anandpic,
  "Satyam Kumar": Satyampic,
};

export default function Volunteers() {
  return (
    <section
      id="volunteers"
      className="sec-white"
      style={{
        minHeight: "100vh",
        paddingTop: "64px",
        background: "linear-gradient(170deg, #f8fafc 0%, #fef3c7 40%, #fde68a 100%)",
        paddingBottom: "56px"
      }}
    >
      <div className="sec" style={{ paddingTop: "1.25rem", paddingBottom: "2.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 1.75rem" }}>
          <div className="tag" style={{ justifyContent: "center", backgroundColor: "#fcd34d" }}>Support Team</div>
          <h2 className="sec-h">Volunteers</h2>
          <div className="rule" style={{ margin: "0 auto" }} />
        </div>
        <div className="cm-grid">
          {volunteers.map((v, i) => {
            const isCoCoordinator = v.role === "Co-Coordinator";
            return (
              <div
                className="cm-card"
                key={i}
              >
                <div
                  className="cm-av"
                >
                  {VOLUNTEER_PHOTOS[v.name] ? (
                    <img
                      src={VOLUNTEER_PHOTOS[v.name]}
                      alt={v.name}
                      style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                    />
                  ) : (
                    v.initials
                  )}
                </div>
                <div
                  className="cm-role"
                  style={isCoCoordinator ? { color: "#6b7280" } : {}}
                >
                  {v.role}
                </div>
                <div className="cm-name">
                  {v.name}
                </div>
                <div className="cm-title">
                  {v.title}
                </div>
                {v.contact && (
                  <div className="cm-contact">
                    {v.contact.phone && <div>📞 {v.contact.phone}</div>}
                    {v.contact.email && <div>✉️ <a href={`mailto:${v.contact.email}`}>{v.contact.email}</a></div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
