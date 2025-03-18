"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <>
      <div className="main-banner">
        <div className="container">
          <div className="main-banner-content">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Welcome to Taiker
            </span>
            
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Creative & Strategic Digital Marketing Agency
            </h1>

            <div
              className="btn-box"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <Link href="/contact" className="default-btn">
                Get Started <span></span>
              </Link>
            </div>
          </div>

          <div
            className="main-banner-image"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <Image
              src="/images/banner-image/banner-image1.png"
              alt="image"
              width={1525}
              height={540}
            />
          </div>
        </div>

        {/* Animation shape Images */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img7">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={100}
            height={93}
          />
        </div>
        <div className="shape-img8">
          <Image
            src="/images/shape/shape8.png"
            alt="image"
            width={74}
            height={64}
          />
        </div>
        <div className="shape-img9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={43}
            height={46}
          />
        </div>
        <div className="shape-img10">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
