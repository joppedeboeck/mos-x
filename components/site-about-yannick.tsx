export default function SiteAboutYannick() {
  const usps = [
    { icon: "🚁", title: "Drone-inspectie", sub: "Nauwkeurig en veilig" },
    { icon: "✓",  title: "Vaste prijs vooraf", sub: "Geen verrassingen" },
    { icon: "🛡", title: "Garantie op ons werk", sub: "Kwaliteit die blijft" },
  ];

  return (
    <section style={{ background: "#F8F8F8", padding: "80px 40px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        <div className="flex flex-col lg:flex-row" style={{ gap: "64px", alignItems: "center" }}>

          {/* ── LINKS: foto ── */}
          <div style={{ flex: "0 0 45%", width: "100%" }}>
            <div style={{
              background: "#E0E0E0",
              borderRadius: "16px",
              height: "500px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{ color: "#AAAAAA", fontSize: "14px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Foto Yannick
              </span>
            </div>
          </div>

          {/* ── RECHTS: tekst ── */}
          <div style={{ flex: "1 1 0" }}>

            {/* Label */}
            <p style={{
              fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.14em", color: "#9BCB6C", marginBottom: "16px",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}>
              Wie is MOS-X?
            </p>

            {/* Headline */}
            <h2 style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 700, fontSize: "36px", lineHeight: 1.2,
              color: "#1A1A1A", marginBottom: "24px", letterSpacing: "-0.02em",
            }}>
              Vakmanschap en technologie.{" "}
              <br />Voor{" "}
              <span style={{ color: "#9BCB6C" }}>het beste resultaat.</span>
            </h2>

            {/* Body */}
            <p style={{
              fontSize: "16px", lineHeight: 1.7, color: "#666666",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              marginBottom: "40px",
            }}>
              Hoi, ik ben Yannick. Ik startte MOS-X vanuit de ambitie om huiseigenaars een eerlijke en
              kwalitatieve service te bieden. Met mijn drone en professionele materialen zorg ik ervoor
              dat uw dak er weer jaren tegenaan kan.
            </p>

            {/* USPs */}
            <div className="flex flex-col sm:flex-row" style={{ gap: "32px" }}>
              {usps.map((u) => (
                <div key={u.title} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "20px", color: "#9BCB6C" }}>{u.icon}</span>
                  <span style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontWeight: 700, fontSize: "14px", color: "#1A1A1A",
                  }}>
                    {u.title}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "13px", color: "#888888",
                  }}>
                    {u.sub}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
