import React from "react";
import { Header } from "../../components/Header/Header";
import { EventsHero } from "../../components/EventsHero/EventsHero";
import { UpcomingEvents } from "../../components/UpcomingEvents/UpcomingEvents";
import { EventsGallery } from "../../components/EventsGallery/EventsGallery";
import { Footer } from "../../components/Footer/Footer";

export const EventsPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        <EventsHero />
        <UpcomingEvents />
        <EventsGallery />
      </main>
      <Footer />
    </div>
  );
};