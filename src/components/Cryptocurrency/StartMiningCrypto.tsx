"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const StartMiningCrypto: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="mining-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="mining-image">
                <Image
                  src="/images/cryptocurrency-home/mining.png"
                  alt="image"
                  width={925}
                  height={698}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="mining-content">
                <span className="sub-title">START MINING CRYPTO</span>
                <h3>
                  Start <span>Mining Crypto</span> Currency Today With Us
                </h3>
                <p>
                  Bitcoin is a cryptocurrency and worldwide payment system. It
                  is the first decentralized digital currency, as the system
                  works without a central bank or single administrator. The
                  network is peer-to-peer and transactions take place between
                  users directly.
                </p>

                <ul className="mining-btn">
                  <li>
                    <Link href="/contact" className="default-btn">
                      Get Started <span></span>
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="flaticon-play-button"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMiningCrypto;
