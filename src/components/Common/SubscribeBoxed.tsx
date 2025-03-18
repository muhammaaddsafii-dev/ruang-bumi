"use client";

import React from "react";
import Image from "next/image";

const SubscribeBoxed: React.FC = () => {
  return (
    <>
      <div className="subscribe-area">
        <div className="container">
          <div
            className="subscribe-inner-area"
            style={{ backgroundImage: `url(/images/subscribe-bg.jpg)` }}
          >
            <div className="subscribe-content">
              <span className="sub-title">Get Started Instantly!</span>
              <h2>Get on only new update from this newsletter!</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your email"
                  name="email"
                />
                <button type="submit">Subscribe</button>
              </form>
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
      </div>
    </>
  );
};

export default SubscribeBoxed;
