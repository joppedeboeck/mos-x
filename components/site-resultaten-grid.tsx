import Link from "next/link";
import { ArrowRight } from "lucide-react";

const photos = [
  { src: "/images/rood-dak-voor.jpg",       label: "VOOR", before: true,  caption: "Antimos coating, Rood dak" },
  { src: "/images/olen-voor.png",           label: "VOOR", before: true,  caption: "Dakreiniging en coating, Olen" },
  { src: "/images/herentals-voor.png",      label: "VOOR", before: true,  caption: "Dakreiniging, Herentals" },
  { src: "/images/rood-dak-na.jpg",         label: "NA",   before: false, caption: "Antimos coating, Rood dak" },
  { src: "/images/olen-na.png",             label: "NA",   before: false, caption: "Dakreiniging en coating, Olen" },
  { src: "/images/herentals-na.png",        label: "NA",   before: false, caption: "Dakreiniging, Herentals" },
];

export default function SiteResultatenGrid() {
  return (
    <section className="site-pad" style={{ background: "#F7F8F6" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="site-eyebrow mb-4">Voor &amp; Na</span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            Onze Resultaten Spreken Voor Zich
          </h2>
          <p style={{ color: "#545454", fontSize: "16px" }}>
            Echte opdrachten. Geen stockbeelden.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {photos.map((p, i) => (
            <div
              key={i}
              className="result-card relative overflow-hidden"
              style={{
                borderRadius: "12px",
                aspectRatio: "4/3",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={p.src}
                alt={p.caption}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "none" }}
                draggable={false}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)",
                }}
              />
              {/* Label badge */}
              <div
                className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold text-white"
                style={{
                  background: p.before ? "rgba(0,0,0,0.65)" : "#9BCB6C",
                  letterSpacing: "0.08em",
                }}
              >
                {p.label}
              </div>
              {/* Caption */}
              <p
                className="absolute bottom-3 left-3 text-white text-xs font-semibold"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                {p.caption}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/realisaties"
            className="inline-flex items-center gap-2 site-btn-green-outline"
            style={{
              border: "1.5px solid #9BCB6C",
              color: "#9BCB6C",
              background: "#FFFFFF",
              borderRadius: "8px",
              padding: "0.875rem 1.75rem",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
            }}
          >
            Bekijk alle realisaties <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
