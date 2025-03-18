"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const TestimonialsTwo: React.FC = () => {
  return (
    <>
      <div className="feedback-area feedback-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Testimonials</span>
            <h2>Some Lovely Feedback From Our Clients</h2>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
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
              slidesPerView: 3,
            },
            1550: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="feedback-slides"
        >
          <SwiperSlide>
            <div className="single-feedback-item border">
              <p>
                “We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services.”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client1.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Jason Roy</h3>
                <span>Manager</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item border">
              <p>
                “We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services.”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client2.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>James Anderson</h3>
                <span>Web Developer</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item border">
              <p>
                “We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services.”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client3.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Sarah Taylor</h3>
                <span>Designer</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item border">
              <p>
                “We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services.”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client4.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Steven Smith</h3>
                <span>Manager</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item border">
              <p>
                “We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services.”
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client5.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Tom Nessham</h3>
                <span>EnvyTheme</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialsTwo;
