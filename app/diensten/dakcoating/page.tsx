"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, ChevronDown, Droplets, ShieldCheck, Home, CloudRain } from "lucide-react";
import PageLayout from "@/components/page-layout";

const steps = [
  { step: "STAP 01", Icon: Home,        title: "Afplakken & voorbereiding", desc: "Ramen, zonnepanelen, veranda's, schouwen en andere onderdelen worden zorgvuldig afgeschermd zodat de werken veilig en netjes kunnen verlopen." },
  { step: "STAP 02", Icon: Droplets,    title: "Eerste coatinglaag",        desc: "We brengen een eerste laag watergedragen dakcoating aan met een professionele airless spuitmachine. Hierbij wordt een anti-mosprimer toegevoegd voor optimale hechting." },
  { step: "STAP 03", Icon: CloudRain,   title: "Tweede coatinglaag",        desc: "Nadat de eerste laag volledig is uitgehard brengen we een tweede laag coating aan in de gekozen kleur. Zo ontstaat een duurzame en egale beschermlaag." },
  { step: "STAP 04", Icon: ShieldCheck, title: "Controle & afwerking",      desc: "Na de werken verwijderen we alle beschermingsmaterialen en voeren we een grondige controle uit zodat alles netjes wordt achtergelaten." },
];

const faqs = [
  { q: "Wanneer is dakcoating nodig?", a: "Wanneer betonpannen of kunstleien poreus geworden zijn en hun beschermlaag verloren hebben. Tijdens de inspectie bekijkt Yannick de staat van je dak en geeft eerlijk advies." },
  { q: "Voor welke daken is dakcoating geschikt?", a: "Dakcoating wordt voornamelijk toegepast op betonpannen en kunstleien. Voor andere daktypes volstaat meestal een professionele reiniging en een preventieve behandeling." },
  { q: "Hoe lang gaat dakcoating mee?", a: "Op dakcoating geeft MOS-X tot 10 jaar garantie. Tijdens de inspectie krijg je advies op maat van jouw dak." },
  { q: "Kan ik een andere kleur kiezen?", a: "Ja. Dakcoating is beschikbaar in verschillende kleuren zodat je dak opnieuw de uitstraling krijgt die bij je woning past." },
  { q: "Moet het dak eerst gereinigd worden?", a: "Ja. Voor een optimale hechting moet het dak eerst grondig gereinigd worden. Dakreiniging wordt apart uitgevoerd voor de coating wordt aangebracht." },
];

