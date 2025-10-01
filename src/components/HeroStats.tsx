import React from "react";

interface StatData {
  value: string;
  label: string;
}

interface HeroStatsProps {
  stats: StatData[];
  className?: string;
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats, className = "" }) => {
  return (
    <div
      className={`max-w-[680px] mx-auto mt-6 flex flex-wrap justify-between gap-8 md:gap-16 ${className}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <h3 className="text-lg md:text-2xl font-bold poppins-semibold mb-2">
            {stat.value}
          </h3>
          <p className="text-sm md:text-base poppins-regular">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
