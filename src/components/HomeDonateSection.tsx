import { useNavigate } from "react-router-dom";
import Button from "./Button";
import pathleft from "../assets/pathleft.svg";
import line from "../assets/donateline.svg";

const HomeDonateSection = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/donate");
  };

  return (
    <div
      className={`relative md:py-[185px] py-[75px] px-6 md:px-[185px] md:sticky z-70 bg-gradient-to-b from-[#D8EEE7] to-[#F2F8F6]`}
    >
      <div className="md:max-w-[772px] max-w-[342px] mx-auto text-center text-black">
        <h2 className={`md:text-[40px] text-[24px] poppins-semibold mb-2 `}>
          Ready to Make a Difference?
        </h2>
        <p className={`md:text-[18px] text-gray mb-6 poppins-regular `}>
          Join thousands of supporters who are helping us create lasting change
          in communities across Africa. Every contribution, big or small, makes
          a real difference.
        </p>
        <div className="relative z-80 flex flex-col sm:flex-row gap-4 items-center justify-center ">
          <Button
            variant={"primary"}
            size={"md"}
            onClick={() => handleNavigation()}
            className={`w-full md:w-[211.5px] border border-primary cursor-pointer`}
          >
            Donate today
          </Button>
        </div>
      </div>
      <img
        src={pathleft}
        alt="Separator"
        className="hidden md:block absolute left-[-237px] top-0"
      />
      <img
        src={line}
        alt="Separator"
        className="hidden md:block absolute left-[30%] top-0"
      />
    </div>
  );
};

export default HomeDonateSection;
