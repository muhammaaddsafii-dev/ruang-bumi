"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Tradevalue: React.FC = () => {
  return (
    <>
      <div className="value-trade-area">
        <div className="container-fluid">
          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 5000,
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
              1400: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            className="value-trade-slides"
          >
            <SwiperSlide>
              <div className="value-trade-card">
                <Image
                  src="/images/cryptocurrency-home/value-trade/REN.png"
                  alt="image"
                  width={22}
                  height={22}
                />
                <p>
                  <b>RenBridges (REN)</b> $0.00475688{" "}
                  <span>
                    <i className="bx bx-up-arrow-alt"></i> +0.017%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <Image
                  src="/images/cryptocurrency-home/value-trade/BTC.png"
                  alt="image"
                  width={22}
                  height={22}
                />
                <p>
                  <b>Bitcoin (BTC)</b> $0.00475688{" "}
                  <span>
                    <i className="bx bx-up-arrow-alt"></i> +0.017%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <Image
                  src="/images/cryptocurrency-home/value-trade/layer.png"
                  alt="image"
                  width={22}
                  height={22}
                />
                <p>
                  <b>Yearn (YFI)</b> $0.00475688{" "}
                  <span className="color-two">
                    <i className="bx bx-down-arrow-alt"></i> +0.017%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <Image
                  src="/images/cryptocurrency-home/value-trade/USDT.png"
                  alt="image"
                  width={22}
                  height={22}
                />
                <p>
                  <b>Tether (USDT)</b> $0.00475688{" "}
                  <span className="color-two">
                    <i className="bx bx-down-arrow-alt"></i> +0.017%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <Image
                  src="/images/cryptocurrency-home/value-trade/ETH.png"
                  alt="image"
                  width={22}
                  height={22}
                />
                <p>
                  <b>Ethereum (ETH)</b> $0.00475688{" "}
                  <span>
                    <i className="bx bx-up-arrow-alt"></i> +0.017%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <Image
                  src="/images/cryptocurrency-home/value-trade/SNX.png"
                  alt="image"
                  width={22}
                  height={22}
                />
                <p>
                  <b>Synthetix (Snx)</b> $0.00475688{" "}
                  <span>
                    <i className="bx bx-up-arrow-alt"></i> +0.017%
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Tradevalue;
