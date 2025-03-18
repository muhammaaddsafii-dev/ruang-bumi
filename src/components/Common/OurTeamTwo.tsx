"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const OurTeamTwo: React.FC = () => {
  return (
    <>
      <div className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Team</span>
            <h2>Our Expert Team</h2>
          </div>

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
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="team-slider"
          >
            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team10.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>John Smith</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team11.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Lucy Eva</h3>
                  <span>Backend Team Leader</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team12.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Steven Smith</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team13.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Mark Smith</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team14.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Williams Smith</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Animation shape image */}
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

export default OurTeamTwo;
