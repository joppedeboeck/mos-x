import { CheckCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  { label: "Eerlijk",      desc: "Yannick vertelt u wat uw dak nodig heeft. Niets meer, niets minder." },
  { label: "Transparant",  desc: "U ziet wat hij ziet, live via drone. Geen verborgen agenda." },
  { label: "Vakman",       desc: "200+ daken. Hij kent zijn stiel en werkt met de beste materialen." },
];

const stats = [
  { value: "200+",    label: "Daken gereinigd" },
  { value: "2 jr",    label: "Actief" },
  { value: "12",      label: "Reviews — 5 sterren" },
];

export default function SiteYannick() {
  return (
    <section className="site-pad" id="over-yannick" style={{ background: "#F7F8F6" }}>
      <div className="site-wrap">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left: photo mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {/* Large left — full height */}
              <div
                className="rounded-2xl overflow-hidden col-span-1 row-span-2"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src="/images/yannick-werk.png"
                  alt="Yannick aan het werk — dakreiniging MOS-X"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Top right — Voor */}
              <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/images/herentals-voor.png"
                  alt="Voor dakreiniging Herentals"
                  className="w-full h-full object-cover"
                />
                <span style={{
                  position: "absolute", bottom: "10px", left: "10px",
                  background: "rgba(26,26,26,0.85)", color: "#FFFFFF",
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
                  padding: "3px 8px", borderRadius: "4px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                }}>VOOR</span>
              </div>
              {/* Bottom right — Na */}
              <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/images/herentals-na.png"
                  alt="Na dakreiniging Herentals"
                  className="w-full h-full object-cover"
                />
                <span style={{
                  position: "absolute", bottom: "10px", left: "10px",
                  background: "#9BCB6C", color: "#1A1A1A",
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
                  padding: "3px 8px", borderRadius: "4px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                }}>NA</span>
              </div>
            </div>

            {/* Floating review badge */}
            <div
              className="absolute -bottom-4 -right-3 lg:-right-5 px-4 py-3 rounded-xl bg-white"
              style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">⭐</span>
                <div>
                  <p
                    className="font-black text-xs"
                    style={{ fontFamily: "var(--font-montserrat)", color: "#1A1A1A" }}
                  >
                    12 reviews
                  </p>
                  <p className="text-[10px]" style={{ color: "#545454" }}>100% uitstekend</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <span className="site-eyebrow mb-4">Wie is Yannick?</span>
            <h2
              className="font-bold leading-tight mb-6"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.02em",
                color: "#1A1A1A",
              }}
            >
              Geen anoniem bedrijf.{" "}
              <span style={{ color: "#9BCB6C" }}>Een vakman aan uw deur.</span>
            </h2>

            <div
              className="space-y-4 text-[0.9375rem] leading-relaxed mb-8"
              style={{ color: "#545454" }}
            >
              <p>
                Yannick startte MOS-X omdat hij zag hoe huiseigenaren keer op keer worden misleid:
                te hoge prijzen, onvolledige inspecties, en servicemensen die meer willen verkopen
                dan eerlijk adviseren.
              </p>
              <p>
                Zijn aanpak is anders. Hij komt altijd zelf, nooit onderaannemers. Hij inspecteert
                uw dak met zijn drone en toont u precies wat er speelt. En als er niets nodig is, zegt hij dat.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-3 mb-8">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{ background: "#FFFFFF", border: "1px solid #E5E7EB" }}
                >
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#9BCB6C" }} />
                  <div>
                    <p
                      className="font-bold text-sm mb-0.5"
                      style={{ fontFamily: "var(--font-montserrat)", color: "#1A1A1A" }}
                    >
                      {v.label}
                    </p>
                    <p className="text-xs" style={{ color: "#545454" }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                  <p
                    className="font-black mb-1"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "1.75rem",
                      lineHeight: 1,
                      color: "#9BCB6C",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs leading-tight" style={{ color: "#545454" }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="site-btn-primary">
                Maak kennis met Yannick <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+32468352869"
                className="inline-flex items-center gap-2"
                style={{
                  border: "1.5px solid #E5E7EB",
                  color: "#545454",
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  padding: "0.875rem 1.25rem",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                <Phone className="w-4 h-4" style={{ color: "#9BCB6C" }} />
                +32 468 35 28 69
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
