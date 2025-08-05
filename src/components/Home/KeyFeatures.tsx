"use client";

import React from "react";
import Image from "next/image";

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div className="key-features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-linear-gradient-text">
            <span className="sub-title">Our Core Values</span>
            <h2>Building a Sustainable Future with Innovation & Integrity</h2>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Integrity & Transparency</h3>
                  <p>
                    We uphold honesty and openness in every aspect of our work,
                    ensuring clients receive reliable and trustworthy
                    information.
                  </p>
                </div>

                <div className="key-content right-gap">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Innovation & Excellence</h3>
                  <p>
                    We continuously strive for cutting-edge solutions by
                    integrating advanced technologies in geospatial analysis and
                    AI.
                  </p>
                </div>
                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Data Accuracy & Reliability</h3>
                  <p>
                    We ensure the highest precision in mapping and analysis,
                    providing data that meets industry standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Brand.png"
                    alt="image"
                    width={448}
                    height={170}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="key-features-card">
                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Sustainability & Responsibility</h3>
                  <p>
                    We support environmental and social sustainability by
                    utilizing geospatial data to drive responsible
                    decision-making.
                  </p>
                </div>

                <div className="key-content left-gap">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Collaboration & Partnership</h3>
                  <p>
                    We believe in strong partnerships and teamwork to drive
                    innovation and deliver the best results.
                  </p>
                </div>

                <div className="key-content">
                  <div className="icon-image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Done.png"
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3>Customer-Centric Approach</h3>
                  <p>
                    Our clients’ needs are our top priority, and we tailor our
                    services to deliver the most effective and impactful
                    solutions.
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
