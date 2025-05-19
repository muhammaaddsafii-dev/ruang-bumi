"use client";

import React from "react";
import Image from "next/image";

const ForestryDetailsContent: React.FC = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>Forestry Services</h3>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Land Boundaries Survey
                </h4>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Thematic Map (PPKH, PIPPIB,
                  Etc)
                </h4>
              </div>
            </div>

            <div className="services-details-image">
              <Image
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S_FOREST.png"
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

export default ForestryDetailsContent;
