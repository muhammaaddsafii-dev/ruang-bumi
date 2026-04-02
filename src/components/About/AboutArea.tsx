"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AboutArea: React.FC = () => {
  const { t } = useLanguage();
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="about-area-two ptb-100 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  // src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/About.png"
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Arumi.png"
                  alt="image"
                  className="rounded-10"
                  width={400}
                  height={550}
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <div className="section-title text-left">
                  <span className="sub-title">{t("About Us")}</span>
                  <h2>
                    {t("We provide solutions with collaboration")}
                  </h2>
                </div>

                <div className="about-text text-align-justify">
                  <p>
                    {t("Ruang Bumi Persada is a company operating in the geospatial sector. Ruang Bumi is committed to delivering high-quality earth-based services and products through the application of geospatial technology and artificial intelligence, providing impactful solutions for the broader community.")}
                  </p>
                </div>

                <div className="about-text text-align-justify">
                  <p>
                    {t("At Ruang Bumi, we strive to develop integrated mapping solutions using the latest technologies. We provide accurate and reliable mapping services tailored to various industries, including agriculture, forestry, urban planning, and environmental monitoring.")}
                  </p>
                </div>

                <div className="about-text text-align-justify">
                  <p>
                    {t("With a team of experts in remote sensing, GIS, Agricullture, Forestry and Programming, we combine spatial, statistical and measured data into actionable insights. We strive to open up cooperation to a broader scope by collaborating with communities, academia, government and other industrial companies to provide benefits and appropriate solutions to existing problems. Ruang Bumi is your trusted partner in mapping the future.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
