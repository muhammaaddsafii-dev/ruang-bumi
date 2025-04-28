// src/components/Project/ProjectsFourGrid.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../../../types/project";

interface ProjectsFourGridProps {
  projects: Project[];
}

const ProjectsFourGrid: React.FC<ProjectsFourGridProps> = ({ projects }) => {
  return (
    <>
      <div className="works-area ptb-100 mt-5">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">PROJECT</span>
            <h2>All Projects</h2>
            <p>
              Explore how Ruang Bumi has helped businesses, governments, and
              organizations harness the power of high-resolution satellite
              imagery and AI-driven mapping solutions
            </p>
          </div>

          <div className="row">
            {projects.map((project) => (
              <div className="col-lg-4 col-sm-6 col-xl-3" key={project.id}>
                <div className="work-card">
                  <Image
                    src={project.image_cover || "/images/works/work1.jpg"}
                    alt={project.title}
                    width={510}
                    height={700}
                  />

                  <div className="content">
                    <span>
                      <Link href="#">{project.category}</Link>
                    </span>
                    <h3>
                      <Link href={`/project/details/${project.id}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <Link
                      href={`/project/details/${project.id}`}
                      className="work-btn"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <span className="page-numbers current">1</span>

                <a href="#" className="page-numbers">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsFourGrid;