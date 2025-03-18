import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import BlogCard from "../../../components/BlogTwo/BlogCard";
import BlogSideBar from "../../../components/Blog/BlogSideBar";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Blog With Right Sidebar"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Blog With Right Sidebar"
      />

      {/* Blog Area */}
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <BlogCard />
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      <Footer />
    </>
  );
}
