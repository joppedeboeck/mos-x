"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import BackLink from "@/components/back-link";
import PageLayout from "@/components/page-layout";

const includes = [
  "Reactie binnen 24 uur",
  "Vrijblijvend advies",
  "Rechtstreeks contact met Yannick",
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
      <section style={{ background: "#F7F8F6", paddingTop: "120px", paddingBottom: "24px" }}>
        <div className="site-wrap">
          <BackLink href="/" />
          <p style={{ fontSize: "13px", color: "#9BCB6C", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <Link
              href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{ color: homeHovered ? "#9BCB6C" : "#1A1A1A", textDecoration: "none", transition: "color 180ms ease" }}
            >Home</Link>
            <span style={{ margin: "0 6px", color: "#9BCB6C" }}>›</span>
            <span style={{ color: "#9BCB6C" }}>Contact</span>
          </p>
          <h1 className="leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#1A1A1A" }}>
            Neem contact op met <span style={{ color: "#9BCB6C" }}>Yannick.</span>
          </h1>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#545454" }}>
            Vul het formulier in of bel Yannick direct. Je ontvangt binnen 24 uur een reactie.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="site-pad" style={{ background: "#F7F8F6", paddingTop: "24px" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

            {/* ── Formulier ── */}
            <div className="rounded-2xl p-8"
              style={{ background: "#FFFFFF", border: "1px solid #9BCB6C", borderRadius: "16px", boxShadow: "0 2px 16px rgba(155,203,108,0.12)" }}>
              <p className="font-black text-lg mb-6"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                Stel je vraag
              </p>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Voornaam *</label>
                    <input type="text" name="voornaam" required placeholder="Jouw voornaam" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Achternaam *</label>
                    <input type="text" name="achternaam" required placeholder="Jouw achternaam" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>E-mailadres *</label>
                  <input type="email" name="email" required placeholder="jouw@email.be" style={inputStyle} />
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
                    <textarea name="bericht" required rows={4} placeholder="Vertel ons waarmee we je kunnen helpen..."
                      style={{ ...inputStyle, resize: "none" as const }} />
                  </div>
                )}
                {dienst !== "andere" && dienst !== "" && (
                  <div>
                    <label style={labelStyle}>Bericht (optioneel)</label>
                    <textarea name="bericht" rows={4} placeholder="Extra informatie over je dak of situatie..."
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

              {/* Wat mag je verwachten */}
              <div className="rounded-2xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid #9BCB6C", borderRadius: "16px", boxShadow: "0 2px 16px rgba(155,203,108,0.12)" }}>
                <p className="font-black mb-4"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#111111" }}>
                  Wat mag je verwachten?
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
              <div className="rounded-xl p-6" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
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
                    Ma - Za: 08:00 - 17:00 · Zo: Gesloten
                  </div>
                  <iframe
                    src="https://maps.google.com/maps?q=MOS-X+Dakontmossing+Coating+Grobbendonk&output=embed"
                    width="100%"
                    height="160"
                    style={{ border: "none", borderRadius: "8px", marginTop: "12px", display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="flex gap-2 mt-4 justify-center">
                    {[
                      { href: "https://www.facebook.com/profile.php?id=61551512872835", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                      { href: "https://www.instagram.com/mosx.be/", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                      { href: "https://www.linkedin.com/in/yannick-gysen-3b0018247/", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "8px", background: "#F7F8F6", color: "#9BCB6C", transition: "background 150ms ease" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#E8F5D9")}
                        onMouseLeave={e => (e.currentTarget.style.background = "#F7F8F6")}
                      >
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Werkgebied */}
              <div className="rounded-xl p-6" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
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
