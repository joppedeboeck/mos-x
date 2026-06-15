"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

const voorNaPhotos = [
  { src: "/images/rood-dak-voor.jpg",  label: "VOOR", before: true,  caption: "Antimos coating, Rood dak" },
  { src: "/images/olen-voor.png",      label: "VOOR", before: true,  caption: "Dakreiniging en coating, Olen" },
  { src: "/images/herentals-voor.png", label: "VOOR", before: true,  caption: "Dakreiniging, Herentals" },
  { src: "/images/rood-dak-na.jpg",    label: "NA",   before: false, caption: "Antimos coating, Rood dak" },
  { src: "/images/olen-na.png",        label: "NA",   before: false, caption: "Dakreiniging en coating, Olen" },
  { src: "/images/herentals-na.png",   label: "NA",   before: false, caption: "Dakreiniging, Herentals" },
];

const projects = [
  { type: "Dakontmossing + Coating", location: "Gent",        year: "2024", m2: "175 m²", desc: "Zwaar begroeide keramische pannen. Bioreiniging gevolgd door transparante dakcoating. 15 jaar garantie.", before: "img-before-roof",   after: "img-after-roof" },
  { type: "Dakcoating",              location: "Aalst",        year: "2024", m2: "145 m²", desc: "Matige mosgroei op pannendak. Reiniging + beschermende coating aangebracht. Waterafstoottest geslaagd.",   before: "img-before-roof",   after: "img-after-roof" },
  { type: "Gevelreiniging",          location: "Dendermonde",  year: "2023", m2: "120 m²", desc: "Zwarte aanslag op baksteengevel. Volledig gereinigd met zachte biologische methode. Geen schade.",         before: "img-before-facade", after: "img-after-facade" },
  { type: "Dakontmossing",           location: "Sint-Niklaas", year: "2024", m2: "195 m²", desc: "Matig vervuilde leien. Biologische behandeling + gootreiniging inbegrepen.",                               before: "img-before-roof",   after: "img-after-roof" },
  { type: "Dakontmossing + Coating", location: "Ronse",        year: "2024", m2: "160 m²", desc: "Ouder pannendak zwaar vervuild. Behandeld en gecoat. Klant ontving fotobewijs + onderhoudsadvies.",        before: "img-before-roof",   after: "img-after-roof" },
  { type: "Plat dak reiniging",      location: "Wetteren",     year: "2023", m2: "85 m²",  desc: "EPDM plat dak met mosgroei en verstopte afvoer. Drukloos gereinigd, afvoer vrijgemaakt.",                  before: "img-before-facade", after: "img-after-facade" },
];

