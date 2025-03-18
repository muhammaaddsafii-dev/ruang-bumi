"use client";

import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/images/about-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">About Us</span>
                <h2>We Are Digital Explorers</h2>
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

        {/* Animation Shape Image */}
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

export default About;
