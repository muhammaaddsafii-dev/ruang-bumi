import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import GisAndMappingDetailsContent from "@/components/ServiceAndProductsDetails/GisAndMappingDetailsContent";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Gis and Mapping"
        breadcrumbTextOne="Service"
        breadcrumbUrl="/services-and-products"
        breadcrumbTextTwo="Service Details"
      />

      <GisAndMappingDetailsContent />

      <Footer />
    </>
  );
}
