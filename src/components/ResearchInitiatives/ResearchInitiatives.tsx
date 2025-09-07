import React from 'react';
import { Card, CardContent } from '../ui/card';

const researchAreas = [
  {
    title: "Women's Sports Performance",
    description: "Analyzing factors that influence athletic performance in female athletes across different sports disciplines.",
    icon: "🏃‍♀️",
  },
  {
    title: "Sports Injury Prevention",
    description: "Developing evidence-based strategies to prevent common injuries in women's sports.",
    icon: "🛡️",
  },
  {
    title: "Leadership in Sports",
    description: "Studying leadership patterns and effectiveness of women in sports management roles.",
    icon: "👩‍💼",
  },
  {
    title: "Community Engagement",
    description: "Researching methods to increase women's participation in sports at the community level.",
    icon: "🤝",
  },
];

export const ResearchInitiatives: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="w-[55px] h-0.5 bg-[#ee7120] mb-4 mx-auto" />
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#ee7120] text-3xl lg:text-4xl mb-4">
            Research Initiatives
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg max-w-2xl mx-auto">
            Our research department conducts cutting-edge studies to advance women's sports
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="bg-white rounded-[20px] border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg">
                    {area.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-[#a6a368] rounded-[30px] border-none shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="space-y-6">
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl lg:text-3xl">
                  Join Our Research Community
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg max-w-2xl mx-auto">
                  Collaborate with leading researchers and contribute to advancing women's sports through evidence-based research
                </p>
                <button className="bg-[#ee7120] hover:bg-[#d66a2a] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
                  Get Involved
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};