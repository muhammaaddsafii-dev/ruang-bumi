import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";

// Shown instantly while the server fetches portfolios (e.g. backend cold start).
export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="mt-5">
        <div className="works-area ptb-100">
          <div
            className="container-fluid"
            style={{ paddingLeft: "clamp(16px, 6vw, 96px)", paddingRight: "clamp(16px, 6vw, 96px)" }}
          >
            <div className="row" aria-busy="true" aria-label="Loading portfolios">
              {Array.from({ length: 8 }, (_, i) => (
                <div className="col-lg-4 col-sm-6 col-xl-3" key={i}>
                  <div className="portfolio-skeleton" />
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .portfolio-skeleton {
              height: 340px;
              margin-bottom: 30px;
              border-radius: 8px;
              background: linear-gradient(90deg, #eee 25%, #f6f6f6 37%, #eee 63%);
              background-size: 400% 100%;
              animation: portfolio-skeleton-shimmer 1.4s ease infinite;
            }
            @keyframes portfolio-skeleton-shimmer {
              0% { background-position: 100% 50%; }
              100% { background-position: 0 50%; }
            }
          `}</style>
        </div>
      </div>
      <Footer />
    </>
  );
}
