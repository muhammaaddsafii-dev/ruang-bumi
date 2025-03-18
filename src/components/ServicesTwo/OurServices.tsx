"use client";

import React from "react";
import Link from "next/link";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-conversation"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">IT Consultancy</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-laptop"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">Web Development</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bxs-megaphone"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">Digital Marketing</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-mobile-alt"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">Mobile App Development</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-cart"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">eCommerce Development</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-list-check"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">IT Solutions</Link>
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
