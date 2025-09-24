import Hero from "../components/Hero";
import StatisticsSection from "../components/StatisticsSection";
import SevenPillarsSection from "../components/SevenPillarsSection";
import GraphicsLayeredSection from "../components/GraphicsLayeredSection";
import GetInTouchSection from "../components/GetInTouchSection";
import CallToActionSection from "../components/CallToActionSection";

function HomePage() {
  return (
    <>
      <Hero />
      <StatisticsSection />
      <SevenPillarsSection />
      <GraphicsLayeredSection />
      <GetInTouchSection />
      <CallToActionSection
        title="Ready to Make a Difference?"
        description="Join thousands of supporters who are helping us create lasting change in communities across Africa. Every contribution, big or small, makes a real difference."
        className="md:sticky z-70 bg-gradient-to-b from-[#D8EEE7] to-[#F2F8F6]"
        titleClass="text-black"
        descriptionClass="text-black"
        buttons={[
          {
            text: "Donate today",
            variant: "primary",
            size: "md",
            onClick: () => (window.location.href = "/donate"),
            className: "w-[211.5px] border border-primary",
          },
        ]}
      />
    </>
  );
}

export default HomePage;
