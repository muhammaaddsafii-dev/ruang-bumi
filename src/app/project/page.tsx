import React from "react";
import Navbar from "../../components/Layout/Navbar";
import ProjectsFourGrid from "@/components/Project/ProjectsFourGrid";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <ProjectsFourGrid />

      <Footer />
    </>
  );
}
