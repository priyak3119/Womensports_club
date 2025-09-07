import React from 'react';
import { Card, CardContent } from '../ui/card';

const galleryImages = [
  {
    src: "/image-5.png",
    title: "Women's Football Championship 2024",
    description: "Celebrating the champions of UAE Women's Football",
  },
  {
    src: "/fbma-1.png",
    title: "Sports Excellence Awards",
    description: "Honoring outstanding achievements in women's sports",
  },
  {
    src: "/suwaidi-1.png",
    title: "Community Sports Day",
    description: "Bringing families together through sports activities",
  },
  {
    src: "/shamsa-saif-alhanaee-1.png",
    title: "International Sports Summit",
    description: "Global leaders discussing the future of women's sports",
  },
  {
    src: "/talal-mustafa-al-hashemi-1.png",
    title: "Youth Development Program",
    description: "Nurturing the next generation of female athletes",
  },
  {
    src: "/image-6.png",
    title: "Fitness and Wellness Workshop",
    description: "Promoting healthy lifestyles for women",
  },
];

export const EventsGallery: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="w-[55px] h-0.5 bg-[#ee7120] mb-4 mx-auto" />
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#ee7120] text-3xl lg:text-4xl mb-4">
            Events Gallery
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg max-w-2xl mx-auto">
            Relive the memorable moments from our past events and celebrations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="bg-white rounded-[20px] border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  alt={image.title}
                  src={image.src}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 hover:opacity-100 bg-[#ee7120] text-white px-4 py-2 rounded-lg font-medium transition-opacity duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-sm">
                    {image.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-xs leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#ee7120] hover:bg-[#d66a2a] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};