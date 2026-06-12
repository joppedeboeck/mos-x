"use client";

import { useState } from "react";

const GREEN = "#5A9E2F";
const TOTAL_STEPS = 5;

function ProgressBar({ step }: { step: number }) {
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "13px", color: "#888", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
          Stap {step} van {TOTAL_STEPS}
        </span>
        <span style={{ fontSize: "13px", fontWeight: 700, color: GREEN, fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
          {pct}%
        </span>
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} style={{
            flex: 1, height: "4px", borderRadius: "2px",
            background: i < step ? GREEN : "#E5E7EB",
            transition: "background 0.3s ease",
          }} />
        ))}
      </div>
    </div>
  );
}

function PlaceholderImg({ label }: { label: string }) {
  return (
    <div style={{
      width: "72px", height: "56px", borderRadius: "8px",
      background: "#E8E8E8", flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "10px", color: "#999", textAlign: "center", padding: "4px",
    }}>
      {label}
    </div>
  );
}

function ChoiceRow({ label, onClick, selected }: { label: string; onClick: () => void; selected: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", display: "flex", alignItems: "center", gap: "16px",
        padding: "14px 16px", borderRadius: "12px", cursor: "pointer",
        border: selected ? `2px solid ${GREEN}` : "2px solid #E5E7EB",
        background: selected ? "rgba(90,158,47,0.05)" : "#FFFFFF",
        transition: "all 0.2s ease", textAlign: "left", marginBottom: "10px",
      }}
    >
      <PlaceholderImg label={label.split(" ")[0]} />
      <div style={{ flex: 1, fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 600, fontSize: "15px", color: "#111" }}>
        {label}
      </div>
      <div style={{
        width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0,
        border: selected ? "none" : "2px solid #DDD",
        background: selected ? GREEN : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {selected && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
      </div>
    </button>
  );
}

function ExtraCard({ title, bullets, selected, onClick }: { title: string; bullets: string[]; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", display: "flex", alignItems: "flex-start", gap: "14px",
        padding: "16px", borderRadius: "12px", cursor: "pointer",
        border: selected ? `2px solid ${GREEN}` : "2px solid #E5E7EB",
        background: selected ? "rgba(90,158,47,0.05)" : "#FFFFFF",
        transition: "all 0.2s ease", textAlign: "left", marginBottom: "10px",
      }}
    >
      <div style={{
        width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0, marginTop: "2px",
        border: selected ? "none" : "2px solid #DDD",
        background: selected ? GREEN : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {selected && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "15px", color: "#111", marginBottom: bullets.length ? "8px" : "0" }}>
          {title}
        </div>
        {bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: "6px", fontSize: "13px", color: "#555", marginBottom: "3px" }}>
            <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>✓</span> {b}
          </div>
        ))}
      </div>
    </button>
  );
}

function Field({ label, placeholder, value, onChange, type = "text" }: { label: string; placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {label}
      </label>
      <input
        type={type} placeholder={placeholder} value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: "100%", padding: "13px 16px", borderRadius: "10px",
          border: "1.5px solid #E5E7EB", background: "#F8F8F8",
          fontSize: "15px", color: "#111", outline: "none",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          boxSizing: "border-box",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
        onBlur={e => (e.currentTarget.style.borderColor = "#E5E7EB")}
      />
    </div>
  );
}

const NextBtn = ({ onClick, disabled, label }: { onClick: () => void; disabled?: boolean; label?: string }) => (
  <button onClick={onClick} disabled={disabled} style={{
    width: "100%", padding: "14px", borderRadius: "50px", border: "none",
    background: disabled ? "#DDD" : GREEN, color: disabled ? "#AAA" : "#fff",
    fontWeight: 700, fontSize: "15px", cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
    boxShadow: disabled ? "none" : "0 4px 16px rgba(90,158,47,0.25)",
  }}>
    {label ?? "Ga verder →"}
  </button>
);

