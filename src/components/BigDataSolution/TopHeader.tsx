"use client";

import React from "react";

const TopHeader: React.FC = () => {
  return (
    <>
      <div className="topbar-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-4">
              <ul className="topbar-social-links">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="topbar-action-list">
                <li>
                  <i className="bx bxs-map"></i> 2750 Quadra Street Victoria
                  Road, New York, Canada
                </li>
                <li>
                  <i className="bx bxs-phone"></i> <span>Call</span>{" "}
                  <a href="tel:1234567890">+123 456 7890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
