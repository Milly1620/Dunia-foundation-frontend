import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import DonationHeroSection from "../components/DonationHeroSection";
import contactInfo from "../utils/util";

function ContactPage() {
  return (
    <div className="relative bg-secondary">
      {/* Hero Section */}
      <div className="bg-[#EDF6F3] md:pb-[203px] pb-20  md:pt-20 pt-10 mb-[987px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl poppins-bold text-text-black mb-6">
              Get in Touch
            </h1>
            <p className="md:text-[18px] poppins-regular text-gray max-w-[906px] mx-auto leading-relaxed">
              We'd love to hear from you. Whether you're interested in
              partnering with us, volunteering, or learning more about our work,
              we're here to help.
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-[853px] mx-auto flex flex-col gap-8 py-6 px-[35px] bg-white absolute top-[240px] left-0 right-0">
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
