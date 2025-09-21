import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import contactInfo from "../utils/util";

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
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
