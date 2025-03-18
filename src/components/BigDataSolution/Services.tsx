"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="bd-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-line-text-with-white-color">
            <span className="sub-title">OUR SERVICES</span>
            <h2>
              See Wide Range Of Our <span>Services</span> With Big Data
              Solutions
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-1.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Big Data Integration</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur
                  adipiscing elit.
                </p>

                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-2.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Big Data Management</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur
                  adipiscing elit.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-3.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Big Data Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur
                  adipiscing elit.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-4.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Content Management</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur
                  adipiscing elit.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-5.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Cloud Management</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur
                  adipiscing elit.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-6.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Data System Management</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur
                  adipiscing elit.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
