"use client";

import React from "react";
import Image from "next/image";

const FunFacts: React.FC = () => {
  return (
    <>
      <div className="bd-fun-facts-area">
        <div className="container-fluid">
          <div className="bd-fun-facts-inner-box pt-100 pb-70">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="bd-single-fun-facts">
                  <div className="image-icon">
                    <Image
                      src="/images/big-data-home/fun-facts/image-1.png"
                      alt="icon"
                      width={54}
                      height={54}
                    />
                  </div>
                  <h3>
                    2,250 <span className="sign-icon">+</span>
                  </h3>
                  <p>Cybersecurity Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-single-fun-facts">
                  <div className="image-icon">
                    <Image
                      src="/images/big-data-home/fun-facts/image-2.png"
                      alt="icon"
                      width={54}
                      height={54}
                    />
                  </div>
                  <h3>
                    1,400 <span className="sign-icon">+</span>
                  </h3>
                  <p>Satisfied Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-single-fun-facts">
                  <div className="image-icon">
                    <Image
                      src="/images/big-data-home/fun-facts/image-3.png"
                      alt="icon"
                      width={54}
                      height={54}
                    />
                  </div>
                  <h3>
                    8,50 <span className="sign-icon">+</span>
                  </h3>
                  <p>Industries Served</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-single-fun-facts">
                  <div className="image-icon">
                    <Image
                      src="/images/big-data-home/fun-facts/image-4.png"
                      alt="icon"
                      width={54}
                      height={54}
                    />
                  </div>
                  <h3>
                    8,50 <span className="sign-icon">K</span>
                  </h3>
                  <p>Positive Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
