"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

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
  const [barVisible, setBarVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTop = barVisible ? BAR_H : 0;

  return (
    <>
      {/* ── Announcement bar ── */}
      {barVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: `${BAR_H}px`,
            background: "#9BCB6C",
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 48px",
          }}
        >
          <p style={{ color: "#fff", fontSize: "14px", fontWeight: 500, textAlign: "center", lineHeight: 1.3 }}>
            🌿 Lente 2026 = piekseizoen voor dakontmossing &mdash;{" "}
            <Link
              href="/contact"
              style={{ color: "#fff", textDecoration: "underline", fontWeight: 600 }}
            >
              Plan nu uw gratis dakdiagnose
            </Link>
          </p>
          <button
            onClick={() => setBarVisible(false)}
            aria-label="Sluit aankondiging"
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              lineHeight: 1,
              cursor: "pointer",
              padding: "4px 8px",
              opacity: 0.85,
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
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
          boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
          transition: "top 300ms ease, box-shadow 300ms ease",
        }}
      >
        <nav
          className="site-wrap flex items-center justify-between"
          style={{ height: "68px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.avif"
              alt="MOS-X"
              height={40}
              width={120}
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop center links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-semibold transition-colors"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  color: "#545454",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+32468352869"
              className="flex items-center gap-1.5 text-sm font-semibold"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                color: "#545454",
                textDecoration: "none",
              }}
            >
              <Phone className="w-3.5 h-3.5" style={{ color: "#9BCB6C" }} />
              +32 468 35 28 69
            </a>
            <Link
              href="/contact"
              style={{
                background: "#9BCB6C",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 20px",
                fontSize: "14px",
                fontWeight: 700,
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                textDecoration: "none",
                transition: "background 200ms ease",
                display: "inline-block",
                whiteSpace: "nowrap",
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
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="relative ml-auto w-72 h-full flex flex-col p-6"
            style={{ background: "#FFFFFF" }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/images/logo.avif"
                alt="MOS-X"
                height={34}
                width={100}
                style={{ height: "34px", width: "auto", objectFit: "contain" }}
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-lg"
                style={{ color: "#545454" }}
                aria-label="Menu sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 flex-1">
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-semibold transition-colors"
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    color: "#545454",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Mobile footer */}
            <div
              className="space-y-3 pt-6"
              style={{ borderTop: "1px solid #E5E7EB" }}
            >
              <a
                href="tel:+32468352869"
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#545454" }}
              >
                <Phone className="w-4 h-4" style={{ color: "#9BCB6C" }} />
                +32 468 35 28 69
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full text-sm font-bold"
                style={{
                  background: "#9BCB6C",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "12px 20px",
                  textDecoration: "none",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                }}
              >
                Gratis Diagnose
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
