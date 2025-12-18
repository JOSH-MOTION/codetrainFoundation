import MissionSection from "./MissionSection";
import ChallengesSection from "./ChallengesSection";
import PartnershipSection from "./PartnerSection";
import AlumniSuccessPage from "./AlumniSuccessPage";
import HeroSection from "../components/Hero";

export default function Home() {
  return (
    <div className=" bg-white">
      <div className="h-2 bg-teal-500" />

      <section id="home">
       <HeroSection />
      </section>
      
      <section id="mission">
          <MissionSection />
      </section>

      <section id="challenges">
          <ChallengesSection />
      </section>

      <section id="partnership">
            <PartnershipSection />
      </section>

      <section id="alumni-success">
            <AlumniSuccessPage />
      </section>
    </div>
  );
}
