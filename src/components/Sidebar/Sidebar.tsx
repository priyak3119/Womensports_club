import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// Menu structure
const menuItems = [
  { en: "Home", ar: "الرئيسية", path: "/" },
  {
    en: "About",
    ar: "عن الأكاديمية",
    path: "/about",
    children: [
      { en: "Vision & Mission", ar: "الرؤية والرسالة", path: "/about/vision-mission" },
      { en: "Board of Directors", ar: "مجلس الإدارة", path: "/about/board" },
      { en: "Our Team", ar: "فريق العمل", path: "/about/team" },
      { en: "Strategic Map", ar: "الخريطة الاستراتيجية", path: "/about/strategic-map" },
      { en: "Chairwoman Message", ar: "رسالة رئيسة الأكاديمية", path: "/about/chairwoman-message" },
    ],
  },
  {
    en: "Education & Research",
    ar: "التعليم والبحث العلمي",
    path: "/education",
    children: [
      { en: "Programs", ar: "البرامج", path: "/education/programs" },
      { en: "Research", ar: "الأبحاث", path: "/education/research" },
      { en: "Initiatives", ar: "المبادرات", path: "/education/initiatives" },
    ],
  },
  {
    en: "Events",
    ar: "الفعاليات",
    path: "/events",
    children: [
      { en: "Upcoming Events", ar: "الفعاليات القادمة", path: "/events/upcoming" },
      { en: "Past Events", ar: "الفعاليات السابقة", path: "/events/past" },
      { en: "Event Registration", ar: "تسجيل الفعاليات", path: "/events/registration" },
    ],
  },
  {
    en: "Achievements",
    ar: "الإنجازات",
    path: "/achievements",
    children: [
      { en: "Awards", ar: "الجوائز", path: "/achievements/awards" },
      { en: "Milestones", ar: "الإنجازات الرئيسية", path: "/achievements/milestones" },
    ],
  },
  {
    en: "Media Center",
    ar: "المركز الإعلامي",
    path: "/media",
    children: [
      { en: "Gallery", ar: "المعرض", path: "/media/gallery" },
      { en: "Videos", ar: "الفيديوهات", path: "/media/videos" },
      { en: "Newsroom", ar: "الأخبار", path: "/media/newsroom" },
      { en: "Publications", ar: "المنشورات", path: "/media/publications" },
    ],
  },
  { en: "Partners", ar: "الشركاء", path: "/partners" },
  { en: "Careers", ar: "الوظائف", path: "/careers" },
  { en: "Contact Us", ar: "اتصل بنا", path: "/contact" },
  { en: "FAQ", ar: "الأسئلة الشائعة", path: "/faq" },
];

export const Sidebar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { lang, toggleLang } = useLanguage();
  const isArabic = lang === "ar";
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const location = useLocation();

  return (
    <>
      {/* Hamburger menu */}
      <div className="fixed top-4 right-4 z-50">
        <button
          className="text-3xl text-orange-500 bg-white p-2 rounded shadow"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          &#9776;
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        {/* Logo and close button */}
        <div className="flex items-center justify-between h-24 border-b px-4">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src="/FBM_Logo_final-01.png" alt="Logo" className="h-16 w-auto" />
          </Link>
          <button
            className="text-2xl text-orange-500"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto mt-4">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div key={item.path}>
                <div className="flex items-center justify-between">
                  {/* Parent link */}
                  <Link
                    to={item.path}
                    className={`flex-1 px-6 py-3 text-lg font-semibold ${
                      active ? "bg-orange-100 text-orange-600" : "text-gray-700 hover:bg-orange-50"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {isArabic ? item.ar : item.en}
                  </Link>

                  {/* Toggle arrow */}
                  {hasChildren && (
                    <span
                      className="px-2 cursor-pointer"
                      onClick={() => setOpenSub(openSub === item.path ? null : item.path)}
                    >
                      {openSub === item.path ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6 15L12 9L18 15"
                            stroke="#ee7120"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ee7120"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  )}
                </div>

                {/* Submenu */}
                {hasChildren && openSub === item.path && (
                  <div className="pl-8">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block py-2 text-base text-gray-600 hover:text-orange-600"
                        onClick={() => setOpen(false)}
                      >
                        {isArabic ? sub.ar : sub.en}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Language switch */}
        <div className="p-4 border-t">
          <button
            className="w-full font-semibold text-[#ee7120] text-lg hover:text-[#d66a2a] transition-colors"
            onClick={toggleLang}
          >
            {isArabic ? "EN" : "عربى"}
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setOpen(false)} />}

      {/* Main content */}
      <main>{children}</main>
    </>
  );
};
