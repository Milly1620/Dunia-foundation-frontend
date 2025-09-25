import React from "react";
import user from "../assets/profile.svg";

interface ValueCardProps {
  title: string;
  description: string;
  className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`
     max-w-[560px]
        flex flex-col items-center justify-center
        text-center
        ${className}
      `}
    >
      {/* Icon */}
      <img src={user} alt={title} />

      {/* Title */}
      <h3 className="text-[24px] md:text-[24px] inter-semibold text-primary mb-2 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[18px] poppins-regular text-gray leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
