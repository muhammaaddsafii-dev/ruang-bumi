// src/app/article/details/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../../../components/Layout/Navbar";
import BlogDetailsContent from "../../../../components/ArticleDetails/BlogDetailsContent";
import Footer from "../../../../components/Layout/Footer";
import { Article } from "../../../../../types/article";
import { useLanguage } from "@/context/LanguageContext";
import { API_BASE_URL } from "@/lib/apiConfig";

export default function Page() {
    const params = useParams();
    const { t } = useLanguage();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const listResponse = await fetch(`${API_BASE_URL}/api/articles/?slug=${params.slug}`);
                const listData = await listResponse.json();
                const found = listData.results?.[0];
                if (!found) {
                    setArticle(null);
                    return;
                }
                const detailResponse = await fetch(`${API_BASE_URL}/api/articles/${found.id}/`);
                const detailData = await detailResponse.json();
                setArticle(detailData);
            } catch (error) {
                console.error("Error fetching article:", error);
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) {
            fetchArticle();
        }
    }, [params.slug]);

    if (loading) {
        return <div>{t("Loading...")}</div>;
    }

    if (!article) {
        return <div>{t("Article not found")}</div>;
    }

    return (
        <>
            <Navbar />

            <div className="container mt-5 pt-4">
                <Link href="/article" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#767676" }}>
                    <ArrowLeft size={16} />
                    {t("Kembali ke Artikel")}
                </Link>
            </div>

            <BlogDetailsContent article={article} />

            <Footer />
        </>
    );
}