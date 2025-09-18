import React from "react";

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
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-main-black poppins-semibold">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-[#1E2832] transition-colors duration-200 poppins-regular"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
