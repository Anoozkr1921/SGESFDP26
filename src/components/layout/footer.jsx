export default function Footer({ onNavigate }) {
  // Links that go to separate pages via state-based routing
  const pageLinks = {
    home: { label: "Home", action: () => onNavigate?.("home") },
    about: { label: "About", action: () => onNavigate?.("about") },
    schedule: { label: "Schedule", action: () => onNavigate?.("schedule") },
    speakers: { label: "Speakers", action: () => onNavigate?.("speakers") },
    committee: { label: "Committee", action: () => onNavigate?.("team") },
  };

  // Links that scroll to sections on the home page
  const sectionLinks = {
    topics: { label: "Topics", action: () => onNavigate?.("home", "topics") },
    register: { label: "Register", action: () => onNavigate?.("home", "register") },
  };

  const allLinks = { ...pageLinks, ...sectionLinks };
  const linkOrder = ["home", "about", "topics", "schedule", "speakers", "committee", "register"];

  return (
    <footer>
      <div className="ft-inner">
        <div className="ft-grid">
          <div>
            <div className="ft-brand">Birla Institute of Technology, Mesra</div>
            <div className="ft-sub">Knowledge is Power — Est. 1955</div>
            <p className="ft-about">The Dept. of EEE is dedicated to advancing energy systems research integrating AI, IoT, and renewable energy control into a world-class curriculum. BIT Mesra is a deemed university of national distinction.</p>
            <div className="ft-badge" style={{ marginTop: "1rem" }}><span className="dot" />Registration Open</div>
          </div>
          <div>
            <div className="ft-h">Contact</div>
            <ul className="ft-list">
              <li><strong>Dept. of EEE, BIT Mesra</strong></li>
              <li>Mesra, Ranchi – 835215, Jharkhand</li>
              <li style={{ marginTop: ".5rem" }}>📞 +91-9471301045</li>
              <li>📧 gaurishankergupta@bitmesra.ac.in</li>
              <li>🌐 www.bitmesra.ac.in</li>
            </ul>
          </div>
          <div>
            <div className="ft-h">Workshop</div>
            <ul className="ft-list">
              {linkOrder.map(key => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    onClick={e => { e.preventDefault(); allLinks[key].action(); }}
                  >
                    {allLinks[key].label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ft-credits" style={{ padding: "2rem 0", display: "flex", flexDirection: "column", gap: "0.4rem", borderTop: "1px solid rgba(255,255,255,.12)", textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,.5)", margin: 0 }}>
            Concept, and Planning: <strong>Dr.Gauri Shanker Gupta</strong> and <strong>Dr.Mrinal Kumar Pathak</strong>
          </p>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,.5)", margin: 0 }}>
            Designed by - <strong>Mr. Dhanay Patil , ECE (3rd Year)</strong> and <strong>Mr. Anooz kumar Burnwal , ECE (1st Year)</strong>
          </p>
        </div>
        <div className="ft-bottom" style={{ borderTop: "none", paddingTop: 0 }}>
          <p>© 2026 BIT Mesra · Dept. of Electrical &amp; Electronics Engineering</p>
          <p>Workshop on Emerging Control &amp; Digital Technologies for Sustainable Green Energy Systems</p>
        </div>
      </div>
    </footer>
  );
}
