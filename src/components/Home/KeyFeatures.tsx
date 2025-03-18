"use client";

import React from "react";
import Image from "next/image";

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div className="key-features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-linear-gradient-text">
            <span className="sub-title">KEY FEATURES</span>
            <h2>
              Simple & Secure Access To <span>Buy, Sell</span> And Use
              Cryptocurrency
            </h2>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="/images/cryptocurrency-home/key-features/icon1.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Bank Transfer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is demo consectetur adipiscing
                    elit.
                  </p>
                </div>

                <div className="key-content right-gap">
                  <div className="icon-image">
                    <Image
                      src="/images/cryptocurrency-home/key-features/icon2.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Online Wallets</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is demo consectetur adipiscing
                    elit.
                  </p>
                </div>

                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="/images/cryptocurrency-home/key-features/icon3.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Competitive Mining</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is demo consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-image">
                  <Image
                    src="/images/cryptocurrency-home/key-image.png"
                    alt="image"
                    width={748}
                    height={470}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="/images/cryptocurrency-home/key-features/icon4.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Cash Payment</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is demo consectetur adipiscing
                    elit.
                  </p>
                </div>

                <div className="key-content left-gap">
                  <div className="icon-image">
                    <Image
                      src="/images/cryptocurrency-home/key-features/icon5.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Currency Exchange</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is demo consectetur adipiscing
                    elit.
                  </p>
                </div>

                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="/images/cryptocurrency-home/key-features/icon6.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Insurance Protected</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is demo consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
