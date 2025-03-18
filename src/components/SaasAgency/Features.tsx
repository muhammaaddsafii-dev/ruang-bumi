"use client";

import React from "react";

const Features: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Great Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg center">
                <div className="icon">
                  <i className="bx bx-cog"></i>
                  <span className="number">1</span>
                </div>
                <h3>Easy Customizable </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg center">
                <div className="icon">
                  <i className="bx bx-code-alt"></i>
                  <span className="number">2</span>
                </div>
                <h3>Clean Code</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg center">
                <div className="icon">
                  <i className="bx bx-layout"></i>
                  <span className="number">3</span>
                </div>
                <h3>Fully Responsive</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg center">
                <div className="icon">
                  <i className="bx bx-check-shield"></i>
                  <span className="number">4</span>
                </div>
                <h3>Extreme Security</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg center">
                <div className="icon">
                  <i className="bx bxs-sun"></i>
                  <span className="number">5</span>
                </div>
                <h3>Creative Design</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg center">
                <div className="icon">
                  <i className="bx bxs-cloud"></i>
                  <span className="number">6</span>
                </div>
                <h3>Cloud Service</h3>
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

export default Features;
