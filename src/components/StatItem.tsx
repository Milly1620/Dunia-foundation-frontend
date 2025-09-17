import React from "react";

interface StatItemProps {
  content: React.ReactNode;
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ content, label, value }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-2">{content}</div>

      {/* Label */}
      <div className="mb-2">
        <span className="text-main-black text-base poppins-regular">
          {label}
        </span>
      </div>

      {/* Value */}
      <div>
        <span className="text-primary text-2xl inter-semibold">{value}</span>
      </div>
    </div>
  );
};

export default StatItem;
