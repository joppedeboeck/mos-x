"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, ArrowRight, ChevronDown, Search, Droplets, CloudRain, ShieldCheck, Home, ChevronRight, ChevronLeft, Leaf, Sparkles, Euro } from "lucide-react";
import BackLink from "@/components/back-link";
import PageLayout from "@/components/page-layout";

const steps = [
  { step: "STAP 01", Icon: Search,        title: "Nazicht & voorbereiding",           desc: "We controleren het dak, signaleren eventuele beschadigingen en plaatsen bladvangers om verstoppingen tijdens de reiniging te voorkomen." },
  { step: "STAP 02", Icon: Droplets,      title: "Professionele dakreiniging",        desc: "Met professionele stoom- en hogedrukapparatuur verwijderen we mos, algen en vervuiling grondig van het dak. De druk wordt afgestemd op het type dakbedekking zodat de reiniging doeltreffend én veilig verloopt." },
  { step: "STAP 03", Icon: ShieldCheck,   title: "Preventieve anti-mosbehandeling",  desc: "Na de reiniging brengen we een biologisch afbreekbare anti-mosbehandeling aan. Zo wordt nieuwe mosvorming afgeremd en blijft het dak langer proper." },
  { step: "STAP 04", Icon: Home,          title: "Reiniging rondom de woning",       desc: "Tijdens de werken kunnen mosresten op muren, ramen, terras of oprit terechtkomen. Daarom reinigen we de omgeving zorgvuldig zodat alles netjes wordt achtergelaten." },
  { step: "STAP 05", Icon: CloudRain,     title: "Dakgoten ledigen",                 desc: "We maken de dakgoten volledig leeg en spoelen indien nodig de afvoerleidingen door. Zo voorkomen we verstoppingen en kan regenwater opnieuw vlot wegstromen." },
];


const faqs = [
  { q: "Is hogedruk slecht voor een dak?", a: "Niet wanneer het correct wordt toegepast. Het type dak, de staat van de dakpannen en de juiste instellingen bepalen welke reinigingstechniek geschikt is. MOS-X gebruikt aangepaste technieken waarbij de druk wordt afgestemd op het dak, zodat het resultaat veilig én doeltreffend is." },
  { q: "Wanneer zie ik resultaat?", a: "Het grootste deel van het resultaat is onmiddellijk zichtbaar na de reiniging. Eventuele resterende vervuiling kan verder verdwijnen door regen en weersinvloeden." },
  { q: "Moet ik thuis zijn tijdens de behandeling?", a: "Voor de inspectie is dat handig. Tijdens de uitvoering zelf is dat meestal niet nodig." },
  { q: "Is een coating nodig na een reiniging?", a: "Niet altijd. Tijdens de inspectie krijg je eerlijk advies op basis van de staat van je dak. Soms volstaat een reiniging. Soms is een bijkomende bescherming interessant." },
  { q: "Hoe lang blijft mijn dak proper?", a: "Dat hangt af van de ligging van je woning, de hoeveelheid bomen rondom en de weersomstandigheden. Met een preventieve behandeling of MOS-X Dakzorg blijft je dak doorgaans langer proper en goed onderhouden." },
];


function VoorkomSlider() {
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
      style={{ position: "relative", width: "100%", height: "100%", minHeight: "400px", borderRadius: "20px", overflow: "hidden", cursor: "col-resize", userSelect: "none", boxShadow: "0 4px 32px rgba(0,0,0,0.12)" }}
      onMouseDown={() => (dragging.current = true)}
      onMouseMove={e => { if (dragging.current) move(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={() => (dragging.current = true)}
      onTouchMove={e => move(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img src="/images/IMG_5414.JPEG" alt="Voor behandeling" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} draggable={false} />
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${split}%)` }}>
        <img src="/images/IMG_5436.JPEG" alt="Na behandeling" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} draggable={false} />
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${split}%`, width: "2px", background: "rgba(255,255,255,0.85)", transform: "translateX(-50%)", pointerEvents: "none", zIndex: 10 }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40px", height: "40px", borderRadius: "50%", background: "#FFFFFF", border: "2px solid #9BCB6C", boxShadow: "0 2px 12px rgba(0,0,0,0.20)", display: "flex", alignItems: "center", justifyContent: "center", gap: "2px" }}>
          <ChevronLeft style={{ width: "12px", height: "12px", color: "#9BCB6C" }} />
          <ChevronRight style={{ width: "12px", height: "12px", color: "#9BCB6C" }} />
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "14px", left: "14px", background: "rgba(0,0,0,0.65)", color: "#fff", padding: "5px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", fontFamily: "var(--font-montserrat), system-ui, sans-serif", pointerEvents: "none", zIndex: 5 }}>VOOR</div>
      <div style={{ position: "absolute", bottom: "14px", right: "14px", background: "#9BCB6C", color: "#1A1A1A", padding: "5px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", fontFamily: "var(--font-montserrat), system-ui, sans-serif", pointerEvents: "none", zIndex: 5 }}>NA</div>
    </div>
  );
}

