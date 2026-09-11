"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Portfolio } from "../../../types/portfolio";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

interface PortfolioCardProps {
  portfolios: Portfolio[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolios, pagination }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const category = searchParams.get("category");
  const { t } = useLanguage();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="works-area ptb-100">
      <div className="container-fluid">
        <div className="section-title">
          <span className="sub-title">{t("Portfolio")}</span>
          <h2>{t("Our Portfolio")}</h2>
          <p style={{ textAlign: "center" }}>
            {t("A showcase of projects and works delivered by Ruang Bumi Persada.")}
          </p>
          {category && (
            <p style={{ textAlign: "center" }}>
              <Link
                href="/portfolio"
                style={{ color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#7bc723")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                {t("Portfolio")}
              </Link>
              <span style={{ color: "#7bc723", fontWeight: 600 }}>{" > "}{category}</span>
            </p>
          )}
        </div>

        <div className="row">
          {portfolios.map((portfolio) => (
            <div className="col-lg-4 col-sm-6 col-xl-3" key={portfolio.slug}>
              <div className="work-card">
                <div style={{ position: "relative", width: "100%", height: "260px" }}>
                  <Link href={`/portfolio/details/${portfolio.slug}`} style={{ display: "block", height: "100%" }}>
                    <Image
                      src={portfolio.image_cover_url || "/images/works/work1.jpg"}
                      alt={portfolio.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </div>

                <div className="content">
                  {portfolio.category_portfolios_detail && (
                    <span>
                      <Link href={`/portfolio?category=${encodeURIComponent(portfolio.category_portfolios_detail.slug)}`}>
                        {portfolio.category_portfolios_detail.name}
                      </Link>
                    </span>
                  )}
                  <h3>
                    <Link href={`/portfolio/details/${portfolio.slug}`}>
                      {portfolio.title}
                    </Link>
                  </h3>

                  <Link
                    href={`/portfolio/details/${portfolio.slug}`}
                    className="work-btn"
                  >
                    {t("Read More")}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {pagination.totalPages > 1 && (
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <button
                  className={`prev page-numbers ${pagination.currentPage === 1 ? "disabled" : ""}`}
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                >
                  <i className="fas fa-angle-double-left"></i>
                </button>

                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`page-numbers ${pagination.currentPage === page ? "current" : ""}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}

                <button
                  className={`next page-numbers ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}`}
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                >
                  <i className="fas fa-angle-double-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
