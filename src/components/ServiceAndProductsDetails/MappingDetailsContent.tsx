"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const MappingDetailsContent: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>{t("Mapping Services")}</h3>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Thematic Map")}
                </h4>
                <p>
                  {t("Land Use and Land Cover Map, Topography Map, Digital Map Village, Infrastructure and Urban Planning Map (RTRW/RDTR)")}
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Thematic Survey")}
                </h4>
                <p>
                  {t("Topographic Survey, Demographic Survey, Environmental Survey, Agricultural Survey.")}
                </p>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Foto Udara")}
                </h4>
                <p>
                  {t("Akuisisi dan pengolahan foto udara (Ortomosaic dan DEM)")}
                </p>
              </div>
            </div>

            <div className="services-details-image">
              <Image
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S_GIS.png"
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

export default MappingDetailsContent;
