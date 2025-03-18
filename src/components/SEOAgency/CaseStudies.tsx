"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const CaseStudies: React.FC = () => {
  return (
    <>
      <div className="works-area ptb-100 gray-bg">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">Projects</span>
            <h2>Our Case Studies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              930: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="work-slider"
          >
            <SwiperSlide>
              <div className="work-card">
                <Image
                  src="/images/works/work1.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects/2">SEO Optimization</Link>
                  </span>
                  <h3>
                    <Link href="/projects/details">
                      Designing a better cinema experience
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Case Study
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <Image
                  src="/images/works/work2.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects/2">Digital Marketing</Link>
                  </span>
                  <h3>
                    <Link href="/projects/details">
                      Building design process within teams
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Case Study
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <Image
                  src="/images/works/work3.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects/2">Keyword Targeting</Link>
                  </span>
                  <h3>
                    <Link href="/projects/details">
                      How intercom brings play eCommerce
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Case Study
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <Image
                  src="/images/works/work4.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects/2">Email Marketing</Link>
                  </span>
                  <h3>
                    <Link href="/projects/details">
                      How to start a project with Reactjs
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Case Study
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <Image
                  src="/images/works/work5.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects/2">Marketing & Reporting</Link>
                  </span>
                  <h3>
                    <Link href="/projects/details">
                      Examples of different types of sprints
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Case Study
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <Image
                  src="/images/works/work6.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects/2">Development</Link>
                  </span>
                  <h3>
                    <Link href="/projects/details">
                      Redesigning the New York times app
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Case Study
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
