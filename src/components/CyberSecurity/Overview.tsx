"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Overview: React.FC = () => {
  return (
    <>
      <div className="cs-overview-area pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cs-overview-item">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="cs-overview-image">
                      <Image
                        src="/images/cyber-security-home/overview-1.png"
                        alt="image"
                        width={200}
                        height={155}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <div className="cs-overview-content">
                      <h3>Personal Online Protection Everywhere We Go</h3>
                      <Link href="/contact" className="get-started-btn">
                        GET STARTED
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cs-overview-item">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="cs-overview-image">
                      <Image
                        src="/images/cyber-security-home/overview-2.png"
                        alt="image"
                        width={200}
                        height={155}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <div className="cs-overview-content">
                      <h3>Simple Solution For Your Business's Security</h3>
                      <Link href="/contact" className="get-started-btn">
                        GET STARTED
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
