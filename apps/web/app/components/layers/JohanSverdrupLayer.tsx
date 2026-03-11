"use client";

import { Polygon, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-iconmaterial/dist/leaflet.icon-material.js";
import {
  johanSverdrupPolygon,
  johanSverdrupField,
  johanSverdrupFacilities,
} from "@/lib/data/johan-sverdrup";

type FacilityType = "processing" | "drilling" | "riser" | "quarters" | "wellhead";

const iconConfig: Record<FacilityType, { icon: string; markerColor: string; outlineColor: string }> = {
  processing: { icon: "local_gas_station", markerColor: "#c62828", outlineColor: "#b71c1c" },
  drilling: { icon: "hardware", markerColor: "#e65100", outlineColor: "#bf360c" },
  riser: { icon: "swap_vert", markerColor: "#6a1b9a", outlineColor: "#4a148c" },
  quarters: { icon: "apartment", markerColor: "#1565c0", outlineColor: "#0d47a1" },
  wellhead: { icon: "adjust", markerColor: "#2e7d32", outlineColor: "#1b5e20" },
};

function facilityIcon(type: FacilityType) {
  const cfg = iconConfig[type];
  return L.IconMaterial.icon({
    icon: cfg.icon,
    iconColor: "#fff",
    markerColor: cfg.markerColor,
    outlineColor: cfg.outlineColor,
    outlineWidth: 1,
    iconSize: [31, 42],
  });
}

export default function JohanSverdrupLayer() {
  return (
    <>
      <Polygon
        positions={johanSverdrupPolygon}
        pathOptions={{
          color: "#1565c0",
          weight: 2,
          fillColor: "#42a5f5",
          fillOpacity: 0.2,
        }}
      >
        <Popup>
          <div className="text-sm">
            <h3 className="font-bold text-base">{johanSverdrupField.name}</h3>
            <p className="mt-1">
              <strong>Operator:</strong> {johanSverdrupField.operator}
            </p>
            <p>
              <strong>Status:</strong> {johanSverdrupField.status}
            </p>
            <p>
              <strong>Discovery:</strong> {johanSverdrupField.discoveryYear}
            </p>
            <p>
              <strong>Production start:</strong> {johanSverdrupField.productionStart}
            </p>
            <p>
              <strong>Water depth:</strong> {johanSverdrupField.waterDepthM} m
            </p>
            <p className="mt-1 text-gray-600">{johanSverdrupField.description}</p>
          </div>
        </Popup>
      </Polygon>

      {johanSverdrupFacilities.map((facility) => (
        <Marker key={facility.name} position={facility.position} icon={facilityIcon(facility.type)}>
          <Popup>
            <div className="text-sm">
              <h3 className="font-bold text-base">{facility.name}</h3>
              <p className="mt-1">
                <strong>Type:</strong> {facility.type}
              </p>
              <p>
                <strong>Operator:</strong> {facility.operator}
              </p>
              <p>
                <strong>Start year:</strong> {facility.startYear}
              </p>
              <p className="mt-1 text-gray-600">{facility.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
