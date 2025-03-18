"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-6">
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
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <Link href="/blog/details" className="read-more-btn">
                Read More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
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
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <Link href="/blog/details" className="read-more-btn">
                Read More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
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
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <Link href="/blog/details" className="read-more-btn">
                Read More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog-post">
            <div className="post-image">
              <Link href="/blog/details">
                <Image
                  src="/images/blog-image/blog-image4.jpg"
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
                  Creative solutions to improve your business!
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <Link href="/blog/details" className="read-more-btn">
                Read More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog-post">
            <div className="post-image">
              <Link href="/blog/details">
                <Image
                  src="/images/blog-image/blog-image5.jpg"
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
                  Finding the human in technology
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <Link href="/blog/details" className="read-more-btn">
                Read More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog-post">
            <div className="post-image">
              <Link href="/blog/details">
                <Image
                  src="/images/blog-image/blog-image6.jpg"
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
                  Ideas people want to spend time with
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <Link href="/blog/details" className="read-more-btn">
                Read More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog-post">
            <div className="post-image">
              <Link href="/blog/details">
                <Image
                  src="/images/blog-image/blog-image7.jpg"
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
                  Ideas people want to spend time with
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <Link href="/blog/details" className="read-more-btn">
                Read More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog-post">
            <div className="post-image">
              <Link href="/blog/details">
                <Image
                  src="/images/blog-image/blog-image8.jpg"
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
                  Ideas people want to spend time with
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <Link href="/blog/details" className="read-more-btn">
                Read More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Pagination  */}
        <div className="col-lg-12 col-md-12">
          <div className="pagination-area">
            <Link href="#" className="prev page-numbers">
              <i className="fas fa-angle-double-left"></i>
            </Link>
            <Link href="#" className="page-numbers">
              1
            </Link>
            <span className="page-numbers current" aria-current="page">
              2
            </span>
            <Link href="#" className="page-numbers">
              3
            </Link>
            <Link href="#" className="page-numbers">
              4
            </Link>
            <Link href="#" className="next page-numbers">
              <i className="fas fa-angle-double-right"></i>
            </Link>
          </div>
        </div>
        {/* End Pagination  */}
      </div>
    </>
  );
};

export default BlogCard;
