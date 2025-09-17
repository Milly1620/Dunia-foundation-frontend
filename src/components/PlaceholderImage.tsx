import React from "react";

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 300,
  height = 200,
  className = "",
  children,
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 ${className}`}
      style={{ width, height }}
    >
      {children || (
        <span className="text-sm font-medium">Image Placeholder</span>
      )}
    </div>
  );
};

export default PlaceholderImage;
