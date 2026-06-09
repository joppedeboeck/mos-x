import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Dak reinigen",
    short: "Bioreiniging zonder hogedrukreiniging",
    desc: "Mos, algen en korstmos worden grondig verwijderd. Uw pannen blijven intact, geen agressieve methodes.",
    checks: ["Zachte bioreiniging", "Gootreiniging inbegrepen", "Geen panschade"],
    href: "/diensten/dakontmossing",
    img: "/images/dak-reinigen.webp",
  },
  {
    title: "Dak coaten",
    short: "15 jaar bescherming met garantie",
    desc: "Na de reiniging beschermt een kwalitatieve coating uw dak jarenlang tegen vocht, vorst en hergroei.",
    checks: ["Schriftelijke garantie", "Waterafstoottest op locatie", "Meest aangevraagde dienst"],
    href: "/diensten/dakcoating",
    img: "/images/dak-coaten.webp",
  },
  {
    title: "Dakabonnement",
    short: "Jaarlijkse controle en preventieve behandeling",
    desc: "Nooit meer verrast door mos of schade. Yannick controleert jaarlijks uw dak en grijpt in waar nodig.",
    checks: ["Betaal enkel bij werk", "Preventieve behandeling", "Vaste contactpersoon"],
    href: "/contact",
    img: "/images/dakabonnement.webp",
  },
];

export default function SiteServices() {
  return (
    <section className="site-pad" id="diensten" style={{ background: "#F7F8F6" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="site-eyebrow mb-4">Onze diensten</span>
          <h2
            className="font-bold leading-tight mb-3"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            Alles voor een gezond dak.
          </h2>
          <p
            className="font-semibold"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              color: "#9BCB6C",
            }}
          >
            Altijd met diagnose vooraf.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="group flex flex-col service-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                overflow: "hidden",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transition: "transform 400ms ease" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(26,26,26,0.08) 0%, rgba(26,26,26,0.70) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p
                    className="font-bold text-white text-lg leading-tight"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                  >
                    {s.title}
                  </p>
                  <p className="text-white/60 text-xs mt-0.5">{s.short}</p>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <p style={{ color: "#545454", fontSize: "15px", lineHeight: "1.7" }} className="mb-6">
                  {s.desc}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {s.checks.map((c, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#9BCB6C" }} />
                      <span className="text-sm" style={{ color: "#1A1A1A" }}>{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-1.5" style={{ color: "#9BCB6C", fontSize: "14px", fontWeight: 600 }}>
                  Meer info
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 site-btn-green-outline"
            style={{
              border: "1.5px solid #9BCB6C",
              color: "#9BCB6C",
              background: "#FFFFFF",
              borderRadius: "8px",
              padding: "0.875rem 1.75rem",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
            }}
          >
            Alle diensten bekijken <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
