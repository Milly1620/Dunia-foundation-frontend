import { useNavigate } from "react-router-dom";
import DonationForm from "../components/DonationForm";
import DonationHeroSection from "../components/DonationHeroSection";
import PageHero from "../components/PageHero";
import bgImage from "../assets/program1.svg";
import line from "../assets/donationline.svg";
import lines from "../assets/Lines.svg";

function DonatePage() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-secondary overflow-hidden">
      <div className="block md:hidden bg-[#EDF6F3] px-4 pt-[18px] pb-[41px]">
        <h1 className=" text-2xl poppins-bold text-primary">Donate</h1>
      </div>
      <PageHero
        title="Make a Difference Today"
        description="Your donation creates lasting change in communities across Africa. Every contribution, no matter the size, helps us empower communities through our seven pillars: education, healthcare, WASH projects, agriculture, women & youth empowerment, community development, and emergency"
        backgroundImage={bgImage}
        paddingBottom="md:pb-[105px]"
      />
      <img
        src={line}
        alt="line"
        className="hidden md:block absolute left-[27.9%] top-0"
      />
      <img
        src={lines}
        alt="lines"
        className="hidden md:block w-full absolute bottom-[20%] left-[-90px]"
      />

      {/* Donation Form */}
      <div className="relative md:mb-[65px] mb-[80px] mt-[-80px] z-10 mx-6 lg:mx-0">
        <DonationForm />
      </div>

      <DonationHeroSection onButtonClick={() => navigate("/programs")} />
    </div>
  );
}

export default DonatePage;
