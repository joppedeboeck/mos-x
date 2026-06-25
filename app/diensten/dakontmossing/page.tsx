"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, ChevronDown, Search, Droplets, CloudRain, ShieldCheck, Home } from "lucide-react";
import PageLayout from "@/components/page-layout";

const steps = [
  { step: "STAP 01", Icon: Search,        title: "Nazicht & voorbereiding",           desc: "We controleren het dak, signaleren eventuele beschadigingen en plaatsen bladvangers om verstoppingen tijdens de reiniging te voorkomen." },
  { step: "STAP 02", Icon: Droplets,      title: "Professionele dakreiniging",        desc: "Met professionele stoom- en hogedrukapparatuur verwijderen we mos, algen en vervuiling grondig van het dak. De druk wordt afgestemd op het type dakbedekking zodat de reiniging doeltreffend Ã©n veilig verloopt." },
  { step: "STAP 03", Icon: ShieldCheck,   title: "Preventieve anti-mosbehandeling",  desc: "Na de reiniging brengen we een biologisch afbreekbare anti-mosbehandeling aan. Zo wordt nieuwe mosvorming afgeremd en blijft het dak langer proper." },
  { step: "STAP 04", Icon: Home,          title: "Reiniging rondom de woning",       desc: "Tijdens de werken kunnen mosresten op muren, ramen, terras of oprit terechtkomen. Daarom reinigen we de omgeving zorgvuldig zodat alles netjes wordt achtergelaten." },
  { step: "STAP 05", Icon: CloudRain,     title: "Dakgoten ledigen",                 desc: "We maken de dakgoten volledig leeg en spoelen indien nodig de afvoerleidingen door. Zo voorkomen we verstoppingen en kan regenwater opnieuw vlot wegstromen." },
];


const faqs = [
  { q: "Is hogedruk slecht voor een dak?", a: "Niet wanneer het correct wordt toegepast. Het type dak, de staat van de dakpannen en de juiste instellingen bepalen welke reinigingstechniek geschikt is. MOS-X gebruikt aangepaste technieken waarbij de druk wordt afgestemd op het dak, zodat het resultaat veilig Ã©n doeltreffend is." },
  { q: "Wanneer zie ik resultaat?", a: "Het grootste deel van het resultaat is onmiddellijk zichtbaar na de reiniging. Eventuele resterende vervuiling kan verder verdwijnen door regen en weersinvloeden." },
  { q: "Moet ik thuis zijn tijdens de behandeling?", a: "Voor de inspectie is dat handig. Tijdens de uitvoering zelf is dat meestal niet nodig." },
  { q: "Is een coating nodig na een reiniging?", a: "Niet altijd. Tijdens de inspectie krijg je eerlijk advies op basis van de staat van je dak. Soms volstaat een reiniging. Soms is een bijkomende bescherming interessant." },
  { q: "Hoe lang blijft mijn dak proper?", a: "Dat hangt af van de ligging van je woning, de hoeveelheid bomen rondom en de weersomstandigheden. Met een preventieve behandeling of MOS-X Dakzorg blijft je dak doorgaans langer proper en goed onderhouden." },
];


