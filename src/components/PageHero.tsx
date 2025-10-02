import React from "react";
import HeroStats from "./HeroStats";

interface StatData {
  value: string;
  label: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  stats?: StatData[];
  paddingBottom?: string;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  backgroundImage,
  stats,
  paddingBottom = "md:pb-[203px]",
  className = "",
}) => {
  return (
    <div className={`relative ${paddingBottom} py-[160px] md:pt-20 md:pb-[105px] ${className}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Overlay Gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(0deg, #EDF6F3, #EDF6F3), linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), linear-gradient(180deg, rgba(0, 0, 0, 0.14) 50.13%, rgba(0, 0, 0, 0.61) 120.8%)`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto md:text-center text-white">
          <h1 className="md:text-5xl text-4xl poppins-bold mb-6">{title}</h1>
          <p className="md:text-[18px] poppins-regular max-w-[906px] mx-auto leading-relaxed">
            {description}
          </p>

          {/* Statistics (optional) */}
          {stats && stats.length > 0 && <HeroStats stats={stats} />}
        </div>
      </div>
    </div>
  );
};

export default PageHero;

