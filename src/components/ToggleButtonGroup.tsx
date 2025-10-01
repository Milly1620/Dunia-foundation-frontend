import React from "react";

interface ToggleOption {
  value: string;
  label: string;
}

interface ToggleButtonGroupProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  options,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex w-full gap-6 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`
            px-6 py-3 text-base poppins-medium transition-colors duration-200 w-full
            ${
              value === option.value
                ? "bg-primary text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
