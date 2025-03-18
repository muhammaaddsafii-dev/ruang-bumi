import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Banner from "../../components/SaasAgency/Banner";
import Features from "../../components/SaasAgency/Features";
import WhatWeDo from "../../components/SaasAgency/WhatWeDo";
import WhyChooseUs from "../../components/SaasAgency/WhyChooseUs";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import TestimonialsTwo from "../../components/Common/TestimonialsTwo";
import PricingStyleThree from "../../components/Pricing/PricingStyleThree";
import OurTeamTwo from "../../components/Common/OurTeamTwo";
import Faq from "../../components/SaasAgency/Faq";
import Clients from "../../components/SaasAgency/Clients";
import LetsGetToWork from "../../components/Common/LetsGetToWork";
import LatestNewsTwo from "../../components/Common/LatestNewsTwo";
import SubscribeBoxedTwo from "../../components/Common/SubscribeBoxedTwo";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <Banner />

      <Features />

      <WhatWeDo />

      <WhyChooseUs />

      <FunFactsTwo />

      <TestimonialsTwo />

      <PricingStyleThree />

      <OurTeamTwo />

      <Faq />

      <Clients />

      <LetsGetToWork />

      <LatestNewsTwo />

      <SubscribeBoxedTwo />
      
      <Footer />
    </>
  );
}
