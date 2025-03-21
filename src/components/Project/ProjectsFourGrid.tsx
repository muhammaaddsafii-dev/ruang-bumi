"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsFourGrid: React.FC = () => {
  return (
    <>
      <div className="works-area ptb-100 mt-5">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">PROJECT</span>
            <h2>All Projects</h2>
            <p>
              Explore how Ruang Bumi has helped businesses, governments, and
              organizations harness the power of high-resolution satellite
              imagery and AI-driven mapping solutions
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work1.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Development</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      Designing a better cinema experience
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work2.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Web Design</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      Building design process within teams
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work3.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">eCommerce</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      How intercom brings play eCommerce
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work4.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">React</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      How to start a project with Reactjs
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work5.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Angular</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      Examples of different types of sprints
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work6.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Development</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      Redesigning the New York times app
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work7.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Graphic Design</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      Graphic Design Design the Web, Mobile, and eCommerce
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work8.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Bootstrap</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      Bootstrap Redesigning the New York times app
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work9.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">App Development</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      We provide any type of app development
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work10.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Marketing</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      We provide any type of marketing support
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work11.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Email Marketing</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      We provide any type of Email Marketing
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xl-3">
              <div className="work-card">
                <Image
                  src="/images/works/work12.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content">
                  <span>
                    <Link href="#">Email Marketing</Link>
                  </span>
                  <h3>
                    <Link href="/project/details">
                      We provide any type of Marketing & Reporting
                    </Link>
                  </h3>

                  <Link href="/project/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <span className="page-numbers current">1</span>

                <a href="#" className="page-numbers">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsFourGrid;
