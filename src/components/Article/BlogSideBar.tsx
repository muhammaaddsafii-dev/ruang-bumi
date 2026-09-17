"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Article, CategoryArticle } from "../../../types/article";
import { API_BASE_URL } from "@/lib/apiConfig";

const BlogSideBar: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<CategoryArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const articlesRes = await fetch(
          `${API_BASE_URL}/api/articles/?status=published&ordering=-date_published`
        );
        const articlesData = await articlesRes.json();
        setArticles(Array.isArray(articlesData.results) ? articlesData.results.slice(0, 4) : []);

        const categoriesRes = await fetch(`${API_BASE_URL}/api/category-articles/`);
        const categoriesData = await categoriesRes.json();
        setCategories(Array.isArray(categoriesData.results) ? categoriesData.results : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <aside className="rbs-widget-area">
      {/* Recent Articles Widget */}
      <div className="rbs-card">
        <h3 className="rbs-card-title">
          <i className="fas fa-clock"></i> {t("Recent Articles")}
        </h3>

        {loading ? (
          <div className="rbs-recent-list">
            {[1, 2, 3].map((i) => (
              <div className="rbs-skeleton-item" key={i} />
            ))}
          </div>
        ) : articles.length > 0 ? (
          <div className="rbs-recent-list">
            {articles.map((article) => (
              <Link href={`/article/details/${article.slug}`} className="rbs-recent-item" key={article.slug}>
                <div className="rbs-recent-thumb">
                  <Image
                    src={article.image_cover_url || "/images/default-cover.jpg"}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="72px"
                  />
                </div>
                <div className="rbs-recent-info">
                  <span className="rbs-recent-date">{formatDate(article.date_published)}</span>
                  <h4>{article.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rbs-empty-text">{t("No recent articles found")}</p>
        )}
      </div>

      {/* Categories Widget */}
      <div className="rbs-card">
        <h3 className="rbs-card-title">
          <i className="fas fa-tags"></i> {t("Categories")}
        </h3>

        {categories.length > 0 ? (
          <div className="rbs-tag-list">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/article?category=${encodeURIComponent(category.slug)}`}
                className="rbs-tag"
              >
                {category.name}
              </Link>
            ))}
          </div>
        ) : (
          <p className="rbs-empty-text">{t("No categories found")}</p>
        )}
      </div>

      <style jsx global>{`
        .rbs-widget-area {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .rbs-card {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #eef0f1;
          box-shadow: 0 4px 16px rgba(17, 24, 39, 0.05);
        }
        .rbs-card-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 18px;
          padding-bottom: 14px;
          border-bottom: 2px solid #f0f1f2;
        }
        .rbs-card-title i {
          color: #7bc723;
          font-size: 15px;
        }

        .rbs-recent-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .rbs-recent-item {
          display: flex;
          gap: 12px;
          text-decoration: none;
          align-items: flex-start;
        }
        .rbs-recent-thumb {
          position: relative;
          flex-shrink: 0;
          width: 72px;
          height: 72px;
          border-radius: 10px;
          overflow: hidden;
          background: #f3f4f6;
        }
        .rbs-recent-thumb img {
          transition: transform 0.4s ease;
        }
        .rbs-recent-item:hover .rbs-recent-thumb img {
          transform: scale(1.1);
        }
        .rbs-recent-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .rbs-recent-date {
          font-size: 11px;
          color: #9ca3af;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-bottom: 4px;
        }
        .rbs-recent-info h4 {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          color: #1f2937;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
        }
        .rbs-recent-item:hover .rbs-recent-info h4 {
          color: #7bc723;
        }

        .rbs-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .rbs-tag {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 999px;
          background: #f5f7f4;
          color: #374151;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .rbs-tag:hover {
          background: #7bc723;
          color: #fff;
        }

        .rbs-empty-text {
          font-size: 13px;
          color: #9ca3af;
          margin: 0;
        }

        .rbs-skeleton-item {
          height: 72px;
          border-radius: 10px;
          background: linear-gradient(90deg, #eceff1 25%, #f5f6f7 37%, #eceff1 63%);
          background-size: 400% 100%;
          animation: rbs-shimmer 1.4s ease infinite;
        }
        @keyframes rbs-shimmer {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }

        @media (max-width: 991px) {
          .rbs-widget-area {
            margin-top: 32px;
          }
        }
      `}</style>
    </aside>
  );
};

export default BlogSideBar;
