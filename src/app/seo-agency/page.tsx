import React from "react";
import Navbar from "../../components/Layout/Navbar";
import BannerSlider from "../../components/SEOAgency/BannerSlider";
import FeaturedServices from "../../components/SEOAgency/FeaturedServices";
import AboutUs from "../../components/SEOAgency/AboutUs";
import FunFacts from "../../components/Common/FunFacts";
import OurServices from "../../components/SEOAgency/OurServices";
import CaseStudies from "../../components/SEOAgency/CaseStudies";
import WhyChooseUs from "../../components/SEOAgency/WhyChooseUs";
import OurFeatures from "../../components/SEOAgency/OurFeatures";
import TestimonialsTwo from "../../components/Common/TestimonialsTwo";
import PricingStyleFive from "../../components/Pricing/PricingStyleFive";
import OurTeamTwo from "../../components/Common/OurTeamTwo";
import LetsGetToWork from "../../components/Common/LetsGetToWork";
import PartnerWithTitleTwo from "../../components/Common/Partner/PartnerWithTitleTwo";
import LatestNewsTwo from "../../components/Common/LatestNewsTwo";
import SubscribeBoxedTwo from "../../components/Common/SubscribeBoxedTwo";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <BannerSlider />

      <FeaturedServices />

      <AboutUs />

      <FunFacts />

      <OurServices />

      <CaseStudies />

      <WhyChooseUs />

      <OurFeatures />

      <TestimonialsTwo />

      <PricingStyleFive />

      <OurTeamTwo />

      <LetsGetToWork />

      <PartnerWithTitleTwo />

      <LatestNewsTwo />

      <SubscribeBoxedTwo />

      <Footer />
    </>
  );
}
