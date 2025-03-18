"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedProducts: React.FC = () => {
  return (
    <>
      <div className="related-products">
        <div className="container">
          <div className="section-title">
            <h2>Related Products</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/details/">
                    <Image
                      src="/images/shop/item1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/item1-hover.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="flaticon-shopping-cart"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/details/">Novel Bunch</Link>
                  </h3>

                  <div className="price">
                    <span className="new">$455.50</span>
                    <span className="old">$460.50</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/details/">
                    <Image
                      src="/images/shop/item2.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/item2-hover.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="flaticon-shopping-cart"></i>
                  </button>

                  <div className="sale-btn">Sale!</div>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/details/">Book Chicks</Link>
                  </h3>

                  <div className="price">
                    <span className="new">$541.50</span>
                    <span className="old">$652.50</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/details/">
                    <Image
                      src="/images/shop/item3.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/item3-hover.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="flaticon-shopping-cart"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/details/">Book Divas</Link>
                  </h3>

                  <div className="price">
                    <span className="new">$140.50</span>
                    <span className="old">$150.50</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