export default function DakontmossingPage() {
  const trustindexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = trustindexRef.current;
    if (!container) return;
    if (container.querySelector('script[src*="trustindex"]')) return;
    const s = document.createElement("script");
    s.async = true;
    s.defer = true;
    s.src = "https://cdn.trustindex.io/loader.js?1b15ba67596980480f76d1d0d69";
    container.appendChild(s);
  }, []);

  const [homeHovered, setHomeHovered]         = useState(false);
  const [dienstenHovered, setDienstenHovered] = useState(false);
  const [openFaq, setOpenFaq]                 = useState<number | null>(null);
  const [waHovered, setWaHovered]             = useState(false);
  const [phoneHovered, setPhoneHovered]       = useState(false);

  return (
    <PageLayout>

      {/* â"€â"€ Hero (light) â"€â"€ */}
      {/* Hero — two-col */}
      <section style={{ background: "#F7F8F6", paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="site-wrap">

          <BackLink href="/diensten" />

          {/* Breadcrumb */}
          <p style={{ fontSize: "13px", marginBottom: "28px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link
              href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{ color: homeHovered ? "#9BCB6C" : "#1A1A1A", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <ChevronRight size={13} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", margin: "0 3px", color: "#9BCB6C" }} />
            <Link
              href="/diensten"
              onMouseEnter={() => setDienstenHovered(true)}
              onMouseLeave={() => setDienstenHovered(false)}
              style={{ color: dienstenHovered ? "#9BCB6C" : "#1A1A1A", textDecoration: "none", transition: "color 180ms ease" }}
            >Diensten</Link>
            <ChevronRight size={13} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", margin: "0 3px", color: "#9BCB6C" }} />
            <span style={{ color: "#9BCB6C" }}>Dakreiniging</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text + buttons */}
            <div>
              <p className="site-eyebrow mb-4">Professionele dakontmossing</p>
              <h1
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3.2vw, 2.625rem)",
                  letterSpacing: "-0.03em",
                  color: "#1A1A1A",
                  lineHeight: 1.12,
                  marginBottom: "20px",
                }}
              >
                Geef je dak opnieuw<br />
                <span style={{ color: "#9BCB6C" }}>jaren bescherming.</span>
              </h1>
              <p style={{ fontSize: "16px", color: "#545454", lineHeight: 1.65, marginBottom: "36px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Mos en vuil houden vocht vast en laten je dak sneller verouderen.<br />
                Met een professionele reiniging verwijderen we vervuiling veilig<br />
                en helpen we je dak langer in goede staat te houden.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link
                  href="/#calculator"
                  onMouseEnter={e => { e.currentTarget.style.background = "#7AB54E"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#9BCB6C"; }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "#9BCB6C", color: "#FFFFFF", borderRadius: "10px",
                    padding: "14px 24px", fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontWeight: 700, fontSize: "15px", textDecoration: "none",
                    transition: "background 200ms ease",
                  }}
                >
                  Bereken je richtprijs
                  <ChevronRight size={15} strokeWidth={2.5} />
                </Link>
                <a
                  href="tel:+32468352869"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#9BCB6C"; e.currentTarget.style.color = "#9BCB6C"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(26,26,26,0.25)"; e.currentTarget.style.color = "#1A1A1A"; }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "transparent", color: "#1A1A1A",
                    border: "1.5px solid rgba(26,26,26,0.25)", borderRadius: "10px",
                    padding: "14px 24px", fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontWeight: 700, fontSize: "15px", textDecoration: "none",
                    transition: "border-color 200ms ease, color 200ms ease",
                  }}
                >
                  <Phone size={16} />
                  +32 468 35 28 69
                </a>
              </div>

              {/* Google Reviews widget — script wordt via useEffect binnenin dit element geladen */}
              <div style={{ marginTop: "20px" }}>
                <div ref={trustindexRef} style={{ display: "inline-block" }} />
              </div>
            </div>

            {/* Right: video + Yannick overlay */}
            <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.15)", aspectRatio: "4/4.2" }}>
              <video
                src="/videos/Dakreiniging_yannick.mp4"
                autoPlay muted loop playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

          </div>
        </div>
      </section>

      <section style={{ background: "#F7F8F6", padding: "120px 0 40px" }}>
        <div className="site-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — before/after slider */}
            <div style={{ height: "440px" }}>
              <VoorkomSlider />
            </div>

            {/* Right — text */}
            <div>
              <p className="site-eyebrow mb-4">Waarom je dak laten ontmossen?</p>
              <h2 style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontWeight: 800, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                letterSpacing: "-0.028em", lineHeight: 1.15,
                color: "#1A1A1A", marginBottom: "38px",
              }}>
                Voorkom problemen.<br />
                <span style={{ color: "#9BCB6C" }}>Geniet opnieuw van een verzorgd dak.</span>
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "44px 28px" }}>
                {[
                  { Icon: Leaf,        title: "Geen loskomend mos rond je woning" },
                  { Icon: Droplets,    title: "Minder kans op verstopte dakgoten" },
                  { Icon: CloudRain,   title: "Minder kans op vochtproblemen" },
                  { Icon: ShieldCheck, title: "Helpt de levensduur van je dak verlengen" },
                  { Icon: Sparkles,    title: "Je woning krijgt opnieuw een frisse uitstraling" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #9BCB6C", boxShadow: "0 2px 8px rgba(155,203,108,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.Icon size={26} color="#9BCB6C" strokeWidth={2} />
                    </div>
                    <p style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontWeight: 700, fontSize: "14px", color: "#1A1A1A", lineHeight: 1.3,
                    }}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* â"€â"€ Mid-page CTA â"€â"€ */}
      <section style={{ background: "#F7F8F6", paddingTop: "24px", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <div className="page-cta-bar" style={{
            background: "#FFFFFF",
            border: "1px solid #9BCB6C",
            borderRadius: "16px",
            padding: "32px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            boxShadow: "0 2px 16px rgba(155,203,108,0.12)",
          }}>
            <div style={{ flex: 1, minWidth: "260px" }} className="text-center lg:text-left">
              <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#1A1A1A", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.25 }}>
                Voorkom dure schade aan je dak.
              </p>
              <p style={{ fontSize: "14px", color: "#545454", lineHeight: 1.6, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Mos verdwijnt niet vanzelf. Laat je dak tijdig reinigen en voorkom verstoppingen, slijtage, lekkages en onnodige kosten.
              </p>
            </div>
            <div className="page-cta-buttons" style={{ display: "flex", gap: "10px", flexShrink: 0, flexWrap: "wrap" }}>
              <Link
                href="/#calculator"
                onMouseEnter={e => { e.currentTarget.style.background = "#7AB54E"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#9BCB6C"; }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#9BCB6C", color: "#FFFFFF", border: "none",
                  borderRadius: "8px", padding: "12px 20px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  whiteSpace: "nowrap", transition: "background-color 0.2s ease",
                }}
              >
                Bereken je richtprijs
                <ChevronRight size={14} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:+32468352869"
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#7AB54E"; e.currentTarget.style.color = "#7AB54E"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(155,203,108,0.5)"; e.currentTarget.style.color = "#545454"; }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "transparent", color: "#545454",
                  border: "1px solid rgba(155,203,108,0.5)",
                  borderRadius: "8px", padding: "12px 20px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  whiteSpace: "nowrap", transition: "border-color 0.2s ease, color 0.2s ease",
                }}
              >
                <Phone size={15} />
                +32 468 35 28 69
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 lg:pt-[100px] pb-[100px]" style={{ background: "#F7F8F6" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Kaart 1 — Voordelen van dakreiniging */}
            <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
              <h3 className="font-black mb-5"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1A1A1A", fontSize: "1.1rem" }}>
                Voordelen van dakreiniging
              </h3>
              <ul className="space-y-3">
                {[
                  { title: "Langer levensduur",        desc: "Propere dakpannen gaan langer mee en hebben minder slijtage." },
                  { title: "Betere waterafvoer",        desc: "Vrije dakgoten voorkomen opstuwing en lekkages." },
                  { title: "Minder vorstschade",        desc: "Droge dakpannen barsten niet bij vriesweer." },
                  { title: "Verzorgde uitstraling",     desc: "Een proper dak geeft je woning direct een frissere look." },
                  { title: "Bespaar op renovatiekosten", desc: "Regelmatig onderhoud is altijd goedkoper dan een dakvervanging." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#9BCB6C" }} />
                    <span className="text-sm" style={{ color: "#555555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                      <strong style={{ color: "#1A1A1A", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{item.title}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kaart 2 — Waarom MOS-X */}
            <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
              <h3 className="font-black mb-5"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1A1A1A", fontSize: "1.1rem" }}>
                Waarom kiezen klanten voor MOS-X
              </h3>
              <ul className="space-y-3">
                {[
                  { title: "Yannick doet alles zelf",      desc: "Geen onderaannemers, geen verrassingen." },
                  { title: "Vaste prijs vooraf",            desc: "Je weet wat het kost vóór we beginnen." },
                  { title: "Advies op maat",                desc: "Alleen wat jouw dak écht nodig heeft." },
                  { title: "Professionele apparatuur",      desc: "Niet zomaar een hogedrukreiniger." },
                  { title: "Nette afwerking",               desc: "De omgeving wordt altijd proper achtergelaten." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#9BCB6C" }} />
                    <span className="text-sm" style={{ color: "#555555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                      <strong style={{ color: "#1A1A1A", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{item.title}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* â"€â"€ Process — homepage style â"€â"€ */}
      <section style={{ background: "#F7F8F6", padding: "100px 0 16px" }}>
        <div className="site-wrap">
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <p className="site-eyebrow mb-4">Onze werkwijze</p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A1A1A",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              letterSpacing: "-0.028em", lineHeight: 1.15,
            }}>
              Zo reinigen we <span style={{ color: "#9BCB6C" }}>jouw dak.</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {steps.map((s, i) => {
              const { Icon } = s;
              return (
                <div
                  key={i}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#9BCB6C";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.10)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)";
                  }}
                  className="process-step-row"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "16px",
                    padding: "24px 32px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                    transition: "box-shadow 250ms ease, border-color 250ms ease",
                    display: "flex", flexDirection: "row", alignItems: "center", gap: "28px",
                  }}
                >
                  <div className="process-step-header" style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
                    <div style={{
                      width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0,
                      background: "rgba(155,203,108,0.12)", border: "1px solid rgba(155,203,108,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={22} color="#9BCB6C" strokeWidth={2} />
                    </div>
                  <div className="process-step-label-col" style={{ minWidth: 0 }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9BCB6C", marginBottom: "4px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {s.step}
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3, fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {s.title}
                    </p>
                  </div>

                  </div>

                  {/* Divider */}
                  <div className="process-step-divider" style={{ width: "1px", height: "40px", background: "#E5E7EB", flexShrink: 0 }} />

                  {/* Description */}
                  <p style={{ fontSize: "14px", color: "#545454", lineHeight: 1.65, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* â"€â"€ Mini CTA â"€â"€ */}
      <section style={{ background: "#F7F8F6", padding: "16px 0 72px", textAlign: "center" }}>
        <div className="site-wrap">
          <div style={{ background: "#FFFFFF", border: "1px solid #9BCB6C", borderRadius: "16px", padding: "28px 40px", boxShadow: "0 2px 16px rgba(155,203,108,0.12)" }}>
          <h2 className="mb-0 lg:mb-3" style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontWeight: 800, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            letterSpacing: "-0.025em", color: "#1A1A1A",
          }}>
            Benieuwd wat jouw dakreiniging kost?
          </h2>
          <p className="hidden lg:block" style={{ fontSize: "15px", color: "#545454", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "28px" }}>
            Bereken vrijblijvend je richtprijs voor jouw dak.
          </p>
          <Link
            href="/#calculator"
            className="mt-7 lg:mt-0"
            onMouseEnter={e => { e.currentTarget.style.background = "#7AB54E"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#9BCB6C"; }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#9BCB6C", color: "#FFFFFF", border: "none",
              borderRadius: "8px", padding: "14px 28px",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 700, fontSize: "15px", textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
          >
            Bereken je richtprijs
            <ChevronRight size={14} strokeWidth={2.5} />
          </Link>
          </div>
        </div>
      </section>

      {/* â"€â"€ FAQ accordion â"€â"€ */}
      <section className="site-pad" style={{ background: "#F7F8F6" }}>
        <div className="site-wrap">

          <h2
            className="font-bold mb-8"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em", color: "#1A1A1A", textAlign: "center" }}
          >
            Alles wat je wilt weten over dakreiniging.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="faq-grid">
            {faqs.map((f, i) => (
              <div
                key={i}
                style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", overflow: "hidden", alignSelf: "start" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "20px 24px", cursor: "pointer", background: "none", border: "none",
                    textAlign: "left", gap: "16px",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "14px", color: "#1A1A1A", lineHeight: 1.4 }}>
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#9BCB6C"
                    style={{ flexShrink: 0, transition: "transform 220ms ease", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid #E5E7EB" }}>
                    <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#545454", fontFamily: "var(--font-inter), system-ui, sans-serif", paddingTop: "16px" }}>
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* WhatsApp cel */}
            <div style={{
              background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px",
              padding: "10px 24px", alignSelf: "start",
              display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap",
            }}>
              <p style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontWeight: 700, fontSize: "14px", color: "#1A1A1A",
              }}>
                Staat je vraag er niet bij?
              </p>
              <a
                href="https://wa.me/32468352869?text=Hallo%20Yannick%2C%20ik%20heb%20een%20vraag%20over%20dakreiniging."
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={e => { e.currentTarget.style.background = "#7AB54E"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#9BCB6C"; }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#9BCB6C", color: "#FFFFFF", borderRadius: "10px",
                  padding: "9px 18px", fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  transition: "background 200ms ease",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Stel je vraag aan Yannick
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* â"€â"€ CTA â"€â"€ */}
      <section style={{ background: "#F7F8F6", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <div className="page-cta-bar" style={{
            background: "#0B0F0C",
            border: "1px solid rgba(155,203,108,0.25)",
            borderRadius: "16px",
            padding: "32px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
          }}>
            <div className="page-cta-text" style={{ flex: 1, minWidth: "260px" }}>
              <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.25 }}>
                Benieuwd wat <span style={{ color: "#9BCB6C" }}>jouw dak</span> nodig heeft?
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "2px" }}>
                Niet elk dak heeft een coating nodig. Soms is een reiniging voldoende.
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Yannick helpt je kiezen.
              </p>
            </div>
            <div className="page-cta-buttons" style={{ display: "flex", gap: "10px", flexShrink: 0, flexWrap: "wrap" }}>
              <Link
                href="/#calculator"
                onMouseEnter={() => setWaHovered(true)}
                onMouseLeave={() => setWaHovered(false)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: waHovered ? "#7AB54E" : "#9BCB6C",
                  color: "#FFFFFF", border: "none",
                  borderRadius: "8px", padding: "12px 20px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  whiteSpace: "nowrap", transition: "background-color 0.2s ease",
                }}
              >
                Bereken je richtprijs
                <ChevronRight size={14} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:+32468352869"
                onMouseEnter={() => setPhoneHovered(true)}
                onMouseLeave={() => setPhoneHovered(false)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "transparent",
                  color: phoneHovered ? "#9BCB6C" : "#FFFFFF",
                  border: phoneHovered ? "1px solid #9BCB6C" : "1px solid rgba(155,203,108,0.5)",
                  borderRadius: "8px", padding: "12px 20px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  whiteSpace: "nowrap", transition: "border-color 0.2s ease, color 0.2s ease",
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

