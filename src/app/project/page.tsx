// src/app/project/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import dynamic from "next/dynamic";

// Dynamically import the Map component with SSR disabled
const MapWithNoSSR = dynamic(
  () => import("../../components/Project/ProjectMap"),
  {
    ssr: false,
    loading: () => <div>Loading map...</div>,
  }
);

const GeometryViewer = dynamic(
  () => import("@/components/IndexProject/GeometryViewer"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

interface Project {
  id: number;
  title: string;
  category: string;
  content: string;
  client: string;
  date_published: string;
  image_cover: string;
  thumbnail_images: string[];
  thumbnail_video: string;
  latitude: number | null;
  longitude: number | null;
}

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

  // Filter projects that have coordinates
  const projectsWithLocation = projects.filter(
    (p): p is Project & { latitude: number; longitude: number } =>
      p.latitude !== null && p.longitude !== null
  );

  return (
    <>
      <Navbar />
      <div className="works-area ptb-100 mt-5">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">PROJECT</span>
            <h2>All Projects</h2>
            <p style={{ textAlign: "center" }}>
              Explore all project Ruang Bumi to provide high-resolution
              satellite imagery and AI-driven mapping solutions
            </p>
          </div>
          {/* <div style={{ height: "500px", width: "100%", marginBottom: "20px" }}>
            <MapWithNoSSR projects={projectsWithLocation} />
          </div> */}

          <div style={{ marginTop: "40px" }}>
            <GeometryViewer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
