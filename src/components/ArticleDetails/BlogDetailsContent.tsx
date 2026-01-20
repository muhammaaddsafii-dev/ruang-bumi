// src/components/ArticleDetails/BlogDetailsContent.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSideBar from "../../components/Article/BlogSideBar";
import Image from "next/image";
import { Article } from "../../../types/article";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogDetailsContentProps {
  article: Article;
}

interface ArticleImage {
  id: number;
  article_id: number;
  image_url: string;
  created_at: string;
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({ article }) => {
  const [articleImages, setArticleImages] = useState<ArticleImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleImages = async () => {
      try {
        const response = await fetch(`/api/articles/${article.id}/images`);
        const data = await response.json();
        setArticleImages(data.data || []);
      } catch (error) {
        console.error("Error fetching article images:", error);
        setArticleImages([]);
      } finally {
        setLoading(false);
      }
    };

    if (article.id) {
      fetchArticleImages();
    }
  }, [article.id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === articleImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? articleImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">

                  <div className="article-content">

                    <h1>{article.title}</h1>

                    <div className="entry-meta">
                      <ul>
                        <li>
                          <span>Posted On:</span>
                          <Link href="#">
                            {new Date(article.date_published).toLocaleDateString()}
                          </Link>
                        </li>
                        <li>
                          <span>Posted By:</span>
                          <Link href="/blog">{article.author}</Link>
                        </li>
                      </ul>
                    </div>

                    {/* Article Gallery Slider */}
                    {!loading && articleImages.length > 0 && (
                      <div className="article-gallery mt-5">

                        {/* Main Image */}
                        <div className="gallery-slider-container" style={{ position: 'relative' }}>
                          <div
                            className="gallery-main-image"
                            style={{
                              position: 'relative',
                              width: '100%',
                              minHeight: '400px',
                              maxHeight: '600px',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              backgroundColor: '#f3f4f6',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <img
                              src={articleImages[currentImageIndex].image_url}
                              alt={`Gallery image ${currentImageIndex + 1}`}
                              style={{
                                maxWidth: '100%',
                                maxHeight: '600px',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain'
                              }}
                            />
                          </div>

                          {/* Navigation Arrows */}
                          {articleImages.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="gallery-nav-btn gallery-nav-prev"
                                style={{
                                  position: 'absolute',
                                  left: '20px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                  border: 'none',
                                  borderRadius: '50%',
                                  width: '48px',
                                  height: '48px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                  zIndex: 10,
                                  transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#CBFE33';
                                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                }}
                              >
                                <ChevronLeft className="w-6 h-6 text-gray-900" />
                              </button>

                              <button
                                onClick={nextImage}
                                className="gallery-nav-btn gallery-nav-next"
                                style={{
                                  position: 'absolute',
                                  right: '20px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                  border: 'none',
                                  borderRadius: '50%',
                                  width: '48px',
                                  height: '48px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                  zIndex: 10,
                                  transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#CBFE33';
                                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                }}
                              >
                                <ChevronRight className="w-6 h-6 text-gray-900" />
                              </button>
                            </>
                          )}

                          {/* Image Counter */}
                          <div
                            className="gallery-counter"
                            style={{
                              position: 'absolute',
                              bottom: '20px',
                              right: '20px',
                              backgroundColor: 'rgba(0, 0, 0, 0.7)',
                              color: 'white',
                              padding: '8px 16px',
                              borderRadius: '20px',
                              fontSize: '14px',
                              fontWeight: '500'
                            }}
                          >
                            {currentImageIndex + 1} / {articleImages.length}
                          </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        {articleImages.length > 1 && (
                          <div
                            className="gallery-thumbnails mt-3"
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                              gap: '12px'
                            }}
                          >
                            {articleImages.map((image, index) => (
                              <button
                                key={image.id}
                                onClick={() => goToImage(index)}
                                className="gallery-thumbnail"
                                style={{
                                  position: 'relative',
                                  width: '100%',
                                  height: '80px',
                                  borderRadius: '8px',
                                  overflow: 'hidden',
                                  border: currentImageIndex === index
                                    ? '3px solid #CBFE33'
                                    : '3px solid transparent',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  opacity: currentImageIndex === index ? 1 : 0.6
                                }}
                                onMouseEnter={(e) => {
                                  if (currentImageIndex !== index) {
                                    e.currentTarget.style.opacity = '1';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (currentImageIndex !== index) {
                                    e.currentTarget.style.opacity = '0.6';
                                  }
                                }}
                              >
                                <img
                                  src={image.image_url}
                                  alt={`Thumbnail ${index + 1}`}
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                  }}
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div dangerouslySetInnerHTML={{ __html: article.content }} />

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .gallery-main-image {
            min-height: 250px !important;
            max-height: 400px !important;
          }
          
          .gallery-main-image img {
            max-height: 400px !important;
          }
          
          .gallery-nav-btn {
            width: 40px !important;
            height: 40px !important;
          }
          
          .gallery-thumbnails {
            grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)) !important;
          }
          
          .gallery-thumbnail {
            height: 60px !important;
          }
        }
      `}</style>
    </>
  );
};

export default BlogDetailsContent;
