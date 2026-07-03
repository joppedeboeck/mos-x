"use client";
import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GISCO_URL =
  "https://gisco-services.ec.europa.eu/distribution/v2/nuts/geojson/NUTS_RG_10M_2021_4326_LEVL_2.geojson";

const WORK_AREA = new Set(["BE21", "BE22", "BE23", "BE24"]);

const MARKERS: { code: string; name: string; coords: [number, number] }[] = [
  { code: "BE21", name: "Antwerpen",        coords: [4.47,  51.22] },
  { code: "BE22", name: "Limburg",          coords: [5.42,  50.97] },
  { code: "BE23", name: "Oost-Vlaanderen",  coords: [3.72,  51.04] },
  { code: "BE24", name: "Vlaams-Brabant",   coords: [4.58,  50.83] },
];

export default function WerkgebiedMap() {
  const [geo, setGeo] = useState<any>(null);

  useEffect(() => {
    fetch(GISCO_URL)
      .then((r) => r.json())
      .then((data) => {
        setGeo({
          ...data,
          features: data.features.filter(
            (f: any) => f.properties.CNTR_CODE === "BE"
          ),
        });
      });
  }, []);

  return (
    <div style={{ width: "100%", background: "#F7F8F6", borderRadius: "12px", overflow: "hidden" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [4.6, 51.05], scale: 16500 }}
        style={{ width: "100%", height: "320px", display: "block" }}
      >
        {geo && (
          <Geographies geography={geo}>
            {({ geographies }) =>
              geographies.map((g) => {
                const active = WORK_AREA.has(g.properties.NUTS_ID);
                return (
                  <Geography
                    key={g.rsmKey}
                    geography={g}
                    fill={active ? "rgba(155,203,108,0.22)" : "#E8EAE5"}
                    stroke={active ? "#9BCB6C" : "#C8CCC4"}
                    strokeWidth={active ? 1.2 : 0.6}
                    style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" } }}
                  />
                );
              })
            }
          </Geographies>
        )}

        {geo &&
          MARKERS.map(({ code, name, coords }) => (
            <Marker key={code} coordinates={coords}>
              {/* Pin */}
              <g transform="translate(-9,-26)">
                <path
                  d="M9,0 C4.03,0 0,4.03 0,9 C0,15.75 9,24 9,24 C9,24 18,15.75 18,9 C18,4.03 13.97,0 9,0 Z"
                  fill="#1A1A1A"
                />
                <circle cx="9" cy="9" r="4" fill="white" />
              </g>
              {/* Label */}
              <text
                y={10}
                textAnchor="middle"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  fill: "#1A1A1A",
                  paintOrder: "stroke",
                  stroke: "rgba(247,248,246,0.96)",
                  strokeWidth: "4px",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
      </ComposableMap>
    </div>
  );
}
