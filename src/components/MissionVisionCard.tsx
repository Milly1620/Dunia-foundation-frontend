import React from "react";

interface MissionVisionCardProps {
  title: string;
  description: string;
  variant: "mission" | "vision";
  className?: string;
}

const MissionVisionCard: React.FC<MissionVisionCardProps> = ({
  title,
  description,
  variant,
  className = "",
}) => {
  const isMission = variant === "mission";

  return (
    <div
      className={`
        w-full h-full flex flex-col justify-center items-center p-6 md:p-1 lg:p-0 md:text-center
        ${isMission ? "bg-white" : "bg-primary"}
        ${className}
      `}
    >
        <h3
          className={`
            md:text-[48px] text-[32px] poppins-bold mb-6 leading-tight
            ${isMission ? "text-gray-800" : "text-white"}
          `}
        >
          {title}
        </h3>
        <p
          className={`
            max-w-[719px]
            md:text-[18px] poppins-regular leading-relaxed
            ${isMission ? "text-gray-700" : "text-white"}
          `}
        >
          {description}
        </p>
    </div>
  );
};

export default MissionVisionCard;
