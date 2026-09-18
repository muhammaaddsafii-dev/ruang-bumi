import React from "react";
import type { Metadata } from "next";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import MappingDetailsContent from "@/components/ServiceAndProductsDetails/MappingDetailsContent";
import Footer from "../../../components/Layout/Footer";

export const metadata: Metadata = {
  title: "Jasa Pemetaan & Peta Tematik | Ruang Bumi Persada",
  description:
    "Layanan pemetaan (mapping), peta tematik, survei tematik, WebGIS, dan Geo-AI dari Ruang Bumi Persada untuk kebutuhan pertanian, kehutanan, hingga tata ruang kota.",
};

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Mapping"
        breadcrumbTextOne="Service"
        breadcrumbUrl="/services-and-products"
        breadcrumbTextTwo="Service Details"
      />

      <MappingDetailsContent />

      <Footer />
    </>
  );
}
