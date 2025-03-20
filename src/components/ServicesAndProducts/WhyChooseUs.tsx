"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <span className="sub-title">Why Choose Us</span>
                <h2>The Key To Your Motivation And Success</h2>
                <p>
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> High-Resolution & Accurate Data
                  </h4>
                  <p>
                    We provide the latest satellite imagery and geospatial data with industry-leading accuracy to support decision-making across various sectors.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> AI-Powered Insights
                  </h4>
                  <p>
                    Our advanced AI algorithms automate image classification, land-use detection, and environmental monitoring for faster and more precise analysis.
                  </p>
                </div>
                
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Trusted by Experts & Organizations
                  </h4>
                  <p>
                    We are proud to collaborate with governments, research institutions, and businesses globally, delivering reliable geospatial intelligence for impactful decision-making.
                  </p>
                </div>



              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-image">
                <Image
                  src="/images/why-choose-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
