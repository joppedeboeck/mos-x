"use client";

import Link from "next/link";
import Image from "next/image";

const label: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "#9BCB6C",
  marginBottom: "16px",
};

const muted: React.CSSProperties = {
  fontSize: "13px",
  color: "#9CA3AF",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  lineHeight: 1.6,
};

const white13: React.CSSProperties = {
  fontSize: "13px",
  color: "#FFFFFF",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  lineHeight: 1.6,
};

const navLink: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  color: "#FFFFFF",
  textDecoration: "none",
  lineHeight: 2,
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  transition: "color 150ms ease",
};

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={navLink}
      onMouseEnter={e => (e.currentTarget.style.color = "#9BCB6C")}
      onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
    >
      {children}
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <footer style={{ background: "#1A1A1A" }}>

      {/* ── Top section ── */}
      <div
        className="mx-auto px-6 lg:px-8"
        style={{ maxWidth: "1280px", paddingTop: "72px" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
          style={{ gap: "40px" }}
        >

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col" style={{ gap: "0" }}>
            {/* Logo */}
            <Link href="/" className="inline-block" style={{ marginBottom: "12px" }}>
              <Image
                src="/images/logo.avif"
                alt="MOS-X"
                width={120} height={40}
                style={{ height: "40px", width: "auto", objectFit: "contain" }}
              />
            </Link>

            {/* Tagline */}
            <p style={{ ...muted, marginBottom: "20px" }}>
              Dakspecialist in Vlaams-Brabant, Oost-Vlaanderen, Antwerpen en Limburg.
            </p>

            {/* BTW + address */}
            <p style={muted}>BTW: BE 0805.594.502</p>
            <p style={{ ...muted, marginBottom: "20px" }}>Bovenpad 100, 2280 Grobbendonk</p>

            {/* Openingsuren */}
            <span style={{ ...label, marginBottom: "8px" }}>Openingsuren</span>
            <p style={white13}>Ma – Za: 08:00 – 17:00</p>
            <p style={{ ...muted, marginBottom: "20px" }}>Zo: Gesloten</p>

            {/* Contact */}
            <span style={{ ...label, marginBottom: "8px" }}>Contact</span>
            <a
              href="tel:+32468352869"
              style={{ ...white13, textDecoration: "none", transition: "color 150ms ease" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9BCB6C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
            >
              +32 468 35 28 69
            </a>
            <a
              href="mailto:info@mos-x.be"
              style={{ ...white13, textDecoration: "none", transition: "color 150ms ease", marginBottom: "16px" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9BCB6C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
            >
              info@mos-x.be
            </a>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "14px", marginTop: "4px" }}>
              <a
                href="#"
                aria-label="Instagram"
                style={{ color: "#FFFFFF", transition: "color 150ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9BCB6C")}
                onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                style={{ color: "#FFFFFF", transition: "color 150ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9BCB6C")}
                onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Diensten */}
          <div>
            <span style={label}>Diensten</span>
            <FLink href="/diensten/dakontmossing">Dak reinigen</FLink>
            <FLink href="/diensten/dakcoating">Dak coaten</FLink>
            <FLink href="/contact">Dakabonnement</FLink>
          </div>

          {/* Col 3 — Regio's */}
          <div>
            <span style={label}>Regio&apos;s</span>
            <FLink href="/regio/vlaams-brabant">Vlaams-Brabant</FLink>
            <FLink href="/regio/oost-vlaanderen">Oost-Vlaanderen</FLink>
            <FLink href="/regio/antwerpen">Antwerpen</FLink>
            <FLink href="/regio/limburg">Limburg</FLink>
          </div>

          {/* Col 4 — Navigatie */}
          <div>
            <span style={label}>Navigatie</span>
            <FLink href="/">Home</FLink>
            <FLink href="/realisaties">Realisaties</FLink>
            <FLink href="/over-ons">Over ons</FLink>
            <FLink href="/contact">Contact</FLink>
            <FLink href="/faq">FAQ</FLink>
          </div>

          {/* Col 5 — CTA */}
          <div>
            <a
              href="https://v0-dak-calculator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                background: "#9BCB6C",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
                borderRadius: "8px",
                padding: "14px 24px",
                transition: "background 150ms ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
              onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
            >
              Bereken uw richtprijs
            </a>
          </div>

        </div>

        {/* Separator */}
        <div style={{ borderTop: "1px solid #2A2A2A", marginTop: "48px" }} />
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="mx-auto px-6 lg:px-8"
        style={{ maxWidth: "1280px", paddingTop: "24px", paddingBottom: "32px" }}
      >
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ fontSize: "12px", color: "#4A5568", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          <span>&copy; 2026 MOS-X. Alle rechten voorbehouden.</span>
          <span className="flex gap-4">
            {(["Privacybeleid", "Algemene voorwaarden"] as const).map(l => (
              <Link
                key={l}
                href="#"
                style={{ color: "#4A5568", textDecoration: "none", transition: "color 150ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9BCB6C")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4A5568")}
              >
                {l}
              </Link>
            ))}
          </span>
        </div>
      </div>

    </footer>
  );
}
