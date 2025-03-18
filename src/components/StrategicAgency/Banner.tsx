"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <>
      <div className="hero-banner banner-bg1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="hero-banner-content">
                    <span className="sub-title">Welcome to Taiker</span>
                    <h1>Creative & Strategic Digital Marketing Agency</h1>
                    <p>
                      We work hand-in-hand with industry-leading brands to help
                      redefine the possibilities and potential of digital
                      engagements.
                    </p>

                    <div className="btn-box">
                      <Link href="/contact" className="default-btn">
                        Get Started <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="hero-banner-image">
                    <Image
                      src="/images/banner-image/main.png"
                      alt="main"
                      width={625}
                      height={507}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="50"
                    />

                    <Image
                      src="/images/banner-image/banner-shape1.png"
                      alt="banner-shape1"
                      width={205}
                      height={387}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                    />

                    <Image
                      src="/images/banner-image/banner-shape2.png"
                      alt="carpet"
                      width={257}
                      height={306}
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="150"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={289}
            height={274}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
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
