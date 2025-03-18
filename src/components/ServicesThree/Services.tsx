"use client";

import React from "react";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-conversation"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">SEO Consultancy</Link>
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
                  <Link href="/services/details">Website Optimization</Link>
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
                  <i className="bx bx-bullseye"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">Target Analysis</Link>
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
                  <Link href="/services/details">Keyword Research</Link>
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
                  <Link href="/services/details">Continuous Testing</Link>
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
                  <Link href="/services/details">Marketing Analysis</Link>
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
                  <Link href="/services/details">Content Optimization</Link>
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
                  <Link href="/services/details">Email Marketing</Link>
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
                  <i className="bx bx-data"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">PPC Management</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a href="#" className="page-numbers">
                  1
                </a>

                <span className="page-numbers current">2</span>

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

export default Services;
