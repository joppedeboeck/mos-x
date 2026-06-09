import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

const services = [
  {
    title: "Dak reinigen",
    img: "/images/dak-reinigen.webp",
    href: "/diensten/dakontmossing",
  },
  {
    title: "Dak coaten",
    img: "/images/dak-coaten.webp",
    href: "/diensten/dakcoating",
  },
  {
    title: "Dakabonnement",
    img: "/images/dakabonnement.webp",
    href: "/contact",
  },
];

export default function DienstenPage() {
  return (
    <PageLayout>
      {/* Hero — dark */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#1A1A1A" }}>
        <div className="site-wrap relative z-10">
          <p className="site-eyebrow mb-4">Onze diensten</p>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-3xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Professionele oplossingen
            <br />
            <span style={{ color: "#9BCB6C" }}>voor elk type dak.</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Elke opdracht start met een gratis drone-inspectie. Zo weet u exact wat uw dak nodig heeft, vóór u een beslissing neemt.
          </p>
        </div>
      </section>

      {/* Service cards — minimal */}
      <section className="site-pad" style={{ background: "#FFFFFF" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group flex flex-col service-card"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                {/* Photo with title overlay */}
                <div className="relative overflow-hidden" style={{ height: "240px" }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transition: "transform 400ms ease" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, rgba(26,26,26,0.08) 0%, rgba(26,26,26,0.70) 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <p
                      className="font-bold text-white text-xl leading-tight"
                      style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                    >
                      {s.title}
                    </p>
                  </div>
                </div>

                {/* Meer info button */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5" style={{ color: "#9BCB6C", fontSize: "14px", fontWeight: 600 }}>
                    Meer info
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="site-pad-sm" style={{ background: "#FFFFFF" }}>
        <div className="site-wrap">
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-10 rounded-2xl"
            style={{ background: "#1A1A1A" }}
          >
            <div className="flex-1 text-center lg:text-left">
              <p
                className="font-black text-white text-xl mb-2"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Twijfelt u welke oplossing bij uw dak past?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Yannick inspecteert uw dak gratis met een professionele drone en geeft u een eerlijk advies, zonder verkooppraatjes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/contact" className="site-btn-primary">
                Gratis advies aanvragen <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+32468352869" className="site-btn-outline-white">
                <Phone className="w-4 h-4" /> +32 468 35 28 69
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
