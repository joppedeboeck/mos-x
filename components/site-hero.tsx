"use client";

import { Star, Shield, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function SiteHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "90vh", background: "#1A1A1A" }}
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
        className="site-wrap relative flex items-center"
        style={{ minHeight: "90vh", zIndex: 2 }}
      >
        <div
          className="w-full max-w-3xl"
          style={{ paddingTop: "130px", paddingBottom: "60px" }}
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
                Gratis diagnose aanvragen &rarr;
              </Link>
              <a href="tel:+32468352869" className="site-btn-outline-white" style={{ fontSize: "15px" }}>
                <Phone className="w-4 h-4" />
                +32 468 35 28 69
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#F9A825" }} />
                  ))}
                </div>
                <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                  5.0 · 12 beoordelingen
                </span>
              </div>
              <div className="w-px h-4 hidden sm:block" style={{ background: "rgba(255,255,255,0.15)" }} />
              <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                <CheckCircle className="w-3.5 h-3.5" style={{ color: "#9BCB6C" }} />
                200+ daken gereinigd
              </div>
              <div className="w-px h-4 hidden sm:block" style={{ background: "rgba(255,255,255,0.15)" }} />
              <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                <Shield className="w-3.5 h-3.5" style={{ color: "#9BCB6C" }} />
                Volledig verzekerd
              </div>
            </div>

            {/* VTM badge */}
            <div
              className="inline-flex items-center gap-3"
              style={{
                background: "rgba(255,255,255,0.07)", borderRadius: "10px",
                padding: "10px 16px", border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                className="flex items-center justify-center font-black text-white shrink-0"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "0.875rem", background: "#E8000D",
                  borderRadius: "5px", padding: "3px 7px",
                }}
              >
                vtm
              </div>
              <div>
                <p className="text-[10px] leading-none mb-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Bekend van
                </p>
                <p
                  className="text-[0.8125rem] font-semibold leading-none text-white"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  VTM Lifestyle &amp; Wonen
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
