import React from "react";

interface PillarCardProps {
  image?: string;
  title: string;
  description: string;
  metric: string;
  alt?: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
  image,
  title,
  description,
  metric,
  alt = "",
}) => {
  return (
    <div className="h-[445.43px] md:h-[944.4px] relative overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={alt} className="w-full h-full object-cover" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-[18px] pb-[24px] md:pb-[60px] text-white">
        {/* Title */}
        <h3 className="text-[20px] md:text-[40px] mb-4 poppins-semibold">{title}</h3>

        {/* Description */}
        <p className="text-[12px] md:text-base mb-4 poppins-regular leading-relaxed">
          {description}
        </p>

        {/* Metric */}
        <div className="text-[12px] md:text-base poppins-semibold">{metric}</div>
      </div>
    </div>
  );
};

export default PillarCard;
