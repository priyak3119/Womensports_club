import React from 'react';
import { Card, CardContent } from '../ui/card';

interface BoardMember {
  name: string;
  title: string;
  image: string;
  bgColor: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "HE. Dr. Omniyat Mohammed Al-Hajri",
    title: "Vice Chairwoman",
    image: "/fbma.png",
    bgColor: "bg-[#ee7120]",
  },
  {
    name: "HE Noura Khalifa Al Suwaidi",
    title: "Board Member",
    image: "/suwaidi.png",
    bgColor: "bg-[#ee7120]",
  },
  {
    name: "HE Talal Mustafa Al Hashemi",
    title: "Board Member",
    image: "/talal-mustafa-al-hashemi.png",
    bgColor: "bg-[#ee7120]",
  },
  {
    name: "Ms.Shamsa Saif Alhanaee",
    title: "Board Member",
    image: "/shamsa-saif-alhanaee.jpg",
    bgColor: "bg-[#ee7120]",
  },
];

export const BoardMembers: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <div className="w-[55px] h-0.5 bg-[#ee7120] mb-4" />
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#ee7120] text-3xl lg:text-4xl">
            Board Members
          </h2>
        </div>

        {/* Board Members Grid */}
        <div className="space-y-24">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Member Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="p-0 relative">
                    <div className={`absolute w-[300px] h-[400px] ${member.bgColor} ${
                      index % 2 === 0 ? 'top-16 left-0' : 'top-16 right-0'
                    }`} />
                    <img
                      className="relative w-full max-w-[400px] h-[500px] object-cover mx-auto"
                      alt={member.name}
                      src={member.image}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Member Information */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#ee7120] text-2xl lg:text-4xl leading-tight">
                  {member.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-[#ee7120] text-xl lg:text-3xl">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};