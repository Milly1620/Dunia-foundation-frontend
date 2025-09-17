import React from "react";
import { Mail, Phone, Clock } from "lucide-react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const GetInTouchSection: React.FC = () => {
  

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 sticky z-70">
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
          <div className="space-y-4 w-full">
            {contactInfo.map((contact, index) => (
              <ContactCard
                key={index}
                icon={contact.icon}
                title={contact.title}
                details={contact.details}
              />
            ))}
          </div>

          {/* Right Column - Contact Form */}
          <div className=" w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@sesafoundation.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+233 24 123 4567",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
  },
];

export default GetInTouchSection;
