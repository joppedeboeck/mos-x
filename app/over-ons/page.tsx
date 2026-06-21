"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, Star } from "lucide-react";
import PageLayout from "@/components/page-layout";

const stats = [
  { value: "3+",   label: "jaar ervaring" },
  { value: "55+",  label: "daken gereinigd" },
  { value: "100%", label: "tevreden klanten" },
  { value: "5★",   label: "gemiddelde rating" },
];

const bullets = [
  "Geen onderaannemers, Yannick voert elk werk persoonlijk uit",
  "Volledig verzekerd, burgerlijke aansprakelijkheid inbegrepen",
  "5 jaar garantie op dakcoating behandelingen",
  "Actief in Antwerpen, Oost-Vlaanderen, Vlaams-Brabant en Limburg",
  "Eerlijke prijs vooraf, geen verrassingen achteraf",
];

const cards = [
  {
    title: "Onze missie",
    body: "Elke huiseigenaar verdient een eerlijk oordeel over zijn dak, zonder verkooppraatjes. MOS-X staat voor transparantie: u weet op voorhand wat uw dak nodig heeft en wat het kost. Geen verrassingen achteraf.",
  },
  {
    title: "Onze visie",
    body: "Een dak moet jarenlang meegaan zonder gedoe. Wij geloven in preventief onderhoud boven dure herstellingen. Door eerlijk te adviseren en vakkundig te werken, bouwen wij aan langdurige vertrouwensrelaties met elke klant.",
  },
];

export default function OverOnsPage() {
  const [homeHovered, setHomeHovered] = useState(false);

  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <p style={{ fontSize: "13px", color: "#9BCB6C", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link
              href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{ color: homeHovered ? "#1A1A1A" : "#9BCB6C", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>›</span>
            <span style={{ color: "#9BCB6C" }}>Over ons</span>
          </p>
          <h1 className="leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#1A1A1A", whiteSpace: "nowrap" }}>
            Uw dak in <span style={{ color: "#9BCB6C" }}>ervaren handen.</span>
          </h1>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ background: "#FFFFFF", paddingBottom: "48px" }}>
        <div className="site-wrap">
          <div style={{ display: "flex", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "32px 48px" }}>
            {stats.map((s, i) => (
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

      {/* ── Het verhaal ── */}
      <section className="site-pad" style={{ background: "#FFFFFF", paddingBottom: "0" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Tekst */}
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9BCB6C", marginBottom: "16px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                Het verhaal
              </p>
              <h2 className="font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", color: "#111111" }}>
                Geen groot bedrijf.
                <br />
                <span style={{ color: "#9BCB6C" }}>Eén vakman. Eén belofte.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#555555" }}>
                MOS-X is opgericht door Yannick, een dakspecialist met meer dan 10 jaar ervaring in dakreiniging en dakcoating. Wat hem onderscheidt? Hij werkt altijd persoonlijk, zonder onderaannemers, en geeft u op voorhand een eerlijke prijs.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#555555" }}>
                Geen onderaannemers. Geen verkoopdruk. Yannick staat met zijn naam op elke opdracht. Dat betekent eerlijk advies, ook als uw dak niets nodig heeft.
              </p>
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#9BCB6C" }} />
                    <span className="text-sm" style={{ color: "#555555" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yannick card */}
            <div className="relative">
              <div
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative"
                style={{ border: "1px solid #EEEEEE", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
                <img src="/images/Foto_Yannick.png" alt="Yannick" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-black text-white text-xl" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                    Yannick
                  </p>
                  <p className="text-sm" style={{ color: "#9BCB6C" }}>Oprichter &amp; Vakspecialist MOS-X</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.60)" }}>Antwerpen · Oost-Vlaanderen · Vlaams-Brabant · Limburg</p>
                </div>
              </div>
              {/* Review badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-3 rounded-xl"
                style={{ background: "#FFFFFF", border: "1px solid #EEEEEE", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#F9A825" }} />
                  ))}
                </div>
                <span className="text-xs font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "#111111" }}>
                  12 reviews · 100%
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Missie & Visie ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {cards.map((c, i) => (
              <div key={i} className="rounded-2xl p-8"
                style={{ background: "#FFFFFF", border: "1px solid #EEEEEE", borderRadius: "16px" }}>
                <h3 className="font-black mb-4"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#9BCB6C", fontSize: "1.1rem" }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>{c.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
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
            <div style={{ flex: 1, minWidth: "260px" }}>
              <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#1A1A1A", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.25 }}>
                Wil u kennismaken met Yannick?
              </p>
              <p style={{ fontSize: "14px", color: "#2A2A2A", lineHeight: 1.5, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Geen verkooppraatjes. Gewoon eerlijk advies en een vaste prijs vooraf.
              </p>
            </div>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
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
