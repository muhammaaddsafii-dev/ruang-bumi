import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import ProjectsTwoGrid from "../../../components/Projects/ProjectsTwoGrid";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Projects Style Four"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Projects Style Four"
      />

      <ProjectsTwoGrid />

      <Footer />
    </>
  );
}
