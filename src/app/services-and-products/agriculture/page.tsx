import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import AgricultureDetailsContent from "../../../components/ServiceAndProductsDetails/AgricultureDetailsContent";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Agriculture"
        breadcrumbTextOne="Service"
        breadcrumbUrl="/services-and-products"
        breadcrumbTextTwo="Service Details"
      />

      <AgricultureDetailsContent />

      <Footer />
    </>
  );
}
