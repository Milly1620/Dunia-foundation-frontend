import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import DonationHeroSection from "../components/DonationHeroSection";
import PageHero from "../components/PageHero";
import bgImage from "../assets/program1.svg";
import contactInfo from "../utils/util";

function ContactPage() {
  return (
    <div className="relative bg-secondary">
      <PageHero
        title="Get in Touch"
        description="We'd love to hear from you. Whether you're interested in partnering with us, volunteering, or learning more about our work, we're here to help."
        backgroundImage={bgImage}
      />

      <div
        className="max-w-[853px] mx-auto flex flex-col gap-8 py-6 px-[35px] bg-white absolute top-[240px] left-0 right-0"
        style={{ boxShadow: "0px 3px 10px 0px #D7FFD866" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {contactInfo.map((contact) => (
            <ContactCard
              key={contact.title}
              icon={contact.icon}
              title={contact.title}
              details={contact.details}
            />
          ))}
        </div>
        <ContactForm border={false} />
      </div>

      <DonationHeroSection />
    </div>
  );
}

export default ContactPage;
