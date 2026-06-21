"use client";

import Image from "next/image";

export default function SiteAboutYannick() {
  const usps = [
    { title: "Geen onderaannemers", sub: "Yannick doet het zelf" },
    { title: "Vaste prijs vooraf", sub: "Geen verrassingen" },
    { title: "Garantie op het werk", sub: "Kwaliteit die blijft" },
  ];

  return (
    <section style={{ background: "#FFFFFF", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>

        <div className="flex flex-col lg:flex-row" style={{ gap: "64px", alignItems: "stretch" }}>

          {/* ── LINKS: foto ── */}
          <div style={{ flex: "0 0 55%", position: "relative" }}>
            <div style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%",
              minHeight: "400px",
              border: "1px solid #EEEEEE",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}>
              <Image
                src="/images/Foto_Yannick.png"
                alt="Yannick - oprichter MOS-X"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          {/* ── RECHTS: tekst ── */}
          <div style={{ flex: "1 1 0" }}>

            {/* Label */}
            <p style={{
              fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.14em", color: "#9BCB6C", marginBottom: "16px",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}>
              Wie is MOS-X?
            </p>

            {/* Headline */}
            <h2 style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15,
              color: "#1A1A1A", marginBottom: "24px", letterSpacing: "-0.028em",
            }}>
              Geen onderaannemers.{" "}
              <br />
              <span style={{ color: "#9BCB6C" }}>Gewoon Yannick.</span>
            </h2>

            {/* Body */}
            <p style={{
              fontSize: "16px", lineHeight: 1.7, color: "#666666",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              marginBottom: "40px",
            }}>
              Hoi, ik ben Yannick. Ik startte MOS-X omdat ik huiseigenaars een eerlijke service wil bieden — zonder mooipraat en zonder onderaannemers. Ik kom persoonlijk langs, doe het werk zelf, en sta met mijn naam garant voor het resultaat. Eerlijke prijs vooraf, altijd.
            </p>

            {/* USPs */}
            <div className="flex flex-col sm:flex-row" style={{ gap: "32px" }}>
              {usps.map((u) => (
                <div key={u.title} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontWeight: 700, fontSize: "14px", color: "#1A1A1A",
                  }}>
                    {u.title}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "13px", color: "#888888",
                  }}>
                    {u.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "36px", flexWrap: "wrap" }}>
              <a
                href="/over-ons"
                style={{
                  display: "inline-flex", alignItems: "center",
                  border: "2px solid #9BCB6C", color: "#9BCB6C",
                  background: "transparent", borderRadius: "8px",
                  padding: "12px 24px", fontSize: "15px", fontWeight: 700,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  textDecoration: "none", transition: "background 200ms ease, color 200ms ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#9BCB6C"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#9BCB6C"; }}
              >
                Meer over ons
              </a>
              <a
                href="#calculator"
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "#9BCB6C", color: "#FFFFFF",
                  border: "2px solid #9BCB6C", borderRadius: "8px",
                  padding: "12px 24px", fontSize: "15px", fontWeight: 700,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  textDecoration: "none", transition: "background 200ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
                onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
              >
                Bereken uw richtprijs
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
