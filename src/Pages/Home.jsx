import MissionSection from "./MissionSection";
import HowItWorks from "./HowItWorks";
import TransparencySection from "./TransparencySection";
import ProblemSection from "./ProblemSection";
import PartnerSection from "./PartnerSection";
import CTADonationSection from "./CTADonationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-2 bg-teal-500" />

      
        
          <MissionSection />
     
 <HowItWorks />
      <TransparencySection />
      <ProblemSection />
      <PartnerSection />
      <CTADonationSection />
    </div>
  );
}
