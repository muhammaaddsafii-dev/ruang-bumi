import React from "react";
import Navbar from "../../components/Layout/Navbar";
import AboutArea from "@/components/About/AboutArea";
import Footer from "../../components/Layout/Footer";
import TeamCard from "@/components/About/TeamCard";
import WhyChooseUs from "../../components/About/WhyChooseUs";

export default function Page() {
  return (
    <>
      <Navbar />

      <AboutArea />

      <WhyChooseUs />

      <TeamCard />

      <Footer />
    </>
  );
}
