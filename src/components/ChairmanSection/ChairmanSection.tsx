import React from 'react';
import { Card, CardContent } from '../ui/card';

export const ChairmanSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chairman Image */}
          <div className="relative">
            <img
              className="w-full max-w-[381px] h-[488px] object-cover rounded-lg shadow-lg mx-auto"
              alt="Sheikha Fatima Bint Hazza Bin Zayed Al Nahyan"
              src="/image-5.png"
            />
          </div>

          {/* Chairman Information */}
          <Card className="bg-[#a5a368] rounded-[60px] border-none shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="[font-family:'DIN_Next_LT_Arabic-Medium',Helvetica] font-medium text-black text-lg tracking-[1.76px]">
                    Sheikha Fatima Bint Hazza Bin Zayed Al Nahyan
                  </h3>
                  <p className="[font-family:'DIN_Next_LT_Arabic-Regular',Helvetica] font-normal text-black text-base tracking-[1.76px] text-right">
                    Chairman
                  </p>
                </div>

                <div className="[font-family:'DIN_Next_LT_Arabic-Regular',Helvetica] font-normal text-black text-sm tracking-[1.82px] leading-relaxed space-y-4">
                  <p>
                    Sheikha Fatima Bint Hazza Bin Zayed Al Nahyan has been chairing the Board of Directors of the Fatima Bint Mubarak Ladies Sports Academy (FBMA) since its establishment in 2010. Being responsible for developing women sports through this reputable Abu Dhabi governmental entity, she carries forward the vision of Her Highness Sheikha Fatima Bint Mubarak, Mother of the Nation, to empower Emirati women to succeed as individuals and strengthen their role as members of the community.
                  </p>
                  <p>
                    In April 2017, Sheikha Fatima was appointed Chairwoman of the Abu Dhabi and the Al Ain Ladies Clubs in recognition of her contributions to the achievement of significant development in the women sports sector of Abu Dhabi and the UAE.
                  </p>
                  <p>
                    Sheikha Fatima Bint Hazza Bin Zayed Al Nahyan is an ambassador of cultural development in the UAE. She is an avid art enthusiast, an artist, collector, and patron of arts and literature in the UAE. Her artwork deals with ideas of cultural identity through a diverse range of media including drawing, installation, photography and video art.
                  </p>
                  <p>
                    Equipped with academic distinction and fluency in four languages, Sheikha Fatima is the founder of the Fatima Bint Hazza Cultural Foundation, a non-profit organization that celebrates all forms of cultural expression and cultivates children's literature through books, applications and a cultural agenda.
                  </p>
                  <p>
                    Sheikha Fatima has earned a Bachelor of Fine Arts in Visual Communication with a concentration in Photography, graduating suma cum laude with honors from the American University in Dubai. She received the Sheikh Mohammad Bin Rashed Patrons of the Arts Award in 2012.
                  </p>
                  <p>
                    Sheikha Fatima also obtained an Executive Masters in Business Administration in 2021 and a MSc in project management in 2022 from the Essex University in the UK.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};