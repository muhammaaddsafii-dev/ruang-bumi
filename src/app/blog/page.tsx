import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import Footer from "../../components/Layout/Footer";
import BlogCard from "../../components/Blog/BlogCard";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Blog Grid"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Blog Grid"
      />

      <BlogCard />

      <Footer />
    </>
  );
}
