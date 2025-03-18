"use client";

import React from "react";
import Image from "next/image";

const NewsletterForm: React.FC = () => {
  return (
    <>
      <div className="subscribe-wrap-area">
        <div className="container">
          <div className="subscribe-wrap-inner-box">
            <div className="subscribe-content">
              <h2>Join Our Newsletter</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your email"
                  name="EMAIL"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>

            <div className="subscribe-shape-1">
              <Image
                src="/images/cryptocurrency-home/subscribe/shape-1.png"
                alt="image"
                width={38}
                height={39}
              />
            </div>
            <div className="subscribe-shape-2">
              <Image
                src="/images/cryptocurrency-home/subscribe/shape-2.png"
                alt="image"
                width={57}
                height={122}
              />
            </div>
            <div className="subscribe-shape-3">
              <Image
                src="/images/cryptocurrency-home/subscribe/shape-3.png"
                alt="image"
                width={40}
                height={43}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
