import MissionSection from "./MissionSection";
import HowItWorks from "./HowItWorks";
import TransparencySection from "./TransparencySection";
import ProblemSection from "./ProblemSection";
import PartnerSection from "./PartnerSection";
import CTADonationSection from "./CTADonationSection";
import ChallengesSection from "./ChallengesSection";
import PartnershipSection from "./PartnerSection";
import AlumniSuccessPage from "./AlumniSuccessPage";

export default function Home() {
  return (
    <div className=" bg-white">
      <div className="h-2 bg-teal-500" />

      
        
          <MissionSection />
          <ChallengesSection />
            <PartnershipSection />
            <AlumniSuccessPage />
 {/* <HowItWorks />
      <TransparencySection />
      <ProblemSection />
    
      <CTADonationSection /> */}
    </div>
  );
}
