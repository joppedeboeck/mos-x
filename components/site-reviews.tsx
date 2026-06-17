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

const GOOGLE_REVIEW_URL = "https://www.google.com/search?sca_esv=bcc915fd4b92abab&rlz=1C1GCEU_enBE1139BE1139&hl=nl-BE&sxsrf=ANbL-n6TrSUrDpAkVOrNUQ51U5GNZs9b_Q:1781020093012&q=MOS-X+%7C+Dakontmossing+%26+Coating+Reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORc7vib1r0gQO2ABjRXpl_uRZy99-xBVdTGpP89RMUA3yzcvCK6A2AazedCdjGkX1gn8bkQ%3D&uds=ALYpb_mOSBfVE_qjsUIUDwhXk-cv8R5BmJbdPhES1TRqg_vpjJyijAOWQNUWx-ymHj1rypkaCI5vDZLjKLW1ObrTyqmMebN8NP7CqX96tO1wgBatLBTT6ccEki20RIqT8UXa_cZv3U6K&sa=X&ved=2ahUKEwiuju3vwPqUAxVNRaQEHUolF-wQ3PALegQIMBAF&biw=1920&bih=911&dpr=1";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/MOS-X+%7C+Dakontmossing+%26+Coating/@51.1908919,4.7258395,681m/data=!3m1!1e3!4m16!1m9!3m8!1s0x442ba43c85bbcda1:0x9cb2c8361efab6e5!2sMOS-X+%7C+Dakontmossing+%26+Coating!8m2!3d51.1908886!4d4.7284144!9m1!1b1!16s%2Fg%2F11l2j3szhj!3m5!1s0x442ba43c85bbcda1:0x9cb2c8361efab6e5!8m2!3d51.1908886!4d4.7284144!16s%2Fg%2F11l2j3szhj?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D";

const btnStyle: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid #9BCB6C",
  color: "#9BCB6C",
  background: "#FFFFFF",
  borderRadius: "8px",
  padding: "12px 28px",
  fontSize: "14px",
  fontWeight: 600,
  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
  textDecoration: "none",
  cursor: "pointer",
  transition: "background 200ms ease, color 200ms ease",
};

function GoogleBtn({ text, url }: { text: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={btnStyle}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#9BCB6C";
        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#FFFFFF";
        (e.currentTarget as HTMLAnchorElement).style.color = "#9BCB6C";
      }}
    >
      {text}
    </a>
  );
}

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
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Stars n={r.stars} />
      <p className="text-sm leading-relaxed flex-1 mt-3 mb-4" style={{ color: "#545454" }}>
        &ldquo;{r.text}&rdquo;
      </p>
      <span
        className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold w-fit mb-4"
        style={{
          background: "rgba(155,203,108,0.12)",
          color: "#9BCB6C",
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
          style={{ background: "#9BCB6C", fontFamily: "var(--font-montserrat)" }}
        >
          {r.initial}
        </div>
        <div>
          <p className="font-bold text-xs" style={{ fontFamily: "var(--font-montserrat)", color: "#1A1A1A" }}>
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
    <section className="site-pad" id="reviews" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(155,203,108,0.07) 0%, transparent 65%), #F7F8F6" }}>
      <div className="site-wrap">

        {/* Header — centered */}
        <div className="text-center mb-8">
          <p className="site-eyebrow mb-4">Klantbeoordelingen</p>
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              letterSpacing: "-0.028em",
              color: "#1A1A1A",
            }}
          >
            Wat onze klanten zeggen.
          </h2>
          {/* Google review button */}
          <GoogleBtn text="Review ons op Google" url={GOOGLE_REVIEW_URL} />
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

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: index === 0 ? "#F3F4F6" : "rgba(155,203,108,0.12)",
              border: "1px solid #E5E7EB",
              color: index === 0 ? "#D1D5DB" : "#9BCB6C",
              cursor: index === 0 ? "not-allowed" : "pointer",
            }}
            aria-label="Vorige"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="rounded-full"
                style={{
                  width: i === index ? "20px" : "8px",
                  height: "8px",
                  background: i === index ? "#9BCB6C" : "#D1D5DB",
                  transition: "width 300ms ease, background 300ms ease",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
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
              background: index === MAX_INDEX ? "#F3F4F6" : "rgba(155,203,108,0.12)",
              border: "1px solid #E5E7EB",
              color: index === MAX_INDEX ? "#D1D5DB" : "#9BCB6C",
              cursor: index === MAX_INDEX ? "not-allowed" : "pointer",
            }}
            aria-label="Volgende"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Second Google button below dots */}
        <div className="flex justify-center">
          <GoogleBtn text="Bekijk meer reviews op Google" url={GOOGLE_MAPS_URL} />
        </div>

      </div>
    </section>
  );
}
