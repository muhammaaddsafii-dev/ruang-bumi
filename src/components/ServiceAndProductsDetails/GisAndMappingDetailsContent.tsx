"use client";

import React from "react";
import Image from "next/image";

const GisAndMappingDetailsContent: React.FC = () => {
  return (
    <>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>Gis And Mapping Services</h3>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> GIS Data
                </h4>
                <p>
                  High-resolution satellite imagery, areal photography, Lidar
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Thematic Map
                </h4>
                <p>
                  Land Use and Land Cover Map, Topography Map, Digital Map
                  Village, Infrastructure and Urban Planning Map (RTRW/RDTR)
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Thematic Survey
                </h4>
                <p>
                  Topography Survei, Demographic and Population Survey,
                  Environmental Survey, Agricultural Survey
                </p>
              </div>
              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> GIS App & GeoAI
                </h4>
                <p>
                  WebGIS, GIS Processing and Analyst, Tree Palm Counting, Object
                  Detection and Classification
                </p>
              </div>
            </div>

            <div className="services-details-image">
              <Image
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S_GIS.png"
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

export default GisAndMappingDetailsContent;
