import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StatisticsSection from "./components/StatisticsSection";
import SevenPillarsSection from "./components/SevenPillarsSection";
import GraphicsLayeredSection from "./components/GraphicsLayeredSection";
import GetInTouchSection from "./components/GetInTouchSection";
import CallToActionSection from "./components/CallToActionSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatisticsSection />
      <SevenPillarsSection />
      <GraphicsLayeredSection />
      <GetInTouchSection />
      <CallToActionSection />
    </div>
  );
}

export default App;
