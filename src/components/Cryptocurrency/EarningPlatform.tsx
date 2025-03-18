"use client";

import React from "react";
import Image from "next/image";

const EarningPlatform: React.FC = () => {
  return (
    <>
      <div className="earning-platform-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-linear-gradient-text">
            <span className="sub-title">CRYPTO EARNING PLATFORM</span>
            <h2>
              APY Rates And Custody <span>Cover Puts</span> Your Crypto To Work
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="earning-platform-card text-center">
                <div className="earning-image">
                  <Image
                    src="/images/cryptocurrency-home/earning/earning-1.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>Easy To Transact</h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="earning-platform-card text-center">
                <div className="earning-image">
                  <Image
                    src="/images/cryptocurrency-home/earning/earning-2.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>Trusted Security</h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="earning-platform-card text-center">
                <div className="earning-image">
                  <Image
                    src="/images/cryptocurrency-home/earning/earning-3.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>No Fear Of Loss</h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="earning-platform-card text-center">
                <div className="earning-image">
                  <Image
                    src="/images/cryptocurrency-home/earning/earning-4.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>No Expensive Software</h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarningPlatform;
