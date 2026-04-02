"use client"; // karena pakai React client component

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { FeatureCollection } from "geojson";

export default function GeometryViewer() {
    const [collections, setCollections] = useState<FeatureCollection | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        // Ambil data dari API collections
        fetch("/api/collections/geojson")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch collections");
                return res.json();
            })
            .then((data) => {
                setCollections(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="dark:bg-gray-900 dark:text-gray-400">Loading collections...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!collections) return null;
    if (error) return <div>Error: {error}</div>;

    const geoJsonStyle = {
        color: "#B9F829",
        weight: 2,
        fillOpacity: 0.4,
    };

    //   const center = [-2.5489, 118.0149];
    // const center = [0.0667, 117.5]; // 0°4′0″ LU, 117°30′0″ BT
    const center = [0.0667, 117.5] as [number, number];


    return (
        <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            {/* <h2>Geometry Viewer</h2> */}
            <MapContainer center={center} zoom={5} style={{ height: "600px", width: "100%" }}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <GeoJSON
                    data={collections}
                    style={geoJsonStyle}
                    onEachFeature={(feature, layer) => {
                        if (feature.properties) {
                            const props = feature.properties;
                            let popupContent = `<strong>${props.name}</strong><br/>
                Tahun: ${props.tahun}<br/>
                Jenis: ${props.jenis}<br/>
                Resolusi: ${props.resolusi}<br/>
                Project: ${props.project}<br/>
                Date: ${props.date}`;
                            layer.bindPopup(popupContent);
                        }
                    }}
                />
            </MapContainer>
        </div>
    );
}
