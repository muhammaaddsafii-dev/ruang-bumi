"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Portfolio, CategoryPortfolio } from "../../../types/portfolio";
import { API_BASE_URL } from "@/lib/apiConfig";

const PortfolioSideBar: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [categories, setCategories] = useState<CategoryPortfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const portfoliosRes = await fetch(
          `${API_BASE_URL}/api/portfolios/?status=published&ordering=-project_date`
        );
        const portfoliosData = await portfoliosRes.json();
        setPortfolios(Array.isArray(portfoliosData.results) ? portfoliosData.results.slice(0, 3) : []);

        const categoriesRes = await fetch(`${API_BASE_URL}/api/category-portfolios/`);
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
          <h3 className="widget-title">{t("Recent Portfolio")}</h3>
          <p>{t("Loading...")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="widget-area" id="secondary">
      {/* Recent Portfolio Widget */}
      <div className="widget widget_posts_thumb mt-8">
        <h3 className="widget-title">{t("Recent Portfolio")}</h3>

        {portfolios.length > 0 ? (
          portfolios.map((portfolio) => (
            <article className="item mb-4" key={portfolio.slug}>
              <Link href={`/portfolio/details/${portfolio.slug}`} className="thumb">
                <span
                  className="fullimage cover block w-full h-24 bg-cover bg-center rounded"
                  role="img"
                  style={{
                    backgroundImage: `url(${portfolio.image_cover_url || '/images/default-cover.jpg'})`,
                  }}
                ></span>
              </Link>
              <div className="info mt-2">
                <time className="text-xs text-gray-500">
                  {new Date(portfolio.project_date).toLocaleDateString()}
                </time>
                <h4 className="title usmall mt-1">
                  <Link
                    href={`/portfolio/details/${portfolio.slug}`}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {portfolio.title.split(" ").slice(0, 4).join(" ")} ...
                  </Link>
                </h4>
                {portfolio.category_portfolios_detail && (
                  <Link
                    href={`/portfolio?category=${encodeURIComponent(portfolio.category_portfolios_detail.slug)}`}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded inline-block mt-1"
                  >
                    {portfolio.category_portfolios_detail.name}
                  </Link>
                )}
              </div>
            </article>
          ))
        ) : (
          <p className="text-sm text-gray-500">{t("No recent portfolio found")}</p>
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
                  href={`/portfolio?category=${encodeURIComponent(category.slug)}`}
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

export default PortfolioSideBar;
