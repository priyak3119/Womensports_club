import React from 'react';

export const StrategicMap: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <div className="w-[55px] h-0.5 bg-[#ee7120] mb-4" />
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#ee7120] text-3xl lg:text-4xl">
            Strategic Map 2020-2024
          </h2>
        </div>

        {/* Strategic Map Container */}
        <div className="relative w-full">
          <div className="relative w-full h-[600px] lg:h-[938px] bg-[#b6a69b] rounded-lg overflow-hidden shadow-2xl">
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1220px] h-auto object-contain"
              alt="Strategic Map 2020-2024"
              src="/image-6.png"
            />
            
            {/* Legend/Info Box */}
            <div className="absolute bottom-8 right-8 w-[120px] h-[110px] bg-white rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};