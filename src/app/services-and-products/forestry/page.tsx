import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import ServiceDetailsContent from "../../../components/ServiceAndProductsDetails/ServiceDetailsContent";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Forestry"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Service Details"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
