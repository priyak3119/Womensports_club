import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const socialMediaIcons = [
  { src: "/facebook.png", alt: "Facebook" },
  { src: "/instagram.png", alt: "Instagram" },
  { src: "/x.png", alt: "X" },
  { src: "/snapchat.png", alt: "Snapchat" },
  { src: "/youtube.png", alt: "YouTube" },
  { src: "/linkedin.png", alt: "LinkedIn" },
];

const footerSections = [
  {
    title: "Company",
    links: ["Our Partners", "Highlights", "Newsroom", "Career"],
  },
  {
    title: "Education",
    links: [
      "About Education and Research Department",
      "Seminars",
      "Certified Programs",
      "Forums",
    ],
  },
  {
    title: "ICSW",
    links: [],
  },
  {
    title: "Location",
    content: "Al Muzoun - Khor Al Maqta'a\nAbu Dhabi\nUnited Arab Emirates",
  },
  {
    title: "Contact us",
    links: ["+971 2 205 7333", "info@fbma.ae"],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#323232] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Logo and Newsletter */}
          <div className="space-y-8">
            {/* Logo Section */}
            <div className="flex items-start space-x-4">
              <img
                className="w-[51px] h-[76px] object-cover"
                alt="FBMA Logo"
                src="/rectangle-1.png"
              />
              <div className="space-y-2">
                <div className="[font-family:'Inter',Helvetica] font-normal text-white text-sm text-right">
                  أكاديمية فاطمة بنت مبارك الرياضية للسيدات
                </div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-white text-sm">
                  Fatima Bint Mubarak<br />
                  Ladies Sports Academy
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl lg:text-2xl">
                Subscribe to our newsletter
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base max-w-md">
                Stay up to date with the latest news, announcements and articles
              </p>
            </div>
          </div>

          {/* Right Side - Newsletter Form and Social Media */}
          <div className="space-y-8">
            {/* Social Media Icons */}
            <div className="flex gap-6 justify-end">
              {socialMediaIcons.map((icon, index) => (
                <img
                  key={index}
                  className="w-[30px] h-[30px] hover:opacity-80 transition-opacity cursor-pointer"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>

            {/* Newsletter Form */}
            <div className="flex gap-4">
              <div className="flex-1 border-b border-white">
                <Input
                  className="bg-transparent border-none text-white placeholder:text-white [font-family:'Inter',Helvetica] font-normal text-base px-4 py-3"
                  placeholder="Employee Mail Login"
                />
              </div>
              <Button className="bg-[#e87c35] hover:bg-[#d66a2a] rounded-md px-6 py-3">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg">
                  Click
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white mb-12" />

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="space-y-2">
                <h4 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg">
                  {section.title}
                </h4>
                <div className="w-8 h-0.5 bg-white" />
              </div>
              
              {section.links && section.links.length > 0 && (
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="[font-family:'Inter',Helvetica] font-normal text-white text-base hover:text-[#ee7120] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.content && (
                <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white pt-8">
          <div className="text-center">
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base">
              Copyright © 2025 Ladies Sports Academy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};