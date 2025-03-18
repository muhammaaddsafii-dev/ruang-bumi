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

      <div className="cs-banner-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cs-banner-content">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  PROFESSIONAL COMPANY WITH RELIABLE SERVICE
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Cyber Security Expert
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Secure your Cyberspace, secure your Digital Life
                </p>

                <ul
                  className="banner-btn"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
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
              <div
                className="cs-banner-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <Image
                  src="/images/cyber-security-home/banner/main.png"
                  alt="image"
                  width={1187}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cs-banner-shape">
          <Image
            src="/images/cyber-security-home/banner/shape.png"
            alt="image"
            width={350}
            height={385}
          />
        </div>
        <div className="cs-lock">
          <Image
            src="/images/cyber-security-home/banner/lock.png"
            alt="image"
            width={40}
            height={46}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
