import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const menuItems = [
  { en: "Home", ar: "الرئيسية", path: "/" },
  { en: "About", ar: "من نحن", path: "/about" },
  { en: "Education", ar: "التعليم", path: "/education" },
  { en: "Events", ar: "الفعاليات", path: "/events" },
  { en: "Gallery", ar: "المعرض", path: "/gallery" },
  { en: "Newsroom", ar: "الأخبار", path: "/newsroom" },
  { en: "Our Partners", ar: "شركاؤنا", path: "/partners" },
  { en: "Highlights", ar: "أبرز الإنجازات", path: "/highlights" },
  { en: "Career", ar: "الوظائف", path: "/careers" },
  { en: "Contact", ar: "اتصل بنا", path: "/contact" },
  { en: "FAQ", ar: "الأسئلة الشائعة", path: "/faq" },
];

export const Sidebar: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const isArabic = lang === "ar";
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-4 left-4 md:hidden text-3xl text-orange-500 z-50"
        onClick={() => setOpen(true)}
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 ${isArabic ? "right-0" : "left-0"} h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300
        ${open ? "translate-x-0" : isArabic ? "translate-x-full" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-24 border-b">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src="/FBM_Logo_final-01.png" alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex flex-col mt-4">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 font-semibold text-lg ${
                  active ? "bg-orange-100 text-orange-600" : "text-gray-700 hover:bg-orange-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {isArabic ? item.ar : item.en}
              </Link>
            );
          })}
        </nav>

        {/* Language Switch */}
        <div className="p-4 border-t">
          <button
            className="w-full font-semibold text-[#ee7120] text-lg hover:text-[#d66a2a] transition-colors"
            onClick={toggleLang}
          >
            {isArabic ? "EN" : "عربى"}
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Push page content */}
      <div className={`md:ml-64 ${isArabic ? "md:mr-64 md:ml-0" : ""}`} />
    </>
  );
};
