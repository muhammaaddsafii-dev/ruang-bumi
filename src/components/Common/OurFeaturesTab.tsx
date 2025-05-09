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
            <h2>One of Our Main & Best Services</h2>
          </div>

          <Tabs className="features-list-tab">
            {/* tabs Nav */}
            <TabList>
              <Tab>
                <div className="bg-fa7070">
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Gis+Data.png"
                      alt="image"
                      width={70}
                      height={70}
                    />
                  </div>
                  <span>GIS Data</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-00aeff">
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Tematic+Map.png"
                      alt="image"
                      width={70}
                      height={70}
                    />
                  </div>
                  <span>Thematic Map</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-c679e3">
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Tematic+Survei.png"
                      alt="image"
                      width={70}
                      height={70}
                    />
                  </div>
                  <span>Thematic Survey</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-eb6b3d">
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Gis+App.png"
                      alt="image"
                      width={70}
                      height={70}
                    />
                  </div>
                  <span>GIS Apps</span>
                </div>
              </Tab>

              <Tab>
                <div onClick={(e) => e.preventDefault()}>
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Geo+AI.png"
                      alt="image"
                      width={70}
                      height={70}
                    />
                  </div>
                  <span>Geo-AI</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-f78acb">
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Training.png"
                      alt="image"
                      width={70}
                      height={70}
                    />
                  </div>
                  <span>Training</span>
                </div>
              </Tab>
            </TabList>

            {/* TabPanel 01 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <h2>GIS Data</h2>
                    <p>
                      We provide access to high-resolution satellite imagery,
                      Arial Photography, and Lidar to capturing the Earth’s
                      surface in unparalleled detail. These images enable
                      precise mapping, land monitoring, and environmental
                      analysis for a wide range of industries.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> High-Resolution
                          Satellite Imagery
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Arial Photography
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Lidar
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Sattelite Dataset.gif"
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
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Peta1.png"
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
                      Specialized maps designed to represent specific aspects of
                      a region, such as land use, population density, or
                      disaster risk assessment.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Land Use and Land
                          Cover Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Topography Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Digital Village Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Soil and Land
                          Sustainability Map
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Infrastructure and
                          Urban Planning Map (RTRW/RDTR)
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Many Other Maps.
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
                      Spatial data-based surveys focusing on specific aspects
                      such as social, economic, and environmental factors to
                      support data-driven decision-making.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i>Topography Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Demographic and
                          Population Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Environmental Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Land Boundaries
                          Survey
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Agricultural Survey
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/survei.png"
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
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/WebGIS.gif"
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
                      Geographic Information System (GIS) applications used for
                      spatial analysis, data visualization, and location-based
                      data management.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Web GIS
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Geospatial Data
                          Management
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> GIS Analyst
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
                      The integration of Artificial Intelligence (AI) with
                      geospatial data for automated analysis, trend prediction,
                      and smart mapping.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Tree Palm Counting
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Object Detection and
                          Classification
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/GeoAI.gif"
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
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Store.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <h2>Training</h2>
                    <p>We provide online or offline training services.</p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> GIS
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Programing
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Geo-AI
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

        <div className="shape-img4">
          <Image
            src="/images/shape/shape15.png"
            alt="image"
            width={80}
            height={75}
          />
        </div>
      </div>
    </>
  );
};

export default OurFeaturesTab;
