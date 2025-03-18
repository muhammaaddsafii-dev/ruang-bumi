import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Banner from "../../components/DigitalAgency/Banner";
import FeaturedServices from "../../components/DigitalAgency/FeaturedServices";
import PartnerSlider from "../../components/Common/Partner/PartnerSlider";
import OurServices from "../../components/DigitalAgency/OurServices";
import OurFeaturesTab from "../../components/Common/OurFeaturesTab";
import FunFacts from "../../components/Common/FunFacts";
import ProjectGallerySlider from "../../components/Common/ProjectGallerySlider";
import OurTeam from "../../components/Common/OurTeam";
import Solution from "../../components/Common/Solution";
import Testimonials from "../../components/Common/Testimonials";
import Pricing from "../../components/Common/Pricing";
import SubscribeFluid from "../../components/Common/SubscribeFluid";
import LatestNews from "../../components/Common/LatestNews";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <Banner />

      <FeaturedServices />

      <PartnerSlider />

      <OurServices />

      <OurFeaturesTab />

      <FunFacts />

      <ProjectGallerySlider />

      <OurTeam />

      <Solution />

      <Testimonials />

      <Pricing />

      <SubscribeFluid />

      <LatestNews />

      <Footer />
    </>
  );
}
