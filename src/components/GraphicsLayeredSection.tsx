import React from "react";
import Button from "./Button";
import graphics from "../assets/graphics.svg";
import love from "../assets/love.svg";
import giraffe from "../assets/girrafe.svg";

const GraphicsLayeredSection: React.FC = () => {
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

  return (
    <div className="relative">
      {/* Top Graphics Section */}
      <section className="relative bg-primary min-h-[600px] flex items-center overflow-hidden z-60">
        {/* Graphics Background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${graphics})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold poppins-bold">
                Making a Measurable Difference
              </h1>
              <p className="text-xl md:text-2xl poppins-regular">
                Turning compassion into lasting change you can see and measure.
              </p>
              <div className="pt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Discover our mission
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={love}
                  alt="Child making heart shape"
                  className="w-80 h-80 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giraffe Section - Sticky */}
      <section className="sticky top-0 z-60 w-full">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <img
            src={giraffe}
            alt="Man feeding giraffe"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Bottom Graphics Section */}
      <section className="relative bg-primary min-h-[600px] py-16 overflow-hidden z-70">
        {/* Graphics Background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${graphics})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white poppins-bold">
              How can you help
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {helpCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-main-black mb-4 poppins-bold">
                  {card.title}
                </h3>
                <p className="text-gray-700 mb-6 poppins-regular leading-relaxed">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="text-primary hover:text-main-green transition-colors duration-200 poppins-medium"
                >
                  {card.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicsLayeredSection;
