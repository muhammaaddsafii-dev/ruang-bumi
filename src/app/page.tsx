import React from "react";
import Navbar from "../components/Layout/Navbar";
import BannerSlider from "../components/Home/BannerSlider";
import GetStrated from "@/components/Home/GetStrated";
import OurFeaturesTab from "../components/Common/OurFeaturesTab";
import KeyFeatures from "@/components/Home/KeyFeatures";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import Projects from "@/components/Home/Projects";
import PartnerWithTitleTwo from "../components/Common/Partner/PartnerWithTitleTwo";
import LatestNewsTwo from "../components/Common/LatestNewsTwo";
import Faq from "@/components/Home/Faq";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <BannerSlider />

      <GetStrated />

      <OurFeaturesTab />

      <KeyFeatures />

      <FunFactsTwo />

      <Projects />

      <PartnerWithTitleTwo />

      <LatestNewsTwo />

      <Faq />

      <Footer />
    </>
  );
}
