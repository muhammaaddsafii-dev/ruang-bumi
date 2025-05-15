import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import ForestryDetailsContent from "@/components/ServiceAndProductsDetails/ForestryDetailsContent";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Forestry"
        breadcrumbTextOne="Service"
        breadcrumbUrl="/services-and-products"
        breadcrumbTextTwo="Service Details"
      />

      <ForestryDetailsContent />

      <Footer />
    </>
  );
}
