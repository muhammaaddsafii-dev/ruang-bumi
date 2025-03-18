"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const BannerSlider: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="machine-learning-slider"
      >
        <SwiperSlide>
          <div
            className="machine-learning-banner"
            style={{
              backgroundImage: `url(/images/machine-learning/slider/ml-slider1.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-80">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner-content">
                        <h1>World’s Leading AI & Machine Learning Company</h1>

                        <p>
                          ML today are able to supply needful of help,
                          information, and positive experience of maintaining
                          intimacy with customers. Eventually, chatbot ideas
                          bring a pleasant experience of all these qualities
                          into the conversation.
                        </p>

                        <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-4">
                            Get Started <span></span>
                          </Link>

                          <Link href="#" className="default-btn-two">
                            Try It Free <span></span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="ml-video">
                        <div className="solution-video">
                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img2">
              <Image src="/images/shape/shape2.svg" alt="image" width={20} height={20} />
            </div>
            <div className="shape-img3">
              <Image src="/images/shape/shape3.svg" alt="image" width={22} height={22} />
            </div>
            <div className="shape-img4">
              <Image src="/images/shape/shape4.png" alt="image" width={15} height={15} />
            </div>
            <div className="shape-img5">
              <Image src="/images/shape/shape5.png" alt="image" width={18} height={18} />
            </div>
            <div className="shape-img6">
              <Image src="/images/shape/shape6.png" alt="image" width={202} height={202} />
            </div>
            <div className="shape-img7">
              <Image src="/images/shape/shape7.png" alt="image" width={100} height={93} />
            </div>
            <div className="shape-img8">
              <Image src="/images/shape/shape8.png" alt="image" width={74} height={64} />
            </div>
            <div className="shape-img9">
              <Image src="/images/shape/shape9.png" alt="image" width={43} height={46} />
            </div>
            <div className="shape-img10">
              <Image src="/images/shape/shape10.png" alt="image" width={12} height={11} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="machine-learning-banner"
            style={{
              backgroundImage: `url(/images/machine-learning/slider/ml-slider2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-80">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner-content">
                        <h1>Machine Learning Models For Business Process</h1>
                        <p>
                          ML today are able to supply needful of help,
                          information, and positive experience of maintaining
                          intimacy with customers. Eventually, chatbot ideas
                          bring a pleasant experience of all these qualities
                          into the conversation.
                        </p>

                        <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-4">
                            Get Started <span></span>
                          </Link>

                          <Link href="#" className="default-btn-two">
                            Try It Free <span></span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="ml-video">
                        <div className="solution-video">
                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img2">
              <Image src="/images/shape/shape2.svg" alt="image" width={20} height={20} />
            </div>
            <div className="shape-img3">
              <Image src="/images/shape/shape3.svg" alt="image" width={22} height={22} />
            </div>
            <div className="shape-img4">
              <Image src="/images/shape/shape4.png" alt="image" width={15} height={15} />
            </div>
            <div className="shape-img5">
              <Image src="/images/shape/shape5.png" alt="image" width={18} height={18} />
            </div>
            <div className="shape-img6">
              <Image src="/images/shape/shape6.png" alt="image" width={202} height={202} />
            </div>
            <div className="shape-img7">
              <Image src="/images/shape/shape7.png" alt="image" width={100} height={93} />
            </div>
            <div className="shape-img8">
              <Image src="/images/shape/shape8.png" alt="image" width={74} height={64} />
            </div>
            <div className="shape-img9">
              <Image src="/images/shape/shape9.png" alt="image" width={43} height={46} />
            </div>
            <div className="shape-img10">
              <Image src="/images/shape/shape10.png" alt="image" width={12} height={11} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="machine-learning-banner"
            style={{
              backgroundImage: `url(/images/machine-learning/slider/ml-slider3.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-80">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner-content">
                        <h1>
                          Use Machine Learning To Augment Your Business Process
                        </h1>
                        <p>
                          ML today are able to supply needful of help,
                          information, and positive experience of maintaining
                          intimacy with customers. Eventually, chatbot ideas
                          bring a pleasant experience of all these qualities
                          into the conversation.
                        </p>

                        <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-4">
                            Get Started <span></span>
                          </Link>

                          <Link href="#" className="default-btn-two">
                            Try It Free <span></span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="ml-video">
                        <div className="solution-video">
                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img2">
              <Image src="/images/shape/shape2.svg" alt="image" width={20} height={20} />
            </div>
            <div className="shape-img3">
              <Image src="/images/shape/shape3.svg" alt="image" width={22} height={22} />
            </div>
            <div className="shape-img4">
              <Image src="/images/shape/shape4.png" alt="image" width={15} height={15} />
            </div>
            <div className="shape-img5">
              <Image src="/images/shape/shape5.png" alt="image" width={18} height={18} />
            </div>
            <div className="shape-img6">
              <Image src="/images/shape/shape6.png" alt="image" width={202} height={202} />
            </div>
            <div className="shape-img7">
              <Image src="/images/shape/shape7.png" alt="image" width={100} height={93} />
            </div>
            <div className="shape-img8">
              <Image src="/images/shape/shape8.png" alt="image" width={74} height={64} />
            </div>
            <div className="shape-img9">
              <Image src="/images/shape/shape9.png" alt="image" width={43} height={46} />
            </div>
            <div className="shape-img10">
              <Image src="/images/shape/shape10.png" alt="image" width={12} height={11} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