function SliderCard({ p }: { p: typeof projects[0] }) {
  const [split, setSplit] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (cx: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setSplit(Math.min(92, Math.max(8, ((cx - r.left) / r.width) * 100)));
  };

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#FFFFFF", border: "1px solid #EEEEEE", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
    >
      {/* Drag slider */}
      <div
        ref={ref}
        className="relative h-64 cursor-col-resize select-none overflow-hidden"
        onMouseDown={() => (dragging.current = true)}
        onMouseMove={e => { if (dragging.current) move(e.clientX); }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={() => (dragging.current = true)}
        onTouchMove={e => move(e.touches[0].clientX)}
        onTouchEnd={() => (dragging.current = false)}
      >
        {/* After */}
        <div className={`absolute inset-0 ${p.after}`}>
          <div className="absolute bottom-3 right-3">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-bold"
              style={{ background: "#9BCB6C", color: "#1A1A1A", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              NA ✓
            </span>
          </div>
        </div>
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
          <div className={`absolute inset-0 ${p.before}`} />
          <div className="absolute bottom-3 left-3">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-bold"
              style={{ background: "#111111", color: "#FFFFFF", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              VOOR
            </span>
          </div>
        </div>
        {/* Divider handle */}
        <div
          className="absolute top-0 bottom-0 w-px z-20 pointer-events-none"
          style={{ left: `${split}%`, background: "rgba(255,255,255,0.85)" }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center gap-0.5"
            style={{ border: "2px solid #9BCB6C", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
            <ChevronLeft className="w-3 h-3" style={{ color: "#1A1A1A" }} />
            <ChevronRight className="w-3 h-3" style={{ color: "#1A1A1A" }} />
          </div>
        </div>
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] pointer-events-none transition-opacity duration-500"
          style={{ fontFamily: "var(--font-montserrat)", color: "rgba(255,255,255,0.7)", opacity: split === 50 ? 1 : 0 }}
        >
          ← sleep →
        </div>
      </div>

      {/* Card info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <span
              className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold mb-2"
              style={{ background: "#F0F7E8", color: "#5A9E2F", fontFamily: "var(--font-montserrat)" }}
            >
              {p.type}
            </span>
            <p className="font-bold text-sm" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
              {p.location}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs" style={{ color: "#AAAAAA" }}>{p.year}</p>
            <p className="font-bold text-sm" style={{ color: "#9BCB6C", fontFamily: "var(--font-montserrat)" }}>{p.m2}</p>
          </div>
        </div>
        <p className="text-xs leading-relaxed mt-1" style={{ color: "#555555" }}>{p.desc}</p>
      </div>
    </div>
  );
}

export default function RealisatiesPage() {
  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: "#111111", paddingTop: "144px", paddingBottom: "80px" }}>
        <div className="site-wrap relative" style={{ zIndex: 10 }}>
          <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9BCB6C", marginBottom: "16px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Voor &amp; Na
          </p>
          <h1 className="text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Het resultaat spreekt
            <span style={{ color: "#9BCB6C" }}> voor zichzelf.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Sleep de schuifregelaar om het verschil te zien. Echte opdrachten in Oost-Vlaanderen, geen digitale nabewerking.
          </p>
        </div>
        {/* Wave */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0, zIndex: 20 }}>
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "50px" }}>
            <path d="M0,0 C360,80 1080,80 1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </section>

      {/* ── Voor & Na foto grid ── */}
      <section className="site-pad" style={{ background: "#FFFFFF" }}>
        <div className="site-wrap">
          <div className="text-center mb-12">
            <span className="site-eyebrow mb-4">Voor &amp; Na</span>
            <h2 className="font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", color: "#111111" }}>
              Onze Resultaten Spreken Voor Zich
            </h2>
            <p style={{ color: "#555555", fontSize: "16px" }}>Echte opdrachten. Geen stockbeelden.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {voorNaPhotos.map((p, i) => (
              <div key={i} className="relative overflow-hidden"
                style={{ borderRadius: "12px", aspectRatio: "4/3", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <img src={p.src} alt={p.caption} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold text-white"
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

      {/* ── Slider gallery ── */}
      <section className="site-pad" style={{ background: "#F8F8F8" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {projects.map((p, i) => <SliderCard key={i} p={p} />)}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 overflow-hidden rounded-2xl mb-14">
            {[
              { value: "247+", label: "afgewerkte opdrachten" },
              { value: "100%", label: "drone-geïnspecteerd" },
              { value: "5★",   label: "gemiddelde beoordeling" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center rounded-2xl"
                style={{ background: "#FFFFFF", border: "1px solid #EEEEEE" }}>
                <p className="font-black text-2xl mb-1 leading-none"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#9BCB6C" }}>
                  {s.value}
                </p>
                <p className="text-xs" style={{ color: "#555555" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 text-center sm:text-left"
            style={{ background: "#9BCB6C", borderRadius: "16px" }}>
            <div>
              <p className="font-black text-xl mb-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                Wil u ook zulke resultaten?
              </p>
              <p className="text-sm" style={{ color: "#2A2A2A" }}>
                Vraag een gratis drone-inspectie aan, volledig vrijblijvend.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-2"
                style={{ background: "#FFFFFF", color: "#111111", borderRadius: "8px", padding: "12px 24px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Gratis diagnose aanvragen <ArrowRight className="w-4 h-4" />
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
