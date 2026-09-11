"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Article, CategoryArticle } from "../../../types/article";
import { API_BASE_URL } from "@/lib/apiConfig";

const BlogSideBar: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<CategoryArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const articlesRes = await fetch(
          `${API_BASE_URL}/api/articles/?status=published&ordering=-date_published`
        );
        const articlesData = await articlesRes.json();
        setArticles(Array.isArray(articlesData.results) ? articlesData.results.slice(0, 3) : []);

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

  if (loading) {
    return (
      <div className="widget-area" id="secondary">
        <div className="widget widget_posts_thumb mt-8">
          <h3 className="widget-title">{t("Recent Articles")}</h3>
          <p>{t("Loading...")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="widget-area" id="secondary">
      {/* Recent Articles Widget */}
      <div className="widget widget_posts_thumb mt-8">
        <h3 className="widget-title">{t("Recent Articles")}</h3>

        {articles.length > 0 ? (
          articles.map((article) => (
            <article className="item mb-4" key={article.slug}>
              <Link href={`/article/details/${article.slug}`} className="thumb">
                <span
                  className="fullimage cover block w-full h-24 bg-cover bg-center rounded"
                  role="img"
                  style={{
                    backgroundImage: `url(${article.image_cover_url || '/images/default-cover.jpg'})`,
                  }}
                ></span>
              </Link>
              <div className="info mt-2">
                <time className="text-xs text-gray-500">
                  {new Date(article.date_published).toLocaleDateString()}
                </time>
                <h4 className="title usmall mt-1">
                  <Link
                    href={`/article/details/${article.slug}`}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {article.title.split(" ").slice(0, 4).join(" ")} ...
                  </Link>
                </h4>
                {article.category_articles_detail && (
                  <Link
                    href={`/article?category=${encodeURIComponent(article.category_articles_detail.slug)}`}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded inline-block mt-1"
                  >
                    {article.category_articles_detail.name}
                  </Link>
                )}
              </div>
            </article>
          ))
        ) : (
          <p className="text-sm text-gray-500">{t("No recent articles found")}</p>
        )}
      </div>

      {/* Categories Widget */}
      <div className="widget widget_categories">
        <h3 className="widget-title">{t("Categories")}</h3>
        <ul>
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/article?category=${encodeURIComponent(category.slug)}`}
                  className="text-gray-700 hover:text-primary transition-colors block py-1"
                >
                  {category.name}
                </Link>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">{t("No categories found")}</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogSideBar;
