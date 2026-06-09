import { MapPin } from "lucide-react";

const provinces = [
  {
    name: "Antwerpen",
    cities: ["Antwerpen", "Mechelen", "Lier", "Grobbendonk", "Herentals", "Turnhout", "Mol"],
  },
  {
    name: "Vlaams-Brabant",
    cities: ["Leuven", "Aarschot", "Diest", "Tienen", "Halle", "Vilvoorde", "Tervuren"],
  },
];

export default function SiteWerkgebied() {
  return (
    <section className="site-pad" style={{ background: "#F7F8F6" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="site-eyebrow mb-4">Werkgebied</span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            Actief in Antwerpen en Vlaams-Brabant.
          </h2>
          <p style={{ color: "#545454", fontSize: "16px" }}>
            Yannick werkt uitsluitend zelf, zodat elke klant dezelfde kwaliteit en persoonlijke aanpak krijgt.
          </p>
        </div>

        {/* Province cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {provinces.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                padding: "28px 32px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(155,203,108,0.12)" }}
                >
                  <MapPin className="w-4 h-4" style={{ color: "#9BCB6C" }} />
                </div>
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: "18px",
                    color: "#1A1A1A",
                  }}
                >
                  {p.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.cities.map((c) => (
                  <span
                    key={c}
                    className="text-sm px-3 py-1 rounded-full"
                    style={{
                      background: "#F7F8F6",
                      color: "#545454",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    {c}
                  </span>
                ))}
                <span
                  className="text-sm px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(155,203,108,0.10)",
                    color: "#9BCB6C",
                    border: "1px solid rgba(155,203,108,0.25)",
                    fontWeight: 600,
                  }}
                >
                  + meer
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm mt-8" style={{ color: "#9CA3AF" }}>
          Staat uw gemeente er niet bij? Neem contact op — we kijken graag of een uitzondering mogelijk is.
        </p>
      </div>
    </section>
  );
}
