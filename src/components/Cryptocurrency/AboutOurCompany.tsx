"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutOurCompany: React.FC = () => {
  return (
    <>
      <div className="crypto-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="crypto-about-image">
                <Image
                  src="/images/cryptocurrency-home/about.png"
                  alt="image"
                  width={1068}
                  height={888}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="crypto-about-content">
                <span className="sub-title">ABOUT OUR COMPANY</span>
                <h3>
                  Start <span>Mining Crypto</span> Currency Today With Us
                </h3>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work hand-in-hand with industry-leading brands
                  to help redefine the possibilities and potential.
                </p>

                <ul className="list">
                  <li>
                    <i className="fa-solid fa-check"></i> Weekly Payouts To Your
                    Wallet
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Deposit And Withdraw
                    Anytime
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> No Lock-in Periods Or
                    Minimum Deposits
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Optional{" "}
                    <span>Nexus Mutual's Custody Cover</span>
                  </li>
                </ul>

                <div className="about-btn">
                  <Link href="/contact" className="default-btn">
                    Get Started <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurCompany;
