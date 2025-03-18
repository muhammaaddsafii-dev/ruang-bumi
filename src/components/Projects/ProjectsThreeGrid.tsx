"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsThreeGrid: React.FC = () => {
  return (
    <>
      <div className="works-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>All Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      Designing a better cinema experience
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      Building design process within teams
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      How intercom brings play eCommerce
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      How to start a project with Reactjs
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      Examples of different types of sprints
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      Redesigning the New York times app
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      Graphic Design Design the Web, Mobile, and eCommerce
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      Bootstrap Redesigning the New York times app
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <Link href="/projects/details">
                      We provide any type of app development
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
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

export default ProjectsThreeGrid;
