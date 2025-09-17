import React from "react";
import Button from "./Button";

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#D8EEE7] to-[#F2F8F6] py-[184px] px-4 sm:px-6 lg:px-8 sticky z-80">
      <div className="max-w-[772.37px] mx-auto flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-[40px] text-main-black mb-2 poppins-semibold">
          Ready to Make a Difference?
        </h2>

        {/* Description */}
        <p className="text-center text-[18px] text-gray poppins-regular">
          Join thousands of supporters who are helping us create lasting change
          in communities across Africa. Every contribution, big or small, makes
          a real difference.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Button variant="primary" size="md" className="md:w-[432px] w-full">
            Donate today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
