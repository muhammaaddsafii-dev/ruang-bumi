"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import ContactForm from "../../components/Contact/ContactForm";

export default function FeedbackPage() {

  return (
    <>
      <Navbar />

      <div className="mt-5">
        <ContactForm />
      </div>
      
      <Footer />
    </>
  );
}