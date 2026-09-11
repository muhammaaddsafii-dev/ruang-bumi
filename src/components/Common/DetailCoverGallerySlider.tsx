"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface DetailCoverGallerySliderProps {
  images: { src: string; alt: string }[];
  onImageClick: (index: number) => void;
}

const DetailCoverGallerySlider: React.FC<DetailCoverGallerySliderProps> = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return <div className="rb-detail-cover rb-detail-cover-placeholder" />;
  }

  return (
    <div className="rb-detail-cover-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={images.length > 1}
        pagination={images.length > 1 ? { clickable: true } : false}
        spaceBetween={0}
        slidesPerView={1}
        className="rb-detail-cover-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <button
              type="button"
              className="rb-detail-cover-slide-btn"
              onClick={() => onImageClick(index)}
              aria-label="Buka galeri"
            >
              <img src={image.src} alt={image.alt} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .rb-detail-cover-slider {
          width: 100%;
          height: 320px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          margin-bottom: 32px;
        }
        .rb-detail-cover-slider :global(.rb-detail-cover-swiper) {
          width: 100%;
          height: 100%;
        }
        .rb-detail-cover-slide-btn {
          border: none;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          background: none;
          display: block;
        }
        .rb-detail-cover-slide-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background-color: #f3f4f6;
          display: block;
        }
        .rb-detail-cover-slider :global(.swiper-button-next),
        .rb-detail-cover-slider :global(.swiper-button-prev) {
          color: #fff;
          background: #7bc723;
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
        .rb-detail-cover-slider :global(.swiper-button-next:hover),
        .rb-detail-cover-slider :global(.swiper-button-prev:hover) {
          background: #6bb016;
        }
        .rb-detail-cover-slider :global(.swiper-button-next::after),
        .rb-detail-cover-slider :global(.swiper-button-prev::after) {
          font-size: 16px;
        }
        .rb-detail-cover-slider :global(.swiper-pagination-bullet-active) {
          background: #7bc723;
        }
      `}</style>
    </div>
  );
};

export default DetailCoverGallerySlider;
