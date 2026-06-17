"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { useState } from "react";

const GREEN = "#9ACA63";
const DARK = "#0B0F0C";


export default function SiteContact() {
  const [btnHovered, setBtnHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);

  return (
    <section style={{
      background: "#F7F8F6",
      padding: "60px 24px 80px",
      position: "relative",
      zIndex: 20,
    }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{
          background: `radial-gradient(circle at top left, rgba(154,202,99,0.16) 0%, transparent 32%), #FFFFFF`,
          border: "1px solid rgba(154,202,99,0.22)",
          borderRadius: "28px",
          boxShadow: "0 28px 90px rgba(11,15,12,0.14)",
          padding: "36px 64px",
          position: "relative",
          marginBottom: "0",
          zIndex: 20,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "56px",
          alignItems: "stretch",
          boxSizing: "border-box",
        }}>

          {/* ── Col 1: Headline + curved arrow ── */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{
              fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.14em", color: GREEN, marginBottom: "16px",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}>
              Laat uw dak weer stralen
            </p>
            <h2 style={{
              fontSize: "clamp(1.45rem, 2.2vw, 1.875rem)", fontWeight: 800,
              color: DARK, lineHeight: 1.2, letterSpacing: "-0.028em",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              marginBottom: "14px",
            }}>
              Bereken uw{" "}
              <span style={{ color: GREEN }}>richtprijs</span>
              {" "}binnen 1 minuut.
            </h2>
            <p style={{
              fontSize: "15px", color: `rgba(11,15,12,0.65)`, lineHeight: 1.65,
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}>
              Geen verplichtingen. Gewoon een eerlijke prijs en persoonlijk advies van Yannick.
            </p>
          </div>

          {/* ── Col 2: CTA button ── */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{
              fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.14em", color: GREEN, marginBottom: "16px",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}>
              Uw prijsindicatie
            </p>
            {/* Price indication card */}
            <div style={{
              background: "rgba(154,202,99,0.10)",
              border: "1px solid rgba(154,202,99,0.28)",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "0",
            }}>
              <p style={{
                fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 800,
                color: DARK, letterSpacing: "-0.02em",
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                marginBottom: "4px", whiteSpace: "nowrap", textAlign: "center",
              }}>
                € 750 – € 1.500
              </p>
              <p style={{
                fontSize: "13px", color: `rgba(11,15,12,0.5)`,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                textAlign: "center",
              }}>
                excl. BTW · indicatieve prijs
              </p>
            </div>

            {/* Primary CTA button */}
            <a
              href="https://v0-dak-calculator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                height: "58px", width: "100%", borderRadius: "12px",
                background: btnHovered ? "#7AB54E" : GREEN,
                color: "#FFFFFF", fontSize: "14px", fontWeight: 800,
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                textDecoration: "none", letterSpacing: "0.04em",
                transition: "background 200ms ease",
                marginTop: "auto",
                boxSizing: "border-box",
              }}
            >
              BEREKEN UW PRIJS →
            </a>
          </div>

          {/* ── Col 3: Yannick contact block ── */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{
              fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.14em", color: GREEN, marginBottom: "16px",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}>
              Persoonlijk advies nodig?
            </p>

            {/* Profile */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div style={{ position: "relative", width: "64px", height: "64px", flexShrink: 0 }}>
                <Image
                  src="/images/yannick-foto.png"
                  alt="Yannick"
                  fill
                  style={{
                    objectFit: "cover", borderRadius: "50%",
                    border: `2px solid ${GREEN}`,
                  }}
                />
                <span style={{
                  position: "absolute", bottom: 0, right: 0,
                  width: "18px", height: "18px", borderRadius: "50%",
                  background: GREEN, border: "2px solid #FFFFFF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="#0B0F0C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div>
                <p style={{
                  fontSize: "16px", fontWeight: 700, color: DARK,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  marginBottom: "4px",
                }}>
                  Yannick
                </p>
                <p style={{
                  fontSize: "13px", color: `rgba(11,15,12,0.55)`, lineHeight: 1.5,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}>
                  Eerlijk advies en de juiste oplossing voor uw dak.
                </p>
              </div>
            </div>

            <p style={{
              fontSize: "13px", color: `rgba(11,15,12,0.55)`,
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}>
              Ma – Za: 08:00 – 17:00 · Zo: Gesloten
            </p>

            {/* Phone button — pushed to bottom with marginTop auto */}
            <a
              href="tel:+32468352869"
              onMouseEnter={() => setPhoneHovered(true)}
              onMouseLeave={() => setPhoneHovered(false)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "10px", height: "58px", width: "100%", borderRadius: "12px",
                background: phoneHovered ? "#1A2620" : DARK,
                color: "#FFFFFF", fontSize: "15px", fontWeight: 700,
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                textDecoration: "none",
                transition: "background 200ms ease",
                marginTop: "auto",
                boxSizing: "border-box",
              }}
            >
              <Phone size={17} />
              +32 468 35 28 69
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
