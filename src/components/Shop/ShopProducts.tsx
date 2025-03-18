"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ShopProducts: React.FC = () => {
  return (
    <>
      <div className="shop-area ptb-100">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 col-sm-6">
                <div className="woocommerce-result-count">
                  <p>Showing 1-8 of 14 results</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select">
                    <option value="1">Default sorting</option>
                    <option value="2">Sort by popularity</option>
                    <option value="0">Sort by average rating</option>
                    <option value="3">Sort by latest</option>
                    <option value="4">Sort by price: low to high</option>
                    <option value="5">Sort by price: high to low</option>
                    <option value="6">Sort by new</option>
                  </select>
                </div>
              </div>
            </div>
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
                    <span className="new">$445.5</span>
                    <span className="old">$455.5</span>
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
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/shop/details/">Book Chicks</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$531.5</span>
                    <span className="old">$541.5</span>
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
                    <span className="new">$130.5</span>
                    <span className="old">$140.5</span>
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
                      src="/images/shop/item4.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/item4-hover.jpg"
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
                    <Link href="/shop/details/">Book Smart</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$590</span>
                    <span className="old">$600</span>
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
                      src="/images/shop/item5.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/item5-hover.jpg"
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
                    <Link href="/shop/details/">Book Broads</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$645.5</span>
                    <span className="old">$655.5</span>
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
                      src="/images/shop/item6.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/item6-hover.jpg"
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
                    <Link href="/shop/details/">Page Turners</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$405</span>
                    <span className="old">$415</span>
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

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a className="prev page-numbers" href="#">
                  <i className="fas fa-angle-double-left"></i>
                </a>
                <a className="page-numbers" href="#">
                  1
                </a>
                <span className="page-numbers current">2</span>
                <a className="page-numbers" href="#">
                  3
                </a>
                <a className="page-numbers" href="#">
                  4
                </a>
                <a className="next page-numbers" href="#">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
