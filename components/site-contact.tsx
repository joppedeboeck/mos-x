"use client";

import Link from "next/link";
import Image from "next/image";

const GREEN = "#9BCB6C";
const DARK_CARD = "#1E1E1E";
const DIVIDER = "#333333";

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: GREEN,
  marginBottom: "12px",
  display: "block",
};

const checkRow = (small = false): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: small ? "12px" : "14px",
  color: small ? "#9CA3AF" : "#FFFFFF",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  marginBottom: small ? "4px" : "8px",
});

export default function SiteContact() {
  return (
    <section style={{ background: "#F7F8F6", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            background: DARK_CARD,
            border: "1px solid #2A2A2A",
            borderRadius: "16px",
            padding: "40px",
            boxSizing: "border-box",
          }}
        >
          {/* 3-column grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3"
            style={{ gap: "0" }}
          >

            {/* ── COL 1 — Headline + Trust ── */}
            <div
              className="pb-8 lg:pb-0 lg:pr-8"
              style={{ borderBottom: `1px solid ${DIVIDER}` }}
            >
              <div className="lg:hidden" style={{ borderBottom: "none" }} />
              <span style={eyebrow}>100% VRIJBLIJVEND · GEEN VERKOOPPRAATJES</span>
              <h2
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  marginBottom: "8px",
                }}
              >
                Bereken uw richtprijs<br />binnen 1 minuut.
              </h2>
              <p style={{ fontSize: "13px", color: "#9CA3AF", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "24px" }}>
                Geen verplichtingen. Gewoon een eerlijke prijs.
              </p>
              <div>
                {[
                  "Drone-inspectie inbegrepen",
                  "Yannick belt terug binnen 1 werkdag",
                  "200+ daken gereinigd",
                ].map(item => (
                  <div key={item} style={checkRow()}>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ── COL 2 — Prijsindicatie ── */}
            <div
              className="py-8 lg:py-0 lg:px-8"
              style={{
                borderBottom: `1px solid ${DIVIDER}`,
                borderLeft: "none",
              }}
            >
              <span style={eyebrow}>UW PRIJSINDICATIE</span>
              <p style={{ fontSize: "13px", color: "#9CA3AF", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "16px" }}>
                Geef uw dak op in 30 seconden
              </p>

              {/* Price range */}
              <div
                style={{
                  background: "rgba(155,203,108,0.08)",
                  border: `1px solid rgba(155,203,108,0.2)`,
                  borderRadius: "10px",
                  padding: "16px 20px",
                  marginBottom: "16px",
                }}
              >
                <p style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "0 0 2px 0",
                }}>
                  € 1.250 – € 1.550
                </p>
                <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                  Exclusief BTW · indicatieve prijs
                </p>
              </div>

              {/* Bullet list */}
              <div style={{ marginBottom: "20px" }}>
                {[
                  "Dakreiniging & coating",
                  "Goten gereinigd inbegrepen",
                  "Gratis drone-inspectie",
                  "Inclusief BTW-attest",
                ].map(item => (
                  <div key={item} style={checkRow(true)}>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </div>
                ))}
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
                  background: GREEN,
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
                onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
                onMouseLeave={e => (e.currentTarget.style.background = GREEN)}
              >
                PRIJS BEREKENEN →
              </a>
            </div>

            {/* ── COL 3 — Persoonlijk advies ── */}
            <div
              className="pt-8 lg:pt-0 lg:pl-8"
              style={{ borderLeft: "none" }}
            >
              <span style={eyebrow}>PERSOONLIJK ADVIES NODIG?</span>

              {/* Avatar + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{ position: "relative", width: "72px", height: "72px", flexShrink: 0 }}>
                  <Image
                    src="/images/yannick.png"
                    alt="Yannick"
                    fill
                    style={{ objectFit: "cover", borderRadius: "50%", border: `3px solid ${GREEN}` }}
                  />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "16px", margin: "0 0 4px 0" }}>
                    Yannick
                  </p>
                  <p style={{ fontSize: "13px", color: "#9CA3AF", fontFamily: "var(--font-inter), system-ui, sans-serif", margin: 0, lineHeight: 1.5 }}>
                    Eerlijk advies en de juiste oplossing voor uw dak.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+32468352869"
                style={{
                  display: "block",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  marginBottom: "8px",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
              >
                +32 468 35 28 69
              </a>

              {/* Hours */}
              <p style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "20px", lineHeight: 1.8 }}>
                Ma – Za: 08:00 – 17:00<br />Zo: Gesloten
              </p>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                style={{
                  display: "block",
                  width: "100%",
                  boxSizing: "border-box",
                  background: "transparent",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                  border: "1px solid #3A3A3A",
                  borderRadius: "8px",
                  padding: "13px 20px",
                  transition: "border-color 150ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = GREEN)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#3A3A3A")}
              >
                Gratis diagnose aanvragen
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
