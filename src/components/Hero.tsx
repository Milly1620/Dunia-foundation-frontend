import Button from "./Button";
import heroImage from "../assets/hero.svg";
import heroMini from "../assets/heromini.svg";
import pathright from "../assets/pathright.svg";
import pathleft from "../assets/pathleft.svg";
import line from "../assets/Line.svg";

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden bg-gradient-to-b from-[#F2F8F6] to-[#D8EEE7] p-5  md:pt-[72px] md:pb-[120px] flex justify-center items-center">
      <div className="max-w-[1501px] md:px-5 flex flex-col md:flex-row justify-between items-center">
        <div className="block md:hidden mb-[61px] z-10">
          <img src={heroMini} alt="Hero" />
        </div>
        <div className="md:w-[350px] lg:w-[697.36px] mb-5 md:mb-0">
          <h1 className="w-[236px] md:w-full poppins-bold lg:text-[48px] md:text-[32px] text-[24px] lg:leading-[57.6px] md:leading-[48px] leading-[30px] text-main-black mb-5 md:mb-6">
            Creating Lasting Change in Communities
          </h1>
          <p className="poppins-regular lg:text-[18px] text-[16px] leading-[28.8px] text-gray mb-5 md:mb-6">
            Sesa Foundation empowers communities across Ghana and Africa through
            comprehensive development programs in education, healthcare, clean
            water access, and economic empowerment. "Sesa" means change in Twi,
            and that's exactly what we're committed to creating.
          </p>
          <div className="flex items-center md:space-x-4">
            <Button
              variant="secondary"
              size="md"
              className="hidden md:block md:w-[211.5px]"
            >
              Discover our mission
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full md:w-[211.5px]"
            >
              Get involved
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={heroImage} alt="Hero" />
        </div>
        <img
          src={line}
          alt="Line"
          className="absolute right-[-77px]"
        />
        <img
          src={pathright}
          alt="Path Right"
          className="absolute top-[25.5%] right-[-297px] md:top-[13%] lg:top-[31.5%] lg:right-[-197px] md:right-[-400px]"
        />
        <img
          src={pathleft}
          alt="Path Left"
          className="hidden md:block absolute 2xl:bottom-[130px] md:bottom-[5px] lg:left-[-337px] md:left-[-437px]"
        />
      </div>
    </div>
  );
};

export default Hero;
