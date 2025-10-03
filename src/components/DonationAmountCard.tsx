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
        md:px-[41px] md:py-[30.5px] px-2 py-[21px] text-center border transition-all duration-200
        hover:shadow-md 
        ${
          isSelected
            ? "bg-primary text-white border-primary"
            : "bg-white text-gray-900 border-gray-300 hover:border-primary"
        }
        ${className}
      `}
    >
      <div className="poppins-semibold text-2xl mb-2">{amount}</div>
      <div className="text-base">{description}</div>
    </button>
  );
};

export default DonationAmountCard;
