"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../../../types/article";

interface BlogCardProps {
  articles: Article[];
}

const BlogCard: React.FC<BlogCardProps> = ({ articles }) => {
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
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <Link href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </Link>
                <Link href="#" className="page-numbers">
                  1
                </Link>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <Link href="#" className="page-numbers">
                  3
                </Link>
                <Link href="#" className="page-numbers">
                  4
                </Link>
                <Link href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
