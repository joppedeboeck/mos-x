"use client";

import { useState } from "react";
import { Calculator, MapPin, FileText, Home, ShieldCheck } from "lucide-react";

const steps = [
  {
    Icon: Calculator,
    step: "STAP 01",
    title: "Richtprijs aanvragen",
    desc: "Vul de calculator in en ontvang direct een vrijblijvende richtprijs op maat.",
  },
  {
    Icon: MapPin,
    step: "STAP 02",
    title: "Yannick komt langs",
    desc: "Yannick bekijkt de staat van je dak en adviseert wat nodig is. Soms een reiniging. Soms een coating. Soms niets.",
  },
  {
    Icon: FileText,
    step: "STAP 03",
    title: "Offerte op maat",
    desc: "Je weet exact wat er gebeurt, wat het kost en waarom.",
  },
  {
    Icon: Home,
    step: "STAP 04",
    title: "Uitvoering",
    desc: "Yannick voert het werk persoonlijk uit, netjes en efficiënt.",
  },
  {
    Icon: ShieldCheck,
    step: "STAP 05",
    title: "Nazorg & garantie",
    desc: "Na het werk ontvang je garantie en blijft Yannick bereikbaar voor vragen.",
  },
];

function StepCard({ Icon, step, title, desc, showButton, wide }: typeof steps[0] & { showButton?: boolean; wide?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="werkwijze-step-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: wide ? "1.6 1 auto" : "1 1 auto",
        background: "#0B0F0C",
        border: `1px solid ${hovered ? "#9BCB6C" : "rgba(155,203,108,0.35)"}`,
        borderRadius: "16px",
        padding: "28px 20px",
        boxShadow: hovered
          ? "0 4px 24px rgba(155,203,108,0.18)"
          : "0 2px 16px rgba(0,0,0,0.25)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 250ms ease, transform 250ms ease, border-color 250ms ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(155,203,108,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Icon circle */}
      <div style={{
        width: "48px", height: "48px", borderRadius: "50%",
        background: "rgba(155,203,108,0.12)",
        border: "1px solid rgba(155,203,108,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "16px",
        flexShrink: 0,
        position: "relative",
      }}>
        <Icon size={22} color="#9BCB6C" strokeWidth={2} />
      </div>

      {/* Step label */}
      <p style={{
        fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "#9BCB6C", marginBottom: "6px",
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        whiteSpace: "nowrap", position: "relative",
      }}>
        {step}
      </p>

      {/* Title */}
      <p style={{
        fontSize: "14px", fontWeight: 700, color: "#FFFFFF",
        marginBottom: "10px", lineHeight: 1.3,
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        position: "relative",
      }}>
        {title}
      </p>

      {/* Green divider */}
      <div style={{
        width: "32px", height: "2px", background: "#9BCB6C",
        borderRadius: "2px", marginBottom: "12px",
        flexShrink: 0, position: "relative",
      }} />

      {/* Description */}
      <p style={{
        fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.65,
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        position: "relative",
      }}>
        {desc}
      </p>

      {showButton && (
        <a
          href="#calculator"
          style={{
            marginTop: "24px",
            display: "inline-block",
            textAlign: "center",
            background: "#9BCB6C", color: "#FFFFFF",
            fontWeight: 700, fontSize: "13px",
            borderRadius: "8px", padding: "10px 24px",
            textDecoration: "none",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            border: "2px solid #9BCB6C",
            transition: "background 200ms ease, color 200ms ease",
            whiteSpace: "nowrap",
            position: "relative",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
          onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
        >
          Bereken je richtprijs
        </a>
      )}
    </div>
  );
}

function Connector() {
  return (
    <div className="werkwijze-connector" style={{
      width: "40px", flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: "28px", height: "28px", borderRadius: "50%",
        background: "#0B0F0C", border: "1px solid rgba(155,203,108,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "13px", color: "#9BCB6C", fontWeight: 700,
      }}>
        →
      </div>
    </div>
  );
}

export default function SiteWerkwijze() {
  const items = steps.flatMap((s, i) =>
    i < steps.length - 1
      ? [<StepCard key={`card-${i}`} {...s} showButton={i === 0} wide={i === 0} />, <Connector key={`conn-${i}`} />]
      : [<StepCard key={`card-${i}`} {...s} />]
  );

  return (
    <section style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(155,203,108,0.06) 0%, transparent 65%), #F7F8F6", padding: "100px 0", width: "100%" }}>
      <div className="site-wrap">

        {/* Header */}
        <div style={{ marginBottom: "56px", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#1A1A1A",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            letterSpacing: "-0.028em", lineHeight: 1.15, marginBottom: "16px",
          }}>
            Van onzekerheid naar een <span style={{ color: "#9BCB6C" }}>proper en beschermd dak.</span>
          </h2>
          <p style={{
            fontSize: "16px", color: "#666666", lineHeight: 1.7,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            maxWidth: "800px", margin: "0 auto",
          }}>
            Geen verrassingen, geen verkooppraatjes. Zo verloopt een samenwerking&nbsp;met&nbsp;MOS-X.
          </p>
        </div>

        {/* Steps + connectors — flat siblings so alignItems:stretch works */}
        <div className="werkwijze-steps-row" style={{ display: "flex", alignItems: "stretch" }}>
          {items}
        </div>

      </div>
    </section>
  );
}
