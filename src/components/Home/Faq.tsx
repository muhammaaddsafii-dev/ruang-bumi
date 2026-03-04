"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Faq: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="faq-area ptb-100 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">{t("FAQ")}</span>
            <h2>{t("Frequently Asked Questions")}</h2>
            <p style={{ textAlign: "center" }}>
              {t("Find quick answers to common questions about Ruang Bumi’s services, features, and how to get started with our geospatial solutions.")}
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img pr-3">
                <Image
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/faq.png"
                  alt="Image"
                  width={600}
                  height={450}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {t("What is Ruang Bumi?")}
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        {t("Ruang Bumi is a collaborative space within the scope of earth science. We facilitate consultation and discussion space related to GIS, Agriculture, Forestry, Education, etc.")}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {t("What services does Ruang Bumi offer?")}
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        {t("We provide GIS data, spatial processing & analysis, thematic maps & survey, WebGIS, GeoAI, Education.")}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {t("Who can benefit from Ruang Bumi’s services?")}
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        {t("Our solutions are available for businesses, governments, researchers, environmental organizations, and industries needing mapping expertise.")}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {t("How can order Hight Resolution Sattelite Imagery at Ruang Bumi?")}
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        {t("You can contact us through our [Ruang Bumi Explorer] page to discuss your specific requirements.")}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
