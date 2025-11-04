import Path from "../assets/programspath.svg";
import PathMobile from "../assets/pathseparatormobile.svg";
import program1 from "../assets/program1.svg";
import program2 from "../assets/program2.svg";
import program3 from "../assets/program3.svg";
import program4 from "../assets/program4.svg";
import program5 from "../assets/program5.svg";
import program6 from "../assets/program6.svg";
import program7 from "../assets/program7.svg";
import ProgramCard from "../components/ProgramCard";
import CallToActionSection from "../components/CallToActionSection";
import line from "../assets/donateline.svg";
import mobileline from "../assets/programheroline.svg";


function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#EDF6F3] px-4 md:px-0 md:py-20 pt-[18px] pb-20 md:overflow-hidden">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <h1 className="block md:hidden text-2xl poppins-bold text-primary mb-[63px]">
            Programs
          </h1>
          <h1 className="md:text-5xl text-2xl poppins-bold text-text-black mb-4 md:mb-6">
            Creating Lasting Change in Communities
          </h1>
          <p className="text-base md:text-[18px] poppins-regular text-gray max-w-[906px] mx-auto leading-relaxed">
            Dunia means “World” Represents a global vision with local
            impact—creating change that resonates across borders.
          </p>
        </div>
        <img
          src={line}
          alt="programline"
          className="hidden md:block absolute left-[27.9%] top-0"
        />
        <img
          src={mobileline}
          alt="programmobileline"
          className="block md:hidden absolute left-[8.6%] top-0"
        />
      </div>

      {/* First Half - Programs 1-3 */}
      <div className="bg-white py-20">
        <div className="max-w-[1520px] mx-auto px-4 space-y-15 lg:space-y-20">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="w-full">
        <img src={Path} alt="Separator" className="hidden md:block w-full" />
        <img
          src={PathMobile}
          alt="Separator"
          className="block md:hidden w-full"
        />
      </div>

      {/* Second Half - Programs 4-7 */}
      <div className="bg-white lg:py-20 mt-[-350px] md:mt-[-250px] lg:mt-0">
        <div className="max-w-[1520px] mx-auto px-4">
          {programs.slice(3).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <CallToActionSection
        title="Join Us in Creating Change"
        description="Every program we run is designed to create lasting, sustainable change. Your support helps us expand these initiatives and reach more communities across Africa."
        titleClass="text-white"
        descriptionClass="text-white"
        buttons={[
          {
            text: "Support our programs",
            variant: "secondary",
            size: "md",
            className: "text-[15.4px]",
            href: "/donate",
          },
          {
            text: "Get involved",
            variant: "primary",
            size: "md",
            className: "border border-white",
            href: "/contact",
          },
        ]}
      />
    </div>
  );
}
const programs = [
  {
    id: 1,
    title: "Education Support & Literacy Development",
    description:
      "Our comprehensive education program creates sustainable learning environments across Africa. We provide school supplies and scholarships to underserved schools, organize reading clinics and mentorship programs, and offer vocational skills training for youth. We partner with local communities to build educational infrastructure and train teachers, ensuring quality education access for all.",
    stats: [
      { label: "Schools Supported", value: "75+" },
      { label: "Students Supported", value: "500+" },
      { label: "Reading Library", value: "40+" },
      { label: "Scholarships Awarded", value: "200+" },
    ],
    image: program1,
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Healthcare Access & Outreach",
    description:
      "We improve healthcare access through comprehensive outreach programs. Our services include free health screenings, mobile clinics that reach remote areas, and health education campaigns. We focus particularly on maternal and child health programs, training local healthcare workers and providing essential medical supplies to underserved communities.",
    stats: [
      { label: "Mobile Clinics", value: "25+" },
      { label: "Health Workers Trained", value: "100+" },
      { label: "Patients Served", value: "10,000+" },
      { label: "Health Screenings", value: "5,000+" },
    ],
    image: program2,
    imagePosition: "left",
  },
  {
    id: 3,
    title: "Water, Sanitation & Hygiene (WASH)",
    description:
      "Our WASH program ensures communities have access to clean water and proper sanitation. We construct boreholes and mechanized water systems for deprived communities, provide hygiene and sanitation education, and distribute sanitary items. We also train local technicians to maintain water systems and educate communities about water conservation.",
    stats: [
      { label: "Bore holes Built", value: "300+" },
      { label: "People Served", value: "25,000+" },
      { label: "WASH Programs", value: "150+" },
      { label: "Technicians Trained", value: "80+" },
    ],
    image: program3,
    imagePosition: "right",
  },
  {
    id: 4,
    title: "Agricultural Development & Food Security",
    description:
      "We empower farmers with climate-smart agriculture techniques, post-harvest handling, and agribusiness skills. Our program promotes sustainable farming practices, establishes community gardens, implements nutrition programs, and supports smallholder farmer cooperatives to improve income and food security.",
    stats: [
      { label: "Farmers Trained", value: "1,000+" },
      { label: "Cooperatives Supported", value: "50+" },
      { label: "Community Gardens", value: "75+" },
      { label: "Yield Increase", value: "40%" },
    ],
    image: program4,
    imagePosition: "left",
  },
  {
    id: 5,
    title: "Women & Youth Empowerment",
    description:
      "We empower women and youth through comprehensive development programs including entrepreneurial training, micro-grants for income-generating activities, leadership and advocacy training, and reproductive health education. Our goal is to build capacity for leadership and economic independence.",
    stats: [
      { label: "Women Trained", value: "800+" },
      { label: "Micro-grants Awarded", value: "300+" },
      { label: "Youth Programs", value: "45+" },
      { label: "Leadership Training", value: "200+" },
    ],
    image: program5,
    imagePosition: "right",
  },
  {
    id: 6,
    title: "Community Development & Advocacy",
    description:
      "We engage in comprehensive community development through policy advocacy, capacity building, and strategic partnerships. Our work includes needs assessments, sustainable development projects, and influencing policy for long-term positive change, working with local leaders for self-sustained development.",
    stats: [
      { label: "Communities Assessed", value: "150+" },
      { label: "Development Projects", value: "100+" },
      { label: "Policy Initiatives", value: "25+" },
      { label: "Partnerships Formed", value: "75+" },
    ],
    image: program6,
    imagePosition: "left",
  },
  {
    id: 7,
    title: "Emergency Response & Humanitarian Relief",
    description:
      "We provide critical emergency response and humanitarian relief during natural disasters, pandemics, and conflict. Our services include distributing food, water, medical supplies, temporary shelter, and supporting long-term recovery and rebuilding efforts to help communities rebuild stronger.",
    stats: [
      { label: "Emergency Responses", value: "30+" },
      { label: "Families Assisted", value: "2,000+" },
      { label: "Relief Packages", value: "100+" },
      { label: "Recovery Projects", value: "20+" },
    ],
    image: program7,
    imagePosition: "right",
  },
];

export default ProgramsPage;
