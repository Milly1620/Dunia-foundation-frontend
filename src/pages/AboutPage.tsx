import CallToActionSection from "../components/CallToActionSection";

function AboutPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          This is the about page. You can add your content here.
        </p>
      </div>

      <CallToActionSection
        title="Join Us in Creating Change"
        description="Every program we run is designed to create lasting, sustainable change. Your support helps us expand these initiatives and reach more communities across Africa."
        buttons={[
          {
            text: "Support our programs",
            variant: "secondary",
            onClick: () => (window.location.href = "/donate"),
          },
          {
            text: "Get involved",
            variant: "outline",
            onClick: () => (window.location.href = "/contact"),
          },
        ]}
      />
    </div>
  );
}

export default AboutPage;
