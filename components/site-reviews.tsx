"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Katrien V.",
    location: "Gent",
    service: "Dakontmossing + Coating",
    date: "November 2024",
    stars: 5,
    text: "Yannick is een vakman zoals je ze zelden tegenkomt. Hij legde alles uit via de drone-beelden, gaf eerlijk advies en de prijs was precies zoals beloofd. Het dak ziet eruit als nieuw.",
    initial: "K",
  },
  {
    name: "Marc D.",
    location: "Aalst",
    service: "Dakontmossing",
    date: "Oktober 2024",
    stars: 5,
    text: "Na jaren twijfelen eindelijk iemand die eerlijk zei wat mijn dak nodig had en wat niet. Geen overbodige diensten, geen druk. Gewoon degelijk werk aan een correcte prijs.",
    initial: "M",
  },
  {
    name: "Sofie B.",
    location: "Dendermonde",
    service: "Gevelreiniging",
    date: "September 2024",
    stars: 5,
    text: "De drone-inspectie overtuigde mij onmiddellijk. Eindelijk een bedrijf dat toont wat het probleem is in plaats van het alleen te vertellen. Gevel is perfect gereinigd.",
    initial: "S",
  },
  {
    name: "Johan P.",
    location: "Sint-Niklaas",
    service: "Dakcoating",
    date: "Augustus 2024",
    stars: 5,
    text: "Vlot, professioneel en netjes. Yannick kent zijn vak door en door. De coating ziet er geweldig uit en ik heb nu 15 jaar zekerheid.",
    initial: "J",
  },
  {
    name: "Lieve C.",
    location: "Ronse",
    service: "Dakontmossing",
    date: "Juli 2024",
    stars: 5,
    text: "Ik heb drie offertes gevraagd. MOS-X was niet de goedkoopste, maar Yannick was de énige die met een drone langskwam en alles kon tonen. Dat vertrouwen was de investering waard.",
    initial: "L",
  },
  {
    name: "Dirk W.",
    location: "Wetteren",
    service: "Dakontmossing + Gootreiniging",
    date: "Juni 2024",
    stars: 5,
    text: "Super tevreden. Yannick merkte ook een beschadiging aan een nokpan op die we nooit hadden gezien. Dát is het verschil met een gewone dakreiniger.",
    initial: "D",
  },
];

const VISIBLE = 3;
const TOTAL = reviews.length;
const MAX_INDEX = TOTAL - VISIBLE;

function Stars({ n }: { n: number }) {
  return (
    <div className="flex">
      {[...Array(n)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F9A825" }} />
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col h-full"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <Stars n={r.stars} />
      <p className="text-sm leading-relaxed flex-1 mt-3 mb-4" style={{ color: "#4A5568" }}>
        &ldquo;{r.text}&rdquo;
      </p>
      <span
        className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold w-fit mb-4"
        style={{
          background: "rgba(109,179,63,0.10)",
          color: "#6DB33F",
          fontFamily: "var(--font-montserrat)",
        }}
      >
        {r.service}
      </span>
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid #E5E7EB" }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
          style={{
            background: "linear-gradient(135deg, #6DB33F 0%, #5A9A32 100%)",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          {r.initial}
        </div>
        <div>
          <p className="font-bold text-xs" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#0D1510" }}>
            {r.name}
          </p>
          <p className="text-[11px]" style={{ color: "#9CA3AF" }}>
            {r.location} &middot; {r.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SiteReviews() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(MAX_INDEX, i + 1));

  const translateX = -(index * (100 / TOTAL));

  return (
    <section className="site-pad" id="reviews" style={{ background: "#FFFFFF" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="site-eyebrow mb-4">Klantbeoordelingen</p>
            <h2
              className="font-bold leading-tight"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.02em",
                color: "#0D1510",
              }}
            >
              Wat onze klanten zeggen.
            </h2>
          </div>

          {/* Aggregate score */}
          <div
            className="flex items-center gap-4 p-5 rounded-2xl shrink-0"
            style={{ background: "#F7F8F6", border: "1px solid #E5E7EB" }}
          >
            <p
              className="font-black text-5xl leading-none"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#0D1510" }}
            >
              5.0
            </p>
            <div>
              <Stars n={5} />
              <p className="text-xs mt-1.5" style={{ color: "#9CA3AF" }}>
                op alle platforms
              </p>
            </div>
          </div>
        </div>

        {/* Sliding carousel */}
        <div className="mb-8" style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              width: `${(TOTAL / VISIBLE) * 100}%`,
              transform: `translateX(${translateX}%)`,
              transition: "transform 400ms ease-in-out",
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  width: `${100 / TOTAL}%`,
                  flexShrink: 0,
                  paddingRight: i < TOTAL - 1 ? "20px" : "0",
                }}
              >
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: index === 0 ? "#F3F4F6" : "rgba(109,179,63,0.10)",
              border: "1px solid #E5E7EB",
              color: index === 0 ? "#D1D5DB" : "#6DB33F",
              cursor: index === 0 ? "not-allowed" : "pointer",
            }}
            aria-label="Vorige"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="rounded-full"
                style={{
                  width: i === index ? "20px" : "8px",
                  height: "8px",
                  background: i === index ? "#6DB33F" : "#D1D5DB",
                  transition: "width 300ms ease, background 300ms ease",
                }}
                aria-label={`Ga naar slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={index === MAX_INDEX}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: index === MAX_INDEX ? "#F3F4F6" : "rgba(109,179,63,0.10)",
              border: "1px solid #E5E7EB",
              color: index === MAX_INDEX ? "#D1D5DB" : "#6DB33F",
              cursor: index === MAX_INDEX ? "not-allowed" : "pointer",
            }}
            aria-label="Volgende"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
