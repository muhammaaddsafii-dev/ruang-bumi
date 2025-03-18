import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import ProjectsFourGrid from "../../../components/Projects/ProjectsFourGrid";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Projects Style Two"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Projects Style Two"
      />

      <ProjectsFourGrid />

      <Footer />
    </>
  );
}
