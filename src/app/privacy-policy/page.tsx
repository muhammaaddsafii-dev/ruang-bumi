import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import PrivacyPolicyContent from "../../components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Privacy Policy"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Privacy Policy"
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}
