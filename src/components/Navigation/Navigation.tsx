import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/newsroom', label: 'Newsroom' },
    { path: '/partners', label: 'Our Partners' },
    { path: '/highlights', label: 'Highlights' },
    { path: '/careers', label: 'Career' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`font-medium text-lg transition-colors hover:text-[#ee7120] ${
              location.pathname === item.path
                ? 'text-[#ee7120] border-b-2 border-[#ee7120]'
                : 'text-black'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center">
        <button
          className="focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {/* Hamburger Icon */}
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="#ee7120" />
            <rect y="11" width="24" height="2" rx="1" fill="#ee7120" />
            <rect y="17" width="24" height="2" rx="1" fill="#ee7120" />
          </svg>
        </button>
        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col">
              <button
                className="self-end mb-8"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <line x1="6" y1="6" x2="18" y2="18" stroke="#ee7120" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="6" x2="6" y2="18" stroke="#ee7120" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 px-2 rounded text-lg font-medium mb-2 transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#ee7120] bg-gray-100'
                      : 'text-black hover:text-[#ee7120]'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};