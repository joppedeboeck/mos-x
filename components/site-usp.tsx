"use client";

import { User, CheckCircle, Home, Handshake } from "lucide-react";

const usps = [
  {
    Icon: User,
    title: "Yannick doet het werk zelf",
    text: "Geen onderaannemers.",
  },
  {
    Icon: CheckCircle,
    title: "Alleen wat nodig is",
    text: "Niet meer, niet minder.",
  },
  {
    Icon: Home,
    title: "Gespecialiseerd in daken",
    text: "Geen algemeen klusbedrijf.",
  },
  {
    Icon: Handshake,
    title: "Eerlijk advies",
    text: "Ook als er niets nodig is.",
  },
];

export default function SiteUsp() {
  return (
    <section style={{ background: "#F7F8F6", padding: "56px 0 80px", position: "relative", overflow: "visible" }}>
      <div className="site-wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {usps.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "32px 20px",
                textAlign: "center",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{
                width: "52px",
                height: "52px",
                background: "rgba(155,203,108,0.12)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                flexShrink: 0,
              }}>
                <Icon size={22} color="#9BCB6C" strokeWidth={2} />
              </div>
              <p style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                color: "#1A1A1A",
                marginBottom: "8px",
                lineHeight: 1.3,
              }}>
                {title}
              </p>
              <p style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "13px",
                color: "#777777",
                lineHeight: 1.5,
              }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Arc transition into dark reviews section */}
      <div style={{
        position: "absolute",
        bottom: "-60px",
        left: "-15%",
        width: "130%",
        height: "120px",
        background: "#FFFFFF",
        borderRadius: "0 0 50% 50% / 0 0 100% 100%",
        zIndex: 1,
        pointerEvents: "none",
      }} />
    </section>
  );
}
