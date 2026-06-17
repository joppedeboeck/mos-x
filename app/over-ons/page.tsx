import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react";
import PageLayout from "@/components/page-layout";

const stats = [
  { value: "10+",  label: "jaar ervaring" },
  { value: "247+", label: "daken gereinigd" },
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
  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section style={{ background: "#F7F8F6", paddingTop: "144px", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9BCB6C", marginBottom: "16px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Over MOS-X
          </p>
          <h1 className="leading-tight mb-5 max-w-2xl"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#1A1A1A" }}>
            Uw dak in
            <span style={{ color: "#9BCB6C" }}> ervaren handen.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#545454" }}>
            MOS-X is het dakspecialisme van Yannick, persoonlijk, transparant en eerlijk. Actief in Antwerpen, Oost-Vlaanderen, Vlaams-Brabant en Limburg.
          </p>
        </div>
      </section>

      {/* ── Het verhaal ── */}
      <section className="site-pad" style={{ background: "#FFFFFF" }}>
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
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden img-before-roof"
                style={{ border: "1px solid #EEEEEE", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
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
      <section className="site-pad" style={{ background: "#F8F8F8" }}>
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

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center rounded-2xl"
                style={{ background: "#FFFFFF", border: "1px solid #EEEEEE" }}>
                <p className="font-black text-3xl mb-1 leading-none"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#9BCB6C" }}>
                  {s.value}
                </p>
                <p className="text-xs font-medium" style={{ color: "#555555" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="site-pad-sm" style={{ background: "#FFFFFF" }}>
        <div className="site-wrap">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 lg:p-10 text-center sm:text-left"
            style={{ background: "#9BCB6C", borderRadius: "16px" }}>
            <div>
              <p className="font-black text-xl mb-1"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                Maak kennis met Yannick
              </p>
              <p className="text-sm" style={{ color: "#2A2A2A" }}>
                Geen verkooppraatjes. Gewoon eerlijk advies en een vaste prijs vooraf.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/#contact" className="inline-flex items-center gap-2"
                style={{ background: "#FFFFFF", color: "#111111", borderRadius: "8px", padding: "12px 24px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Bereken uw richtprijs <ArrowRight className="w-4 h-4" />
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
