"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article, CategoryArticle } from "../../../types/article";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { API_BASE_URL } from "@/lib/apiConfig";

interface BlogCardProps {
  articles: Article[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  loading?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ articles, pagination, loading }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const activeCategory = searchParams.get("category");
  const { t, language } = useLanguage();

  const [categories, setCategories] = useState<CategoryArticle[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/category-articles/`);
        const data = await res.json();
        setCategories(Array.isArray(data.results) ? data.results : []);
      } catch {
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const timeAgo = (dateStr: string) => {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const diffHrs = Math.round(diffMs / 3600000);

    if (diffHrs < 1) return language === "id" ? "Baru saja" : "Just now";
    if (diffHrs < 24) return language === "id" ? `${diffHrs} jam lalu` : `${diffHrs} hrs ago`;
    const diffDays = Math.round(diffHrs / 24);
    if (diffDays < 30) return language === "id" ? `${diffDays} hari lalu` : `${diffDays} days ago`;
    return new Date(dateStr).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const initial = (name: string) => (name?.trim()?.charAt(0) || "R").toUpperCase();

  return (
    <>
      <div className="rb-articles">
        <div
          className="container-fluid"
          style={{ paddingLeft: "clamp(16px, 6vw, 96px)", paddingRight: "clamp(16px, 6vw, 96px)" }}
        >
          <div className="rb-articles-head">
            <span className="rb-eyebrow">{t("Articles")}</span>
            <h2>{t("Our Articles")}</h2>
            <p>
              {t("Our articles present information on activities, portfolios, and the latest developments in information technology..")}
            </p>
          </div>

          {(categories.length > 0 || activeCategory) && (
            <div className="rb-pills">
              <Link href="/article" className={`rb-pill ${!activeCategory ? "is-active" : ""}`}>
                {t("All Articles")}
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/article?category=${encodeURIComponent(cat.slug)}`}
                  className={`rb-pill ${activeCategory === cat.slug ? "is-active" : ""}`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          {loading ? (
            <div className="rb-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div className="rb-skeleton rb-skeleton-card" key={i} />
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="rb-empty">
              <div className="rb-empty-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <h3>{t("No articles found.")}</h3>
            </div>
          ) : (
            <>
              {articles.length > 0 && (
                <div className="rb-grid">
                  {articles.map((article) => (
                    <article className="rb-card" key={article.slug}>
                      <Link href={`/article/details/${article.slug}`} className="rb-card-media">
                        <Image
                          src={article.image_cover_url || "/images/works/work1.jpg"}
                          alt={article.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {article.category_articles_detail && (
                          <span className="rb-card-badge">{article.category_articles_detail.name}</span>
                        )}
                      </Link>
                      <div className="rb-card-body">
                        <h3>
                          <Link href={`/article/details/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <p>{article.description}</p>
                        <div className="rb-card-footer">
                          <div className="rb-card-author">
                            <span className="rb-avatar rb-avatar-sm">{initial(article.author)}</span>
                            <span>{article.author}</span>
                          </div>
                          <span className="rb-card-date">{timeAgo(article.date_published)}</span>
                        </div>
                        <Link href={`/article/details/${article.slug}`} className="rb-card-cta">
                          {t("Read More")} <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}

          {pagination.totalPages > 1 && (
            <div className="rb-pagination">
              <button
                className="rb-page-btn"
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={pagination.currentPage === 1}
                aria-label="Previous page"
              >
                <i className="fas fa-angle-left"></i>
              </button>

              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`rb-page-btn ${pagination.currentPage === page ? "is-active" : ""}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className="rb-page-btn"
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={pagination.currentPage === pagination.totalPages}
                aria-label="Next page"
              >
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .rb-articles {
          padding: 100px 0 80px;
          background: #fafbfa;
        }
        .rb-articles-head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 32px;
        }
        .rb-eyebrow {
          display: inline-block;
          color: #7bc723;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-size: 15px;
          margin-bottom: 8px;
        }
        .rb-articles-head h2 {
          font-size: 34px;
          font-weight: 800;
          margin: 0 0 12px;
          color: #111827;
        }
        .rb-articles-head p {
          color: #6b7280;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .rb-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
        }
        .rb-pill {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid #e5e7eb;
          color: #374151;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .rb-pill:hover {
          border-color: #7bc723;
          color: #4c8a11;
        }
        .rb-pill.is-active {
          background: #7bc723;
          border-color: #7bc723;
          color: #fff;
        }

        .rb-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.4);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
          color: #fff;
          backdrop-filter: blur(4px);
          flex-shrink: 0;
        }

        .rb-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 32px;
        }

        .rb-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(17, 24, 39, 0.06);
          border: 1px solid #f0f1f2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .rb-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 32px rgba(17, 24, 39, 0.12);
        }
        .rb-card-media {
          position: relative;
          display: block;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #f3f4f6;
        }
        .rb-card-media img {
          transition: transform 0.5s ease;
        }
        .rb-card:hover .rb-card-media img {
          transform: scale(1.08);
        }
        .rb-card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(17, 24, 39, 0.75);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 5px 12px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }
        .rb-card-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .rb-card-body h3 {
          font-size: 19px;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 10px;
        }
        .rb-card-body h3 a {
          color: #111827;
          text-decoration: none;
        }
        .rb-card-body h3 a:hover {
          color: #7bc723;
        }
        .rb-card-body p {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .rb-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .rb-card-author {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
        }
        .rb-avatar-sm {
          width: 26px;
          height: 26px;
          font-size: 11px;
          background: #eef7e0;
          color: #4c8a11;
          border: none;
        }
        .rb-card-date {
          font-size: 12px;
          color: #9ca3af;
        }
        .rb-card-cta {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #4c8a11;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .rb-card-cta:hover {
          gap: 10px;
          color: #7bc723;
        }

        .rb-empty {
          text-align: center;
          padding: 80px 20px;
          background: #fff;
          border-radius: 20px;
          border: 1px dashed #e5e7eb;
        }
        .rb-empty-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #eef7e0;
          color: #7bc723;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .rb-empty h3 {
          font-size: 18px;
          color: #374151;
          margin: 0;
        }

        .rb-skeleton {
          background: linear-gradient(90deg, #eceff1 25%, #f5f6f7 37%, #eceff1 63%);
          background-size: 400% 100%;
          animation: rb-shimmer 1.4s ease infinite;
          border-radius: 20px;
        }
        .rb-skeleton-card {
          height: 340px;
          border-radius: 16px;
        }
        @keyframes rb-shimmer {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }

        .rb-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 56px;
        }
        .rb-page-btn {
          min-width: 40px;
          height: 40px;
          padding: 0 8px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #374151;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .rb-page-btn:hover:not(:disabled) {
          border-color: #7bc723;
          color: #4c8a11;
        }
        .rb-page-btn.is-active {
          background: #7bc723;
          border-color: #7bc723;
          color: #fff;
        }
        .rb-page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .rb-articles-head h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
};

export default BlogCard;
