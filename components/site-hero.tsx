"use client";

import { useState, useRef, useCallback } from "react";
import { Star, Shield, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

/* ── Before / After Slider ── */
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
    const onMove = (e: MouseEvent) => { if (dragging.current) updatePosition(e.clientX); };
    const onUp = () => {
      dragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none w-full"
      style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4/3", cursor: "ew-resize" }}
      onTouchMove={e => updatePosition(e.touches[0].clientX)}
    >
      {/* BEFORE */}
      <div className="absolute inset-0">
        <img
          src="/images/dak-reinigen.webp"
          alt="Voor reiniging"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.4) brightness(0.5) hue-rotate(60deg)" }}
          draggable={false}
        />
      </div>

      {/* AFTER */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img
          src="/images/dak-reinigen.webp"
          alt="Na reiniging"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${position}%`, width: "2px", background: "rgba(255,255,255,0.9)", transform: "translateX(-50%)", zIndex: 10 }}
      />

      {/* Handle */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: `${position}%`, top: "50%",
          transform: "translate(-50%, -50%)",
          width: "42px", height: "42px",
          borderRadius: "50%",
          background: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          zIndex: 11, cursor: "ew-resize",
        }}
        onMouseDown={onMouseDown}
        onTouchStart={() => { dragging.current = true; }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 4L2 9L6 14" stroke="#9BCB6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4L16 9L12 14" stroke="#9BCB6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* VOOR badge */}
      <div
        className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md text-[11px] font-bold text-white"
        style={{ background: "rgba(0,0,0,0.65)", zIndex: 10, letterSpacing: "0.08em" }}
      >
        VOOR
      </div>

      {/* NA badge */}
      <div
        className="absolute bottom-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold text-white"
        style={{ background: "#9BCB6C", zIndex: 10, letterSpacing: "0.08em" }}
      >
        <CheckCircle className="w-3 h-3" /> NA
      </div>

      {/* Drag hint */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[10px] text-white/80"
        style={{ background: "rgba(0,0,0,0.45)", zIndex: 10, whiteSpace: "nowrap" }}
      >
        Sleep om te vergelijken
      </div>
    </div>
  );
}

/* ── Hero ── */
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

      {/* Gradient overlay — heavier left for text, lighter right for slider */}
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
          className="w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center"
          style={{ paddingTop: "130px", paddingBottom: "60px" }}
        >

          {/* ── Left column: text ── */}
          <div>
            {/* Label */}
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

            {/* H1 */}
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

            {/* Subtext */}
            <p
              className="leading-relaxed mb-8"
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: "18px",
                maxWidth: "520px",
              }}
            >
              MOS-X inspecteert uw dak gratis met een professionele drone.
              U kijkt live mee. Daarna: eerlijk advies, vaste prijs, geen verkooppraatjes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#9BCB6C",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  textDecoration: "none",
                  transition: "background 200ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
                onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
              >
                Gratis diagnose aanvragen &rarr;
              </Link>
              <a
                href="tel:+32468352869"
                className="site-btn-outline-white"
                style={{ fontSize: "15px" }}
              >
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
                background: "rgba(255,255,255,0.07)",
                borderRadius: "10px",
                padding: "10px 16px",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                className="flex items-center justify-center font-black text-white shrink-0"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "0.875rem",
                  background: "#E8000D",
                  borderRadius: "5px",
                  padding: "3px 7px",
                }}
              >
                vtm
              </div>
              <div>
                <p className="text-[10px] leading-none mb-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>Bekend van</p>
                <p
                  className="text-[0.8125rem] font-semibold leading-none text-white"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  VTM Lifestyle &amp; Wonen
                </p>
              </div>
            </div>
          </div>

          {/* ── Right column: before/after slider ── */}
          <div className="hidden lg:block">
            <BeforeAfterSlider />
          </div>

        </div>
      </div>
    </section>
  );
}
