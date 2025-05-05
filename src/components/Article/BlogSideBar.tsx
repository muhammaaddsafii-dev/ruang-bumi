"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  image_cover: string;
  date_published: string;
  description: string;
  category: string;
}

const BlogSideBar: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent articles
        const articlesRes = await fetch("/api/articles?limit=7");
        const articlesData = await articlesRes.json();
        setArticles(articlesData);

        // Fetch unique categories
        const categoriesRes = await fetch("/api/articles/categories");
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="widget-area" id="secondary">
      {/* Recent Articles Widget */}
      <div className="widget widget_posts_thumb mt-8">
        <h3 className="widget-title">Recent Articles</h3>

        {articles.map((article) => (
          <article className="item mb-4" key={article.id}>
            <Link href={`/article/details/${article.id}`} className="thumb">
              <span
                className="fullimage cover block w-full h-24 bg-cover bg-center rounded"
                role="img"
                style={{
                  backgroundImage: `url(${article.image_cover})`,
                }}
              ></span>
            </Link>
            <div className="info mt-2">
              <time className="text-xs text-gray-500">
                {new Date(article.date_published).toLocaleDateString()}
              </time>
              <h4 className="title usmall mt-1">
                <Link 
                  href={`/article/details/${article.id}`} 
                  className="text-sm font-medium hover:text-primary"
                >
                  {article.title.split(" ").slice(0, 4).join(" ")} ...
                </Link>
              </h4>
              {article.category && (
                <Link 
                  href={`/article?category=${encodeURIComponent(article.category)}`}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded inline-block mt-1"
                >
                  {article.category}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Categories Widget */}
      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>
        <ul>
          {/* <li>
            <Link 
              href="/article" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              All Categories
            </Link>
          </li> */}
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/article?category=${encodeURIComponent(category)}`}
                className="text-gray-700 hover:text-primary transition-colors block py-1"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSideBar;