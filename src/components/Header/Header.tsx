import React from 'react';
import { Navigation } from '../Navigation/Navigation';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow z-20 sticky top-0">
      <div className="max-w-[1341px] mx-auto px-4 flex items-center justify-between h-[100px]">
        
        {/* Logo Left */}
        <div className="flex items-center">
          <img
            className="w-[65px] h-[97px] object-contain"
            alt="FBMA Logo"
            src="/FBM_Logo_final-01.png"
          />
        </div>

        {/* Navigation Center */}
        <div className="flex-1 flex justify-center">
          <Navigation />
        </div>

        {/* Arabic Language Link Right */}
        <div className="flex items-center gap-4">
          <a
            className="font-semibold text-[#ee7120] text-xl whitespace-nowrap [font-family:'Inter',Helvetica] hover:text-[#d66a2a] transition-colors hidden md:inline"
            href="https://adsc.gov.ae/ar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            عربي
          </a>
        </div>
      </div>
    </header>
  );
};
