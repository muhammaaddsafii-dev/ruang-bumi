"use client";

import React from "react";

const FunFactsTwo: React.FC = () => {
  return (
    <>
      <div className="fun-facts-two pt-100 pb-70 bg-f2f2f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="fun-fact-card">
                <i className="bx bx-list-check"></i>
                <h3>
                  <span className="odometer">524</span>
                  <span className="sign-icon">+</span>
                </h3>
                <p>Completed Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="fun-fact-card">
                <i className="bx bx-smile"></i>
                <h3>
                  <span className="odometer">560</span>
                  <span className="sign-icon">+</span>
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="fun-fact-card">
                <i className="bx bx-user-plus"></i>
                <h3>
                  <span className="odometer">128</span>
                  <span className="sign-icon">+</span>
                </h3>
                <p>Expert Members</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="fun-fact-card">
                <i className="bx bx-trophy"></i>
                <h3>
                  <span className="odometer">29</span>
                  <span className="sign-icon">+</span>
                </h3>
                <p>Winning Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsTwo;
