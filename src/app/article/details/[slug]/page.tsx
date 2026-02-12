// src/app/article/details/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../../components/Layout/Navbar";
import PageHeader from "../../../../components/Common/PageHeader";
import BlogDetailsContent from "../../../../components/ArticleDetails/BlogDetailsContent";
import Footer from "../../../../components/Layout/Footer";
import { Article } from "../../../../../types/article";

export default function Page() {
    const params = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/articles/slug/${params.slug}`);
                const data = await response.json();
                setArticle(data);
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
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <>
            <Navbar />

            <PageHeader
                pageTitle={article.title}
                breadcrumbTextOne="Articles"
                breadcrumbUrl="/article"
                breadcrumbTextTwo="Article Details"
            />

            <BlogDetailsContent article={article} />

            <Footer />
        </>
    );
}