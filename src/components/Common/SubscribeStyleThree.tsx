"use client";

import React from "react";
import Image from "next/image";

const SubscribeStyleThree: React.FC = () => {
  return (
    <>
      <div className="free-trial-area ptb-100 bg-f4f7fe">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="ft-img">
                <Image
                  src="/images/machine-learning/free-trial-img.png"
                  alt="Image"
                  width={700}
                  height={400}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="subscribe-content">
                <span className="sub-title">Get Started Instantly!</span>
                <h2>Get only new update from this newsletter</h2>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />

                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeStyleThree;
