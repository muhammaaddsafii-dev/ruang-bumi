// src/components/ArticleDetails/BlogDetailsContent.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Article, ArticleImage } from "../../../types/article";
import { toInitials, formatDate } from "@/lib/formatters";
import ImageLightbox from "../Common/ImageLightbox";
import DetailCoverGallerySlider from "../Common/DetailCoverGallerySlider";
import BlogSideBar from "../Article/BlogSideBar";

interface BlogDetailsContentProps {
  article: Article;
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({ article }) => {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const galleryImages: ArticleImage[] = [...(article.images || [])]
    .filter((image) => image.file_url)
    .sort((a, b) => a.display_order - b.display_order);

  const lightboxImages = galleryImages.map((image) => ({
    src: image.file_url,
    alt: image.alt_text || article.title,
  }));

  return (
    <div className="blog-area blog-ptb-100 rb-detail-page">
      <div className="container">
        <div className="row">
        <div className="col-lg-8 col-md-12">
        <article className="rb-detail-article">
          <Link href="/article" className="rb-detail-back">
            <ArrowLeft size={16} />
            Kembali ke Artikel
          </Link>

          {article.category_articles_detail && (
            <div className="rb-detail-badges">
              <span className="rb-chip">{article.category_articles_detail.name}</span>
            </div>
          )}

          <h1 className="rb-detail-title">{article.title}</h1>

          <div className="rb-detail-meta">
            <div className="rb-avatar">{toInitials(article.author || "?")}</div>
            <div>
              <p className="rb-detail-meta-primary">{article.author}</p>
              <p className="rb-detail-meta-secondary">{formatDate(article.date_published)}</p>
            </div>
          </div>

          <DetailCoverGallerySlider images={lightboxImages} onImageClick={setPreviewIndex} />

          {article.description && <p className="rb-detail-summary">{article.description}</p>}

          <div className="rb-detail-content" dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
        </div>

        <div className="col-lg-4 col-md-12">
          <BlogSideBar />
        </div>
        </div>
      </div>

      <ImageLightbox
        images={lightboxImages}
        index={previewIndex}
        onClose={() => setPreviewIndex(null)}
        onIndexChange={setPreviewIndex}
      />

      <style jsx>{`
        .rb-detail-page {
          padding-top: 140px;
        }
        .rb-detail-article {
          max-width: 100%;
        }
        .rb-detail-back {
          display: flex;
          width: fit-content;
          align-items: center;
          gap: 8px;
          color: #4c8a11;
          font-weight: 600;
          font-size: 14px;
          padding-bottom: 24px;
          margin-bottom: 12px;
        }
        .rb-detail-back:hover {
          color: #7bc723;
        }
        .rb-detail-badges {
          margin-top: 12px;
          margin-bottom: 16px;
        }
        .rb-chip {
          display: inline-block;
          background-color: #7bc723;
          color: #fff;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 600;
        }
        .rb-detail-title {
          font-size: 32px;
          font-weight: 700;
          margin-top: 16px;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .rb-detail-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 24px;
          margin-bottom: 24px;
        }
        .rb-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #eef7e2;
          color: #4c8a11;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }
        .rb-detail-meta-primary {
          margin: 0;
          font-weight: 600;
        }
        .rb-detail-meta-secondary {
          margin: 0;
          color: #767676;
          font-size: 14px;
        }
        .rb-detail-cover-placeholder {
          width: 100%;
          height: 320px;
          border-radius: 16px;
          background-color: #f3f4f6;
          margin-bottom: 32px;
        }
        .rb-detail-summary {
          font-size: 18px;
          color: #555;
          margin-bottom: 32px;
        }
        .rb-detail-content {
          font-size: 17px;
          line-height: 1.8;
        }
        .rb-detail-content :global(a) {
          color: #7bc723;
          text-decoration: underline;
        }
        .rb-detail-content :global(blockquote) {
          border-left: 3px solid #ddd;
          padding-left: 16px;
          font-style: italic;
        }
        .rb-detail-content :global(h2) {
          margin: 24px 0 12px;
          font-size: 26px;
          font-weight: 600;
        }
        .rb-detail-content :global(h3) {
          margin: 20px 0 8px;
          font-size: 21px;
          font-weight: 600;
        }
        .rb-detail-content :global(p) {
          margin: 12px 0;
        }
        .rb-detail-content :global(ul) {
          list-style: disc;
          padding-left: 24px;
        }
        .rb-detail-content :global(ol) {
          list-style: decimal;
          padding-left: 24px;
        }
      `}</style>
    </div>
  );
};

export default BlogDetailsContent;
