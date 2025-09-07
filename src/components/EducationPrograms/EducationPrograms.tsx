import React from 'react';
import { Card, CardContent } from '../ui/card';

interface Program {
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

const programs: Program[] = [
  {
    title: "Sports Management Certification",
    description: "Comprehensive program covering sports administration, event management, and facility operations.",
    duration: "6 months",
    level: "Intermediate",
    image: "/image-5.png",
  },
  {
    title: "Coaching Excellence Program",
    description: "Advanced coaching methodologies and leadership skills for women sports coaches.",
    duration: "4 months",
    level: "Advanced",
    image: "/fbma-1.png",
  },
  {
    title: "Sports Psychology Workshop",
    description: "Understanding mental performance and psychological aspects of athletic achievement.",
    duration: "2 months",
    level: "Beginner",
    image: "/suwaidi-1.png",
  },
  {
    title: "Nutrition and Fitness Specialist",
    description: "Evidence-based nutrition and fitness planning for female athletes.",
    duration: "3 months",
    level: "Intermediate",
    image: "/shamsa-saif-alhanaee-1.png",
  },
];

export const EducationPrograms: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="w-[55px] h-0.5 bg-[#ee7120] mb-4 mx-auto" />
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#ee7120] text-3xl lg:text-4xl mb-4">
            Educational Programs
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of educational programs designed to empower women in sports
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white rounded-[20px] border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={program.title}
                  src={program.image}
                />
                <div className="absolute top-4 right-4 bg-[#ee7120] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {program.level}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-xl">
                    {program.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#ee7120] text-sm">
                      Duration: {program.duration}
                    </span>
                    <button className="bg-[#ee7120] hover:bg-[#d66a2a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};