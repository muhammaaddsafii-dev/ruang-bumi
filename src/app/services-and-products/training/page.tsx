import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import TrainingDetailsContent from "@/components/ServiceAndProductsDetails/TrainingDetailsContent";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Training"
        breadcrumbTextOne="Service"
        breadcrumbUrl="/services-and-products"
        breadcrumbTextTwo="Service Details"
      />

      <TrainingDetailsContent />

      <Footer />
    </>
  );
}
