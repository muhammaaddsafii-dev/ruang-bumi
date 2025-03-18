"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const PartnerSlider: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-100 pt-0">
        <div className="container">
          <Swiper
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 6500,
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
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img1.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img1.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img2.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img2.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img3.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img3.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img4.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img4.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img5.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img5.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img6.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img6.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img7.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img7.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img8.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img8.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img9.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img9.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner-image/partner-img10.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                  <Image
                    src="/images/partner-image/partner-img10.png"
                    alt="image"
                    width={200}
                    height={60}
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

export default PartnerSlider;
