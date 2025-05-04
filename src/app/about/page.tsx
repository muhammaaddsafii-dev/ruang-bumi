import React from "react";
import Navbar from "../../components/Layout/Navbar";
import AboutArea from "@/components/About/AboutArea";
import Footer from "../../components/Layout/Footer";
import FunFactsTwo from "../../components/Common/FunFactsTwo";

export default function Page() {
  return (
    <>
      <Navbar />

      <AboutArea />

      <FunFactsTwo />

      <Footer />
    </>
  );
}
