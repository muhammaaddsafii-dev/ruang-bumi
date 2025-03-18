"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="cs-services-area pb-70">
        <div className="container">
          <div className="section-title with-line-text">
            <span className="sub-title">OUR SERVICES</span>
            <h2>
              The Power To Protect Your <span>Cyberspace</span> & Complete
              Website Security
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-services-card text-center">
                <div className="image">
                  <Image
                    src="/images/cyber-security-home/services/services-1.png"
                    alt="image"
                    width={70}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Easy To Transact</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-services-card text-center">
                <div className="image">
                  <Image
                    src="/images/cyber-security-home/services/services-2.png"
                    alt="image"
                    width={70}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Secure Managed IT</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-services-card text-center">
                <div className="image">
                  <Image
                    src="/images/cyber-security-home/services/services-3.png"
                    alt="image"
                    width={70}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Data Protection</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-services-card text-center">
                <div className="image">
                  <Image
                    src="/images/cyber-security-home/services/services-4.png"
                    alt="image"
                    width={70}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Incident Responder</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-services-card text-center">
                <div className="image">
                  <Image
                    src="/images/cyber-security-home/services/services-5.png"
                    alt="image"
                    width={70}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Data Encryption</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-services-card text-center">
                <div className="image">
                  <Image
                    src="/images/cyber-security-home/services/services-6.png"
                    alt="image"
                    width={70}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Disaster Planning</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-services-card text-center">
                <div className="image">
                  <Image
                    src="/images/cyber-security-home/services/services-7.png"
                    alt="image"
                    width={70}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Threat Hunter</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-services-card text-center">
                <div className="image">
                  <Image
                    src="/images/cyber-security-home/services/services-8.png"
                    alt="image"
                    width={70}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Data Recovery</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
