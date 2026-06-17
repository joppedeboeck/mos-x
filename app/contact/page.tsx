import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/page-layout";

const includes = [
  "Persoonlijk antwoord van Yannick",
  "Eerlijk advies zonder verkooppraatjes",
  "Vrijblijvende richtprijs op maat",
  "Reactie binnen 1 werkdag",
  "Geen verplichtingen",
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
  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section style={{ background: "#F7F8F6", paddingTop: "144px", paddingBottom: "80px" }}>
        <div className="site-wrap">
          <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9BCB6C", marginBottom: "16px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Contact
          </p>
          <h1 className="leading-tight mb-5 max-w-2xl"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#1A1A1A" }}>
            Neem contact op met
            <span style={{ color: "#9BCB6C" }}> Yannick.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#545454" }}>
            Vul het formulier in of bel ons direct. Yannick neemt contact op binnen 1 werkdag.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="site-pad" style={{ background: "#FFFFFF" }}>
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

                <div>
                  <label style={labelStyle}>Gemeente / Postcode *</label>
                  <input type="text" name="gemeente" required placeholder="bv. Gent of 9000" style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Interesse in (optioneel)</label>
                  <select name="dienst" style={{ ...inputStyle, color: "#555555" }}>
                    <option value="">Selecteer een dienst...</option>
                    <option value="dakontmossing">Dak ontmossen</option>
                    <option value="dakcoating">Dak coaten</option>
                    <option value="gevelreiniging">Gevel reinigen</option>
                    <option value="dakabonnement">Dakabonnement</option>
                    <option value="platdak">Plat dak reinigen</option>
                    <option value="weet_niet">Weet ik nog niet</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Bericht (optioneel)</label>
                  <textarea name="bericht" rows={4} placeholder="Extra informatie over uw dak of situatie..."
                    style={{ ...inputStyle, resize: "none" as const }} />
                </div>

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
                  100% vrijblijvend · Yannick reageert binnen 1 werkdag · Geen spam
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
                    Grobbendonk, Antwerpen
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "#555555" }}>
                    <Clock className="w-4 h-4 shrink-0" style={{ color: "#9BCB6C" }} />
                    Ma – Za: 08:00 – 17:00 · Zo: Gesloten
                  </div>
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
