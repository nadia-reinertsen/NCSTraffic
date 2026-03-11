"use client";

import { Polygon, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-iconmaterial/dist/leaflet.icon-material.js";
import { bragePolygon, brageField, brageFacilities } from "@/lib/data/brage";

type FacilityType = "processing" | "drilling" | "wellhead" | "template";

const iconConfig: Record<FacilityType, { icon: string; markerColor: string; outlineColor: string }> = {
  processing: { icon: "local_gas_station", markerColor: "#c62828", outlineColor: "#b71c1c" },
  drilling: { icon: "hardware", markerColor: "#e65100", outlineColor: "#bf360c" },
  wellhead: { icon: "adjust", markerColor: "#2e7d32", outlineColor: "#1b5e20" },
  template: { icon: "hub", markerColor: "#00695c", outlineColor: "#004d40" },
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

export default function BrageLayer() {
  return (
    <>
      <Polygon
        positions={bragePolygon}
        pathOptions={{
          color: "#ef6c00",
          weight: 2,
          fillColor: "#ffb74d",
          fillOpacity: 0.2,
        }}
      >
        <Popup>
          <div className="text-sm">
            <h3 className="text-base font-bold">{brageField.name}</h3>
            <p className="mt-1">
              <strong>Operator:</strong> {brageField.operator}
            </p>
            <p>
              <strong>Status:</strong> {brageField.status}
            </p>
            <p>
              <strong>Discovery:</strong> {brageField.discoveryYear}
            </p>
            <p>
              <strong>Production start:</strong> {brageField.productionStart}
            </p>
            <p>
              <strong>Water depth:</strong> {brageField.waterDepthM} m
            </p>
            <p className="mt-1 text-gray-600">{brageField.description}</p>
          </div>
        </Popup>
      </Polygon>

      {brageFacilities.map((facility) => (
        <Marker key={facility.name} position={facility.position} icon={facilityIcon(facility.type)}>
          <Popup>
            <div className="text-sm">
              <h3 className="text-base font-bold">{facility.name}</h3>
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
