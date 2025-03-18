"use client";

import React from "react";
import Image from "next/image";

const GetStrated: React.FC = () => {
  return (
    <>
      <div className="crypto-get-strated-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="crypto-get-strated-image">
                <Image
                  src="/images/cryptocurrency-home/get-strated/get-strated.png"
                  alt="image"
                  width={785}
                  height={1002}
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="crypto-get-strated-content">
                <div className="content">
                  <span>GET STARTED IN MINUTES</span>
                  <h3>Get Strated In A Few Minute With Our Crypto Platform</h3>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="/images/cryptocurrency-home/get-strated/icon1.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>Create Account</h3>
                      <p>
                        Lorem ipsum dolor sit amet is adipiscing elit sed do
                        eiusmo.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="/images/cryptocurrency-home/get-strated/icon2.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>Link Bank Account</h3>
                      <p>
                        Lorem ipsum dolor sit amet is adipiscing elit sed do
                        eiusmo.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="crypto-get-strated-card">
                      <div className="get-image">
                        <Image
                          src="/images/cryptocurrency-home/get-strated/icon3.png"
                          alt="image"
                          width={98}
                          height={98}
                        />
                      </div>
                      <h3>Buying & Selling</h3>
                      <p>
                        Lorem ipsum dolor sit amet is adipiscing elit sed do
                        eiusmo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="crypto-get-strated-shape">
          <Image
            src="/images/cryptocurrency-home/get-strated/shape.png"
            alt="image"
            width={68}
            height={114}
          />
        </div>
      </div>
    </>
  );
};

export default GetStrated;
