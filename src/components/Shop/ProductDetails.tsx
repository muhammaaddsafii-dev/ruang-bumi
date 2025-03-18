"use client";

import React, { useState } from "react";
import Image from "next/image";
import RelatedProducts from "./RelatedProducts";
import ProductsDetailsTab from "./ProductsDetailsTab";

const ProductDetails: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="product-details-image">
                <Image
                  src="/images/shop/item2.jpg"
                  alt="image"
                  width={800}
                  height={850}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="product-details-desc">
                <h3>Book Chicks</h3>

                <div className="price">
                  <span className="new-price">$541.00</span>
                  <span className="old-price">$652.00</span>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et.
                </p>

                <div className="product-add-to-cart">
                  <div className="input-counter">
                    <span className="minus-btn" onClick={handleDecrement}>
                      <i className="fas fa-minus"></i>
                    </span>
                    <input type="text" value={count} readOnly />
                    <span className="plus-btn" onClick={handleIncrement}>
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>

                  <button type="submit" className="default-btn">
                    <i className="fas fa-cart-plus"></i>
                    Add to Cart
                    <span></span>
                  </button>
                </div>

                <div className="buy-checkbox-btn">
                  <div className="item">
                    <input className="inp-cbx" id="cbx" type="checkbox" />
                    <label className="cbx" htmlFor="cbx">
                      <span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>I agree with the terms and conditions</span>
                    </label>
                  </div>

                  <div className="item">
                    <button type="button" className="btn btn-light">
                      Buy it now!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              {/* Products Details Tab */}
              <ProductsDetailsTab />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts />
      </div>
    </>
  );
};

export default ProductDetails;
