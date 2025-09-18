import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StatisticsSection from "./components/StatisticsSection";
import SevenPillarsSection from "./components/SevenPillarsSection";
import GraphicsLayeredSection from "./components/GraphicsLayeredSection";
import GetInTouchSection from "./components/GetInTouchSection";
import CallToActionSection from "./components/CallToActionSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="min-h-screen bg-[#D8EEE7] md:bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatisticsSection />
      <SevenPillarsSection />
      <GraphicsLayeredSection />
      <GetInTouchSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}

export default App;
