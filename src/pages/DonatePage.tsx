import DonationForm from "../components/DonationForm";
import DonationHeroSection from "../components/DonationHeroSection";
import PageHero from "../components/PageHero";
import bgImage from "../assets/program1.svg";

function DonatePage() {
  return (
    <div className="relative bg-secondary">
      <div className="block md:hidden bg-[#EDF6F3] px-4 pt-[18px] pb-[41px]">
        <h1 className=" text-2xl poppins-bold text-primary">Donate</h1>
      </div>
      <PageHero
        title="Make a Difference Today"
        description="Your donation creates lasting change in communities across Africa. Every contribution, no matter the size, helps us empower communities through our seven pillars: education, healthcare, WASH projects, agriculture, women & youth empowerment, community development, and emergency"
        backgroundImage={bgImage}
        stats={heroStats}
        paddingBottom="md:pb-[105px]"
      />

      {/* Donation Form */}
      <div className="relative md:mb-[65px] mb-[80px] mt-[-80px] z-10 mx-6 lg:mx-0">
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
