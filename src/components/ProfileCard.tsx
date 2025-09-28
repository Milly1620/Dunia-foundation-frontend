import React from "react";

interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  image,
  name,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`
        flex flex-col md:flex-row gap-20 
        ${className}
      `}
    >
      {/* Image Section */}
      <img src={image} alt={name} />

      {/* Content Section */}
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl md:text-5xl poppins-bold text-main-black mb-1">
          {name}
        </h3>
        <h4 className="text-2xl inter-semibold text-primary mb-6">{title}</h4>
        <p className="text-[18px] text-gray poppins-regular leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
