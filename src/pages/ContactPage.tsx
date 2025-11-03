import { useNavigate } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import DonationHeroSection from "../components/DonationHeroSection";
import PageHero from "../components/PageHero";
import bgImage from "../assets/program1.svg";
import contactInfo from "../utils/util";
import line from "../assets/donationline.svg";
import lines from "../assets/Lines.svg";

function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-secondary overflow-hidden">
      <div className="block md:hidden bg-[#EDF6F3] px-4 md:px-0 md:py-20 pt-[18px] pb-21">
        <h1 className=" text-2xl poppins-bold text-primary mb-[63px]">
          Contact
        </h1>
        <div className="space-y-4">
          <h1 className="text-[36px] poppins-bold text-text-black">
            Get in Touch
          </h1>
          <p className="text-[18px] text-gray poppins-regular max-w-[342px] leading-relaxed">
            We'd love to hear from you. Whether you're interested in partnering
            with us, volunteering, or learning more about our work, we're here
            to help.
          </p>
        </div>
      </div>
      <img
        src={line}
        alt="programline"
        className="block md:hidden absolute left-[8.6%] top-0 z-12"
      />
      <PageHero
        title="Get in Touch"
        description="We'd love to hear from you. Whether you're interested in partnering with us, volunteering, or learning more about our work, we're here to help."
        backgroundImage={bgImage}
        className="hidden md:block"
      />

      <div
        className="max-w-[853px] md:mx-auto flex flex-col gap-8 py-20  md:py-6 px-6 md:px-[35px] bg-white relative md:mb-[65px] mb-[80px] md:mt-[-80px] z-10"
        style={{ boxShadow: "0px 3px 10px 0px #D7FFD866" }}
      >
        <div className="block md:hidden max-w-[343px] mx-auto text-center">
          <h1 className="text-2xl poppins-semibold mb-2">Get in Touch</h1>
          <p className=" poppins-regular leading-relaxed">
            We’ll review your inquiry and reach out with the appropriate
            resources
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 md:mb-0">
          {contactInfo.map((contact) => (
            <ContactCard
              key={contact.title}
              icon={contact.icon}
              title={contact.title}
              details={contact.details}
            />
          ))}
        </div>

        <ContactForm
          border={false}
          className="border border-border py-6 px-[35px] md:border-none md:py-0 md:px-0"
        />
      </div>
      <img
        src={line}
        alt="line"
        className="hidden md:block absolute left-[31.9%] top-0 z-1"
      />
      <img
        src={lines}
        alt="lines"
        className="hidden md:block w-full absolute bottom-[2%] left-[-90px]"
      />

      <div className="md:block hidden">
        <DonationHeroSection onButtonClick={() => navigate("/programs")} />
      </div>
    </div>
  );
}

export default ContactPage;
