"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <div className="section-title text-left">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Outstanding Digital Experience</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="bx bx-badge-check"></i>
                  <h4>Best Performence</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor abore et dolore magna aliqua.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="bx bx-badge-check"></i>
                  <h4>Dedicated Team Member</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor abore et dolore magna aliqua.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="bx bx-badge-check"></i>
                  <h4>24/7 Support!</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor abore et dolore magna aliqua.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link className="default-btn" href="/about">
                    Discover More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="why-choose-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
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
