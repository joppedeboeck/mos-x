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
    title: "Plaatsbezoek",
    desc: "Yannick komt persoonlijk langs en inspecteert uw dak van dichtbij. U kijkt mee.",
  },
  {
    Icon: FileText,
    step: "STAP 03",
    title: "Offerte op maat",
    desc: "U ontvangt een duidelijke offerte met vaste prijs. Geen verrassingen achteraf.",
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
    desc: "Na het werk ontvangt u garantie en blijft Yannick bereikbaar voor vragen.",
  },
];

function StepCard({ Icon, step, title, desc, showButton }: typeof steps[0] & { showButton?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 0",
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "16px",
        padding: "28px 20px",
        boxShadow: hovered
          ? "0 4px 20px rgba(155,203,108,0.20)"
          : "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 250ms ease, transform 250ms ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: "48px", height: "48px", borderRadius: "50%",
        background: "rgba(155,203,108,0.12)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "16px",
        flexShrink: 0,
      }}>
        <Icon size={22} color="#9BCB6C" strokeWidth={2} />
      </div>

      {/* Step label */}
      <p style={{
        fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "#9BCB6C", marginBottom: "6px",
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        whiteSpace: "nowrap",
      }}>
        {step}
      </p>

      {/* Title */}
      <p style={{
        fontSize: "14px", fontWeight: 700, color: "#1A1A1A",
        marginBottom: "10px", lineHeight: 1.3,
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        whiteSpace: "nowrap",
      }}>
        {title}
      </p>

      {/* Green divider */}
      <div style={{
        width: "32px", height: "2px", background: "#9BCB6C",
        borderRadius: "2px", marginBottom: "12px",
        flexShrink: 0,
      }} />

      {/* Description */}
      <p style={{
        fontSize: "13px", color: "#777777", lineHeight: 1.65,
        fontFamily: "var(--font-inter), system-ui, sans-serif",
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
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
          onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
        >
          Bereken uw richtprijs
        </a>
      )}
    </div>
  );
}

function Connector() {
  return (
    <div style={{
      width: "40px", flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: "28px", height: "28px", borderRadius: "50%",
        background: "#FFFFFF", border: "1px solid #E5E7EB",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
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
      ? [<StepCard key={`card-${i}`} {...s} showButton={i === 0} />, <Connector key={`conn-${i}`} />]
      : [<StepCard key={`card-${i}`} {...s} />]
  );

  return (
    <section style={{ background: "#F7F8F6", padding: "100px 0", width: "100%" }}>
      <div className="site-wrap">

        {/* Header */}
        <div style={{ marginBottom: "56px", textAlign: "center" }}>
          <p style={{
            fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.12em", color: "#9BCB6C", marginBottom: "12px",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          }}>
            Onze werkwijze
          </p>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#1A1A1A",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            letterSpacing: "-0.028em", lineHeight: 1.15, marginBottom: "16px",
          }}>
            Van onzekerheid naar een proper en beschermd dak.
          </h2>
          <p style={{
            fontSize: "16px", color: "#666666", lineHeight: 1.7,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            maxWidth: "620px", margin: "0 auto",
          }}>
            Wij maken het eenvoudig.<br />
            <span style={{ whiteSpace: "nowrap" }}>U weet op voorhand wat uw dak nodig heeft, wat het kost en wat u mag verwachten.</span>
          </p>
        </div>

        {/* Steps + connectors — flat siblings so alignItems:stretch works */}
        <div style={{ display: "flex", alignItems: "stretch" }}>
          {items}
        </div>

      </div>
    </section>
  );
}
