"use client";

import { useState } from "react";

const GREEN = "#9BCB6C";
const TOTAL_STEPS = 5;

const STEP_NAMES = ["Oppervlakte", "Woningtype", "Daktype", "Extra opties", "Richtprijs"];

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="lg:hidden" style={{ textAlign: "center", marginBottom: "28px" }}>
      <p style={{
        fontSize: "15px", fontWeight: 700,
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        color: GREEN, marginBottom: "12px", letterSpacing: "-0.01em",
      }}>
        {step}. {STEP_NAMES[step - 1]}
      </p>
      <div style={{ display: "flex", gap: "6px", justifyContent: "center" }}>
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} style={{
            flex: 1, maxWidth: "56px", height: "8px", borderRadius: "4px",
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

function ChoiceRow({ label, onClick, selected, imgSrc }: { label: string; onClick: () => void; selected: boolean; imgSrc?: string }) {
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
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={label}
          style={{ width: "72px", height: "56px", borderRadius: "8px", objectFit: "cover", flexShrink: 0 }}
        />
      ) : (
        <PlaceholderImg label={label.split(" ")[0]} />
      )}
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
    width: "100%", padding: "14px", borderRadius: "8px", border: "none",
    background: disabled ? "#DDD" : GREEN, color: disabled ? "#AAA" : "#fff",
    fontWeight: 700, fontSize: "15px", cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
    boxShadow: disabled ? "none" : "0 4px 16px rgba(90,158,47,0.25)",
  }}>
    {label ?? "Ga verder →"}
  </button>
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

  const tabLabels = ["Oppervlakte", "Woningtype", "Daktype", "Extra opties", "Richtprijs"];

  const woningTypes = [
    { label: "Rijwoning",          img: "/images/Rijtjes.png" },
    { label: "Halfopen bebouwing", img: "/images/halfopen.png" },
    { label: "Vrijstaande woning", img: "/images/vrijstaand.png" },
  ];
  const dakTypes = ["Dakpannen (keramisch of beton)", "Natuurleien", "Kunstleien (asbest vrij)", "Overzetdak", "Ik weet het niet"];
  const extraOpties = [
    { id: "hydrofuge", title: "Hydrofuge", bullets: ["Waterafstotende bescherming", "Mos en vuil hechten minder snel", "Dak blijft ademend"] },
    { id: "coating", title: "Dakcoating — tot 10 jaar garantie", bullets: ["Nieuwe kleur en uitstraling", "Beschermt tegen mos en algen", "Verlengt de levensduur van het dak"] },
    { id: "geen", title: "Geen extra behandeling", bullets: [] },
  ];

  return (
    <section id="calculator" className="site-pricing-section" style={{ background: "transparent", padding: "0 clamp(12px, 4vw, 40px) 60px", marginTop: "-40px", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* Witte zweefkaart */}
        <div className="site-pricing-card" style={{ background: "#FFFFFF", borderRadius: "16px", boxShadow: "0 8px 48px rgba(0,0,0,0.15)", padding: "clamp(20px, 4vw, 40px)" }}>
          <div className="flex flex-col lg:flex-row lg:items-stretch" style={{ gap: "48px" }}>

            {/* ── LINKS: uitleg ── */}
            <div className="hidden lg:flex" style={{
              flex: "0 0 30%", minWidth: "220px",
              flexDirection: "column", justifyContent: "flex-start",
              borderRight: "1px solid #EEEEEE",
              margin: "-40px 0 -40px -40px",
              padding: "48px 32px 0 40px",
              borderRadius: "16px 0 0 16px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Dakfoto — absoluut onderaan, van rand tot rand */}
              <img
                src="/images/Grijze_foto_dak_calculator_.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  width: "100%",
                  height: "52%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  pointerEvents: "none",
                }}
              />
              {/* Gradient: wit bovenaan → transparant naar foto */}
              <div style={{
                position: "absolute",
                top: 0, bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }} />
              {/* Tekst — boven de gradient */}
              <div style={{ position: "relative", zIndex: 2 }}>
              <span style={{
                display: "inline-block", fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase", color: GREEN,
                fontFamily: "var(--font-montserrat), system-ui, sans-serif", marginBottom: "14px",
              }}>
                Binnen 60 seconden
              </span>
              <h2 style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800,
                fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)", letterSpacing: "-0.02em",
                color: "#111", marginBottom: "24px", lineHeight: 1.25,
              }}>
                Ontvang binnen 1 minuut een <span style={{ color: GREEN }}>richtprijs</span> voor jouw dak.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Binnen 1 minuut resultaat", "Persoonlijk dakadvies", "Vrijblijvend en zonder verplichtingen"].map((txt) => (
                  <div key={txt} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: GREEN, flexShrink: 0, display: "inline-block" }} />
                    <span style={{ fontSize: "14px", color: "#555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{txt}</span>
                  </div>
                ))}
              </div>
              </div>{/* einde tekst wrapper */}
            </div>

            {/* ── RECHTS: tabs + stap content ── */}
            <div style={{ flex: "1 1 0" }}>

              {/* Titel — mobile only */}
              {!done && (
                <div className="lg:hidden" style={{ textAlign: "center", marginBottom: "20px" }}>
                  <p style={{
                    fontSize: "20px", fontWeight: 800,
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    color: "#111", letterSpacing: "-0.02em", lineHeight: 1.3,
                    marginBottom: "16px",
                  }}>
                    Ontvang binnen 1 minuut een <span style={{ color: GREEN }}>richtprijs</span> voor jouw dak.
                  </p>
                  <div style={{ width: "100%", height: "1px", background: "#E5E7EB", margin: "0 0 4px" }} />
                </div>
              )}

              {/* Stap indicator — mobile only */}
              {!done && <StepIndicator step={step} />}

              {/* Tab navigatie — desktop only */}
              {!done && (
                <div className="hidden lg:flex" style={{ justifyContent: "center", marginBottom: "28px", gap: "24px", overflowX: "auto", WebkitOverflowScrolling: "touch" as const }}>
                  {tabLabels.map((label, i) => {
                    const tabStep = i + 1;
                    const isActive = step === tabStep;
                    const isDone = step > tabStep;
                    return (
                      <button
                        key={label}
                        onClick={() => isDone ? setStep(tabStep) : undefined}
                        style={{
                          padding: "10px 16px 8px", border: "none", background: "none",
                          fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                          fontSize: "13px", fontWeight: isActive ? 700 : 500,
                          color: isActive ? GREEN : isDone ? GREEN : "#AAAAAA",
                          cursor: isDone ? "pointer" : "default",
                          whiteSpace: "nowrap", flexShrink: 0,
                          transition: "color 0.2s",
                          display: "flex", flexDirection: "column", alignItems: "stretch",
                        }}
                      >
                        <span>{tabStep}. {label}</span>
                        <div style={{
                          height: "3px", borderRadius: "2px", marginTop: "6px",
                          background: isActive ? GREEN : "#E8E8E8",
                        }} />
                      </button>
                    );
                  })}
                </div>
              )}

        <div className="site-pricing-steps" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(0px, 3vw, 40px)", minHeight: "280px" }}>

          {done ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ fontSize: "52px", marginBottom: "20px" }}>✅</div>
              <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 800, fontSize: "22px", color: "#111", marginBottom: "12px" }}>
                Bedankt!
              </h3>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.7, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Yannick neemt binnen <strong>1 werkdag</strong> contact met je op met jouw persoonlijke richtprijs.
              </p>
            </div>
          ) : (
            <>

              {step === 1 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "28px" }}>
                    Hoe groot is je dak ongeveer?
                  </h3>
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <span style={{
                      display: "inline-block",
                      background: "#F5F5F5", borderRadius: "8px", padding: "8px 20px",
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontWeight: 800, fontSize: "28px", color: "#1A1A1A", lineHeight: 1.4,
                    }}>
                      {opp} m²
                    </span>
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
                    <ChoiceRow key={w.label} label={w.label} imgSrc={w.img} selected={woning === w.label} onClick={() => { setWoning(w.label); setTimeout(next, 220); }} />
                  ))}
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "20px" }}>
                    Wat voor dakpannen liggen op je dak?
                  </h3>
                  {dakTypes.map(d => (
                    <ChoiceRow key={d} label={d} selected={dak === d} onClick={() => { setDak(d); setTimeout(next, 220); }} />
                  ))}
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "4px" }}>
                    Wil je jouw dak extra laten beschermen?
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
                    Vul jouw gegevens in voor jouw persoonlijke prijs
                  </h3>
                  <Field label="Naam" placeholder="Jouw volledige naam" value={form.naam} onChange={v => setForm(f => ({ ...f, naam: v }))} />
                  <Field label="Telefoon" placeholder="Jouw telefoonnummer" value={form.tel} onChange={v => setForm(f => ({ ...f, tel: v }))} type="tel" />
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
            </>
          )}
        </div>{/* einde stap content */}
            </div>{/* einde rechts */}
          </div>{/* einde flex row */}
        </div>{/* einde witte kaart */}
      </div>
    </section>
  );
}
