"use client";

import React from "react";
import Image from "next/image";

const TrainingDetailsContent: React.FC = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>Training Services</h3>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> GIS
                </h4>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Remote Sensing
                </h4>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Agriculture
                </h4>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Foresty
                </h4>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Spatial Programming
                </h4>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> GeoAI
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
