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

export const Sidebar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { lang, toggleLang } = useLanguage();
  const isArabic = lang === "ar";
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const sidebarWidth = collapsed ? "w-20" : "w-64";

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`h-screen fixed top-0 ${isArabic ? "right-0" : "left-0"} bg-white shadow-md z-50 flex flex-col transition-width duration-300 ${sidebarWidth}`}
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        {/* Hamburger for desktop */}
        <div className="flex items-center justify-between h-24 border-b px-4">
          <Link to="/">
            <img
              src="/FBM_Logo_final-01.png"
              alt="Logo"
              className={`h-16 w-auto transition-all duration-300 ${collapsed ? "hidden" : "block"}`}
            />
          </Link>
          <button
            className="text-2xl text-orange-500"
            onClick={() => setCollapsed(!collapsed)}
          >
            &#9776;
          </button>
        </div>

        {/* Menu items */}
          <nav className="flex-1 flex flex-col mt-4 overflow-y-auto">

          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-3 text-lg font-semibold transition-colors ${
                  active ? "bg-orange-100 text-orange-600" : "text-gray-700 hover:bg-orange-50"
                }`}
              >
                <span className={`${collapsed ? "hidden" : "block"}`}>{isArabic ? item.ar : item.en}</span>
              </Link>
            );
          })}
        </nav>

        {/* Language switch */}
        <div className="p-4 border-t">
          <button
            className={`w-full font-semibold text-[#ee7120] text-lg hover:text-[#d66a2a] transition-colors ${
              collapsed ? "text-center" : ""
            }`}
            onClick={toggleLang}
          >
            {isArabic ? "EN" : "عربى"}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className={`flex-1 transition-all duration-300 ${collapsed ? "ml-20" : "ml-64"} ${isArabic ? (collapsed ? "mr-20 ml-0" : "mr-64 ml-0") : ""}`}>
        {children}
      </main>
    </div>
  );
};
