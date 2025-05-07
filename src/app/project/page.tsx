"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import ProjectsFourGrid from "@/components/Project/ProjectsFourGrid";
import Footer from "../../components/Layout/Footer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
    p => p.latitude !== null && p.longitude !== null
  );

  return (
    <>
      <Navbar />
      {/* <ProjectsFourGrid projects={projects} /> */}
      {/* Projects Map Section */}
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
          <div style={{ height: '500px', width: '100%', marginBottom: '40px' }}>
              <MapContainer 
                center={[-2.5489, 118.0149]} // Default to Jakarta
                zoom={4} 
                style={{ height: '100%', width: '80%', textAlign: 'center', margin: '0 auto' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {projectsWithLocation.map(project => (
                  <Marker 
                    key={project.id} 
                    position={[project.latitude!, project.longitude!]}
                  >
                    <Popup>
                      <div style={{ maxWidth: '200px' }}>
                        <h3>{project.title}</h3>
                        {project.thumbnail_images && project.thumbnail_images.length > 0 && (
                          <img 
                            src={project.thumbnail_images[0]} 
                            alt={project.title}
                            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                          />
                        )}
                        <p>{project.category}</p>
                        <a href={`/project/details/${project.id}`} style={{ color: 'blue' }}>
                          View Details
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}