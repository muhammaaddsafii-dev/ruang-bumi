"use client";

import React from "react";
import Link from "next/link";

const WhatWeDo: React.FC = () => {
  return (
    <>
      <div className="services-area ptb-100 bg-F4F7FC">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What We Do</span>
            <h2>Provide Awesome Service With Our Tools</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-digital-marketing"></i>
                </div>
                <h3>
                  <Link href="/services/details">Digital Marketing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit sed, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-00aeff">
                  <i className="flaticon-research"></i>
                </div>
                <h3>
                  <Link href="/services/details">Design & Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit sed, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-f78acb">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/services/details">Strategic Planing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit sed, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-cdf1d8">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>
                  <Link href="/services/details">SEO Consultancy</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit sed, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <i className="flaticon-mail"></i>
                </div>
                <h3>
                  <Link href="/services/details">Competitor Analysis</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit sed, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <i className="flaticon-seo"></i>
                </div>

                <h3>
                  <Link href="/services/details">Social Media Marketing</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet elit sed, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
