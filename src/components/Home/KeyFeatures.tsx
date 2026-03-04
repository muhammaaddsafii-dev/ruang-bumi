"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const KeyFeatures: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="key-features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-linear-gradient-text">
            <span className="sub-title">{t("Our Core Values")}</span>
            <h2>{t("Building a Sustainable Future with Integrity & Quality")}</h2>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>{t("Transparency to Intimacy")}</h3>
                  <p>
                    {t("We uphold honesty and openness in every aspect of our work, committed, meaningful and sustainable relationships.")}
                  </p>
                </div>

                <div className="key-content right-gap">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>{t("Integrity and Quality")}</h3>
                  <p>
                    {t("We establish an environment grounded in integrity and are committed to providing high-quality products.")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Brand.png"
                    alt="image"
                    width={448}
                    height={170}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>{t("Humanity and humility")}</h3>
                  <p>
                    {t("We uphold humanitarian values within society and demonstrate humility in our actions and conduct.")}
                  </p>
                </div>

                <div className="key-content left-gap">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>{t("Growth-Oriented")}</h3>
                  <p>
                    {t("We develop progressive mindsets and strategic actions to support continuous growth and development")}
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

export default KeyFeatures;
