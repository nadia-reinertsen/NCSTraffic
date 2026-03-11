import type { LatLngTuple } from "leaflet";

type Facility = {
  name: string;
  type: "processing" | "drilling" | "wellhead" | "template";
  position: LatLngTuple;
  description: string;
  operator: string;
  startYear: number;
};

/**
 * Brage field boundary polygon from Sodir FactMaps GIS API (layer 502).
 * Simplified from 3955 to 39 vertices. Coordinates in [lat, lng] format for Leaflet.
 */
export const bragePolygon: LatLngTuple[] = [
  [60.581893, 3.005025],
  [60.601956, 2.980643],
  [60.623501, 3.001651],
  [60.608070, 3.020105],
  [60.621191, 3.036558],
  [60.590778, 3.037137],
  [60.618566, 3.108574],
  [60.619692, 3.152980],
  [60.612105, 3.132575],
  [60.628009, 3.184631],
  [60.624946, 3.227894],
  [60.586101, 3.117701],
  [60.591263, 3.169727],
  [60.585826, 3.136134],
  [60.579393, 3.140899],
  [60.568520, 3.125188],
  [60.568495, 3.145236],
  [60.555519, 3.102499],
  [60.556850, 3.121652],
  [60.552372, 3.110624],
  [60.546528, 3.116789],
  [60.537124, 3.087169],
  [60.530891, 3.095931],
  [60.519123, 3.085853],
  [60.519173, 3.075053],
  [60.504801, 3.088662],
  [60.491783, 3.083496],
  [60.476130, 3.062821],
  [60.480853, 3.031575],
  [60.476174, 3.041484],
  [60.459969, 3.025547],
  [60.474664, 3.008473],
  [60.486419, 3.032467],
  [60.498091, 3.028675],
  [60.499327, 3.018360],
  [60.510661, 3.028018],
  [60.517833, 3.007001],
  [60.504049, 2.986648],
  [60.581893, 3.005025],
];

/** Center point (centroid) of the Brage field. */
export const brageCenter: LatLngTuple = [60.5511, 3.0761];

/** Brage field metadata. */
export const brageField = {
  name: "Brage",
  operator: "OKEA",
  status: "Producing",
  discoveryYear: 1980,
  productionStart: 1993,
  waterDepthM: "140",
  hcType: "Oil",
  mainSupplyBase: "Mongstad",
  description:
    "Oil field in the northern North Sea, operated by OKEA. " +
    "Produces from several reservoir formations at different depths.",
} as const;

/** Facilities on the Brage field.
 * Coordinates sourced from Sodir FactPages (DMS → decimal degrees).
 */
export const brageFacilities: Facility[] = [
  {
    name: "Brage Platform",
    type: "processing",
    position: [60.542558, 3.046797],
    description:
      "Main production and processing platform with drilling and accommodation facilities.",
    operator: "OKEA",
    startYear: 1993,
  },
  {
    name: "Brage-T (Subsea Template)",
    type: "template",
    position: [60.560633, 2.898056],
    description: "Subsea template tied back to the Brage platform.",
    operator: "OKEA",
    startYear: 1993,
  },
];
