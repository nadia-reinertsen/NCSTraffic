import type { LatLngTuple } from "leaflet";

type Facility = {
  name: string;
  type: "processing" | "drilling" | "riser" | "quarters" | "wellhead";
  position: LatLngTuple;
  description: string;
  operator: string;
  startYear: number;
};

/**
 * Johan Sverdrup field boundary polygon from Sodir FactMaps GIS API (layer 502).
 * Simplified from 433 to 63 vertices. Coordinates in [lat, lng] format for Leaflet.
 */
export const johanSverdrupPolygon: LatLngTuple[] = [
  [58.658205, 2.625021],
  [58.676336, 2.59152],
  [58.699589, 2.57341],
  [58.723457, 2.558586],
  [58.747691, 2.547199],
  [58.77192, 2.540447],
  [58.79532, 2.524257],
  [58.818482, 2.509083],
  [58.842916, 2.496673],
  [58.863047, 2.477105],
  [58.884739, 2.452384],
  [58.894145, 2.422983],
  [58.911912, 2.419699],
  [58.923363, 2.429371],
  [58.916143, 2.445635],
  [58.92116, 2.473841],
  [58.908127, 2.48984],
  [58.89221, 2.504855],
  [58.878896, 2.522414],
  [58.868759, 2.547665],
  [58.859223, 2.573928],
  [58.850281, 2.595326],
  [58.847879, 2.612226],
  [58.848668, 2.633969],
  [58.84309, 2.656092],
  [58.841324, 2.685748],
  [58.831235, 2.694952],
  [58.827137, 2.699949],
  [58.82074, 2.7067],
  [58.812526, 2.730095],
  [58.799895, 2.746646],
  [58.790448, 2.772784],
  [58.774014, 2.78479],
  [58.764144, 2.78166],
  [58.763105, 2.763215],
  [58.760344, 2.753748],
  [58.757513, 2.732495],
  [58.75541, 2.721689],
  [58.747243, 2.71117],
  [58.742329, 2.700792],
  [58.755354, 2.692127],
  [58.756312, 2.674646],
  [58.754026, 2.667471],
  [58.767626, 2.668809],
  [58.776843, 2.647589],
  [58.790599, 2.634191],
  [58.799483, 2.630863],
  [58.787852, 2.620388],
  [58.779254, 2.632286],
  [58.768957, 2.643534],
  [58.758204, 2.656748],
  [58.754867, 2.633017],
  [58.752384, 2.617961],
  [58.740292, 2.618179],
  [58.732788, 2.599676],
  [58.725388, 2.630349],
  [58.717305, 2.634388],
  [58.703668, 2.64412],
  [58.691301, 2.654848],
  [58.687059, 2.621776],
  [58.682486, 2.593803],
  [58.668436, 2.612754],
  [58.658205, 2.625021],
];

/** Center point (centroid) of the Johan Sverdrup field. */
export const johanSverdrupCenter: LatLngTuple = [58.7902, 2.6167];

/** Johan Sverdrup field metadata. */
export const johanSverdrupField = {
  name: "Johan Sverdrup",
  operator: "Equinor",
  status: "Producing",
  discoveryYear: 2010,
  productionStart: 2019,
  phase2Start: 2022,
  areaKm2: 200,
  waterDepthM: "110–120",
  description:
    "One of the largest oil fields on the Norwegian Continental Shelf. " +
    "Located in the North Sea, west of Stavanger.",
} as const;

/** Facilities on the Johan Sverdrup field.
 * Coordinates sourced from Sodir FactPages (DMS → decimal degrees).
 */
export const johanSverdrupFacilities: Facility[] = [
  {
    name: "Process Platform P1",
    type: "processing",
    position: [58.836628, 2.550278],
    description: "Main processing platform handling oil, gas, and water separation (Phase 1).",
    operator: "Equinor",
    startYear: 2019,
  },
  {
    name: "Process Platform P2",
    type: "processing",
    position: [58.837653, 2.560383],
    description: "Second processing platform added in Phase 2, increasing capacity to 755,000 boe/d.",
    operator: "Equinor",
    startYear: 2022,
  },
  {
    name: "Riser Platform (RP)",
    type: "riser",
    position: [58.836944, 2.556944],
    description: "Receives well streams from subsea templates and routes to processing.",
    operator: "Equinor",
    startYear: 2019,
  },
  {
    name: "Drilling Platform (DP)",
    type: "drilling",
    position: [58.835986, 2.553717],
    description: "Drilling platform for production and injection wells.",
    operator: "Equinor",
    startYear: 2019,
  },
  {
    name: "Living Quarters (LQ)",
    type: "quarters",
    position: [58.835883, 2.547256],
    description: "Accommodation and utility platform for field personnel.",
    operator: "Equinor",
    startYear: 2019,
  },
  {
    name: "Wellhead Platform E",
    type: "wellhead",
    position: [58.86985, 2.519417],
    description: "Wellhead jacket in the northern part of the field.",
    operator: "Equinor",
    startYear: 2019,
  },
  {
    name: "Wellhead Platform F",
    type: "wellhead",
    position: [58.784792, 2.597839],
    description: "Wellhead jacket in the central-southern part of the field.",
    operator: "Equinor",
    startYear: 2019,
  },
  {
    name: "Wellhead Platform G",
    type: "wellhead",
    position: [58.766817, 2.652833],
    description: "Wellhead jacket in the southern part of the field.",
    operator: "Equinor",
    startYear: 2019,
  },
  {
    name: "Wellhead Platform H",
    type: "wellhead",
    position: [58.880853, 2.488458],
    description: "Wellhead jacket in the far northern part of the field (Phase 2).",
    operator: "Equinor",
    startYear: 2022,
  },
  {
    name: "Wellhead Platform K",
    type: "wellhead",
    position: [58.748031, 2.5705],
    description: "Wellhead jacket in the far southern part of the field (Phase 2).",
    operator: "Equinor",
    startYear: 2022,
  },
];
