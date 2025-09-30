import React from "react";

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 poppins-medium"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="
          w-full px-4 py-3 border border-gray-300 rounded-lg
          focus:ring-2 focus:ring-primary focus:border-transparent
          outline-none transition-colors duration-200 poppins-regular
          resize-vertical
        "
      />
    </div>
  );
};

export default TextareaField;
