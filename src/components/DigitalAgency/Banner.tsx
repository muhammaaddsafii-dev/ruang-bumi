"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <>
      <div className="banner-section">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="banner-content">
                    <span className="sub-title">Creating. Results.</span>
                    <h1>Creative solutions to improve your business!</h1>
                    <p>
                      We work hand-in-hand with industry-leading brands to help
                      redefine the possibilities and potential of digital
                      engagements.
                    </p>

                    <form>
                      <input
                        type="email"
                        className="input-newsletter"
                        placeholder="Enter your email address"
                        name="email"
                      />
                      <button type="submit">Get Started</button>
                    </form>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="banner-image">
                    <Image
                      src="/images/rocket.png"
                      alt="image"
                      width={222}
                      height={740}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                    />

                    <Image
                      src="/images/rocket-shape.png"
                      alt="image"
                      width={196}
                      height={418}
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Images */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape-img7">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={100}
            height={93}
          />
        </div>
        <div className="cloud-shape">
          <Image
            src="/images/cloud-shape.png"
            alt="image"
            width={1920}
            height={275}
          />
        </div>
        <div className="cloud-icon1">
          <Image src="/images/cloud1.png" alt="image" width={100} height={30} />
        </div>
        <div className="cloud-icon2">
          <Image src="/images/cloud2.png" alt="image" width={117} height={36} />
        </div>
        <div className="cloud-icon3">
          <Image src="/images/cloud3.png" alt="image" width={150} height={46} />
        </div>
      </div>
    </>
  );
};

export default Banner;
