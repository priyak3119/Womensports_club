import React from 'react';
import { Card, CardContent } from '../ui/card';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  status: 'upcoming' | 'registration-open' | 'sold-out';
}

const upcomingEvents: Event[] = [
  {
    title: "UAE Women's Football Championship",
    date: "March 15, 2025",
    time: "4:00 PM",
    location: "FBMA Sports Complex",
    category: "Football",
    description: "Annual championship featuring the best women's football teams from across the UAE.",
    image: "/image-5.png",
    status: "registration-open",
  },
  {
    title: "International Women's Sports Summit",
    date: "April 8, 2025",
    time: "9:00 AM",
    location: "Abu Dhabi Convention Center",
    category: "Conference",
    description: "Global summit bringing together leaders in women's sports for networking and knowledge sharing.",
    image: "/fbma-1.png",
    status: "upcoming",
  },
  {
    title: "Community Sports Festival",
    date: "May 20, 2025",
    time: "10:00 AM",
    location: "Corniche Sports Park",
    category: "Community",
    description: "Family-friendly sports festival promoting active lifestyles for women and girls.",
    image: "/suwaidi-1.png",
    status: "registration-open",
  },
  {
    title: "Excellence in Sports Awards",
    date: "June 12, 2025",
    time: "7:00 PM",
    location: "Emirates Palace",
    category: "Awards",
    description: "Annual awards ceremony celebrating outstanding achievements in women's sports.",
    image: "/shamsa-saif-alhanaee-1.png",
    status: "sold-out",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'registration-open':
      return 'bg-green-500';
    case 'upcoming':
      return 'bg-blue-500';
    case 'sold-out':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'registration-open':
      return 'Registration Open';
    case 'upcoming':
      return 'Upcoming';
    case 'sold-out':
      return 'Sold Out';
    default:
      return 'TBA';
  }
};

export const UpcomingEvents: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="w-[55px] h-0.5 bg-[#ee7120] mb-4 mx-auto" />
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#ee7120] text-3xl lg:text-4xl mb-4">
            Upcoming Events
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg max-w-2xl mx-auto">
            Join us for exciting sporting events and celebrations throughout the year
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="bg-white rounded-[20px] border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={event.title}
                  src={event.image}
                />
                <div className={`absolute top-4 right-4 ${getStatusColor(event.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {getStatusText(event.status)}
                </div>
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-xl">
                    {event.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">📅</span>
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">📍</span>
                      {event.location}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <button 
                      className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                        event.status === 'sold-out' 
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                          : 'bg-[#ee7120] hover:bg-[#d66a2a] text-white'
                      }`}
                      disabled={event.status === 'sold-out'}
                    >
                      {event.status === 'sold-out' ? 'Sold Out' : 'Register Now'}
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