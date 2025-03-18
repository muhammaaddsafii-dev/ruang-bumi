"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="cs-partner-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="section-title with-line-text">
            <span className="sub-title">THE POWER OF TAIKER</span>
            <h2>
              Taiker Has Been Trusted <span>Over 2300 +</span> Companies In The
              World
            </h2>
          </div>

          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 7,
              },
              1600: {
                slidesPerView: 8,
              },
            }}
            modules={[Autoplay]}
            className="cs-partner-slides"
          >
            <SwiperSlide>
              <div className="cs-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/cyber-security-home/partner/partner-1.png"
                    alt="image"
                    width={115}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/cyber-security-home/partner/partner-2.png"
                    alt="image"
                    width={115}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/cyber-security-home/partner/partner-3.png"
                    alt="image"
                    width={115}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/cyber-security-home/partner/partner-4.png"
                    alt="image"
                    width={115}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/cyber-security-home/partner/partner-5.png"
                    alt="image"
                    width={115}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/cyber-security-home/partner/partner-6.png"
                    alt="image"
                    width={115}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/cyber-security-home/partner/partner-7.png"
                    alt="image"
                    width={115}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/cyber-security-home/partner/partner-8.png"
                    alt="image"
                    width={115}
                    height={100}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
