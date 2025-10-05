import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import DonationHeroSection from "../components/DonationHeroSection";
import PageHero from "../components/PageHero";
import bgImage from "../assets/program1.svg";
import contactInfo from "../utils/util";

function ContactPage() {
  return (
    <div className="relative bg-secondary">
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
      <div className="md:block hidden">
        <DonationHeroSection />
      </div>
    </div>
  );
}

export default ContactPage;
