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
                  <h3>
                    We provide integrated mapping solutions with collaboration.
                  </h3>
                </div>

                <div className="about-text">
                  <p>
                    Start your journey with Ruang Bumi! We help businesses,
                    researchers, industries and governments make data-driven
                    decisions with advanced mapping technology. Ruang Bumi is a
                    collaborative space within the scope of earth sciences. We
                    facilitate consultation and discussion spaces related to
                    GIS, Agriculture, Forestry, etc.
                  </p>
                </div>

                <div className="about-text">
                  <p>
                    At Ruang Bumi, we are committed to developing geospatial
                    intelligence and integrated mapping through cutting-edge
                    technology. We provide accurate and reliable mapping
                    solutions tailored to various industries, including
                    agriculture, forestry, urban planning, and environmental
                    monitoring.
                  </p>
                </div>

                <div className="about-text">
                  <p>
                    With a team of experts in remote sensing, GIS, Agricullture,
                    Forestry and Programming, we combine spatial, statistical
                    and measured data into actionable insights. We strive to
                    open up cooperation to a broader scope by collaborating with
                    communities, academia, government and other industrial
                    companies to provide benefits and appropriate solutions to
                    existing problems. Ruang Bumi is your trusted partner in
                    mapping the future.
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
