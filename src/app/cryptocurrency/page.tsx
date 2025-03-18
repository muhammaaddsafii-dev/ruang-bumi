import React from "react";
import NavbarThree from "../../components/Layout/NavbarThree";
import Tradevalue from "../../components/Cryptocurrency/TradeValue";
import MainBanner from "../../components/Cryptocurrency/MainBanner";
import Stats from "../../components/Cryptocurrency/Stats";
import AboutOurCompany from "../../components/Cryptocurrency/AboutOurCompany";
import EarningPlatform from "../../components/Cryptocurrency/EarningPlatform";
import GetStrated from "../../components/Cryptocurrency/GetStrated";
import KeyFeatures from "../../components/Cryptocurrency/KeyFeatures";
import StartMiningCrypto from "../../components/Cryptocurrency/StartMiningCrypto";
import StartTradingAndEarning from "../../components/Cryptocurrency/StartTradingAndEarning";
import WhyChooseUs from "../../components/Cryptocurrency/WhyChooseUs";
import Feedbacks from "../../components/Cryptocurrency/Feedbacks";
import MobileApp from "../../components/Cryptocurrency/MobileApp";
import LatestNews from "../../components/Cryptocurrency/LatestNews";
import NewsletterForm from "../../components/Cryptocurrency/NewsletterForm";
import FooterTwo from "../../components/Layout/FooterTwo";

export default function Page() {
  return (
    <>
      <Tradevalue />

      <NavbarThree />

      <MainBanner />

      <Stats />

      <AboutOurCompany />

      <EarningPlatform />

      <GetStrated />

      <KeyFeatures />

      <StartMiningCrypto />

      <StartTradingAndEarning />

      <WhyChooseUs />

      <Feedbacks />

      <MobileApp />

      <LatestNews />

      <NewsletterForm />

      <FooterTwo />
    </>
  );
}
