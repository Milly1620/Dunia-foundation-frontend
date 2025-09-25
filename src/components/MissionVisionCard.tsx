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
        w-full  aspect-square h-[466px]
        ${isMission ? "bg-white" : "bg-primary"}
        ${className}
      `}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h3
          className={`
            text-[48px] poppins-bold mb-6 text-center leading-tight
            ${isMission ? "text-gray-800" : "text-white"}
          `}
        >
          {title}
        </h3>
        <p
          className={`
            max-w-[719px]
            text-[18px] poppins-regular text-center leading-relaxed
            ${isMission ? "text-gray-700" : "text-white"}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default MissionVisionCard;
