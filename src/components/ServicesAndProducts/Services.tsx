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
            <div className="col-lg-4 col-md-6">
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
                  <Link href="/services-and-products/gis-and-mapping">
                    {t("GIS and Mapping")}
                  </Link>
                </h3>

                <Link
                  href="/services-and-products/gis-and-mapping"
                  className="read-more"
                >
                  {t("Read More")}
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S2.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/agriculture">
                    {t("Agriculture")}
                  </Link>
                </h3>
                {/* <p>
                  We provide land suitability survey, soil survey and laboratory tests.
                </p> */}

                <Link
                  href="/services-and-products/agriculture"
                  className="read-more"
                >
                  {t("Read More")}
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
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
                {/* <p>
                  We provide land bounderies survey and thmatic maps for forestry sector.
                </p> */}

                <Link
                  href="/services-and-products/forestry"
                  className="read-more"
                >
                  {t("Read More")}
                </Link>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S4.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/training">{t("Education")}</Link>
                </h3>
                <Link
                  href="/services-and-products/training"
                  className="read-more"
                >
                  {t("Read More")}
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
