"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ForestryDetailsContent: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>{t("Forestry Services")}</h3>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Survey Kesesuaian Lahan Pertanian/Kehutanan")}
                </h4>
                <p>
                  {t("Survey kesesuaian lahan untuk mendukung perencanaan penggunaan lahan pertanian dan kehutanan yang optimal dan berkelanjutan.")}
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Thematic Map (PPKH, PIPPIB, Etc)")}
                </h4>
                <p>
                  {t("Peta tematik kehutanan meliputi PPKH (Persetujuan Penggunaan Kawasan Hutan) dan PIPPIB (Peta Indikatif Penghentian Pemberian Izin Baru), digunakan untuk mendukung proses perizinan, analisis kesesuaian lahan, dan pemantauan kawasan hutan.")}
                </p>
              </div>
            </div>

            <div className="services-details-image">
              <Image
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S_FOREST.png"
                alt="image"
                width={830}
                height={750}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForestryDetailsContent;
