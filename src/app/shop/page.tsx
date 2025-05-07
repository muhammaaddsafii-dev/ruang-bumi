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
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/coming-soon.png"
                  alt="error"
                  width={1250}
                  height={664}
                />

                <h3>Coming Soon</h3>
                <p>
                We're crafting an exceptional experience for you. Our store will launch soon. 
                Stay tuned and be the first to know when we go live!
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
