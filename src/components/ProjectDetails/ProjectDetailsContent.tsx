// src/components/ProjectDetails/ProjectDetailsContent.tsx
"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectDetailsContentProps {
  project: Project;
}

const ProjectDetailsContent: React.FC<ProjectDetailsContentProps> = ({
  project,
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[project.thumbnail_video || "https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="project-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <Image
                  src={project.image_cover || "/images/projects-image/project5.jpg"}
                  alt={project.title}
                  width={600}
                  height={600}
                />

                {project.thumbnail_video && (
                  <div className="btn" onClick={() => setToggler(!toggler)}>
                    <i className="flaticon-play-button"></i>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <Image
                  src={project.thumbnail_image || "/images/projects-image/project6.jpg"}
                  alt={project.title}
                  width={600}
                  height={600}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="projects-details-desc">
                <h3>{project.title}</h3>

                <div dangerouslySetInnerHTML={{ __html: project.content }} />

                <div className="project-details-info">
                  <div className="single-info-box">
                    <h4>Client</h4>
                    <span>{project.client}</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Category</h4>
                    <span>{project.category}</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Date</h4>
                    <span>
                      {new Date(project.date_published).toLocaleDateString()}
                    </span>
                  </div>

                  {/* ... (bagian lainnya tetap sama) */}
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