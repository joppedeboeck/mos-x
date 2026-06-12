"use client";

import { Star, Phone } from "lucide-react";
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
        className="relative flex items-center"
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
              }}
            >
              Dé specialist in dakontmossen en coaten
            </p>

            <h1
              className="leading-[1.06] mb-6"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Uw dak verdient een{" "}
              <span style={{ color: "#9BCB6C" }}>eerlijke diagnose.</span>
            </h1>

            <p
              className="leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.62)", fontSize: "18px", maxWidth: "520px" }}
            >
              MOS-X inspecteert uw dak gratis met een professionele drone.
              U kijkt live mee. Daarna: eerlijk advies, vaste prijs, geen verkooppraatjes.
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
                Bereken uw richtprijs &rarr;
              </Link>
              <a href="tel:+32468352869" className="site-btn-outline-white" style={{ fontSize: "15px" }}>
                <Phone className="w-4 h-4" />
                +32 468 35 28 69
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#F9A825" }} />
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                5.0 · 12 beoordelingen
              </span>
            </div>
          </div>


        </div>
      </div>

      {/* Wave onderaan */}
      <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0, zIndex: 3 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="#F8F8F8"/>
        </svg>
      </div>
    </section>
  );
}
