import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inter-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center flex items-center justify-center h-[48px] cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#2A5F58] text-white hover:bg-[#2A5F58]/90",
    secondary: "bg-[#FFFFFF] text-[#6C8636] border border-[#E5E5E5]",
    outline:
      "border-2 border-[#2A5F58] text-[#2A5F58] hover:bg-[#2A5F58] hover:text-white focus:ring-teal-500",
  };

  const sizeStyles = {
    sm: "px-3  text-sm",
    md: "px-6  text-base",
    lg: "px-6 text-lg",
  };

  const combinedClassName =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
