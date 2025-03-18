import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import Footer from "../../components/Layout/Footer";
import ResetPassword from '../../components/Auth/ResetPassword';

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Reset password"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Reset password"
      />

      <ResetPassword />

      <Footer />
    </>
  );
}
