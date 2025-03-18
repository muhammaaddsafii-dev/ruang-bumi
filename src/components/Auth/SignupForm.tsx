"use client";

import React from "react";
import Link from "next/link";

const SignupForm: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="form-content">
          <div className="form-header">
            <h3>Create an Account</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <form>
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="your-email"
                placeholder="Your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="your-password"
                placeholder="Your password"
              />
            </div>

            <button type="submit" className="default-btn">
              Signup
            </button>
          </form>

          <div className="form-footer">
            <p>
              Do you have an account?
              <Link href="/login" className="form-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
