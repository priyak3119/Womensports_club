import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const RegistrationPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#ee7120] mb-6">Register</h1>
          <p className="text-lg text-gray-600 mb-12">Sign up for events or programs here.</p>
          <div className="bg-gray-100 rounded-xl p-12 text-gray-400">Registration form coming soon.</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
