// src/components/ArticleDetails/BlogDetailsContent.tsx
"use client";

import React from "react";
import Link from "next/link";
import BlogSideBar from "../../components/Article/BlogSideBar";
import Image from "next/image";
import { Article } from "@/types/article";

interface BlogDetailsContentProps {
  article: Article;
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({ article }) => {
  return (
    <>
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src={article.image_cover || "/images/blog-image/blog-details.jpg"}
                    alt={article.title}
                    width={860}
                    height={700}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="#">
                          {new Date(article.date_published).toLocaleDateString()}
                        </Link>
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="/blog">{article.author}</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>{article.title}</h3>

                  <div dangerouslySetInnerHTML={{ __html: article.content }} />

                  {/* ... (bagian lainnya tetap sama) */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;