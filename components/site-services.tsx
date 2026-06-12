"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "dak-reinigen",
    title: "Dak reinigen",
    href: "/diensten/dakontmossing",
    img: "/images/dak-reinigen.webp",
    video: "/videos/Dakreiniging_yannick.mp4",
  },
  {
    id: "dak-coaten",
    title: "Dak coaten",
    href: "/diensten/dakcoating",
    img: "/images/dak-coaten.webp",
    video: null,
  },
  {
    id: "dakabonnement",
    title: "Dakabonnement",
    href: "/contact",
    img: "/images/dakabonnement.webp",
    video: null,
  },
];

function ServiceCard({ s }: { s: typeof services[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    if (!videoRef.current) return;
    videoRef.current.style.opacity = "1";
    videoRef.current.play();
  };

  const handleLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.style.opacity = "0";
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      href={s.href}
      data-service={s.id}
      className="group flex flex-col service-card"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "16px",
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={s.video ? handleEnter : undefined}
      onMouseLeave={s.video ? handleLeave : undefined}
    >
      {/* Media area */}
      <div
        className="relative overflow-hidden"
        style={{ height: "280px", borderRadius: "12px 12px 0 0" }}
      >
        {/* Static image — always present */}
        <img
          src={s.img}
          alt={s.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transition: "transform 400ms ease" }}
        />

        {/* Video overlay — only for dak-reinigen */}
        {s.video && (
          <video
            ref={videoRef}
            src={s.video}
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              opacity: 0,
              transition: "opacity 0.4s ease",
            }}
          />
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(26,26,26,0.08) 0%, rgba(26,26,26,0.70) 100%)",
            zIndex: 1,
          }}
        />

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p
            className="font-bold text-white text-xl leading-tight"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
          >
            {s.title}
          </p>
        </div>
      </div>

      {/* Meer info */}
      <div className="p-5">
        <div className="flex items-center gap-1.5" style={{ color: "#9BCB6C", fontSize: "14px", fontWeight: 600 }}>
          Meer info
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function SiteServices() {
  return (
    <section className="site-pad" id="diensten" style={{ background: "#F7F8F6" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="site-eyebrow mb-4">Onze diensten</span>
          <h2
            className="font-bold leading-tight mb-3"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            Alles voor een gezond dak.
          </h2>
          <p
            className="font-semibold"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              color: "#9BCB6C",
            }}
          >
            Altijd met diagnose vooraf.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {services.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 site-btn-green-outline"
            style={{
              border: "1.5px solid #9BCB6C",
              color: "#9BCB6C",
              background: "#FFFFFF",
              borderRadius: "8px",
              padding: "0.875rem 1.75rem",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
            }}
          >
            Alle diensten bekijken <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
