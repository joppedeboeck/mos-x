import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Richtprijs berekenen",
    desc: "Bereken in 30 seconden een realistische richtprijs voor uw dak. Geen verplichtingen, geen persoonlijke gegevens.",
    cta: { label: "Bereken uw richtprijs", href: "/calculator" },
  },
  {
    n: "02",
    title: "Gratis dakdiagnose",
    desc: "Yannick inspecteert uw dak persoonlijk met een professionele drone. U kijkt live mee op de tablet. Volledig gratis.",
  },
  {
    n: "03",
    title: "Offerte op maat",
    desc: "Na de diagnose ontvangt u een vaste, transparante offerte. Geen verrassingen, geen verborgen kosten. U beslist zonder druk.",
  },
  {
    n: "04",
    title: "Reiniging of coating",
    desc: "Yannick voert het werk persoonlijk uit. Zachte bioreiniging, geen panschade. Coating met schriftelijke garantie tot 15 jaar.",
  },
  {
    n: "05",
    title: "Jarenlang genieten",
    desc: "U ontvangt fotobewijs van het resultaat en een onderhoudstip per post. Over 10 jaar? Dan bellen wij u.",
  },
];

export default function SiteProcess() {
  return (
    <section className="site-pad" id="hoe-het-werkt" style={{ background: "#F7F8F6" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="site-eyebrow mb-4">Hoe het werkt</p>
          <h2
            className="font-bold mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
              color: "#0D1510",
            }}
          >
            Van inspectie tot
            <span style={{ color: "#6DB33F" }}> jarenlange bescherming.</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
            Vijf duidelijke stappen. Geen verrassingen. Geen vakjargon.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: "20px",
              left: "calc(10% + 20px)",
              right: "calc(10% + 20px)",
              height: "1px",
              background: "#E5E7EB",
              zIndex: 0,
            }}
          />

          {/* Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative z-10"
            style={{ gap: "16px", alignItems: "stretch" }}
          >
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-start lg:items-center text-left lg:text-center"
                style={{ height: "100%" }}
              >
                {/* Number badge */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0 mb-5"
                  style={{
                    background: "linear-gradient(135deg, #6DB33F 0%, #5A9A32 100%)",
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    boxShadow: "0 0 0 4px #F7F8F6, 0 0 0 6px rgba(109,179,63,0.30)",
                  }}
                >
                  {parseInt(s.n)}
                </div>

                {/* Card */}
                <div
                  className="step-card w-full flex flex-col"
                  style={{
                    flex: 1,
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "14px",
                    padding: "28px 24px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <h3
                    className="font-bold leading-snug"
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: "15px",
                      marginBottom: "12px",
                      color: "#0D1510",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "#6B7280",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      flex: 1,
                    }}
                  >
                    {s.desc}
                  </p>

                  {/* CTA button */}
                  {s.cta && (
                    <Link
                      href={s.cta.href}
                      style={{
                        display: "block",
                        width: "100%",
                        marginTop: "auto",
                        paddingTop: "16px",
                        background: "#FFFFFF",
                        border: "1.5px solid #6DB33F",
                        color: "#6DB33F",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        fontSize: "13px",
                        fontWeight: 600,
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        textDecoration: "none",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        boxSizing: "border-box",
                        transition: "background 200ms ease, color 200ms ease",
                      }}
                    >
                      {s.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
