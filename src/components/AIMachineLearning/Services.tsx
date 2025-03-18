"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="ml-services-area bg-f2f2f7 pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
            <h2>Our Professionals Services For You</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="/images/machine-learning/ml-service1.png"
                    alt="image"
                    width={155}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/details">IT Professionals</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="/images/machine-learning/ml-service2.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Software Engineers</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="/images/machine-learning/ml-service2.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/details">
                    Health &amp; Manufacturing
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="/images/machine-learning/ml-service3.png"
                    alt="image"
                    width={148}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/details">
                    Security &amp; Surveillance
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="/images/machine-learning/ml-service4.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Automatic Optimization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="/images/machine-learning/ml-service5.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Data Analysts</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
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
