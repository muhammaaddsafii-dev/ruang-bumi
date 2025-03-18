"use client";

import React from "react";
import Image from "next/image";

interface SidebarModalProps {
  active: string;
  onClick: (active: boolean) => void;
}

const SidebarModal: React.FC<SidebarModalProps> = ({ active, onClick }) => {
  const closeModal = (): void => {
    onClick(false);
  };

  return (
    <>
      <div className={`sidebar-modal ${active}`}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-about-area">
            <div className="title">
              <h2>About Us</h2>
              <p>
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services. The
                customer is king, their lives and needs are the inspiration.
              </p>
            </div>
          </div>

          <div className="sidebar-instagram-feed">
            <h2>Instagram</h2>
            <ul>
              {[...Array(8)].map((_, index) => (
                <li key={index}>
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src={`/images/blog-image/blog-image${index + 1}.jpg`}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <h2>
                  <span className="main-color">+088 130 629 8615</span>
                  <span className="or">OR</span>
                  <span>example@taiker.com</span>
                </h2>

                <ul className="social">
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <span
            onClick={closeModal}
            className="close-btn sidebar-modal-close-btn"
          >
            <i className="flaticon-close"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default SidebarModal;
