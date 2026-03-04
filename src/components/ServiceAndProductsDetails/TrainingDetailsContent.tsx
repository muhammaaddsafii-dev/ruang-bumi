"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const TrainingDetailsContent: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>{t("Education Services")}</h3>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("GIS")}
                </h4>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Remote Sensing")}
                </h4>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Agriculture")}
                </h4>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Foresty")}
                </h4>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Spatial Programming")}
                </h4>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("GeoAI")}
                </h4>
              </div>
            </div>

            <div className="services-details-image">
              <Image
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S_TRAINING.png"
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

export default TrainingDetailsContent;
