"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const ProjectGallerySlider: React.FC = () => {
  return (
    <>
      <div className="projects-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Projects Gallery</span>
            <h2>We’ve Done Lot’s Of Work, Let’s Check Some From Here</h2>
          </div>
        </div>

        <div className="container-fluid">
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
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1700: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="projects-slides"
          >
            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project1.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/details">Digital Marketing</Link>
                  </h3>
                  <span className="category">Design</span>
                </div>
                <div className="plus-icon">
                  <Link href="/projects/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project2.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/details">Design & Development</Link>
                  </h3>
                  <span className="category">Planing</span>
                </div>
                <div className="plus-icon">
                  <Link href="/projects/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project3.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/details">Strategic Planing</Link>
                  </h3>
                  <span className="category">Marketing</span>
                </div>
                <div className="plus-icon">
                  <Link href="/projects/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project4.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/details">SEO Consultancy</Link>
                  </h3>
                  <span className="category">Development</span>
                </div>
                <div className="plus-icon">
                  <Link href="/projects/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project5.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/details">Competitor Analysis</Link>
                  </h3>
                  <span className="category">Design</span>
                </div>
                <div className="plus-icon">
                  <Link href="/projects/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project6.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/details">Social Media Marketing</Link>
                  </h3>
                  <span className="category">Development</span>
                </div>
                <div className="plus-icon">
                  <Link href="/projects/details" className="popup-btn">
                    <span></span>
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

export default ProjectGallerySlider;
