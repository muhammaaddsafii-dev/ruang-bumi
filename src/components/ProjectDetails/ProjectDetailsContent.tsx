"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectDetailsContentProps {
  project: Project;
}

const ProjectDetailsContent: React.FC<ProjectDetailsContentProps> = ({
  project,
}) => {
  const [toggler, setToggler] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mainSlider, setMainSlider] = useState<Slider | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const images = project.thumbnail_images && project.thumbnail_images.length > 0 
    ? project.thumbnail_images 
    : [
        "/images/projects-image/project1.jpg",
        "/images/projects-image/project2.jpg",
        "/images/projects-image/project3.jpg",
      ];

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // tetap false karena kita pakai custom tombol
    fade: true,
    autoplay: !isHovering,
    autoplaySpeed: 4000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const openLightbox = (index: number) => {
    setCurrentSlide(index);
    setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={images}
        slide={currentSlide + 1}
      />

      <div className="project-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 text-center mx-auto">
              <div 
                className="slider-container"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="main-slider-wrapper">
                  <Slider
                    {...mainSliderSettings}
                    ref={(slider) => setMainSlider(slider)}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="slide-item">
                        <div className="image-container">
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            width={1200}
                            height={700}
                            className="slide-image"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>

                  {/* Slide Counter */}
                  <div className="slide-counter">
                    <span className="current">{currentSlide + 1}</span>
                    <span className="separator">/</span>
                    <span className="total">{images.length}</span>
                  </div>

                  {/* Custom Navigation Arrows */}
                  <button 
                    className="nav-button prev-button"
                    onClick={() => mainSlider?.slickPrev()}
                    aria-label="Previous slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="currentColor"/>
                    </svg>
                  </button>

                  <button 
                    className="nav-button next-button"
                    onClick={() => mainSlider?.slickNext()}
                    aria-label="Next slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="blog-details-desc">
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="#">
                          {new Date(project.date_published).toLocaleDateString()}
                        </Link>
                      </li>
                      <li>
                        <span>Our Client:</span>
                        <Link href="/blog">{project.client}</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>{project.title}</h3>

                  <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          position: relative;
          margin-bottom: 50px;
        }

        .main-slider-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .slide-item {
          position: relative;
        }

        .image-container {
          position: relative;
          cursor: pointer;
          aspect-ratio: 16/9;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .image-container:hover .slide-image {
          transform: scale(1.03);
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          background-color: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .slider-container:hover .nav-button {
          opacity: 1;
        }

        .nav-button:hover {
          background-color: rgba(255, 93, 34, 0.9);
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .prev-button {
          left: 20px;
        }

        .next-button {
          right: 20px;
        }

        .slide-counter {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 500;
          z-index: 5;
          display: flex;
          align-items: center;
        }

        .slide-counter .current {
          color: rgba(255, 93, 34, 1);
          font-weight: 700;
          margin-right: 4px;
        }

        .slide-counter .separator {
          margin: 0 4px;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};

export default ProjectDetailsContent;
