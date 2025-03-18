import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import ProjectsThreeGrid from "../../../components/Projects/ProjectsThreeGrid";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Projects Style Three"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Projects Style Three"
      />

      <ProjectsThreeGrid />

      <Footer />
    </>
  );
}
