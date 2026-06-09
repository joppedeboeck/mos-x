import Link from "next/link";
import { CheckCircle, Phone, Star } from "lucide-react";

interface Municipality {
  name: string;
  zip: string;
}

interface RegioPageProps {
  province: string;            // e.g. "Vlaams-Brabant"
  municipalities: Municipality[];
  intro: string[];             // 2 paragraphs
  climateText: string;         // local climate paragraph
}

export default function RegioPage({ province, municipalities, intro, climateText }: RegioPageProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{ background: "#1A1A1A", paddingTop: "130px", paddingBottom: "64px" }}
      >
        <div className="site-wrap">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.40)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/#werkgebied" style={{ color: "rgba(255,255,255,0.40)", textDecoration: "none" }}>Regio&apos;s</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.70)" }}>{province}</span>
          </nav>

          <h1
            className="font-black text-white leading-tight mb-4"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Dakontmossing in {province}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px", maxWidth: "600px" }}>
            Erkende dakspecialist, actief in heel {province}. Persoonlijk contact. Gratis drone-inspectie.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "#FFFFFF", padding: "60px 0 80px" }}>
        <div className="site-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* ── LEFT COLUMN ── */}
            <div>

              {/* H2: Intro */}
              <h2
                className="font-bold mb-6"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  color: "#9BCB6C",
                }}
              >
                MOS-X: uw dakspecialist in {province}
              </h2>
              <div className="space-y-4 mb-10" style={{ color: "#545454", fontSize: "16px", lineHeight: 1.75 }}>
                {intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              {/* Gemeenten */}
              <h2
                className="font-bold mb-2"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                  color: "#1A1A1A",
                }}
              >
                Gemeenten waar wij actief zijn
              </h2>
              <p className="mb-6" style={{ color: "#545454", fontSize: "15px" }}>
                Vraag uw gratis diagnose aan in uw gemeente.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {municipalities.map((m) => (
                  <Link
                    key={m.name}
                    href="/contact"
                    className="municipality-card block"
                    style={{
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                      padding: "14px 16px",
                      textDecoration: "none",
                      transition: "border-color 200ms ease",
                    }}
                  >
                    <p className="font-bold text-sm" style={{ color: "#1A1A1A" }}>{m.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#545454" }}>{m.zip}</p>
                  </Link>
                ))}
              </div>

              {/* Diensten */}
              <h2
                className="font-bold mb-4"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                  color: "#1A1A1A",
                }}
              >
                Onze diensten in {province}
              </h2>
              <ul className="space-y-3 mb-10">
                {[
                  { title: "Dak reinigen",     desc: "biologische verwijdering van mos, algen en korstmos" },
                  { title: "Dak coaten",        desc: "beschermende coating met schriftelijke garantie" },
                  { title: "Dakabonnement",     desc: "jaarlijkse controle en preventieve behandeling" },
                ].map((s) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#9BCB6C" }} />
                    <span style={{ color: "#545454", fontSize: "15px" }}>
                      <strong style={{ color: "#1A1A1A" }}>{s.title}</strong> — {s.desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Klimaat */}
              <h2
                className="font-bold mb-4"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                  color: "#1A1A1A",
                }}
              >
                Waarom dakonderhoud belangrijk is in {province}
              </h2>
              <p style={{ color: "#545454", fontSize: "16px", lineHeight: 1.75 }}>{climateText}</p>

            </div>

            {/* ── RIGHT SIDEBAR (sticky) ── */}
            <div style={{ position: "sticky", top: "112px" }}>
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "28px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "var(--font-montserrat)", fontSize: "17px", color: "#1A1A1A" }}
                >
                  Gratis diagnose aanvragen
                </h3>
                <p className="text-sm mb-5" style={{ color: "#545454" }}>
                  Yannick komt langs binnen 2 weken. Volledig gratis.
                </p>

                <div style={{ borderTop: "1px solid #E5E7EB", marginBottom: "20px" }} />

                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    width: "100%",
                    background: "#9BCB6C",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "13px 20px",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "var(--font-montserrat)",
                    textDecoration: "none",
                    textAlign: "center",
                    boxSizing: "border-box",
                    marginBottom: "12px",
                    transition: "background 200ms ease",
                  }}
                >
                  Gratis diagnose aanvragen &rarr;
                </Link>

                <a
                  href="tel:+32468352869"
                  className="flex items-center justify-center gap-2 text-sm font-semibold"
                  style={{ color: "#9BCB6C", textDecoration: "none" }}
                >
                  <Phone className="w-4 h-4" />
                  +32 468 35 28 69
                </a>

                <div style={{ borderTop: "1px solid #E5E7EB", margin: "20px 0" }} />

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F59E0B" }} />
                    ))}
                  </div>
                  <span className="text-sm" style={{ color: "#545454" }}>
                    5.0 &middot; 12 Google Reviews
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: "#F7F8F6", padding: "64px 0" }}>
        <div className="site-wrap text-center">
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            Vraag vandaag nog uw gratis diagnose aan
          </h2>
          <p className="mb-8 mx-auto" style={{ color: "#545454", fontSize: "16px", maxWidth: "500px" }}>
            Yannick inspecteert uw dak persoonlijk in heel {province}. Volledig gratis, geen verplichtingen.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#9BCB6C",
              color: "#fff",
              borderRadius: "8px",
              padding: "14px 32px",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "var(--font-montserrat)",
              textDecoration: "none",
              transition: "background 200ms ease",
            }}
          >
            Gratis diagnose aanvragen &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
