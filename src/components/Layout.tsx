import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

function Layout() {
  return (
    <div className="min-h-screen bg-[#D8EEE7] md:bg-white">
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default Layout;
