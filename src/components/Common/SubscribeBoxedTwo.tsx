"use client";

import React from "react";

const SubscribeBoxedTwo: React.FC = () => {
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div
            className="subscribe-inner-area"
            style={{ backgroundImage: `url(/images/subscribe-bg.jpg)` }}
          >
            <div className="subscribe-content">
              <span className="sub-title">Get Started Instantly!</span>
              <h2>Get on only new update from this newsletter!</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your email"
                  name="email"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeBoxedTwo;
