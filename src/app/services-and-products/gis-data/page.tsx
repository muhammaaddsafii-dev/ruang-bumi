import React from "react";
import type { Metadata } from "next";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import GisDataDetailsContent from "@/components/ServiceAndProductsDetails/GisDataDetailsContent";
import Footer from "../../../components/Layout/Footer";

export const metadata: Metadata = {
  title: "Jual Beli Citra Satelit Resolusi Tinggi | Ruang Bumi Persada",
  description:
    "Jual beli citra satelit resolusi tinggi untuk pemetaan, pertanian, kehutanan, dan tata ruang kota. Konsultasi gratis dan pemesanan citra satelit online bersama Ruang Bumi Persada.",
};

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="GIS Data"
        breadcrumbTextOne="Service"
        breadcrumbUrl="/services-and-products"
        breadcrumbTextTwo="Service Details"
      />

      <GisDataDetailsContent />

      <Footer />
    </>
  );
}
