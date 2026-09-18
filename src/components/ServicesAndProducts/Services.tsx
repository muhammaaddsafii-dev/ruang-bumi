"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Services: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="ml-services-area ptb-100 mt-5">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">{t("Our Services")}</span>
            <h2>{t("Our Professionals Services")}</h2>
            <p style={{ textAlign: "center" }}>
              {t("Ruang Bumi is a collaborative space within the scope of earth science. We facilitate consultation and discussion space related to GIS, Agriculture, Forestry, etc.")}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S1.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/mapping">
                    {t("Mapping")}
                  </Link>
                </h3>

                <Link
                  href="/services-and-products/mapping"
                  className="read-more"
                >
                  {t("Read More")}
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/gis-uhuy.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/gis-data">
                    {t("GIS Data")}
                  </Link>
                </h3>

                <Link
                  href="/services-and-products/gis-data"
                  className="read-more"
                >
                  {t("Read More")}
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S3.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/forestry">{t("Forestry")}</Link>
                </h3>

                <Link
                  href="/services-and-products/forestry"
                  className="read-more"
                >
                  {t("Read More")}
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/s9.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/gis-apps-geoai">
                    {t("GIS App & GeoAI")}
                  </Link>
                </h3>

                <Link
                  href="/services-and-products/gis-apps-geoai"
                  className="read-more"
                >
                  {t("Read More")}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
