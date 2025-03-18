import React from "react";
import NavbarFour from "../../components/Layout/NavbarFour";
import MainBanner from "../../components/CyberSecurity/MainBanner";
import TopServices from "../../components/CyberSecurity/TopServices";
import Features from "../../components/CyberSecurity/Features";
import Partners from "../../components/CyberSecurity/Partners";
import AboutContent from "../../components/CyberSecurity/AboutContent";
import WhyChooseUs from "../../components/CyberSecurity/WhyChooseUs";
import Services from "../../components/CyberSecurity/Services";
import FunFacts from "../../components/CyberSecurity/FunFacts";
import ProvideAdvancedSecurity from "../../components/CyberSecurity/ProvideAdvancedSecurity";
import Overview from "../../components/CyberSecurity/Overview";
import Feedbacks from "../../components/CyberSecurity/Feedbacks";
import LatestNews from "../../components/CyberSecurity/LatestNews";
import NewsletterForm from "../../components/CyberSecurity/NewsletterForm";
import FooterThree from "../../components/Layout/FooterThree";

export default function Page() {
  return (
    <>
      <NavbarFour />

      <MainBanner />

      <div className="background-with-black-color">
        <TopServices />

        <Features />

        <Partners />

        <AboutContent />

        <WhyChooseUs />

        <Services />

        <FunFacts />

        <ProvideAdvancedSecurity />

        <Overview />

        <Feedbacks />

        <LatestNews />
      </div>

      <NewsletterForm />

      <FooterThree />
    </>
  );
}
