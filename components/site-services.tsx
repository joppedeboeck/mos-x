"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const services = [
  {
    id: "dak-reinigen",
    title: "Dakreiniging",
    href: "/diensten/dakontmossing",
    img: "/images/dak-reinigen.webp",
    video: "/videos/Dakreiniging_yannick.mp4",
    desc: "Mos, algen en vuil verwijderen voor een proper en gezond dak.",
    checks: [
      "Proper dak in plaats van mos en vervuiling",
      "Meer uitstraling voor uw woning",
      "Langere levensduur van uw dak",
    ],
    link: "Meer over dakreiniging →",
  },
  {
    id: "dak-coaten",
    title: "Dakcoating",
    href: "/diensten/dakcoating",
    img: "/images/dak-coaten.webp",
    video: "/videos/Dakcoating.mp4",
    desc: "Geef uw dak een tweede leven zonder een dure renovatie.",
    checks: [
      "Dak oogt opnieuw als nieuw",
      "Bescherming tegen regen, vorst en UV",
      "Uitstel van een dure renovatie",
    ],
    link: "Meer over dakcoating →",
  },
  {
    id: "dakabonnement",
    title: "Dakabonnement",
    href: "/contact",
    img: "/images/dakabonnement.webp",
    video: null,
    desc: "Jaarlijkse controle en onderhoud voor blijvende gemoedsrust.",
    checks: [
      "Geen verrassingen meer",
      "Jaarlijkse controle door een specialist",
      "Problemen oplossen vóór ze duur worden",
    ],
    link: "Ontdek het dakabonnement →",
  },
];

function ServiceCard({ s }: { s: typeof services[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={s.href}
      data-service={s.id}
      className="group flex flex-col service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "16px",
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Media area */}
      <div className="relative overflow-hidden" style={{ height: "300px", borderRadius: "12px 12px 0 0" }}>
        <img
          src={s.img}
          alt={s.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transition: "transform 400ms ease" }}
        />
        {s.video && (
          <video
            ref={videoRef}
            src={s.video}
            autoPlay muted loop playsInline
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 1 }}
          />
        )}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.08) 0%, rgba(26,26,26,0.70) 100%)", zIndex: 1 }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p className="font-bold text-xl leading-tight"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: hovered ? "#9BCB6C" : "#FFFFFF", transition: "color 200ms ease" }}>
            {s.title}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col" style={{ padding: "24px", flex: 1 }}>
        {/* Description */}
        <p style={{
          fontSize: "14px", lineHeight: 1.65, color: "#555555",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          marginBottom: "20px",
        }}>
          {s.desc}
        </p>

        {/* Checkmarks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {s.checks.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{
                color: "#9BCB6C", fontWeight: 700, fontSize: "15px",
                lineHeight: 1.4, flexShrink: 0,
              }}>✓</span>
              <span style={{
                fontSize: "13px", color: "#444444", lineHeight: 1.5,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Link */}
        <div style={{ marginTop: "auto" }}>
          <span style={{
            color: "#9BCB6C", fontSize: "14px", fontWeight: 600,
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          }}>
            {s.link}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function SiteServices() {
  return (
    <section className="site-pad" id="diensten" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(155,203,108,0.06) 0%, transparent 70%), #F7F8F6" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="site-eyebrow mb-4">Onze diensten</span>
          <h2 className="font-bold leading-tight"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.028em", color: "#1A1A1A" }}>
            Alles voor een gezond dak.
          </h2>
        </div>

        {/* 3-col grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {services.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Link href="/diensten" className="inline-flex items-center gap-2"
            style={{ border: "1.5px solid #9BCB6C", color: "#9BCB6C", background: "#FFFFFF", borderRadius: "8px", padding: "0.875rem 1.75rem", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", transition: "background 200ms ease, color 200ms ease" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#9BCB6C"; e.currentTarget.style.color = "#FFFFFF"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#9BCB6C"; }}
          >
            Alle diensten bekijken
          </Link>
        </div>
      </div>
    </section>
  );
}
