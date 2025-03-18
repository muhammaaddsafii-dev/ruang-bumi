"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const ProjectDetailsContent: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="project-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <Image
                  src="/images/projects-image/project5.jpg"
                  alt="projects"
                  width={600}
                  height={600}
                />

                <div className="btn" onClick={() => setToggler(!toggler)}>
                  <i className="flaticon-play-button"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <Image
                  src="/images/projects-image/project6.jpg"
                  alt="projects"
                  width={600}
                  height={600}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="projects-details-desc">
                <h3>Competitor Analysis</h3>

                <p>
                  Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit,
                  sed diam no nu m nibhie eui smod. Facil isis atve eros et
                  accumsan etiu sto odi dignis sim qui blandit praesen lup ta de
                  er. At molestiae appellantur pro. Vis wisi oportere per ic ula
                  ad, ei latine prop riae na, mea cu purto debitis.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Core Development
                  </h4>
                  <p>
                    No fake products and services. The customer is king, their
                    lives and needs are the inspiration. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip commodo
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Define Your Choices
                  </h4>
                  <p>
                    No fake products and services. The customer is king, their
                    lives and needs are the inspiration. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip commodo.
                  </p>
                </div>

                <p>
                  Nost rud no eos, no impedit dissenti as mea, ea vide labor
                  amus neglegentur vix. Ancillae intellegat vix et. Sit causae
                  laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet
                  enda qui, munere oblique theo phrastu ea vix. Ne nec modus
                  civibus modera tius, sit ei lorem doctus. Ne docen di verterem
                  reformidans eos. Cu altera expetenda qui, munere oblique
                  theophr astus ea vix modus civiu mod eratius.
                </p>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy to distinguish. In a free hour, when our power of
                  choice is untrammelled and when nothing prevents our being
                  able to do what we like best, every pleasure is to be welcomed
                  and every.
                </p>

                <div className="project-details-info">
                  <div className="single-info-box">
                    <h4>Client</h4>
                    <span>James Anderson</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Category</h4>
                    <span>Network, Marketing</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Date</h4>
                    <span>February 28, 2020</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Share</h4>
                    <ul className="social">
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="single-info-box">
                    <a href="#" className="default-btn" target="_blank">
                      Live Preview <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
