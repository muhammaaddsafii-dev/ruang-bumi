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
            <h2>Building a Sustainable Future with Integrity & Quality</h2>
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
                  <h3>Transparency to Intimacy</h3>
                  <p>
                    We uphold honesty and openness in every aspect of our work,
                    committed, meaningful and sustainable relationships.
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
                  <h3>Integrity and Quality</h3>
                  <p>
                    We establish an environment grounded in integrity and are
                    committed to providing high-quality products.
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
                  <h3>Humanity and humility</h3>
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
                  <h3>Growth-Oriented</h3>
                  <p>
                    We develop progressive mindsets and strategic actions to
                    support continuous growth and development
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
