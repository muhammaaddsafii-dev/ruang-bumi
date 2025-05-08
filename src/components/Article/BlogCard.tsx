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
  const category = searchParams.get('category');

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <div className="section-title mt-5">
            <span className="sub-title">Articles</span>
            <h2>Our Articles</h2>
            <p>
              Our articles provide expert analysis, case studies, and innovative
              applications of satellite imagery and GIS solutions to help you
              stay ahead.
            </p>
          </div>
          <div className="row">
            {articles.map((article) => (
              <div className="col-lg-4 col-md-6" key={article.id}>
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href={`/article/details/${article.id}`}>
                      <Image
                        src={
                          article.image_cover ||
                          "/images/blog-image/blog-image1.jpg"
                        }
                        alt={article.title}
                        width={860}
                        height={700}
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
                      <Link href={`/article/details/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p>{article.description.split(" ").slice(0, 4).join(" ")} ...</p>

                    <Link
                      href={`/article/details/${article.id}`}
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
                    className={`prev page-numbers ${pagination.currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                  >
                    <i className="fas fa-angle-double-left"></i>
                  </button>

                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`page-numbers ${pagination.currentPage === page ? 'current' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    className={`next page-numbers ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}`}
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