import Button from "./Button";

interface CTAButton {
  text: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
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
}: CallToActionSectionProps) {
  return (
    <div
      className={`md:py-[185px] py-10 px-4 md:px-[185px] bg-primary ${className}`}  
    >
      <div className="max-w-[772px] mx-auto text-center">
        <h2
          className={`md:text-[40px] text-[24px] leading-[120%] poppins-semibold mb-2 ${titleClass}`}
        >
          {title}
        </h2>
        <p
          className={`text-[18px] mb-6 poppins-regular leading-relaxed ${descriptionClass}`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons?.map((button, index) => (
            <Button
              key={index}
              variant={button.variant || "primary"}
              size={button.size || "md"}
              onClick={button.onClick}
              className={`w-[211.5px] ${button.className || ""}`}
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
