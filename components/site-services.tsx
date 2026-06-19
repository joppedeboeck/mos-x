"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Droplets, Shield, CalendarCheck, LayoutGrid, ArrowRight } from "lucide-react";

const services = [
  {
    id: "dak-reinigen",
    title: "Dakreiniging",
    imgSubtitle: "Verwijderen van mos, algen en vuil.",
    href: "/diensten/dakontmossing",
    img: "/images/dak-reinigen.webp",
    video: "/videos/Dakreiniging_yannick.mp4",
    Icon: Droplets,
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
    imgSubtitle: "Bescherming en vernieuwing.",
    href: "/diensten/dakcoating",
    img: "/images/dak-coaten.webp",
    video: "/videos/Dakcoating.mp4",
    Icon: Shield,
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
    imgSubtitle: "Jaarlijkse controle en onderhoud.",
    href: "/contact",
    img: "/images/dakabonnement.webp",
    video: null,
    Icon: CalendarCheck,
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
  const { Icon } = s;

  return (
    <Link
      href={s.href}
      data-service={s.id}
      className="group flex flex-col service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "0 4px 24px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      {/* Media area */}
      <div className="relative overflow-hidden" style={{ height: "380px", borderRadius: "12px 12px 0 0" }}>
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
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "60%",
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, transparent 70%)",
          zIndex: 1,
        }} />
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10" style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}>
          {/* Green icon circle */}
          <div style={{
            flexShrink: 0,
            width: "36px", height: "36px",
            background: "#9BCB6C",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "2px",
          }}>
            <Icon size={18} color="#FFFFFF" strokeWidth={2} />
          </div>
          <div>
            <p className="font-bold text-xl leading-tight"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: hovered ? "#9BCB6C" : "#FFFFFF", transition: "color 200ms ease" }}>
              {s.title}
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-inter), system-ui, sans-serif", marginTop: "2px" }}>
              {s.imgSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col" style={{ padding: "24px", flex: 1 }}>
        {/* Description */}
        <p style={{
          fontSize: "14px", lineHeight: 1.65, color: "#555555",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          marginBottom: "20px", textAlign: "left",
        }}>
          {s.desc}
        </p>

        {/* Checkmarks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {s.checks.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{
                flexShrink: 0,
                width: "18px", height: "18px",
                background: "#9BCB6C",
                borderRadius: "50%",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "11px", color: "#FFFFFF", fontWeight: 700,
                marginTop: "1px",
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
        <div style={{ marginTop: "auto", textAlign: "left" }}>
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
    <section className="site-pad" id="diensten" style={{
      position: "relative",
      background: "#0B0F0C",
      overflow: "hidden",
    }}>
      {/* Background photo — independently positioned */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/images/diensten-bg.jpg')",
        backgroundSize: "auto 100%",
        backgroundPosition: "115% center",
        zIndex: 0,
      }} />

      {/* Gradient overlay — fades photo into dark left side */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, #0B0F0C 0%, #0B0F0C 70%, rgba(11,15,12,0.80) 80%, rgba(11,15,12,0.45) 90%, rgba(11,15,12,0.35) 100%)",
        zIndex: 1,
      }} />

      {/* Green radial glow */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(155,203,108,0.12) 0%, transparent 70%)",
        left: "-150px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        zIndex: 2,
      }} />

      <div className="site-wrap" style={{ position: "relative", zIndex: 3 }}>

        {/* Header */}
        <div className="mb-14" style={{ textAlign: "center" }}>
          <span className="site-eyebrow mb-4" style={{ color: "#9BCB6C" }}>Onze diensten</span>
          <h2 className="font-bold leading-tight"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.028em", color: "#FFFFFF" }}>
            Alles voor een <span style={{ color: "#9BCB6C" }}>gezond</span> dak.
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
          <Link href="/diensten" className="inline-flex items-center"
            style={{ border: "1.5px solid #9BCB6C", color: "#FFFFFF", background: "transparent", borderRadius: "10px", padding: "14px 28px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", transition: "background 200ms ease", gap: "12px" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#9BCB6C"; (e.currentTarget.querySelector(".btn-grid-icon") as HTMLElement).style.color = "#FFFFFF"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; (e.currentTarget.querySelector(".btn-grid-icon") as HTMLElement).style.color = "#9BCB6C"; }}
          >
            <LayoutGrid className="btn-grid-icon" size={16} style={{ color: "#9BCB6C", transition: "color 200ms ease", flexShrink: 0 }} />
            Alle diensten bekijken
            <ArrowRight size={16} style={{ flexShrink: 0 }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
