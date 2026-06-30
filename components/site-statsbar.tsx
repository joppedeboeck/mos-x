"use client";

import { User, CheckCircle, Home, Handshake } from "lucide-react";

type Stat = { title: string; label: string; icon: React.ReactNode };

const stats: Stat[] = [
  { title: "10 jaar garantie",    label: "Tot 10 jaar hechtingsgarantie op coating.",              icon: <User        size={28} color="#9BCB6C" /> },
  { title: "2 jaar mosvrij",      label: "Anti-mos garantie op behandelde daken.",                 icon: <CheckCircle size={28} color="#9BCB6C" /> },
  { title: "Vaste prijs vooraf",  label: "Geen verrassingen achteraf.",                            icon: <Home        size={28} color="#9BCB6C" /> },
  { title: "Eerlijk dakadvies",   label: "We adviseren alleen wat jouw dak écht nodig heeft.",     icon: <Handshake   size={28} color="#9BCB6C" /> },
];

function UspStat({ title, label, icon }: Stat) {
  return (
    <div className="usp-stat-inner" style={{ padding: "0 24px" }}>
      <div className="usp-stat-top">
        <div className="usp-stat-icon" style={{ marginBottom: "12px", flexShrink: 0 }}>
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
      </div>
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
            padding: "32px 48px",
            flexWrap: "wrap",
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(155,203,108,0.12)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 0",
                minWidth: "120px",
                borderLeft: i > 0 ? "1px solid #E5E7EB" : "none",
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
