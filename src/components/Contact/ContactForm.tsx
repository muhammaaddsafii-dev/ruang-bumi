"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage(t("Message sent successfully!"));
        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage(t("Failed to send message. Please try again."));
      }
    } catch (error) {
      setSubmitMessage(t("Something went wrong. Please try again later."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">{t("Feedback")}</span>
            <h4>{t("Drop us Message for any Feedback")}</h4>
            <p className="text-center">
              {t("We value your feedback. Please share your thoughts, suggestions, or any issues you encountered to help us improve your experience.")}
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <div className="contact-image">
                <Image
                  src="/images/feedback.png"
                  alt="image"
                  width={310}
                  height={350}
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder={t("Name")}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder={t("Email")}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          className="form-control"
                          placeholder={t("Phone")}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control"
                          placeholder={t("Subject")}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          cols={30}
                          rows={6}
                          className="form-control"
                          placeholder={t("Your Message")}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 text-center">
                      {/* <button type="submit" className="default-btn">
                        Send Message <span></span>
                      </button> */}
                      <button className="default-btn" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? t("Sending...") : t("Send Message")}
                      </button>
                    </div>
                  </div>
                </form>

                {submitMessage && (
                  <p style={{ color: submitMessage.includes("success") ? "green" : "red" }}>
                    {submitMessage}
                  </p>
                )}



              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