export default function DakontmossingPage() {
  const [homeHovered, setHomeHovered]         = useState(false);
  const [dienstenHovered, setDienstenHovered] = useState(false);
  const [openFaq, setOpenFaq]                 = useState<number | null>(null);
  const [waHovered, setWaHovered]             = useState(false);
  const [phoneHovered, setPhoneHovered]       = useState(false);

  return (
    <PageLayout>

      {/* â"€â"€ Hero (light) â"€â"€ */}
      <section style={{ background: "#F7F8F6", paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="site-wrap">

          {/* Breadcrumb */}
          <p style={{ fontSize: "13px", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link
              href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{ color: homeHovered ? "#1A1A1A" : "#9BCB6C", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>&#8250;</span>
            <Link
              href="/diensten"
              onMouseEnter={() => setDienstenHovered(true)}
              onMouseLeave={() => setDienstenHovered(false)}
              style={{ color: dienstenHovered ? "#1A1A1A" : "#9BCB6C", textDecoration: "none", transition: "color 180ms ease" }}
            >Diensten</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>&#8250;</span>
            <span style={{ color: "#9BCB6C" }}>Dakreiniging</span>
          </p>

          <h1
            className="leading-tight mb-5"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "#1A1A1A",
            }}
          >
            Een proper dak.
            <br />
            <span style={{ color: "#9BCB6C" }}>Zonder risico voor je dakpannen.</span>
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "#545454", whiteSpace: "nowrap" }}>
            Mos, algen en vervuiling professioneel verwijderd. De juiste aanpak voor elk type dak. Veilig voor je dakpannen.
          </p>

        </div>
      </section>

      {/* â"€â"€ Waarom dakreiniging? + video â"€â"€ */}
      <section className="site-pad" style={{ background: "#F7F8F6", paddingTop: "0", paddingBottom: "0" }}>
        <div className="site-wrap">

          {/* Two-col: text left, video right */}
          <div className="grid gap-14 items-stretch" style={{ gridTemplateColumns: "1fr 0.7fr" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="site-eyebrow mb-4">Waarom dakreiniging?</p>
              <h2
                className="font-bold leading-tight mb-5"
                style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em", color: "#1A1A1A" }}
              >
                Mos verwijderd.
                <span style={{ color: "#9BCB6C" }}> Dak beschermd.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#545454" }}>
                Mos lijkt misschien onschuldig, maar houdt vocht vast op het dak. Daardoor blijven dakpannen langer nat, stapelt vuil zich sneller op en krijgen algen meer kans om zich te verspreiden.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#545454" }}>
                Op termijn kan dat leiden tot verstoppingen, versnelde slijtage en een minder verzorgde uitstraling van je woning.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#545454" }}>
                MOS-X verwijdert mos, algen en vervuiling grondig. Zo ziet je dak er opnieuw verzorgd uit en blijft het langer in goede conditie.
              </p>

              <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
              <p className="font-bold mb-3 text-sm" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1A1A1A" }}>
                Wat gebeurt er als mos blijft zitten?
              </p>
              <ul className="space-y-2">
                {[
                  "Dakgoten kunnen verstopt raken, waardoor regenwater minder goed wordt afgevoerd",
                  "Vocht blijft langer op het dak aanwezig, wat slijtage aan dakpannen versnelt",
                  "Mos kan leiden tot beschadigingen en lekkageproblemen",
                  "Je woning verliest haar verzorgde uitstraling",
                  "Uitstel van onderhoud kan later leiden tot een veel duurdere dakrenovatie",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#9BCB6C" }} />
                    <span className="text-sm" style={{ color: "#545454", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>

            {/* Video */}
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.13)", aspectRatio: "4/4.2" }}>
              <video
                src="/videos/Dakreiniging_yannick.mp4"
                autoPlay muted loop playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: "scale(1)", transformOrigin: "center center" }}
              />
            </div>
          </div>


        </div>
      </section>

      {/* â"€â"€ Mid-page CTA â"€â"€ */}
      <section style={{ background: "#F7F8F6", paddingTop: "60px", paddingBottom: "0" }}>
        <div className="site-wrap">
          <div style={{
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
            <div style={{ flex: 1, minWidth: "260px" }}>
              <p style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#1A1A1A", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.25 }}>
                Voorkom dure schade aan je dak.
              </p>
              <p style={{ fontSize: "14px", color: "#545454", lineHeight: 1.6, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Mos verdwijnt niet vanzelf. Laat je dak tijdig reinigen en voorkom verstoppingen, slijtage, lekkages en onnodige kosten.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexShrink: 0, flexWrap: "wrap" }}>
              <Link
                href="/contact"
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

      {/* â"€â"€ Waarom ontstaat mos? + Risicofactoren â"€â"€ */}
      <section style={{ background: "#F7F8F6", paddingTop: "160px", paddingBottom: "60px" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Kaart 1 â€" Waarom ontstaat mos? */}
            <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
              <h3 className="font-black mb-4"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1A1A1A", fontSize: "1.1rem" }}>
                Waarom ontstaat mos?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#555555", marginBottom: "12px" }}>
                Mos ontstaat wanneer stof, vocht en organisch materiaal zich ophopen op het dak. Wind voert voortdurend kleine vuildeeltjes aan die zich tussen voegen, naden en ruwe oppervlakken vastzetten.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>
                In combinatie met vocht en weinig zonlicht ontstaat een ideale voedingsbodem voor mos en algen. Dakvlakken die minder zon krijgen blijven langer vochtig, waardoor mos zich sneller kan ontwikkelen en uitbreiden.
              </p>
            </div>

            {/* Kaart 2 â€" Risicofactoren */}
            <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
              <h3 className="font-black mb-4"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1A1A1A", fontSize: "1.1rem" }}>
                Welke factoren versnellen mosgroei?
              </h3>
              <ul className="space-y-2">
                {[
                  "Woningen tussen veel bomen of groen",
                  "Noordgerichte dakvlakken",
                  "Weinig rechtstreeks zonlicht",
                  "Vochtige omgeving",
                  "Oudere of poreuze dakpannen",
                  "Langdurige ophoping van vuil",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#9BCB6C" }} />
                    <span className="text-sm" style={{ color: "#555555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* â"€â"€ Process â€" homepage style â"€â"€ */}
      <section style={{ background: "#F7F8F6", padding: "100px 0" }}>
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
                  {/* Icon */}
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0,
                    background: "rgba(155,203,108,0.12)", border: "1px solid rgba(155,203,108,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={22} color="#9BCB6C" strokeWidth={2} />
                  </div>

                  {/* Step label + title */}
                  <div style={{ flexShrink: 0, width: "290px" }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9BCB6C", marginBottom: "4px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {s.step}
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3, fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {s.title}
                    </p>
                  </div>

                  {/* Divider */}
                  <div style={{ width: "1px", height: "40px", background: "#E5E7EB", flexShrink: 0 }} />

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
      <section style={{ background: "#F7F8F6", padding: "72px 0", textAlign: "center" }}>
        <div className="site-wrap">
          <div style={{ background: "#FFFFFF", border: "1px solid #9BCB6C", borderRadius: "16px", padding: "48px 40px", boxShadow: "0 2px 16px rgba(155,203,108,0.12)" }}>
          <h2 style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontWeight: 800, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            letterSpacing: "-0.025em", color: "#1A1A1A", marginBottom: "12px",
          }}>
            Benieuwd wat jouw dakreiniging kost?
          </h2>
          <p style={{ fontSize: "15px", color: "#545454", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "28px" }}>
            Bereken vrijblijvend je richtprijs voor jouw dak.
          </p>
          <Link
            href="/contact"
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
          </Link>
          </div>
        </div>
      </section>

      {/* â"€â"€ FAQ accordion â"€â"€ */}
      <section className="site-pad" style={{ background: "#F7F8F6" }}>
        <div className="site-wrap site-wrap-narrow">

          <h2
            className="font-bold mb-8"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em", color: "#1A1A1A" }}
          >
            Veelgestelde vragen over dakreiniging
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", overflow: "hidden" }}
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
          </div>
        </div>
      </section>

      {/* â"€â"€ CTA â"€â"€ */}
      <section style={{ background: "#F7F8F6", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <div style={{
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
            <div style={{ flex: 1, minWidth: "260px" }}>
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
            <div style={{ display: "flex", gap: "10px", flexShrink: 0, flexWrap: "wrap" }}>
              <Link
                href="/contact"
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
                Bereken je richtprijs <ArrowRight size={15} />
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

