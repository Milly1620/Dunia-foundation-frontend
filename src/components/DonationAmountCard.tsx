import React from "react";

interface DonationAmountCardProps {
  amount: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const DonationAmountCard: React.FC<DonationAmountCardProps> = ({
  amount,
  description,
  isSelected,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        p-6 text-left border-2 rounded-lg transition-all duration-200
        hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${
          isSelected
            ? "bg-primary text-white border-primary"
            : "bg-white text-gray-900 border-gray-300 hover:border-primary"
        }
        ${className}
      `}
    >
      <div className="font-bold text-2xl mb-2">{amount}</div>
      <div className="text-sm">{description}</div>
    </button>
  );
};

export default DonationAmountCard;
