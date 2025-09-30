import React from "react";
import Button from "./Button";
import graphics from "../assets/Path.svg";
import love from "../assets/love.svg";

interface DonationHeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary";
  buttonSize?: "sm" | "md" | "lg";
  buttonClassName?: string;
  onButtonClick?: () => void;
  className?: string;
  showImage?: boolean;
  imageAlt?: string;
  imageSrc?: string;
}

const DonationHeroSection: React.FC<DonationHeroSectionProps> = ({
  title = "Making a Measurable Difference",
  description = "Turning compassion into lasting change you can see and measure.",
  buttonText = "Discover our mission",
  buttonVariant = "secondary",
  buttonSize = "lg",
  buttonClassName = "bg-white text-primary hover:bg-gray-100",
  onButtonClick,
  className = "",
  showImage = true,
  imageAlt = "Child making heart shape",
  imageSrc = love,
}) => {
  return (
    <section
      className={`relative flex items-center min-h-[991px] pb-[78px] ${className}`}
    >
      {/* Graphics Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${graphics})`,
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-[1645px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          <div className="text-white space-y-6 text-center md:text-left">
            <h1 className="text-2xl md:text-5xl lg:text-[48px] font-bold poppins-bold">
              {title}
            </h1>
            <p className="text-base md:text-[18px] poppins-regular text-center md:text-left">
              {description}
            </p>
            <div className="pt-4">
              <Button
                variant={buttonVariant}
                size={buttonSize}
                className={buttonClassName}
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </div>
          </div>

          {showImage && <img src={imageSrc} alt={imageAlt} />}
        </div>
      </div>
    </section>
  );
};

export default DonationHeroSection;
