"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../../../types/article";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface BlogCardProps {
  articles: Article[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ articles, pagination }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const category = searchParams.get("category");

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Articles</span>
            <h2>Our Articles</h2>
            <p style={{ textAlign: 'center' }}>
              Our articles provide expert analysis, case studies, and innovative
              technologies and GIS solutions to help you
              stay ahead.
            </p>
          </div>
          <div className="row">
            {articles.map((article) => (
              <div
                className="col-lg-4 col-md-6"
                style={{
                  marginBottom: "30px",
                  padding: "15px",
                }}
                key={article.slug}
              >
                <div
                  className="single-blog-post"
                  style={{
                    height: "100%",
                    marginBottom: "30px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.15)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="post-image"
                    style={{
                      height: "250px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Link
                      href={`/article/details/${article.slug}`}
                      style={{ display: "block", height: "100%" }}
                    >
                      <Image
                        src={article.image_cover || ""}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          By: <Link href="/blog">{article.author}</Link>
                        </li>
                        <li>
                          {new Date(article.date_published).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <Link href={`/article/details/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p>
                      {article.description.split(" ").slice(0, 4).join(" ")} ...
                    </p>

                    <Link
                      href={`/article/details/${article.slug}`}
                      className="read-more-btn"
                    >
                      Read More <i className="flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <button
                    className={`prev page-numbers ${pagination.currentPage === 1 ? "disabled" : ""
                      }`}
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                  >
                    <i className="fas fa-angle-double-left"></i>
                  </button>

                  {Array.from(
                    { length: pagination.totalPages },
                    (_, i) => i + 1
                  ).map((page) => (
                    <button
                      key={page}
                      className={`page-numbers ${pagination.currentPage === page ? "current" : ""
                        }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    className={`next page-numbers ${pagination.currentPage === pagination.totalPages
                        ? "disabled"
                        : ""
                      }`}
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
    </>
  );
};

export default BlogCard;
