"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  image_cover: string;
  date_published: string;
  description: string;
}

const BlogSideBar: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("/api/articles?limit=7");
      const data = await res.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="widget-area" id="secondary">
      <div className="widget widget_posts_thumb">
        <h3 className="widget-title">Recent Articles</h3>

        {articles.map((article) => (
          <article className="item" key={article.id}>
            <Link href={`/article/details/${article.id}`} className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(${article.image_cover})`,
                }}
              ></span>
            </Link>
            <div className="info">
              <time>{new Date(article.date_published).toLocaleDateString()}</time>
              <h4 className="title usmall">
                <Link href={`/article/details/${article.id}`}>{article.title.split(" ").slice(0, 4).join(" ")} ...</Link>
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {article.description.split(" ").slice(0, 4).join(" ")}...
              </p>
            </div>
            <div className="clear"></div>
          </article>
        ))}

      </div>
    </div>
  );
};

export default BlogSideBar;
