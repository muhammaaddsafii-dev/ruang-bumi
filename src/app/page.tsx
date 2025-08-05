"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Layout/Navbar";
import BannerSlider from "../components/Home/BannerSlider";
import GetStrated from "@/components/Home/GetStrated";
import OurFeaturesTab from "../components/Common/OurFeaturesTab";
import KeyFeatures from "@/components/Home/KeyFeatures";
import PartnerWithTitleTwo from "../components/Common/Partner/PartnerWithTitleTwo";
import Faq from "@/components/Home/Faq";
import Footer from "../components/Layout/Footer";
import ContactForm from "@/components/Contact/ContactForm";

export default function Home() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      const timer = setTimeout(() => {
        if (contactFormRef.current) {
          contactFormRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <Navbar />

      <BannerSlider />

      <GetStrated />

      <KeyFeatures />

      <OurFeaturesTab />

      {/* <PartnerWithTitleTwo /> */}

      <Faq />

      <div ref={contactFormRef} id="contact-form">
        <ContactForm />
      </div>

      {/* <PartnerWithTitleTwo /> */}

      <Footer />
    </>
  );
}
