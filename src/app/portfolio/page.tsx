import React, { Suspense } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PortfolioCard from "../../components/Portfolio/PortfolioCard";
import { Portfolio } from "../../../types/portfolio";
import { API_BASE_URL } from "@/lib/apiConfig";

const ITEMS_PER_PAGE = 10;

// Data is fetched on the server and cached, so visitors don't wait for the
// (possibly cold) backend. Presigned image URLs last 1h, so keep this short.
const REVALIDATE_SECONDS = 60;

interface PageProps {
  searchParams: { category?: string; page?: string };
}

async function getPortfolios(category: string | undefined, page: string) {
  const params = new URLSearchParams({ status: "published", page });
  if (category) params.set("category", category);

  const response = await fetch(`${API_BASE_URL}/api/portfolios/?${params.toString()}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch portfolios");
  }
  return (await response.json()) as { count: number; results: Portfolio[] };
}

export default async function Page({ searchParams }: PageProps) {
  const page = searchParams.page || "1";

  let data: { count: number; results: Portfolio[] };
  try {
    data = await getPortfolios(searchParams.category, page);
  } catch (err) {
    return (
      <div className="container mx-auto py-8">
        <div className="alert alert-danger" role="alert">
          {err instanceof Error ? err.message : "An unknown error occurred"}
        </div>
      </div>
    );
  }

  const pagination = {
    currentPage: Number(page),
    totalPages: Math.max(1, Math.ceil(data.count / ITEMS_PER_PAGE)),
    totalItems: data.count,
    itemsPerPage: ITEMS_PER_PAGE,
  };

  return (
    <>
      <Navbar />
      <div className="mt-5">
        {/* PortfolioCard uses useSearchParams, which needs a Suspense boundary */}
        <Suspense fallback={null}>
          <PortfolioCard portfolios={data.results} pagination={pagination} />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
