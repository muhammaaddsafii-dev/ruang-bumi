import React from "react";
import Navbar from "../../components/Layout/Navbar";
import ShopProducts from "../../components/Shop/ShopProducts";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <ShopProducts />

      <Footer />
    </>
  );
}
