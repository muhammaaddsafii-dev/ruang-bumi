"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Portfolio } from "../../../types/portfolio";
import { formatDate } from "@/lib/formatters";
import ImageLightbox from "../Common/ImageLightbox";
import PortfolioSideBar from "../Portfolio/PortfolioSideBar";

interface PortfolioDetailsContentProps {
  portfolio: Portfolio;
}

const PortfolioDetailsContent: React.FC<PortfolioDetailsContentProps> = ({ portfolio }) => {
  const galleryImages = (portfolio.images || []).filter((image) => image.image_url_signed);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const lightboxImages = galleryImages.map((image) => ({
    src: image.image_url_signed,
    alt: image.alt_text || portfolio.title,
  }));

  return (
    <div className="blog-area blog-ptb-100">
      <div className="container">
        <div className="row">
        <div className="col-lg-8 col-md-12">
        <article className="rb-detail-article">
          {portfolio.category_portfolios_detail && (
            <div className="rb-detail-badges">
              <span className="rb-chip">{portfolio.category_portfolios_detail.name}</span>
            </div>
          )}

          <h1 className="rb-detail-title">{portfolio.title}</h1>

          <div className="rb-detail-meta">
            <span className="rb-detail-meta-secondary">{formatDate(portfolio.project_date)}</span>
            {portfolio.live_url && (
              <a href={portfolio.live_url} target="_blank" rel="noreferrer" className="rb-detail-link">
                <ExternalLink size={14} />
                Live URL
              </a>
            )}
            {portfolio.repo_url && (
              <a href={portfolio.repo_url} target="_blank" rel="noreferrer" className="rb-detail-link">
                <Github size={14} />
                Repository
              </a>
            )}
          </div>

          {portfolio.image_cover_url ? (
            <img src={portfolio.image_cover_url} alt={portfolio.title} className="rb-detail-cover" />
          ) : (
            <div className="rb-detail-cover rb-detail-cover-placeholder" />
          )}

          {portfolio.summary && <p className="rb-detail-summary">{portfolio.summary}</p>}

          <div className="rb-detail-content" dangerouslySetInnerHTML={{ __html: portfolio.description }} />

          {galleryImages.length > 0 && (
            <div className="rb-detail-gallery-section">
              <h3>Galeri</h3>
              <div className="rb-detail-gallery-grid">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setPreviewIndex(index)}
                    className="rb-detail-gallery-thumb"
                  >
                    <img src={image.image_url_signed} alt={image.alt_text || portfolio.title} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </article>
        </div>

        <div className="col-lg-4 col-md-12">
          <PortfolioSideBar />
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
        .rb-detail-article {
          max-width: 100%;
        }
        .rb-detail-badges {
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
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .rb-detail-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 24px;
          margin-bottom: 24px;
        }
        .rb-detail-meta-secondary {
          color: #767676;
          font-size: 14px;
        }
        .rb-detail-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #7bc723;
          text-decoration: underline;
          font-size: 14px;
        }
        .rb-detail-cover {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          margin-bottom: 32px;
          display: block;
        }
        .rb-detail-cover-placeholder {
          background-color: #f3f4f6;
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
        .rb-detail-gallery-section {
          margin-top: 40px;
        }
        .rb-detail-gallery-section h3 {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .rb-detail-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 576px) {
          .rb-detail-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .rb-detail-gallery-thumb {
          border: none;
          padding: 0;
          height: 128px;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
        }
        .rb-detail-gallery-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .rb-detail-gallery-thumb:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default PortfolioDetailsContent;
