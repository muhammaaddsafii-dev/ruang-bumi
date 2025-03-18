"use client";

import React from "react";
import Link from "next/link";

const FeaturedSolutions: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What We Offer</span>
            <h2>Our Featured Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="featured-solution-card">
                <i className="bx bxs-analyse"></i>
                <h3>
                  <Link href="/services/details">Robotic Automation</Link>
                </h3>
                <p>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <Link href="/services/details" className="read-more">
                  Discover More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="featured-solution-card">
                <i className="bx bx-shape-circle"></i>
                <h3>
                  <Link href="/services/details">Cognitive Automation</Link>
                </h3>
                <p>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <Link href="/services/details" className="read-more">
                  Discover More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="featured-solution-card">
                <i className="bx bx-badge-check"></i>
                <h3>
                  <Link href="/services/details">Security & Surveillance</Link>
                </h3>
                <p>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <Link href="/services/details" className="read-more">
                  Discover More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="featured-solution-card">
                <i className="bx bx-layer"></i>
                <h3>
                  <Link href="/services/details">Cognitive Engagement</Link>
                </h3>
                <p>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <Link href="/services/details" className="read-more">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedSolutions;
