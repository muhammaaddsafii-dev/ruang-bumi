"use client";

import React from "react"; 

const ResetPassword: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="form-content">
          <div className="form-header">
            <h3>Reset password</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="your-email"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="default-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
