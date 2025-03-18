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

      <div className="cryptocurrency-banner-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cryptocurrency-banner-content">
                <span className="sub-title">
                  TRADE OVER 60 CRYPTOCURRENCIES
                </span>
                <h1>
                  Buy, Sell, and Trade <span>Cryptocurrencies</span>
                </h1>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work hand-in-hand with industry-leading brands
                  to help redefine the possibilities and potential.
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
              <div className="cryptocurrency-banner-image">
                <Image
                  src="/images/cryptocurrency-home/banner/main.png"
                  alt="image"
                  width={1010}
                  height={1024}
                />

                <div className="cart1">
                  <Image
                    src="/images/cryptocurrency-home/banner/cart1.png"
                    alt="cart1"
                    width={285}
                    height={162}
                  />
                </div>
                <div className="cart2">
                  <Image
                    src="/images/cryptocurrency-home/banner/cart2.png"
                    alt="cart2"
                    width={275}
                    height={188}
                  />
                </div>
                <div className="graph">
                  <Image
                    src="/images/cryptocurrency-home/banner/graph.png"
                    alt="graph"
                    width={345}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cryptocurrency-shape-1">
          <Image
            src="/images/cryptocurrency-home/banner/icon1.png"
            alt="image"
            width={80}
            height={80}
          />
        </div>
        <div className="cryptocurrency-shape-2">
          <Image
            src="/images/cryptocurrency-home/banner/icon2.png"
            alt="image"
            width={96}
            height={87}
          />
        </div>
        <div className="cryptocurrency-shape-3">
          <Image
            src="/images/cryptocurrency-home/banner/icon3.png"
            alt="image"
            width={53}
            height={53}
          />
        </div>
        <div className="cryptocurrency-shape-4">
          <Image
            src="/images/cryptocurrency-home/banner/icon4.png"
            alt="image"
            width={57}
            height={57}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
