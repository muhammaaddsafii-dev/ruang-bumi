"use client";

import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ images, index, onClose, onIndexChange }) => {
  if (index === null) return null;

  const showPrev = () => onIndexChange((index - 1 + images.length) % images.length);
  const showNext = () => onIndexChange((index + 1) % images.length);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{ position: "absolute", top: "20px", right: "20px", background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}
      >
        <X size={32} />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); showPrev(); }}
          aria-label="Previous"
          style={{ position: "absolute", left: "20px", background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}
        >
          <ChevronLeft size={40} />
        </button>
      )}

      <img
        src={images[index].src}
        alt={images[index].alt}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "90vw", maxHeight: "75vh", objectFit: "contain", borderRadius: "8px" }}
      />

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); showNext(); }}
          aria-label="Next"
          style={{ position: "absolute", right: "20px", background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}
        >
          <ChevronRight size={40} />
        </button>
      )}

      {images.length > 1 && (
        <div style={{ marginTop: "12px", color: "rgba(255,255,255,0.9)", fontSize: "14px" }}>
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
