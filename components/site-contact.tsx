"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "#1A1A1A",
  marginBottom: "12px",
  display: "block",
};

export default function SiteContact() {
  return (
    <section style={{ background: "#FFFFFF", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            background: "#9BCB6C",
            border: "none",
            borderRadius: "16px",
            padding: "48px",
            boxSizing: "border-box",
            boxShadow: "0 4px 24px rgba(155, 203, 108, 0.3)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "0" }}>

            {/* ── COL 1 — Headline + Trust ── */}
            <div className="flex flex-col pb-8 lg:pb-0 lg:pr-8" style={{ borderRight: "none" }}>
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    lineHeight: 1.25,
                    marginBottom: "8px",
                  }}
                >
                  Bereken uw richtprijs<br />binnen 1 minuut.
                </h2>
                <p style={{ fontSize: "13px", color: "#2A2A2A", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "24px" }}>
                  Geen verplichtingen. Gewoon een eerlijke prijs.
                </p>
                <div>
                  {[
                    "Yannick belt terug binnen 1 werkdag",
                    "200+ daken gereinigd",
                    "12 × 5 sterren reviews",
                  ].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#1A1A1A", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "8px" }}>
                      <span style={{ color: "#1A1A1A", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── COL 2 — Prijsindicatie ── */}
            <div className="flex flex-col py-8 lg:py-0 lg:px-8" style={{ borderLeft: "none", borderRight: "none" }}>
              <div style={{ flex: 1 }}>
                <span style={eyebrow}>UW PRIJSINDICATIE</span>
                <p style={{ fontSize: "13px", color: "#2A2A2A", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "16px" }}>
                  Geef uw dak op in 30 seconden
                </p>

                {/* Price range */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.25)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    borderRadius: "10px",
                    padding: "16px 20px",
                    marginBottom: "20px",
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    margin: "0 0 2px 0",
                  }}>
                    € 1.250 – € 1.550
                  </p>
                  <p style={{ fontSize: "12px", color: "#2A2A2A", margin: 0, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                    Exclusief BTW · indicatieve prijs
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://v0-dak-calculator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "100%",
                  boxSizing: "border-box",
                  background: "#FFFFFF",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  textAlign: "center",
                  borderRadius: "8px",
                  padding: "13px 20px",
                  letterSpacing: "0.05em",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#F0F0F0")}
                onMouseLeave={e => (e.currentTarget.style.background = "#FFFFFF")}
              >
                PRIJS BEREKENEN →
              </a>
            </div>

            {/* ── COL 3 — Persoonlijk advies ── */}
            <div className="flex flex-col pt-8 lg:pt-0 lg:pl-8">
              <div style={{ flex: 1 }}>
                <span style={eyebrow}>PERSOONLIJK ADVIES NODIG?</span>

                {/* Avatar + name */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div style={{ position: "relative", width: "72px", height: "72px", flexShrink: 0 }}>
                    <Image
                      src="/images/yannick-foto.png"
                      alt="Yannick"
                      fill
                      style={{ objectFit: "cover", borderRadius: "50%", border: "3px solid rgba(255,255,255,0.6)" }}
                    />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, color: "#1A1A1A", fontSize: "16px", margin: "0 0 4px 0" }}>
                      Yannick
                    </p>
                    <p style={{ fontSize: "13px", color: "#2A2A2A", fontFamily: "var(--font-inter), system-ui, sans-serif", margin: 0, lineHeight: 1.5 }}>
                      Eerlijk advies en de juiste oplossing voor uw dak.
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: "12px", color: "#2A2A2A", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "0", lineHeight: 1.8 }}>
                  Ma – Za: 08:00 – 17:00 &nbsp;·&nbsp; Zo: Gesloten
                </p>
              </div>

              {/* Phone button */}
              <a
                href="tel:+32468352869"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "20px",
                  width: "100%",
                  boxSizing: "border-box",
                  background: "#1A1A1A",
                  border: "none",
                  borderRadius: "8px",
                  padding: "13px 20px",
                  textDecoration: "none",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#333333")}
                onMouseLeave={e => (e.currentTarget.style.background = "#1A1A1A")}
              >
                <Phone style={{ width: "16px", height: "16px", color: "#FFFFFF", flexShrink: 0 }} />
                <span style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}>
                  +32 468 35 28 69
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
