import { useState } from "react";

// Layout Components
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

// Section Components
import Hero from "./components/sections/hero";
import SponsorsSection from "./components/sections/sponsors";
import RadioOrangeSection from "./components/sections/radioOrange";
import About from "./components/sections/about";
import Speakers from "./components/sections/speakers";
import Committee from "./components/sections/committee";
import CallToAction from "./components/sections/callToAction";
import Location from "./components/sections/location";

// Page Components (standalone pages)
import AboutPage from "./components/ui/AboutPage";
import ParticipantsPage from "./components/ui/ParticipantsPage";
import VolunteersPage from "./components/ui/VolunteersPage";

// Page Components
import SchedulePage from "./components/ui/ScheduleOverlay";

// UI Components
import SpeakerModal from "./components/ui/SpeakerModal";

export default function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [currentPage, setCurrentPage] = useState("home"); // "home" | "schedule" | "speakers" | "team" | "about" | "participants" | "volunteers"

  const goToSchedule = () => {
    setCurrentPage("schedule");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToSpeakers = () => {
    setCurrentPage("speakers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToTeam = () => {
    setCurrentPage("team");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToAbout = () => {
    setCurrentPage("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToParticipants = () => {
    setCurrentPage("participants");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToVolunteers = () => {
    setCurrentPage("volunteers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToHome = (sectionId) => {
    setCurrentPage("home");
    if (sectionId && sectionId !== "home") {
      // Small delay so page renders before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      
      <Navbar 
        onOpenSchedule={goToSchedule} 
        onOpenSpeakers={goToSpeakers}
        onOpenTeam={goToTeam}
        onOpenAbout={goToAbout}
        onOpenParticipants={goToParticipants}
        onOpenVolunteers={goToVolunteers}
        onNavigate={goToHome}
        currentPage={currentPage}
      />
      
      {currentPage === "home" && (
        <main>
          <Hero />
          <SponsorsSection />
          <RadioOrangeSection />
          <About />
          <CallToAction />
        </main>
      )}

      {currentPage === "about" && (
        <AboutPage />
      )}

      {currentPage === "participants" && (
        <ParticipantsPage />
      )}

      {currentPage === "volunteers" && (
        <VolunteersPage />
      )}

      {currentPage === "schedule" && (
        <SchedulePage
          onSelectSpeaker={(sp) => setSelectedSpeaker(sp)}
        />
      )}

      {currentPage === "speakers" && (
        <Speakers onSelectSpeaker={setSelectedSpeaker} />
      )}

      {currentPage === "team" && (
        <Committee />
      )}

      <Location />
      <Footer onNavigate={(page, sectionId) => {
        if (page === "home") {
          goToHome(sectionId || "home");
        } else if (page === "about") {
          goToAbout();
        } else if (page === "schedule") {
          goToSchedule();
        } else if (page === "speakers") {
          goToSpeakers();
        } else if (page === "team") {
          goToTeam();
        }
      }} />

      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </>
  );
}