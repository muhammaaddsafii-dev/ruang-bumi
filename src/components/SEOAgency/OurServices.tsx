"use client";

import React from "react";
import Link from "next/link";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-bullseye"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Target Analysis
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt-2"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Keyword Research
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-check-shield"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Continuous Testing
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt-2"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Marketing Analysis
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-search-alt"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Content Optimization
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-mail-send"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Email Marketing
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
