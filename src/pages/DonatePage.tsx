import Button from "../components/Button";
import DonationForm from "../components/DonationForm";
import graphics from "../assets/Path.svg";
import love from "../assets/love.svg";

function DonatePage() {
  return (
    <div className="relative bg-secondary">
      {/* Hero Section */}
      <div className="bg-[#EDF6F3] md:pb-[203px] pb-20 md:pt-20 pt-10 mb-[987px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl poppins-bold text-text-black mb-6">
              Make a Difference Today
            </h1>
            <p className="md:text-[18px] poppins-regular text-gray max-w-[906px] mx-auto leading-relaxed">
              Your donation creates lasting change in communities across Africa.
              Every contribution, no matter the size, helps us empower
              communities through our seven pillars: education, healthcare, WASH
              projects, agriculture, women & youth empowerment, community
              development, and emergency
            </p>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div className="absolute top-[340px] left-0 right-0 z-10">
        <DonationForm />
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

export default DonatePage;
