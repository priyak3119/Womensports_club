// src/components/ChairmanSection/ChairmanSection.tsx
import React from "react";
import { Card, CardContent } from "../ui/card";
import { useLanguage } from "../../context/LanguageContext";

export const ChairmanSection: React.FC = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chairman Image */}
          <div className="relative">
            <img
              className="w-full max-w-[381px] h-[488px] object-cover rounded-lg shadow-lg mx-auto"
              alt={isArabic ? "الشيخة فاطمة بنت هزاع بن زايد آل نهيان" : "Sheikha Fatima Bint Hazza Bin Zayed Al Nahyan"}
              src="/chairmanlogo.png"
            />
          </div>

          {/* Chairman Information */}
          <Card className="bg-[#a5a368] rounded-[60px] border-none shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium text-black text-lg tracking-[1.76px]">
                    {isArabic
                      ? "الشيخة فاطمة بنت هزاع بن زايد آل نهيان"
                      : "Sheikha Fatima Bint Hazza Bin Zayed Al Nahyan"}
                  </h3>
                  <p className="font-normal text-black text-base tracking-[1.76px] text-right">
                    {isArabic ? "رئيسة مجلس الإدارة" : "Chairman"}
                  </p>
                </div>

                <div className="font-normal text-black text-sm tracking-[1.82px] leading-relaxed space-y-4" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                  {isArabic ? (
                    <>
                      <p>تترأس الشيخة فاطمة...</p>
                      {/* Add all Arabic paragraphs */}
                    </>
                  ) : (
                    <>
                      <p>Sheikha Fatima Bint Hazza Bin Zayed Al Nahyan has been chairing...</p>
                      {/* Add all English paragraphs */}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
