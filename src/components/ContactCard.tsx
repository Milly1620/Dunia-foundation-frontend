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

  // Helper function to check if a string is an email
  const isEmail = (text: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text.trim());
  };

  // Helper function to check if a string is a phone number
  const isPhoneNumber = (text: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-()]+$/;
    return phoneRegex.test(text.trim()) && text.trim().length > 5;
  };

  // Helper function to render contact detail
  const renderContactDetail = (detail: string) => {
    if (isEmail(detail)) {
      return (
        <a
          href={`mailto:${detail}`}
          className="text-primary hover:text-primary-dark transition-colors duration-200 underline"
        >
          {detail}
        </a>
      );
    }

    if (isPhoneNumber(detail)) {
      return (
        <a
          href={`tel:${detail.replaceAll(/\s/g, '')}`}
          className="text-primary hover:text-primary-dark transition-colors duration-200 underline"
        >
          {detail}
        </a>
      );
    }

    return detail;
  };

  return (
    <div
      className={`w-full bg-white border border-border py-[55px] px-[24px] shadow-sm hover:shadow-md transition-shadow duration-200 mb-10 last:mb-0 lg:mb-0 ${className}`}
    >
      <div className="flex items-center space-x-6">
        {/* Icon */}
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Icon size={20} className="text-white" />
          </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl text-main-black mb-1 poppins-medium">
            {title}
          </h3>
          <div>
            {detailsArray.map((detail, index) => (
              <p key={`${title}-${detail}-${index}`} className="text-gray poppins-regular">
                {renderContactDetail(detail)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
