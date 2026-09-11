"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PortfolioCard from "../../components/Portfolio/PortfolioCard";
import { Portfolio } from "../../../types/portfolio";
import { useSearchParams } from "next/navigation";
import { API_BASE_URL } from "@/lib/apiConfig";

export default function Page() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  });

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({ status: "published", page });
        if (category) params.set("category", category);

        const response = await fetch(`${API_BASE_URL}/api/portfolios/?${params.toString()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch portfolios");
        }
        const data = await response.json();

        setPortfolios(data.results);
        setPagination({
          currentPage: Number(page),
          totalPages: Math.max(1, Math.ceil(data.count / 10)),
          totalItems: data.count,
          itemsPerPage: 10,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, [category, page]);

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mt-5">
        <PortfolioCard portfolios={portfolios} pagination={pagination} />
      </div>
      <Footer />
    </>
  );
}
