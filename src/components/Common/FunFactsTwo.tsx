"use client";

import React from "react";

const FunFactsTwo: React.FC = () => {
  return (
    <>
      <div className="fun-facts-two pb-50 bg-f2f2f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="fun-fact-card">
                <i className="bx bx-image"></i>
                <h3>
                  <span className="odometer">500</span>
                  <span className="sign-icon">+</span>
                </h3>
                <p  style={{ textAlign: 'center' }}>Imagery Satellite</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="fun-fact-card">
                <i className="bx bx-map-alt"></i>
                <h3>
                  <span className="odometer">15</span>
                  <span className="sign-icon">+</span>
                </h3>
                <p style={{ textAlign: 'center' }}>Thematic Map</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="fun-fact-card">
                <i className="bx bx-map-pin"></i>
                <h3>
                  <span className="odometer">8</span>
                  <span className="sign-icon">+</span>
                </h3>
                <p style={{ textAlign: 'center' }}>Thematic Survei</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="fun-fact-card">
                <i className="bx bx-desktop"></i>
                <h3>
                  <span className="odometer">5</span>
                  <span className="sign-icon">+</span>
                </h3>
                <p style={{ textAlign: 'center' }}>WebGIS & GeoAI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsTwo;