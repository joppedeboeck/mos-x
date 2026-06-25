"use client";

import { User, CheckCircle, Home, Handshake } from "lucide-react";

type Stat = { title: string; label: string; icon: React.ReactNode };

const stats: Stat[] = [
  { title: "10 jaar bescherming",    label: "Tot 10 jaar hechtingsgarantie op coating",     icon: <User        size={28} color="#9BCB6C" /> },
  { title: "2 jaar mosvrij",         label: "Anti-mos garantie op behandelde daken",         icon: <CheckCircle size={28} color="#9BCB6C" /> },
  { title: "Vaste prijs vooraf",     label: "Geen verrassingen achteraf",                    icon: <Home        size={28} color="#9BCB6C" /> },
  { title: "Persoonlijk dakadvies",  label: "Soms een reiniging. Soms een coating. Soms niets.", icon: <Handshake size={28} color="#9BCB6C" /> },
];

function UspStat({ title, label, icon }: Stat) {
  return (
    <div className="flex flex-col items-center justify-center text-center" style={{ padding: "0 24px" }}>
      <div style={{ marginBottom: "12px" }}>{icon}</div>
      <p style={{
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        color: "#FFFFFF",
        fontSize: "0.9375rem",
        fontWeight: 700,
        lineHeight: 1.25,
        marginBottom: "6px",
      }}>{title}</p>
      <p style={{
        color: "#9BCB6C",
        fontSize: "13px",
        fontWeight: 500,
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}>{label}</p>
    </div>
  );
}

export default function SiteStatsBar() {
  return (
    <section style={{ background: "transparent", padding: "0 0 48px", position: "relative", zIndex: 5, overflowX: "clip", overflowY: "visible" }}>
      <div style={{
        position: "absolute",
        bottom: "-60px",
        left: "-15%",
        width: "130%",
        height: "120px",
        background: "#F7F8F6",
        borderRadius: "0 0 50% 50% / 0 0 100% 100%",
        zIndex: 1,
        pointerEvents: "none",
      }} />
      <div className="site-wrap">
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            background: "#0B0F0C",
            border: "1px solid #9BCB6C",
            borderRadius: "16px",
            padding: "32px 48px",
            flexWrap: "wrap",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 100% 100%, rgba(155,203,108,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 0",
                minWidth: "120px",
                borderLeft: i > 0 ? "1px solid rgba(155,203,108,0.2)" : "none",
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
