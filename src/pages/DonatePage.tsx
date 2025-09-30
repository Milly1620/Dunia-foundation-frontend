import DonationForm from "../components/DonationForm";
import DonationHeroSection from "../components/DonationHeroSection";

function DonatePage() {
  return (
    <div className="relative bg-secondary">
      {/* Hero Section */}
      <div className="bg-[#EDF6F3] md:pb-[203px] pb-20 md:pt-20 pt-10 mb-[987px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl poppins-bold text-text-black mb-6">
              Make a Difference Today
            </h1>
            <p className="md:text-[18px] poppins-regular text-gray max-w-[906px] mx-auto leading-relaxed">
              Your donation creates lasting change in communities across Africa.
              Every contribution, no matter the size, helps us empower
              communities through our seven pillars: education, healthcare, WASH
              projects, agriculture, women & youth empowerment, community
              development, and emergency
            </p>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div className="absolute top-[340px] left-0 right-0 z-10">
        <DonationForm />
      </div>

      <DonationHeroSection />
    </div>
  );
}

export default DonatePage;
