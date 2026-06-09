"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

const trust = [
  "Drone-inspectie inbegrepen",
  "Yannick belt terug binnen 1 werkdag",
  "200+ daken gereinigd",
];

export default function SiteContact() {
  return (
    <section style={{ background: "#F7F8F6", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div
          style={{
            background: "#1A1A1A",
            border: "1px solid #2A2A2A",
            borderRadius: "16px",
            padding: "40px 48px",
            boxSizing: "border-box",
            width: "100%",
          }}
        >

          {/* Row 1 — headline left, buttons right */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "28px",
            }}
          >
            {/* LEFT — label + headline */}
            <div style={{ minWidth: "200px" }}>
              <p
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#9BCB6C",
                  marginBottom: "10px",
                }}
              >
                100% VRIJBLIJVEND · GEEN VERKOOPPRAATJES
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Bereken uw richtprijs.
              </h2>
            </div>

            {/* RIGHT — buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <Link
                href="https://v0-dak-calculator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#9BCB6C",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "8px",
                  padding: "14px 24px",
                  transition: "background 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
                onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
              >
                Bereken uw richtprijs
                <ArrowRight style={{ width: "16px", height: "16px" }} />
              </Link>

              <a
                href="tel:+32468352869"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid #3A3A3A",
                  borderRadius: "8px",
                  padding: "14px 24px",
                  transition: "border-color 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#9BCB6C")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#3A3A3A")}
              >
                <Phone style={{ width: "15px", height: "15px" }} />
                +32 468 35 28 69
              </a>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid #2A2A2A", marginBottom: "24px" }} />

          {/* Row 2 — trust items */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 32px" }}>
            {trust.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                <span style={{ color: "#9BCB6C", fontWeight: 700 }}>✓</span>
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
