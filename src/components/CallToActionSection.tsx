import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface CTAButton {
  text: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}

interface CallToActionSectionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  titleClass?: string;
  descriptionClass?: string;
  className?: string;
}

function CallToActionSection({
  title,
  description,
  buttons,
  titleClass,
  descriptionClass,
  className = "",
}: Readonly<CallToActionSectionProps>) {
  const navigate = useNavigate();

  const handleButtonClick = (button: CTAButton) => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Then navigate if href is provided
    if (button.href) {
      navigate(button.href);
    } else if (button.onClick) {
      button.onClick();
    }
  };

  return (
    <div
      className={`md:py-[185px] py-[75px] px-6 md:px-[185px] bg-primary ${className}`}
    >
      <div className="md:max-w-[772px] max-w-[342px] mx-auto text-center">
        <h2
          className={`md:text-[40px] text-[24px] poppins-semibold mb-2 ${titleClass}`}
        >
          {title}
        </h2>
        <p
          className={`md:text-[18px] text-gray mb-6 poppins-regular ${descriptionClass}`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {buttons?.map((button: CTAButton, index: number) => (
            <Button
              key={index}
              variant={button.variant || "primary"}
              size={button.size || "md"}
              onClick={() => handleButtonClick(button)}
              className={`w-full md:w-[211.5px] ${button.className || ""}`}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;
