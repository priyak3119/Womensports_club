import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const socialMediaIcons = [
  {
    name: "Facebook",
    href: "#",
    color: "#3b5998",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.2c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.873h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    color: "#E1306C",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.955 3.5 4.5 4.955 4.5 7.75v8.5c0 2.795 1.455 4.25 3.25 4.25h8.5c1.795 0 3.25-1.455 3.25-4.25v-8.5c0-2.795-1.455-4.25-3.25-4.25h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.75-.88a1.12 1.12 0 11-2.25 0 1.12 1.12 0 012.25 0z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    color: "#1DA1F2",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.95-2.46 9.03 9.03 0 01-2.84 1.08A4.52 4.52 0 0016.85 2c-2.49 0-4.5 2.02-4.5 4.5 0 .35.04.69.11 1.02-3.74-.19-7.06-1.98-9.27-4.7a4.49 4.49 0 00-.61 2.27c0 1.57.8 2.95 2.02 3.76a4.52 4.52 0 01-2.04-.56v.06c0 2.19 1.56 4.01 3.64 4.43a4.5 4.5 0 01-2.03.08 4.52 4.52 0 004.21 3.14 9.06 9.06 0 01-5.62 1.94c-.36 0-.72-.02-1.08-.06A12.78 12.78 0 007 21c8.4 0 13-6.96 13-12.98 0-.2 0-.42-.02-.63A9.18 9.18 0 0023 3z" />
      </svg>
    ),
  },
  {
    name: "Snapchat",
    href: "#",
    color: "#FFFC00",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 3.25 1.636 6.11 4.106 7.847C6.06 21.124 6 21.57 6 22h12c0-.43-.06-.876-.106-1.153C20.364 18.11 22 15.25 22 12c0-5.523-4.477-10-10-10zm-1 7h2v5h-2V9zm0 6h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    color: "#FF0000",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M23.498 6.186a2.999 2.999 0 00-2.12-2.123C19.57 3.5 12 3.5 12 3.5s-7.57 0-9.378.563a2.998 2.998 0 00-2.12 2.123C0 8 0 12 0 12s0 4 0.502 5.814a2.998 2.998 0 002.12 2.123C4.43 20.5 12 20.5 12 20.5s7.57 0 9.378-.563a2.998 2.998 0 002.12-2.123C24 16 24 12 24 12s0-4-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    color: "#0077B5",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1s2.5 1.12 2.5 2.5S8.86 6 7.48 6c-1.38 0-2.5-1.12-2.5-2.5zM2 8h5v12H2V8zm7.5 0h4.75v1.64h.07c.66-1.25 2.27-2.57 4.68-2.57 5 0 5.93 3.3 5.93 7.6V20h-5v-6.93c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.66 1.8-2.66 3.66V20h-5V8z" />
      </svg>
    ),
  },
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
          {/* Left Side - Logo and Academy Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img
                className="w-[175px] h-auto object-contain"
                alt="FBMA Logo"
                src="/fbma-logo-white.svg"
              />
              <div className="space-y-1">
                <div className="font-normal text-white text-sm text-right">
                  أكاديمية فاطمة بنت مبارك الرياضية للسيدات
                </div>
                <div className="font-normal text-white text-sm">
                  Fatima Bint Mubarak
                  <br />
                  Ladies Sports Academy
                </div>
              </div>
            </div>

            {/* Newsletter Description */}
            <div className="space-y-2">
              <h3 className="font-bold text-white text-xl lg:text-2xl">
                Subscribe to our newsletter
              </h3>
              <p className="font-normal text-white text-base max-w-md">
                Stay up to date with the latest news, announcements and
                articles
              </p>
            </div>
          </div>

          {/* Right Side - Social Media & Newsletter Form */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center md:justify-end items-center">
              {socialMediaIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: icon.color }}
                >
                  {icon.svg}
                </a>
              ))}
            </div>

            {/* Newsletter Form */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-end">
              <Input
                className="bg-transparent border-b border-white placeholder-white text-white px-4 py-3 w-64 md:w-auto"
                placeholder="Your Email"
              />
              <Button className="bg-[#e87c35] hover:bg-[#d66a2a] rounded-md px-6 py-3">
                <span className="font-semibold text-white text-lg">Subscribe</span>
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
                <h4 className="font-bold text-white text-lg">{section.title}</h4>
                <div className="w-8 h-0.5 bg-white" />
              </div>

              {section.links && section.links.length > 0 && (
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="font-normal text-white text-base hover:text-[#ee7120] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {section.content && (
                <div className="font-normal text-white text-base whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white pt-8">
          <div className="text-center">
            <p className="font-normal text-white text-base">
              Copyright © 2025 Ladies Sports Academy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
