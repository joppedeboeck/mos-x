import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer style={{ background: "#1A1A1A" }}>
      {/* Top accent line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(155,203,108,0.35) 50%, transparent 100%)" }} />

      {/* Main grid */}
      <div className="site-wrap" style={{ paddingTop: "72px", paddingBottom: "56px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo.avif"
                alt="MOS-X"
                height={38}
                width={115}
                style={{ height: "38px", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.40)", lineHeight: "1.65", marginBottom: "20px" }}>
              Dakspecialist in Antwerpen en Vlaams-Brabant.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href="tel:+32468352869"
                className="footer-muted-link"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.50)", textDecoration: "none" }}
              >
                +32 468 35 28 69
              </a>
              <a
                href="mailto:info@mos-x.be"
                className="footer-muted-link"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.50)", textDecoration: "none" }}
              >
                info@mos-x.be
              </a>
            </div>
          </div>

          {/* Col 2 — Diensten */}
          <div>
            <p style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "#9BCB6C", marginBottom: "20px",
            }}>
              Diensten
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                { label: "Dak reinigen",  href: "/diensten/dakontmossing" },
                { label: "Dak coaten",    href: "/diensten/dakcoating" },
                { label: "Dakabonnement", href: "/contact" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link" style={{ fontSize: "14px", color: "#FFFFFF", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navigatie */}
          <div>
            <p style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "#9BCB6C", marginBottom: "20px",
            }}>
              Navigatie
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                { label: "Home",        href: "/" },
                { label: "Realisaties", href: "/realisaties" },
                { label: "Werkwijze",   href: "/#hoe-het-werkt" },
                { label: "Over ons",    href: "/over-ons" },
                { label: "Contact",     href: "/contact" },
                { label: "FAQ",         href: "/faq" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link" style={{ fontSize: "14px", color: "#FFFFFF", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="site-wrap" style={{ paddingBottom: "32px" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            style={{ fontSize: "12px", color: "rgba(255,255,255,0.30)" }}
          >
            <span>Bovenpad 100, 2280 Grobbendonk &nbsp;&middot;&nbsp; BTW: BE 0805.594.502 &nbsp;&middot;&nbsp; info@mos-x.be &nbsp;&middot;&nbsp; +32 468 35 28 69</span>
            <span className="md:text-center">&copy; 2026 MOS-X. Alle rechten voorbehouden.</span>
            <span className="flex gap-4 md:justify-end">
              {["Privacybeleid", "Algemene voorwaarden"].map(l => (
                <Link key={l} href="#" className="footer-muted-link" style={{ color: "rgba(255,255,255,0.30)", textDecoration: "none" }}>
                  {l}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
