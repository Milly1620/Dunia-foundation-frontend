import React from "react";
import DonationHeroSection from "./DonationHeroSection";
import graphics from "../assets/Path.svg";
import giraffe from "../assets/girrafe.svg";

const GraphicsLayeredSection: React.FC = () => {
  return (
    <div className="relative md:z-80 bg-[#D8EEE7]">
      {/* Top Graphics Section */}
      <DonationHeroSection className=" md:z-70 mb-[-160px] md:mb-[-280px]" />

      {/* Giraffe Section - Sticky */}
      <section className="md:sticky top-0 w-full">
        <img
          src={giraffe}
          alt="Man feeding giraffe"
          className="w-full md:h-full object-cover"
        />
      </section>

      {/* Bottom Graphics Section */}
      <section className="relative md:min-h-[991px] md:z-70 flex items-end justify-center pb-[37px]">
        {/* Solid White Background for Bottom Half */}
        <div className="absolute bottom-0 left-0 right-0 bg-white h-1/2"></div>
        {/* Graphics Background */}
        <div
          className={`absolute inset-0 top-[-90px] md:top-0  md:w-full md:h-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${graphics})`,
          }}
        />

        {/* Content Container */}
        <div className="relative md:z-10  mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h2 className="text-2xl md:text-5xl font-bold text-white poppins-bold text-center mb-[72px]">
            How can you help
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 2xl:gap-[129px]">
            {helpCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#EDF6F3] px-4 py-[82px] md:py-[164px] text-center"
              >
                <h3 className="text-2xl md:text-[40px] text-main-black mb-4 poppins-regular">
                  {card.title}
                </h3>
                <p className=" text-gray mb-6 poppins-regular leading-relaxed text-base md:text-[18px]">
                  {card.description}
                </p>
                <button className="text-main-black inter-medium text-base md:text-[18px]">
                  {card.link}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const helpCards = [
  {
    title: "Join the funding",
    description:
      "Support our programs with a one-time or recurring donation to help us reach more communities across Africa.",
    link: "Learn more...",
  },
  {
    title: "Become a volunteer",
    description:
      "Join our team of dedicated volunteers and make a direct impact in communities through hands-on involvement.",
    link: "Learn more...",
  },
  {
    title: "Share with friends",
    description:
      "Help us spread awareness by sharing our mission and impact with your network and social media.",
    link: "Learn more...",
  },
];

export default GraphicsLayeredSection;
