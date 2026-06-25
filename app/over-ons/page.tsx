"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle, Phone, Droplets, Clock, User, Calendar } from "lucide-react";
import PageLayout from "@/components/page-layout";

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

const bullets = [
  "Één vast aanspreekpunt van advies tot oplevering.",
  "Volledig verzekerd. Inclusief burgerlijke aansprakelijkheid.",
  "Tot 10 jaar garantie op dakcoating",
  "Actief in Antwerpen, Oost-Vlaanderen, Vlaams-Brabant en Limburg.",
  "Eerlijke prijs vooraf, geen verrassingen achteraf",
];

type Card = {
  title: string;
  body: string;
  subBody?: string[];
  bodyLines?: string[];
  checks?: string[];
};

const cards: Card[] = [
  {
    title: "Wat klanten waarderen",
    body: "Je weet vooraf wat je dak nodig heeft, wat het kost en wie het werk uitvoert. Geen verrassingen achteraf.",
    subBody: [
      "Klanten komen voor een reiniging of coating. Ze blijven omdat MOS-X verder kijkt dan de opdracht van vandaag.",
      "Jouw dak is een van de grootste investeringen van je woning. Wij zorgen ervoor dat het dat ook blijft.",
      "Na elk bezoek ontvang je een volledig rapport over de staat van je dak en wat er uitgevoerd werd.",
      "Planning verloopt snel en flexibel, zodat je niet lang hoeft te wachten.",
    ],
  },
  {
    title: "Waarom MOS-X anders werkt",
    body: "",
    bodyLines: [
      "De meeste dakbedrijven worden pas gebeld wanneer er een probleem is.",
      "MOS-X werkt anders. Wij reinigen, beschermen en onderhouden je dak zodat het jaar na jaar in topconditie blijft.",
      "Zo vermijd je lekkages, gebroken dakpannen, verstopte dakgoten en vochtproblemen voor ze duur worden.",
      "Daarom kijken we niet alleen naar vandaag, maar ook naar wat je dak nodig heeft om proper, beschermd en verzorgd te blijven.",
    ],
  },
];

