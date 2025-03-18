"use client";

import React from "react";
import Image from "next/image";

const ProvideAdvancedSecurity: React.FC = () => {
  return (
    <>
      <div className="leading-technology-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="leading-technology-image">
                <Image
                  src="/images/cyber-security-home/leading-technology.png"
                  alt="image"
                  width={1135}
                  height={885}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="leading-technology-content">
                <span className="sub-title">LEADING TECHNOLOGY FIRM</span>
                <h3>
                  Provide Advanced <span>Security</span> For Threat And
                  Effective Protection
                </h3>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work hand-in-hand with industry-leading brands
                  to help redefine the possibilities and potential.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>Network Detection</li>
                      <li>Managing Cloud Security</li>
                      <li>Website Hack Repair</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>Network Trafic Analysis</li>
                      <li>Hybrid Cloud Security</li>
                      <li>24/7 Security Support</li>
                    </ul>
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

export default ProvideAdvancedSecurity;
