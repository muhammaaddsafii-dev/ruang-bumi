import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import PricingCard from "../../components/Pricing/PricingCard";
import Footer from "../../components/Layout/Footer";
import PricingStyleTwo from "../../components/Pricing/PricingStyleTwo";
import PricingStyleThree from "../../components/Pricing/PricingStyleThree";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Pricing"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Pricing"
      />

      <PricingCard />

      <PricingStyleTwo />

      <hr />

      <PricingStyleThree />

      <Footer />
    </>
  );
}
