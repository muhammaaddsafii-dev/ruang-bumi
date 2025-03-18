"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamCard: React.FC = () => {
  return (
    <>
      <div className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Team</span>
            <h2>Our Expert Team</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team10.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>John Smith</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team11.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>Lucy Eva</h3>
                  <span>Backend Team Leader</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team12.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>Steven Smith</h3>
                  <span>ReactJS Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team13.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>Williams Smith</h3>
                  <span>AngularJS Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team14.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>Harry</h3>
                  <span>VueJS Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team15.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>George</h3>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team16.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>Charlie</h3>
                  <span>SEO Specialist</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team17.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>Amelia</h3>
                  <span>Marketing Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team-image/team18.jpg"
                    alt="team"
                    width={510}
                    height={600}
                  />

                  <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h3>Joe Root</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <Link href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </Link>
                <Link href="#" className="page-numbers">
                  1
                </Link>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <Link href="#" className="page-numbers">
                  3
                </Link>
                <Link href="#" className="page-numbers">
                  4
                </Link>
                <Link href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Animation shape image */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={43}
            height={46}
          />
        </div>
        <div className="shape-img10">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default TeamCard;
