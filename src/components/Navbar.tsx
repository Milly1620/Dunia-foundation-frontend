import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.svg";
import { X, Menu } from "lucide-react";
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Then navigate
    navigate(href);
  };

  const navigationLinks = [
    { name: "Home", href: "/", isActive: location.pathname === "/" },
    {
      name: "Programs",
      href: "/programs",
      isActive: location.pathname === "/programs",
    },
    {
      name: "About us",
      href: "/about",
      isActive: location.pathname === "/about",
    },
    {
      name: "Gallery",
      href: "/gallery",
      isActive: location.pathname === "/gallery",
    },
    {
      name: "Contact",
      href: "/contact",
      isActive: location.pathname === "/contact",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex sticky top-0 z-50 bg-gradient-to-b from-[#F2F8F6] to-[#D8EEE7] h-[96px] justify-center items-center lg:px-[80px]">
        <div className="w-full max-w-[1920px] flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")}>
            <img src={logo} alt="Sesa Foundation" />
          </button>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-[80px]">
            <div className="flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className={`poppins-medium transition-colors duration-200 ${
                    link.isActive
                      ? "text-main-green text-[18px]"
                      : "text-main-black hover:text-main-green text-base"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button onClick={() => handleNavigation("/donate")}>
              <Button variant="primary" size="md" className="w-[102px]">
                Donate
              </Button>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Menu Button */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <div className="relative w-[60px] h-[60px]">
          {/* Background circle (bottom layer) */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-[#6C8636] shadow-md" />

          {/* Interactive button (top layer) */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-[-5px] right-[2px] w-full h-full rounded-full bg-[#2A5F58] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200 z-10"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Backdrop */}
        <button
          className="fixed inset-0 bg-main-black bg-opacity-50 w-full h-full"
          onClick={closeMobileMenu}
          aria-label="Close menu backdrop"
          tabIndex={-1}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:w-[50%] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-main-black">
            <button
              onClick={() => {
                handleNavigation("/");
                closeMobileMenu();
              }}
            >
              <img src={logo} alt="Sesa Foundation" />
            </button>

            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-main-black" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <div className="p-6">
            <nav className="space-y-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    handleNavigation(link.href);
                    closeMobileMenu();
                  }}
                  className={`block poppins-medium text-base transition-colors duration-200 ${
                    link.isActive
                      ? "text-main-green font-medium"
                      : "text-main-black hover:text-main-green text-base"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    handleNavigation("/donate");
                    closeMobileMenu();
                  }}
                >
                  <Button variant="primary" size="md" className="w-full">
                    Donate
                  </Button>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
