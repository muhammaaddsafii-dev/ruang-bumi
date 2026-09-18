"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const GisAppsGeoAiDetailsContent: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>{t("GIS App & GeoAI")}</h3>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Web GIS")}
                </h4>
                {/* <p>
                  {t("Geographic Information System (GIS) applications used for spatial analysis, data visualization, and location-based data management.")}
                </p> */}
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Geospatial Data Management")}
                </h4>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("GIS Analyst")}
                </h4>
              </div>

              {/* <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Tree Palm Counting")}
                </h4>
                <p>
                  {t("The integration of Artificial Intelligence (AI) with geospatial data for automated analysis, trend prediction, and smart mapping.")}
                </p>
              </div> */}

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Object Detection and Classification")}
                </h4>
              </div>
            </div>

            <div className="services-details-image">
              <Image
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/GeoAI.gif"
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

export default GisAppsGeoAiDetailsContent;
