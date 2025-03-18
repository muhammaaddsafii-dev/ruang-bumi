"use client";

import React from "react";
import Image from "next/image";

const OurFeatures: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/features-image/feature-image1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">Our Features</span>
                <h2>Creative solutions to improve your business!</h2>
                <p>
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.
                  The customer is king, their lives and needs are the
                  inspiration.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Recommender systems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Demand prediction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Omnichannel analytics
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Lead generation
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Dedicated Developers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> 24/7 Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Images */}
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
