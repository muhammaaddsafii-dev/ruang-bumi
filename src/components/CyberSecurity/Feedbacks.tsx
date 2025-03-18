"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Feedbacks: React.FC = () => {
  return (
    <>
      <div className="unique-feedback-area wrap-with-black-color pb-100">
        <div className="container">
          <div className="section-title with-line-text">
            <span className="sub-title">THOUGHTS OF OUR CLIENT</span>
            <h2>
              These People Have <span>Already</span> Experienced Our Review
            </h2>
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="unique-feedback-slides"
          >
            <SwiperSlide>
              <div className="unique-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user1.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />

                  <h3>Jason Roy</h3>
                  <span>Manager</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user2.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />

                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user3.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />

                  <h3>Jason Roy</h3>
                  <span>Manager</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user1.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />

                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user2.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />

                  <h3>Jason Roy</h3>
                  <span>Manager</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user3.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />

                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="unique-feedback-line-bg">
          <Image
            src="/images/cyber-security-home/line-bg.png"
            alt="image"
            width={1920}
            height={315}
          />
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
