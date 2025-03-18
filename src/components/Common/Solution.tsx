"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Solution: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div
        className="solution-area ptb-100 extra-pb"
        style={{
          backgroundImage: `url(/images/solution-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="solution-content">
                <span className="sub-title">Watch Our Video</span>
                <h2>Get Better Solution For Your Business</h2>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>

                <Link href="/contact" className="default-btn">
                  Contact Us <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="solution-video">
                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn popup-youtube"
                >
                  <i className="flaticon-play-button"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
