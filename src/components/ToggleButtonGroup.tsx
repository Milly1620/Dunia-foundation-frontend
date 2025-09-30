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
    <div className={`flex ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`
            px-6 py-3 text-sm font-medium transition-colors duration-200
            ${
              value === option.value
                ? "bg-primary text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }
            ${value === option.value ? "rounded-l-lg" : "rounded-r-lg"}
            ${options.indexOf(option) === 0 ? "border-r-0" : "border-l-0"}
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
