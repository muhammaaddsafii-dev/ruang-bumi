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
              backgroundImage: `url(https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/bg1.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner-content mt-80">
                        <div className="mobile-app-content">
                          <h1>
                            Welcome to{" "}
                            <span style={{ color: "#70e000" }}>Ruang</span>
                            &nbsp;<span style={{ color: "#cbfe33" }}>Bumi</span>
                          </h1>
                          <p>
                            Start your journey with Ruang Bumi! We help
                            businesses, researchers, industries and governments
                            make data-driven decisions with cutting-edge mapping
                            technology. Ruang Bumi is a collaborative space
                            within the scope of earth science. We facilitate
                            Indonesia's first platform to order high-resolution
                            satellite imagery, consultation and discussion space
                            related to GIS, Agriculture, Forestry etc.
                          </p>

                          <div className="app-btn-box">
                            <a
                              href="https://explorer.ruangbumi.com/"
                              className="playstore-btn"
                              target="_blank"
                            >
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/SIE_2.png"
                                alt="image"
                                width={34}
                                height={5}
                              />
                              <span>Ruang Bumi Explorer</span>
                            </a>

                            <a href="/shop" className="applestore-btn">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/RBS_2.png"
                                alt="image"
                                width={34}
                                height={35}
                              />
                              <span>Ruang Bumi Store</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="ml-video">
                        <div className="solution-video">
                          {/* <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="container mt-20">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S1.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Ruang Bumi Explorer</h3>
                            <p className="text-white"></p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S2.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Thematic Map & Survey</h3>
                            <p className="text-white"></p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S3.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>WebGIS & GeoAI</h3>
                            <p className="text-white"></p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S4.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Ruang Bumi Store</h3>
                            <p className="text-white"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="machine-learning-banner"
            style={{
              backgroundImage: `url(https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/bg3.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner-content mt-80">
                        <div className="mobile-app-content">
                          <h1 style={{ color: "#fff000" }}>
                            GIS{" "}
                            <span style={{ color: "#fff000" }}>Services</span>{" "}
                            <span style={{ color: "#ffffff" }}>and</span>
                            <span style={{ color: "#70e000" }}> Products</span>
                          </h1>
                          <p>
                            We provide GIS data (Hight Resolution Sattelite
                            Imagery, Areal Photography, Lidar), processing or
                            analysis, visualization and geo artificial
                            intelligence support to solve your problems.
                          </p>

                          <div className="app-btn-box">
                            <a
                              href="#"
                              className="playstore-btn"
                              target="_blank"
                            >
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/SIE_2.png"
                                alt="image"
                                width={34}
                                height={5}
                              />
                              <span>Ruang Bumi Explorer</span>
                            </a>

                            <a
                              href="#"
                              className="applestore-btn"
                              target="_blank"
                            >
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/RBS_2.png"
                                alt="image"
                                width={34}
                                height={35}
                              />
                              <span>Ruang Bumi Store</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="ml-video">
                        <div className="solution-video">
                          {/* <div
                            className="video-btn"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="flaticon-play-button"></i>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="container mt-20">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S5.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Professional Consultancy</h3>
                            <p className="text-white"></p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S6.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Excellent Service</h3>
                            <p className="text-white"></p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S7.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Open Collaboration</h3>
                            <p className="text-white"></p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S8.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Public Contribution</h3>
                            <p className="text-white"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div
            className="machine-learning-banner"
            style={{
              backgroundImage: `url(/images/machine-learning/slider/ml-slider.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-80">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="banner-content">
                        <div className="mobile-app-content">
                          <h1 className="text-center">
                            Trade On The <span>Mobile App</span> Best App
                            Features
                          </h1>
                          <p className="text-center">
                            We work hand-in-hand with industry-leading brands to
                            help redefine the possibilities and potential of
                            digital engagements We work hand-in-hand with
                            industry-leading.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mt-80">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/earning-1.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Easy To Transact</h3>
                            <p className="text-white">
                              Lorem ipsum dolor sit amet, is consectetur
                              adipiscing elit, sed do eiusmo.
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/earning-2.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>Trusted Security</h3>
                            <p className="text-white">
                              Lorem ipsum dolor sit amet, is consectetur
                              adipiscing elit, sed do eiusmo.
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/earning-3.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>No Fear Of Loss</h3>
                            <p className="text-white">
                              Lorem ipsum dolor sit amet, is consectetur
                              adipiscing elit, sed do eiusmo.
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                          <div className="earning-platform-card text-center">
                            <div className="earning-image">
                              <Image
                                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/earning-4.png"
                                alt="image"
                                width={56}
                                height={56}
                              />
                            </div>
                            <h3>No Expensive Software</h3>
                            <p className="text-white">
                              Lorem ipsum dolor sit amet, is consectetur
                              adipiscing elit, sed do eiusmo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default BannerSlider;
