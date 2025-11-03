import React from "react";
import FooterLinks from "./FooterLinks";
import footerLogo from "../assets/logofooterbig.svg";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-white md:sticky z-80">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 md:py-12 pt-[60px] pb-[115px]">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between space-y-10">
          {/* Logo and Description */}
          <div className="space-y-8">
            <div className="flex items-end gap-x-3">
              <img src={footerLogo} alt="Sesa Foundation" />
              <div className="text-left md:text-[30.58px] inter-bold text-text-black">
                <h1 className="mb-0 leading-2">Dunia</h1>
                <h1>Impact Foundation</h1>
              </div>
            </div>
            <p className="md:w-[518px] text-main-black poppins-regular leading-relaxed capitalize">
              Sesa Foundation is committed to driving positive social change
              through comprehensive community development initiatives across
              Ghana and Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-[35%] flex flex-row justify-between">
            <FooterLinks title="Quick Links" links={quickLinks} />

            {/* Support */}
            <FooterLinks title="Support" links={support} />
          </div>
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
