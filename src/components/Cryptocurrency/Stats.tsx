"use client";

import React from "react";
import Image from "next/image";

const Stats: React.FC = () => {
  return (
    <>
      <div className="stats-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="stats-fun-fact-box text-center">
                <div className="stats-image">
                  <Image
                    src="/images/cryptocurrency-home/stats/stats-1.png"
                    alt="image"
                    width={123}
                    height={123}
                  />
                </div>
                <h3>$500m</h3>
                <span>Quarterly Volume Traded</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="stats-fun-fact-box text-center">
                <div className="stats-image">
                  <Image
                    src="/images/cryptocurrency-home/stats/stats-2.png"
                    alt="image"
                    width={123}
                    height={123}
                  />
                </div>
                <h3>100K+</h3>
                <span>Increased Verified Users</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="stats-fun-fact-box text-center">
                <div className="stats-image">
                  <Image
                    src="/images/cryptocurrency-home/stats/stats-3.png"
                    alt="image"
                    width={123}
                    height={123}
                  />
                </div>
                <h3>95%</h3>
                <span>Our Conversion Rate</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="stats-fun-fact-box text-center">
                <div className="stats-image">
                  <Image
                    src="/images/cryptocurrency-home/stats/stats-4.png"
                    alt="image"
                    width={123}
                    height={123}
                  />
                </div>
                <h3>2.7 Million</h3>
                <span>Our Total Happy Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
