"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const regioLinks = [
  { label: "Vlaams-Brabant",  href: "/regio/vlaams-brabant" },
  { label: "Oost-Vlaanderen", href: "/regio/oost-vlaanderen" },
  { label: "Antwerpen",       href: "/regio/antwerpen" },
  { label: "Limburg",         href: "/regio/limburg" },
];

const links = [
  { label: "Diensten",    href: "/diensten" },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Werkwijze",   href: "/#hoe-het-werkt" },
  { label: "Over ons",    href: "/over-ons" },
  { label: "FAQ",         href: "/faq" },
  { label: "Contact",     href: "/contact" },
];

const BAR_H = 44;

export default function SiteNav() {
  const [barVisible, setBarVisible]   = useState(true);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [regioOpen, setRegioOpen]     = useState(false);
  const [mobileRegioOpen, setMobileRegioOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openRegio  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setRegioOpen(true); };
  const closeRegio = () => { closeTimer.current = setTimeout(() => setRegioOpen(false), 120); };

  const navTop = barVisible ? BAR_H : 0;

  return (
    <>
      {/* ── Announcement bar ── */}
      {barVisible && (
        <div
          style={{
            position: "fixed", top: 0, left: 0, right: 0,
            height: `${BAR_H}px`,
            background: "#9BCB6C",
            zIndex: 60,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "0 48px",
          }}
        >
          <p style={{ color: "#fff", fontSize: "14px", fontWeight: 500, textAlign: "center", lineHeight: 1.3 }}>
            🏠 Actief in Vlaams-Brabant, Oost-Vlaanderen, Antwerpen &amp; Limburg &mdash;{" "}
            <Link href="/contact" style={{ color: "#fff", textDecoration: "underline", fontWeight: 600 }}>
              Vraag vandaag uw gratis dakdiagnose aan
            </Link>
          </p>
          <button
            onClick={() => setBarVisible(false)}
            aria-label="Sluit aankondiging"
            style={{
              position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", color: "#fff",
              fontSize: "20px", lineHeight: 1, cursor: "pointer", padding: "4px 8px", opacity: 0.85,
            }}
          >
            &times;
          </button>
        </div>
      )}

      {/* ── White navbar ── */}
      <header
        style={{
          position: "fixed",
          top: `${navTop}px`,
          left: 0, right: 0,
          zIndex: 50,
          background: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
          boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
          transition: "top 300ms ease, box-shadow 300ms ease",
        }}
      >
        <nav className="site-wrap flex items-center justify-between" style={{ height: "68px" }}>

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.avif" alt="MOS-X"
              height={40} width={120}
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop center links */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Diensten */}
            <Link href="/diensten" className="nav-link text-sm font-semibold transition-colors"
              style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}>
              Diensten
            </Link>

            {/* Realisaties */}
            <Link href="/realisaties" className="nav-link text-sm font-semibold transition-colors"
              style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}>
              Realisaties
            </Link>

            {/* Regio's dropdown */}
            <div
              className="relative"
              onMouseEnter={openRegio}
              onMouseLeave={closeRegio}
            >
              <button
                className="nav-link flex items-center gap-1 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer"
                style={{ fontFamily: "var(--font-montserrat)", color: "#545454", padding: 0 }}
              >
                Regio&apos;s
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform"
                  style={{ transform: regioOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {regioOpen && (
                <div
                  onMouseEnter={openRegio}
                  onMouseLeave={closeRegio}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "10px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    minWidth: "200px",
                    zIndex: 100,
                    overflow: "hidden",
                  }}
                >
                  {regioLinks.map(r => (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={() => setRegioOpen(false)}
                      className="block text-sm font-semibold transition-colors"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        color: "#545454",
                        textDecoration: "none",
                        padding: "12px 20px",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "#F7F8F6";
                        e.currentTarget.style.color = "#9BCB6C";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#545454";
                      }}
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Werkwijze */}
            <Link href="/#hoe-het-werkt" className="nav-link text-sm font-semibold transition-colors"
              style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}>
              Werkwijze
            </Link>

            {/* Over ons */}
            <Link href="/over-ons" className="nav-link text-sm font-semibold transition-colors"
              style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}>
              Over ons
            </Link>

            {/* FAQ */}
            <Link href="/faq" className="nav-link text-sm font-semibold transition-colors"
              style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}>
              FAQ
            </Link>

            {/* Contact */}
            <Link href="/contact" className="nav-link text-sm font-semibold transition-colors"
              style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}>
              Contact
            </Link>
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+32468352869"
              className="flex items-center gap-1.5 text-sm font-semibold"
              style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}
            >
              <Phone className="w-3.5 h-3.5" style={{ color: "#9BCB6C" }} />
              +32 468 35 28 69
            </a>
            <Link
              href="/contact"
              style={{
                background: "#9BCB6C", color: "#fff", borderRadius: "8px",
                padding: "9px 20px", fontSize: "14px", fontWeight: 700,
                fontFamily: "var(--font-montserrat)", textDecoration: "none",
                transition: "background 200ms ease", display: "inline-block", whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
              onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
            >
              Gratis Diagnose
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#1A1A1A" }}
            aria-label="Menu openen"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto w-72 h-full flex flex-col p-6 overflow-y-auto"
            style={{ background: "#FFFFFF" }}>

            <div className="flex items-center justify-between mb-8">
              <Image src="/images/logo.avif" alt="MOS-X" height={34} width={100}
                style={{ height: "34px", width: "auto", objectFit: "contain" }} />
              <button onClick={() => setMobileOpen(false)} className="p-1 rounded-lg"
                style={{ color: "#545454" }} aria-label="Menu sluiten">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {/* Regular links */}
              {[
                { label: "Diensten",    href: "/diensten" },
                { label: "Realisaties", href: "/realisaties" },
              ].map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-semibold"
                  style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}>
                  {l.label}
                </Link>
              ))}

              {/* Regio's accordion */}
              <button
                onClick={() => setMobileRegioOpen(v => !v)}
                className="px-3 py-3 rounded-lg text-sm font-semibold flex items-center justify-between w-full text-left"
                style={{ fontFamily: "var(--font-montserrat)", color: "#545454", background: "none", border: "none", cursor: "pointer" }}
              >
                Regio&apos;s
                <ChevronDown className="w-4 h-4" style={{ transform: mobileRegioOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease" }} />
              </button>
              {mobileRegioOpen && (
                <div className="ml-3 flex flex-col gap-1">
                  {regioLinks.map(r => (
                    <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)}
                      className="px-3 py-2 rounded-lg text-sm font-semibold"
                      style={{ fontFamily: "var(--font-montserrat)", color: "#9BCB6C", textDecoration: "none", background: "rgba(155,203,108,0.06)" }}>
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Rest of links */}
              {[
                { label: "Werkwijze",   href: "/#hoe-het-werkt" },
                { label: "Over ons",    href: "/over-ons" },
                { label: "FAQ",         href: "/faq" },
                { label: "Contact",     href: "/contact" },
              ].map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-semibold"
                  style={{ fontFamily: "var(--font-montserrat)", color: "#545454", textDecoration: "none" }}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-3 pt-6" style={{ borderTop: "1px solid #E5E7EB" }}>
              <a href="tel:+32468352869" className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#545454" }}>
                <Phone className="w-4 h-4" style={{ color: "#9BCB6C" }} />
                +32 468 35 28 69
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full text-sm font-bold"
                style={{
                  background: "#9BCB6C", color: "#fff", borderRadius: "8px",
                  padding: "12px 20px", textDecoration: "none",
                  fontFamily: "var(--font-montserrat)",
                }}>
                Gratis Diagnose
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
