"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Wat kost een dakreiniging?",
    a: "De prijs hangt af van het dakoppervlak, het type dakbedekking en de staat van het dak. Bereken uw persoonlijke richtprijs in 60 seconden via onze calculator.",
    btn: true,
  },
  {
    q: "Hoe lang duurt een dakreiniging?",
    a: "Een gemiddelde dakreiniging duurt 1 à 2 dagen, afhankelijk van de grootte en staat van uw dak. U hoeft niet thuis te zijn tijdens de werken.",
  },
  {
    q: "Is een dakontmossing schadelijk voor mijn dakpannen?",
    a: "Nee. Wij werken met de juiste druk en technieken aangepast aan uw daktype. Vooraf inspecteren we uw dak grondig via drone zodat we precies weten hoe we te werk gaan.",
  },
  {
    q: "Hoe vaak moet ik mijn dak laten reinigen?",
    a: "Gemiddeld om de 5 à 10 jaar, afhankelijk van de omgeving en het type dak. Met een dakcoating achteraf beschermt u uw dak langer tegen mos en algen.",
  },
  {
    q: "Komt Yannick zelf of stuurt hij onderaannemers?",
    a: "Yannick komt altijd persoonlijk. Geen onderaannemers, geen verrassingen. Hij staat met zijn naam op elk werk dat hij uitvoert.",
  },
  {
    q: "Wat is het verschil tussen dakreiniging en dakcoating?",
    a: "Dakreiniging verwijdert mos, algen en vuil van uw dak. Dakcoating is een beschermende laag die daarna wordt aangebracht en uw dak tot 10 jaar beschermt tegen nieuwe mosgroei.",
  },
  {
    q: "Is er garantie op de uitgevoerde werken?",
    a: "Ja. Op dakcoating geven wij 5 jaar garantie. Op alle andere werken staat Yannick garant voor kwaliteit en afwerking.",
  },
  {
    q: "Werkt MOS-X in mijn gemeente?",
    a: "MOS-X is actief in Antwerpen, Vlaams-Brabant, Oost-Vlaanderen en Limburg. Twijfelt u? Neem contact op en we bekijken het samen.",
  },
];

function FaqItem({ faq, defaultOpen }: { faq: typeof faqs[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div style={{ borderBottom: "1px solid #EEEEEE" }}>
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
                background: "#9BCB6C", color: "#111111",
                fontWeight: 700, fontSize: "13px",
                borderRadius: "8px", padding: "10px 20px",
                textDecoration: "none",
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              }}
            >
              Bereken uw richtprijs →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SiteFaq() {
  return (
    <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
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
            fontSize: "36px", fontWeight: 800, color: "#1A1A1A",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            letterSpacing: "-0.02em", lineHeight: 1.15,
          }}>
            Nog vragen?
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <FaqItem key={i} faq={faq} defaultOpen={i === 0} />
        ))}

      </div>
    </section>
  );
}
