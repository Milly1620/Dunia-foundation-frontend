import { useState } from "react";
import CallToActionSection from "../components/CallToActionSection";

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "events", name: "Events" },
    { id: "programs", name: "Programs" },
    { id: "volunteers", name: "Volunteers" },
    { id: "community", name: "Community" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "events",
      title: "Annual Fundraising Gala",
      date: "2024",
    },
    {
      id: 2,
      category: "programs",
      title: "Education Initiative Launch",
      date: "2024",
    },
    {
      id: 3,
      category: "volunteers",
      title: "Volunteer Training Session",
      date: "2024",
    },
    {
      id: 4,
      category: "community",
      title: "Community Health Fair",
      date: "2024",
    },
    { id: 5, category: "events", title: "Awards Ceremony", date: "2023" },
    {
      id: 6,
      category: "programs",
      title: "Women Empowerment Workshop",
      date: "2023",
    },
    {
      id: 7,
      category: "volunteers",
      title: "Volunteer Appreciation Day",
      date: "2023",
    },
    {
      id: 8,
      category: "community",
      title: "School Renovation Project",
      date: "2023",
    },
    { id: 9, category: "events", title: "Charity Run", date: "2023" },
    {
      id: 10,
      category: "programs",
      title: "Healthcare Outreach",
      date: "2023",
    },
    {
      id: 11,
      category: "volunteers",
      title: "Team Building Activity",
      date: "2023",
    },
    {
      id: 12,
      category: "community",
      title: "Environmental Cleanup",
      date: "2023",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-black mb-4">Gallery</h1>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Explore our journey through photos and stories of impact, community
            engagement, and positive change.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-gray-400 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Gallery Image</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              No images found
            </h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Load More Images
          </button>
        </div>
      </div>

      <CallToActionSection
        title="Be Part of the Story"
        description="These images represent real change happening in communities across Africa. Your support helps us create more stories of hope and transformation."
        buttons={[
          {
            text: "Share Photos",
            variant: "primary",
            onClick: () => (window.location.href = "/contact"),
          },
          {
            text: "View Programs",
            variant: "outline",
            onClick: () => (window.location.href = "/programs"),
          },
        ]}
      />
    </div>
  );
}

export default GalleryPage;
