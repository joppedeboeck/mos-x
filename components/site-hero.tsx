"use client";

import { Star, Phone, Tv } from "lucide-react";
import Link from "next/link";

export default function SiteHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: "100vh", background: "#1A1A1A", width: "100%", maxWidth: "100vw", overflow: "hidden" }}
    >
      {/* Video background */}
      <video
        src="/videos/yannick-hero.mp4"
        autoPlay muted loop playsInline
        style={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: "100%",
          objectFit: "cover", zIndex: 0,
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.88) 45%, rgba(26,26,26,0.55) 65%, rgba(26,26,26,0.30) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="hero-content-wrap relative flex items-center"
        style={{ height: "100vh", zIndex: 2, maxWidth: "1300px", margin: "0 auto", width: "100%", paddingLeft: "40px", paddingRight: "40px" }}
      >
        <div
          className="w-full max-w-3xl"
          style={{ paddingTop: "100px", paddingBottom: "60px" }}
        >

          {/* ── Left column ── */}
          <div>
            <p
              className="mb-5"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#9BCB6C",
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <svg width="18" height="13" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, borderRadius: "2px", marginTop: "1px" }}>
                <rect x="0"  width="6"  height="13" fill="#000000" />
                <rect x="6"  width="6"  height="13" fill="#FFE000" />
                <rect x="12" width="6"  height="13" fill="#EF3340" />
              </svg>
              <span>HET EERSTE DAKONDERHOUDSCONCEPT VAN BELGIË</span>
            </p>

            <h1
              className="leading-[1.06] mb-6"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
                letterSpacing: "-0.028em",
                color: "#FFFFFF",
              }}
            >
              Levenslang een
              <br />
              <span style={{ color: "#9BCB6C" }}>verzorgd dak.</span>
            </h1>

            <p
              className="leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.62)", fontSize: "18px", maxWidth: "520px" }}
            >
              Je dak blijft jaar na jaar proper, verzorgd en waardevol.
              <br />
              Gereinigd, beschermd en onderhouden door MOS-X.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#9BCB6C", color: "#fff", borderRadius: "8px",
                  padding: "14px 28px", fontSize: "16px", fontWeight: 700,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  textDecoration: "none", transition: "background 200ms ease", whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
                onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
              >
                Bereken je richtprijs &rarr;
              </Link>
              <a
                href="tel:+32468352869"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid rgba(155,203,108,0.5)",
                  borderRadius: "8px", padding: "14px 28px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "15px", textDecoration: "none",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#9BCB6C"; e.currentTarget.style.color = "#9BCB6C"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(155,203,108,0.5)"; e.currentTarget.style.color = "#FFFFFF"; }}
              >
                <Phone className="w-4 h-4" />
                Bel Yannick rechtstreeks
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-3 mb-8" style={{ flexWrap: "wrap" }}>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#F9A825" }} />
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                5.0 · 13 beoordelingen
              </span>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>·</span>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                background: "#FFFFFF", color: "#1A1A1A",
                borderRadius: "6px", padding: "4px 10px",
                fontSize: "11px", fontWeight: 600,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                whiteSpace: "nowrap",
              }}>
                <Tv style={{ width: "11px", height: "11px", flexShrink: 0 }} />
                Bekend van VTM Lifestyle &amp; Wonen
              </span>
            </div>
          </div>


        </div>
      </div>

      {/* Wave onderaan */}
      <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0, zIndex: 3 }}>
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "50px" }}>
          <path d="M0,0 C360,45 1080,45 1440,0 L1440,50 L0,50 Z" fill="#F7F8F6"/>
        </svg>
      </div>
    </section>
  );
}
