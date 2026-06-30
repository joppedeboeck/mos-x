"use client";

import { CheckCircle } from "lucide-react";

export default function SiteAboutYannick() {
  const usps = [
    { title: "Afspraken die je kunt vertrouwen",       sub: "" },
    { title: "Premium kwaliteit zonder compromissen",  sub: "" },
    { title: "Snelle en heldere communicatie",         sub: "" },
    { title: "Een partner waarop je kunt blijven rekenen", sub: "" },
  ];

  return (
    <section style={{ background: "transparent", padding: "80px 0", overflow: "hidden" }}>
      <div className="about-yannick-wrap" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>

        <div className="flex flex-col lg:flex-row" style={{ gap: "32px", alignItems: "stretch" }}>

          {/* ── LINKS: foto ── */}
          <div className="about-yannick-photo-wrap" style={{ flex: "0 0 55%", position: "relative" }}>
            <div className="about-yannick-photo-inner" style={{
              position: "relative",
              height: "100%",
              minHeight: "460px",
            }}>
              <img
                src="/images/Yannick_foto_3_0.png"
                alt="Yannick - oprichter MOS-X"
                className="about-yannick-photo"
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  borderRadius: "16px",
                }}
              />

              {/* Naamlabel linksonder op de foto */}
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "16px",
                background: "rgba(11,15,12,0.75)",
                backdropFilter: "blur(6px)",
                borderRadius: "10px",
                padding: "10px 16px",
                zIndex: 10,
              }}>
                <p style={{
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: 700,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  margin: 0,
                }}>Yannick</p>
                <p style={{
                  color: "#9BCB6C",
                  fontSize: "12px",
                  fontWeight: 500,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  margin: "2px 0 0 0",
                }}>Oprichter & Vakspecialist MOS-X</p>
              </div>
            </div>
          </div>

          {/* ── RECHTS: tekst ── */}
          <div style={{ flex: "1 1 0" }}>

            {/* Headline */}
            <p style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 600, fontSize: "12px", color: "#9BCB6C",
              letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px",
            }}>
              WAAROM MOS-X
            </p>
            <h2 style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15,
              color: "#1A1A1A", marginBottom: "20px", letterSpacing: "-0.028em",
            }}>
              Dakontmossing zonder zorgen.
            </h2>

            {/* Body */}
            <p style={{
              fontSize: "16px", lineHeight: 1.7, color: "#666666",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              marginBottom: "40px",
            }}>
              Kiezen voor MOS-X is kiezen voor zekerheid. Niet alleen in het eindresultaat, maar tijdens het volledige traject. Van duidelijke communicatie en professionele uitvoering tot hoogwaardige producten en blijvende ondersteuning. Zo hoef jij je nergens zorgen over te maken.
            </p>

            {/* USPs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {usps.map((u) => (
                <div key={u.title} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{
                    flexShrink: 0,
                    width: "34px", height: "34px",
                    background: "rgba(155,203,108,0.12)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: "1px",
                  }}>
                    <CheckCircle size={17} color="#9BCB6C" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontWeight: 700, fontSize: "14px", color: "#1A1A1A",
                      marginBottom: "2px",
                    }}>{u.title}</p>
                    {u.sub && <p style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "13px", color: "#888888",
                    }}>{u.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="about-btns" style={{ display: "flex", gap: "12px", marginTop: "36px", flexWrap: "wrap" }}>
              <a
                href="/over-ons"
                style={{
                  display: "inline-flex", alignItems: "center",
                  border: "2px solid #9BCB6C", color: "#9BCB6C",
                  background: "transparent", borderRadius: "8px",
                  padding: "12px 24px", fontSize: "15px", fontWeight: 700,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  textDecoration: "none", transition: "background 200ms ease, color 200ms ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#9BCB6C"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#9BCB6C"; }}
              >
                Meer over ons
              </a>
              <a
                href="#calculator"
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "#9BCB6C", color: "#FFFFFF",
                  border: "2px solid #9BCB6C", borderRadius: "8px",
                  padding: "12px 24px", fontSize: "15px", fontWeight: 700,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  textDecoration: "none", transition: "background 200ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
                onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
              >
                Bereken je richtprijs
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