const PrivacyNote = () => (
  <p style={{ textAlign: "center", fontSize: "11px", color: "#CCC", marginTop: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
    Uw gegevens worden vertrouwelijk behandeld en niet gedeeld met derden.
  </p>
);

export default function SitePricing() {
  const [step, setStep] = useState(1);
  const [opp, setOpp] = useState(150);
  const [woning, setWoning] = useState("");
  const [dak, setDak] = useState("");
  const [extra, setExtra] = useState("");
  const [form, setForm] = useState({ naam: "", tel: "", email: "", postcode: "", adres: "" });
  const [done, setDone] = useState(false);

  const next = () => setStep(s => Math.min(s + 1, TOTAL_STEPS));
  const prev = () => setStep(s => Math.max(s - 1, 1));

  const woningTypes = ["Vrijstaande woning", "Halfopen bebouwing", "Rijwoning"];
  const dakTypes = ["Dakpannen (keramisch of beton)", "Natuurleien", "Kunstleien (asbest vrij)", "Overzetdak", "Ik weet het niet"];
  const extraOpties = [
    { id: "hydrofuge", title: "Hydrofuge", bullets: ["Waterafstotende bescherming", "Mos en vuil hechten minder snel", "Dak blijft ademend"] },
    { id: "coating", title: "Dakcoating — tot 10 jaar garantie", bullets: ["Nieuwe kleur en uitstraling", "Beschermt tegen mos en algen", "Verlengt de levensduur van het dak"] },
    { id: "geen", title: "Geen extra behandeling", bullets: [] },
  ];

  return (
    <section style={{ background: "transparent", padding: "0 24px 80px", marginTop: "-80px", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* 2-kolom wrapper */}
        <div className="flex flex-col lg:flex-row lg:items-start" style={{ gap: "48px", paddingTop: "100px" }}>

          {/* ── LINKS: uitleg (40%) ── */}
          <div className="lg:sticky" style={{ flex: "0 0 38%", paddingTop: "8px", top: "100px" }}>
            <span style={{
              display: "inline-block", fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase", color: GREEN,
              fontFamily: "var(--font-montserrat), system-ui, sans-serif", marginBottom: "16px",
            }}>
              Binnen 60 seconden
            </span>
            <h2 style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800,
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em",
              color: "#111", marginBottom: "28px", lineHeight: 1.2,
            }}>
              Ontvang direct een richtprijs voor uw dak.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {[["🚫", "Geen verplichtingen"], ["✓", "100% transparant"], ["⏱", "Binnen 60 seconden resultaat"]].map(([icon, txt]) => (
                <div key={txt as string} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "22px", width: "32px", textAlign: "center", flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: "15px", color: "#444", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RECHTS: calculator kaart (60%) ── */}
          <div style={{ flex: "1 1 60%" }}>
        <div style={{ background: "#FFFFFF", borderRadius: "16px", padding: "36px", boxShadow: "0 4px 32px rgba(0,0,0,0.10)" }}>

          {done ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ fontSize: "52px", marginBottom: "20px" }}>✅</div>
              <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "22px", color: "#111", marginBottom: "12px" }}>
                Bedankt!
              </h3>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.7, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Yannick neemt binnen <strong>1 werkdag</strong> contact met u op met uw persoonlijke richtprijs.
              </p>
            </div>
          ) : (
            <>
              <ProgressBar step={step} />

              {step === 1 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "28px" }}>
                    Hoe groot is uw dak ongeveer?
                  </h3>
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <span style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "64px", color: GREEN, lineHeight: 1 }}>
                      {opp}
                    </span>
                    <span style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "28px", color: GREEN }}> m²</span>
                  </div>
                  <input type="range" min={50} max={300} step={5} value={opp}
                    onChange={e => setOpp(Number(e.target.value))}
                    style={{ width: "100%", accentColor: GREEN, marginBottom: "8px" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#AAA", marginBottom: "28px" }}>
                    <span>50 m²</span><span>300 m²</span>
                  </div>
                  <NextBtn onClick={next} />
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "20px" }}>
                    Wat voor type woning is het?
                  </h3>
                  {woningTypes.map(w => (
                    <ChoiceRow key={w} label={w} selected={woning === w} onClick={() => { setWoning(w); setTimeout(next, 220); }} />
                  ))}
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "20px" }}>
                    Wat voor dakpannen liggen op uw dak?
                  </h3>
                  {dakTypes.map(d => (
                    <ChoiceRow key={d} label={d} selected={dak === d} onClick={() => { setDak(d); setTimeout(next, 220); }} />
                  ))}
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "4px" }}>
                    Wilt u uw dak extra laten beschermen?
                  </h3>
                  <p style={{ fontSize: "13px", color: "#999", marginBottom: "20px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>(optioneel)</p>
                  {extraOpties.map(o => (
                    <ExtraCard key={o.id} title={o.title} bullets={o.bullets} selected={extra === o.id} onClick={() => setExtra(o.id)} />
                  ))}
                  <div style={{ marginTop: "8px" }}>
                    <NextBtn onClick={next} disabled={!extra} />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "20px" }}>
                    Vul uw gegevens in voor uw persoonlijke prijs
                  </h3>
                  <Field label="Naam" placeholder="Uw volledige naam" value={form.naam} onChange={v => setForm(f => ({ ...f, naam: v }))} />
                  <Field label="Telefoon" placeholder="Uw telefoonnummer" value={form.tel} onChange={v => setForm(f => ({ ...f, tel: v }))} type="tel" />
                  <Field label="E-mailadres" placeholder="uw@email.be" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} type="email" />
                  <Field label="Postcode" placeholder="2000" value={form.postcode} onChange={v => setForm(f => ({ ...f, postcode: v }))} />
                  <Field label="Adres" placeholder="Straat en huisnummer (bv. Kerkstraat 12, Antwerpen)" value={form.adres} onChange={v => setForm(f => ({ ...f, adres: v }))} />
                  <div style={{ marginTop: "8px" }}>
                    <NextBtn onClick={() => setDone(true)} disabled={!form.naam || !form.tel} label="Ontvang mijn richtprijs →" />
                  </div>
                </div>
              )}

              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", justifyContent: step > 1 ? "flex-start" : "center" }}>
                {step > 1 && (
                  <button onClick={prev} style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: "14px", color: "#888", fontFamily: "var(--font-inter), system-ui, sans-serif",
                    display: "flex", alignItems: "center", gap: "4px", padding: 0,
                  }}>
                    ← Terug
                  </button>
                )}
              </div>
              <PrivacyNote />
            </>
          )}
        </div>
          </div>{/* einde rechts */}
        </div>{/* einde 2-kolom */}
      </div>
    </section>
  );
}
