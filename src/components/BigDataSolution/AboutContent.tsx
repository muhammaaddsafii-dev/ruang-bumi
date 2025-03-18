"use client";

import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="bd-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="bd-about-image">
                <Image
                  src="/images/big-data-home/about/about.png"
                  alt="image"
                  width={1036}
                  height={980}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="bd-about-content">
                <span className="sub-title">ABOUT TAIKER</span>
                <h3>
                  Professional Services <span>Provider</span> With Big Data
                  Solution
                </h3>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work hand-in-hand with industry-leading brands
                  to help redefine the possibilities and potential.
                </p>

                <div className="inner-content-card">
                  <div className="icon-image">
                    <Image
                      src="/images/big-data-home/about/image-1.png"
                      alt="image"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h4>Big Data Management</h4>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities.
                  </p>
                </div>

                <div className="inner-content-card">
                  <div className="icon-image">
                    <Image
                      src="/images/big-data-home/about/image-2.png"
                      alt="image"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h4>Big Data Analysis</h4>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities.
                  </p>
                </div>

                <div className="inner-content-card">
                  <div className="icon-image">
                    <Image
                      src="/images/big-data-home/about/image-3.png"
                      alt="image"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h4>Big Data Integration</h4>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bd-about-shape">
          <Image
            src="/images/big-data-home/about/shape.png"
            alt="image"
            width={42}
            height={176}
          />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
