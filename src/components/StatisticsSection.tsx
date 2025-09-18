import React from "react";
import { Users, Globe, MapPin, UserPlus } from "lucide-react";
import StatItem from "./StatItem";

const StatisticsSection: React.FC = () => {
  return (
    <section className="sticky top-0 z-60 bg-white py-[40px] flex items-center justify-center w-[205px] mx-auto md:w-full">
      <div className="w-full max-w-[1020px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-15">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              content={<stat.icon size={33.3} className="text-primary " />}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const stats = [
  {
    icon: Users,
    label: "Lives impacted",
    value: "50,000+",
  },
  {
    icon: Globe,
    label: "Communities Served",
    value: "200+",
  },
  {
    icon: MapPin,
    label: "African Countries",
    value: "15",
  },
  {
    icon: UserPlus,
    label: "Active volunteers",
    value: "1,000+",
  },
];
export default StatisticsSection;
