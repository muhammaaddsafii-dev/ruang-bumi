"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="bd-banner-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="bd-banner-content">
                <span className="sub-title">
                  PROFESSIONAL COMPANY WITH RELIABLE SERVICES
                </span>

                <h1>
                  Customer Ai & <span>Big Data</span> Solution For Analytics
                </h1>

                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work hand-in-hand.
                </p>

                <ul className="banner-btn">
                  <li>
                    <Link href="/contact" className="default-btn">
                      Get Started <span></span>
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="flaticon-play-button"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="bd-banner-image">
                <Image
                  src="/images/big-data-home/banner/main.png"
                  alt="image"
                  width={745}
                  height={855}
                />
                <div className="circle-shape"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="bd-banner-shape-1">
          <Image
            src="/images/big-data-home/banner/shape-1.png"
            alt="image"
            width={94}
            height={64}
          />
        </div>
        <div className="bd-banner-shape-2">
          <Image
            src="/images/big-data-home/banner/shape-2.png"
            alt="image"
            width={60}
            height={256}
          />
        </div>
        <div className="bd-banner-shape-3">
          <Image
            src="/images/big-data-home/banner/shape-3.png"
            alt="image"
            width={126}
            height={134}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
