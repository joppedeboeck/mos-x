"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Plus, Minus } from "lucide-react";
import BackLink from "@/components/back-link";
import PageLayout from "@/components/page-layout";

const faqGroups = [
  {
    category: "Prijs",
    items: [
      { q: "Wat kost dakontmossing en dakcoating in Vlaanderen?", a: "Dakreiniging start vanaf €350 voor een gemiddelde woning in Vlaanderen. Dakcoating start vanaf €850. De exacte prijs hangt af van de oppervlakte, het type dak en de staat van de dakbedekking. Je ontvangt altijd een vaste prijs vooraf, geen verrassingen achteraf." },
      { q: "Kan ik een richtprijs krijgen zonder dat iemand langskomt?", a: "Ja. Via de richtprijscalculator op de homepage krijg je binnen 60 seconden een eerste indicatie op basis van je daktype en oppervlakte. Zo weet je meteen of het binnen je budget past, zonder verplichtingen." },
      { q: "Zijn er verborgen kosten bovenop de offerte?", a: "Nee. De prijs die je in de offerte ziet, is de prijs die je betaalt. Gootreiniging en fotoreportage zijn standaard inbegrepen. Enkel bij onverwachte bijkomende schade die vooraf niet zichtbaar was, vragen we jouw akkoord voordat we extra werk uitvoeren." },
    ],
  },
  {
    category: "Proces",
    items: [
      { q: "Is hogedruk slecht voor dakpannen?", a: "Niet wanneer het correct wordt uitgevoerd. De juiste druk hangt af van het type dakbedekking en de staat van de pannen. MOS-X stemt de reinigingstechniek altijd af op jouw dak zodat de reiniging doeltreffend én veilig verloopt." },
      { q: "Wat is het verschil tussen dakreiniging en dakcoating?", a: "Dakreiniging verwijdert mos, algen en vuil van het dakoppervlak. Dakcoating brengt een beschermende laag aan die het dak jarenlang beschermt tegen vocht, algen en slijtage. Niet elk dak heeft een coating nodig. Tijdens de inspectie krijg je eerlijk advies over wat het beste past bij jouw situatie." },
      { q: "Wanneer is dakcoating nodig?", a: "Dakcoating is aangeraden wanneer betonpannen of kunstleien poreus geworden zijn en hun beschermlaag verloren hebben. Tijdens de inspectie beoordelen we of coating noodzakelijk of aangeraden is voor jouw dak." },
      { q: "Moet mijn dak eerst gereinigd worden voor een coating?", a: "Ja. Een coating hecht alleen goed op een proper en droog dakoppervlak. Daarom wordt een dakreiniging altijd uitgevoerd voor de coating wordt aangebracht. Dit kan in dezelfde opdracht worden gecombineerd." },
      { q: "Wat gebeurt er als ik na de inspectie besluit niets te doen?", a: "Dat is volledig jouw keuze. Er wordt nooit druk gezet. Als je dak niets nodig heeft, zeggen we dat gewoon." },
      { q: "Hoe lang duurt de uitvoering?", a: "Een dakreiniging duurt gemiddeld een halve dag voor een standaard woning. Een dakcoating neemt doorgaans een volledige werkdag in beslag. Je ontvangt na afloop een fotoreportage van voor en na de werken." },
    ],
  },
  {
    category: "Timing",
    items: [
      { q: "Hoe vaak moet je een dak laten ontmossen?", a: "Gemiddeld wordt aangeraden om een dak elke 3 tot 5 jaar te laten reinigen, afhankelijk van de ligging, het daktype en de omgeving. Woningen tussen veel bomen of in vochtige regio's hebben vaker onderhoud nodig." },
      { q: "Wanneer zie ik resultaat na een dakreiniging?", a: "Bij dakcoating zie je het resultaat meteen na de uitvoering. Bij dakreiniging wordt het resultaat zichtbaar binnen 4 tot 6 weken, wanneer het behandelde mos afsterft en bij regen afspoelt." },
      { q: "Hoe snel kan MOS-X bij mij langskomen?", a: "Gemiddeld plannen we de inspectie binnen 5 tot 10 werkdagen na je aanvraag. Na de inspectie ontvang je de offerte binnen 24 uur." },
    ],
  },
  {
    category: "Garantie",
    items: [
      { q: "Hoe lang blijft de dakcoating beschermen?", a: "Op dakcoating geeft MOS-X tot 10 jaar garantie. Je ontvangt een schriftelijke garantie na de uitvoering." },
      { q: "Wat als er tijdens de werken een dakpan breekt?", a: "MOS-X werkt met een volledige burgerlijke aansprakelijkheidsverzekering. Bij eventuele schade tijdens de uitvoering wordt dit gedekt. Je staat nooit voor onverwachte kosten." },
      { q: "Wat als ik na de behandeling toch niet tevreden ben?", a: "We staan 100% achter ons werk. Als je niet tevreden bent met het resultaat, komen we langs om het te bekijken en waar nodig gratis bij te werken." },
    ],
  },
  {
    category: "Praktisch",
    items: [
      { q: "Moet ik thuis zijn tijdens de dakwerken?", a: "Voor de inspectie is het aangeraden dat je thuis bent. Voor de uitvoering zelf hoeft dat niet, maar het is prettig als er iemand telefonisch bereikbaar is." },
    ],
  },
  {
    category: "Werkgebied",
    items: [
      { q: "Waar is MOS-X actief in België?", a: "MOS-X is actief in de provincies Antwerpen, Oost-Vlaanderen, Vlaams-Brabant en Limburg. We bedienen meer dan 80 gemeenten in heel Vlaanderen. Twijfel je of we in jouw gemeente werken? Bel ons en we bevestigen het meteen." },
    ],
  },
  {
    category: "Vertrouwen",
    items: [
      { q: "Is MOS-X een erkend en verzekerd bedrijf?", a: "Ja. MOS-X is een officieel geregistreerd bedrijf met volledige burgerlijke aansprakelijkheidsverzekering. Je werkt altijd met een erkende professional." },
      { q: "Waarom zou ik kiezen voor MOS-X en niet voor een goedkopere concurrent?", a: "Een goedkopere offerte zonder inspectie betekent vaak een aanpak die niet afgestemd is op jouw dak. MOS-X inspecteert altijd eerst, past de techniek aan op het type dakbedekking en geeft een vaste prijs vooraf. Dat is geen extra kost, dat is zekerheid." },
    ],
  },
];

