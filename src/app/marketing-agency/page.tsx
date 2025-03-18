import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Banner from "../../components/MarketingAgency/Banner";
import FeaturedServices from "../../components/MarketingAgency/FeaturedServices";
import About from "../../components/MarketingAgency/About";
import Services from "../../components/MarketingAgency/Services";
import WhyChooseUs from "../../components/MarketingAgency/WhyChooseUs";
import FunFacts from "../../components/Common/FunFacts";
import ProjectGallerySlider from "../../components/Common/ProjectGallerySlider";
import OurFeaturesTab from "../../components/Common/OurFeaturesTab";
import OurTeam from "../../components/Common/OurTeam";
import Solution from "../../components/Common/Solution";
import Testimonials from "../../components/Common/Testimonials";
import Pricing from "../../components/Common/Pricing";
import PartnerWithTitle from "../../components/Common/Partner/PartnerWithTitle";
import LatestNews from "../../components/Common/LatestNews";
import SubscribeBoxed from "../../components/Common/SubscribeBoxed";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <Banner />

      <FeaturedServices />

      <About />

      <Services />

      <WhyChooseUs />

      <FunFacts />

      <ProjectGallerySlider />

      <OurFeaturesTab />

      <OurTeam />

      <Solution />

      <Testimonials />

      <Pricing />

      <PartnerWithTitle />

      <LatestNews />

      <div className="ptb-100">
        <SubscribeBoxed />
      </div>

      <Footer />
    </>
  );
}
