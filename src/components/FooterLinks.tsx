import React from "react";
import { useNavigate } from "react-router-dom";

interface FooterLinksProps {
  title: string;
  links: { name: string; href: string }[];
  className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({
  title,
  links,
  className = "",
}) => {
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-main-black poppins-semibold">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => handleNavigation(link.href)}
              className="text-[#1E2832] hover:text-[#2A5F58] transition-colors duration-200 poppins-regular cursor-pointer rounded-sm"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
