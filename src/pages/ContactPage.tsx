import Button from "../components/Button";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import love from "../assets/love.svg";
import contactInfo from "../utils/util";
import graphics from "../assets/Path.svg";

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
          {contactInfo.map((contact, index) => (
            <ContactCard
              key={index}
              icon={contact.icon}
              title={contact.title}
              details={contact.details}
            />
          ))}
        </div>
        <ContactForm border={false} />
      </div>

      <section className="relative flex items-center min-h-[991px] pb-[78px]">
        {/* Graphics Background */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${graphics})`,
          }}
        />

        {/* Content Container */}
        <div className="relative max-w-[1645px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold poppins-bold">
                Making a Measurable Difference
              </h1>
              <p className="text-base md:text-[18px] poppins-regular">
                Turning compassion into lasting change you can see and measure.
              </p>
              <div className="pt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Discover our mission
                </Button>
              </div>
            </div>

            <img src={love} alt="Child making heart shape" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
