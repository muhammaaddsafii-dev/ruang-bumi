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

const Faq: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ textAlign: 'center' }}>
              Find quick answers to common questions about Ruang Bumi’s
              services, features, and how to get started with our geospatial
              solutions.
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
                        What is Ruang Bumi?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Ruang Bumi is a collaborative space within the scope of earth science. We facilitate consultation and discussion space related to GIS, Agriculture, Forestry, Training, etc.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What services does Ruang Bumi offer?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        We provide GIS data, spatial processing & analysis, thematic maps & survey, WebGIS, GeoAI, Training.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Who can benefit from Ruang Bumi’s services?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Our solutions are available for businesses, governments,
                        researchers, environmental organizations, and industries
                        needing mapping expertise.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can order  Hight Resolution Sattelite Imagery at Ruang Bumi?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        You can contact us through our [Ruang Bumi Explorer] page to
                        discuss your specific requirements.
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
