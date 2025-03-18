"use client";

import React from "react";
import Link from "next/link";

const TopServices: React.FC = () => {
  return (
    <>
      <div className="cs-card-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-card-content">
                <h3>
                  <Link href="/services/details">1. High Quality Services</Link>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-card-content">
                <h3>
                  <Link href="/services/details">2. Effective Protection</Link>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-card-content">
                <h3>
                  <Link href="/services/details">
                    3. Provide Advanced Security
                  </Link>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-card-content">
                <h3>
                  <Link href="/services/details">
                    4. Complete Website Security
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopServices;
