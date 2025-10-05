import ProfileCard from "./ProfileCard";
import team1 from "../assets/team1.svg";
import team2 from "../assets/team2.svg";
import team3 from "../assets/team3.svg";
import lines from "../assets/Lines.svg";



const OurTeamSection = () => {
  return (
    <div className="relative bg-[#E1F2ED] py-10 md:py-20 px-6 md:px-0 flex flex-col items-center justify-center">
      <div className="max-w-[906px] mx-auto mb-10 md:mb-20">
        <h2 className="text-center text-5xl poppins-bold text-text-black leading-tight mb-6">
          Meet Our Team
        </h2>
        <p className="text-lg poppins-regular text-gray leading-tight">
          Our team is dedicated to making a difference in the lives of
          communities across Ghana and Africa.
        </p>
      </div>
      <div className="max-w-[1303px] mx-auto">
        <div className="grid grid-cols-1 space-y-20">
          {teamMembers.map((member) => (
            <ProfileCard
              key={member.id}
              image={member.image}
              name={member.name}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
      <img src={lines} alt="lines" className="absolute top-0 left-0 w-full" />
    </div>
  );
};
const teamMembers = [
  {
    id: 1,
    image: team1,
    name: "Kwame Asante",
    title: "Executive Director",
    description:
      "With over 15 years of experience in international development, Kwame leads our strategic vision and partnerships across Africa.",
  },
  {
    id: 3,
    image: team3,
    name: "Dr. Joseph Mensah",
    title: "Health Programs Lead",
    description:
      "A trained physician with expertise in rural healthcare delivery and community health systems strengthening.",
  },
  {
    id: 2,
    image: team2,
    name: "Abena Adjei",
    title: "Education Coordinator",
    description:
      "Former teacher and education advocate passionate about ensuring quality education access for all African children.",
  },
];

export default OurTeamSection;