const categories = faqGroups.map(g => g.category);

function AccordionItem({ faq, open, onToggle }: {
  faq: { category: string; q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: open ? "rgba(155,203,108,0.05)" : "#FFFFFF",
        border: open ? "1px solid rgba(155,203,108,0.4)" : "1px solid #E5E7EB",
        boxShadow: open ? "none" : "0 2px 16px rgba(0,0,0,0.05)",
        transition: "background 200ms ease, border-color 200ms ease, box-shadow 200ms ease",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <span
            className="font-bold text-sm leading-snug"
            style={{
              color: "#1A1A1A",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}
          >
            {faq.q}
          </span>
        </div>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: open ? "rgba(155,203,108,0.15)" : "rgba(0,0,0,0.05)",
            color: "#9BCB6C",
            transition: "background 200ms ease",
          }}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="pl-[4.5rem]">
            <p className="text-sm leading-relaxed" style={{ color: "#545454" }}>
              {faq.a}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [open, setOpen] = useState<string | null>("Prijs-0");
  const [homeHov, setHomeHov] = useState(false);
  const [waHov, setWaHov] = useState(false);
  const [phoneHov, setPhoneHov] = useState(false);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);
  const sidebarCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const STICKY_TOP = 120;
    const LG = 1024;

    const update = () => {
      const container = sidebarContainerRef.current;
      const card = sidebarCardRef.current;
      if (!container || !card) return;
      if (window.innerWidth < LG) {
        card.style.position = "";
        card.style.top = "";
        card.style.left = "";
        card.style.width = "";
        return;
      }
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const containerH = container.offsetHeight;
      const cardH = card.offsetHeight;
      const scroll = window.scrollY;

      if (scroll + STICKY_TOP < containerTop) {
        card.style.position = "relative";
        card.style.top = "0";
        card.style.left = "";
        card.style.width = "";
      } else if (scroll + STICKY_TOP + cardH >= containerTop + containerH) {
        card.style.position = "absolute";
        card.style.top = (containerH - cardH) + "px";
        card.style.left = "0";
        card.style.width = "";
      } else {
        card.style.position = "fixed";
        card.style.top = STICKY_TOP + "px";
        card.style.left = container.getBoundingClientRect().left + "px";
        card.style.width = container.offsetWidth + "px";
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    const ro = new ResizeObserver(update);
    if (sidebarContainerRef.current) ro.observe(sidebarContainerRef.current);
    if (sidebarCardRef.current) ro.observe(sidebarCardRef.current);
    const accordionEl = sidebarContainerRef.current?.closest(".grid")?.querySelector(".space-y-8");
    if (accordionEl) ro.observe(accordionEl);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-10 overflow-hidden" style={{ background: "#F7F8F6" }}>
        <div className="site-wrap relative z-10">
          <BackLink href="/" />
          <p style={{ fontSize: "13px", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link
              href="/"
              onMouseEnter={() => setHomeHov(true)}
              onMouseLeave={() => setHomeHov(false)}
              style={{ color: homeHov ? "#9BCB6C" : "#1A1A1A", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>›</span>
            <span style={{ color: "#9BCB6C" }}>FAQ</span>
          </p>
          <h1
            className="font-black leading-tight mb-5 max-w-2xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "#1A1A1A",
            }}
          >
            Veelgestelde
            <span style={{ color: "#9BCB6C" }}> vragen.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#545454" }}>
            Antwoorden op de vragen die we het meest krijgen. Staat je vraag er niet bij? Bel of mail ons.
          </p>
        </div>
      </section>

      {/* ── FAQ accordion ── */}
      <section style={{ background: "#F7F8F6", padding: "40px 0 80px" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Accordion list — grouped by category */}
            <div className="space-y-8">
              {faqGroups.map((group) => (
                <div key={group.category}>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        background: "rgba(155,203,108,0.12)",
                        color: "#9BCB6C",
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      {group.category}
                    </span>
                    <div style={{ flex: 1, height: "1px", background: "#E5E7EB" }} />
                  </div>
                  <div className="space-y-3">
                    {group.items.map((item, i) => (
                      <AccordionItem
                        key={`${group.category}-${i}`}
                        faq={{ category: group.category, ...item }}
                        open={open === `${group.category}-${i}`}
                        onToggle={() => setOpen(open === `${group.category}-${i}` ? null : `${group.category}-${i}`)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky sidebar */}
            <div ref={sidebarContainerRef} className="relative h-full">
              <div ref={sidebarCardRef}>
                {/* Contact card */}
                <div
                  className="rounded-2xl p-7 mb-5"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <h3
                    className="font-black mb-2 leading-snug"
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: "1.35rem",
                      letterSpacing: "-0.025em",
                      color: "#1A1A1A",
                    }}
                  >
                    Staat <span style={{ color: "#9BCB6C" }}>jouw vraag</span><br />er niet tussen?
                  </h3>
                  <p className="text-sm mb-5" style={{ color: "#545454", lineHeight: 1.6 }}>
                    Yannick helpt je graag verder met persoonlijk advies op maat.
                  </p>

                  {/* Yannick profile row */}
                  <div className="flex items-center gap-3 mb-6 p-3 rounded-xl" style={{ background: "rgba(155,203,108,0.10)", border: "1px solid rgba(155,203,108,0.2)" }}>
                    <img
                      src="/images/Yannick Icon foto.png"
                      alt="Yannick"
                      style={{ width: "68px", height: "68px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm" style={{ fontFamily: "var(--font-montserrat)", color: "#1A1A1A" }}>Yannick</span>
                        <span style={{
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                          width: "16px", height: "16px", borderRadius: "50%",
                          background: "#9BCB6C",
                        }}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: "#545454" }}>Dakexpert bij MOS-X</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="https://wa.me/32468352869"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setWaHov(true)}
                      onMouseLeave={() => setWaHov(false)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                        background: waHov ? "#7AB54E" : "#9BCB6C", color: "#FFFFFF",
                        borderRadius: "8px", padding: "12px 20px",
                        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                        fontWeight: 700, fontSize: "14px", textDecoration: "none",
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Stuur Yannick een bericht
                    </a>
                    <a
                      href="tel:+32468352869"
                      onMouseEnter={() => setPhoneHov(true)}
                      onMouseLeave={() => setPhoneHov(false)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                        background: "transparent",
                        color: phoneHov ? "#9BCB6C" : "#1A1A1A",
                        border: phoneHov ? "1px solid #9BCB6C" : "1px solid rgba(155,203,108,0.5)",
                        borderRadius: "8px", padding: "12px 20px",
                        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                        fontWeight: 700, fontSize: "14px", textDecoration: "none",
                        transition: "border-color 0.2s ease, color 0.2s ease",
                      }}
                    >
                      <Phone className="w-4 h-4" /> +32 468 35 28 69
                    </a>
                  </div>

                  {/* Hours */}
                  <p className="flex items-center justify-center gap-2 mt-4 text-xs" style={{ color: "#9E9E9E" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Ma - Za: 08:00 - 17:00
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
