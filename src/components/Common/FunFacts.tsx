"use client";

import React from "react";

const FunFacts: React.FC = () => {
  return (
    <>
      <div className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  324
                  <span className="sign-icon">+</span>
                </h3>
                <p>Project Completed</p>
                <div className="back-text">P</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  100
                  <span className="sign-icon">%</span>
                </h3>
                <p>Client Satisfaction</p>
                <div className="back-text">C</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>15</h3>
                <p>Awards</p>
                <div className="back-text">A</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  48
                  <span className="sign-icon">+</span>
                </h3>
                <p>Expert Members</p>
                <div className="back-text">E</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
