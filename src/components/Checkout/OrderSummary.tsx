import React from "react";
import Link from "next/link";

const OrderSummary: React.FC = () => {
  return (
    <>
      <div className="col-lg-6 col-md-12">
        <div className="order-details">
          <h3 className="title">Your Order</h3>

          <div className="order-table table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="product-name">
                    <Link href="/shop/details">Novel Bunch</Link>
                  </td>

                  <td className="product-total">
                    <span className="subtotal-amount">$455.5</span>
                  </td>
                </tr>

                <tr>
                  <td className="product-name">
                    <Link href="/shop/details">Book Chicks</Link>
                  </td>

                  <td className="product-total">
                    <span className="subtotal-amount">$541.5</span>
                  </td>
                </tr>

                <tr>
                  <td className="product-name">
                    <Link href="/shop/details">Book Divas</Link>
                  </td>

                  <td className="product-total">
                    <span className="subtotal-amount">$140.5</span>
                  </td>
                </tr>

                <tr>
                  <td className="order-subtotal">
                    <span>Cart Subtotal</span>
                  </td>

                  <td className="order-subtotal-price">
                    <span className="order-subtotal-amount">$1137.5</span>
                  </td>
                </tr>

                <tr>
                  <td className="order-shipping">
                    <span>Shipping</span>
                  </td>

                  <td className="shipping-price">
                    <span>Free</span>
                  </td>
                </tr>
                <tr>
                  <td className="total-price">
                    <span>Order Total</span>
                  </td>

                  <td className="product-subtotal">
                    <span className="subtotal-amount">$1137.5</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="payment-method">
            <p>
              <input
                type="radio"
                id="direct-bank-transfer"
                name="radio-group"
              />
              <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>
            </p>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <p>
              <input type="radio" id="paypal" name="radio-group" />
              <label htmlFor="paypal">PayPal</label>
            </p>
            <p>
              <input type="radio" id="cash-on-delivery" name="radio-group" />
              <label htmlFor="cash-on-delivery">Cash on Delivery</label>
            </p>
          </div>

          <div className="order-btn">
            <button className="default-btn order-btn">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
