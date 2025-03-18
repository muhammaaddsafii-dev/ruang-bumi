"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

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
        className="seo-banner-slider"
      >
        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h1>Digital Agency with Excellence Service</h1>

                        <p>
                          We work hand-in-hand with industry-leading brands to
                          help redefine the possibilities and potential of
                          digital engagements.
                        </p>

                        <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-3">
                            Get Started <span></span>
                          </Link>

                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i> Play Video
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                          src="/images/seo-banner/seo-banner1.png"
                          alt="image"
                          width={650}
                          height={502}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h1>Creative & Strategic Digital Marketing Agency</h1>

                        <p>
                          We work hand-in-hand with industry-leading brands to
                          help redefine the possibilities and potential of
                          digital engagements.
                        </p>

                        <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-3">
                            Get Started <span></span>
                          </Link>

                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i> Play Video
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                          src="/images/seo-banner/seo-banner2.png"
                          alt="image"
                          width={650}
                          height={420}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h1>Creative Solutions to Improve your Business!</h1>

                        <p>
                          We work hand-in-hand with industry-leading brands to
                          help redefine the possibilities and potential of
                          digital engagements.
                        </p>

                        <div className="banner-btn">
                          <Link href="/contact" className="default-btn mr-3">
                            Get Started <span></span>
                          </Link>

                          <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i> Play Video
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                          src="/images/seo-banner/seo-banner3.png"
                          alt="image"
                          width={650}
                          height={417}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
