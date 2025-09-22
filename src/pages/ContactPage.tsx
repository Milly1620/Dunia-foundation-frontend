import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import contactInfo from "../utils/util";

function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#EDF6F3] md:py-20 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl poppins-bold text-text-black mb-6">
              Creating Lasting Change in Communities
            </h1>
            <p className="md:text-[18px] poppins-regular text-gray max-w-[906px] mx-auto leading-relaxed">
              Sesa Foundation empowers communities across Ghana and Africa
              through comprehensive development programs in education,
              healthcare, clean water access, and economic empowerment. 'Sesa'
              means change in Twi, and that's exactly what we're committed to
              creating.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[853px] mx-auto flex flex-col gap-8">
        <div className="space-y-4 w-full">
          {contactInfo.map((contact, index) => (
            <ContactCard
              key={index}
              icon={contact.icon}
              title={contact.title}
              details={contact.details}
            />
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
