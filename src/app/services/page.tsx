import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import WhyChooseUs from "../../components/Services/WhyChooseUs";
import WhatWeDo from "../../components/Services/WhatWeDo";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Services Style One"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Services Style One"
      />

      <WhyChooseUs />

      <WhatWeDo />

      <Footer />
    </>
  );
}
