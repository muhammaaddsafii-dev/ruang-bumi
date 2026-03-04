"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const GetStrated: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="crypto-get-strated-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-12">
              <div className="crypto-get-strated-image">
                <Image
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/get-strated.png"
                  alt="image"
                  width={785}
                  height={1002}
                />
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="crypto-get-strated-content">
                <div className="content">
                  <span>{t("Lets Try")}</span>
                  <h2 style={{ fontSize: "35px", fontWeight: "800" }}>
                    {t("Get Started to Ruang Bumi Explorer")}
                  </h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/icon1.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>{t("Define AOI")}</h3>
                      <p>
                        {t("Define your (Area of Interest Specify) the location you need mapped.")}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/icon2.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>{t("Satellite Imagery Type")}</h3>
                      <p>
                        {t("Choose high-resolution satellite imagery, the resolution based on your project requirements.")}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/icon3.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>{t("Processing & Analysis")}</h3>
                      <p>
                        {t("We offer advanced image classification and land cover monitoring services.")}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/icon4.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>{t("Data Delivered")}</h3>
                      <p>
                        {t("Receive your processed satellite imagery in your preferred format TIFF/ECW via cloud storage.")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStrated;
