"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PricingCard: React.FC = () => {
  return (
    <>
      <div className="pricing-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Basic</h3>
                </div>

                <div className="price">
                  <sub>$</sub>
                  39.99
                  <sub>/mo</sub>
                </div>

                <ul className="price-features-list">
                  <li>
                    <i className="flaticon-tick"></i> 1 Projects
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Email Support
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Phone Support
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Article Promotion
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Editorial Services
                  </li>
                  <li>
                    <i className="flaticon-close"></i> Profile Management
                  </li>
                  <li>
                    <i className="flaticon-close"></i> Selection Support
                  </li>
                </ul>

                <Link href="/contact" className="get-started-btn">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box red">
                <div className="pricing-header">
                  <h3>Starter</h3>
                </div>

                <div className="price">
                  <sub>$</sub>
                  49.99
                  <sub>/mo</sub>
                </div>

                <ul className="price-features-list">
                  <li>
                    <i className="flaticon-tick"></i> 2 Projects
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Email Support
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Phone Support
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Article Promotion
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Editorial Services
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Profile Management
                  </li>
                  <li>
                    <i className="flaticon-close"></i> Selection Support
                  </li>
                </ul>

                <Link href="/contact" className="get-started-btn">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box orange">
                <div className="pricing-header">
                  <h3>Extended</h3>
                </div>

                <div className="price">
                  <sub>$</sub>
                  59.99
                  <sub>/mo</sub>
                </div>

                <ul className="price-features-list">
                  <li>
                    <i className="flaticon-tick"></i> 3 Projects
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Email Support
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Phone Support
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Article Promotion
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Editorial Services
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Profile Management
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Selection Support
                  </li>
                </ul>

                <Link href="/contact" className="get-started-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Images */}
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

export default PricingCard;
