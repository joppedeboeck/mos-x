import Link from "next/link";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Dak reinigen",
    price: "Prijs na diagnose",
    checks: [
      "Zachte bioreiniging",
      "Gootreiniging inbegrepen",
      "Geen panschade",
      "Preventieve naspray",
    ],
    cta: "Offerte aanvragen",
    href: "/contact",
    highlight: false,
    badge: null,
  },
  {
    title: "Dak reinigen + Coating",
    price: "Prijs na diagnose",
    checks: [
      "Alles van reiniging",
      "Schriftelijke garantie",
      "Waterafstoottest op locatie",
      "15 jaar bescherming",
    ],
    cta: "Offerte aanvragen",
    href: "/contact",
    highlight: true,
    badge: "Populairste",
  },
  {
    title: "Dakabonnement",
    price: "Prijs na diagnose",
    checks: [
      "Jaarlijkse drone-inspectie",
      "Preventieve behandeling",
      "Betaal enkel bij werk",
      "Vaste contactpersoon",
    ],
    cta: "Offerte aanvragen",
    href: "/contact",
    highlight: false,
    badge: null,
  },
];

export default function SitePricing() {
  return (
    <section className="site-pad" style={{ background: "#FFFFFF" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="site-eyebrow mb-4">Transparante prijzen</span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            Wat kost dakontmossing?
          </h2>
          <p style={{ color: "#545454", fontSize: "16px", maxWidth: "520px", margin: "0 auto" }}>
            Eerlijke prijzen. Geen verrassingen. Exacte prijs na gratis diagnose.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((p, i) => (
            <div
              key={i}
              className="pricing-card flex flex-col"
              style={{
                background: "#FFFFFF",
                border: p.highlight ? "2px solid #9BCB6C" : "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "32px 28px",
                boxShadow: p.highlight
                  ? "0 4px 32px rgba(155,203,108,0.15)"
                  : "0 2px 12px rgba(0,0,0,0.06)",
                position: "relative",
              }}
            >
              {/* Popular badge */}
              {p.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{
                    background: "#9BCB6C",
                    fontFamily: "var(--font-montserrat)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.badge}
                </div>
              )}

              <h3
                className="font-bold mb-2"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "18px",
                  color: "#1A1A1A",
                }}
              >
                {p.title}
              </h3>

              <p
                className="font-semibold mb-6"
                style={{ color: "#9BCB6C", fontSize: "15px" }}
              >
                {p.price}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {p.checks.map((c, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#9BCB6C" }} />
                    <span className="text-sm" style={{ color: "#545454" }}>{c}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  background: p.highlight ? "#9BCB6C" : "#FFFFFF",
                  color: p.highlight ? "#fff" : "#9BCB6C",
                  border: `1.5px solid #9BCB6C`,
                  borderRadius: "8px",
                  padding: "12px 20px",
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  textDecoration: "none",
                  transition: "background 200ms ease, color 200ms ease",
                }}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-sm" style={{ color: "#9CA3AF" }}>
          6% BTW voor woningen ouder dan 10 jaar (in plaats van 21%).
        </p>
      </div>
    </section>
  );
}
