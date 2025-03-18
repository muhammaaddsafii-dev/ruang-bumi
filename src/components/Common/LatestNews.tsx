"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100 bg-F4F7FC">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Latest News</span>
            <h2>Our Latest Articles And News For Our Clients</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image1.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">Sarah Taylor</Link>
                      </li>
                      <li>June 24, 2023</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      How To Boost Your Digital Marketing Agency
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image2.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">James Anderson</Link>
                      </li>
                      <li>June 26, 2023</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      The Rise Of Smarketing And Why You Need It
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image3.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">Steven Smith</Link>
                      </li>
                      <li>June 25, 2023</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      How To Use Music To Boost Your Business
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Image */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
