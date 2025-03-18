import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import Footer from "../../components/Layout/Footer";
import SignupForm from "../../components/Auth/SignupForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Signup"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Signup"
      />

      <SignupForm />

      <Footer />
    </>
  );
}
