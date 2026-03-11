import type { Flight } from "@/lib/schemas/flightradar";

const FEED_URL = "https://data-cloud.flightradar24.com/zones/fcgi/feed.js";

/**
 * Split the North Sea into smaller sub-regions to avoid FR24's free-tier
 * result-count limit for large bounding boxes.
 * Format per FR24: "north,south,west,east"
 */
const SUB_BOUNDS = [
  "59.25,56,-2,3",
  "59.25,56,3,8",
  "62.5,59.25,-2,3",
  "62.5,59.25,3,8",
];

const HELICOPTER_TYPES = new Set([
  "S92",
  "S76",
  "AS32",
  "AS3B",
  "EC55",
  "EC35",
  "A139",
  "AW39",
  "H160",
  "H175",
  "EC75",
  "B06",
  "B12",
  "B212",
  "B412",
  "R22",
  "R44",
  "R66",
  "EC30",
  "EC45",
  "A109",
  "NH90",
  "S61",
  "H215",
  "H225",
  "AS65",
  "EC20",
  "BK17",
  "LYNX",
  "EH10",
]);

export async function fetchFlights(): Promise<Flight[]> {
  const headers: HeadersInit = {};
  const token = process.env.FLIGHTRADAR24_ACCESS_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const baseParams = {
    faa: "1",
    satellite: "1",
    mlat: "1",
    flarm: "1",
    adsb: "1",
    gnd: "0",
    air: "1",
    vehicles: "0",
    estimated: "0",
    maxage: "14400",
    gliders: "0",
    stats: "0",
  };

  const results = await Promise.allSettled(
    SUB_BOUNDS.map(async (bounds) => {
      const params = new URLSearchParams({ ...baseParams, bounds });
      const response = await fetch(`${FEED_URL}?${params}`, { headers });
      if (!response.ok) throw new Error(`FR24 API failed: ${response.status}`);
      return response.json() as Promise<Record<string, unknown>>;
    }),
  );

  const seen = new Set<string>();
  const flights: Flight[] = [];

  for (const result of results) {
    if (result.status !== "fulfilled") continue;
    for (const [key, value] of Object.entries(result.value)) {
      if (!Array.isArray(value) || value.length < 18) continue;
      if (seen.has(key)) continue;
      seen.add(key);

      const lat = Number(value[1]);
      const lon = Number(value[2]);
      if (lat === 0 && lon === 0) continue;

      const aircraftType = String(value[8] ?? "");

      flights.push({
        id: key,
        icao24: String(value[0] ?? ""),
        latitude: lat,
        longitude: lon,
        heading: Number(value[3]),
        altitude: Number(value[4]),
        groundSpeed: Number(value[5]),
        aircraftType,
        registration: String(value[9] ?? ""),
        origin: String(value[11] ?? ""),
        destination: String(value[12] ?? ""),
        flightNumber: String(value[13] ?? ""),
        callsign: String(value[16] ?? ""),
        verticalSpeed: Number(value[15] ?? 0),
        isHelicopter: HELICOPTER_TYPES.has(aircraftType.toUpperCase()),
      });
    }
  }

  return flights;
}
