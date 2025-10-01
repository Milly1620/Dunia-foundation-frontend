import DonationForm from "../components/DonationForm";
import DonationHeroSection from "../components/DonationHeroSection";
import PageHero from "../components/PageHero";
import bgImage from "../assets/program1.svg";

function DonatePage() {
  return (
    <div className="relative bg-secondary">
      <PageHero
        title="Make a Difference Today"
        description="Your donation creates lasting change in communities across Africa. Every contribution, no matter the size, helps us empower communities through our seven pillars: education, healthcare, WASH projects, agriculture, women & youth empowerment, community development, and emergency"
        backgroundImage={bgImage}
        stats={heroStats}
        paddingBottom="md:pb-[105px]"
      />

      {/* Donation Form */}
      <div className="absolute top-[350px] left-0 right-0 z-10">
        <DonationForm />
      </div>

      <DonationHeroSection />
    </div>
  );
}

const heroStats = [
  { value: "50,000+", label: "Lives Impacted" },
  { value: "200+", label: "Communities Served" },
  { value: "15", label: "African Countries" },
];

export default DonatePage;
