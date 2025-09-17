import React from "react";

interface ContactCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  details: string | string[];
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  details,
  className = "",
}) => {
  const detailsArray = Array.isArray(details) ? details : [details];

  return (
    <div
      className={`2xl:w-[432px] w-full bg-white border border-border py-[55px] px-[24px] shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Icon size={20} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl text-main-black mb-1 poppins-medium">
            {title}
          </h3>
          <div className="space-y-1">
            {detailsArray.map((detail, index) => (
              <p key={index} className="text-gray poppins-regular">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
