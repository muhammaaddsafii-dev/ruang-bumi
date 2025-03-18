"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestWorks: React.FC = () => {
  return (
    <>
      <div className="works-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Works</h2>
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

                <div className="content text-center">
                  <span>
                    <Link href="/projects">Development</Link>
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
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card">
                <Image
                  src="/images/works/work2.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects">Web Design</Link>
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
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card">
                <Image
                  src="/images/works/work3.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects">eCommerce</Link>
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
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card">
                <Image
                  src="/images/works/work4.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects">React</Link>
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
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card">
                <Image
                  src="/images/works/work5.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects">Angular</Link>
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
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card">
                <Image
                  src="/images/works/work6.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects">Development</Link>
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
            </div>
          </div>

          <div className="more-work">
            <Link href="/projects/2" className="default-btn">
              View More Project <span></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestWorks;
