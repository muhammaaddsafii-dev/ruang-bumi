import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import Footer from "../../components/Layout/Footer";
import LoginForm from "../../components/Auth/LoginForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Login"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Login"
      />

      <LoginForm />

      <Footer />
    </>
  );
}
