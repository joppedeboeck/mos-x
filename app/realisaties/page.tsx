"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

const voorNaPhotos = [
  { src: "/images/herentals-voor.png",    label: "VOOR", before: true,  caption: "Dakcoating, Herentals" },
  { src: "/images/olen-voor.png",         label: "VOOR", before: true,  caption: "Dakreiniging, Olen" },
  { src: "/images/koningshooikt-voor.jpg",label: "VOOR", before: true,  caption: "Dakreiniging, Koningshooikt" },
  { src: "/images/herentals-na.png",      label: "NA",   before: false, caption: "Dakcoating, Herentals" },
  { src: "/images/olen-na.png",           label: "NA",   before: false, caption: "Dakreiniging, Olen" },
  { src: "/images/koningshooikt-na.jpg",  label: "NA",   before: false, caption: "Dakreiniging, Koningshooikt" },
];

function LargeSlider() {
  const [split, setSplit] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (cx: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setSplit(Math.min(95, Math.max(5, ((cx - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "col-resize",
        userSelect: "none",
        boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
      }}
      onMouseDown={() => (dragging.current = true)}
      onMouseMove={e => { if (dragging.current) move(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={() => (dragging.current = true)}
      onTouchMove={e => move(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* Before (VOOR) — base layer, full width */}
      <img
        src="/images/Before slider 3.0.png"
        alt="Voor behandeling"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 70%" }}
        draggable={false}
      />
      {/* VOOR label — top left */}
      <div style={{
        position: "absolute", top: "16px", left: "16px", zIndex: 5,
        background: "rgba(0,0,0,0.65)", color: "#FFFFFF",
        padding: "6px 14px", borderRadius: "50px",
        fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
      }}>
        VOOR
      </div>

      {/* After (NA) — overlay clipped to right side */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${split}%)` }}>
        <img
          src="/images/After slide 2.0.png"
          alt="Na behandeling"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 70%" }}
          draggable={false}
        />
        {/* NA label — top right */}
        <div style={{
          position: "absolute", top: "16px", right: "16px", zIndex: 5,
          background: "#9BCB6C", color: "#1A1A1A",
          padding: "6px 14px", borderRadius: "50px",
          fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
          fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        }}>
          NA ✓
        </div>
      </div>

      {/* Divider line + handle */}
      <div
        style={{
          position: "absolute", top: 0, bottom: 0, width: "2px",
          left: `${split}%`, background: "rgba(255,255,255,0.75)",
          zIndex: 10, pointerEvents: "none",
        }}
      >
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "44px", height: "44px", borderRadius: "50%",
          background: "#FFFFFF",
          border: "2px solid #9BCB6C",
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "2px",
        }}>
          <ChevronLeft style={{ width: "14px", height: "14px", color: "#9BCB6C" }} />
          <ChevronRight style={{ width: "14px", height: "14px", color: "#9BCB6C" }} />
        </div>
      </div>

      {/* Drag hint */}
      <div style={{
        position: "absolute", bottom: "16px", left: "50%",
        transform: "translateX(-50%)",
        fontSize: "11px", color: "rgba(255,255,255,0.7)",
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        pointerEvents: "none",
        transition: "opacity 500ms",
        opacity: split === 50 ? 1 : 0,
        whiteSpace: "nowrap",
      }}>
        ← sleep →
      </div>
    </div>
  );
}

function SmallSlider({ beforeSrc, afterSrc, beforePosition = "50% 70%", afterPosition = "50% 70%" }: { beforeSrc: string; afterSrc: string; beforePosition?: string; afterPosition?: string }) {
  const [split, setSplit] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (cx: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setSplit(Math.min(95, Math.max(5, ((cx - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "100%", height: "350px", borderRadius: "12px", overflow: "hidden", cursor: "col-resize", userSelect: "none", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
      onMouseDown={() => (dragging.current = true)}
      onMouseMove={e => { if (dragging.current) move(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={() => (dragging.current = true)}
      onTouchMove={e => move(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img src={beforeSrc} alt="Voor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: beforePosition }} draggable={false} />
      <div style={{ position: "absolute", top: "12px", left: "12px", zIndex: 5, background: "rgba(0,0,0,0.65)", color: "#FFFFFF", padding: "5px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>VOOR</div>
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${split}%)` }}>
        <img src={afterSrc} alt="Na" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: afterPosition }} draggable={false} />
        <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 5, background: "#9BCB6C", color: "#1A1A1A", padding: "5px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>NA ✓</div>
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, width: "2px", left: `${split}%`, background: "rgba(255,255,255,0.75)", zIndex: 10, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "36px", height: "36px", borderRadius: "50%", background: "#FFFFFF", border: "2px solid #9BCB6C", boxShadow: "0 2px 8px rgba(0,0,0,0.18)", display: "flex", alignItems: "center", justifyContent: "center", gap: "2px" }}>
          <ChevronLeft style={{ width: "12px", height: "12px", color: "#9BCB6C" }} />
          <ChevronRight style={{ width: "12px", height: "12px", color: "#9BCB6C" }} />
        </div>
      </div>
    </div>
  );
}

export default function RealisatiesPage() {
  const [homeHovered, setHomeHovered] = useState(false);

  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "120px", paddingBottom: "24px" }}>
        <div className="site-wrap">
          <p style={{ fontSize: "13px", color: "#9BCB6C", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link
              href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{ color: homeHovered ? "#1A1A1A" : "#9BCB6C", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>›</span>
            <span style={{ color: "#9BCB6C" }}>Realisaties</span>
          </p>
          <h1 className="leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#1A1A1A", marginBottom: "32px" }}>
            Onze realisaties spreken
            <span style={{ color: "#9BCB6C" }}> voor zich.</span>
          </h1>

          {/* Stats bar */}
          <div style={{ display: "flex", background: "#F7F8F6", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "32px 48px", marginTop: "120px", marginBottom: "32px" }}>
            {[
              { value: "55+",  label: "afgewerkte projecten" },
              { value: "100%", label: "eigen uitvoering" },
              { value: "5★",   label: "gemiddelde beoordeling" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center"
                style={{ flex: 1, borderLeft: i > 0 ? "1px solid #E5E7EB" : "none", padding: "0 32px" }}>
                <p className="font-black leading-none"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#9BCB6C", fontSize: "2rem", marginBottom: "8px" }}>
                  {s.value}
                </p>
                <p className="text-sm" style={{ color: "#555555" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Large before/after slider ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "48px", paddingBottom: "0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px" }}>
          <LargeSlider />
        </div>
      </section>

      {/* ── Project description ── */}
      <section style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1000px", margin: "24px auto", padding: "0 40px" }}>
          <div style={{ background: "#E3F2D5", borderRadius: "16px", padding: "40px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "24px", color: "#1A1A1A", marginBottom: "16px", letterSpacing: "-0.01em" }}>
              Dakreiniging in Schilde
            </h2>
            <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "16px", color: "#555555", lineHeight: 1.7, marginBottom: "16px" }}>
              Dit dak in Schilde was volledig begroeid met mos en algen, dat zie je aan de zwarte kleur van de pannen. Na het reinigen is de zwarte kleur volledig verdwenen en hebben de pannen terug hun oorspronkelijke kleur.
            </p>
            <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "16px", color: "#555555", lineHeight: 1.7 }}>
              Ook de kleine details worden meegenomen: vuil rond de velux en verstopte dakgoten pakken we grondig aan. Zo vermijd je vochtproblemen en verstoppingen achteraf.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2 small sliders ── */}
      <section style={{ background: "#FFFFFF", paddingBottom: "0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <SmallSlider beforeSrc="/images/Velux%20voor%201.0.png" afterSrc="/images/Velux%20na%201.0.png" beforePosition="center center" afterPosition="center center" />
              <p style={{ marginTop: "14px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>Velux reiniging</p>
            </div>
            <div>
              <SmallSlider beforeSrc="/images/Goot%20voor.JPEG" afterSrc="/images/Goot%20na.JPEG" />
              <p style={{ marginTop: "14px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>Dakgoot reiniging</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Voor & Na foto grid ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "120px", paddingBottom: "64px" }}>
        <div className="site-wrap">
          <h2 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: "40px" }}>
            Meer realisaties
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {voorNaPhotos.map((p, i) => (
              <div key={i} className="relative overflow-hidden"
                style={{ borderRadius: "12px", aspectRatio: "4/3", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <img src={p.src} alt={p.caption} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold"
                  style={{ background: p.before ? "rgba(0,0,0,0.65)" : "#9BCB6C", color: p.before ? "#FFFFFF" : "#1A1A1A", letterSpacing: "0.08em" }}>
                  {p.label}
                </div>
                <p className="absolute bottom-3 left-3 text-white text-xs font-semibold" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                  {p.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="site-wrap">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 text-center sm:text-left"
            style={{ background: "#9BCB6C", borderRadius: "16px" }}>
            <div>
              <p className="font-black text-xl mb-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                Wil u ook zulke resultaten?
              </p>
              <p className="text-sm" style={{ color: "#2A2A2A" }}>
                Vraag een vrijblijvende richtprijs aan bij Yannick.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/#contact" className="inline-flex items-center gap-2"
                style={{ background: "#FFFFFF", color: "#111111", borderRadius: "8px", padding: "12px 24px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Bereken uw richtprijs
              </Link>
              <a href="tel:+32468352869" className="inline-flex items-center gap-2"
                style={{ background: "#1A1A1A", color: "#FFFFFF", borderRadius: "8px", padding: "12px 24px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                <Phone className="w-4 h-4" /> +32 468 35 28 69
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
