import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <Image
                  src="/images/404.png"
                  alt="error"
                  width={1250}
                  height={664}
                />

                <h3>Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>

                <Link href="/" className="default-btn">
                  Go to Home <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
