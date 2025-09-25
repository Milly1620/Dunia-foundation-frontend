import React from "react";
import ValueCard from "./ValueCard";

interface Value {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ValuesSectionProps {
  title?: string;
  values: Value[];
  className?: string;
}

const ValuesSection: React.FC<ValuesSectionProps> = ({
  title = "Our Values",
  values,
  className = "",
}) => {
  return (
    <section className={`bg-white py-10 md:py-20 ${className}`}>
      <div className="max-w-[1214px] mx-auto px-6 md:px-0">
        {/* Section Title */}
        <div className="text-center mb-5 md:mb-10">
          <h2 className="text-5xl poppins-bold text-[#292D32] leading-tight">
            {title}
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[95px] lg:gap-10">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
