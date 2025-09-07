import React from 'react';
import { Card, CardContent } from '../ui/card';

export const EventsHero: React.FC = () => {
  return (
    <section className="relative w-full h-[727px] overflow-hidden">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        alt="Events Hero Background"
        src="/image-4.png"
      />
      
      {/* Content Card */}
      <Card className="absolute w-[95%] max-w-[950px] h-auto min-h-[608px] top-[381px] left-1/2 transform -translate-x-1/2 bg-[#a6a368] rounded-[60px] border-none shadow-2xl">
        <CardContent className="p-12 lg:p-16">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="[font-family:'DIN_Next_LT_Arabic-Medium',Helvetica] font-medium text-black text-4xl lg:text-5xl leading-tight tracking-[1.84px]">
                EVENTS
              </h1>
              <div className="w-full max-w-[278px] h-px bg-black" />
              <h2 className="[font-family:'DIN_Next_LT_Arabic-Medium',Helvetica] font-medium text-black text-lg lg:text-xl tracking-wide">
                Celebrating Excellence in Women's Sports
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 [font-family:'DIN_Next_LT_Arabic-Regular',Helvetica] font-normal text-black text-sm lg:text-base tracking-[1.82px] leading-relaxed">
              <p>
                Fatima Bint Mubarak Ladies Sports Academy hosts a diverse range of sporting events, competitions, and celebrations that showcase the talent and dedication of women athletes across the UAE and internationally.
              </p>
              <p>
                Our events calendar includes local tournaments, international championships, community sports festivals, and award ceremonies that recognize outstanding achievements in women's sports.
              </p>
              <p>
                From grassroots community events to elite international competitions, we create platforms that inspire, celebrate, and elevate women's participation in sports at every level.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};