"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Diensten",    href: "/diensten" },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Over ons",    href: "/over-ons" },
  { label: "Contact",     href: "/contact" },
];

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    boxShadow: scrolled
      ? "0 8px 32px rgba(0, 0, 0, 0.15)"
      : "0 4px 24px rgba(0, 0, 0, 0.10)",
  };

  return (
    <>
      {/* ── Floating glassmorphism navbar ── */}
      <header
        style={{
          position: "fixed",
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "auto",
          minWidth: "1000px",
          maxWidth: "1400px",
          transition: "all 0.3s ease",
        }}
      >
        <nav
          ref={navRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "56px",
            padding: "10px 32px",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            ...navStyle,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, marginRight: "24px" }}>
            <Image
              src="/images/logo.avif" alt="MOS-X"
              height={36} width={110}
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop center links */}
          <div className="hidden lg:flex items-center gap-7" style={{ flex: 1 }}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9BCB6C")}
                onMouseLeave={e => (e.currentTarget.style.color = "#1A1A1A")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+32468352869"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-montserrat)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1A1A1A",
                textDecoration: "none",
                transition: "color 150ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9BCB6C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#1A1A1A")}
            >
              <Phone style={{ width: "14px", height: "14px", color: "#9BCB6C", flexShrink: 0 }} />
              +32 468 35 28 69
            </a>
            <Link
              href="/contact"
              style={{
                background: "#9BCB6C",
                color: "#1A1A1A",
                borderRadius: "50px",
                padding: "8px 20px",
                fontSize: "13px",
                fontWeight: 700,
                fontFamily: "var(--font-montserrat)",
                textDecoration: "none",
                transition: "background 200ms ease",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#7AB54E")}
              onMouseLeave={e => (e.currentTarget.style.background = "#9BCB6C")}
            >
              Bereken uw richtprijs
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
        <div className="fixed inset-0 z-[1100] flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div
            className="relative ml-auto w-72 h-full flex flex-col p-6"
            style={{ background: "#111111", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center justify-between mb-8">
              <Image src="/images/logo.avif" alt="MOS-X" height={34} width={100}
                style={{ height: "34px", width: "auto", objectFit: "contain" }} />
              <button onClick={() => setMobileOpen(false)} className="p-1 rounded-lg"
                style={{ color: "#FFFFFF" }} aria-label="Menu sluiten">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {links.map(l => (
                <Link
                  key={l.href} href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-semibold"
                  style={{ fontFamily: "var(--font-montserrat)", color: "#FFFFFF", textDecoration: "none", opacity: 0.85 }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-3 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <a href="tel:+32468352869" className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#FFFFFF", opacity: 0.85 }}>
                <Phone className="w-4 h-4" style={{ color: "#9BCB6C" }} />
                +32 468 35 28 69
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full text-sm font-bold"
                style={{
                  background: "#9BCB6C", color: "#1A1A1A", borderRadius: "50px",
                  padding: "12px 20px", textDecoration: "none",
                  fontFamily: "var(--font-montserrat)",
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
