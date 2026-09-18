import React from "react";
import type { Metadata } from "next";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import GisAppsGeoAiDetailsContent from "@/components/ServiceAndProductsDetails/GisAppsGeoAiDetailsContent";
import Footer from "../../../components/Layout/Footer";

export const metadata: Metadata = {
  title: "Aplikasi SIG & Geo-AI | Ruang Bumi Persada",
  description:
    "Layanan aplikasi SIG (WebGIS, manajemen data geospasial, analis SIG) dan Geo-AI (penghitungan pohon sawit, deteksi & klasifikasi objek) dari Ruang Bumi Persada.",
};

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="GIS Apps & GeoAI"
        breadcrumbTextOne="Service"
        breadcrumbUrl="/services-and-products"
        breadcrumbTextTwo="Service Details"
      />

      <GisAppsGeoAiDetailsContent />

      <Footer />
    </>
  );
}
