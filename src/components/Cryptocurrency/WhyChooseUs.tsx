"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-us-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <span className="sub-title">WHY CHOOSE US</span>
                <h3>
                  Deposit Your Crypto And <span>Start Earning</span> Immediately
                </h3>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work hand-in-hand with industry-leading brands
                  to help redefine the possibilities and potential.
                </p>

                <ul className="choose-list">
                  <li>Powerfull Api & Vault Protection</li>
                  <li>Manage Your Portfolio Easy Dashboard</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row choose-with-box-style">
                <div className="col-lg-6 col-sm-6">
                  <div className="why-choose-us-card">
                    <div className="image">
                      <Image
                        src="/images/cryptocurrency-home/choose/choose-1.png"
                        alt="image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3>Safe And Secure</h3>
                    <p>
                      Lorem ipsum dolor sit amet, is consectetur adipiscing
                      elit, sed do eiusmo.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="why-choose-us-card">
                    <div className="image">
                      <Image
                        src="/images/cryptocurrency-home/choose/choose-2.png"
                        alt="image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3>Instant Exchange</h3>
                    <p>
                      Lorem ipsum dolor sit amet, is consectetur adipiscing
                      elit, sed do eiusmo.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="why-choose-us-card">
                    <div className="image">
                      <Image
                        src="/images/cryptocurrency-home/choose/choose-3.png"
                        alt="image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3>Experts Support</h3>
                    <p>
                      Lorem ipsum dolor sit amet, is consectetur adipiscing
                      elit, sed do eiusmo.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="why-choose-us-card">
                    <div className="image">
                      <Image
                        src="/images/cryptocurrency-home/choose/choose-4.png"
                        alt="image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3>Online Wallet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, is consectetur adipiscing
                      elit, sed do eiusmo.
                    </p>
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

export default WhyChooseUs;
