import React from "react";
import FooterLinks from "./FooterLinks";
import footerLogo from "../assets/footerlogo.svg";

const FooterSection: React.FC = () => {

  return (
    <footer className="bg-white md:sticky z-80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between space-y-10">
          {/* Logo and Description */}
          <div className=" space-y-4">
            <img src={footerLogo} alt="Sesa Foundation" className="w-auto" />
            <p className="md:w-[518px] text-main-black poppins-regular leading-relaxed capitalize">
              Sesa Foundation is committed to driving positive social change
              through comprehensive community development initiatives across
              Ghana and Africa.
            </p>
          </div>

          {/* Quick Links */}
          <FooterLinks
            title="Quick Links"
            links={quickLinks}
          />

          {/* Support */}
          <FooterLinks
            title="Support"
            links={support}
          />
        </div>
      </div>
    </footer>
  );
};
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Mission", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const support = [
    { name: "Donate", href: "#" },
    { name: "Fundraise", href: "#" },
    { name: "Partnership", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

export default FooterSection;
