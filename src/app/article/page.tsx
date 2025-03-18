import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import BlogCard from "../../components/Blog/BlogCard";

export default function Page() {
  return (
    <>
      <Navbar />

      <BlogCard />

      <Footer />
    </>
  );
}
