"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsCard: React.FC = () => {
  return (
    <>
      <div className="projects-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
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
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
