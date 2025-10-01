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

function ProgramCard({ program }: Readonly<ProgramCardProps>) {
  return (
    <div
      className={`flex flex-col ${
        program.imagePosition === "right"
          ? "lg:flex-row"
          : "lg:flex-row-reverse"
      } items-center justify-between`}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden w-full">
        {/* Image with overlay */}
        <div className="relative mb-2">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-[497px] object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Number and Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="relative w-[40px] h-[40px] mb-2">
              {/* Olive green background square (offset) */}
              <div className="w-[36.36px] h-[36.36px] bg-[#6C8636] absolute top-1 left-1"></div>
              {/* Dark teal foreground square */}
              <div className="w-[36.36px] h-[36.36px] bg-[#2D5A4A] relative flex items-center justify-center text-white poppins-bold text-2xl">
                {program.id}
              </div>
            </div>
            <h2 className="text-2xl poppins-semibold">{program.title}</h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-base poppins-regular text-gray mb-4 leading-relaxed">
          {program.description}
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-6">
          {program.stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-2xl inter-semibold text-primary mb-2">
                {stat.value}
              </p>
              <p className="poppins-regular text-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-[691px]">
        <div className="relative w-[88px] h-[88px] mb-6">
          {/* Olive green background square (offset) */}
          <div className="w-[88px] h-[88px] bg-[#6C8636] absolute top-2 left-2"></div>
          {/* Dark teal foreground square */}
          <div className="w-[88px] h-[88px] bg-[#2D5A4A] relative flex items-center justify-center text-white poppins-bold text-[48px]">
            {program.id}
          </div>
        </div>
        <h2 className="text-[48px] leading-[120%] poppins-bold text-main-black mb-2">
          {program.title}
        </h2>

        <p className="text-[18px] poppins-regular text-gray mb-6 leading-relaxed">
          {program.description}
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-6">
          {program.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl inter-semibold text-primary mb-2">
                {stat.value}
              </p>
              <p className="poppins-regular text-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block relative">
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
