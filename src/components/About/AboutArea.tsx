"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const AboutArea: React.FC = () => {
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
                  src="/images/about-img2.jpg"
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="solution-video">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="flaticon-play-button"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <div className="section-title text-left">
                  <span className="sub-title">About Us</span>
                  <h3>We provide integrated mapping solutions using high-resolution satellite imagery and geo artificial intelligence.</h3>
                </div>

                <div className="about-text">
                  <p>
                    At Ruang Bumi, we are committed to revolutionizing geospatial intelligence through cutting-edge technology. Specializing in high-resolution satellite imagery and geo artificial intelligence, we provide accurate and reliable mapping solutions tailored to various industries, including agriculture, forestry, urban planning, and environmental monitoring.
                  </p>
                </div>

                <div className="about-text">
                  <p>
                    With a team of experts in remote sensing, GIS, and data analytics, we transform complex spatial data into actionable insights, empowering businesses and organizations to make informed decisions. Whether you need custom thematic maps, real-time land monitoring, or AI-driven geospatial analysis, Ruang Bumi is your trusted partner in mapping the future.
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
