import React from "react";
import PillarCard from "./PillarCard";

const SevenPillarsSection: React.FC = () => {
  

  return (
    <section className="relative z-70 md:bg-gradient-to-b from-[#F2F8F6] to-[#D8EEE7] py-10 md:py-[124px] px-4 sm:px-6 lg:px-8">
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
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              title={pillar.title}
              description={pillar.description}
              metric={pillar.metric}
              alt={pillar.alt}
            />
          ))}
        </div>

        {/* Learn More Link */}
        <div className="text-center md:text-right">
          <a
            href="#"
            className="inline-flex items-center text-main-black hover:text-main-green transition-colors duration-200 poppins-medium"
          >
            Learn more...
          </a>
        </div>
      </div>
    </section>
  );
};
const pillars = [
  {
    title: "Education",
    description:
      "Building schools, training teachers, and providing scholarships to ensure every child has access to quality education.",
    metric: "500+ Students supported",
    alt: "Child writing on blackboard",
    placeholderColor: "from-blue-400 to-blue-600",
  },
  {
    title: "Health care",
    description:
      "Establishing clinics, training healthcare workers, and providing medical supplies to underserved communities.",
    metric: "25+ Clinics built",
    alt: "Medical professional holding patient's hand",
    placeholderColor: "from-green-400 to-green-600",
  },
  {
    title: "Agriculture",
    description:
      "Teaching sustainable farming practices and providing resources to improve food security and income.",
    metric: "1000+ Farmers trained",
    alt: "Hands pouring seeds into bag",
    placeholderColor: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Clean water",
    description:
      "Building boreholes and water systems for communities without clean water access.",
    metric: "300+ Boreholes built",
    alt: "Water flowing from pipe",
    placeholderColor: "from-cyan-400 to-cyan-600",
  },
];
export default SevenPillarsSection;
