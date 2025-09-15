import React from "react";
import { Header } from "../../components/Sidebar/Sidebar";
import { EducationHero } from "../../components/EducationHero/EducationHero";
import { EducationPrograms } from "../../components/EducationPrograms/EducationPrograms";
import { ResearchInitiatives } from "../../components/ResearchInitiatives/ResearchInitiatives";
import { Footer } from "../../components/Footer/Footer";

export const EducationPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main className="relative">
        <EducationHero />
        <EducationPrograms />
        <ResearchInitiatives />
      </main>
      <Footer />
    </div>
  );
};