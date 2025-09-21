interface Program {
  id: number;
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  image: string;
  imagePosition: string;
}

interface ProgramCardProps {
  program: Program;
}

function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div
      className={`flex flex-col ${
        program.imagePosition === "right"
          ? "lg:flex-row"
          : "lg:flex-row-reverse"
      } items-center justify-between`}
    >
      {/* Content */}
      <div className="max-w-[691px]">
        <div className="relative w-[88px] h-[88px] mb-6">
          {/* Olive green background square (offset) */}
          <div className="w-[88px] h-[88px] bg-[#6C8636] absolute top-2 left-2"></div>
          {/* Dark teal foreground square */}
          <div className="w-[88px] h-[88px] bg-[#2D5A4A] relative flex items-center justify-center text-white poppins-bold text-[48px]">
            {program.id}
          </div>
        </div>
        <h2 className="md:text-[48px] text-[24px] leading-[120%] poppins-bold text-main-black mb-2">
          {program.title}
        </h2>

        <p className="text-[18px] poppins-regular text-gray mb-6 leading-relaxed">
          {program.description}
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {program.stats.map((stat, statIndex) => (
            <div key={statIndex} className="text-center">
              <p className="text-2xl inter-semibold text-primary mb-2">
                {stat.value}
              </p>
              <p className="poppins-regular text-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default ProgramCard;
