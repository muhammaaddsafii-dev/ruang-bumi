"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-area overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12 col-sm-12 px-4 py-3 text-center">
              <div className="single-footer-widget">
                <ul className="footer-contact-info">
                  <li>
                    <i className="flaticon-phone-call"></i>
                    <span>Mon to Fri : 08:00AM - 17:00PM</span>
                    <a href="tel:+6285171231926">+6285171231926</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 px-4 py-3 text-center">
              <div className="single-footer-widget">
                <ul className="footer-contact-info">
                  <li>
                    <i className="flaticon-email"></i>
                    <span>Do You Have a Question?</span>
                    <a href="mailto:ruangbumipersada@gmail.com">
                      ruangbumipersada@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 px-4 py-3 text-center">
              <div className="single-footer-widget">
                <ul className="footer-contact-info">
                  <li>
                    <i className="flaticon-social-media"></i>
                    <span>Socials Network</span>
                    <ul className="social d-flex justify-content-center">
                      <li className="mx-2">
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="mx-2">
                        <a
                          href="https://www.instagram.com/ruangbumipersada?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="mx-2">
                        <a
                          href="https://www.youtube.com/@ruangbumipersada"
                          target="_blank"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="col-lg-12 col-sm-12 col-md-12">
                <p style={{ textAlign: "center" }}>
                  Copyright &copy;{currentYear} RuangBumi. All rights reserved{" "}
                  <a href="https://ruangbumi.com/" target="_blank">
                    Development Team of Ruang Bumi
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
