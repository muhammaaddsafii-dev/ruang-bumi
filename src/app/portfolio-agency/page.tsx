import React from "react";
import NavbarTwo from "../../components/Layout/NavbarTwo";
import Banner from "../../components/PortfolioAgency/Banner";
import Projects from "../../components/PortfolioAgency/Projects";
import FunFacts from "../../components/Common/FunFacts";
import TestimonialsTwo from "../../components/Common/TestimonialsTwo";
import PricingStyleFive from "../../components/Pricing/PricingStyleFive";
import OurTeamTwo from "../../components/Common/OurTeamTwo";
import LetsGetToWork from "../../components/Common/LetsGetToWork";
import Clients from "../../components/SaasAgency/Clients";
import SubscribeBoxed from "../../components/Common/SubscribeBoxed";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <Banner />

      <Projects />

      <FunFacts />

      <TestimonialsTwo />

      <PricingStyleFive />

      <OurTeamTwo />

      <LetsGetToWork />

      <Clients />

      <SubscribeBoxed />

      <Footer />
    </>
  );
}
