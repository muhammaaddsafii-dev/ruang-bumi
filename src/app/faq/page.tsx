import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import FaqContent from "../../components/Faq/FaqContent";
import ContactUs from "../../components/Faq/ContactUs";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="FAQ"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="FAQ"
      />

      <FaqContent />

      <ContactUs />

      <Footer />
    </>
  );
}
