"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Feedbacks: React.FC = () => {
  return (
    <>
      <div className="unique-feedback-area pt-100">
        <div className="container">
          <div className="section-title with-linear-gradient-text">
            <span className="sub-title">CREATING FEEDBACK</span>
            <h2>These People Have Already Invested In Our Cryptocurrency</h2>
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
              1200: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="unique-feedback-slides"
          >
            <SwiperSlide>
              <div className="unique-single-feedback">
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
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback">
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
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback">
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
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback">
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
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback">
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
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-single-feedback">
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
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