function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const c55 = useCountUp(55, active);
  const c24 = useCountUp(24, active);
  const c3  = useCountUp(3,  active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "#F7F8F6", paddingBottom: "48px" }}>
      <div className="site-wrap">
        <div ref={ref} className="over-ons-stats-wrap" style={{ display: "flex", background: "#FFFFFF", border: "1px solid #9BCB6C", borderRadius: "16px", padding: "32px 48px", flexWrap: "wrap", boxShadow: "0 2px 16px rgba(155,203,108,0.12)" }}>
          {[
            { value: `${c55}+`, label: "Afgewerkte daken",        icon: <Droplets size={24} color="#9BCB6C" /> },
            { value: `${c24}u`, label: "Reactie op aanvragen",    icon: <Clock    size={24} color="#9BCB6C" /> },
            { value: "100%",    label: "Vrijblijvend advies",     icon: <User     size={24} color="#9BCB6C" /> },
            { value: "1",       label: "Aanspreekpunt",           icon: <Calendar size={24} color="#9BCB6C" /> },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center"
              style={{ flex: "1 1 0", minWidth: "120px", borderLeft: i > 0 ? "1px solid #E5E7EB" : "none", padding: "0 32px" }}>
              <div style={{ marginBottom: "10px" }}>{s.icon}</div>
              <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, color: "#9BCB6C", fontSize: "2rem", lineHeight: 1, marginBottom: "8px" }}>
                {s.value}
              </p>
              <p style={{ fontSize: "13px", color: "#555555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OverOnsPage() {
  const [homeHovered, setHomeHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const [waHovered, setWaHovered] = useState(false);

  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section style={{ background: "#F7F8F6", paddingTop: "120px", paddingBottom: "80px" }}>
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
          <h1 className="leading-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#1A1A1A" }}>
            Je dak in <span style={{ color: "#9BCB6C" }}>ervaren handen.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "18px", color: "#555555" }}>
            Persoonlijk advies en een plan om je dak jarenlang proper, beschermd en verzorgd te houden.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <StatsBar />

      {/* ── Het verhaal ── */}
      <section className="site-pad" style={{ background: "#F7F8F6", paddingBottom: "0" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Tekst */}
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9BCB6C", marginBottom: "16px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                Waarom klanten voor Yannick kiezen
              </p>
              <h2 className="font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: "2rem", letterSpacing: "-0.02em", color: "#111111" }}>
                Meer dan een dakreiniging.
                <br />
                <span style={{ color: "#9BCB6C" }}>Een plan voor de lange termijn.</span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#555555", marginBottom: "14px" }}>
                Wanneer je contact opneemt met MOS-X, heb je één vast aanspreekpunt: Yannick.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#555555", marginBottom: "14px" }}>
                Hij bekijkt je dak persoonlijk, geeft advies op maat en blijft jouw vaste aanspreekpunt van advies tot oplevering.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#555555" }}>
                Je weet vooraf wat er nodig is, wat het kost en wat je mag verwachten. Geen verrassingen achteraf. Gewoon duidelijk advies, een eerlijke prijs en een verzorgd resultaat.
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
                <img src="/images/Yannick_foto_3_0.png" alt="Yannick" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "left 25%" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-black text-white text-xl" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                    Yannick
                  </p>
                  <p className="text-sm" style={{ color: "#9BCB6C" }}>Oprichter &amp; Vakspecialist MOS-X</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Missie & Visie ── */}
      <section style={{ background: "#F7F8F6", paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {cards.map((c, i) => (
              <div key={i} className="rounded-2xl p-8"
                style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
                <h3 className="font-black mb-4"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#9BCB6C", fontSize: "1.1rem" }}>
                  {c.title}
                </h3>
                {"bodyLines" in c && c.bodyLines ? (
                  <p className="text-sm leading-relaxed" style={{ color: "#555555", marginBottom: "0" }}>
                    {c.bodyLines.map((line, j) => (
                      <span key={j}>{line}{j < c.bodyLines!.length - 1 && <><br /><br /></>}</span>
                    ))}
                  </p>
                ) : (
                  <p className="text-sm leading-relaxed" style={{ color: "#555555", marginBottom: (c.checks || ("subBody" in c && c.subBody)) ? "12px" : "0" }}>{c.body}</p>
                )}
                {"subBody" in c && c.subBody && (
                  Array.isArray(c.subBody) ? (
                    (c.subBody as string[]).map((sb, j) => (
                      <p key={j} className="text-sm leading-relaxed" style={{ color: "#555555", marginBottom: "12px" }}>{sb}</p>
                    ))
                  ) : (
                    <p className="text-sm leading-relaxed" style={{ color: "#555555", marginBottom: "16px" }}>{c.subBody as string}</p>
                  )
                )}
                {c.checks && (
                  <ul className="space-y-2">
                    {c.checks.map((ch, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#9BCB6C" }} />
                        <span className="text-sm" style={{ color: "#555555" }}>{ch}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#F7F8F6", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <div style={{
            background: "#0B0F0C",
            border: "1px solid #9BCB6C",
            borderRadius: "16px",
            padding: "32px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 100% 100%, rgba(155,203,108,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ flex: 1, minWidth: "260px", position: "relative", zIndex: 1 }}>
              <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.25 }}>
                Benieuwd wat <span style={{ color: "#9BCB6C" }}>jouw dak</span> nodig heeft?
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Persoonlijk advies van Yannick. Geen verkooppraatjes. Geen verrassingen.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexShrink: 0, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <a
                href="https://wa.me/32468352869"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: waHovered ? "#7AB54E" : "#9BCB6C", color: "#FFFFFF",
                  borderRadius: "8px", padding: "12px 20px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  whiteSpace: "nowrap", transition: "background-color 0.2s ease",
                }}
                onMouseEnter={() => setWaHovered(true)}
                onMouseLeave={() => setWaHovered(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Stuur Yannick een bericht
              </a>
              <a
                href="tel:+32468352869"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "transparent",
                  border: phoneHovered ? "1px solid #9BCB6C" : "1px solid rgba(155,203,108,0.5)",
                  color: phoneHovered ? "#9BCB6C" : "#FFFFFF",
                  borderRadius: "8px", padding: "12px 20px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  whiteSpace: "nowrap", transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={() => setPhoneHovered(true)}
                onMouseLeave={() => setPhoneHovered(false)}
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
