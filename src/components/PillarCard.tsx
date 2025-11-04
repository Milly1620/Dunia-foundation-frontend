import React from "react";

interface PillarCardProps {
  image?: string;
  title: string;
  description: string;
  alt?: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
  image,
  title,
  description,
  alt = "",
}) => {
  return (
    <div className="relative h-[445.43px] md:h-[944.4px] overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
      {image && (
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Title */}
        <h3 className="text-xl md:text-2xl mb-3 poppins-semibold">{title}</h3>

        {/* Description */}
        <p className="text-sm md:text-base mb-4 poppins-regular leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PillarCard;
