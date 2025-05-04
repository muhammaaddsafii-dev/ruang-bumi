import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Services from "@/components/ServicesAndProducts/Services";
import WhyChooseUs from "@/components/ServicesAndProducts/WhyChooseUs";

export default function Page() {
  return (
    <>
      <Navbar />

      <Services />

      <Footer />
    </>
  );
}
