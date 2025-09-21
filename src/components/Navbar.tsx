import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.svg";
import { X } from "lucide-react";
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
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#F2F8F6] to-[#D8EEE7] h-[96px] flex justify-center items-center lg:px-[80px] px-[20px]">
        <div className="w-full max-w-[1920px] flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")}>
            <img src={logo} alt="Sesa Foundation" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-[80px]">
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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-main-black hover:text-main-green focus:outline-none focus:text-main-green"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-main-black bg-opacity-50"
          onClick={closeMobileMenu}
        ></div>

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

            <X className="w-6 h-6" onClick={closeMobileMenu} />
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
