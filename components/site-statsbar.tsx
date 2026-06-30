"use client";

import { Star, ShieldCheck, Home, MapPin } from "lucide-react";

function GoogleStat() {
  return (
    <div className="usp-stat-inner" style={{ padding: "0 24px" }}>
      <div className="usp-stat-icon" style={{ marginBottom: "12px" }}>
        <Star size={28} color="#9BCB6C" />
      </div>
      <p className="usp-stat-title" style={{
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        color: "#1A1A1A",
        fontSize: "0.9375rem",
        fontWeight: 700,
        lineHeight: 1.25,
        marginBottom: "6px",
      }}>5.0 Google-score</p>
      <div style={{ display: "flex", gap: "2px", marginBottom: "4px" }}>
        {[1,2,3,4,5].map(i => (
          <Star key={i} size={14} color="#9BCB6C" fill="#9BCB6C" />
        ))}
      </div>
      <p className="usp-stat-label" style={{
        color: "#545454",
        fontSize: "13px",
        fontWeight: 500,
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}>Gebaseerd op 15 reviews</p>
    </div>
  );
}

type Stat = { title: string; label: React.ReactNode; icon: React.ReactNode };

const stats: Stat[] = [
  { title: "Tot 10 jaar garantie",                              label: "Duurzame bescherming op onze premium coatings.",  icon: <ShieldCheck size={28} color="#9BCB6C" /> },
  { title: "55+ daken gereinigd",                               label: "Van reiniging tot complete bescherming.",          icon: <Home        size={28} color="#9BCB6C" /> },
  { title: "Actief in de regio's",                              label: <>Antwerpen, Limburg,<br />Vlaams-Brabant</>,       icon: <MapPin      size={28} color="#9BCB6C" /> },
];

function UspStat({ title, label, icon }: Stat) {
  return (
    <div className="usp-stat-inner" style={{ padding: "0 24px" }}>
      <div className="usp-stat-icon" style={{ marginBottom: "12px" }}>
        {icon}
      </div>
      <p className="usp-stat-title" style={{
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        color: "#1A1A1A",
        fontSize: "0.9375rem",
        fontWeight: 700,
        lineHeight: 1.25,
        marginBottom: "6px",
      }}>{title}</p>
      <p className="usp-stat-label" style={{
        color: "#545454",
        fontSize: "13px",
        fontWeight: 500,
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}>{label}</p>
    </div>
  );
}

export default function SiteStatsBar() {
  return (
    <section style={{ background: "transparent", padding: "0 0 16px", position: "relative", zIndex: 5 }}>
      <div className="site-wrap">
        <div
          className="usp-stats-wrap"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            background: "#FFFFFF",
            border: "1px solid #9BCB6C",
            borderRadius: "16px",
            padding: "20px 48px",
            flexWrap: "wrap",
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(155,203,108,0.12)",
          }}
        >
          <div style={{ flex: "1 1 0", minWidth: "120px", position: "relative", zIndex: 1 }}>
            <GoogleStat />
          </div>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 0",
                minWidth: "120px",
                borderLeft: "1px solid #E5E7EB",
                position: "relative",
                zIndex: 1,
              }}
            >
              <UspStat {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
