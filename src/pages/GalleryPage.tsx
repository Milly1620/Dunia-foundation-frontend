import CallToActionSection from "../components/CallToActionSection";
import PillarCard from "../components/PillarCard";
import gallery1 from "../assets/gallery1.svg";
import gallery2 from "../assets/gallery2.svg";
import gallery3 from "../assets/gallery3.svg";
import gallery4 from "../assets/gallery4.svg";
import gallery5 from "../assets/gallery5.svg";
import gallery6 from "../assets/gallery6.svg";

function GalleryPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#EDF6F3] px-4 md:px-0 md:py-20 pt-[18px]  pb-20 ">
        <div className="max-w-4xl mx-auto md:text-center">
          <h1 className="block md:hidden text-2xl poppins-bold text-primary mb-[63px]">
            Gallery
          </h1>
          <h1 className="md:text-5xl text-4xl poppins-bold text-text-black md:mb-6 mb-4">
            Our Impact in Pictures
          </h1>
          <p className="md:text-[18px] poppins-regular text-gray max-w-[906px] mx-auto leading-relaxed">
            See the faces and stories behind our work. These images capture the
            real impact of our programs and the communities we serve across
            Ghana and Africa.
          </p>
        </div>
      </div>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1502px] mx-auto">
          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-15 mb-4 md:mb-10">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={index}
                title={pillar.title}
                image={pillar.image}
                description={pillar.description}
                alt={pillar.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection
        title="Be Part of the Story"
        description="These images represent real change happening in communities across Africa. Your support helps us create more stories of hope and transformation."
        titleClass="text-white"
        descriptionClass="text-white"
        buttons={[
          {
            text: "Support our programs",
            variant: "secondary",
            size: "md",
            className: "text-[15.4px]",
            href: "/donate",
          },
          {
            text: "Get involved",
            variant: "primary",
            size: "md",
            className: "border border-white",
            href: "/contact",
          },
        ]}
      />
    </div>
  );
}
const pillars = [
  {
    title: "Quality Education for All",
    description:
      "Children attending classes in one of the schools we helped build in rural Ghana.",
    image: gallery1,
    alt: "Child writing on blackboard",
    placeholderColor: "from-blue-400 to-blue-600",
  },
  {
    title: "Community Healthcare",
    description:
      "Healthcare workers providing medical care at one of our community clinics.",
    image: gallery2,
    alt: "Medical professional holding patient's hand",
    placeholderColor: "from-green-400 to-green-600",
  },
  {
    title: "Sustainable Farming Practices",
    description:
      "Women farmers showcasing their harvest from our sustainable agriculture training program.",
    image: gallery3,
    alt: "Hands pouring seeds into bag",
    placeholderColor: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Community Empowerment",
    description:
      "Local community celebrating the success of their development initiatives.",
    image: gallery4,
    alt: "Water flowing from pipe",
    placeholderColor: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Modern Farming Techniques",
    description:
      "Farmers implementing sustainable and modern agricultural techniques we've taught.",
    image: gallery5,
    alt: "Water flowing from pipe",
    placeholderColor: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Access to Clean Water",
    description:
      "Community members celebrating the completion of a new water well in their village.",
    image: gallery6,
    alt: "Water flowing from pipe",
    placeholderColor: "from-cyan-400 to-cyan-600",
  },
];
export default GalleryPage;
