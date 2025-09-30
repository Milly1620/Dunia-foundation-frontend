import React from "react";

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  name,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="
          w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded
          focus:ring-primary focus:ring-2
        "
      />
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-900 poppins-medium"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
