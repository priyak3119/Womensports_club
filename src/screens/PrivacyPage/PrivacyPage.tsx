import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const PrivacyPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#ee7120] mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Learn how we protect your data and privacy.</p>
          <div className="bg-gray-100 rounded-xl p-12 text-gray-400">Privacy policy coming soon.</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
