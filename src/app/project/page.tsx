// src/app/project/page.tsx
"use client";

import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";

const GeometryViewer = dynamic(
  () => import("@/components/IndexProject/GeometryViewer"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Page() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="works-area ptb-100 mt-5">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">{t("PROJECT")}</span>
            <h2>{t("All Projects")}</h2>
            <p style={{ textAlign: "center" }}>
              {t("Explore all project Ruang Bumi to provide high-resolution satellite imagery and AI-driven mapping solutions")}
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <GeometryViewer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}