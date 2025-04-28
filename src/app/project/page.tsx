// src/app/project/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import ProjectsFourGrid from "@/components/Project/ProjectsFourGrid";
import Footer from "../../components/Layout/Footer";
import { Project } from "../../../types/project";


export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <ProjectsFourGrid projects={projects} />
      <Footer />
    </>
  );
}