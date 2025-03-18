"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <>
      <div className="hero-banner banner-bg2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="hero-main-banner-content">
                    <span className="sub-title">Your brand, promoted</span>
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
                        placeholder="Enter your email"
                        name="EMAIL"
                      />
                      <button type="submit">Get Started</button>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="hero-main-banner-image">
                    <Image
                      src="/images/banner-image/man.png"
                      alt="man"
                      width={340}
                      height={400}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="30"
                    />

                    <Image
                      src="/images/banner-image/code.png"
                      alt="code"
                      width={174}
                      height={111}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="60"
                    />

                    <Image
                      src="/images/banner-image/carpet.png"
                      alt="carpet"
                      width={510}
                      height={293}
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="90"
                    />

                    <Image
                      src="/images/banner-image/bin.png"
                      alt="bin"
                      width={86}
                      height={112}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="120"
                    />

                    <Image
                      src="/images/banner-image/book.png"
                      alt="book"
                      width={78}
                      height={74}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="150"
                    />

                    <Image
                      src="/images/banner-image/desktop.png"
                      alt="desktop"
                      width={105}
                      height={147}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="180"
                    />

                    <Image
                      src="/images/banner-image/dot.png"
                      alt="dot"
                      width={94}
                      height={70}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="210"
                    />

                    <Image
                      src="/images/banner-image/flower-top-big.png"
                      alt="flower-top-big"
                      width={78}
                      height={290}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="240"
                    />

                    <Image
                      src="/images/banner-image/flower-top.png"
                      alt="flower-top"
                      width={53}
                      height={87}
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="270"
                    />

                    <Image
                      src="/images/banner-image/keyboard.png"
                      alt="keyboard"
                      width={121}
                      height={73}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    />

                    <Image
                      src="/images/banner-image/pen.png"
                      alt="pen"
                      width={42}
                      height={77}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="330"
                    />

                    <Image
                      src="/images/banner-image/table.png"
                      alt="table"
                      width={380}
                      height={342}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="360"
                    />

                    <Image
                      src="/images/banner-image/tea-cup.png"
                      alt="tea-cup"
                      width={44}
                      height={104}
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="390"
                    />

                    <Image
                      src="/images/banner-image/headphone.png"
                      alt="headphone"
                      width={62}
                      height={62}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="420"
                    />

                    {/* Main Images */}
                    <Image
                      src="/images/banner-image/main-pic.png"
                      alt="main-pic"
                      width={580}
                      height={560}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="450"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={289}
            height={274}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
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
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={202}
            height={202}
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
        <div className="shape-img8">
          <Image
            src="/images/shape/shape8.png"
            alt="image"
            width={74}
            height={64}
          />
        </div>
        <div className="shape-img9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={43}
            height={46}
          />
        </div>
        <div className="shape-img10">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
