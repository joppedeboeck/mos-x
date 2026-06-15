"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

const services = [
  {
    title: "Dak reinigen",
    desc: "Professionele dakontmossing met hogedruk.",
    img: "/images/dak-reinigen.webp",
    href: "/diensten/dakontmossing",
  },
  {
    title: "Dak coaten",
    desc: "Dakcoating geeft uw dak een nieuwe uitstraling.",
    img: "/images/dak-coaten.webp",
    href: "/diensten/dakcoating",
  },
  {
    title: "Dakabonnement",
    desc: "Ontzorg uzelf met ons jaarlijks dakabonnement.",
    img: "/images/dakabonnement.webp",
    href: "/contact",
  },
];

export default function DienstenPage() {
  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: "#111111", paddingTop: "144px", paddingBottom: "80px" }}>
        <div className="site-wrap relative" style={{ zIndex: 10 }}>
          <p style={{
            fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.14em", color: "#9BCB6C", marginBottom: "16px",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          }}>
            Onze diensten
          </p>
          <h1 className="text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Professionele oplossingen
            <br />
            <span style={{ color: "#9BCB6C" }}>voor elk type dak.</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Elke opdracht start met een gratis drone-inspectie. Zo weet u exact wat uw dak nodig heeft, vóór u een beslissing neemt.
          </p>
        </div>
        {/* Wave */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0, zIndex: 20 }}>
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "50px" }}>
            <path d="M0,0 C360,80 1080,80 1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </section>

      {/* ── Service cards — verticaal ── */}
      <section className="site-pad" style={{ background: "#FFFFFF" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group flex flex-col"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Foto met title overlay */}
                <div className="relative overflow-hidden" style={{ height: "240px" }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transition: "transform 400ms ease" }}
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.08) 0%, rgba(26,26,26,0.70) 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <p className="font-bold text-white text-xl leading-tight"
                      style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {s.title}
                    </p>
                  </div>
                </div>

                {/* Tekst + meer info */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm mb-4" style={{ color: "#555555", lineHeight: 1.6, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                    {s.desc}
                  </p>
                  <div className="flex items-center gap-1.5 mt-auto" style={{ color: "#9BCB6C", fontSize: "14px", fontWeight: 600 }}>
                    Meer info
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA blok ── */}
      <section className="site-pad-sm" style={{ background: "#FFFFFF" }}>
        <div className="site-wrap">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-10"
            style={{ background: "#9BCB6C", borderRadius: "16px" }}>
            <div className="flex-1 text-center lg:text-left">
              <p className="font-black text-xl mb-2"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                Twijfelt u welke oplossing bij uw dak past?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#2A2A2A" }}>
                Yannick inspecteert uw dak gratis met een professionele drone en geeft u een eerlijk advies, zonder verkooppraatjes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-2"
                style={{ background: "#FFFFFF", color: "#111111", borderRadius: "8px", padding: "12px 24px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Gratis advies aanvragen <ArrowRight className="w-4 h-4" />
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
