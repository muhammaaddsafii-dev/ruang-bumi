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
              Ruang Bumi is a collaborative space within the scope of earth
              science. We facilitate consultation and discussion space related
              to GIS, Agriculture, Forestry etc.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S1.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/details">
                    GIS and Mapping
                  </Link>
                </h3>
                <p>
                  We provide access to high-resolution satellite images,
                  capturing the Earth’s surface in unparalleled detail.
                </p>

                <Link
                  href="/services-and-products/details"
                  className="read-more"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S2.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/details">Agriculture</Link>
                </h3>
                <p>
                  Specialized maps designed to represent specific aspects of a
                  region, such as land use, population density, or disaster risk
                  assessment.
                </p>

                <Link
                  href="/services-and-products/details"
                  className="read-more"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S3.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/details">Forestry</Link>
                </h3>
                <p>
                  Spatial data-based surveys focusing on specific aspects such
                  as social, economic, and environmental factors to support
                  data-driven decision-making.
                </p>

                <Link
                  href="/services-and-products/details"
                  className="read-more"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="ml-service">
                <div className="image">
                  <Image
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/S4.png"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services-and-products/details">Training</Link>
                </h3>
                <p>
                  Geographic Information System (GIS) applications used for
                  spatial analysis, data visualization, and location-based data
                  management.
                </p>
                <Link
                  href="/services-and-products/details"
                  className="read-more"
                >
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
