"use client";

import React from "react";
import Image from "next/image";

const PartnerWithTitle: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Partner</span>
            <h2>
              We partner with companies of all sizes, all around the world
            </h2>
          </div>

          <div className="row align-items-center">
            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img1.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img1.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img2.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img2.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img3.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img3.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img4.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img4.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img5.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img5.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img6.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img6.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img7.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img7.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img8.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img8.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img9.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img9.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div className="single-partner-item">
              <a href="#" target="_blank">
                <Image
                  src="/images/partner-image/partner-img10.png"
                  alt="image"
                  width={200}
                  height={60}
                />
                <Image
                  src="/images/partner-image/partner-img10.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Animation Shape Image */}
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
      </div>
    </>
  );
};

export default PartnerWithTitle;
