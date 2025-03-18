"use client";

import React from "react";
import Link from "next/link";

const FeaturedServices: React.FC = () => {
  return (
    <>
      <div className="featured-services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
            <h2>Our Featured Services</h2>
            <p>
              Real innovations and positive customer experience are the heart of
              successful communication. No fake products and services.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>

                <h3>Marketing Analysis</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/services/details" className="default-btn">
                  Read More <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon color-facd60">
                  <i className="flaticon-mail"></i>
                </div>

                <h3>Email Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/services/details" className="default-btn">
                  Read More <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon color-1ac0c6">
                  <i className="flaticon-research"></i>
                </div>

                <h3>Website Optimization</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/services/details" className="default-btn">
                  Read More <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