export default function DakcoatingPage() {
  const [homeHovered, setHomeHovered]         = useState(false);
  const [dienstenHovered, setDienstenHovered] = useState(false);
  const [openFaq, setOpenFaq]                 = useState<number | null>(null);
  const [waHovered, setWaHovered]             = useState(false);
  const [phoneHovered, setPhoneHovered]       = useState(false);

  return (
    <PageLayout>

      {/* Hero */}
      <section style={{ background: "#F7F8F6", paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="site-wrap">

          {/* Breadcrumb */}
          <p style={{ fontSize: "13px", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{ color: homeHovered ? "#1A1A1A" : "#9BCB6C", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>&#8250;</span>
            <Link href="/diensten"
              onMouseEnter={() => setDienstenHovered(true)}
              onMouseLeave={() => setDienstenHovered(false)}
              style={{ color: dienstenHovered ? "#1A1A1A" : "#9BCB6C", textDecoration: "none", transition: "color 180ms ease" }}
            >Diensten</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>&#8250;</span>
            <span style={{ color: "#9BCB6C" }}>Dakcoating</span>
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
            Een vernieuwd dak.
            <br />
            <span style={{ color: "#9BCB6C" }}>Beschermd voor jaren.</span>
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "#545454" }}>
            Dakcoating geeft betonpannen en kunstleien opnieuw bescherming, kleur en uitstraling. Zo ziet je dak er opnieuw als nieuw uit.
          </p>

        </div>
      </section>

      {/* Waarom dakcoating? + video */}
      <section className="site-pad" style={{ background: "#F7F8F6", paddingTop: "0", paddingBottom: "0" }}>
        <div className="site-wrap">
          <div className="grid gap-14 items-stretch" style={{ gridTemplateColumns: "1fr 0.7fr" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="site-eyebrow mb-4">Waarom dakcoating?</p>
              <h2
                className="font-bold leading-tight mb-5"
                style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em", color: "#1A1A1A" }}
              >
                Dak vernieuwd.
                <span style={{ color: "#9BCB6C" }}> Levensduur verlengd.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#545454" }}>
                Na verloop van tijd worden betonpannen en kunstleien poreus door regen, vorst, UV-straling en vervuiling. Daardoor verliezen ze hun beschermende toplaag en oorspronkelijke uitstraling.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#545454" }}>
                Wanneer een dak te poreus wordt, volstaat een gewone reiniging vaak niet meer. Een professionele dakcoating brengt een nieuwe beschermlaag aan die het dak opnieuw beschermt tegen vocht, vuil, algen en weersinvloeden.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#545454" }}>
                MOS-X brengt hoogwaardige dakcoatings aan op betonpannen en kunstleien. Zo krijgt je dak opnieuw een verzorgde uitstraling, extra bescherming en een verlengde levensduur.
              </p>

              <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
                <p className="font-bold mb-3 text-sm" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1A1A1A" }}>
                  Wat gebeurt er als een dak te poreus wordt?
                </p>
                <ul className="space-y-2">
                  {[
                    "Dakpannen nemen meer vocht op",
                    "Vorstschade en slijtage kunnen sneller optreden",
                    "Mos en algen krijgen meer kans om terug te keren",
                    "Het dak verliest zijn kleur en uitstraling",
                    "Uitstel kan later leiden tot een veel duurdere dakrenovatie",
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
                src="/videos/Dakcoating.mp4"
                autoPlay muted loop playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
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
                Geef je dak opnieuw bescherming en uitstraling.
              </p>
              <p style={{ fontSize: "14px", color: "#545454", lineHeight: 1.6, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Een poreus dak wacht niet. Laat je dak tijdig coaten en voorkom vorstschade, slijtage en onnodige kosten.
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
                Bel Yannick
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards: waarom poreus + risicofactoren */}
      <section style={{ background: "#F7F8F6", paddingTop: "160px", paddingBottom: "60px" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Kaart 1 */}
            <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9BCB6C", marginBottom: "10px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                Waarom worden dakpannen poreus?
              </p>
              <h3 className="font-black mb-4" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1A1A1A", fontSize: "1.1rem" }}>
                Waarom slijt de beschermlaag van een dak?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>
                Zonlicht, regen, vorst en temperatuurschommelingen tasten de beschermlaag van dakpannen langzaam aan. Na verloop van tijd verliest het oppervlak zijn dichtheid waardoor vocht gemakkelijker kan binnendringen.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9BCB6C", marginBottom: "10px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                Risicofactoren
              </p>
              <h3 className="font-black mb-4" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1A1A1A", fontSize: "1.1rem" }}>
                Welke factoren versnellen slijtage?
              </h3>
              <ul className="space-y-2">
                {[
                  "Oudere dakpannen of kunstleien",
                  "Veel blootstelling aan zon en UV-straling",
                  "Vochtige omgeving",
                  "Mos- en algengroei",
                  "Vorst en temperatuurschommelingen",
                  "Gebrek aan onderhoud",
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

      {/* Process steps */}
      <section style={{ background: "#F7F8F6", padding: "100px 0" }}>
        <div className="site-wrap">
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <p className="site-eyebrow mb-4">Onze werkwijze</p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A1A1A",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              letterSpacing: "-0.028em", lineHeight: 1.15,
            }}>
              Zo brengen we <span style={{ color: "#9BCB6C" }}>dakcoating aan.</span>
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
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0,
                    background: "rgba(155,203,108,0.12)", border: "1px solid rgba(155,203,108,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={22} color="#9BCB6C" strokeWidth={2} />
                  </div>

                  <div style={{ flexShrink: 0, width: "290px" }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9BCB6C", marginBottom: "4px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {s.step}
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3, fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {s.title}
                    </p>
                  </div>

                  <div style={{ width: "1px", height: "40px", background: "#E5E7EB", flexShrink: 0 }} />

                  <p style={{ fontSize: "14px", color: "#545454", lineHeight: 1.65, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Mini CTA */}
      <section style={{ background: "#F7F8F6", padding: "72px 0", textAlign: "center" }}>
        <div className="site-wrap">
          <div style={{ background: "#FFFFFF", border: "1px solid #9BCB6C", borderRadius: "16px", padding: "48px 40px", boxShadow: "0 2px 16px rgba(155,203,108,0.12)" }}>
            <h2 style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 800, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              letterSpacing: "-0.025em", color: "#1A1A1A", marginBottom: "12px",
            }}>
              Benieuwd wat <span style={{ color: "#9BCB6C" }}>jouw dakcoating</span> kost?
            </h2>
            <p style={{ fontSize: "15px", color: "#545454", fontFamily: "var(--font-inter), system-ui, sans-serif", marginBottom: "28px" }}>
              Benieuwd of dakcoating de juiste oplossing is voor jouw dak? Yannick geeft eerlijk advies op maat.
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
              Bereken je richtprijs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="site-pad" style={{ background: "#F7F8F6" }}>
        <div className="site-wrap site-wrap-narrow">
          <h2
            className="font-bold mb-8"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em", color: "#1A1A1A" }}
          >
            Veelgestelde vragen over dakcoating
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

      {/* Bottom CTA */}
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
                Benieuwd wat <span style={{ color: "#9BCB6C" }}>jouw dakcoating</span> kost?
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Benieuwd of dakcoating de juiste oplossing is voor jouw dak? Yannick geeft eerlijk advies op maat.
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
