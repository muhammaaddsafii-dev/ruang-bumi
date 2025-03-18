import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Banner from "../../components/ITStartup/Banner";
import OurServices from "../../components/ITStartup/OurServices";
import ServicesOverview from "../../components/ITStartup/ServicesOverview";
import SolutionTwo from "../../components/Common/SolutionTwo";
import LatestWorks from "../../components/ITStartup/LatestWorks";
import FunFacts from "../../components/Common/FunFacts";
import TestimonialsTwo from "../../components/Common/TestimonialsTwo";
import PricingStyleTwo from "../../components/Pricing/PricingStyleTwo";
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

      <Banner />

      <OurServices />

      <ServicesOverview />

      <SolutionTwo />

      <LatestWorks />

      <FunFacts />

      <TestimonialsTwo />

      <PricingStyleTwo />

      <OurTeamTwo />

      <LetsGetToWork />

      <PartnerWithTitleTwo />

      <LatestNewsTwo />

      <SubscribeBoxedTwo />

      <Footer />
    </>
  );
}
