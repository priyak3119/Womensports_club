import React from 'react';
import { Card, CardContent } from '../ui/card';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[727px] overflow-hidden">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        alt="Hero Background"
        src="/about.jpg"
      />
      
      {/* Content Card */}
      <Card className="absolute w-[95%] max-w-[950px] h-auto min-h-[608px] top-[381px] left-1/2 transform -translate-x-1/2 bg-[#a6a368] rounded-[60px] border-none shadow-2xl">
        <CardContent className="p-12 lg:p-16">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="[font-family:'DIN_Next_LT_Arabic-Medium',Helvetica] font-medium text-black text-4xl lg:text-5xl leading-tight tracking-[1.84px]">
                ABOUT
              </h1>
              <div className="w-full max-w-[278px] h-px bg-black" />
              <h2 className="[font-family:'DIN_Next_LT_Arabic-Medium',Helvetica] font-medium text-black text-lg lg:text-xl tracking-wide">
                Fatima Bint Mubarak Ladies Sports Academy
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 [font-family:'DIN_Next_LT_Arabic-Regular',Helvetica] font-normal text-black text-sm lg:text-base tracking-[1.82px] leading-relaxed">
              <p>
                Fatima Bint Mubarak Ladies Sports Academy (FBMA) is a government entity of the Emirate of Abu Dhabi, the capital of the United Arab Emirates. Established in October 2010, the Academy is headed by its Chairwoman, H.H. Sheikha Fatima bint Hazza bin Zayed Al Nahyan, Chairwoman of the Board of Directors of the Fatima bint Mubarak Ladies Sports Academy and Chairwoman of Abu Dhabi ladies Club and Al Ain Ladies Club.
              </p>
              <p>
                The academy is dedicated to promoting and facilitating women's sports in the United Arab Emirates. Under the gracious patronage of Her Highness Sheikha Fatima Bint Mubarak, Chairwoman of the General Women's Union, President of the Supreme Council for Motherhood and Childhood, and Supreme Chairwoman of the Family Development Foundation "Mother of the Nation", the academy endeavors to make sports an essential element of daily life for Emirati women of all ages, backgrounds, and physical conditions.
              </p>
              <p>
                This ensures that Emirati women adopt a healthy and active lifestyle, and it enhances the cultivation of sportsmanship values in the public consciousness of the UAE. The FBMA serves undertakes this significant mission by hosting numerous local, regional, and international sports events, facilitating community activities, and managing local talent development through its educational and research efforts. In pursuit of its goals, the academy forms diverse partnerships with the Abu Dhabi Sports Council and other governmental entities and sports federations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};