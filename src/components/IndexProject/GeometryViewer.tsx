"use client"; // karena pakai React client component

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
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

    if (loading) return <div>Loading collections...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!collections) return null;
    if (error) return <div>Error: {error}</div>;

    const geoJsonStyle = {
        color: "#4a90e2",
        weight: 2,
        fillOpacity: 0.4,
    };

    //   const center = [-2.5489, 118.0149];
    // const center = [0.0667, 117.5]; // 0°4′0″ LU, 117°30′0″ BT
    const center = [0.0667, 117.5] as [number, number];


    return (
        <div>
            {/* <h2>Geometry Viewer</h2> */}
            <MapContainer center={center} zoom={5} style={{ height: "600px", width: "100%" }}>
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
