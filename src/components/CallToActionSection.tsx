import React from "react";
import Button from "./Button";

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#D8EEE7] to-[#F2F8F6] py-10 md:py-[184px] px-4 sm:px-6 lg:px-8 sticky z-80">
      <div className="max-w-[772.37px] mx-auto flex flex-col md:items-center md:justify-center">
        {/* Heading */}
        <h2 className="text-[24px] md:text-[40px] text-main-black mb-2 poppins-semibold">
          Ready to Make a Difference?
        </h2>

        {/* Description */}
        <p className="md:text-center text-[18px] text-gray poppins-regular">
          Join thousands of supporters who are helping us create lasting change
          in communities across Africa. Every contribution, big or small, makes
          a real difference.
        </p>

        {/* CTA Button */}
          <Button variant="primary" size="md" className="w-full md:w-[432px] mt-6">
            Donate today
          </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
