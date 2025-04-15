// src/app/project/details/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import ProjectDetailsContent from "../../../components/ProjectDetails/ProjectDetailsContent";
import Footer from "../../../components/Layout/Footer";
import { Project } from "@/types/project";

export default function Page() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle={project.title}
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Project Details"
      />

      <ProjectDetailsContent project={project} />

      <Footer />
    </>
  );
}