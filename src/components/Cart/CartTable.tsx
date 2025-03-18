"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import InputCounter from "./InputCounter";

const CartTable: React.FC = () => {
  return (
    <>
      <div className="cart-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop/details">
                            <Image
                              src="/images/shop/item1.jpg"
                              alt="item"
                              width={800}
                              height={850}
                            />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="/shop/details">Novel Bunch</Link>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">$455.5</span>
                        </td>
                        <td className="product-quantity">
                          <InputCounter />
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">$455.5</span>
                        </td>
                        <td className="product-remove">
                          <button type="button" style={{ border: '0', padding: '3px 10px' }}>
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop/details">
                            <Image
                              src="/images/shop/item2.jpg"
                              alt="item"
                              width={800}
                              height={850}
                            />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="/shop/details">Book Chicks</Link>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">$541.5</span>
                        </td>
                        <td className="product-quantity">
                          <InputCounter />
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">$541.5</span>
                        </td>
                        <td className="product-remove">
                          <button type="button" style={{ border: '0', padding: '3px 10px' }}>
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop/details">
                            <Image
                              src="/images/shop/item3.jpg"
                              alt="item"
                              width={800}
                              height={850}
                            />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="/shop/details">Book Divas</Link>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">$140.5</span>
                        </td>
                        <td className="product-quantity">
                          <InputCounter />
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">$140.5</span>
                        </td>
                        <td className="product-remove">
                          <button type="button" style={{ border: '0', padding: '3px 10px' }}>
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>

                      {/* <tr>
                        <td colSpan={5}>
                          <div className="text-center">
                          Empty
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>

                <div className="cart-buttons">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <div className="shopping-coupon-code">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon code"
                          name="coupon-code"
                          id="coupon-code"
                        />
                        <button type="submit">Apply Coupon</button>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <div className="cart-totals">
                        <h3>Cart Totals</h3>
                        <ul>
                          <li>
                            Subtotal <span>$1137.50</span>
                          </li>
                          <li>
                            Shipping <span>$30.00</span>
                          </li>
                          <li>
                            Total{" "}
                            <span>
                              <b>$1167.50</b>
                            </span>
                          </li>
                        </ul>
                        <div className="text-center">
                          <button className="default-btn" type="button">
                            Proceed to Checkout <span></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTable;
