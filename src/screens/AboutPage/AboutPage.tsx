import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { ChairmanSection } from "../../components/ChairmanSection/ChairmanSection";
import { BoardMembers } from "../../components/BoardMembers/BoardMembers";
import { StrategicMap } from "../../components/StrategicMap/StrategicMap";
import { Footer } from "../../components/Footer/Footer";

export const AboutPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main className="relative">
        <HeroSection />
        <ChairmanSection />
        <BoardMembers />
        <StrategicMap />
      </main>
      <Footer />
    </div>
  );
};