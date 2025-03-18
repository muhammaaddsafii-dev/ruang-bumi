"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PricingStyleThree: React.FC = () => {
  return (
    <>
      <div className="pricing-area-two pt-100 pb-70 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <h2>Choose Your Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  <div className="icon">
                    <Image
                      src="/images/icon1.png"
                      alt="Icon"
                      width={85}
                      height={88}
                    />
                  </div>
                  <h3>Starter</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 120 <sub>/ Per Month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bx-badge-check"></i>5 GB Bandwidth
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Highest Speed
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>1 GB Storage
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Branding Solutions
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Unlimited Website
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Unlimited Users
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    24/7 Great Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/contact" className="default-btn">
                    Select the plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  <div className="icon">
                    <Image
                      src="/images/icon2.png"
                      alt="Icon"
                      width={85}
                      height={88}
                    />
                  </div>
                  <h3>Premium</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 150 <sub>/ Per Month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bx-badge-check"></i>
                    10 GB Bandwidth
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Highest Speed
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>2 GB Storage
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Branding Solutions
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Unlimited Website
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Unlimited Users
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    24/7 Great Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/contact" className="default-btn">
                    Select the plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  <div className="icon">
                    <Image
                      src="/images/icon3.png"
                      alt="Icon"
                      width={85}
                      height={88}
                    />
                  </div>
                  <h3>Standard</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 200 <sub> / Per Month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bx-badge-check"></i>
                    15 GB Bandwidth
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Highest Speed
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>5 GB Storage
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Branding Solutions
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Unlimited Website
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Unlimited Users
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    24/7 Great Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/contact" className="default-btn">
                    Select the plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
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

export default PricingStyleThree;
