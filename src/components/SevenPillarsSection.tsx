import React from "react";
import { useNavigate } from "react-router-dom";
import PillarCard from "./PillarCard";
import lines from "../assets/Lines.svg";
import image1 from "../assets/Image1.svg";
import image2 from "../assets/Image2.svg";
import image3 from "../assets/Image3.svg";
import image4 from "../assets/Image4.svg";

const SevenPillarsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden md:z-70 md:bg-gradient-to-b from-[#F2F8F6] to-[#D8EEE7] py-10 md:py-[124px] px-4 sm:px-6 lg:px-8">
      <img
        src={lines}
        alt="Lines"
        className="hidden md:block absolute left-[-90px] top-[-600px]"
      />
      <div className="max-w-[1520px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[24px] md:text-[40px] text-main-black mb-2 poppins-semibold">
            Seven Pillars of Community Development
          </h2>
          <p className="text-sm md:text-lg text-gray w-[342px] md:w-full max-w-4xl mx-auto poppins-regular">
            Since 2018, we've been creating sustainable change across Africa
            through evidence-based programs and community partnerships.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-4 md:mb-10">
          {pillars.map((pillar) => (
            <PillarCard
              image={pillar.image}
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              alt={pillar.alt}
            />
          ))}
        </div>

        {/* Learn More Link */}
        <div className="text-center md:text-right">
          <button
            onClick={() => navigate("/programs")}
            className="inline-flex items-center text-main-black hover:text-main-green transition-colors duration-200 poppins-medium"
          >
            Learn more...
          </button>
        </div>
      </div>
    </section>
  );
};
const pillars = [
  {
    image: image1,
    title: "Education",
    description:
      "Building schools, training teachers, and providing scholarships to ensure every child has access to quality education.",
    alt: "Child writing on blackboard",
    placeholderColor: "from-blue-400 to-blue-600",
  },
  {
    image: image2,
    title: "Health care",
    description:
      "Establishing clinics, training healthcare workers, and providing medical supplies to underserved communities.",
    alt: "Medical professional holding patient's hand",
    placeholderColor: "from-green-400 to-green-600",
  },
  {
    image: image3,
    title: "Agriculture",
    description:
      "Teaching sustainable farming practices and providing resources to improve food security and income.",
    alt: "Hands pouring seeds into bag",
    placeholderColor: "from-yellow-400 to-yellow-600",
  },
  {
    image: image4,
    title: "Clean water",
    description:
      "Building boreholes and water systems for communities without clean water access.",
    alt: "Water flowing from pipe",
    placeholderColor: "from-cyan-400 to-cyan-600",
  },
];
export default SevenPillarsSection;
