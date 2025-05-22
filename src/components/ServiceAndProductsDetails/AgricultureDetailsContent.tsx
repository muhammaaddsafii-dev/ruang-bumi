"use client";

import React from "react";
import Image from "next/image";

const AgricultureDetailsContent: React.FC = () => {
  return (
    <>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>Agriculture Services</h3>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i>Land Suitability Survey
                </h4>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i>Soil Survey (quality and
                  health)
                </h4>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i>Fertilization Recommendations
                </h4>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i>Soil laboratory Test
                </h4>
              </div>
            </div>

            <div className="services-details-image">
              <Image
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S_AGRI.png"
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

export default AgricultureDetailsContent;
