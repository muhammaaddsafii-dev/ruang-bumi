"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhatWeDo: React.FC = () => {
  return (
    <>
      <div className="overview-area ptb-100 bg-f2f2f7">
        <div className="container">
          <div className="overview-box it-overview">
            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service5.png"
                  alt="image"
                  width={650}
                  height={420}
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>What We Do Taiker Template</h2>
                <p>
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>

                <ul className="features-list">
                  <li>
                    <span className="bg-white">
                      <i className="bx bxs-badge-check"></i>
                      Customer Service
                    </span>
                  </li>
                  <li>
                    <span className="bg-white">
                      <i className="bx bxs-badge-check"></i>
                      UI/UX Design
                    </span>
                  </li>
                  <li>
                    <span className="bg-white">
                      <i className="bx bxs-badge-check"></i>
                      Mobile App Development
                    </span>
                  </li>
                  <li>
                    <span className="bg-white">
                      <i className="bx bxs-badge-check"></i>
                      Web Development
                    </span>
                  </li>
                  <li>
                    <span className="bg-white">
                      <i className="bx bxs-badge-check"></i>
                      Distinctive Brand
                    </span>
                  </li>
                  <li>
                    <span className="bg-white">
                      <i className="bx bxs-badge-check"></i>
                      Adaptive Innovation
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/contact" className="default-btn mr-4">
                    Contact Us
                    <span></span>
                  </Link>

                  <Link href="/services" className="default-btn-two">
                    Read More <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
