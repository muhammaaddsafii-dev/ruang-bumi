"use client";

import React from "react";
import Link from "next/link";

const LetsGetToWork: React.FC = () => {
  return (
    <>
      <div className="subscribe-area bg-F4F7FC">
        <div
          className="subscribe-inner-area lets-work"
          style={{ backgroundImage: `url(/images/subscribe-bg.jpg)` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <span className="sub-title">READY TO DO THIS</span>
                <h2>Let's get to work!</h2>
              </div>

              <div className="col-lg-6">
                <div className="contact-btn">
                  <Link href="/contact" className="default-btn">
                    Contact Us <span></span>
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

export default LetsGetToWork;
