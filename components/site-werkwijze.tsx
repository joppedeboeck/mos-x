const steps = [
  {
    title: "Richtprijs aanvragen",
    desc: "Vul de calculator in en ontvang direct een vrijblijvende richtprijs op maat.",
  },
  {
    title: "Plaatsbezoek",
    desc: "Yannick komt langs voor een gratis drone-inspectie. U kijkt live mee.",
  },
  {
    title: "Offerte op maat",
    desc: "U ontvangt een duidelijke offerte met vaste prijs. Geen verrassingen achteraf.",
  },
  {
    title: "Uitvoering",
    desc: "Yannick voert het werk persoonlijk uit, netjes en efficiënt.",
  },
  {
    title: "Nazorg & garantie",
    desc: "Na het werk ontvangt u garantie en blijft Yannick bereikbaar voor vragen.",
  },
];

export default function SiteWerkwijze() {
  return (
    <section style={{ background: "#F8F8F8", padding: "80px 0", width: "100%" }}>
      <div className="site-wrap">

        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{
            fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.12em", color: "#9BCB6C", marginBottom: "12px",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          }}>
            Onze werkwijze
          </p>
          <h2 style={{
            fontSize: "36px", fontWeight: 800, color: "#1A1A1A",
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            letterSpacing: "-0.02em", lineHeight: 1.15,
          }}>
            Zo werken we.
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", position: "relative" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ width: "20%", textAlign: "center", position: "relative", paddingBottom: "8px" }}>

              {/* Connector line — left half */}
              {i > 0 && (
                <div style={{
                  position: "absolute", top: "27px", left: 0, width: "50%", height: "2px",
                  background: "#9BCB6C",
                }} />
              )}

              {/* Connector line — right half */}
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute", top: "27px", left: "50%", width: "50%", height: "2px",
                  background: "#E0E0E0",
                }} />
              )}

              {/* Circle */}
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "#FFFFFF", border: "2px solid #9BCB6C",
                color: "#9BCB6C", fontWeight: 800, fontSize: "18px",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px auto",
                boxShadow: "0 4px 16px rgba(155,203,108,0.20)",
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                position: "relative", zIndex: 1,
              }}>
                {i + 1}
              </div>

              {/* Content */}
              <div style={{ padding: "0 12px" }}>
                <p style={{
                  fontSize: "15px", fontWeight: 700, color: "#1A1A1A",
                  marginBottom: "8px", lineHeight: 1.3,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                }}>
                  {step.title}
                </p>
                <p style={{
                  fontSize: "13px", color: "#777777", lineHeight: 1.6,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}>
                  {step.desc}
                </p>
                {i === 0 && (
                  <a
                    href="#calculator"
                    style={{
                      display: "inline-block",
                      marginTop: "12px",
                      background: "#9BCB6C",
                      color: "#111111",
                      fontWeight: 700,
                      fontSize: "13px",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      textDecoration: "none",
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    }}
                  >
                    Bereken uw richtprijs →
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
