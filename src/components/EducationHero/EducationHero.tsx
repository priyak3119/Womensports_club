import React from 'react';
import { Card, CardContent } from '../ui/card';

export const EducationHero: React.FC = () => {
  return (
    <section className="relative w-full h-[727px] overflow-hidden">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        alt="Education Hero Background"
        src="/image.png"
      />
      
      {/* Content Card */}
      <Card className="absolute w-[95%] max-w-[950px] h-auto min-h-[608px] top-[381px] left-1/2 transform -translate-x-1/2 bg-[#a6a368] rounded-[60px] border-none shadow-2xl">
        <CardContent className="p-12 lg:p-16">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="[font-family:'DIN_Next_LT_Arabic-Medium',Helvetica] font-medium text-black text-4xl lg:text-5xl leading-tight tracking-[1.84px]">
                EDUCATION
              </h1>
              <div className="w-full max-w-[278px] h-px bg-black" />
              <h2 className="[font-family:'DIN_Next_LT_Arabic-Medium',Helvetica] font-medium text-black text-lg lg:text-xl tracking-wide">
                Empowering Women Through Sports Education
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 [font-family:'DIN_Next_LT_Arabic-Regular',Helvetica] font-normal text-black text-sm lg:text-base tracking-[1.82px] leading-relaxed">
              <p>
                The Education and Research Department at Fatima Bint Mubarak Ladies Sports Academy is dedicated to advancing women's sports through comprehensive educational programs, research initiatives, and professional development opportunities.
              </p>
              <p>
                Our department focuses on creating innovative learning experiences that combine theoretical knowledge with practical application, ensuring that participants gain valuable skills and insights in sports management, coaching, and athletic performance.
              </p>
              <p>
                Through partnerships with leading educational institutions and sports organizations, we offer certified programs, seminars, and forums that contribute to the professional growth of women in sports across the UAE and beyond.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};