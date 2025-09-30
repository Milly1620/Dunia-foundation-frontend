import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import contactInfo from "../utils/util";

const GetInTouchSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 md:sticky z-70">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[40px] text-main-black mb-2 poppins-semibold">
            Get in touch
          </h2>
          <p className="text-[18px] text-gray max-w-2xl mx-auto poppins-regular">
            We'll review your inquiry and reach out with the appropriate
            resources
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col justify-between w-full md:w-[35%] space-y-10">
            {contactInfo
              .filter((_, index) => index !== 2)
              .map((contact, index) => (
                <ContactCard
                  key={index}
                  icon={contact.icon}
                  title={contact.title}
                  details={contact.details}
                />
              ))}
          </div>

          {/* Right Column - Contact Form */}
          <div className=" w-full md:w-[65%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
