"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="ml-services-area bg-f2f2f7 pt-100 pb-70">
        <div className="container">
          <div className="section-title mt-5">
            <span className="sub-title">Our Services</span>
            <h2>Our Professionals Services For You</h2>
            <p>
              At Ruang Bumi, we offer a wide range of geospatial solutions powered by high-resolution satellite imagery and geo artificial intelligence. 
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
                  <Link href="/services-and-products/details">Satellite Imagery</Link>
                </h3>
                <p>
                  We provide access to high-resolution satellite images, capturing the Earth’s surface in unparalleled detail.
                </p>

                <Link href="/services-and-products/details" className="read-more">
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
                  <Link href="/services-and-products/details">Thematic Map</Link>
                </h3>
                <p>
                  Specialized maps designed to represent specific aspects of a region, such as land use, population density, or disaster risk assessment.
                </p>

                <Link href="/services-and-products/details" className="read-more">
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
                  <Link href="/services-and-products/details">
                    Thematic Survey
                  </Link>
                </h3>
                <p>
                  Spatial data-based surveys focusing on specific aspects such as social, economic, and environmental factors to support data-driven decision-making.
                </p>

                <Link href="/services-and-products/details" className="read-more">
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
                  <Link href="/services-and-products/details">
                    GIS Apps
                  </Link>
                </h3>
                <p>
                  Geographic Information System (GIS) applications used for spatial analysis, data visualization, and location-based data management.
                </p>
                <Link href="/services-and-products/details" className="read-more">
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
                  <Link href="/services-and-products/details">Geo-AI</Link>
                </h3>
                <p>
                  The integration of Artificial Intelligence (AI) with geospatial data for automated analysis, trend prediction, and smart mapping.
                </p>

                <Link href="/services-and-products/details" className="read-more">
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
                  <Link href="/services-and-products/details">Store</Link>
                </h3>
                <p>
                  An online store offering various mapping products, satellite imagery, and geospatial tools and services. You can also request custom products.
                </p>

                <Link href="/services-and-products/details" className="read-more">
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
