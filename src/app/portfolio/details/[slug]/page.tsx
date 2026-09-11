// src/app/portfolio/details/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../../../components/Layout/Navbar";
import PortfolioDetailsContent from "../../../../components/PortfolioDetails/PortfolioDetailsContent";
import Footer from "../../../../components/Layout/Footer";
import { Portfolio } from "../../../../../types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { API_BASE_URL } from "@/lib/apiConfig";

export default function Page() {
  const params = useParams();
  const { t } = useLanguage();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const listResponse = await fetch(`${API_BASE_URL}/api/portfolios/?slug=${params.slug}`);
        const listData = await listResponse.json();
        const found = listData.results?.[0];
        if (!found) {
          setPortfolio(null);
          return;
        }
        const detailResponse = await fetch(`${API_BASE_URL}/api/portfolios/${found.id}/`);
        const detailData = await detailResponse.json();
        setPortfolio(detailData);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchPortfolio();
    }
  }, [params.slug]);

  if (loading) {
    return <div>{t("Loading...")}</div>;
  }

  if (!portfolio) {
    return <div>{t("Portfolio not found")}</div>;
  }

  return (
    <>
      <Navbar />

      <div className="container mt-5 pt-4">
        <Link href="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#767676" }}>
          <ArrowLeft size={16} />
          {t("Kembali ke Portfolio")}
        </Link>
      </div>

      <PortfolioDetailsContent portfolio={portfolio} />

      <Footer />
    </>
  );
}
