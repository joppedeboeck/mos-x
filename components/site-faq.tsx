"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Wat kost een dakreiniging?",
    a: "Voor een gemiddeld dak ligt een dakreiniging meestal tussen €1.000 en €1.500. De exacte prijs hangt af van de oppervlakte, de staat van het dak en de bereikbaarheid. Via de calculator ontvang je binnen 1 minuut een persoonlijke richtprijs.",
    btn: true,
  },
  {
    q: "Is mijn dak nog te redden?",
    a: "In veel gevallen wel. Zelfs daken die zwaar vervuild of verweerd lijken, kunnen vaak opnieuw een verzorgd uitzicht krijgen zonder ingrijpende werken. Yannick bekijkt de staat van je dak en adviseert wat écht nodig is.",
  },
  {
    q: "Heb ik een dakcoating nodig?",
    a: "Niet altijd. Soms volstaat een reiniging om je dak opnieuw een verzorgd uitzicht te geven. Een dakcoating is vooral interessant als je extra bescherming wil of als je dak er zichtbaar verweerd uitziet. Yannick adviseert eerlijk wat jouw dak nodig heeft.",
  },
  {
    q: "Is een dakontmossing schadelijk voor mijn dakpannen?",
    a: "Nee, integendeel. Mos tast je dakpannen aan en maakt ze poreus. Een dakontmossing stopt dat proces en beschermt je dak. Achteraf kan een coating aangebracht worden zodat je dak er weer als nieuw uitziet.",
  },
  {
    q: "Komt Yannick zelf langs?",
    a: "Ja. Wanneer je contact opneemt met MOS-X, heb je rechtstreeks contact met Yannick. Hij komt zelf langs, beoordeelt je dak persoonlijk en voert de werken zelf uit. Zo weet je altijd met wie je samenwerkt en wat je mag verwachten.",
  },
  {
    q: "Wat als mijn dak geen reiniging nodig heeft?",
    a: "Dan zegt Yannick dat gewoon. Het doel is niet om zoveel mogelijk te verkopen, maar om te adviseren wat jouw dak écht nodig heeft. Soms is dat een reiniging. Soms een coating. Soms niets.",
  },
  {
    q: "Is er garantie op de uitgevoerde werken?",
    a: "Ja. Op dakcoating geven we tot 10 jaar garantie. Op dakreiniging geldt een anti-mos garantie van 2 jaar. En bij elke opdracht ontvang je een dakrapport zodat je exact weet wat er uitgevoerd werd.",
  },
];

function FaqItem({ faq, defaultOpen }: { faq: typeof faqs[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div style={{ borderBottom: "1px solid #E5E7EB" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{
          fontSize: "16px", fontWeight: 700, color: "#111111",
          fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          paddingRight: "16px",
        }}>
          {faq.q}
        </span>
        <span style={{
          color: "#9BCB6C", fontSize: "18px", flexShrink: 0,
          display: "inline-block",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}>
          ↓
        </span>
      </button>

      <div style={{
        overflow: "hidden",
        maxHeight: open ? "400px" : "0",
        transition: "max-height 0.3s ease",
      }}>
        <div style={{ paddingBottom: "20px" }}>
          <p style={{
            fontSize: "15px", color: "#555555", lineHeight: 1.7,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}>
            {faq.a}
          </p>
          {faq.btn && (
            <a
              href="#calculator"
              style={{
                display: "inline-block", marginTop: "16px",
                background: "#9BCB6C", color: "#FFFFFF",
                fontWeight: 700, fontSize: "13px",
                borderRadius: "8px", padding: "10px 20px",
                textDecoration: "none",
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                transition: "background 200ms ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
              onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
            >
              Bereken je richtprijs →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SiteFaq() {
  return (
    <section style={{ background: "#F7F8F6", padding: "100px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <div style={{ marginBottom: "48px" }}>
          <p style={{
            fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.12em", color: "#9BCB6C", marginBottom: "12px",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          }}>
            Veelgestelde vragen
          </p>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#1A1A1A",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            letterSpacing: "-0.028em", lineHeight: 1.15,
          }}>
            Nog vragen over je dak?
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <FaqItem key={i} faq={faq} defaultOpen={i === 0} />
        ))}

      </div>
    </section>
  );
}
