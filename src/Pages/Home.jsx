import MissionSection from "./MissionSection";
import ChallengesSection from "./ChallengesSection";
import PartnershipSection from "./PartnerSection";
import AlumniSuccessPage from "./AlumniSuccessPage";
import HeroSection from "../components/Hero";

export default function Home() {
  return (
    <div className=" bg-white">
      <div className="h-2 bg-teal-500" />

      
        <HeroSection />
          <MissionSection />
          <ChallengesSection />
            <PartnershipSection />
            <AlumniSuccessPage />
    </div>
  );
}
