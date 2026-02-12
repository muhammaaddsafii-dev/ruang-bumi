"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import BlogCard from "../../components/Article/BlogCard";
import { Article } from "../../../types/article";
import { useSearchParams } from 'next/navigation';
import { Pagination } from "@mui/material";

export default function Page() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10
  });

  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const url = category
          ? `/api/articles?category=${category}&page=${page}&status=published&_t=${Date.now()}`
          : `/api/articles?page=${page}&status=published&_t=${Date.now()}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();

        setArticles(data.data);
        setPagination(data.pagination);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    // Anda bisa menggunakan router.push untuk navigasi ke halaman baru
    // atau memuat data langsung dengan parameter page baru
    window.location.href = category
      ? `/article?category=${category}&page=${newPage}`
      : `/article?page=${newPage}`;
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <div className="spinner-border text-primary" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

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
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">
          {category ? `Category: ${category}` : 'All Articles'}
        </h1>
        <BlogCard articles={articles} pagination={pagination} />
      </div>
      <Footer />
    </>
  );
}