"use client";

import React from "react";
import Image from "next/image";

const GetStrated: React.FC = () => {
  return (
    <>
      <div className="crypto-get-strated-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-12">
              <div className="crypto-get-strated-image">
                <Image
                  src="/images/cryptocurrency-home/get-strated/get-strated.png"
                  alt="image"
                  width={785}
                  height={1002}
                />
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="crypto-get-strated-content">
                <div className="content">
                  <span>Lets Try</span>
                  <h3>Get Strated to Ruang Bumi Satellite Imagery Explorer</h3>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="/images/cryptocurrency-home/get-strated/icon1.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>Define AOI</h3>
                      <p>
                        Define your (Area of Interest Specify) the location you
                        need mapped—whether it's a city, agricultural land,
                        forest, or coastal area.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="/images/cryptocurrency-home/get-strated/icon2.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>Satellite Imagery Type</h3>
                      <p>
                        Choose from high-resolution optical imagery, radar, or
                        multi-spectral satellite data based on your project
                        requirements.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="/images/cryptocurrency-home/get-strated/icon3.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>Processing & Analysis</h3>
                      <p>
                        Need AI-powered insights? We offer advanced image
                        classification, terrain modeling, and real-time
                        monitoring services.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="/images/cryptocurrency-home/get-strated/icon4.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>Data Delivered</h3>
                      <p>
                        Receive your processed satellite imagery in your
                        preferred format (GeoTIFF/ECW) via cloud storage or
                        direct download.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="crypto-get-strated-shape">
          <Image
            src="/images/cryptocurrency-home/get-strated/shape.png"
            alt="image"
            width={68}
            height={114}
          />
        </div>
      </div>
    </>
  );
};

export default GetStrated;
