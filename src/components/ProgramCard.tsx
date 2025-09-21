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
  showBorder?: boolean;
}

function ProgramCard({ program, showBorder = true }: ProgramCardProps) {
  return (
    <div
      className={`mb-20 ${showBorder ? "border-b border-gray-200 pb-20" : ""}`}
    >
      <div
        className={`flex flex-col ${
          program.imagePosition === "right"
            ? "lg:flex-row"
            : "lg:flex-row-reverse"
        } items-center gap-12`}
      >
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
              {program.id}
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              {program.title}
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {program.description}
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {program.stats.map((stat, statIndex) => (
              <div key={statIndex} className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
