"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/page-layout";

const includes = [
  "Snelle werkplanning",
  "Persoonlijk antwoord van Yannick",
  "Reactie binnen 24u",
];

const regions = [
  "Vlaams-Brabant",
  "Oost-Vlaanderen",
  "Antwerpen",
  "Limburg",
];

const inputStyle = {
  background: "#F8F8F8",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  color: "#111111",
  width: "100%",
  padding: "12px 16px",
  fontSize: "14px",
  outline: "none",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  fontWeight: 600,
  color: "#555555",
  marginBottom: "6px",
  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
};

export default function ContactPage() {
  const [homeHovered, setHomeHovered] = useState(false);
  const [dienst, setDienst] = useState("");

  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <p style={{ fontSize: "13px", color: "#9BCB6C", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link
              href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{ color: homeHovered ? "#1A1A1A" : "#9BCB6C", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>›</span>
            <span style={{ color: "#9BCB6C" }}>Contact</span>
          </p>
          <h1 className="leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#1A1A1A", whiteSpace: "nowrap" }}>
            Neem contact op met <span style={{ color: "#9BCB6C" }}>Yannick.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#545454", whiteSpace: "nowrap" }}>
            Vul het formulier in of bel ons direct. Yannick neemt contact op binnen 24u.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="site-pad" style={{ background: "#FFFFFF", paddingTop: "24px" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

            {/* ── Formulier ── */}
            <div className="rounded-2xl p-8"
              style={{ background: "#FFFFFF", border: "1px solid #EEEEEE", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <p className="font-black text-lg mb-6"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                Stuur een bericht
              </p>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Voornaam *</label>
                    <input type="text" name="voornaam" required placeholder="Uw voornaam" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Achternaam *</label>
                    <input type="text" name="achternaam" required placeholder="Uw achternaam" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>E-mailadres *</label>
                  <input type="email" name="email" required placeholder="uw@email.be" style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Telefoonnummer *</label>
                  <input type="tel" name="telefoon" required placeholder="0470 00 00 00" style={inputStyle} />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Straat en huisnummer *</label>
                    <input type="text" name="straat" required placeholder="bv. Kerkstraat 12" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Gemeente / Postcode *</label>
                    <input type="text" name="gemeente" required placeholder="bv. Gent of 9000" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Interesse in *</label>
                  <select name="dienst" required value={dienst} onChange={e => setDienst(e.target.value)} style={{ ...inputStyle, color: dienst === "" ? "#AAAAAA" : "#111111" }}>
                    <option value="" disabled style={{ color: "#AAAAAA" }}>Selecteer een dienst...</option>
                    <option value="dakreiniging" style={{ color: "#1A1A1A" }}>Dakreiniging</option>
                    <option value="dakcoating" style={{ color: "#1A1A1A" }}>Dakcoating</option>
                    <option value="dakabonnement" style={{ color: "#1A1A1A" }}>Dakabonnement</option>
                    <option value="andere" style={{ color: "#1A1A1A" }}>Andere</option>
                  </select>
                </div>

                {dienst === "andere" && (
                  <div>
                    <label style={labelStyle}>Bericht *</label>
                    <textarea name="bericht" required rows={4} placeholder="Vertel ons waarmee we u kunnen helpen..."
                      style={{ ...inputStyle, resize: "none" as const }} />
                  </div>
                )}
                {dienst !== "andere" && dienst !== "" && (
                  <div>
                    <label style={labelStyle}>Bericht (optioneel)</label>
                    <textarea name="bericht" rows={4} placeholder="Extra informatie over uw dak of situatie..."
                      style={{ ...inputStyle, resize: "none" as const }} />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2"
                  style={{
                    background: "#9BCB6C", color: "#111111", borderRadius: "8px",
                    padding: "14px 24px", border: "none", cursor: "pointer",
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontWeight: 700, fontSize: "15px",
                  }}
                >
                  Verstuur bericht <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs" style={{ color: "#AAAAAA", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                  Yannick reageert binnen 24 uur
                </p>
              </form>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5">

              {/* Wat mag u verwachten */}
              <div className="rounded-2xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid #EEEEEE", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className="font-black mb-4"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                  Wat mag u verwachten?
                </p>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#9BCB6C" }} />
                      <span className="text-sm" style={{ color: "#555555" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct bellen */}
              <div className="rounded-xl p-6" style={{ background: "#F8F8F8", borderRadius: "12px" }}>
                <p className="font-black mb-4"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                  Liever direct bellen?
                </p>
                <div className="space-y-3">
                  <a href="tel:+32468352869" className="flex items-center gap-3 text-sm" style={{ color: "#555555", textDecoration: "none" }}>
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "#9BCB6C" }} />
                    +32 468 35 28 69
                  </a>
                  <a href="mailto:info@mos-x.be" className="flex items-center gap-3 text-sm" style={{ color: "#555555", textDecoration: "none" }}>
                    <Mail className="w-4 h-4 shrink-0" style={{ color: "#9BCB6C" }} />
                    info@mos-x.be
                  </a>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "#555555" }}>
                    <MapPin className="w-4 h-4 shrink-0" style={{ color: "#9BCB6C" }} />
                    2280 Grobbendonk, Bovenpad 100
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "#555555" }}>
                    <Clock className="w-4 h-4 shrink-0" style={{ color: "#9BCB6C" }} />
                    Ma – Za: 08:00 – 17:00 · Zo: Gesloten
                  </div>
                  <iframe
                    src="https://maps.google.com/maps?q=MOS-X+Dakontmossing+Coating+Grobbendonk&output=embed"
                    width="100%"
                    height="160"
                    style={{ border: "none", borderRadius: "8px", marginTop: "12px", display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Werkgebied */}
              <div className="rounded-xl p-6" style={{ background: "#F8F8F8", borderRadius: "12px" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#AAAAAA", fontFamily: "var(--font-montserrat)" }}>
                  Werkgebied
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {regions.map(r => (
                    <span key={r} className="px-2.5 py-1 text-[11px]"
                      style={{ background: "#F0F7E8", border: "1px solid #9BCB6C", color: "#5A9E2F", borderRadius: "50px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                      {r}
                    </span>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: "#AAAAAA", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                  Yannick werkt in heel Vlaanderen.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
