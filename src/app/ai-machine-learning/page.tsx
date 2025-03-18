import React from "react";
import NavbarTwo from "../../components/Layout/NavbarTwo";
import BannerSlider from "../../components/AIMachineLearning/BannerSlider";
import FeaturedSolutions from "../../components/AIMachineLearning/FeaturedSolutions";
import AboutUs from "../../components/AIMachineLearning/AboutUs";
import Services from "../../components/AIMachineLearning/Services";
import Projects from "../../components/AIMachineLearning/Projects";
import FunFacts from "../../components/Common/FunFacts";
import TestimonialsTwo from "../../components/Common/TestimonialsTwo";
import PricingStyleFour from "../../components/Pricing/PricingStyleFour";
import OurTeamTwo from "../../components/Common/OurTeamTwo";
import Faq from "../../components/SaasAgency/Faq";
import Clients from "../../components/SaasAgency/Clients";
import RecentStory from "../../components/AIMachineLearning/RecentStory";
import FreeTrial from "../../components/AIMachineLearning/FreeTrial";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <BannerSlider />

      <FeaturedSolutions />

      <AboutUs />

      <Services />

      <Projects />

      <FunFacts />

      <TestimonialsTwo />

      <PricingStyleFour />

      <OurTeamTwo />

      <Faq />

      <Clients />

      <FreeTrial />

      <RecentStory />

      <Footer />
    </>
  );
}
