"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import BlogCard from "../../components/Article/BlogCard";
import { Article } from "../../../types/article";
import { useSearchParams } from 'next/navigation';
import { API_BASE_URL } from "@/lib/apiConfig";

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
        const params = new URLSearchParams({ status: 'published', page });
        if (category) params.set('category', category);

        const response = await fetch(`${API_BASE_URL}/api/articles/?${params.toString()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();

        setArticles(data.results);
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

    fetchArticles();
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
        <BlogCard articles={articles} pagination={pagination} loading={loading} />
      </div>
      <Footer />
    </>
  );
}
