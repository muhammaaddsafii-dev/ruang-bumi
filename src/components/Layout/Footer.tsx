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
            <div className="col-lg-8 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="flaticon-phone-call"></i>
                    <span>Mon to Fri : 08:00AM - 17:00PM</span>

                    <a href="tel:1235421457852">+6285171231926</a>
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>Do You Have a Question?</span>
                    <a href="mailto:example@taiker.com">
                      ruangbumipersada@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-social-media"></i>
                    <span>Socials Network</span>

                    <ul className="social">
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Quick Links</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about2">About</Link>
                  </li>
                  <li>
                    <Link href="/blog">Services</Link>
                  </li>
                  <li>
                    <Link href="/contact">Projects</Link>
                  </li>
                  <li>
                    <Link href="/team2">Articles</Link>
                  </li>
                  <li>
                    <Link href="/features">Store</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  <li>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  <li>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/conatct">Support</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Gallery</h3>

                <ul className="footer-instagram-post">
                  <li>
                    <a href="" target="_blank">
                      <Image
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/g1.png"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <Image
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/g2.png"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <Image
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/g3.png"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <Image
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/g4.png"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <Image
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/g5.png"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <Image
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/g6.png"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
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
                  <a href="https://envytheme.com/" target="_blank">
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
