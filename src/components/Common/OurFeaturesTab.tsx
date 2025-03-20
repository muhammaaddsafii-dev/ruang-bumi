"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const OurFeaturesTab: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100 pt-0 mt-5">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
            <h2>We always try to understand customers expectation</h2>
          </div>

          <Tabs className="features-list-tab">
            {/* tabs Nav */}
            <TabList>
              <Tab>
                <div className="bg-fa7070">
                  <i className="flaticon-research"></i>
                  <span>Satellite Imagery</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-00aeff">
                  <i className="flaticon-analysis"></i>
                  <span>Thematic Map</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-c679e3">
                  <i className="flaticon-marker"></i>
                  <span>Thematic Survey</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-eb6b3d">
                  <i className="flaticon-analytics"></i>
                  <span>GIS Apps</span>
                </div>
              </Tab>

              <Tab>
                <div onClick={(e) => e.preventDefault()}>
                  <i className="flaticon-data"></i>
                  <span>Geo-AI</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-f78acb">
                  <i className="flaticon-shopping-cart"></i>
                  <span>Store</span>
                </div>
              </Tab>
            </TabList>

            {/* TabPanel 01 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <h2>Satellite Imagery</h2>
                    <p>
                      We provide access to high-resolution satellite images, capturing the Earth’s surface in unparalleled detail. These images enable precise mapping, land monitoring, and environmental analysis for a wide range of industries.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Pleiades
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Spot
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Jilin
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Digital Globe
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Kompsat
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Orbita
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image1.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 02 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image2.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <h2>Thematic Map</h2>
                    <p>
                      Specialized maps designed to represent specific aspects of a region, such as land use, population density, or disaster risk assessment.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Land Use and Land Cover Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Soil and Geology Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Climate and Weather Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Risk and Hazard Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Infrastructure and Urban Planning Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Biodiversity and Conservation Map
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 03 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <h2>Thematic Survey</h2>
                    <p>
                      Spatial data-based surveys focusing on specific aspects such as social, economic, and environmental factors to support data-driven decision-making.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Topographic Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Environmental Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Demographic Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Infrastructure Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Agricultural Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Disaster Risk Survey 
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image2.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 04 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image4.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <h2>GIS Apps</h2>
                    <p>
                      Geographic Information System (GIS) applications used for spatial analysis, data visualization, and location-based data management.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Web-based GIS
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Mobile GIS
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> 3D GIS 
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Real-time GIS
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Geospatial Data Management 
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> AI-powered GIS
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 05 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <h2>Geo-AI</h2>
                    <p>
                      The integration of Artificial Intelligence (AI) with geospatial data for automated analysis, trend prediction, and smart mapping.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Automated Image Classification
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Object Detection in Satellite Imagery
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Predictive Mapping
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> AI-driven Land Use Analysis
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Deep Learning for Geospatial Data
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Geospatial Big Data Processing
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image5.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 06*/}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image6.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <h2>Store</h2>
                    <p>
                      An online store offering various mapping products, satellite imagery, and geospatial tools and services.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Satellite Imagery Packages
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> GIS Software and Tools
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Thematic Maps and Reports
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Surveying Equipment
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Customized Geospatial Solutions
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Training and Consultation Services
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        {/* Animation Image */}
        <div className="shape-img7">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={100}
            height={93}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
      </div>
    </>
  );
};

export default OurFeaturesTab;
