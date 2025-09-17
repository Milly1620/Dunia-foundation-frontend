import Button from "./Button";
import heroImage from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#F2F8F6] to-[#D8EEE7] p-5  md:pt-[72px] md:pb-[120px] flex justify-center items-center">
      <div className="max-w-[1501px] md:px-5 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-[350px] lg:w-[697.36px] mb-5 md:mb-0">
          <h1 className="text-center md:text-left poppins-bold lg:text-[48px] md:text-[32px] text-[26px] lg:leading-[57.6px] md:leading-[48px] leading-[38.4px] text-main-black mb-5 md:mb-6">
            Creating Lasting Change in Communities
          </h1>
          <p className="text-center md:text-left poppins-regular lg:text-[18px] text-[16px] leading-[28.8px] text-gray mb-5 md:mb-6">
            Sesa Foundation empowers communities across Ghana and Africa through
            comprehensive development programs in education, healthcare, clean
            water access, and economic empowerment. "Sesa" means change in Twi,
            and that's exactly what we're committed to creating.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="md" className="md:w-[211.5px]">
              Discover our mission
            </Button>
            <Button variant="primary" size="md" className="md:w-[211.5px]">
              Get involved
            </Button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
