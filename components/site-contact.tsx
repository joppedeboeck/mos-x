"use client";

import { useState } from "react";
import { Phone, Star, Send } from "lucide-react";

export default function SiteContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: "", telefoon: "", email: "", adres: "", dienst: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{ background: "#1A1A1A", padding: "80px 0" }}>
      <div className="site-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: info */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.14em",
                color: "#9BCB6C",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Neem contact op
            </span>
            <h2
              className="font-bold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Vraag uw gratis dakdiagnose aan
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px" }}>
              Yannick inspecteert uw dak gratis met een professionele drone.
              U kijkt live mee op de tablet. Daarna weet u exact wat er speelt en wat het kost.
            </p>

            {/* Phone */}
            <a
              href="tel:+32468352869"
              className="flex items-center gap-3 mb-8"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(155,203,108,0.15)" }}
              >
                <Phone className="w-4 h-4" style={{ color: "#9BCB6C" }} />
              </div>
              <span
                className="font-bold"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "18px",
                  color: "#9BCB6C",
                }}
              >
                +32 468 35 28 69
              </span>
            </a>

            {/* Google review badge */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: "16px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F9A825" }} />
                  ))}
                </div>
                <p className="font-bold text-sm" style={{ fontFamily: "var(--font-montserrat)", color: "#1A1A1A" }}>
                  5.0 Google Reviews
                </p>
                <p className="text-xs" style={{ color: "#545454" }}>12 beoordelingen · uitstekend</p>
              </div>
              <div
                className="w-px self-stretch"
                style={{ background: "#E5E7EB", margin: "0 4px" }}
              />
              <div>
                <p className="text-xs font-semibold" style={{ color: "#545454" }}>Erkend door</p>
                <div
                  className="font-black text-white mt-1"
                  style={{
                    background: "#E8000D",
                    borderRadius: "4px",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontFamily: "var(--font-montserrat)",
                    display: "inline-block",
                  }}
                >
                  vtm
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "36px 32px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(155,203,108,0.15)" }}
                >
                  <Send className="w-6 h-6" style={{ color: "#9BCB6C" }} />
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "var(--font-montserrat)", fontSize: "20px", color: "#1A1A1A" }}
                >
                  Aanvraag verzonden!
                </h3>
                <p style={{ color: "#545454", fontSize: "15px" }}>
                  Yannick belt u terug binnen 1 werkdag.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3
                  className="font-bold mb-6"
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: "18px",
                    color: "#1A1A1A",
                  }}
                >
                  Gratis diagnose aanvragen
                </h3>

                {/* Row 1: Naam + Telefoon */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#545454" }}>
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="naam"
                      required
                      value={form.naam}
                      onChange={handleChange}
                      placeholder="Jan Janssen"
                      style={{
                        width: "100%",
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        fontSize: "14px",
                        color: "#1A1A1A",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#545454" }}>
                      Telefoon *
                    </label>
                    <input
                      type="tel"
                      name="telefoon"
                      required
                      value={form.telefoon}
                      onChange={handleChange}
                      placeholder="+32 4xx xx xx xx"
                      style={{
                        width: "100%",
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        fontSize: "14px",
                        color: "#1A1A1A",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Email + Adres */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#545454" }}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jan@email.be"
                      style={{
                        width: "100%",
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        fontSize: "14px",
                        color: "#1A1A1A",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#545454" }}>
                      Adres
                    </label>
                    <input
                      type="text"
                      name="adres"
                      value={form.adres}
                      onChange={handleChange}
                      placeholder="Kerkstraat 1, Gent"
                      style={{
                        width: "100%",
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        fontSize: "14px",
                        color: "#1A1A1A",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Dienst */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#545454" }}>
                    Gewenste dienst
                  </label>
                  <select
                    name="dienst"
                    value={form.dienst}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                      padding: "10px 12px",
                      fontSize: "14px",
                      color: form.dienst ? "#1A1A1A" : "#9CA3AF",
                      outline: "none",
                      background: "#FFFFFF",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Kies een dienst...</option>
                    <option value="reinigen">Dak reinigen</option>
                    <option value="coaten">Dak coaten</option>
                    <option value="abonnement">Dakabonnement</option>
                    <option value="weet_niet">Nog niet zeker</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full font-bold text-white"
                  style={{
                    background: "#9BCB6C",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px 20px",
                    fontSize: "15px",
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    cursor: "pointer",
                    transition: "background 200ms ease",
                    marginTop: "8px",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
                >
                  Gratis diagnose aanvragen &rarr;
                </button>

                <p className="text-center text-xs" style={{ color: "#9CA3AF" }}>
                  Yannick belt u terug binnen 1 werkdag. Geen verplichtingen.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
