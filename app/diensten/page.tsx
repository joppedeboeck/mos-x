"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

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

      <div className="flex flex-col" style={{ padding: "24px", flex: 1 }}>
        <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#555555", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "20px" }}>
          {s.desc}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {s.checks.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: "#9BCB6C", fontWeight: 700, fontSize: "15px", lineHeight: 1.4, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "13px", color: "#444444", lineHeight: 1.5, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto" }}>
          <span style={{ color: "#9BCB6C", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{s.link}</span>
        </div>
      </div>
    </Link>
  );
}

export default function DienstenPage() {
  const [homeHovered, setHomeHovered] = useState(false);

  return (
    <PageLayout>

      {/* ── Page header ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "120px", paddingBottom: "24px" }}>
        <div className="site-wrap">
          {/* Breadcrumb */}
          <p style={{ fontSize: "13px", color: "#545454", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link
              href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{ color: homeHovered ? "#1A1A1A" : "#9BCB6C", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>›</span>
            <span style={{ color: "#9BCB6C" }}>Diensten</span>
          </p>
          <h1 className="leading-tight" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#1A1A1A", marginBottom: "10px", lineHeight: 1.15 }}>
            Onze <span style={{ color: "#9BCB6C" }}>diensten</span>
          </h1>
          <p style={{ fontSize: "17px", color: "#545454", lineHeight: 1.6, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            Professionele oplossingen voor elk type dak.
          </p>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="site-pad" style={{ background: "#FFFFFF" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA block ── */}
      <section style={{ background: "#FFFFFF", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <div style={{
            background: "#9BCB6C",
            borderRadius: "16px",
            padding: "32px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
          }}>
            {/* Text */}
            <div style={{ flex: 1, minWidth: "260px" }}>
              <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#1A1A1A", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.25 }}>
                Twijfelt u welke oplossing bij uw dak past?
              </p>
              <p style={{ fontSize: "14px", color: "#2A2A2A", lineHeight: 1.5, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Yannick bekijkt het graag met u. Geen verkooppraatjes, gewoon eerlijk advies.
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px", flexShrink: 0, flexWrap: "wrap" }}>
              <a
                href="https://wa.me/32468352869"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#FFFFFF", color: "#1A1A1A",
                  borderRadius: "8px", padding: "12px 20px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat met Yannick
              </a>
              <a
                href="tel:+32468352869"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#1A1A1A", color: "#FFFFFF",
                  borderRadius: "8px", padding: "12px 20px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <Phone size={15} />
                +32 468 35 28 69
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
