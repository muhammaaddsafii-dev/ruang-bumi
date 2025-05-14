// components/Project/ProjectMap.tsx
'use client';

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
  thumbnail_images: string[];
  latitude: number;
  longitude: number;
}

interface ProjectMapProps {
  projects: Project[];
}

export default function ProjectMap({ projects }: ProjectMapProps) {
  return (
    <MapContainer 
      center={[-2.5489, 118.0149]} // Default to Jakarta
      zoom={4} 
      style={{ height: '100%', width: '80%', textAlign: 'center', margin: '0 auto' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {projects.map(project => (
        <Marker 
          key={project.id} 
          position={[project.latitude, project.longitude]}
        >
          <Popup>
            <div style={{ maxWidth: '200px' }}>
              {project.thumbnail_images && project.thumbnail_images.length > 0 && (
                <img 
                  src={project.thumbnail_images[0]} 
                  alt={project.title}
                  style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                />
              )}
              <h6 style={{ fontSize: '14px' }}>{project.title}</h6>
              <a href={`/project/details/${project.id}`} style={{ color: 'blue' }}>
                View Details
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}