import CallToActionSection from "../components/CallToActionSection";
import MissionVisionCard from "../components/MissionVisionCard";
import ValuesSection from "../components/ValuesSection";
import Path from "../assets/programspath.svg";
import OurTeamSection from "../components/OurTeamSection";

function AboutPage() {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-tertiary to-secondary">
        <div className="relative w-full">
          <img src={Path} alt="Separator" />
          <div className="max-w-4xl mx-auto text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-5xl poppins-bold mb-6">
              About Sesa Foundation
            </h1>
            <p className="md:text-[18px] poppins-regular max-w-[826px] mx-auto leading-relaxed">
              "Sesa" means change in Twi, Ghana's most widely spoken language.
              Since our founding in 2018, we have been dedicated to creating
              positive, lasting change in communities across Ghana and Africa.
              We believe that sustainable development happens when communities
              are empowered with the tools, knowledge, and resources they need
              to thrive independently.ß
            </p>
          </div>
        </div>

        <div className="pt-[61.11px] pb-[120.89px] px-6">
          <div className="max-w-[1760px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center">
              <MissionVisionCard
                variant="mission"
                title="Our Mission"
                description="To drive positive social transformation by empowering communities across Ghana and Africa through comprehensive seven-pillar development programs: education support & literacy, healthcare access & outreach, WASH projects, agricultural development & food security, women & youth empowerment, community development & advocacy, and emergency response & humanitarian relief."
              />
              <MissionVisionCard
                variant="vision"
                title="Our Vision"
                description="A prosperous Africa where every community has access to quality education, healthcare, clean water, and economic opportunities, enabling all people to reach their full potential and contribute to sustainable development."
              />
            </div>
          </div>
        </div>
      </div>

      <ValuesSection
        values={[
          {
            title: "Community-Centered",
            description:
              "We believe lasting change comes from within communities. We partner with local leaders and listen to community needs.",
          },
          {
            title: "Sustainable Impact",
            description:
              "Our programs are designed for long-term sustainability, ensuring communities can maintain progress independently.",
          },
          {
            title: "Transparency",
            description:
              "We maintain open communication about our work, impact, and use of resources with all stakeholders.",
          },
          {
            title: "Innovation",
            description:
              "We embrace new approaches and technologies that can improve the effectiveness of our programs.",
          },
        ]}
      />

      <OurTeamSection />

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

export default AboutPage;
